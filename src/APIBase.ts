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

    constructor(config?: MeshConfig) {
        this.config = extend(true, this.config, config);
    }

    protected log(message: Object) {
        console.log(`[${ (new Date()).toISOString() }] ${message}`);
    }

    public request(method: string, path: string, query?: any, data?: any): Promise<Object> {
        let reqPath = this.config.apibase + path;

        this.log(`${method} ${reqPath}`);

        let postData = (data) ? JSON.stringify(data) : null;
        // TODO handle webroot & direct access to binary nodes
        // TODO handle linkresolver endpoint
        // TODO eventbus bridge  
        let headers = {
            "Accept": "application/json"
        };
        if (method === "post" || method === "put") {
            headers["Content-Type"] = "application/json;charset=UTF-8";
            headers["Content-Length"] = postData.length;
        }
        let reqOptions: http.RequestOptions = {
            method: method.toUpperCase(),
            host: this.config.host,
            port: this.config.port,
            path: reqPath,
            auth: `${this.config.username}:${this.config.password}`,
            headers: headers
        };

        return new Promise<Object>((resolve, reject) => {
            let req = http.request(reqOptions, (res) => {
                let response = "";
                res.on("data", (chunk) => {
                    response += chunk;
                });
                res.on("end", () => {
                    console.log("end");
                    if (res.statusCode >= 200 && res.statusCode < 300) {
                        resolve(JSON.parse(response));
                    } else {
                        reject(new Error("Request failed with status code " + res.statusCode));
                    }
                });
                res.on("error", (e) => {
                    reject(e);
                });
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
