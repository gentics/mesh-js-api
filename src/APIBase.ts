import * as extend from "extend";
import * as http from "http";
import * as querystring from "querystring";
import * as request from "request";

export interface MeshConfig {
    url?: string;
    apibase?: string;
    debug?: boolean;
}

export class APIBase {
    config: MeshConfig = {
        url: "http://localhost:8080",
        apibase: "/api/v1",
        debug: true
    };

    // mesh authentication token
    token: string;

    constructor(config?: MeshConfig) {
        this.config = extend(true, this.config, config);
    }

    protected debug(message: string) {
        if (this.config.debug) this.log(message);
    }

    protected log(message: string) {
        console.log(`[${ (new Date()).toISOString() }] ${message}`);
    }

    public get(path: string, query?: any, token?: string): Promise<Object> {
        return this.request("GET", path, "", query, token);
    }

    public post(path: string, data?: any, query?: any, token?: string): Promise<Object> {
        return this.request("POST", path, data, query, token);
    }

    public delete(path: string, token?: string): Promise<Object> {
        return this.request("DELETE", path, undefined, undefined, token);
    }

    private updateSessionToken(headers: string[]) {
        if (!headers) return;
        headers.forEach(cookie => {
            if (cookie.indexOf("mesh.token") === 0) {
                this.token = cookie.replace("mesh.token=", "");
            }
        });
    }

    private request(method: string, path: string, data?: any, query?: any, token?: string): Promise<any> {
        let reqPath = this.config.apibase + path;
        // TODO handle webroot & direct access to binary nodes
        // TODO handle linkresolver endpoint
        // TODO eventbus bridge  
        let headers = {};
        if (token || this.token) {
            token = token || this.token;
            headers["Cookie"] = `mesh.token=${token}`;
        }
        let reqOptions : request.OptionsWithUrl = {
            url: this.config.url + reqPath,
            method: method,
            headers: headers,
            qs: query,
            body: data,
            json: true,
            encoding: null // enables us to deliver binaries
        };
        let timer: number;
        return new Promise<any>((resolve, reject) => {
            request(reqOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    this.log(`${method} ${this.config.url}${reqPath} ${Date.now() - timer}ms`);
                    if (response.statusCode >= 200 && response.statusCode < 300) {
                        this.updateSessionToken(response.headers["set-cookie"]);
                        resolve(body);
                    } else {
                        reject(body);
                    }
                }
            })
            timer = Date.now();
        });
    }
}
