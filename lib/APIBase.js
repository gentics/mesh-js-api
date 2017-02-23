"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const extend = require("extend");
const request = require("request");
class APIBase {
    constructor(config) {
        this.config = {
            url: "http://localhost:8080/api/v1",
            debug: false
        };
        this.config = extend(true, this.config, config);
    }
    debug(message) {
        if (this.config.debug)
            this.log(message);
    }
    log(message) {
        console.log(`[${(new Date()).toISOString()}] ${message}`);
    }
    get(path, query, token) {
        return this.request("GET", path, "", query, token);
    }
    post(path, data, query, token) {
        return this.request("POST", path, data, query, token);
    }
    delete(path, token) {
        return this.request("DELETE", path, undefined, undefined, token);
    }
    updateSessionToken(headers) {
        if (!headers)
            return;
        headers.forEach(cookie => {
            if (cookie.indexOf("mesh.token") === 0) {
                this.token = cookie.replace("mesh.token=", "");
            }
        });
    }
    request(method, path, data, query, token) {
        // TODO handle webroot & direct access to binary nodes
        // TODO handle linkresolver endpoint
        // TODO eventbus bridge  
        let headers = {};
        if (token || this.token) {
            token = token || this.token;
            headers["Cookie"] = `mesh.token=${token}`;
        }
        let reqOptions = {
            url: this.config.url + path,
            method: method,
            headers: headers,
            qs: query,
            body: data,
            json: true,
            encoding: null // enables us to deliver binaries
        };
        let timer;
        return new Promise((resolve, reject) => {
            request(reqOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    this.debug(`${method} ${this.config.url}${path} ${Date.now() - timer}ms`);
                    if (response.statusCode >= 200 && response.statusCode < 300) {
                        this.updateSessionToken(response.headers["set-cookie"]);
                        resolve(body);
                    }
                    else {
                        reject(body);
                    }
                }
            });
            timer = Date.now();
        });
    }
}
exports.APIBase = APIBase;
//# sourceMappingURL=APIBase.js.map