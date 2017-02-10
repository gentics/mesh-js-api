export interface MeshConfig {
    url?: string;
    debug?: boolean;
}
export declare class APIBase {
    config: MeshConfig;
    token: string;
    constructor(config?: MeshConfig);
    protected debug(message: string): void;
    protected log(message: string): void;
    get(path: string, query?: any, token?: string): Promise<Object>;
    post(path: string, data?: any, query?: any, token?: string): Promise<Object>;
    delete(path: string, token?: string): Promise<Object>;
    private updateSessionToken(headers);
    private request(method, path, data?, query?, token?);
}
