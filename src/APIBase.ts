import * as extend from "extend";
import * as http from "http";
import * as querystring from "querystring";

export interface MeshConfig {
    username?: string;
    password?: string;
    host?: string;
    port?: number;
    apibase?: string;
    debug?: boolean;
}

export class APIBase {
    config: MeshConfig = {
        username: "admin",
        password: "admin",
        host: "localhost",
        port: 8080,
        apibase: "/api/v1",
        debug: false
    };

    // authentication cookie
    cookie: string;

    requestCounter: number = -1;

    constructor(config?: MeshConfig) {
        this.config = extend(true, this.config, config);
    }

    protected debug(message: string) {
        if (this.config.debug) this.log(message);
    }

    protected log(message: string) {
        console.log(`[${ (new Date()).toISOString() }] ${message}`);
    }

    public get(path: string, query?: any): Promise<Object> {
        return this.request("GET", path, "", query);
    }

    public post(path: string, data?: any, query?: any): Promise<Object> {
        return this.request("POST", path, data, query);
    }

    public delete(path: string): Promise<Object> {
        return this.request("DELETE", path);
    }

    public login(): Promise<Object> {
        return this.request("GET", "/auth/login");
    }

    private async request(method: string, path: string, data?: any, query?: any): Promise<Object> {
        method = method.toUpperCase();
        if (!this.cookie && path !== "/auth/login") {
            await this.login();
        }
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
        if (this.cookie) headers["Cookie"] = this.cookie;
        if (method === "POST" || method === "PUT") {
            headers["Content-Type"] = "application/json;charset=UTF-8";
            headers["Content-Length"] = postData.length;
        }
        let reqOptions: http.RequestOptions = {
            method: method,
            host: this.config.host,
            port: this.config.port,
            path: reqPath,
            headers: headers
        };
        if (!this.cookie) reqOptions.auth = `${this.config.username}:${this.config.password}`;       
        this.requestCounter++; 
        this.log(`${method} #${this.requestCounter} http://${this.config.host}:${this.config.port}${reqPath}`);
        this.debug(JSON.stringify(headers));

        return new Promise<Object>((resolve, reject) => {
            let reqStartTime = new Date().getTime();
            let req = http.request(reqOptions, (res) => {
                let response = "";
                res.on("data", (chunk) => {
                    response += chunk;
                });
                res.on("end", () => {
                    this.debug(`Request #${this.requestCounter} completed in ${(new Date().getTime() - reqStartTime)} ms`);
                    if (res.headers["set-cookie"]) {
                        this.cookie = res.headers["set-cookie"][0];
                    }
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
        });
    }
}
