import {HTTPResource, HTTPMethod, HTTP_RESOURCE_TYPE} from "./httpresources";

namespace ResponseTypeStore {
    let store: { [responseType: string]: any } = {};
    export function push(responseType: string, response: string) {
        store[responseType] = response ? JSON.parse(response) : {};
    }

    export function render(): string {
        return Object.keys(store).map(k => Templates.responseType(k, store[k])).join("\n");
    }
}

namespace Templates {
    export function main (resources: HTTPResource[], version: string) {
        return `import {APIBase} from "../APIBase";
    export class MeshAPI extends APIBase {
        version = '${ version }';
        api = { ${ resources.map(resource).join(",\n") } }
    }
`;
    }
    
    function resource (httpResource: HTTPResource) {
        let header = `/**
    * Resource ${ httpResource.URI }
    * ${ httpResource.description }
    */`;
        
        switch (httpResource.type) {
            case HTTP_RESOURCE_TYPE.PATH:
            return `${ header } 
    ${ httpResource.propName }: {
    ${ httpResource.methods ? httpResource.methods.map(method).join(",\n") + "," : "" }
    ${ httpResource.resources ? httpResource.resources.map(resource).join(",\n") : ""}
    }
    // -- end resource ${ httpResource.name } -- 
    `;
            case HTTP_RESOURCE_TYPE.PARAM:
            return `${ header } 
    ${ httpResource.propName }: (${ httpResource.propName }: string) => {
        return {
    ${ httpResource.methods ? httpResource.methods.map(method).join(",\n") + "," : "" }
    ${ httpResource.resources ? httpResource.resources.map(resource).join(",\n") : ""}
        };
    }
    // -- end resource ${ httpResource.name } -- 
    `;
            default:
                throw new Error(`Invalid resource type {${httpResource.type}}`);
        }
    }

    function method (method: HTTPMethod): string {
        ResponseTypeStore.push(method.responseType, method.example);
        let str = `    /**
     * Method ${ method.method }
     * ${ method.description }
     * Example
     * ${ method.example ? method.example.replace(/\n/g, "\n     * ") : "" }
     */\n`;
        switch (method.method) {
            case "get":
                str += `get: (query?: any, token?: string):Promise<${ method.responseType }> => {
                    return this.get(\`${ method.URI.replace(/[{]/g, "${") }\`, query, token); }`;
                break;
            case "post":
                str += `post: (data?: any, query?: any, token?: string):Promise<${ method.responseType }> => {
                    return this.post(\`${ method.URI.replace(/[{]/g, "${") }\`, data, query, token); }`;
                break;
            case "delete":
                str += `delete: (token?: string):Promise<${ method.responseType }> => {
                    return this.delete(\`${ method.URI.replace(/[{]/g, "${") }\`, token); }`;
                break;
            default:
                throw new Error(`Method "${method.method}" is not implemented.`);
        }
        return str;
    }

    export function responseType (responseTypeName: string, responseTypeDefinition: any): string {
        return `export interface ${ responseTypeName } { ${ deepRenderResponseType(responseTypeDefinition) } }`;
    }

    function deepRenderResponseType (responseType: any): string {
        return Object.keys(responseType).map(k => {
            if (k === "fields") {
                return `"${ k }": any`;
            } else if (Array.isArray(responseType[k]) && typeof responseType[k][0] === "string") {
                return `"${ k }": string[]`;
            } else if (Array.isArray(responseType[k]) && typeof responseType[k][0] === "object") {
                return `"${ k }": { ${ deepRenderResponseType(responseType[k][0]) } }[]`;
            } else if (typeof responseType[k] === "object") {
                return `"${ k }": { ${ deepRenderResponseType(responseType[k]) } }`;
            } else {
                return `"${ k }": ${ typeof responseType[k] }`;
            }
        }).join("\n");
    }
}
/**
 * render http resources into client
 */
export function render (resources: HTTPResource[], version: string): string {
    return Templates.main(resources, version)
        + ResponseTypeStore.render();
}
