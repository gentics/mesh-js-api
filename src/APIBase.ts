import * as extend from "extend";
import * as http from "http";
import * as querystring from "querystring";

export interface MeshConfig {
    host?: string;
    port?: number;
    apibase?: string;
    debug?: boolean;
}

export class APIBase {
    config: MeshConfig = {
        host: "localhost",
        port: 8080,
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
        return this.request("DELETE", path, token);
    }

    private updateSessionToken(headers: string[]) {
        if (!headers) return;
        headers.forEach(cookie => {
            if (cookie.indexOf("mesh.token") === 0) {
                this.token = cookie.split('"')[1]
            }
        });
    }

    private request(method: string, path: string, data?: any, query?: any, token?: string): Promise<Object> {
        method = method.toUpperCase();
        let reqPath = this.config.apibase + path;
        if (query) {
            reqPath += "?" + querystring.stringify(query);
        }
        let postData = (data) ? JSON.stringify(data) : null;
        // TODO handle webroot & direct access to binary nodes
        // TODO handle linkresolver endpoint
        // TODO eventbus bridge  
        let headers = {};
        headers["Accept"] = "application/json";
        if (token || this.token) {
            token = token || this.token;
            headers["Cookie"] = `mesh.token=${token}`;
        }
        if (method === "POST" || method === "PUT") {
            headers["Content-Type"] = "application/json;charset=UTF-8";
            headers["Content-Length"] = postData.length || 0;
        }
        let reqOptions: http.RequestOptions = {
            method: method,
            host: this.config.host,
            port: this.config.port,
            path: reqPath,
            headers: headers
        };
        let timer: number;
        return new Promise<Object>((resolve, reject) => {
            let req = http.request(reqOptions, (res) => {
                let response = "";
                this.log(`${method} http://${this.config.host}:${this.config.port}${reqPath} ${Date.now() - timer}ms`);
                res.on("data", (chunk) => {
                    response += chunk;
                });
                res.on("end", () => {
                    this.updateSessionToken(res.headers["set-cookie"]);
                    if (res.statusCode >= 200 && res.statusCode < 300) {
                        resolve(JSON.parse(response));
                    } else {
                        let err = `Request failed.
Path: ${reqPath}
Status: ${res.statusCode} ${res.statusMessage}
Body:
${response}
`;
                        reject(new Error(err));
                    }
                });
                res.on("error", reject);
            });

            if (method === "POST" || method === "POST") {
                req.write(postData, () => {
                    req.end();
                });
            } else {
                req.end();
            }
            timer = Date.now();
        });
    }
}
