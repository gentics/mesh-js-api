import { APIBase } from "../APIBase";
export declare class MeshAPI extends APIBase {
    api: {
        users: {
            post: (data?: any, query?: any, token?: string) => Promise<UsersPostResponse>;
            get: (query?: any, token?: string) => Promise<UsersGetResponse>;
            userUuid: (userUuid: string) => {
                get: (query?: any, token?: string) => Promise<UsersUserUuidGetResponse>;
                post: (data?: any, query?: any, token?: string) => Promise<UsersUserUuidPostResponse>;
                delete: (token?: string) => Promise<UsersUserUuidDeleteResponse>;
                permissions: {
                    path: (path: string) => {
                        get: (query?: any, token?: string) => Promise<UsersUserUuidPermissionsPathGetResponse>;
                    };
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
                users: {
                    get: (query?: any, token?: string) => Promise<GroupsGroupUuidUsersGetResponse>;
                    userUuid: (userUuid: string) => {
                        post: (data?: any, query?: any, token?: string) => Promise<GroupsGroupUuidUsersUserUuidPostResponse>;
                    };
                };
                roles: {
                    get: (query?: any, token?: string) => Promise<GroupsGroupUuidRolesGetResponse>;
                    roleUuid: (roleUuid: string) => {
                        post: (data?: any, query?: any, token?: string) => Promise<GroupsGroupUuidRolesRoleUuidPostResponse>;
                        delete: (token?: string) => Promise<GroupsGroupUuidRolesRoleUuidDeleteResponse>;
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
            post: (data?: any, query?: any, token?: string) => Promise<SchemasPostResponse>;
            get: (query?: any, token?: string) => Promise<SchemasGetResponse>;
            schemaUuid: (schemaUuid: string) => {
                get: (query?: any, token?: string) => Promise<SchemasSchemaUuidGetResponse>;
                post: (data?: any, query?: any, token?: string) => Promise<SchemasSchemaUuidPostResponse>;
                delete: (token?: string) => Promise<SchemasSchemaUuidDeleteResponse>;
                diff: {
                    post: (data?: any, query?: any, token?: string) => Promise<SchemasSchemaUuidDiffPostResponse>;
                };
                changes: {
                    post: (data?: any, query?: any, token?: string) => Promise<SchemasSchemaUuidChangesPostResponse>;
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
                diff: {
                    post: (data?: any, query?: any, token?: string) => Promise<MicroschemasMicroschemaUuidDiffPostResponse>;
                };
                changes: {
                    post: (data?: any, query?: any, token?: string) => Promise<MicroschemasMicroschemaUuidChangesPostResponse>;
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
            users: {
                post: (data?: any, query?: any, token?: string) => Promise<SearchUsersPostResponse>;
            };
            groups: {
                post: (data?: any, query?: any, token?: string) => Promise<SearchGroupsPostResponse>;
            };
            roles: {
                post: (data?: any, query?: any, token?: string) => Promise<SearchRolesPostResponse>;
            };
            nodes: {
                post: (data?: any, query?: any, token?: string) => Promise<SearchNodesPostResponse>;
            };
            tags: {
                post: (data?: any, query?: any, token?: string) => Promise<SearchTagsPostResponse>;
            };
            tagFamilies: {
                post: (data?: any, query?: any, token?: string) => Promise<SearchTagFamiliesPostResponse>;
            };
            projects: {
                post: (data?: any, query?: any, token?: string) => Promise<SearchProjectsPostResponse>;
            };
            schemas: {
                post: (data?: any, query?: any, token?: string) => Promise<SearchSchemasPostResponse>;
            };
            microschemas: {
                post: (data?: any, query?: any, token?: string) => Promise<SearchMicroschemasPostResponse>;
            };
            status: {
                get: (query?: any, token?: string) => Promise<SearchStatusGetResponse>;
            };
            clearBatches: {
                get: (query?: any, token?: string) => Promise<SearchClearBatchesGetResponse>;
            };
            processBatches: {
                get: (query?: any, token?: string) => Promise<SearchProcessBatchesGetResponse>;
            };
            createMappings: {
                get: (query?: any, token?: string) => Promise<SearchCreateMappingsGetResponse>;
            };
            reindex: {
                get: (query?: any, token?: string) => Promise<SearchReindexGetResponse>;
            };
        };
        utilities: {
            linkResolver: {
                post: (data?: any, query?: any, token?: string) => Promise<UtilitiesLinkResolverPostResponse>;
            };
        };
        auth: {
            me: {
                get: (query?: any, token?: string) => Promise<AuthMeGetResponse>;
            };
            login: {
                get: (query?: any, token?: string) => Promise<AuthLoginGetResponse>;
                post: (data?: any, query?: any, token?: string) => Promise<AuthLoginPostResponse>;
            };
            logout: {
                get: (query?: any, token?: string) => Promise<AuthLogoutGetResponse>;
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
                    children: {
                        get: (query?: any, token?: string) => Promise<ProjectNodesNodeUuidChildrenGetResponse>;
                    };
                    tags: {
                        get: (query?: any, token?: string) => Promise<ProjectNodesNodeUuidTagsGetResponse>;
                        tagUuid: (tagUuid: string) => {
                            post: (data?: any, query?: any, token?: string) => Promise<ProjectNodesNodeUuidTagsTagUuidPostResponse>;
                            delete: (token?: string) => Promise<ProjectNodesNodeUuidTagsTagUuidDeleteResponse>;
                        };
                    };
                    moveTo: {
                        toUuid: (toUuid: string) => {
                            post: (data?: any, query?: any, token?: string) => Promise<ProjectNodesNodeUuidMoveToToUuidPostResponse>;
                        };
                    };
                    languages: {
                        language: (language: string) => {
                            delete: (token?: string) => Promise<ProjectNodesNodeUuidLanguagesLanguageDeleteResponse>;
                            fields: {
                                field: (field: string) => {
                                    post: (data?: any, query?: any, token?: string) => Promise<ProjectNodesNodeUuidLanguagesLanguageFieldsFieldPostResponse>;
                                    get: (query?: any, token?: string) => Promise<ProjectNodesNodeUuidLanguagesLanguageFieldsFieldGetResponse>;
                                    delete: (token?: string) => Promise<ProjectNodesNodeUuidLanguagesLanguageFieldsFieldDeleteResponse>;
                                    transform: {
                                        post: (data?: any, query?: any, token?: string) => Promise<ProjectNodesNodeUuidLanguagesLanguageFieldsFieldTransformPostResponse>;
                                    };
                                    itemIndex: (itemIndex: string) => {
                                        delete: (token?: string) => Promise<ProjectNodesNodeUuidLanguagesLanguageFieldsFieldItemIndexDeleteResponse>;
                                        get: (query?: any, token?: string) => Promise<ProjectNodesNodeUuidLanguagesLanguageFieldsFieldItemIndexGetResponse>;
                                        post: (data?: any, query?: any, token?: string) => Promise<ProjectNodesNodeUuidLanguagesLanguageFieldsFieldItemIndexPostResponse>;
                                        move: {
                                            newItemIndex: (newItemIndex: string) => {
                                                post: (data?: any, query?: any, token?: string) => Promise<ProjectNodesNodeUuidLanguagesLanguageFieldsFieldItemIndexMoveNewItemIndexPostResponse>;
                                            };
                                        };
                                    };
                                };
                            };
                            published: {
                                get: (query?: any, token?: string) => Promise<ProjectNodesNodeUuidLanguagesLanguagePublishedGetResponse>;
                            };
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
                    schemas: {
                        get: (query?: any, token?: string) => Promise<ProjectReleasesReleaseUuidSchemasGetResponse>;
                        post: (data?: any, query?: any, token?: string) => Promise<ProjectReleasesReleaseUuidSchemasPostResponse>;
                    };
                    microschemas: {
                        get: (query?: any, token?: string) => Promise<ProjectReleasesReleaseUuidMicroschemasGetResponse>;
                        post: (data?: any, query?: any, token?: string) => Promise<ProjectReleasesReleaseUuidMicroschemasPostResponse>;
                    };
                };
            };
            search: {
                nodes: {
                    post: (data?: any, query?: any, token?: string) => Promise<ProjectSearchNodesPostResponse>;
                };
                tags: {
                    post: (data?: any, query?: any, token?: string) => Promise<ProjectSearchTagsPostResponse>;
                };
                tagFamilies: {
                    post: (data?: any, query?: any, token?: string) => Promise<ProjectSearchTagFamiliesPostResponse>;
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
        "lastName": string;
        "firstName": string;
        "uuid": string;
    };
    "created": string;
    "editor": {
        "lastName": string;
        "firstName": string;
        "uuid": string;
    };
    "edited": string;
    "permissions": string[];
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
}
export interface UsersGetResponse {
    "data": {
        "uuid": string;
        "creator": {
            "lastName": string;
            "firstName": string;
            "uuid": string;
        };
        "created": string;
        "editor": {
            "lastName": string;
            "firstName": string;
            "uuid": string;
        };
        "edited": string;
        "permissions": string[];
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
    }[];
    "_metainfo": {
        "currentPage": number;
        "perPage": number;
        "pageCount": number;
        "totalCount": number;
    };
}
export interface UsersUserUuidGetResponse {
    "uuid": string;
    "creator": {
        "lastName": string;
        "firstName": string;
        "uuid": string;
    };
    "created": string;
    "editor": {
        "lastName": string;
        "firstName": string;
        "uuid": string;
    };
    "edited": string;
    "permissions": string[];
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
}
export interface UsersUserUuidPostResponse {
    "uuid": string;
    "creator": {
        "lastName": string;
        "firstName": string;
        "uuid": string;
    };
    "created": string;
    "editor": {
        "lastName": string;
        "firstName": string;
        "uuid": string;
    };
    "edited": string;
    "permissions": string[];
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
}
export interface UsersUserUuidDeleteResponse {
}
export interface UsersUserUuidPermissionsPathGetResponse {
    "permissions": string[];
}
export interface RolesPostResponse {
    "uuid": string;
    "creator": {
        "lastName": string;
        "firstName": string;
        "uuid": string;
    };
    "created": string;
    "editor": {
        "lastName": string;
        "firstName": string;
        "uuid": string;
    };
    "edited": string;
    "permissions": string[];
    "name": string;
    "groups": {};
}
export interface RolesGetResponse {
    "data": {
        "uuid": string;
        "creator": {
            "lastName": string;
            "firstName": string;
            "uuid": string;
        };
        "created": string;
        "editor": {
            "lastName": string;
            "firstName": string;
            "uuid": string;
        };
        "edited": string;
        "permissions": string[];
        "name": string;
        "groups": {};
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
        "lastName": string;
        "firstName": string;
        "uuid": string;
    };
    "created": string;
    "editor": {
        "lastName": string;
        "firstName": string;
        "uuid": string;
    };
    "edited": string;
    "permissions": string[];
    "name": string;
    "groups": {};
}
export interface RolesRoleUuidPostResponse {
    "uuid": string;
    "creator": {
        "lastName": string;
        "firstName": string;
        "uuid": string;
    };
    "created": string;
    "editor": {
        "lastName": string;
        "firstName": string;
        "uuid": string;
    };
    "edited": string;
    "permissions": string[];
    "name": string;
    "groups": {};
}
export interface RolesRoleUuidDeleteResponse {
}
export interface RolesRoleUuidPermissionsPathToElementPostResponse {
    "message": string;
}
export interface RolesRoleUuidPermissionsPathToElementGetResponse {
    "permissions": string[];
}
export interface GroupsPostResponse {
    "uuid": string;
    "creator": {
        "lastName": string;
        "firstName": string;
        "uuid": string;
    };
    "created": string;
    "editor": {
        "lastName": string;
        "firstName": string;
        "uuid": string;
    };
    "edited": string;
    "permissions": string[];
    "name": string;
    "roles": {
        "name": string;
        "uuid": string;
    }[];
}
export interface GroupsGetResponse {
    "data": {
        "uuid": string;
        "creator": {
            "lastName": string;
            "firstName": string;
            "uuid": string;
        };
        "created": string;
        "editor": {
            "lastName": string;
            "firstName": string;
            "uuid": string;
        };
        "edited": string;
        "permissions": string[];
        "name": string;
        "roles": {
            "name": string;
            "uuid": string;
        }[];
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
        "lastName": string;
        "firstName": string;
        "uuid": string;
    };
    "created": string;
    "editor": {
        "lastName": string;
        "firstName": string;
        "uuid": string;
    };
    "edited": string;
    "permissions": string[];
    "name": string;
    "roles": {
        "name": string;
        "uuid": string;
    }[];
}
export interface GroupsGroupUuidPostResponse {
    "uuid": string;
    "creator": {
        "lastName": string;
        "firstName": string;
        "uuid": string;
    };
    "created": string;
    "editor": {
        "lastName": string;
        "firstName": string;
        "uuid": string;
    };
    "edited": string;
    "permissions": string[];
    "name": string;
    "roles": {
        "name": string;
        "uuid": string;
    }[];
}
export interface GroupsGroupUuidDeleteResponse {
}
export interface GroupsGroupUuidUsersGetResponse {
    "data": {
        "uuid": string;
        "creator": {
            "lastName": string;
            "firstName": string;
            "uuid": string;
        };
        "created": string;
        "editor": {
            "lastName": string;
            "firstName": string;
            "uuid": string;
        };
        "edited": string;
        "permissions": string[];
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
        "lastName": string;
        "firstName": string;
        "uuid": string;
    };
    "created": string;
    "editor": {
        "lastName": string;
        "firstName": string;
        "uuid": string;
    };
    "edited": string;
    "permissions": string[];
    "name": string;
    "roles": {
        "name": string;
        "uuid": string;
    }[];
}
export interface GroupsGroupUuidRolesGetResponse {
    "data": {
        "uuid": string;
        "creator": {
            "lastName": string;
            "firstName": string;
            "uuid": string;
        };
        "created": string;
        "editor": {
            "lastName": string;
            "firstName": string;
            "uuid": string;
        };
        "edited": string;
        "permissions": string[];
        "name": string;
        "groups": {};
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
        "lastName": string;
        "firstName": string;
        "uuid": string;
    };
    "created": string;
    "editor": {
        "lastName": string;
        "firstName": string;
        "uuid": string;
    };
    "edited": string;
    "permissions": string[];
    "name": string;
    "roles": {
        "name": string;
        "uuid": string;
    }[];
}
export interface GroupsGroupUuidRolesRoleUuidDeleteResponse {
}
export interface ProjectsPostResponse {
    "uuid": string;
    "creator": {
        "lastName": string;
        "firstName": string;
        "uuid": string;
    };
    "created": string;
    "editor": {
        "lastName": string;
        "firstName": string;
        "uuid": string;
    };
    "edited": string;
    "permissions": string[];
    "name": string;
    "rootNodeUuid": string;
}
export interface ProjectsGetResponse {
    "data": {
        "uuid": string;
        "creator": {
            "lastName": string;
            "firstName": string;
            "uuid": string;
        };
        "created": string;
        "editor": {
            "lastName": string;
            "firstName": string;
            "uuid": string;
        };
        "edited": string;
        "permissions": string[];
        "name": string;
        "rootNodeUuid": string;
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
        "lastName": string;
        "firstName": string;
        "uuid": string;
    };
    "created": string;
    "editor": {
        "lastName": string;
        "firstName": string;
        "uuid": string;
    };
    "edited": string;
    "permissions": string[];
    "name": string;
    "rootNodeUuid": string;
}
export interface ProjectsProjectUuidPostResponse {
    "uuid": string;
    "creator": {
        "lastName": string;
        "firstName": string;
        "uuid": string;
    };
    "created": string;
    "editor": {
        "lastName": string;
        "firstName": string;
        "uuid": string;
    };
    "edited": string;
    "permissions": string[];
    "name": string;
    "rootNodeUuid": string;
}
export interface ProjectsProjectUuidDeleteResponse {
}
export interface SchemasPostResponse {
    "uuid": string;
    "permissions": string[];
    "version": number;
    "name": string;
    "fields": any;
    "displayField": string;
    "segmentField": string;
    "container": boolean;
}
export interface SchemasGetResponse {
    "data": {
        "uuid": string;
        "permissions": string[];
        "version": number;
        "name": string;
        "fields": any;
        "displayField": string;
        "segmentField": string;
        "container": boolean;
    }[];
    "_metainfo": {
        "currentPage": number;
        "perPage": number;
        "pageCount": number;
        "totalCount": number;
    };
}
export interface SchemasSchemaUuidGetResponse {
    "uuid": string;
    "permissions": string[];
    "version": number;
    "name": string;
    "fields": any;
    "displayField": string;
    "segmentField": string;
    "container": boolean;
}
export interface SchemasSchemaUuidPostResponse {
    "uuid": string;
    "permissions": string[];
    "version": number;
    "name": string;
    "fields": any;
    "displayField": string;
    "segmentField": string;
    "container": boolean;
}
export interface SchemasSchemaUuidDeleteResponse {
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
export interface SchemasSchemaUuidChangesPostResponse {
    "message": string;
}
export interface MicroschemasPostResponse {
    "uuid": string;
    "permissions": string[];
    "version": number;
    "description": string;
    "name": string;
    "fields": any;
}
export interface MicroschemasGetResponse {
    "data": {
        "uuid": string;
        "permissions": string[];
        "version": number;
        "description": string;
        "name": string;
        "fields": any;
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
    "permissions": string[];
    "version": number;
    "description": string;
    "name": string;
    "fields": any;
}
export interface MicroschemasMicroschemaUuidPostResponse {
    "uuid": string;
    "permissions": string[];
    "version": number;
    "description": string;
    "name": string;
    "fields": any;
}
export interface MicroschemasMicroschemaUuidDeleteResponse {
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
export interface MicroschemasMicroschemaUuidChangesPostResponse {
    "message": string;
}
export interface AdminStatusGetResponse {
    "message": string;
}
export interface AdminStatusMigrationsGetResponse {
    "message": string;
}
export interface SearchUsersPostResponse {
    "data": {
        "uuid": string;
        "creator": {
            "lastName": string;
            "firstName": string;
            "uuid": string;
        };
        "created": string;
        "editor": {
            "lastName": string;
            "firstName": string;
            "uuid": string;
        };
        "edited": string;
        "permissions": string[];
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
    }[];
    "_metainfo": {
        "currentPage": number;
        "perPage": number;
        "pageCount": number;
        "totalCount": number;
    };
}
export interface SearchGroupsPostResponse {
    "data": {
        "uuid": string;
        "creator": {
            "lastName": string;
            "firstName": string;
            "uuid": string;
        };
        "created": string;
        "editor": {
            "lastName": string;
            "firstName": string;
            "uuid": string;
        };
        "edited": string;
        "permissions": string[];
        "name": string;
        "roles": {
            "name": string;
            "uuid": string;
        }[];
    }[];
    "_metainfo": {
        "currentPage": number;
        "perPage": number;
        "pageCount": number;
        "totalCount": number;
    };
}
export interface SearchRolesPostResponse {
    "data": {
        "uuid": string;
        "creator": {
            "lastName": string;
            "firstName": string;
            "uuid": string;
        };
        "created": string;
        "editor": {
            "lastName": string;
            "firstName": string;
            "uuid": string;
        };
        "edited": string;
        "permissions": string[];
        "name": string;
        "groups": {};
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
            "lastName": string;
            "firstName": string;
            "uuid": string;
        };
        "created": string;
        "edited": string;
        "permissions": string[];
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
            "lastName": string;
            "firstName": string;
            "uuid": string;
        };
        "created": string;
        "editor": {
            "lastName": string;
            "firstName": string;
            "uuid": string;
        };
        "edited": string;
        "permissions": string[];
        "tagFamily": {
            "name": string;
            "uuid": string;
        };
        "name": string;
    }[];
    "_metainfo": {
        "currentPage": number;
        "perPage": number;
        "pageCount": number;
        "totalCount": number;
    };
}
export interface SearchTagFamiliesPostResponse {
    "data": {
        "creator": {
            "lastName": string;
            "firstName": string;
            "uuid": string;
        };
        "created": string;
        "editor": {
            "lastName": string;
            "firstName": string;
            "uuid": string;
        };
        "edited": string;
        "permissions": string[];
        "name": string;
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
            "lastName": string;
            "firstName": string;
            "uuid": string;
        };
        "created": string;
        "editor": {
            "lastName": string;
            "firstName": string;
            "uuid": string;
        };
        "edited": string;
        "permissions": string[];
        "name": string;
        "rootNodeUuid": string;
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
        "permissions": string[];
        "version": number;
        "name": string;
        "fields": any;
        "displayField": string;
        "segmentField": string;
        "container": boolean;
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
        "permissions": string[];
        "version": number;
        "description": string;
        "name": string;
        "fields": any;
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
export interface SearchClearBatchesGetResponse {
    "message": string;
}
export interface SearchProcessBatchesGetResponse {
    "message": string;
}
export interface SearchCreateMappingsGetResponse {
    "message": string;
}
export interface SearchReindexGetResponse {
    "message": string;
}
export interface UtilitiesLinkResolverPostResponse {
}
export interface AuthMeGetResponse {
    "uuid": string;
    "creator": {
        "lastName": string;
        "firstName": string;
        "uuid": string;
    };
    "created": string;
    "editor": {
        "lastName": string;
        "firstName": string;
        "uuid": string;
    };
    "edited": string;
    "permissions": string[];
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
}
export interface AuthLoginGetResponse {
}
export interface AuthLoginPostResponse {
    "token": string;
}
export interface AuthLogoutGetResponse {
    "message": string;
}
export interface ProjectNodesPostResponse {
    "uuid": string;
    "creator": {
        "lastName": string;
        "firstName": string;
        "uuid": string;
    };
    "created": string;
    "edited": string;
    "permissions": string[];
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
}
export interface ProjectNodesGetResponse {
    "data": {
        "uuid": string;
        "creator": {
            "lastName": string;
            "firstName": string;
            "uuid": string;
        };
        "created": string;
        "edited": string;
        "permissions": string[];
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
        "lastName": string;
        "firstName": string;
        "uuid": string;
    };
    "created": string;
    "edited": string;
    "permissions": string[];
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
}
export interface ProjectNodesNodeUuidPostResponse {
    "uuid": string;
    "creator": {
        "lastName": string;
        "firstName": string;
        "uuid": string;
    };
    "created": string;
    "editor": {
        "lastName": string;
        "firstName": string;
        "uuid": string;
    };
    "edited": string;
    "permissions": string[];
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
}
export interface ProjectNodesNodeUuidDeleteResponse {
}
export interface ProjectNodesNodeUuidChildrenGetResponse {
    "data": {
        "uuid": string;
        "creator": {
            "lastName": string;
            "firstName": string;
            "uuid": string;
        };
        "created": string;
        "edited": string;
        "permissions": string[];
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
    }[];
    "_metainfo": {
        "currentPage": number;
        "perPage": number;
        "pageCount": number;
        "totalCount": number;
    };
}
export interface ProjectNodesNodeUuidTagsGetResponse {
    "data": {
        "uuid": string;
        "creator": {
            "lastName": string;
            "firstName": string;
            "uuid": string;
        };
        "created": string;
        "editor": {
            "lastName": string;
            "firstName": string;
            "uuid": string;
        };
        "edited": string;
        "permissions": string[];
        "tagFamily": {
            "name": string;
            "uuid": string;
        };
        "name": string;
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
        "lastName": string;
        "firstName": string;
        "uuid": string;
    };
    "created": string;
    "editor": {
        "lastName": string;
        "firstName": string;
        "uuid": string;
    };
    "edited": string;
    "permissions": string[];
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
}
export interface ProjectNodesNodeUuidTagsTagUuidDeleteResponse {
}
export interface ProjectNodesNodeUuidMoveToToUuidPostResponse {
}
export interface ProjectNodesNodeUuidLanguagesLanguageDeleteResponse {
}
export interface ProjectNodesNodeUuidLanguagesLanguageFieldsFieldPostResponse {
}
export interface ProjectNodesNodeUuidLanguagesLanguageFieldsFieldGetResponse {
}
export interface ProjectNodesNodeUuidLanguagesLanguageFieldsFieldDeleteResponse {
}
export interface ProjectNodesNodeUuidLanguagesLanguageFieldsFieldTransformPostResponse {
    "message": string;
}
export interface ProjectNodesNodeUuidLanguagesLanguageFieldsFieldItemIndexDeleteResponse {
    "message": string;
}
export interface ProjectNodesNodeUuidLanguagesLanguageFieldsFieldItemIndexGetResponse {
    "message": string;
}
export interface ProjectNodesNodeUuidLanguagesLanguageFieldsFieldItemIndexPostResponse {
}
export interface ProjectNodesNodeUuidLanguagesLanguageFieldsFieldItemIndexMoveNewItemIndexPostResponse {
}
export interface ProjectNodesNodeUuidLanguagesLanguagePublishedGetResponse {
    "published": boolean;
    "version": {
        "uuid": string;
        "number": string;
    };
    "publisher": {
        "lastName": string;
        "firstName": string;
        "uuid": string;
    };
    "publishDate": string;
}
export interface ProjectNodesNodeUuidNavigationGetResponse {
    "root": {
        "uuid": string;
    };
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
                "lastName": string;
                "firstName": string;
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
                "lastName": string;
                "firstName": string;
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
export interface ProjectTagFamiliesGetResponse {
    "data": {
        "creator": {
            "lastName": string;
            "firstName": string;
            "uuid": string;
        };
        "created": string;
        "editor": {
            "lastName": string;
            "firstName": string;
            "uuid": string;
        };
        "edited": string;
        "permissions": string[];
        "name": string;
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
        "lastName": string;
        "firstName": string;
        "uuid": string;
    };
    "created": string;
    "editor": {
        "lastName": string;
        "firstName": string;
        "uuid": string;
    };
    "edited": string;
    "permissions": string[];
    "name": string;
}
export interface ProjectTagFamiliesTagFamilyUuidGetResponse {
    "creator": {
        "lastName": string;
        "firstName": string;
        "uuid": string;
    };
    "created": string;
    "editor": {
        "lastName": string;
        "firstName": string;
        "uuid": string;
    };
    "edited": string;
    "permissions": string[];
    "name": string;
}
export interface ProjectTagFamiliesTagFamilyUuidPostResponse {
    "creator": {
        "lastName": string;
        "firstName": string;
        "uuid": string;
    };
    "created": string;
    "editor": {
        "lastName": string;
        "firstName": string;
        "uuid": string;
    };
    "edited": string;
    "permissions": string[];
    "name": string;
}
export interface ProjectTagFamiliesTagFamilyUuidDeleteResponse {
}
export interface ProjectTagFamiliesTagFamilyUuidTagsGetResponse {
    "data": {
        "uuid": string;
        "creator": {
            "lastName": string;
            "firstName": string;
            "uuid": string;
        };
        "created": string;
        "editor": {
            "lastName": string;
            "firstName": string;
            "uuid": string;
        };
        "edited": string;
        "permissions": string[];
        "tagFamily": {
            "name": string;
            "uuid": string;
        };
        "name": string;
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
        "lastName": string;
        "firstName": string;
        "uuid": string;
    };
    "created": string;
    "editor": {
        "lastName": string;
        "firstName": string;
        "uuid": string;
    };
    "edited": string;
    "permissions": string[];
    "tagFamily": {
        "name": string;
        "uuid": string;
    };
    "name": string;
}
export interface ProjectTagFamiliesTagFamilyUuidTagsTagUuidPostResponse {
    "uuid": string;
    "creator": {
        "lastName": string;
        "firstName": string;
        "uuid": string;
    };
    "created": string;
    "editor": {
        "lastName": string;
        "firstName": string;
        "uuid": string;
    };
    "edited": string;
    "permissions": string[];
    "tagFamily": {
        "name": string;
        "uuid": string;
    };
    "name": string;
}
export interface ProjectTagFamiliesTagFamilyUuidTagsTagUuidDeleteResponse {
}
export interface ProjectTagFamiliesTagFamilyUuidTagsTagUuidNodesGetResponse {
    "data": {
        "uuid": string;
        "creator": {
            "lastName": string;
            "firstName": string;
            "uuid": string;
        };
        "created": string;
        "edited": string;
        "permissions": string[];
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
    }[];
    "_metainfo": {
        "currentPage": number;
        "perPage": number;
        "pageCount": number;
        "totalCount": number;
    };
}
export interface ProjectNavrootPathGetResponse {
    "root": {
        "uuid": string;
        "node": {
            "uuid": string;
            "creator": {
                "lastName": string;
                "firstName": string;
                "uuid": string;
            };
            "created": string;
            "edited": string;
            "permissions": string[];
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
        };
        "children": {
            "uuid": string;
            "node": {
                "uuid": string;
                "creator": {
                    "lastName": string;
                    "firstName": string;
                    "uuid": string;
                };
                "created": string;
                "edited": string;
                "permissions": string[];
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
            };
        }[];
    };
}
export interface ProjectWebrootPathGetResponse {
}
export interface ProjectReleasesPostResponse {
    "uuid": string;
    "creator": {
        "lastName": string;
        "firstName": string;
        "uuid": string;
    };
    "created": string;
    "editor": {
        "lastName": string;
        "firstName": string;
        "uuid": string;
    };
    "edited": string;
    "permissions": string[];
    "rolePerms": string[];
    "name": string;
    "migrated": boolean;
}
export interface ProjectReleasesGetResponse {
    "data": {
        "uuid": string;
        "creator": {
            "lastName": string;
            "firstName": string;
            "uuid": string;
        };
        "created": string;
        "editor": {
            "lastName": string;
            "firstName": string;
            "uuid": string;
        };
        "edited": string;
        "permissions": string[];
        "rolePerms": string[];
        "name": string;
        "migrated": boolean;
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
        "lastName": string;
        "firstName": string;
        "uuid": string;
    };
    "created": string;
    "editor": {
        "lastName": string;
        "firstName": string;
        "uuid": string;
    };
    "edited": string;
    "permissions": string[];
    "rolePerms": string[];
    "name": string;
    "migrated": boolean;
}
export interface ProjectReleasesReleaseUuidPostResponse {
    "uuid": string;
    "creator": {
        "lastName": string;
        "firstName": string;
        "uuid": string;
    };
    "created": string;
    "editor": {
        "lastName": string;
        "firstName": string;
        "uuid": string;
    };
    "edited": string;
    "permissions": string[];
    "rolePerms": string[];
    "name": string;
    "migrated": boolean;
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
export interface ProjectSearchNodesPostResponse {
    "data": {
        "uuid": string;
        "creator": {
            "lastName": string;
            "firstName": string;
            "uuid": string;
        };
        "created": string;
        "edited": string;
        "permissions": string[];
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
            "lastName": string;
            "firstName": string;
            "uuid": string;
        };
        "created": string;
        "editor": {
            "lastName": string;
            "firstName": string;
            "uuid": string;
        };
        "edited": string;
        "permissions": string[];
        "tagFamily": {
            "name": string;
            "uuid": string;
        };
        "name": string;
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
            "lastName": string;
            "firstName": string;
            "uuid": string;
        };
        "created": string;
        "editor": {
            "lastName": string;
            "firstName": string;
            "uuid": string;
        };
        "edited": string;
        "permissions": string[];
        "name": string;
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
        "permissions": string[];
        "version": number;
        "name": string;
        "fields": any;
        "displayField": string;
        "segmentField": string;
        "container": boolean;
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
    "permissions": string[];
    "version": number;
    "name": string;
    "fields": any;
    "displayField": string;
    "segmentField": string;
    "container": boolean;
}
export interface ProjectSchemasSchemaUuidPostResponse {
    "uuid": string;
    "permissions": string[];
    "version": number;
    "name": string;
    "fields": any;
    "displayField": string;
    "segmentField": string;
    "container": boolean;
}
export interface ProjectSchemasSchemaUuidDeleteResponse {
}
export interface ProjectMicroschemasGetResponse {
    "data": {
        "uuid": string;
        "permissions": string[];
        "version": number;
        "description": string;
        "name": string;
        "fields": any;
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
    "permissions": string[];
    "version": number;
    "description": string;
    "name": string;
    "fields": any;
}
export interface ProjectMicroschemasMicroschemaUuidDeleteResponse {
}
