import * as extend from "extend";
import * as http from "http";

export interface MeshConfig {
    username?: string;
    password?: string;
    host?: string;
    port?: number;
    apibase?: string;
}

export class APIBase {
    config: MeshConfig = {
        username: "admin",
        password: "admin",
        host: "localhost",
        port: 8080,
        apibase: "/api/v1"
    };

    // authentication cookie
    cookie: string;

    constructor(config?: MeshConfig) {
        this.config = extend(true, this.config, config);
    }

    protected log(message: Object) {
        console.log(`[${ (new Date()).toISOString() }] ${message}`);
    }

    public get(path: string, query?: string): Promise<Object> {
        return this.request("get", path, query);
    }

    public post(path: string, data?: any, query?: string): Promise<Object> {
        return this.request("post", path, data, query);
    }

    public delete(path: string): Promise<Object> {
        return this.request("delete", path);
    }

    public login(): Promise<Object> {
        this.log("authentication");
        return this.request("get", "/auth/login");
    }

    private async request(method: string, path: string, data?: any, query?: any): Promise<Object> {
        if (!this.cookie && path !== "/auth/login") {
            await this.login();
        }
        let reqPath = this.config.apibase + path;
        let postData = (data) ? JSON.stringify(data) : null;
        // TODO handle webroot & direct access to binary nodes
        // TODO handle linkresolver endpoint
        // TODO eventbus bridge  
        let headers = {};
        headers["Accept"] = "application/json";
        if (this.cookie) headers["Cookie"] = this.cookie;
        if (method.toLowerCase() === "post" || method.toLowerCase() === "put") {
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

        this.log(`${method} ${reqPath}`);

        return new Promise<Object>((resolve, reject) => {
            let req = http.request(reqOptions, (res) => {
                let response = "";
                res.on("data", (chunk) => {
                    response += chunk;
                });
                res.on("end", () => {
                    if (res.headers["set-cookie"]) {
                        this.cookie = res.headers["set-cookie"];
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
            if (method === "POST" || method === "PUT") {
                req.write(postData, () => {
                    req.end();
                });
            } else {
                req.end();
            }
        });
    }
}
