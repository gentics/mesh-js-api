import { APIBase } from "../APIBase";
export declare class MeshAPI extends APIBase {
    version: string;
    api: {
        users: {
            post: (data?: any, query?: any, token?: string) => Promise<UsersPostResponse>;
            get: (query?: any, token?: string) => Promise<UsersGetResponse>;
            userUuid: (userUuid: string) => {
                post: (data?: any, query?: any, token?: string) => Promise<UsersUserUuidPostResponse>;
                get: (query?: any, token?: string) => Promise<UsersUserUuidGetResponse>;
                delete: (token?: string) => Promise<UsersUserUuidDeleteResponse>;
                permissions: {
                    path: (path: string) => {
                        get: (query?: any, token?: string) => Promise<UsersUserUuidPermissionsPathGetResponse>;
                    };
                };
                token: {
                    get: (query?: any, token?: string) => Promise<UsersUserUuidTokenGetResponse>;
                };
            };
        };
        roles: {
            post: (data?: any, query?: any, token?: string) => Promise<RolesPostResponse>;
            get: (query?: any, token?: string) => Promise<RolesGetResponse>;
            roleUuid: (roleUuid: string) => {
                get: (query?: any, token?: string) => Promise<RolesRoleUuidGetResponse>;
                post: (data?: any, query?: any, token?: string) => Promise<RolesRoleUuidPostResponse>;
                delete: (token?: string) => Promise<RolesRoleUuidDeleteResponse>;
                permissions: {
                    pathToElement: (pathToElement: string) => {
                        post: (data?: any, query?: any, token?: string) => Promise<RolesRoleUuidPermissionsPathToElementPostResponse>;
                        get: (query?: any, token?: string) => Promise<RolesRoleUuidPermissionsPathToElementGetResponse>;
                    };
                };
            };
        };
        groups: {
            post: (data?: any, query?: any, token?: string) => Promise<GroupsPostResponse>;
            get: (query?: any, token?: string) => Promise<GroupsGetResponse>;
            groupUuid: (groupUuid: string) => {
                get: (query?: any, token?: string) => Promise<GroupsGroupUuidGetResponse>;
                post: (data?: any, query?: any, token?: string) => Promise<GroupsGroupUuidPostResponse>;
                delete: (token?: string) => Promise<GroupsGroupUuidDeleteResponse>;
                roles: {
                    get: (query?: any, token?: string) => Promise<GroupsGroupUuidRolesGetResponse>;
                    roleUuid: (roleUuid: string) => {
                        post: (data?: any, query?: any, token?: string) => Promise<GroupsGroupUuidRolesRoleUuidPostResponse>;
                        delete: (token?: string) => Promise<GroupsGroupUuidRolesRoleUuidDeleteResponse>;
                    };
                };
                users: {
                    get: (query?: any, token?: string) => Promise<GroupsGroupUuidUsersGetResponse>;
                    userUuid: (userUuid: string) => {
                        post: (data?: any, query?: any, token?: string) => Promise<GroupsGroupUuidUsersUserUuidPostResponse>;
                    };
                };
            };
        };
        projects: {
            post: (data?: any, query?: any, token?: string) => Promise<ProjectsPostResponse>;
            get: (query?: any, token?: string) => Promise<ProjectsGetResponse>;
            projectUuid: (projectUuid: string) => {
                get: (query?: any, token?: string) => Promise<ProjectsProjectUuidGetResponse>;
                post: (data?: any, query?: any, token?: string) => Promise<ProjectsProjectUuidPostResponse>;
                delete: (token?: string) => Promise<ProjectsProjectUuidDeleteResponse>;
            };
        };
        schemas: {
            get: (query?: any, token?: string) => Promise<SchemasGetResponse>;
            post: (data?: any, query?: any, token?: string) => Promise<SchemasPostResponse>;
            schemaUuid: (schemaUuid: string) => {
                get: (query?: any, token?: string) => Promise<SchemasSchemaUuidGetResponse>;
                post: (data?: any, query?: any, token?: string) => Promise<SchemasSchemaUuidPostResponse>;
                delete: (token?: string) => Promise<SchemasSchemaUuidDeleteResponse>;
                changes: {
                    post: (data?: any, query?: any, token?: string) => Promise<SchemasSchemaUuidChangesPostResponse>;
                };
                diff: {
                    post: (data?: any, query?: any, token?: string) => Promise<SchemasSchemaUuidDiffPostResponse>;
                };
            };
        };
        microschemas: {
            post: (data?: any, query?: any, token?: string) => Promise<MicroschemasPostResponse>;
            get: (query?: any, token?: string) => Promise<MicroschemasGetResponse>;
            microschemaUuid: (microschemaUuid: string) => {
                get: (query?: any, token?: string) => Promise<MicroschemasMicroschemaUuidGetResponse>;
                post: (data?: any, query?: any, token?: string) => Promise<MicroschemasMicroschemaUuidPostResponse>;
                delete: (token?: string) => Promise<MicroschemasMicroschemaUuidDeleteResponse>;
                changes: {
                    post: (data?: any, query?: any, token?: string) => Promise<MicroschemasMicroschemaUuidChangesPostResponse>;
                };
                diff: {
                    post: (data?: any, query?: any, token?: string) => Promise<MicroschemasMicroschemaUuidDiffPostResponse>;
                };
            };
        };
        admin: {
            status: {
                get: (query?: any, token?: string) => Promise<AdminStatusGetResponse>;
                migrations: {
                    get: (query?: any, token?: string) => Promise<AdminStatusMigrationsGetResponse>;
                };
            };
        };
        search: {
            createMappings: {
                get: (query?: any, token?: string) => Promise<SearchCreateMappingsGetResponse>;
            };
            groups: {
                post: (data?: any, query?: any, token?: string) => Promise<SearchGroupsPostResponse>;
            };
            microschemas: {
                post: (data?: any, query?: any, token?: string) => Promise<SearchMicroschemasPostResponse>;
            };
            nodes: {
                post: (data?: any, query?: any, token?: string) => Promise<SearchNodesPostResponse>;
            };
            projects: {
                post: (data?: any, query?: any, token?: string) => Promise<SearchProjectsPostResponse>;
            };
            reindex: {
                get: (query?: any, token?: string) => Promise<SearchReindexGetResponse>;
            };
            roles: {
                post: (data?: any, query?: any, token?: string) => Promise<SearchRolesPostResponse>;
            };
            schemas: {
                post: (data?: any, query?: any, token?: string) => Promise<SearchSchemasPostResponse>;
            };
            status: {
                get: (query?: any, token?: string) => Promise<SearchStatusGetResponse>;
            };
            tagFamilies: {
                post: (data?: any, query?: any, token?: string) => Promise<SearchTagFamiliesPostResponse>;
            };
            tags: {
                post: (data?: any, query?: any, token?: string) => Promise<SearchTagsPostResponse>;
            };
            users: {
                post: (data?: any, query?: any, token?: string) => Promise<SearchUsersPostResponse>;
            };
        };
        utilities: {
            linkResolver: {
                post: (data?: any, query?: any, token?: string) => Promise<UtilitiesLinkResolverPostResponse>;
            };
        };
        auth: {
            login: {
                get: (query?: any, token?: string) => Promise<AuthLoginGetResponse>;
                post: (data?: any, query?: any, token?: string) => Promise<AuthLoginPostResponse>;
            };
            logout: {
                get: (query?: any, token?: string) => Promise<AuthLogoutGetResponse>;
            };
            me: {
                get: (query?: any, token?: string) => Promise<AuthMeGetResponse>;
            };
        };
        eventbus: {};
        project: (project: string) => {
            nodes: {
                post: (data?: any, query?: any, token?: string) => Promise<ProjectNodesPostResponse>;
                get: (query?: any, token?: string) => Promise<ProjectNodesGetResponse>;
                nodeUuid: (nodeUuid: string) => {
                    get: (query?: any, token?: string) => Promise<ProjectNodesNodeUuidGetResponse>;
                    post: (data?: any, query?: any, token?: string) => Promise<ProjectNodesNodeUuidPostResponse>;
                    delete: (token?: string) => Promise<ProjectNodesNodeUuidDeleteResponse>;
                    binary: {
                        fieldName: (fieldName: string) => {
                            post: (data?: any, query?: any, token?: string) => Promise<ProjectNodesNodeUuidBinaryFieldNamePostResponse>;
                            get: (query?: any, token?: string) => Promise<ProjectNodesNodeUuidBinaryFieldNameGetResponse>;
                        };
                    };
                    binaryTransform: {
                        fieldName: (fieldName: string) => {
                            post: (data?: any, query?: any, token?: string) => Promise<ProjectNodesNodeUuidBinaryTransformFieldNamePostResponse>;
                        };
                    };
                    children: {
                        get: (query?: any, token?: string) => Promise<ProjectNodesNodeUuidChildrenGetResponse>;
                    };
                    languages: {
                        language: (language: string) => {
                            delete: (token?: string) => Promise<ProjectNodesNodeUuidLanguagesLanguageDeleteResponse>;
                            published: {
                                get: (query?: any, token?: string) => Promise<ProjectNodesNodeUuidLanguagesLanguagePublishedGetResponse>;
                            };
                        };
                    };
                    moveTo: {
                        toUuid: (toUuid: string) => {
                            post: (data?: any, query?: any, token?: string) => Promise<ProjectNodesNodeUuidMoveToToUuidPostResponse>;
                        };
                    };
                    navigation: {
                        get: (query?: any, token?: string) => Promise<ProjectNodesNodeUuidNavigationGetResponse>;
                    };
                    published: {
                        get: (query?: any, token?: string) => Promise<ProjectNodesNodeUuidPublishedGetResponse>;
                        post: (data?: any, query?: any, token?: string) => Promise<ProjectNodesNodeUuidPublishedPostResponse>;
                        delete: (token?: string) => Promise<ProjectNodesNodeUuidPublishedDeleteResponse>;
                    };
                    tags: {
                        get: (query?: any, token?: string) => Promise<ProjectNodesNodeUuidTagsGetResponse>;
                        tagUuid: (tagUuid: string) => {
                            post: (data?: any, query?: any, token?: string) => Promise<ProjectNodesNodeUuidTagsTagUuidPostResponse>;
                            delete: (token?: string) => Promise<ProjectNodesNodeUuidTagsTagUuidDeleteResponse>;
                        };
                    };
                };
            };
            tagFamilies: {
                get: (query?: any, token?: string) => Promise<ProjectTagFamiliesGetResponse>;
                post: (data?: any, query?: any, token?: string) => Promise<ProjectTagFamiliesPostResponse>;
                tagFamilyUuid: (tagFamilyUuid: string) => {
                    get: (query?: any, token?: string) => Promise<ProjectTagFamiliesTagFamilyUuidGetResponse>;
                    post: (data?: any, query?: any, token?: string) => Promise<ProjectTagFamiliesTagFamilyUuidPostResponse>;
                    delete: (token?: string) => Promise<ProjectTagFamiliesTagFamilyUuidDeleteResponse>;
                    tags: {
                        get: (query?: any, token?: string) => Promise<ProjectTagFamiliesTagFamilyUuidTagsGetResponse>;
                        tagUuid: (tagUuid: string) => {
                            get: (query?: any, token?: string) => Promise<ProjectTagFamiliesTagFamilyUuidTagsTagUuidGetResponse>;
                            post: (data?: any, query?: any, token?: string) => Promise<ProjectTagFamiliesTagFamilyUuidTagsTagUuidPostResponse>;
                            delete: (token?: string) => Promise<ProjectTagFamiliesTagFamilyUuidTagsTagUuidDeleteResponse>;
                            nodes: {
                                get: (query?: any, token?: string) => Promise<ProjectTagFamiliesTagFamilyUuidTagsTagUuidNodesGetResponse>;
                            };
                        };
                    };
                };
            };
            navroot: {
                path: (path: string) => {
                    get: (query?: any, token?: string) => Promise<ProjectNavrootPathGetResponse>;
                };
            };
            webroot: {
                path: (path: string) => {
                    get: (query?: any, token?: string) => Promise<ProjectWebrootPathGetResponse>;
                };
            };
            releases: {
                post: (data?: any, query?: any, token?: string) => Promise<ProjectReleasesPostResponse>;
                get: (query?: any, token?: string) => Promise<ProjectReleasesGetResponse>;
                releaseUuid: (releaseUuid: string) => {
                    get: (query?: any, token?: string) => Promise<ProjectReleasesReleaseUuidGetResponse>;
                    post: (data?: any, query?: any, token?: string) => Promise<ProjectReleasesReleaseUuidPostResponse>;
                    microschemas: {
                        get: (query?: any, token?: string) => Promise<ProjectReleasesReleaseUuidMicroschemasGetResponse>;
                        post: (data?: any, query?: any, token?: string) => Promise<ProjectReleasesReleaseUuidMicroschemasPostResponse>;
                    };
                    schemas: {
                        get: (query?: any, token?: string) => Promise<ProjectReleasesReleaseUuidSchemasGetResponse>;
                        post: (data?: any, query?: any, token?: string) => Promise<ProjectReleasesReleaseUuidSchemasPostResponse>;
                    };
                };
            };
            search: {
                nodes: {
                    post: (data?: any, query?: any, token?: string) => Promise<ProjectSearchNodesPostResponse>;
                };
                tagFamilies: {
                    post: (data?: any, query?: any, token?: string) => Promise<ProjectSearchTagFamiliesPostResponse>;
                };
                tags: {
                    post: (data?: any, query?: any, token?: string) => Promise<ProjectSearchTagsPostResponse>;
                };
            };
            schemas: {
                get: (query?: any, token?: string) => Promise<ProjectSchemasGetResponse>;
                schemaUuid: (schemaUuid: string) => {
                    get: (query?: any, token?: string) => Promise<ProjectSchemasSchemaUuidGetResponse>;
                    post: (data?: any, query?: any, token?: string) => Promise<ProjectSchemasSchemaUuidPostResponse>;
                    delete: (token?: string) => Promise<ProjectSchemasSchemaUuidDeleteResponse>;
                };
            };
            microschemas: {
                get: (query?: any, token?: string) => Promise<ProjectMicroschemasGetResponse>;
                microschemaUuid: (microschemaUuid: string) => {
                    post: (data?: any, query?: any, token?: string) => Promise<ProjectMicroschemasMicroschemaUuidPostResponse>;
                    delete: (token?: string) => Promise<ProjectMicroschemasMicroschemaUuidDeleteResponse>;
                };
            };
        };
    };
}
export interface UsersPostResponse {
    "uuid": string;
    "creator": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "created": string;
    "editor": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "edited": string;
    "lastname": string;
    "firstname": string;
    "username": string;
    "emailAddress": string;
    "nodeReference": {
        "projectName": string;
        "uuid": string;
    };
    "enabled": boolean;
    "groups": {
        "name": string;
        "uuid": string;
    }[];
    "permissions": {
        "create": boolean;
        "read": boolean;
        "update": boolean;
        "delete": boolean;
        "publish": boolean;
        "readPublished": boolean;
    };
}
export interface UsersGetResponse {
    "data": {
        "uuid": string;
        "creator": {
            "firstName": string;
            "lastName": string;
            "uuid": string;
        };
        "created": string;
        "editor": {
            "firstName": string;
            "lastName": string;
            "uuid": string;
        };
        "edited": string;
        "lastname": string;
        "firstname": string;
        "username": string;
        "emailAddress": string;
        "nodeReference": {
            "projectName": string;
            "uuid": string;
        };
        "enabled": boolean;
        "groups": {
            "name": string;
            "uuid": string;
        }[];
        "permissions": {
            "create": boolean;
            "read": boolean;
            "update": boolean;
            "delete": boolean;
            "publish": boolean;
            "readPublished": boolean;
        };
    }[];
    "_metainfo": {
        "currentPage": number;
        "perPage": number;
        "pageCount": number;
        "totalCount": number;
    };
}
export interface UsersUserUuidPostResponse {
    "uuid": string;
    "creator": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "created": string;
    "editor": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "edited": string;
    "lastname": string;
    "firstname": string;
    "username": string;
    "emailAddress": string;
    "nodeReference": {
        "projectName": string;
        "uuid": string;
    };
    "enabled": boolean;
    "groups": {
        "name": string;
        "uuid": string;
    }[];
    "permissions": {
        "create": boolean;
        "read": boolean;
        "update": boolean;
        "delete": boolean;
        "publish": boolean;
        "readPublished": boolean;
    };
}
export interface UsersUserUuidGetResponse {
    "uuid": string;
    "creator": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "created": string;
    "editor": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "edited": string;
    "lastname": string;
    "firstname": string;
    "username": string;
    "emailAddress": string;
    "nodeReference": {
        "projectName": string;
        "uuid": string;
    };
    "enabled": boolean;
    "groups": {
        "name": string;
        "uuid": string;
    }[];
    "permissions": {
        "create": boolean;
        "read": boolean;
        "update": boolean;
        "delete": boolean;
        "publish": boolean;
        "readPublished": boolean;
    };
}
export interface UsersUserUuidDeleteResponse {
}
export interface UsersUserUuidPermissionsPathGetResponse {
    "create": boolean;
    "read": boolean;
    "update": boolean;
    "delete": boolean;
}
export interface UsersUserUuidTokenGetResponse {
    "token": string;
    "created": string;
}
export interface RolesPostResponse {
    "uuid": string;
    "creator": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "created": string;
    "editor": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "edited": string;
    "name": string;
    "groups": {};
    "permissions": {
        "create": boolean;
        "read": boolean;
        "update": boolean;
        "delete": boolean;
        "publish": boolean;
        "readPublished": boolean;
    };
}
export interface RolesGetResponse {
    "data": {
        "uuid": string;
        "creator": {
            "firstName": string;
            "lastName": string;
            "uuid": string;
        };
        "created": string;
        "editor": {
            "firstName": string;
            "lastName": string;
            "uuid": string;
        };
        "edited": string;
        "name": string;
        "groups": {};
        "permissions": {
            "create": boolean;
            "read": boolean;
            "update": boolean;
            "delete": boolean;
            "publish": boolean;
            "readPublished": boolean;
        };
    }[];
    "_metainfo": {
        "currentPage": number;
        "perPage": number;
        "pageCount": number;
        "totalCount": number;
    };
}
export interface RolesRoleUuidGetResponse {
    "uuid": string;
    "creator": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "created": string;
    "editor": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "edited": string;
    "name": string;
    "groups": {};
    "permissions": {
        "create": boolean;
        "read": boolean;
        "update": boolean;
        "delete": boolean;
        "publish": boolean;
        "readPublished": boolean;
    };
}
export interface RolesRoleUuidPostResponse {
    "uuid": string;
    "creator": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "created": string;
    "editor": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "edited": string;
    "name": string;
    "groups": {};
    "permissions": {
        "create": boolean;
        "read": boolean;
        "update": boolean;
        "delete": boolean;
        "publish": boolean;
        "readPublished": boolean;
    };
}
export interface RolesRoleUuidDeleteResponse {
}
export interface RolesRoleUuidPermissionsPathToElementPostResponse {
    "message": string;
}
export interface RolesRoleUuidPermissionsPathToElementGetResponse {
    "create": boolean;
    "read": boolean;
    "update": boolean;
    "delete": boolean;
    "publish": boolean;
    "readPublished": boolean;
}
export interface GroupsPostResponse {
    "uuid": string;
    "creator": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "created": string;
    "editor": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "edited": string;
    "name": string;
    "roles": {
        "name": string;
        "uuid": string;
    }[];
    "permissions": {
        "create": boolean;
        "read": boolean;
        "update": boolean;
        "delete": boolean;
        "publish": boolean;
        "readPublished": boolean;
    };
}
export interface GroupsGetResponse {
    "data": {
        "uuid": string;
        "creator": {
            "firstName": string;
            "lastName": string;
            "uuid": string;
        };
        "created": string;
        "editor": {
            "firstName": string;
            "lastName": string;
            "uuid": string;
        };
        "edited": string;
        "name": string;
        "roles": {
            "name": string;
            "uuid": string;
        }[];
        "permissions": {
            "create": boolean;
            "read": boolean;
            "update": boolean;
            "delete": boolean;
            "publish": boolean;
            "readPublished": boolean;
        };
    }[];
    "_metainfo": {
        "currentPage": number;
        "perPage": number;
        "pageCount": number;
        "totalCount": number;
    };
}
export interface GroupsGroupUuidGetResponse {
    "uuid": string;
    "creator": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "created": string;
    "editor": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "edited": string;
    "name": string;
    "roles": {
        "name": string;
        "uuid": string;
    }[];
    "permissions": {
        "create": boolean;
        "read": boolean;
        "update": boolean;
        "delete": boolean;
        "publish": boolean;
        "readPublished": boolean;
    };
}
export interface GroupsGroupUuidPostResponse {
    "uuid": string;
    "creator": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "created": string;
    "editor": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "edited": string;
    "name": string;
    "roles": {
        "name": string;
        "uuid": string;
    }[];
    "permissions": {
        "create": boolean;
        "read": boolean;
        "update": boolean;
        "delete": boolean;
        "publish": boolean;
        "readPublished": boolean;
    };
}
export interface GroupsGroupUuidDeleteResponse {
}
export interface GroupsGroupUuidRolesGetResponse {
    "data": {
        "uuid": string;
        "creator": {
            "firstName": string;
            "lastName": string;
            "uuid": string;
        };
        "created": string;
        "editor": {
            "firstName": string;
            "lastName": string;
            "uuid": string;
        };
        "edited": string;
        "name": string;
        "groups": {};
        "permissions": {
            "create": boolean;
            "read": boolean;
            "update": boolean;
            "delete": boolean;
            "publish": boolean;
            "readPublished": boolean;
        };
    }[];
    "_metainfo": {
        "currentPage": number;
        "perPage": number;
        "pageCount": number;
        "totalCount": number;
    };
}
export interface GroupsGroupUuidRolesRoleUuidPostResponse {
    "uuid": string;
    "creator": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "created": string;
    "editor": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "edited": string;
    "name": string;
    "roles": {
        "name": string;
        "uuid": string;
    }[];
    "permissions": {
        "create": boolean;
        "read": boolean;
        "update": boolean;
        "delete": boolean;
        "publish": boolean;
        "readPublished": boolean;
    };
}
export interface GroupsGroupUuidRolesRoleUuidDeleteResponse {
}
export interface GroupsGroupUuidUsersGetResponse {
    "data": {
        "uuid": string;
        "creator": {
            "firstName": string;
            "lastName": string;
            "uuid": string;
        };
        "created": string;
        "editor": {
            "firstName": string;
            "lastName": string;
            "uuid": string;
        };
        "edited": string;
        "lastname": string;
        "firstname": string;
        "username": string;
        "emailAddress": string;
        "nodeReference": {
            "projectName": string;
            "uuid": string;
        };
        "enabled": boolean;
        "groups": {
            "name": string;
            "uuid": string;
        }[];
        "permissions": {
            "create": boolean;
            "read": boolean;
            "update": boolean;
            "delete": boolean;
            "publish": boolean;
            "readPublished": boolean;
        };
    }[];
    "_metainfo": {
        "currentPage": number;
        "perPage": number;
        "pageCount": number;
        "totalCount": number;
    };
}
export interface GroupsGroupUuidUsersUserUuidPostResponse {
    "uuid": string;
    "creator": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "created": string;
    "editor": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "edited": string;
    "name": string;
    "roles": {
        "name": string;
        "uuid": string;
    }[];
    "permissions": {
        "create": boolean;
        "read": boolean;
        "update": boolean;
        "delete": boolean;
        "publish": boolean;
        "readPublished": boolean;
    };
}
export interface ProjectsPostResponse {
    "uuid": string;
    "creator": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "created": string;
    "editor": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "edited": string;
    "name": string;
    "rootNode": {
        "uuid": string;
    };
    "permissions": {
        "create": boolean;
        "read": boolean;
        "update": boolean;
        "delete": boolean;
        "publish": boolean;
        "readPublished": boolean;
    };
}
export interface ProjectsGetResponse {
    "data": {
        "uuid": string;
        "creator": {
            "firstName": string;
            "lastName": string;
            "uuid": string;
        };
        "created": string;
        "editor": {
            "firstName": string;
            "lastName": string;
            "uuid": string;
        };
        "edited": string;
        "name": string;
        "rootNode": {
            "uuid": string;
        };
        "permissions": {
            "create": boolean;
            "read": boolean;
            "update": boolean;
            "delete": boolean;
            "publish": boolean;
            "readPublished": boolean;
        };
    }[];
    "_metainfo": {
        "currentPage": number;
        "perPage": number;
        "pageCount": number;
        "totalCount": number;
    };
}
export interface ProjectsProjectUuidGetResponse {
    "uuid": string;
    "creator": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "created": string;
    "editor": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "edited": string;
    "name": string;
    "rootNode": {
        "uuid": string;
    };
    "permissions": {
        "create": boolean;
        "read": boolean;
        "update": boolean;
        "delete": boolean;
        "publish": boolean;
        "readPublished": boolean;
    };
}
export interface ProjectsProjectUuidPostResponse {
    "uuid": string;
    "creator": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "created": string;
    "editor": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "edited": string;
    "name": string;
    "rootNode": {
        "uuid": string;
    };
    "permissions": {
        "create": boolean;
        "read": boolean;
        "update": boolean;
        "delete": boolean;
        "publish": boolean;
        "readPublished": boolean;
    };
}
export interface ProjectsProjectUuidDeleteResponse {
}
export interface SchemasGetResponse {
    "data": {
        "uuid": string;
        "displayField": string;
        "segmentField": string;
        "container": boolean;
        "version": number;
        "name": string;
        "fields": any;
        "permissions": {
            "create": boolean;
            "read": boolean;
            "update": boolean;
            "delete": boolean;
            "publish": boolean;
            "readPublished": boolean;
        };
    }[];
    "_metainfo": {
        "currentPage": number;
        "perPage": number;
        "pageCount": number;
        "totalCount": number;
    };
}
export interface SchemasPostResponse {
    "uuid": string;
    "displayField": string;
    "segmentField": string;
    "container": boolean;
    "version": number;
    "name": string;
    "fields": any;
    "permissions": {
        "create": boolean;
        "read": boolean;
        "update": boolean;
        "delete": boolean;
        "publish": boolean;
        "readPublished": boolean;
    };
}
export interface SchemasSchemaUuidGetResponse {
    "uuid": string;
    "displayField": string;
    "segmentField": string;
    "container": boolean;
    "version": number;
    "name": string;
    "fields": any;
    "permissions": {
        "create": boolean;
        "read": boolean;
        "update": boolean;
        "delete": boolean;
        "publish": boolean;
        "readPublished": boolean;
    };
}
export interface SchemasSchemaUuidPostResponse {
    "uuid": string;
    "displayField": string;
    "segmentField": string;
    "container": boolean;
    "version": number;
    "name": string;
    "fields": any;
    "permissions": {
        "create": boolean;
        "read": boolean;
        "update": boolean;
        "delete": boolean;
        "publish": boolean;
        "readPublished": boolean;
    };
}
export interface SchemasSchemaUuidDeleteResponse {
}
export interface SchemasSchemaUuidChangesPostResponse {
    "message": string;
}
export interface SchemasSchemaUuidDiffPostResponse {
    "changes": {
        "operation": string;
        "properties": {
            "field": string;
            "label": string;
            "type": string;
            "listType": string;
        };
    }[];
}
export interface MicroschemasPostResponse {
    "uuid": string;
    "version": number;
    "description": string;
    "name": string;
    "fields": any;
    "permissions": {
        "create": boolean;
        "read": boolean;
        "update": boolean;
        "delete": boolean;
        "publish": boolean;
        "readPublished": boolean;
    };
}
export interface MicroschemasGetResponse {
    "data": {
        "uuid": string;
        "version": number;
        "description": string;
        "name": string;
        "fields": any;
        "permissions": {
            "create": boolean;
            "read": boolean;
            "update": boolean;
            "delete": boolean;
            "publish": boolean;
            "readPublished": boolean;
        };
    }[];
    "_metainfo": {
        "currentPage": number;
        "perPage": number;
        "pageCount": number;
        "totalCount": number;
    };
}
export interface MicroschemasMicroschemaUuidGetResponse {
    "uuid": string;
    "version": number;
    "description": string;
    "name": string;
    "fields": any;
    "permissions": {
        "create": boolean;
        "read": boolean;
        "update": boolean;
        "delete": boolean;
        "publish": boolean;
        "readPublished": boolean;
    };
}
export interface MicroschemasMicroschemaUuidPostResponse {
    "uuid": string;
    "version": number;
    "description": string;
    "name": string;
    "fields": any;
    "permissions": {
        "create": boolean;
        "read": boolean;
        "update": boolean;
        "delete": boolean;
        "publish": boolean;
        "readPublished": boolean;
    };
}
export interface MicroschemasMicroschemaUuidDeleteResponse {
}
export interface MicroschemasMicroschemaUuidChangesPostResponse {
    "message": string;
}
export interface MicroschemasMicroschemaUuidDiffPostResponse {
    "changes": {
        "operation": string;
        "properties": {
            "field": string;
            "label": string;
            "type": string;
            "listType": string;
        };
    }[];
}
export interface AdminStatusGetResponse {
    "message": string;
}
export interface AdminStatusMigrationsGetResponse {
    "message": string;
}
export interface SearchCreateMappingsGetResponse {
    "message": string;
}
export interface SearchGroupsPostResponse {
    "data": {
        "uuid": string;
        "creator": {
            "firstName": string;
            "lastName": string;
            "uuid": string;
        };
        "created": string;
        "editor": {
            "firstName": string;
            "lastName": string;
            "uuid": string;
        };
        "edited": string;
        "name": string;
        "roles": {
            "name": string;
            "uuid": string;
        }[];
        "permissions": {
            "create": boolean;
            "read": boolean;
            "update": boolean;
            "delete": boolean;
            "publish": boolean;
            "readPublished": boolean;
        };
    }[];
    "_metainfo": {
        "currentPage": number;
        "perPage": number;
        "pageCount": number;
        "totalCount": number;
    };
}
export interface SearchMicroschemasPostResponse {
    "data": {
        "uuid": string;
        "version": number;
        "description": string;
        "name": string;
        "fields": any;
        "permissions": {
            "create": boolean;
            "read": boolean;
            "update": boolean;
            "delete": boolean;
            "publish": boolean;
            "readPublished": boolean;
        };
    }[];
    "_metainfo": {
        "currentPage": number;
        "perPage": number;
        "pageCount": number;
        "totalCount": number;
    };
}
export interface SearchNodesPostResponse {
    "data": {
        "uuid": string;
        "creator": {
            "firstName": string;
            "lastName": string;
            "uuid": string;
        };
        "created": string;
        "edited": string;
        "availableLanguages": string[];
        "languagePaths": {
            "de": string;
            "en": string;
        };
        "parentNode": {
            "uuid": string;
            "displayName": string;
        };
        "tags": {
            "types": {
                "items": {
                    "name": string;
                    "uuid": string;
                }[];
            };
            "colors": {
                "items": {
                    "name": string;
                    "uuid": string;
                }[];
            };
        };
        "childrenInfo": {
            "folder": {
                "schemaUuid": string;
                "count": number;
            };
            "blogpost": {
                "schemaUuid": string;
                "count": number;
            };
        };
        "schema": {
            "name": string;
            "uuid": string;
            "version": number;
        };
        "fields": any;
        "path": string;
        "breadcrumb": {
            "uuid": string;
            "displayName": string;
            "path": string;
        }[];
        "container": boolean;
        "permissions": {
            "create": boolean;
            "read": boolean;
            "update": boolean;
            "delete": boolean;
            "publish": boolean;
            "readPublished": boolean;
        };
    }[];
    "_metainfo": {
        "currentPage": number;
        "perPage": number;
        "pageCount": number;
        "totalCount": number;
    };
}
export interface SearchProjectsPostResponse {
    "data": {
        "uuid": string;
        "creator": {
            "firstName": string;
            "lastName": string;
            "uuid": string;
        };
        "created": string;
        "editor": {
            "firstName": string;
            "lastName": string;
            "uuid": string;
        };
        "edited": string;
        "name": string;
        "rootNode": {
            "uuid": string;
        };
        "permissions": {
            "create": boolean;
            "read": boolean;
            "update": boolean;
            "delete": boolean;
            "publish": boolean;
            "readPublished": boolean;
        };
    }[];
    "_metainfo": {
        "currentPage": number;
        "perPage": number;
        "pageCount": number;
        "totalCount": number;
    };
}
export interface SearchReindexGetResponse {
    "message": string;
}
export interface SearchRolesPostResponse {
    "data": {
        "uuid": string;
        "creator": {
            "firstName": string;
            "lastName": string;
            "uuid": string;
        };
        "created": string;
        "editor": {
            "firstName": string;
            "lastName": string;
            "uuid": string;
        };
        "edited": string;
        "name": string;
        "groups": {};
        "permissions": {
            "create": boolean;
            "read": boolean;
            "update": boolean;
            "delete": boolean;
            "publish": boolean;
            "readPublished": boolean;
        };
    }[];
    "_metainfo": {
        "currentPage": number;
        "perPage": number;
        "pageCount": number;
        "totalCount": number;
    };
}
export interface SearchSchemasPostResponse {
    "data": {
        "uuid": string;
        "displayField": string;
        "segmentField": string;
        "container": boolean;
        "version": number;
        "name": string;
        "fields": any;
        "permissions": {
            "create": boolean;
            "read": boolean;
            "update": boolean;
            "delete": boolean;
            "publish": boolean;
            "readPublished": boolean;
        };
    }[];
    "_metainfo": {
        "currentPage": number;
        "perPage": number;
        "pageCount": number;
        "totalCount": number;
    };
}
export interface SearchStatusGetResponse {
    "message": string;
}
export interface SearchTagFamiliesPostResponse {
    "data": {
        "creator": {
            "firstName": string;
            "lastName": string;
            "uuid": string;
        };
        "created": string;
        "editor": {
            "firstName": string;
            "lastName": string;
            "uuid": string;
        };
        "edited": string;
        "name": string;
        "permissions": {
            "create": boolean;
            "read": boolean;
            "update": boolean;
            "delete": boolean;
            "publish": boolean;
            "readPublished": boolean;
        };
    }[];
    "_metainfo": {
        "currentPage": number;
        "perPage": number;
        "pageCount": number;
        "totalCount": number;
    };
}
export interface SearchTagsPostResponse {
    "data": {
        "uuid": string;
        "creator": {
            "firstName": string;
            "lastName": string;
            "uuid": string;
        };
        "created": string;
        "editor": {
            "firstName": string;
            "lastName": string;
            "uuid": string;
        };
        "edited": string;
        "tagFamily": {
            "name": string;
            "uuid": string;
        };
        "name": string;
        "permissions": {
            "create": boolean;
            "read": boolean;
            "update": boolean;
            "delete": boolean;
            "publish": boolean;
            "readPublished": boolean;
        };
    }[];
    "_metainfo": {
        "currentPage": number;
        "perPage": number;
        "pageCount": number;
        "totalCount": number;
    };
}
export interface SearchUsersPostResponse {
    "data": {
        "uuid": string;
        "creator": {
            "firstName": string;
            "lastName": string;
            "uuid": string;
        };
        "created": string;
        "editor": {
            "firstName": string;
            "lastName": string;
            "uuid": string;
        };
        "edited": string;
        "lastname": string;
        "firstname": string;
        "username": string;
        "emailAddress": string;
        "nodeReference": {
            "projectName": string;
            "uuid": string;
        };
        "enabled": boolean;
        "groups": {
            "name": string;
            "uuid": string;
        }[];
        "permissions": {
            "create": boolean;
            "read": boolean;
            "update": boolean;
            "delete": boolean;
            "publish": boolean;
            "readPublished": boolean;
        };
    }[];
    "_metainfo": {
        "currentPage": number;
        "perPage": number;
        "pageCount": number;
        "totalCount": number;
    };
}
export interface UtilitiesLinkResolverPostResponse {
}
export interface AuthLoginGetResponse {
}
export interface AuthLoginPostResponse {
    "token": string;
}
export interface AuthLogoutGetResponse {
    "message": string;
}
export interface AuthMeGetResponse {
    "uuid": string;
    "creator": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "created": string;
    "editor": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "edited": string;
    "lastname": string;
    "firstname": string;
    "username": string;
    "emailAddress": string;
    "nodeReference": {
        "projectName": string;
        "uuid": string;
    };
    "enabled": boolean;
    "groups": {
        "name": string;
        "uuid": string;
    }[];
    "permissions": {
        "create": boolean;
        "read": boolean;
        "update": boolean;
        "delete": boolean;
        "publish": boolean;
        "readPublished": boolean;
    };
}
export interface ProjectNodesPostResponse {
    "uuid": string;
    "creator": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "created": string;
    "edited": string;
    "availableLanguages": string[];
    "languagePaths": {
        "de": string;
        "en": string;
    };
    "parentNode": {
        "uuid": string;
        "displayName": string;
    };
    "tags": {
        "types": {
            "items": {
                "name": string;
                "uuid": string;
            }[];
        };
        "colors": {
            "items": {
                "name": string;
                "uuid": string;
            }[];
        };
    };
    "childrenInfo": {
        "folder": {
            "schemaUuid": string;
            "count": number;
        };
        "blogpost": {
            "schemaUuid": string;
            "count": number;
        };
    };
    "schema": {
        "name": string;
        "uuid": string;
        "version": number;
    };
    "fields": any;
    "path": string;
    "breadcrumb": {
        "uuid": string;
        "displayName": string;
        "path": string;
    }[];
    "container": boolean;
    "permissions": {
        "create": boolean;
        "read": boolean;
        "update": boolean;
        "delete": boolean;
        "publish": boolean;
        "readPublished": boolean;
    };
}
export interface ProjectNodesGetResponse {
    "data": {
        "uuid": string;
        "creator": {
            "firstName": string;
            "lastName": string;
            "uuid": string;
        };
        "created": string;
        "edited": string;
        "availableLanguages": string[];
        "languagePaths": {
            "de": string;
            "en": string;
        };
        "parentNode": {
            "uuid": string;
            "displayName": string;
        };
        "tags": {
            "types": {
                "items": {
                    "name": string;
                    "uuid": string;
                }[];
            };
            "colors": {
                "items": {
                    "name": string;
                    "uuid": string;
                }[];
            };
        };
        "childrenInfo": {
            "folder": {
                "schemaUuid": string;
                "count": number;
            };
            "blogpost": {
                "schemaUuid": string;
                "count": number;
            };
        };
        "schema": {
            "name": string;
            "uuid": string;
            "version": number;
        };
        "fields": any;
        "path": string;
        "breadcrumb": {
            "uuid": string;
            "displayName": string;
            "path": string;
        }[];
        "container": boolean;
        "permissions": {
            "create": boolean;
            "read": boolean;
            "update": boolean;
            "delete": boolean;
            "publish": boolean;
            "readPublished": boolean;
        };
    }[];
    "_metainfo": {
        "currentPage": number;
        "perPage": number;
        "pageCount": number;
        "totalCount": number;
    };
}
export interface ProjectNodesNodeUuidGetResponse {
    "uuid": string;
    "creator": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "created": string;
    "edited": string;
    "availableLanguages": string[];
    "languagePaths": {
        "de": string;
        "en": string;
    };
    "parentNode": {
        "uuid": string;
        "displayName": string;
    };
    "tags": {
        "types": {
            "items": {
                "name": string;
                "uuid": string;
            }[];
        };
        "colors": {
            "items": {
                "name": string;
                "uuid": string;
            }[];
        };
    };
    "childrenInfo": {
        "folder": {
            "schemaUuid": string;
            "count": number;
        };
        "blogpost": {
            "schemaUuid": string;
            "count": number;
        };
    };
    "schema": {
        "name": string;
        "uuid": string;
        "version": number;
    };
    "fields": any;
    "path": string;
    "breadcrumb": {
        "uuid": string;
        "displayName": string;
        "path": string;
    }[];
    "container": boolean;
    "permissions": {
        "create": boolean;
        "read": boolean;
        "update": boolean;
        "delete": boolean;
        "publish": boolean;
        "readPublished": boolean;
    };
}
export interface ProjectNodesNodeUuidPostResponse {
    "uuid": string;
    "creator": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "created": string;
    "editor": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "edited": string;
    "parentNode": {
        "uuid": string;
        "displayName": string;
    };
    "tags": {
        "types": {
            "items": {
                "name": string;
                "uuid": string;
            }[];
        };
        "colors": {
            "items": {
                "name": string;
                "uuid": string;
            }[];
        };
    };
    "childrenInfo": {};
    "schema": {
        "name": string;
        "uuid": string;
        "version": number;
    };
    "fields": any;
    "breadcrumb": {
        "uuid": string;
        "displayName": string;
        "path": string;
    }[];
    "container": boolean;
    "permissions": {
        "create": boolean;
        "read": boolean;
        "update": boolean;
        "delete": boolean;
        "publish": boolean;
        "readPublished": boolean;
    };
}
export interface ProjectNodesNodeUuidDeleteResponse {
}
export interface ProjectNodesNodeUuidBinaryFieldNamePostResponse {
    "uuid": string;
    "creator": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "created": string;
    "edited": string;
    "availableLanguages": string[];
    "languagePaths": {
        "de": string;
        "en": string;
    };
    "parentNode": {
        "uuid": string;
        "displayName": string;
    };
    "tags": {
        "types": {
            "items": {
                "name": string;
                "uuid": string;
            }[];
        };
        "colors": {
            "items": {
                "name": string;
                "uuid": string;
            }[];
        };
    };
    "childrenInfo": {
        "folder": {
            "schemaUuid": string;
            "count": number;
        };
        "blogpost": {
            "schemaUuid": string;
            "count": number;
        };
    };
    "schema": {
        "name": string;
        "uuid": string;
        "version": number;
    };
    "fields": any;
    "path": string;
    "breadcrumb": {
        "uuid": string;
        "displayName": string;
        "path": string;
    }[];
    "container": boolean;
    "permissions": {
        "create": boolean;
        "read": boolean;
        "update": boolean;
        "delete": boolean;
        "publish": boolean;
        "readPublished": boolean;
    };
}
export interface ProjectNodesNodeUuidBinaryFieldNameGetResponse {
}
export interface ProjectNodesNodeUuidBinaryTransformFieldNamePostResponse {
    "uuid": string;
    "creator": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "created": string;
    "edited": string;
    "availableLanguages": string[];
    "languagePaths": {
        "de": string;
        "en": string;
    };
    "parentNode": {
        "uuid": string;
        "displayName": string;
    };
    "tags": {
        "types": {
            "items": {
                "name": string;
                "uuid": string;
            }[];
        };
        "colors": {
            "items": {
                "name": string;
                "uuid": string;
            }[];
        };
    };
    "childrenInfo": {
        "folder": {
            "schemaUuid": string;
            "count": number;
        };
        "blogpost": {
            "schemaUuid": string;
            "count": number;
        };
    };
    "schema": {
        "name": string;
        "uuid": string;
        "version": number;
    };
    "fields": any;
    "path": string;
    "breadcrumb": {
        "uuid": string;
        "displayName": string;
        "path": string;
    }[];
    "container": boolean;
    "permissions": {
        "create": boolean;
        "read": boolean;
        "update": boolean;
        "delete": boolean;
        "publish": boolean;
        "readPublished": boolean;
    };
}
export interface ProjectNodesNodeUuidChildrenGetResponse {
    "data": {
        "uuid": string;
        "creator": {
            "firstName": string;
            "lastName": string;
            "uuid": string;
        };
        "created": string;
        "edited": string;
        "availableLanguages": string[];
        "languagePaths": {
            "de": string;
            "en": string;
        };
        "parentNode": {
            "uuid": string;
            "displayName": string;
        };
        "tags": {
            "types": {
                "items": {
                    "name": string;
                    "uuid": string;
                }[];
            };
            "colors": {
                "items": {
                    "name": string;
                    "uuid": string;
                }[];
            };
        };
        "childrenInfo": {
            "folder": {
                "schemaUuid": string;
                "count": number;
            };
            "blogpost": {
                "schemaUuid": string;
                "count": number;
            };
        };
        "schema": {
            "name": string;
            "uuid": string;
            "version": number;
        };
        "fields": any;
        "path": string;
        "breadcrumb": {
            "uuid": string;
            "displayName": string;
            "path": string;
        }[];
        "container": boolean;
        "permissions": {
            "create": boolean;
            "read": boolean;
            "update": boolean;
            "delete": boolean;
            "publish": boolean;
            "readPublished": boolean;
        };
    }[];
    "_metainfo": {
        "currentPage": number;
        "perPage": number;
        "pageCount": number;
        "totalCount": number;
    };
}
export interface ProjectNodesNodeUuidLanguagesLanguageDeleteResponse {
}
export interface ProjectNodesNodeUuidLanguagesLanguagePublishedGetResponse {
    "published": boolean;
    "version": {
        "uuid": string;
        "number": string;
    };
    "publisher": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "publishDate": string;
}
export interface ProjectNodesNodeUuidMoveToToUuidPostResponse {
}
export interface ProjectNodesNodeUuidNavigationGetResponse {
    "uuid": string;
}
export interface ProjectNodesNodeUuidPublishedGetResponse {
    "availableLanguages": {
        "de": {
            "published": boolean;
            "version": {
                "uuid": string;
                "number": string;
            };
        };
        "en": {
            "published": boolean;
            "version": {
                "uuid": string;
                "number": string;
            };
            "publisher": {
                "firstName": string;
                "lastName": string;
                "uuid": string;
            };
            "publishDate": string;
        };
        "fr": {
            "published": boolean;
            "version": {
                "uuid": string;
                "number": string;
            };
        };
    };
}
export interface ProjectNodesNodeUuidPublishedPostResponse {
    "availableLanguages": {
        "de": {
            "published": boolean;
            "version": {
                "uuid": string;
                "number": string;
            };
        };
        "en": {
            "published": boolean;
            "version": {
                "uuid": string;
                "number": string;
            };
            "publisher": {
                "firstName": string;
                "lastName": string;
                "uuid": string;
            };
            "publishDate": string;
        };
        "fr": {
            "published": boolean;
            "version": {
                "uuid": string;
                "number": string;
            };
        };
    };
}
export interface ProjectNodesNodeUuidPublishedDeleteResponse {
}
export interface ProjectNodesNodeUuidTagsGetResponse {
    "data": {
        "uuid": string;
        "creator": {
            "firstName": string;
            "lastName": string;
            "uuid": string;
        };
        "created": string;
        "editor": {
            "firstName": string;
            "lastName": string;
            "uuid": string;
        };
        "edited": string;
        "tagFamily": {
            "name": string;
            "uuid": string;
        };
        "name": string;
        "permissions": {
            "create": boolean;
            "read": boolean;
            "update": boolean;
            "delete": boolean;
            "publish": boolean;
            "readPublished": boolean;
        };
    }[];
    "_metainfo": {
        "currentPage": number;
        "perPage": number;
        "pageCount": number;
        "totalCount": number;
    };
}
export interface ProjectNodesNodeUuidTagsTagUuidPostResponse {
    "uuid": string;
    "creator": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "created": string;
    "editor": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "edited": string;
    "parentNode": {
        "uuid": string;
        "displayName": string;
    };
    "tags": {
        "types": {
            "items": {
                "name": string;
                "uuid": string;
            }[];
        };
        "colors": {
            "items": {
                "name": string;
                "uuid": string;
            }[];
        };
    };
    "childrenInfo": {};
    "schema": {
        "name": string;
        "uuid": string;
        "version": number;
    };
    "fields": any;
    "breadcrumb": {
        "uuid": string;
        "displayName": string;
        "path": string;
    }[];
    "container": boolean;
    "permissions": {
        "create": boolean;
        "read": boolean;
        "update": boolean;
        "delete": boolean;
        "publish": boolean;
        "readPublished": boolean;
    };
}
export interface ProjectNodesNodeUuidTagsTagUuidDeleteResponse {
}
export interface ProjectTagFamiliesGetResponse {
    "data": {
        "creator": {
            "firstName": string;
            "lastName": string;
            "uuid": string;
        };
        "created": string;
        "editor": {
            "firstName": string;
            "lastName": string;
            "uuid": string;
        };
        "edited": string;
        "name": string;
        "permissions": {
            "create": boolean;
            "read": boolean;
            "update": boolean;
            "delete": boolean;
            "publish": boolean;
            "readPublished": boolean;
        };
    }[];
    "_metainfo": {
        "currentPage": number;
        "perPage": number;
        "pageCount": number;
        "totalCount": number;
    };
}
export interface ProjectTagFamiliesPostResponse {
    "creator": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "created": string;
    "editor": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "edited": string;
    "name": string;
    "permissions": {
        "create": boolean;
        "read": boolean;
        "update": boolean;
        "delete": boolean;
        "publish": boolean;
        "readPublished": boolean;
    };
}
export interface ProjectTagFamiliesTagFamilyUuidGetResponse {
    "creator": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "created": string;
    "editor": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "edited": string;
    "name": string;
    "permissions": {
        "create": boolean;
        "read": boolean;
        "update": boolean;
        "delete": boolean;
        "publish": boolean;
        "readPublished": boolean;
    };
}
export interface ProjectTagFamiliesTagFamilyUuidPostResponse {
    "creator": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "created": string;
    "editor": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "edited": string;
    "name": string;
    "permissions": {
        "create": boolean;
        "read": boolean;
        "update": boolean;
        "delete": boolean;
        "publish": boolean;
        "readPublished": boolean;
    };
}
export interface ProjectTagFamiliesTagFamilyUuidDeleteResponse {
}
export interface ProjectTagFamiliesTagFamilyUuidTagsGetResponse {
    "data": {
        "uuid": string;
        "creator": {
            "firstName": string;
            "lastName": string;
            "uuid": string;
        };
        "created": string;
        "editor": {
            "firstName": string;
            "lastName": string;
            "uuid": string;
        };
        "edited": string;
        "tagFamily": {
            "name": string;
            "uuid": string;
        };
        "name": string;
        "permissions": {
            "create": boolean;
            "read": boolean;
            "update": boolean;
            "delete": boolean;
            "publish": boolean;
            "readPublished": boolean;
        };
    }[];
    "_metainfo": {
        "currentPage": number;
        "perPage": number;
        "pageCount": number;
        "totalCount": number;
    };
}
export interface ProjectTagFamiliesTagFamilyUuidTagsTagUuidGetResponse {
    "uuid": string;
    "creator": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "created": string;
    "editor": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "edited": string;
    "tagFamily": {
        "name": string;
        "uuid": string;
    };
    "name": string;
    "permissions": {
        "create": boolean;
        "read": boolean;
        "update": boolean;
        "delete": boolean;
        "publish": boolean;
        "readPublished": boolean;
    };
}
export interface ProjectTagFamiliesTagFamilyUuidTagsTagUuidPostResponse {
    "uuid": string;
    "creator": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "created": string;
    "editor": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "edited": string;
    "tagFamily": {
        "name": string;
        "uuid": string;
    };
    "name": string;
    "permissions": {
        "create": boolean;
        "read": boolean;
        "update": boolean;
        "delete": boolean;
        "publish": boolean;
        "readPublished": boolean;
    };
}
export interface ProjectTagFamiliesTagFamilyUuidTagsTagUuidDeleteResponse {
}
export interface ProjectTagFamiliesTagFamilyUuidTagsTagUuidNodesGetResponse {
    "data": {
        "uuid": string;
        "creator": {
            "firstName": string;
            "lastName": string;
            "uuid": string;
        };
        "created": string;
        "edited": string;
        "availableLanguages": string[];
        "languagePaths": {
            "de": string;
            "en": string;
        };
        "parentNode": {
            "uuid": string;
            "displayName": string;
        };
        "tags": {
            "types": {
                "items": {
                    "name": string;
                    "uuid": string;
                }[];
            };
            "colors": {
                "items": {
                    "name": string;
                    "uuid": string;
                }[];
            };
        };
        "childrenInfo": {
            "folder": {
                "schemaUuid": string;
                "count": number;
            };
            "blogpost": {
                "schemaUuid": string;
                "count": number;
            };
        };
        "schema": {
            "name": string;
            "uuid": string;
            "version": number;
        };
        "fields": any;
        "path": string;
        "breadcrumb": {
            "uuid": string;
            "displayName": string;
            "path": string;
        }[];
        "container": boolean;
        "permissions": {
            "create": boolean;
            "read": boolean;
            "update": boolean;
            "delete": boolean;
            "publish": boolean;
            "readPublished": boolean;
        };
    }[];
    "_metainfo": {
        "currentPage": number;
        "perPage": number;
        "pageCount": number;
        "totalCount": number;
    };
}
export interface ProjectNavrootPathGetResponse {
    "uuid": string;
    "node": {
        "uuid": string;
        "creator": {
            "firstName": string;
            "lastName": string;
            "uuid": string;
        };
        "created": string;
        "edited": string;
        "availableLanguages": string[];
        "languagePaths": {
            "de": string;
            "en": string;
        };
        "parentNode": {
            "uuid": string;
            "displayName": string;
        };
        "tags": {
            "types": {
                "items": {
                    "name": string;
                    "uuid": string;
                }[];
            };
            "colors": {
                "items": {
                    "name": string;
                    "uuid": string;
                }[];
            };
        };
        "childrenInfo": {
            "folder": {
                "schemaUuid": string;
                "count": number;
            };
            "blogpost": {
                "schemaUuid": string;
                "count": number;
            };
        };
        "schema": {
            "name": string;
            "uuid": string;
            "version": number;
        };
        "fields": any;
        "path": string;
        "breadcrumb": {
            "uuid": string;
            "displayName": string;
            "path": string;
        }[];
        "container": boolean;
        "permissions": {
            "create": boolean;
            "read": boolean;
            "update": boolean;
            "delete": boolean;
            "publish": boolean;
            "readPublished": boolean;
        };
    };
    "children": {
        "uuid": string;
        "node": {
            "uuid": string;
            "creator": {
                "firstName": string;
                "lastName": string;
                "uuid": string;
            };
            "created": string;
            "edited": string;
            "availableLanguages": string[];
            "languagePaths": {
                "de": string;
                "en": string;
            };
            "parentNode": {
                "uuid": string;
                "displayName": string;
            };
            "tags": {
                "types": {
                    "items": {
                        "name": string;
                        "uuid": string;
                    }[];
                };
                "colors": {
                    "items": {
                        "name": string;
                        "uuid": string;
                    }[];
                };
            };
            "childrenInfo": {
                "folder": {
                    "schemaUuid": string;
                    "count": number;
                };
                "blogpost": {
                    "schemaUuid": string;
                    "count": number;
                };
            };
            "schema": {
                "name": string;
                "uuid": string;
                "version": number;
            };
            "fields": any;
            "path": string;
            "breadcrumb": {
                "uuid": string;
                "displayName": string;
                "path": string;
            }[];
            "container": boolean;
            "permissions": {
                "create": boolean;
                "read": boolean;
                "update": boolean;
                "delete": boolean;
                "publish": boolean;
                "readPublished": boolean;
            };
        };
    }[];
}
export interface ProjectWebrootPathGetResponse {
}
export interface ProjectReleasesPostResponse {
    "uuid": string;
    "creator": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "created": string;
    "editor": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "edited": string;
    "name": string;
    "migrated": boolean;
    "permissions": {
        "create": boolean;
        "read": boolean;
        "update": boolean;
        "delete": boolean;
        "publish": boolean;
        "readPublished": boolean;
    };
    "rolePerms": {
        "create": boolean;
        "read": boolean;
        "update": boolean;
        "delete": boolean;
        "publish": boolean;
        "readPublished": boolean;
    };
}
export interface ProjectReleasesGetResponse {
    "data": {
        "uuid": string;
        "creator": {
            "firstName": string;
            "lastName": string;
            "uuid": string;
        };
        "created": string;
        "editor": {
            "firstName": string;
            "lastName": string;
            "uuid": string;
        };
        "edited": string;
        "name": string;
        "migrated": boolean;
        "permissions": {
            "create": boolean;
            "read": boolean;
            "update": boolean;
            "delete": boolean;
            "publish": boolean;
            "readPublished": boolean;
        };
        "rolePerms": {
            "create": boolean;
            "read": boolean;
            "update": boolean;
            "delete": boolean;
            "publish": boolean;
            "readPublished": boolean;
        };
    }[];
    "_metainfo": {
        "currentPage": number;
        "perPage": number;
        "pageCount": number;
        "totalCount": number;
    };
}
export interface ProjectReleasesReleaseUuidGetResponse {
    "uuid": string;
    "creator": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "created": string;
    "editor": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "edited": string;
    "name": string;
    "migrated": boolean;
    "permissions": {
        "create": boolean;
        "read": boolean;
        "update": boolean;
        "delete": boolean;
        "publish": boolean;
        "readPublished": boolean;
    };
    "rolePerms": {
        "create": boolean;
        "read": boolean;
        "update": boolean;
        "delete": boolean;
        "publish": boolean;
        "readPublished": boolean;
    };
}
export interface ProjectReleasesReleaseUuidPostResponse {
    "uuid": string;
    "creator": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "created": string;
    "editor": {
        "firstName": string;
        "lastName": string;
        "uuid": string;
    };
    "edited": string;
    "name": string;
    "migrated": boolean;
    "permissions": {
        "create": boolean;
        "read": boolean;
        "update": boolean;
        "delete": boolean;
        "publish": boolean;
        "readPublished": boolean;
    };
    "rolePerms": {
        "create": boolean;
        "read": boolean;
        "update": boolean;
        "delete": boolean;
        "publish": boolean;
        "readPublished": boolean;
    };
}
export interface ProjectReleasesReleaseUuidMicroschemasGetResponse {
    "0": {
        "name": string;
        "uuid": string;
        "version": number;
    };
    "1": {
        "name": string;
        "uuid": string;
        "version": number;
    };
}
export interface ProjectReleasesReleaseUuidMicroschemasPostResponse {
    "0": {
        "name": string;
        "uuid": string;
        "version": number;
    };
    "1": {
        "name": string;
        "uuid": string;
        "version": number;
    };
}
export interface ProjectReleasesReleaseUuidSchemasGetResponse {
    "0": {
        "name": string;
        "uuid": string;
        "version": number;
    };
    "1": {
        "name": string;
        "uuid": string;
        "version": number;
    };
    "2": {
        "name": string;
        "uuid": string;
        "version": number;
    };
}
export interface ProjectReleasesReleaseUuidSchemasPostResponse {
    "0": {
        "name": string;
        "uuid": string;
        "version": number;
    };
    "1": {
        "name": string;
        "uuid": string;
        "version": number;
    };
    "2": {
        "name": string;
        "uuid": string;
        "version": number;
    };
}
export interface ProjectSearchNodesPostResponse {
    "data": {
        "uuid": string;
        "creator": {
            "firstName": string;
            "lastName": string;
            "uuid": string;
        };
        "created": string;
        "edited": string;
        "availableLanguages": string[];
        "languagePaths": {
            "de": string;
            "en": string;
        };
        "parentNode": {
            "uuid": string;
            "displayName": string;
        };
        "tags": {
            "types": {
                "items": {
                    "name": string;
                    "uuid": string;
                }[];
            };
            "colors": {
                "items": {
                    "name": string;
                    "uuid": string;
                }[];
            };
        };
        "childrenInfo": {
            "folder": {
                "schemaUuid": string;
                "count": number;
            };
            "blogpost": {
                "schemaUuid": string;
                "count": number;
            };
        };
        "schema": {
            "name": string;
            "uuid": string;
            "version": number;
        };
        "fields": any;
        "path": string;
        "breadcrumb": {
            "uuid": string;
            "displayName": string;
            "path": string;
        }[];
        "container": boolean;
        "permissions": {
            "create": boolean;
            "read": boolean;
            "update": boolean;
            "delete": boolean;
            "publish": boolean;
            "readPublished": boolean;
        };
    }[];
    "_metainfo": {
        "currentPage": number;
        "perPage": number;
        "pageCount": number;
        "totalCount": number;
    };
}
export interface ProjectSearchTagFamiliesPostResponse {
    "data": {
        "creator": {
            "firstName": string;
            "lastName": string;
            "uuid": string;
        };
        "created": string;
        "editor": {
            "firstName": string;
            "lastName": string;
            "uuid": string;
        };
        "edited": string;
        "name": string;
        "permissions": {
            "create": boolean;
            "read": boolean;
            "update": boolean;
            "delete": boolean;
            "publish": boolean;
            "readPublished": boolean;
        };
    }[];
    "_metainfo": {
        "currentPage": number;
        "perPage": number;
        "pageCount": number;
        "totalCount": number;
    };
}
export interface ProjectSearchTagsPostResponse {
    "data": {
        "uuid": string;
        "creator": {
            "firstName": string;
            "lastName": string;
            "uuid": string;
        };
        "created": string;
        "editor": {
            "firstName": string;
            "lastName": string;
            "uuid": string;
        };
        "edited": string;
        "tagFamily": {
            "name": string;
            "uuid": string;
        };
        "name": string;
        "permissions": {
            "create": boolean;
            "read": boolean;
            "update": boolean;
            "delete": boolean;
            "publish": boolean;
            "readPublished": boolean;
        };
    }[];
    "_metainfo": {
        "currentPage": number;
        "perPage": number;
        "pageCount": number;
        "totalCount": number;
    };
}
export interface ProjectSchemasGetResponse {
    "data": {
        "uuid": string;
        "displayField": string;
        "segmentField": string;
        "container": boolean;
        "version": number;
        "name": string;
        "fields": any;
        "permissions": {
            "create": boolean;
            "read": boolean;
            "update": boolean;
            "delete": boolean;
            "publish": boolean;
            "readPublished": boolean;
        };
    }[];
    "_metainfo": {
        "currentPage": number;
        "perPage": number;
        "pageCount": number;
        "totalCount": number;
    };
}
export interface ProjectSchemasSchemaUuidGetResponse {
    "uuid": string;
    "displayField": string;
    "segmentField": string;
    "container": boolean;
    "version": number;
    "name": string;
    "fields": any;
    "permissions": {
        "create": boolean;
        "read": boolean;
        "update": boolean;
        "delete": boolean;
        "publish": boolean;
        "readPublished": boolean;
    };
}
export interface ProjectSchemasSchemaUuidPostResponse {
    "uuid": string;
    "displayField": string;
    "segmentField": string;
    "container": boolean;
    "version": number;
    "name": string;
    "fields": any;
    "permissions": {
        "create": boolean;
        "read": boolean;
        "update": boolean;
        "delete": boolean;
        "publish": boolean;
        "readPublished": boolean;
    };
}
export interface ProjectSchemasSchemaUuidDeleteResponse {
}
export interface ProjectMicroschemasGetResponse {
    "data": {
        "uuid": string;
        "version": number;
        "description": string;
        "name": string;
        "fields": any;
        "permissions": {
            "create": boolean;
            "read": boolean;
            "update": boolean;
            "delete": boolean;
            "publish": boolean;
            "readPublished": boolean;
        };
    }[];
    "_metainfo": {
        "currentPage": number;
        "perPage": number;
        "pageCount": number;
        "totalCount": number;
    };
}
export interface ProjectMicroschemasMicroschemaUuidPostResponse {
    "uuid": string;
    "version": number;
    "description": string;
    "name": string;
    "fields": any;
    "permissions": {
        "create": boolean;
        "read": boolean;
        "update": boolean;
        "delete": boolean;
        "publish": boolean;
        "readPublished": boolean;
    };
}
export interface ProjectMicroschemasMicroschemaUuidDeleteResponse {
}
