/**
 * raml interface, as it was not provided in raml-1-parser definitions
 */
export interface RAMLResourceSpec {
    relativeUri: string
    resources?: Array<RAMLResourceSpec>
    methods?: Array<RAMLMethodSpec>
    description?: string
}

export interface RAMLMethodSpec {
    method: string
    description: string
    // responses.200.body.application/json.example
    responses: {
        [responseCode: string]: {
            body: {
                [mimeType: string]: {
                    example: string
                }
            }
        }
    }
}

/**
 * represents an HTTP method
 */
export class HTTPMethod {
    method: string
    responseType: string
    description: string
    example: string
    URI: string

    constructor(method: RAMLMethodSpec, URI: string) {
        this.method = method.method;
        this.description = method.description;
        this.URI = URI;
        let uriParts = URI
            // remove parameter parts of the uri /nodes/{nodeUuid}/tags/ => /nodes//tags/ 
            .replace(/[{}]/g, "")
            // remove duplicate slashes /nodes//tags/ => /nodes/tags/
            .replace(/\/{2,}/g, "/")
            // remove start end end slashes /nodes/tags/ => nodes/tags
            .replace(/^\/(.+)\/$/, "$1")
            .split("/");
        let camelCaseUri = "";
        for (let p of uriParts) {
            camelCaseUri += this.toFirstUpperCase(p);
        }
        this.responseType = 
            camelCaseUri +
            this.toFirstUpperCase(method.method) +
            "Response";
        this.example = this.extractExample(method);
    };

    protected extractExample(method: RAMLMethodSpec): string {
        // responses.200.body.application/json.example
        for (let responseCode in method.responses) {
            for (let mimeType in method.responses[responseCode].body ) {
                return method.responses[responseCode].body[mimeType].example
            }
        }
    }

    protected toFirstUpperCase(s: string): string {
        if (!s) return "";
        return s[0].toUpperCase() + s.substr(1);
    }
}

export enum HTTP_RESOURCE_TYPE {
    /**
     * represents a resource path like /api/v1/users
     */
    PATH,
    /**
     * represents a resource path parameter like /api/v1/users/{userUuid}
     */
    PARAM
}

/**
 * represents an HTTP Resource like /users
 */
export class HTTPResource {
    /**
     * the resource name as extracted from the URL segment
     */
    name: string;
    /**
     * clean version of name, ready to use as a JS property
     */
    propName: string;
    /**
     * resource description
     */
    description: string;
    /**
     * array of available HTTP methods
     */
    methods: Array<HTTPMethod>;
    /**
     * array of contained subresources
     */
    resources: Array<HTTPResource> = [];
    /**
     * type of the resource
     */
    type: HTTP_RESOURCE_TYPE;
    /**
     * relative resource URI 
     */
    URI: string;


    constructor(ramlSpec: RAMLResourceSpec, parentURI: string) {
        this.name = this.uriToName(ramlSpec.relativeUri);
        this.propName = this.toPropName(this.name);
        this.description = ramlSpec.description || "";
        this.type = this.name.indexOf("{") === -1 ? HTTP_RESOURCE_TYPE.PATH : HTTP_RESOURCE_TYPE.PARAM;
        this.URI = (parentURI + "/" + this.name).replace("//", "/");

        console.log(`resource ${this.name} [${this.URI}]`);
        if (ramlSpec.resources) this.addSubresources(ramlSpec.resources);
        this.addMethods(ramlSpec);
    }

    protected uriToName(uri: string): string {
        let pathSegments = uri.split("/");
        return pathSegments[pathSegments.length - 1];
    }

    protected toPropName(name: string): string {
        return name.replace(/[{}]/g, "");
    }

    /**
     * add methods found directly on the resource and also deep inspect subresources
     * to find methods specified for "/"-resources
     */
    protected addMethods(ramlSpec: RAMLResourceSpec) {
        // first add methods directly defined for this resource
        if (ramlSpec.methods) {
            for (let m of ramlSpec.methods) {
                this.addMethod(new HTTPMethod(m, this.URI));
            }
        }
        // next add methods defined for the "/" subresource
        if (ramlSpec.resources) {
            for (let r of ramlSpec.resources) {
                if (r.relativeUri === "/") {
                    this.addMethods(r);
                }
            }
        }
    }

    /**
     * add a single HTTPMethod
     */
    protected addMethod(method: HTTPMethod) {
        if (!this.methods) this.methods = [];
        this.methods.push(method);
    }

    /**
     * creates all subresources
     */
    protected addSubresources(ramlResources: Array<RAMLResourceSpec>) {
        if (!this.resources) this.resources = [];
        ramlResources.forEach((ramlSpec) => {
            if (ramlSpec.relativeUri !== "/") {
                this.addSubresource(ramlSpec);
            }
        });
    }

    /**
     * adds a single subresource
     */
    protected addSubresource(ramlSpec: RAMLResourceSpec) {
        let pathSegments = ramlSpec.relativeUri.split("/");
        let resource: HTTPResource;
        let parentResource: HTTPResource = this;
        console.log("expanding path " + ramlSpec.relativeUri);
        pathSegments.forEach((pathSegment, i) => {
            if (pathSegment === "") return;
            resource = this.resolve(pathSegment, parentResource);
            if (!resource) {
                if (i === pathSegments.length - 1) {
                    // we've arrived at the end of the path and can now pass the real
                    // RAML spec
                    console.log(`   path end ${pathSegment}`);
                    resource = new HTTPResource(ramlSpec, parentResource.URI);
                } else {
                    // because we're generating resources that are not explicitly mentioned 
                    // in the spec, when breaking up paths documented as a whole
                    // like /{projectName}/nodes/{uuid}/fields
                    // we have to make up a RAMLResource spec on the fly
                    console.log(`   path step ${pathSegment} AUTOCREATE`);
                    resource = new HTTPResource({ relativeUri: "/" + pathSegment }, parentResource.URI);
                }
                parentResource.resources.push(resource);
            } else {
                // we were able to resolve a resource, so now we can attach methods
                if (i === pathSegments.length - 1) {
                    resource.addMethods(ramlSpec);
                }
            }
            parentResource = resource;
        });
    }

    /**
     * resovle an uri path on a HTTPResource and return the resolved resource
    */
    resolve(pathSegment: string, resource: HTTPResource): HTTPResource {
        for (let i = 0; i < resource.resources.length; i++) {
            if (resource.resources[i].name === pathSegment) return resource.resources[i];
        }
        return null;
    }
}