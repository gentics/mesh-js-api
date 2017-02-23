import {APIBase} from "../APIBase";
    export class MeshAPI extends APIBase {
        version = '0.7';
        api = { /**
    * Resource /users
    * Provides endpoints which allow the manipulation of users.
    */ 
    users: {
        /**
     * Method post
     * Create a new user.
     * Example
     * {
     *   "uuid" : "710c52eeb9a54b638c52eeb9a52b63fa",
     *   "creator" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "5f7f4d8d1c8f4301bf4d8d1c8fc30199"
     *   },
     *   "created" : "2017-02-23T09:07:46.247Z",
     *   "editor" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "b4dab2bcd2a54fac9ab2bcd2a57facaa"
     *   },
     *   "edited" : "2017-02-23T09:07:46.247Z",
     *   "lastname" : "Doe",
     *   "firstname" : "Joe",
     *   "username" : "newuser",
     *   "emailAddress" : "j.doe@nowhere.com",
     *   "nodeReference" : {
     *     "projectName" : "dummy",
     *     "uuid" : "a8f9cb317076402bb9cb317076302b60"
     *   },
     *   "enabled" : true,
     *   "groups" : [ {
     *     "name" : "editors",
     *     "uuid" : "edfb66916bb445b0bb66916bb4b5b0c8"
     *   } ],
     *   "permissions" : {
     *     "create" : true,
     *     "read" : true,
     *     "update" : true,
     *     "delete" : true,
     *     "publish" : false,
     *     "readPublished" : false
     *   }
     * }
     * 
     */
post: (data?: any, query?: any, token?: string):Promise<UsersPostResponse> => {
                    return this.post(`/users`, data, query, token); },
    /**
     * Method get
     * Load multiple users and return a paged list response.
     * Example
     * {
     *   "data" : [ {
     *     "uuid" : "12ccb22822cf473f8cb22822cf673fa9",
     *     "creator" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "dc66b6cb86f9498ea6b6cb86f9398ee3"
     *     },
     *     "created" : "2017-02-23T09:07:46.249Z",
     *     "editor" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "65a33e07438046d6a33e074380d6d64b"
     *     },
     *     "edited" : "2017-02-23T09:07:46.249Z",
     *     "lastname" : "Doe",
     *     "firstname" : "Joe",
     *     "username" : "jdoe",
     *     "emailAddress" : "j.doe@nowhere.com",
     *     "nodeReference" : {
     *       "projectName" : "dummy",
     *       "uuid" : "5c63d4b13bec49a0a3d4b13becf9a086"
     *     },
     *     "enabled" : true,
     *     "groups" : [ {
     *       "name" : "editors",
     *       "uuid" : "050a18cfc90a4fbd8a18cfc90a9fbd9d"
     *     } ],
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : true,
     *       "delete" : true,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   }, {
     *     "uuid" : "4165dcc9edee47afa5dcc9edee67afdd",
     *     "creator" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "1869a4773ba84defa9a4773ba83def44"
     *     },
     *     "created" : "2017-02-23T09:07:46.249Z",
     *     "editor" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "04c88900378242328889003782a232a8"
     *     },
     *     "edited" : "2017-02-23T09:07:46.249Z",
     *     "lastname" : "Roe",
     *     "firstname" : "Jane",
     *     "username" : "jroe",
     *     "emailAddress" : "j.roe@nowhere.com",
     *     "nodeReference" : {
     *       "projectName" : "dummy",
     *       "uuid" : "04180badf9e54896980badf9e578965a"
     *     },
     *     "enabled" : true,
     *     "groups" : [ {
     *       "name" : "editors",
     *       "uuid" : "e1d1f94f310d404f91f94f310d604fed"
     *     }, {
     *       "name" : "super-editors",
     *       "uuid" : "38aed45a258f4557aed45a258ff5576e"
     *     }, {
     *       "name" : "editors",
     *       "uuid" : "6a262b40b11e4270a62b40b11ed27008"
     *     } ],
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : true,
     *       "delete" : true,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   } ],
     *   "_metainfo" : {
     *     "currentPage" : 1,
     *     "perPage" : 2,
     *     "pageCount" : 10,
     *     "totalCount" : 20
     *   }
     * }
     * 
     */
get: (query?: any, token?: string):Promise<UsersGetResponse> => {
                    return this.get(`/users`, query, token); },
    /**
    * Resource /users/{userUuid}
    * 
    */ 
    userUuid: (userUuid: string) => {
        return {
        /**
     * Method post
     * Update the user with the given uuid.
     * Example
     * {
     *   "uuid" : "ea1063357bef496d9063357befb96db0",
     *   "creator" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "026295d8696c44aea295d8696c54ae0b"
     *   },
     *   "created" : "2017-02-23T09:07:46.244Z",
     *   "editor" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "4b7bbb70a4c04b26bbbb70a4c04b26b3"
     *   },
     *   "edited" : "2017-02-23T09:07:46.244Z",
     *   "lastname" : "Doe",
     *   "firstname" : "Joe",
     *   "username" : "jdoe42",
     *   "emailAddress" : "j.doe@nowhere.com",
     *   "nodeReference" : {
     *     "projectName" : "dummy",
     *     "uuid" : "436ab944812840f9aab944812860f9c7"
     *   },
     *   "enabled" : true,
     *   "groups" : [ {
     *     "name" : "editors",
     *     "uuid" : "c69b6a0edfff42859b6a0edfff12851c"
     *   } ],
     *   "permissions" : {
     *     "create" : true,
     *     "read" : true,
     *     "update" : true,
     *     "delete" : true,
     *     "publish" : false,
     *     "readPublished" : false
     *   }
     * }
     * 
     */
post: (data?: any, query?: any, token?: string):Promise<UsersUserUuidPostResponse> => {
                    return this.post(`/users/${userUuid}`, data, query, token); },
    /**
     * Method get
     * Read the user with the given uuid
     * Example
     * {
     *   "uuid" : "e4b74a2ad0984520b74a2ad098152090",
     *   "creator" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "a77f3e3a817d46c7bf3e3a817d16c704"
     *   },
     *   "created" : "2017-02-23T09:07:46.248Z",
     *   "editor" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "8a1a670be78746779a670be787c67733"
     *   },
     *   "edited" : "2017-02-23T09:07:46.248Z",
     *   "lastname" : "Doe",
     *   "firstname" : "Joe",
     *   "username" : "jdoe",
     *   "emailAddress" : "j.doe@nowhere.com",
     *   "nodeReference" : {
     *     "projectName" : "dummy",
     *     "uuid" : "24aa275216ec4cf8aa275216ecacf861"
     *   },
     *   "enabled" : true,
     *   "groups" : [ {
     *     "name" : "editors",
     *     "uuid" : "789e07bdabbb4fa89e07bdabbb5fa80e"
     *   } ],
     *   "permissions" : {
     *     "create" : true,
     *     "read" : true,
     *     "update" : true,
     *     "delete" : true,
     *     "publish" : false,
     *     "readPublished" : false
     *   }
     * }
     * 
     */
get: (query?: any, token?: string):Promise<UsersUserUuidGetResponse> => {
                    return this.get(`/users/${userUuid}`, query, token); },
    /**
     * Method delete
     * Deactivate the user with the given uuid. Please note that users can't be deleted since they are needed to construct creator/editor information.
     * Example
     * 
     */
delete: (token?: string):Promise<UsersUserUuidDeleteResponse> => {
                    return this.delete(`/users/${userUuid}`, token); },
    /**
    * Resource /users/{userUuid}/permissions
    * 
    */ 
    permissions: {
    
    /**
    * Resource /users/{userUuid}/permissions/{path}
    * 
    */ 
    path: (path: string) => {
        return {
        /**
     * Method get
     * Read the user permissions on the element/s that are located by the specified path.
     * Example
     * {
     *   "create" : true,
     *   "read" : true,
     *   "update" : true,
     *   "delete" : true
     * }
     * 
     */
get: (query?: any, token?: string):Promise<UsersUserUuidPermissionsPathGetResponse> => {
                    return this.get(`/users/${userUuid}/permissions/${path}`, query, token); },
    
        };
    }
    // -- end resource {path} -- 
    
    }
    // -- end resource permissions -- 
    ,
/**
    * Resource /users/{userUuid}/token
    * 
    */ 
    token: {
        /**
     * Method get
     * Return a one time token which can be used by any user to update a user (e.g.: Reset the password)
     * Example
     * {
     *   "token" : "C9WXSXVhJgkh",
     *   "created" : "2017-02-23T09:07:46.253Z"
     * }
     * 
     */
get: (query?: any, token?: string):Promise<UsersUserUuidTokenGetResponse> => {
                    return this.get(`/users/${userUuid}/token`, query, token); },
    
    }
    // -- end resource token -- 
    
        };
    }
    // -- end resource {userUuid} -- 
    
    }
    // -- end resource users -- 
    ,
/**
    * Resource /roles
    * Provides endpoints which allow the manipulation of roles.
    */ 
    roles: {
        /**
     * Method post
     * Create a new role.
     * Example
     * {
     *   "uuid" : "6d196abf85a94761996abf85a9076174",
     *   "creator" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "f34c3d8fc37e4d388c3d8fc37ead38a1"
     *   },
     *   "created" : "2017-02-23T09:07:46.279Z",
     *   "editor" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "0813da6025bd450493da6025bd45042a"
     *   },
     *   "edited" : "2017-02-23T09:07:46.279Z",
     *   "name" : "New role",
     *   "groups" : [ ],
     *   "permissions" : {
     *     "create" : true,
     *     "read" : true,
     *     "update" : true,
     *     "delete" : true,
     *     "publish" : false,
     *     "readPublished" : false
     *   }
     * }
     * 
     */
post: (data?: any, query?: any, token?: string):Promise<RolesPostResponse> => {
                    return this.post(`/roles`, data, query, token); },
    /**
     * Method get
     * Load multiple roles and return a paged list response
     * Example
     * {
     *   "data" : [ {
     *     "uuid" : "ef6259c47baa45eca259c47baa85ec61",
     *     "creator" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "c41d98bbda044ae49d98bbda040ae4fc"
     *     },
     *     "created" : "2017-02-23T09:07:46.281Z",
     *     "editor" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "163c0c01196d481cbc0c01196d481c5a"
     *     },
     *     "edited" : "2017-02-23T09:07:46.281Z",
     *     "name" : "Reader role",
     *     "groups" : [ ],
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : true,
     *       "delete" : true,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   }, {
     *     "uuid" : "4dc1edd7aad345a081edd7aad3d5a089",
     *     "creator" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "6fa16d5b41b34ab7a16d5b41b3fab7ec"
     *     },
     *     "created" : "2017-02-23T09:07:46.281Z",
     *     "editor" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "93209fd14f0f48dca09fd14f0fc8dceb"
     *     },
     *     "edited" : "2017-02-23T09:07:46.281Z",
     *     "name" : "Admin role",
     *     "groups" : [ {
     *       "name" : "editors",
     *       "uuid" : "41ee3c1475a247c9ae3c1475a2c7c92d"
     *     }, {
     *       "name" : "guests",
     *       "uuid" : "f7e29c671cd84891a29c671cd8f8913f"
     *     } ],
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : true,
     *       "delete" : true,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   } ],
     *   "_metainfo" : {
     *     "currentPage" : 1,
     *     "perPage" : 2,
     *     "pageCount" : 10,
     *     "totalCount" : 20
     *   }
     * }
     * 
     */
get: (query?: any, token?: string):Promise<RolesGetResponse> => {
                    return this.get(`/roles`, query, token); },
    /**
    * Resource /roles/{roleUuid}
    * 
    */ 
    roleUuid: (roleUuid: string) => {
        return {
        /**
     * Method get
     * Load the role with the given uuid.
     * Example
     * {
     *   "uuid" : "d2b63cf4824b489eb63cf4824b889e49",
     *   "creator" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "bc7d9c7dcea44343bd9c7dcea4c343cb"
     *   },
     *   "created" : "2017-02-23T09:07:46.280Z",
     *   "editor" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "4ed18c0cd255474b918c0cd255074b36"
     *   },
     *   "edited" : "2017-02-23T09:07:46.280Z",
     *   "name" : "Admin Role",
     *   "groups" : [ ],
     *   "permissions" : {
     *     "create" : true,
     *     "read" : true,
     *     "update" : true,
     *     "delete" : true,
     *     "publish" : false,
     *     "readPublished" : false
     *   }
     * }
     * 
     */
get: (query?: any, token?: string):Promise<RolesRoleUuidGetResponse> => {
                    return this.get(`/roles/${roleUuid}`, query, token); },
    /**
     * Method post
     * Update the role with the given uuid.
     * Example
     * {
     *   "uuid" : "4f4e9b88db484d228e9b88db486d227c",
     *   "creator" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "ff039354ed2f4c8f839354ed2f3c8f85"
     *   },
     *   "created" : "2017-02-23T09:07:46.281Z",
     *   "editor" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "f2c9983e50cf48e189983e50cf18e122"
     *   },
     *   "edited" : "2017-02-23T09:07:46.282Z",
     *   "name" : "New role name",
     *   "groups" : [ ],
     *   "permissions" : {
     *     "create" : true,
     *     "read" : true,
     *     "update" : true,
     *     "delete" : true,
     *     "publish" : false,
     *     "readPublished" : false
     *   }
     * }
     * 
     */
post: (data?: any, query?: any, token?: string):Promise<RolesRoleUuidPostResponse> => {
                    return this.post(`/roles/${roleUuid}`, data, query, token); },
    /**
     * Method delete
     * Delete the role with the given uuid
     * Example
     * 
     */
delete: (token?: string):Promise<RolesRoleUuidDeleteResponse> => {
                    return this.delete(`/roles/${roleUuid}`, token); },
    /**
    * Resource /roles/{roleUuid}/permissions
    * 
    */ 
    permissions: {
    
    /**
    * Resource /roles/{roleUuid}/permissions/{pathToElement}
    * 
    */ 
    pathToElement: (pathToElement: string) => {
        return {
        /**
     * Method post
     * Set the permissions between role and the targeted element.
     * Example
     * {
     *   "message" : "I18n message"
     * }
     * 
     */
post: (data?: any, query?: any, token?: string):Promise<RolesRoleUuidPermissionsPathToElementPostResponse> => {
                    return this.post(`/roles/${roleUuid}/permissions/${pathToElement}`, data, query, token); },
    /**
     * Method get
     * Load the permissions between given role and the targeted element.
     * Example
     * {
     *   "create" : true,
     *   "read" : true,
     *   "update" : true,
     *   "delete" : true,
     *   "publish" : false,
     *   "readPublished" : false
     * }
     * 
     */
get: (query?: any, token?: string):Promise<RolesRoleUuidPermissionsPathToElementGetResponse> => {
                    return this.get(`/roles/${roleUuid}/permissions/${pathToElement}`, query, token); },
    
        };
    }
    // -- end resource {pathToElement} -- 
    
    }
    // -- end resource permissions -- 
    
        };
    }
    // -- end resource {roleUuid} -- 
    
    }
    // -- end resource roles -- 
    ,
/**
    * Resource /groups
    * Provides endpoints which allow the manipulation of groups.
    */ 
    groups: {
        /**
     * Method post
     * Create a new group.
     * Example
     * {
     *   "uuid" : "905cd62fb2fe49489cd62fb2fe094835",
     *   "creator" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "e580aaeebed74a3b80aaeebed7ca3b3d"
     *   },
     *   "created" : "2017-02-23T09:07:46.314Z",
     *   "editor" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "0a769801bc5e48beb69801bc5ef8be5f"
     *   },
     *   "edited" : "2017-02-23T09:07:46.314Z",
     *   "name" : "New group",
     *   "roles" : [ {
     *     "name" : "admin",
     *     "uuid" : "ad16c2c18c6e4a8096c2c18c6e3a8035"
     *   } ],
     *   "permissions" : {
     *     "create" : true,
     *     "read" : true,
     *     "update" : true,
     *     "delete" : true,
     *     "publish" : false,
     *     "readPublished" : false
     *   }
     * }
     * 
     */
post: (data?: any, query?: any, token?: string):Promise<GroupsPostResponse> => {
                    return this.post(`/groups`, data, query, token); },
    /**
     * Method get
     * Read multiple groups and return a paged list response.
     * Example
     * {
     *   "data" : [ {
     *     "uuid" : "c843c31eaadb4c1983c31eaadb7c1987",
     *     "creator" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "b44e4925a5cf4c178e4925a5cfcc1762"
     *     },
     *     "created" : "2017-02-23T09:07:46.315Z",
     *     "editor" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "8ff65304cec44c37b65304cec46c3783"
     *     },
     *     "edited" : "2017-02-23T09:07:46.315Z",
     *     "name" : "Admin Group",
     *     "roles" : [ {
     *       "name" : "admin",
     *       "uuid" : "b901ccebecc04a0581ccebecc02a052b"
     *     } ],
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : true,
     *       "delete" : true,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   }, {
     *     "uuid" : "c9bcedc0344d4661bcedc0344d366190",
     *     "name" : "Editor Group",
     *     "roles" : [ ],
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : true,
     *       "delete" : true,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   } ],
     *   "_metainfo" : {
     *     "currentPage" : 1,
     *     "perPage" : 2,
     *     "pageCount" : 10,
     *     "totalCount" : 20
     *   }
     * }
     * 
     */
get: (query?: any, token?: string):Promise<GroupsGetResponse> => {
                    return this.get(`/groups`, query, token); },
    /**
    * Resource /groups/{groupUuid}
    * 
    */ 
    groupUuid: (groupUuid: string) => {
        return {
        /**
     * Method get
     * Read the group with the given uuid.
     * Example
     * {
     *   "uuid" : "0564eb835bf2496da4eb835bf2496d33",
     *   "creator" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "46cdea0468ab4b588dea0468abdb58f1"
     *   },
     *   "created" : "2017-02-23T09:07:46.314Z",
     *   "editor" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "780b746c37d94bf68b746c37d95bf603"
     *   },
     *   "edited" : "2017-02-23T09:07:46.314Z",
     *   "name" : "Admin Group",
     *   "roles" : [ {
     *     "name" : "admin",
     *     "uuid" : "f69fa70949864cdc9fa7094986acdc8f"
     *   } ],
     *   "permissions" : {
     *     "create" : true,
     *     "read" : true,
     *     "update" : true,
     *     "delete" : true,
     *     "publish" : false,
     *     "readPublished" : false
     *   }
     * }
     * 
     */
get: (query?: any, token?: string):Promise<GroupsGroupUuidGetResponse> => {
                    return this.get(`/groups/${groupUuid}`, query, token); },
    /**
     * Method post
     * Update the group with the given uuid.
     * Example
     * {
     *   "uuid" : "eff326913bd04671b326913bd0067150",
     *   "creator" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "7fc77c1213ef4cdb877c1213ef6cdb34"
     *   },
     *   "created" : "2017-02-23T09:07:46.316Z",
     *   "editor" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "a743b5497a7f486f83b5497a7f686ffc"
     *   },
     *   "edited" : "2017-02-23T09:07:46.316Z",
     *   "name" : "New group name",
     *   "roles" : [ {
     *     "name" : "admin",
     *     "uuid" : "875110093bdc4fbd9110093bdc2fbd95"
     *   } ],
     *   "permissions" : {
     *     "create" : true,
     *     "read" : true,
     *     "update" : true,
     *     "delete" : true,
     *     "publish" : false,
     *     "readPublished" : false
     *   }
     * }
     * 
     */
post: (data?: any, query?: any, token?: string):Promise<GroupsGroupUuidPostResponse> => {
                    return this.post(`/groups/${groupUuid}`, data, query, token); },
    /**
     * Method delete
     * Delete the given group.
     * Example
     * 
     */
delete: (token?: string):Promise<GroupsGroupUuidDeleteResponse> => {
                    return this.delete(`/groups/${groupUuid}`, token); },
    /**
    * Resource /groups/{groupUuid}/roles
    * 
    */ 
    roles: {
        /**
     * Method get
     * Load multiple roles that are assigned to the group. Return a paged list response.
     * Example
     * {
     *   "data" : [ {
     *     "uuid" : "0dd0305b464245f790305b464275f717",
     *     "creator" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "c955d50b909f4c0895d50b909f5c087d"
     *     },
     *     "created" : "2017-02-23T09:07:46.307Z",
     *     "editor" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "70725bb58ecb442eb25bb58ecb442eac"
     *     },
     *     "edited" : "2017-02-23T09:07:46.307Z",
     *     "name" : "Reader role",
     *     "groups" : [ ],
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : true,
     *       "delete" : true,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   }, {
     *     "uuid" : "ced098bb4b5a4f399098bb4b5a7f39fc",
     *     "creator" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "51aef7d3c39e477baef7d3c39e177b54"
     *     },
     *     "created" : "2017-02-23T09:07:46.307Z",
     *     "editor" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "bda45343cd7c452da45343cd7c852d61"
     *     },
     *     "edited" : "2017-02-23T09:07:46.307Z",
     *     "name" : "Admin role",
     *     "groups" : [ {
     *       "name" : "editors",
     *       "uuid" : "89cef87abd994ca08ef87abd994ca028"
     *     }, {
     *       "name" : "guests",
     *       "uuid" : "6194a87263554e9494a8726355ce9447"
     *     } ],
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : true,
     *       "delete" : true,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   } ],
     *   "_metainfo" : {
     *     "currentPage" : 1,
     *     "perPage" : 2,
     *     "pageCount" : 10,
     *     "totalCount" : 20
     *   }
     * }
     * 
     */
get: (query?: any, token?: string):Promise<GroupsGroupUuidRolesGetResponse> => {
                    return this.get(`/groups/${groupUuid}/roles`, query, token); },
    /**
    * Resource /groups/{groupUuid}/roles/{roleUuid}
    * 
    */ 
    roleUuid: (roleUuid: string) => {
        return {
        /**
     * Method post
     * Add the specified role to the group.
     * Example
     * {
     *   "uuid" : "4ed8607b96c445b298607b96c425b254",
     *   "creator" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "0953922d204e40fa93922d204e80face"
     *   },
     *   "created" : "2017-02-23T09:07:46.312Z",
     *   "editor" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "e51db0710b8d4b369db0710b8ddb3618"
     *   },
     *   "edited" : "2017-02-23T09:07:46.312Z",
     *   "name" : "Group name",
     *   "roles" : [ {
     *     "name" : "admin",
     *     "uuid" : "e954dac2142d447a94dac2142dd47ae1"
     *   } ],
     *   "permissions" : {
     *     "create" : true,
     *     "read" : true,
     *     "update" : true,
     *     "delete" : true,
     *     "publish" : false,
     *     "readPublished" : false
     *   }
     * }
     * 
     */
post: (data?: any, query?: any, token?: string):Promise<GroupsGroupUuidRolesRoleUuidPostResponse> => {
                    return this.post(`/groups/${groupUuid}/roles/${roleUuid}`, data, query, token); },
    /**
     * Method delete
     * Remove the given role from the group.
     * Example
     * 
     */
delete: (token?: string):Promise<GroupsGroupUuidRolesRoleUuidDeleteResponse> => {
                    return this.delete(`/groups/${groupUuid}/roles/${roleUuid}`, token); },
    
        };
    }
    // -- end resource {roleUuid} -- 
    
    }
    // -- end resource roles -- 
    ,
/**
    * Resource /groups/{groupUuid}/users
    * 
    */ 
    users: {
        /**
     * Method get
     * Load a list of users which have been assigned to the group.
     * Example
     * {
     *   "data" : [ {
     *     "uuid" : "0b00dec2c82b463080dec2c82b963011",
     *     "creator" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "64518745d1964464918745d196c464a7"
     *     },
     *     "created" : "2017-02-23T09:07:46.300Z",
     *     "editor" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "2ae7651833c246d3a7651833c296d3d0"
     *     },
     *     "edited" : "2017-02-23T09:07:46.300Z",
     *     "lastname" : "Doe",
     *     "firstname" : "Joe",
     *     "username" : "jdoe",
     *     "emailAddress" : "j.doe@nowhere.com",
     *     "nodeReference" : {
     *       "projectName" : "dummy",
     *       "uuid" : "46bd8cc2a30245babd8cc2a30275bac3"
     *     },
     *     "enabled" : true,
     *     "groups" : [ {
     *       "name" : "editors",
     *       "uuid" : "307635a6c1a349d8b635a6c1a3c9d810"
     *     } ],
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : true,
     *       "delete" : true,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   }, {
     *     "uuid" : "b0df8b902e0148519f8b902e01485112",
     *     "creator" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "f800f64792b646c980f64792b606c9a7"
     *     },
     *     "created" : "2017-02-23T09:07:46.300Z",
     *     "editor" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "1359b8e3050c424a99b8e3050c124a47"
     *     },
     *     "edited" : "2017-02-23T09:07:46.300Z",
     *     "lastname" : "Roe",
     *     "firstname" : "Jane",
     *     "username" : "jroe",
     *     "emailAddress" : "j.roe@nowhere.com",
     *     "nodeReference" : {
     *       "projectName" : "dummy",
     *       "uuid" : "e97f9ad4d3384196bf9ad4d338519600"
     *     },
     *     "enabled" : true,
     *     "groups" : [ {
     *       "name" : "editors",
     *       "uuid" : "0699d0b88ed44c9b99d0b88ed46c9b76"
     *     }, {
     *       "name" : "super-editors",
     *       "uuid" : "0617e1e54811442797e1e548113427d7"
     *     }, {
     *       "name" : "editors",
     *       "uuid" : "750c442708f94af78c442708f90af70c"
     *     } ],
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : true,
     *       "delete" : true,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   } ],
     *   "_metainfo" : {
     *     "currentPage" : 1,
     *     "perPage" : 2,
     *     "pageCount" : 10,
     *     "totalCount" : 20
     *   }
     * }
     * 
     */
get: (query?: any, token?: string):Promise<GroupsGroupUuidUsersGetResponse> => {
                    return this.get(`/groups/${groupUuid}/users`, query, token); },
    /**
    * Resource /groups/{groupUuid}/users/{userUuid}
    * 
    */ 
    userUuid: (userUuid: string) => {
        return {
        /**
     * Method post
     * Add the given user to the group
     * Example
     * {
     *   "uuid" : "51824dfcde6e4e41824dfcde6eae4171",
     *   "creator" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "16fe5f70d3104417be5f70d31054170d"
     *   },
     *   "created" : "2017-02-23T09:07:46.306Z",
     *   "editor" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "209efa40efdb48f99efa40efdbd8f966"
     *   },
     *   "edited" : "2017-02-23T09:07:46.306Z",
     *   "name" : "Group name",
     *   "roles" : [ {
     *     "name" : "admin",
     *     "uuid" : "fa1fb211114044689fb21111405468bc"
     *   } ],
     *   "permissions" : {
     *     "create" : true,
     *     "read" : true,
     *     "update" : true,
     *     "delete" : true,
     *     "publish" : false,
     *     "readPublished" : false
     *   }
     * }
     * 
     */
post: (data?: any, query?: any, token?: string):Promise<GroupsGroupUuidUsersUserUuidPostResponse> => {
                    return this.post(`/groups/${groupUuid}/users/${userUuid}`, data, query, token); },
    
        };
    }
    // -- end resource {userUuid} -- 
    
    }
    // -- end resource users -- 
    
        };
    }
    // -- end resource {groupUuid} -- 
    
    }
    // -- end resource groups -- 
    ,
/**
    * Resource /projects
    * Provides endpoints which allow the manipulation of projects.
    */ 
    projects: {
        /**
     * Method post
     * Create a new project.
     * Example
     * {
     *   "uuid" : "0e5f4b37b73b4c789f4b37b73b3c7833",
     *   "creator" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "924a78f3dec84c378a78f3dec89c37a6"
     *   },
     *   "created" : "2017-02-23T09:07:46.337Z",
     *   "editor" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "3431e463562d4563b1e463562d05635e"
     *   },
     *   "edited" : "2017-02-23T09:07:46.337Z",
     *   "name" : "New Project",
     *   "rootNode" : {
     *     "uuid" : "1b3a7e4eca5041b5ba7e4eca50e1b5c6"
     *   },
     *   "permissions" : {
     *     "create" : true,
     *     "read" : true,
     *     "update" : false,
     *     "delete" : true,
     *     "publish" : false,
     *     "readPublished" : false
     *   }
     * }
     * 
     */
post: (data?: any, query?: any, token?: string):Promise<ProjectsPostResponse> => {
                    return this.post(`/projects`, data, query, token); },
    /**
     * Method get
     * Load multiple projects and return a paged response.
     * Example
     * {
     *   "data" : [ {
     *     "uuid" : "344b565390244fa78b565390241fa728",
     *     "creator" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "59e672f4c3294aada672f4c3296aad7a"
     *     },
     *     "created" : "2017-02-23T09:07:46.339Z",
     *     "editor" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "dbce08b22ffc4f048e08b22ffcdf0405"
     *     },
     *     "edited" : "2017-02-23T09:07:46.339Z",
     *     "name" : "Dummy project",
     *     "rootNode" : {
     *       "uuid" : "3670b4df31f94e38b0b4df31f91e3835"
     *     },
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : false,
     *       "delete" : true,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   }, {
     *     "uuid" : "a5d06b6c553544e3906b6c5535f4e322",
     *     "creator" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "a24aa9ba77eb415e8aa9ba77eb615ede"
     *     },
     *     "created" : "2017-02-23T09:07:46.339Z",
     *     "editor" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "0b45df24fbc64b4285df24fbc6eb428b"
     *     },
     *     "edited" : "2017-02-23T09:07:46.339Z",
     *     "name" : "Dummy Project (Mobile)",
     *     "rootNode" : {
     *       "uuid" : "48a1530de5184517a1530de518951746"
     *     },
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : false,
     *       "delete" : true,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   } ],
     *   "_metainfo" : {
     *     "currentPage" : 1,
     *     "perPage" : 2,
     *     "pageCount" : 10,
     *     "totalCount" : 20
     *   }
     * }
     * 
     */
get: (query?: any, token?: string):Promise<ProjectsGetResponse> => {
                    return this.get(`/projects`, query, token); },
    /**
    * Resource /projects/{projectUuid}
    * 
    */ 
    projectUuid: (projectUuid: string) => {
        return {
        /**
     * Method get
     * Load the project with the given uuid.
     * Example
     * {
     *   "uuid" : "e2eed4d00faa4307aed4d00faa530739",
     *   "creator" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "4a97607d5773467797607d577306771b"
     *   },
     *   "created" : "2017-02-23T09:07:46.338Z",
     *   "editor" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "96843955af984814843955af98081496"
     *   },
     *   "edited" : "2017-02-23T09:07:46.338Z",
     *   "name" : "Project name",
     *   "rootNode" : {
     *     "uuid" : "3dec27ee3f214507ac27ee3f21e50711"
     *   },
     *   "permissions" : {
     *     "create" : true,
     *     "read" : true,
     *     "update" : false,
     *     "delete" : true,
     *     "publish" : false,
     *     "readPublished" : false
     *   }
     * }
     * 
     */
get: (query?: any, token?: string):Promise<ProjectsProjectUuidGetResponse> => {
                    return this.get(`/projects/${projectUuid}`, query, token); },
    /**
     * Method post
     * Update the project with the given uuid.
     * Example
     * {
     *   "uuid" : "3a941a9604944024941a960494d024d8",
     *   "creator" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "013d6f4232114d61bd6f4232110d616e"
     *   },
     *   "created" : "2017-02-23T09:07:46.340Z",
     *   "editor" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "83692d070a004e69a92d070a008e6999"
     *   },
     *   "edited" : "2017-02-23T09:07:46.340Z",
     *   "name" : "New project name",
     *   "rootNode" : {
     *     "uuid" : "8dacbbb9b553401dacbbb9b553801d81"
     *   },
     *   "permissions" : {
     *     "create" : true,
     *     "read" : true,
     *     "update" : false,
     *     "delete" : true,
     *     "publish" : false,
     *     "readPublished" : false
     *   }
     * }
     * 
     */
post: (data?: any, query?: any, token?: string):Promise<ProjectsProjectUuidPostResponse> => {
                    return this.post(`/projects/${projectUuid}`, data, query, token); },
    /**
     * Method delete
     * Delete the project and all attached nodes.
     * Example
     * 
     */
delete: (token?: string):Promise<ProjectsProjectUuidDeleteResponse> => {
                    return this.delete(`/projects/${projectUuid}`, token); },
    
        };
    }
    // -- end resource {projectUuid} -- 
    
    }
    // -- end resource projects -- 
    ,
/**
    * Resource /schemas
    * Provides endpoints which allow the manipulation of schemas.
    */ 
    schemas: {
        /**
     * Method get
     * Read multiple schemas and return a paged list response.
     * Example
     * {
     *   "data" : [ {
     *     "uuid" : "d85feb0b193c4a909feb0b193c3a90d1",
     *     "displayField" : "name",
     *     "segmentField" : "name",
     *     "container" : false,
     *     "version" : 0,
     *     "name" : "Example Schema",
     *     "fields" : [ {
     *       "name" : "name",
     *       "label" : "Name",
     *       "required" : false,
     *       "type" : "string"
     *     }, {
     *       "name" : "number",
     *       "label" : "Number",
     *       "required" : false,
     *       "type" : "number"
     *     }, {
     *       "name" : "html",
     *       "label" : "Teaser",
     *       "required" : false,
     *       "type" : "html"
     *     }, {
     *       "name" : "list",
     *       "label" : "List of nodes",
     *       "required" : false,
     *       "listType" : "node",
     *       "type" : "list",
     *       "allow" : [ "content", "video" ]
     *     }, {
     *       "name" : "node",
     *       "required" : false,
     *       "type" : "node",
     *       "allow" : [ "content", "video", "image" ]
     *     }, {
     *       "name" : "location",
     *       "label" : "Location",
     *       "required" : false,
     *       "type" : "micronode",
     *       "allow" : [ "geolocation" ]
     *     }, {
     *       "name" : "locationlist",
     *       "label" : "List of Locations",
     *       "required" : false,
     *       "listType" : "micronode",
     *       "type" : "list",
     *       "allow" : [ "geolocation" ]
     *     } ],
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : true,
     *       "delete" : true,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   }, {
     *     "uuid" : "bc6e3d29f0334189ae3d29f033218940",
     *     "displayField" : "name",
     *     "segmentField" : "name",
     *     "container" : false,
     *     "version" : 0,
     *     "name" : "Example Schema",
     *     "fields" : [ {
     *       "name" : "name",
     *       "label" : "Name",
     *       "required" : false,
     *       "type" : "string"
     *     }, {
     *       "name" : "number",
     *       "label" : "Number",
     *       "required" : false,
     *       "type" : "number"
     *     }, {
     *       "name" : "html",
     *       "label" : "Teaser",
     *       "required" : false,
     *       "type" : "html"
     *     }, {
     *       "name" : "list",
     *       "label" : "List of nodes",
     *       "required" : false,
     *       "listType" : "node",
     *       "type" : "list",
     *       "allow" : [ "content", "video" ]
     *     }, {
     *       "name" : "node",
     *       "required" : false,
     *       "type" : "node",
     *       "allow" : [ "content", "video", "image" ]
     *     }, {
     *       "name" : "location",
     *       "label" : "Location",
     *       "required" : false,
     *       "type" : "micronode",
     *       "allow" : [ "geolocation" ]
     *     }, {
     *       "name" : "locationlist",
     *       "label" : "List of Locations",
     *       "required" : false,
     *       "listType" : "micronode",
     *       "type" : "list",
     *       "allow" : [ "geolocation" ]
     *     } ],
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : true,
     *       "delete" : true,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   } ],
     *   "_metainfo" : {
     *     "currentPage" : 1,
     *     "perPage" : 2,
     *     "pageCount" : 10,
     *     "totalCount" : 20
     *   }
     * }
     * 
     */
get: (query?: any, token?: string):Promise<SchemasGetResponse> => {
                    return this.get(`/schemas`, query, token); },
    /**
     * Method post
     * Create a new schema.
     * Example
     * {
     *   "uuid" : "24e909448c7649a7a909448c76c9a7ba",
     *   "displayField" : "name",
     *   "segmentField" : "name",
     *   "container" : false,
     *   "version" : 0,
     *   "name" : "Example Schema",
     *   "fields" : [ {
     *     "name" : "name",
     *     "label" : "Name",
     *     "required" : false,
     *     "type" : "string"
     *   }, {
     *     "name" : "number",
     *     "label" : "Number",
     *     "required" : false,
     *     "type" : "number"
     *   }, {
     *     "name" : "html",
     *     "label" : "Teaser",
     *     "required" : false,
     *     "type" : "html"
     *   }, {
     *     "name" : "list",
     *     "label" : "List of nodes",
     *     "required" : false,
     *     "listType" : "node",
     *     "type" : "list",
     *     "allow" : [ "content", "video" ]
     *   }, {
     *     "name" : "node",
     *     "required" : false,
     *     "type" : "node",
     *     "allow" : [ "content", "video", "image" ]
     *   }, {
     *     "name" : "location",
     *     "label" : "Location",
     *     "required" : false,
     *     "type" : "micronode",
     *     "allow" : [ "geolocation" ]
     *   }, {
     *     "name" : "locationlist",
     *     "label" : "List of Locations",
     *     "required" : false,
     *     "listType" : "micronode",
     *     "type" : "list",
     *     "allow" : [ "geolocation" ]
     *   } ],
     *   "permissions" : {
     *     "create" : true,
     *     "read" : true,
     *     "update" : true,
     *     "delete" : true,
     *     "publish" : false,
     *     "readPublished" : false
     *   }
     * }
     * 
     */
post: (data?: any, query?: any, token?: string):Promise<SchemasPostResponse> => {
                    return this.post(`/schemas`, data, query, token); },
    /**
    * Resource /schemas/{schemaUuid}
    * 
    */ 
    schemaUuid: (schemaUuid: string) => {
        return {
        /**
     * Method get
     * Load the schema with the given uuid.
     * Example
     * {
     *   "uuid" : "bc8b2f08ab8745758b2f08ab8715755c",
     *   "displayField" : "name",
     *   "segmentField" : "name",
     *   "container" : false,
     *   "version" : 0,
     *   "name" : "Example Schema",
     *   "fields" : [ {
     *     "name" : "name",
     *     "label" : "Name",
     *     "required" : false,
     *     "type" : "string"
     *   }, {
     *     "name" : "number",
     *     "label" : "Number",
     *     "required" : false,
     *     "type" : "number"
     *   }, {
     *     "name" : "html",
     *     "label" : "Teaser",
     *     "required" : false,
     *     "type" : "html"
     *   }, {
     *     "name" : "list",
     *     "label" : "List of nodes",
     *     "required" : false,
     *     "listType" : "node",
     *     "type" : "list",
     *     "allow" : [ "content", "video" ]
     *   }, {
     *     "name" : "node",
     *     "required" : false,
     *     "type" : "node",
     *     "allow" : [ "content", "video", "image" ]
     *   }, {
     *     "name" : "location",
     *     "label" : "Location",
     *     "required" : false,
     *     "type" : "micronode",
     *     "allow" : [ "geolocation" ]
     *   }, {
     *     "name" : "locationlist",
     *     "label" : "List of Locations",
     *     "required" : false,
     *     "listType" : "micronode",
     *     "type" : "list",
     *     "allow" : [ "geolocation" ]
     *   } ],
     *   "permissions" : {
     *     "create" : true,
     *     "read" : true,
     *     "update" : true,
     *     "delete" : true,
     *     "publish" : false,
     *     "readPublished" : false
     *   }
     * }
     * 
     */
get: (query?: any, token?: string):Promise<SchemasSchemaUuidGetResponse> => {
                    return this.get(`/schemas/${schemaUuid}`, query, token); },
    /**
     * Method post
     * Update the schema.
     * Example
     * {
     *   "uuid" : "ae22ca2ab8fd420aa2ca2ab8fde20a04",
     *   "displayField" : "name",
     *   "segmentField" : "name",
     *   "container" : false,
     *   "version" : 0,
     *   "name" : "Example Schema",
     *   "fields" : [ {
     *     "name" : "name",
     *     "label" : "Name",
     *     "required" : false,
     *     "type" : "string"
     *   }, {
     *     "name" : "number",
     *     "label" : "Number",
     *     "required" : false,
     *     "type" : "number"
     *   }, {
     *     "name" : "html",
     *     "label" : "Teaser",
     *     "required" : false,
     *     "type" : "html"
     *   }, {
     *     "name" : "list",
     *     "label" : "List of nodes",
     *     "required" : false,
     *     "listType" : "node",
     *     "type" : "list",
     *     "allow" : [ "content", "video" ]
     *   }, {
     *     "name" : "node",
     *     "required" : false,
     *     "type" : "node",
     *     "allow" : [ "content", "video", "image" ]
     *   }, {
     *     "name" : "location",
     *     "label" : "Location",
     *     "required" : false,
     *     "type" : "micronode",
     *     "allow" : [ "geolocation" ]
     *   }, {
     *     "name" : "locationlist",
     *     "label" : "List of Locations",
     *     "required" : false,
     *     "listType" : "micronode",
     *     "type" : "list",
     *     "allow" : [ "geolocation" ]
     *   } ],
     *   "permissions" : {
     *     "create" : true,
     *     "read" : true,
     *     "update" : true,
     *     "delete" : true,
     *     "publish" : false,
     *     "readPublished" : false
     *   }
     * }
     * 
     */
post: (data?: any, query?: any, token?: string):Promise<SchemasSchemaUuidPostResponse> => {
                    return this.post(`/schemas/${schemaUuid}`, data, query, token); },
    /**
     * Method delete
     * Delete the schema with the given uuid.
     * Example
     * 
     */
delete: (token?: string):Promise<SchemasSchemaUuidDeleteResponse> => {
                    return this.delete(`/schemas/${schemaUuid}`, token); },
    /**
    * Resource /schemas/{schemaUuid}/changes
    * 
    */ 
    changes: {
        /**
     * Method post
     * Apply the posted changes to the schema.
     * Example
     * {
     *   "message" : "I18n message"
     * }
     * 
     */
post: (data?: any, query?: any, token?: string):Promise<SchemasSchemaUuidChangesPostResponse> => {
                    return this.post(`/schemas/${schemaUuid}/changes`, data, query, token); },
    
    }
    // -- end resource changes -- 
    ,
/**
    * Resource /schemas/{schemaUuid}/diff
    * 
    */ 
    diff: {
        /**
     * Method post
     * Compare the given schema with the stored schema and create a changeset.
     * Example
     * {
     *   "changes" : [ {
     *     "operation" : "ADDFIELD",
     *     "properties" : {
     *       "field" : "listFieldToBeAddedField",
     *       "label" : "Field Label Value",
     *       "type" : "list",
     *       "listType" : "html"
     *     }
     *   }, {
     *     "operation" : "CHANGEFIELDTYPE",
     *     "properties" : {
     *       "field" : "fieldToBeUpdated",
     *       "type" : "string"
     *     }
     *   }, {
     *     "operation" : "REMOVEFIELD",
     *     "properties" : {
     *       "field" : "fieldToBeRemoved"
     *     }
     *   }, {
     *     "operation" : "UPDATEFIELD",
     *     "migrationScript" : "function migrate(node, fieldname) {node.fields[fieldname] = new Date(new Date(node.fields[fieldname]).getTime() + 864000).toISOString(); return node;}",
     *     "properties" : {
     *       "field" : "fieldToBeUpdated",
     *       "displayFieldname" : "newDisplayField",
     *       "label" : "newLabel"
     *     }
     *   }, {
     *     "operation" : "UPDATESCHEMA",
     *     "properties" : { }
     *   } ]
     * }
     * 
     */
post: (data?: any, query?: any, token?: string):Promise<SchemasSchemaUuidDiffPostResponse> => {
                    return this.post(`/schemas/${schemaUuid}/diff`, data, query, token); },
    
    }
    // -- end resource diff -- 
    
        };
    }
    // -- end resource {schemaUuid} -- 
    
    }
    // -- end resource schemas -- 
    ,
/**
    * Resource /microschemas
    * Endpoint which provides methods to manipulate microschemas.
    */ 
    microschemas: {
        /**
     * Method post
     * Create a new microschema.
     * Example
     * {
     *   "uuid" : "bb5ca986662440fe9ca986662410fe65",
     *   "version" : 1,
     *   "description" : "Microschema for Geolocations",
     *   "name" : "geolocation",
     *   "fields" : [ {
     *     "name" : "longitude",
     *     "label" : "Longitude",
     *     "required" : true,
     *     "type" : "number"
     *   }, {
     *     "name" : "latitude",
     *     "label" : "Latitude",
     *     "required" : true,
     *     "type" : "number"
     *   } ],
     *   "permissions" : {
     *     "create" : true,
     *     "read" : true,
     *     "update" : true,
     *     "delete" : true,
     *     "publish" : false,
     *     "readPublished" : false
     *   }
     * }
     * 
     */
post: (data?: any, query?: any, token?: string):Promise<MicroschemasPostResponse> => {
                    return this.post(`/microschemas`, data, query, token); },
    /**
     * Method get
     * Read multiple microschemas and return a paged list response.
     * Example
     * {
     *   "data" : [ {
     *     "uuid" : "b793e1976cd945c693e1976cd9b5c622",
     *     "version" : 1,
     *     "description" : "Microschema for Geolocations",
     *     "name" : "geolocation",
     *     "fields" : [ {
     *       "name" : "longitude",
     *       "label" : "Longitude",
     *       "required" : true,
     *       "type" : "number"
     *     }, {
     *       "name" : "latitude",
     *       "label" : "Latitude",
     *       "required" : true,
     *       "type" : "number"
     *     } ],
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : true,
     *       "delete" : true,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   }, {
     *     "uuid" : "2aface642fc140b5bace642fc100b513",
     *     "version" : 1,
     *     "description" : "Microschema for Geolocations",
     *     "name" : "geolocation",
     *     "fields" : [ {
     *       "name" : "longitude",
     *       "label" : "Longitude",
     *       "required" : true,
     *       "type" : "number"
     *     }, {
     *       "name" : "latitude",
     *       "label" : "Latitude",
     *       "required" : true,
     *       "type" : "number"
     *     } ],
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : true,
     *       "delete" : true,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   } ],
     *   "_metainfo" : {
     *     "currentPage" : 1,
     *     "perPage" : 2,
     *     "pageCount" : 10,
     *     "totalCount" : 20
     *   }
     * }
     * 
     */
get: (query?: any, token?: string):Promise<MicroschemasGetResponse> => {
                    return this.get(`/microschemas`, query, token); },
    /**
    * Resource /microschemas/{microschemaUuid}
    * 
    */ 
    microschemaUuid: (microschemaUuid: string) => {
        return {
        /**
     * Method get
     * Read the microschema with the given uuid.
     * Example
     * {
     *   "uuid" : "4646383c709c470786383c709c3707e3",
     *   "version" : 1,
     *   "description" : "Microschema for Geolocations",
     *   "name" : "geolocation",
     *   "fields" : [ {
     *     "name" : "longitude",
     *     "label" : "Longitude",
     *     "required" : true,
     *     "type" : "number"
     *   }, {
     *     "name" : "latitude",
     *     "label" : "Latitude",
     *     "required" : true,
     *     "type" : "number"
     *   } ],
     *   "permissions" : {
     *     "create" : true,
     *     "read" : true,
     *     "update" : true,
     *     "delete" : true,
     *     "publish" : false,
     *     "readPublished" : false
     *   }
     * }
     * 
     */
get: (query?: any, token?: string):Promise<MicroschemasMicroschemaUuidGetResponse> => {
                    return this.get(`/microschemas/${microschemaUuid}`, query, token); },
    /**
     * Method post
     * Update the microschema with the given uuid.
     * Example
     * {
     *   "uuid" : "0f280ec4bf504f3da80ec4bf504f3de2",
     *   "version" : 1,
     *   "description" : "Microschema for Geolocations",
     *   "name" : "geolocation",
     *   "fields" : [ {
     *     "name" : "longitude",
     *     "label" : "Longitude",
     *     "required" : true,
     *     "type" : "number"
     *   }, {
     *     "name" : "latitude",
     *     "label" : "Latitude",
     *     "required" : true,
     *     "type" : "number"
     *   } ],
     *   "permissions" : {
     *     "create" : true,
     *     "read" : true,
     *     "update" : true,
     *     "delete" : true,
     *     "publish" : false,
     *     "readPublished" : false
     *   }
     * }
     * 
     */
post: (data?: any, query?: any, token?: string):Promise<MicroschemasMicroschemaUuidPostResponse> => {
                    return this.post(`/microschemas/${microschemaUuid}`, data, query, token); },
    /**
     * Method delete
     * Delete the microschema with the given uuid.
     * Example
     * 
     */
delete: (token?: string):Promise<MicroschemasMicroschemaUuidDeleteResponse> => {
                    return this.delete(`/microschemas/${microschemaUuid}`, token); },
    /**
    * Resource /microschemas/{microschemaUuid}/changes
    * 
    */ 
    changes: {
        /**
     * Method post
     * Apply the provided changes on the latest version of the schema and migrate all nodes which are based on the schema. Please note that this operation is non-blocking and will continue to run in the background.
     * Example
     * {
     *   "message" : "I18n message"
     * }
     * 
     */
post: (data?: any, query?: any, token?: string):Promise<MicroschemasMicroschemaUuidChangesPostResponse> => {
                    return this.post(`/microschemas/${microschemaUuid}/changes`, data, query, token); },
    
    }
    // -- end resource changes -- 
    ,
/**
    * Resource /microschemas/{microschemaUuid}/diff
    * 
    */ 
    diff: {
        /**
     * Method post
     * Compare the provided schema with the schema which is currently stored and generate a set of changes that have been detected.
     * Example
     * {
     *   "changes" : [ {
     *     "operation" : "ADDFIELD",
     *     "properties" : {
     *       "field" : "listFieldToBeAddedField",
     *       "label" : "Field Label Value",
     *       "type" : "list",
     *       "listType" : "html"
     *     }
     *   }, {
     *     "operation" : "CHANGEFIELDTYPE",
     *     "properties" : {
     *       "field" : "fieldToBeUpdated",
     *       "type" : "string"
     *     }
     *   }, {
     *     "operation" : "REMOVEFIELD",
     *     "properties" : {
     *       "field" : "fieldToBeRemoved"
     *     }
     *   }, {
     *     "operation" : "UPDATEFIELD",
     *     "migrationScript" : "function migrate(node, fieldname) {node.fields[fieldname] = new Date(new Date(node.fields[fieldname]).getTime() + 864000).toISOString(); return node;}",
     *     "properties" : {
     *       "field" : "fieldToBeUpdated",
     *       "displayFieldname" : "newDisplayField",
     *       "label" : "newLabel"
     *     }
     *   }, {
     *     "operation" : "UPDATESCHEMA",
     *     "properties" : { }
     *   } ]
     * }
     * 
     */
post: (data?: any, query?: any, token?: string):Promise<MicroschemasMicroschemaUuidDiffPostResponse> => {
                    return this.post(`/microschemas/${microschemaUuid}/diff`, data, query, token); },
    
    }
    // -- end resource diff -- 
    
        };
    }
    // -- end resource {microschemaUuid} -- 
    
    }
    // -- end resource microschemas -- 
    ,
/**
    * Resource /admin
    * Collection of administrative endpoints which usually require admin permission
    */ 
    admin: {
    
    /**
    * Resource /admin/status
    * 
    */ 
    status: {
        /**
     * Method get
     * Return the mesh system status.
     * Example
     * {
     *   "message" : "I18n message"
     * }
     * 
     */
get: (query?: any, token?: string):Promise<AdminStatusGetResponse> => {
                    return this.get(`/admin/status`, query, token); },
    /**
    * Resource /admin/status/migrations
    * 
    */ 
    migrations: {
        /**
     * Method get
     * Return the current schema or node migration status.
     * Example
     * {
     *   "message" : "I18n message"
     * }
     * 
     */
get: (query?: any, token?: string):Promise<AdminStatusMigrationsGetResponse> => {
                    return this.get(`/admin/status/migrations`, query, token); },
    
    }
    // -- end resource migrations -- 
    
    }
    // -- end resource status -- 
    
    }
    // -- end resource admin -- 
    ,
/**
    * Resource /search
    * Provides search endpoints which can be used to invoke global searches
    */ 
    search: {
    
    /**
    * Resource /search/createMappings
    * 
    */ 
    createMappings: {
        /**
     * Method get
     * Create search index mappings.
     * Example
     * {
     *   "message" : "I18n message"
     * }
     * 
     */
get: (query?: any, token?: string):Promise<SearchCreateMappingsGetResponse> => {
                    return this.get(`/search/createMappings`, query, token); },
    
    }
    // -- end resource createMappings -- 
    ,
/**
    * Resource /search/groups
    * 
    */ 
    groups: {
        /**
     * Method post
     * Invoke a search query for groups and return a paged list response.
     * Example
     * {
     *   "data" : [ {
     *     "uuid" : "e0dfbac1aa164d8d9fbac1aa164d8de6",
     *     "creator" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "c636cbce1c704833b6cbce1c702833d6"
     *     },
     *     "created" : "2017-02-23T09:07:46.406Z",
     *     "editor" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "8b727a7be73347f6b27a7be73317f649"
     *     },
     *     "edited" : "2017-02-23T09:07:46.406Z",
     *     "name" : "Admin Group",
     *     "roles" : [ {
     *       "name" : "admin",
     *       "uuid" : "e50b81d1eada4f958b81d1eadaaf9534"
     *     } ],
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : true,
     *       "delete" : true,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   }, {
     *     "uuid" : "cab20573f9174c01b20573f9171c01f4",
     *     "name" : "Editor Group",
     *     "roles" : [ ],
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : true,
     *       "delete" : true,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   } ],
     *   "_metainfo" : {
     *     "currentPage" : 1,
     *     "perPage" : 2,
     *     "pageCount" : 10,
     *     "totalCount" : 20
     *   }
     * }
     * 
     */
post: (data?: any, query?: any, token?: string):Promise<SearchGroupsPostResponse> => {
                    return this.post(`/search/groups`, data, query, token); },
    
    }
    // -- end resource groups -- 
    ,
/**
    * Resource /search/microschemas
    * 
    */ 
    microschemas: {
        /**
     * Method post
     * Invoke a search query for microschemas and return a paged list response.
     * Example
     * {
     *   "data" : [ {
     *     "uuid" : "f8329e4bfd7440feb29e4bfd7400febc",
     *     "version" : 1,
     *     "description" : "Microschema for Geolocations",
     *     "name" : "geolocation",
     *     "fields" : [ {
     *       "name" : "longitude",
     *       "label" : "Longitude",
     *       "required" : true,
     *       "type" : "number"
     *     }, {
     *       "name" : "latitude",
     *       "label" : "Latitude",
     *       "required" : true,
     *       "type" : "number"
     *     } ],
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : true,
     *       "delete" : true,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   }, {
     *     "uuid" : "a15b9d801dba444b9b9d801dbac44bf4",
     *     "version" : 1,
     *     "description" : "Microschema for Geolocations",
     *     "name" : "geolocation",
     *     "fields" : [ {
     *       "name" : "longitude",
     *       "label" : "Longitude",
     *       "required" : true,
     *       "type" : "number"
     *     }, {
     *       "name" : "latitude",
     *       "label" : "Latitude",
     *       "required" : true,
     *       "type" : "number"
     *     } ],
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : true,
     *       "delete" : true,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   } ],
     *   "_metainfo" : {
     *     "currentPage" : 1,
     *     "perPage" : 2,
     *     "pageCount" : 10,
     *     "totalCount" : 20
     *   }
     * }
     * 
     */
post: (data?: any, query?: any, token?: string):Promise<SearchMicroschemasPostResponse> => {
                    return this.post(`/search/microschemas`, data, query, token); },
    
    }
    // -- end resource microschemas -- 
    ,
/**
    * Resource /search/nodes
    * 
    */ 
    nodes: {
        /**
     * Method post
     * Invoke a search query for nodes and return a paged list response.
     * Example
     * {
     *   "data" : [ {
     *     "uuid" : "ebff681b55a34869bf681b55a3f869ab",
     *     "creator" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "edb8ac5c7044446fb8ac5c7044646fde"
     *     },
     *     "created" : "2017-02-23T09:07:46.407Z",
     *     "edited" : "2017-02-23T09:07:46.407Z",
     *     "availableLanguages" : [ "en", "de" ],
     *     "languagePaths" : {
     *       "de" : "/api/v1/yourProject/webroot/Bilder",
     *       "en" : "/api/v1/yourProject/webroot/Images"
     *     },
     *     "parentNode" : {
     *       "uuid" : "40af529b3a9c47feaf529b3a9cf7fe9c",
     *       "displayName" : "parentNodeDisplayName"
     *     },
     *     "tags" : {
     *       "types" : {
     *         "items" : [ {
     *           "name" : "car",
     *           "uuid" : "2d5e58277b664c579e58277b669c5714"
     *         }, {
     *           "name" : "ship",
     *           "uuid" : "c4fe1f693241433ebe1f693241233e38"
     *         } ]
     *       },
     *       "colors" : {
     *         "items" : [ {
     *           "name" : "red",
     *           "uuid" : "6d72a8e925eb425cb2a8e925ebc25c0a"
     *         }, {
     *           "name" : "green",
     *           "uuid" : "b45401708fb741689401708fb7516807"
     *         } ]
     *       }
     *     },
     *     "childrenInfo" : {
     *       "folder" : {
     *         "schemaUuid" : "8fa04e899a18483fa04e899a18983f34",
     *         "count" : 5
     *       },
     *       "blogpost" : {
     *         "schemaUuid" : "7a73a15d13034170b3a15d13039170a4",
     *         "count" : 1
     *       }
     *     },
     *     "schema" : {
     *       "name" : "content",
     *       "uuid" : "438f9c0f192647cb8f9c0f1926d7cbca",
     *       "version" : 1
     *     },
     *     "fields" : {
     *       "name" : "Name for language tag de-DE",
     *       "filename" : "dummy-content.de.html",
     *       "teaser" : "Dummy teaser for de-DE",
     *       "content" : "Content for language tag de-DE",
     *       "relatedProduct" : {
     *         "uuid" : "26d7fd869aea4b5c97fd869aea9b5cb5"
     *       },
     *       "price" : 100.1,
     *       "enabled" : true,
     *       "release" : "2017-02-23T09:07:46.407Z",
     *       "categories" : [ {
     *         "uuid" : "820e4acd411d42e38e4acd411d62e37b"
     *       }, {
     *         "uuid" : "65a05623480b4fc8a05623480b7fc8ee"
     *       }, {
     *         "uuid" : "93a33cb35cbb4277a33cb35cbb8277a4"
     *       } ],
     *       "names" : [ "Jack", "Joe", "Mary", "Tom" ],
     *       "categoryIds" : [ 1, 42, 133, 7 ],
     *       "binary" : {
     *         "fileName" : "flower.jpg",
     *         "width" : 800,
     *         "height" : 600,
     *         "sha512sum" : "ec582eb760034dd91d5fd33656c0b56f082b7365d32e2a139dd9c87ebc192bff3525f32ff4c4137463a31cad020ac19e6e356508db2b90e32d737b6d725e14c1",
     *         "fileSize" : 95365,
     *         "mimeType" : "image/jpeg",
     *         "dominantColor" : "#22a7f0"
     *       },
     *       "location" : {
     *         "uuid" : "cbdff5725cd441a89ff5725cd491a87e",
     *         "microschema" : {
     *           "name" : "geolocation",
     *           "uuid" : "b8ccbd59a0d742a28cbd59a0d7f2a240"
     *         },
     *         "fields" : {
     *           "latitude" : 48.208330230278,
     *           "longitude" : 16.373063840833
     *         }
     *       },
     *       "locations" : [ {
     *         "uuid" : "fb55131b2a7545bf95131b2a75d5bfcb",
     *         "microschema" : {
     *           "name" : "geolocation",
     *           "uuid" : "a44e76cb33e741528e76cb33e7a15270"
     *         },
     *         "fields" : {
     *           "latitude" : 48.208330230278,
     *           "longitude" : 16.373063840833
     *         }
     *       }, {
     *         "uuid" : "53f932fef4054fe0b932fef4053fe02d",
     *         "microschema" : {
     *           "name" : "geolocation",
     *           "uuid" : "7e23b5c9d84c42d1a3b5c9d84c62d195"
     *         },
     *         "fields" : {
     *           "latitude" : 48.137222,
     *           "longitude" : 11.575556
     *         }
     *       } ]
     *     },
     *     "path" : "/api/v1/yourProject/webroot/Images",
     *     "breadcrumb" : [ {
     *       "uuid" : "c71c28d231ac4b2f9c28d231ac4b2fa3",
     *       "displayName" : "news",
     *       "path" : "/news"
     *     }, {
     *       "uuid" : "7ad92a859e4748f7992a859e4788f775",
     *       "displayName" : "2015",
     *       "path" : "/news/2015"
     *     } ],
     *     "container" : false,
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : true,
     *       "delete" : true,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   }, {
     *     "uuid" : "8fc5d37902ae4fe085d37902ae5fe04c",
     *     "creator" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "942292654e9e44a3a292654e9eb4a3be"
     *     },
     *     "created" : "2017-02-23T09:07:46.408Z",
     *     "editor" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "6c7cb33707294ba8bcb3370729aba845"
     *     },
     *     "edited" : "2017-02-23T09:07:46.408Z",
     *     "parentNode" : {
     *       "uuid" : "747d81665a564b60bd81665a561b6070",
     *       "displayName" : "parentNodeDisplayName"
     *     },
     *     "tags" : {
     *       "types" : {
     *         "items" : [ {
     *           "name" : "car",
     *           "uuid" : "3970213d812140e2b0213d812190e2ce"
     *         }, {
     *           "name" : "ship",
     *           "uuid" : "f837f75ce82d4f57b7f75ce82d9f57f6"
     *         } ]
     *       },
     *       "colors" : {
     *         "items" : [ {
     *           "name" : "red",
     *           "uuid" : "c82314a4a6e44890a314a4a6e4089031"
     *         }, {
     *           "name" : "green",
     *           "uuid" : "0590d836b15d4e8990d836b15d3e895f"
     *         } ]
     *       }
     *     },
     *     "childrenInfo" : { },
     *     "schema" : {
     *       "name" : "content",
     *       "uuid" : "d0c9a7885d314d2389a7885d313d23d0",
     *       "version" : 1
     *     },
     *     "fields" : {
     *       "name" : "Name for language tag en",
     *       "filename" : "dummy-content.en.html",
     *       "teaser" : "Dummy teaser for en",
     *       "content" : "Content for language tag en"
     *     },
     *     "breadcrumb" : [ {
     *       "uuid" : "e1263b9c52ea480ea63b9c52ea080ea5",
     *       "displayName" : "news",
     *       "path" : "/news"
     *     }, {
     *       "uuid" : "d7e95c7818aa46f5a95c7818aa16f517",
     *       "displayName" : "2015",
     *       "path" : "/news/2015"
     *     } ],
     *     "container" : false,
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : false,
     *       "delete" : false,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   } ],
     *   "_metainfo" : {
     *     "currentPage" : 1,
     *     "perPage" : 2,
     *     "pageCount" : 10,
     *     "totalCount" : 20
     *   }
     * }
     * 
     */
post: (data?: any, query?: any, token?: string):Promise<SearchNodesPostResponse> => {
                    return this.post(`/search/nodes`, data, query, token); },
    
    }
    // -- end resource nodes -- 
    ,
/**
    * Resource /search/projects
    * 
    */ 
    projects: {
        /**
     * Method post
     * Invoke a search query for projects and return a paged list response.
     * Example
     * {
     *   "data" : [ {
     *     "uuid" : "cb33f377897042cbb3f377897002cb07",
     *     "creator" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "f12ae73b55a84807aae73b55a8f8075c"
     *     },
     *     "created" : "2017-02-23T09:07:46.411Z",
     *     "editor" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "a0b2dab22ae04a72b2dab22ae0da7286"
     *     },
     *     "edited" : "2017-02-23T09:07:46.411Z",
     *     "name" : "Dummy project",
     *     "rootNode" : {
     *       "uuid" : "5eb8aa29a37544f2b8aa29a37554f204"
     *     },
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : false,
     *       "delete" : true,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   }, {
     *     "uuid" : "ee93da086c864b2393da086c86ab238f",
     *     "creator" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "21ac6e46f0ad43c9ac6e46f0ad43c968"
     *     },
     *     "created" : "2017-02-23T09:07:46.411Z",
     *     "editor" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "5485234448b9492885234448b969288b"
     *     },
     *     "edited" : "2017-02-23T09:07:46.411Z",
     *     "name" : "Dummy Project (Mobile)",
     *     "rootNode" : {
     *       "uuid" : "874fee514afd46218fee514afd062107"
     *     },
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : false,
     *       "delete" : true,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   } ],
     *   "_metainfo" : {
     *     "currentPage" : 1,
     *     "perPage" : 2,
     *     "pageCount" : 10,
     *     "totalCount" : 20
     *   }
     * }
     * 
     */
post: (data?: any, query?: any, token?: string):Promise<SearchProjectsPostResponse> => {
                    return this.post(`/search/projects`, data, query, token); },
    
    }
    // -- end resource projects -- 
    ,
/**
    * Resource /search/reindex
    * 
    */ 
    reindex: {
        /**
     * Method get
     * Invokes a full reindex of the search indices. This operation may take some time to complete.
     * Example
     * {
     *   "message" : "I18n message"
     * }
     * 
     */
get: (query?: any, token?: string):Promise<SearchReindexGetResponse> => {
                    return this.get(`/search/reindex`, query, token); },
    
    }
    // -- end resource reindex -- 
    ,
/**
    * Resource /search/roles
    * 
    */ 
    roles: {
        /**
     * Method post
     * Invoke a search query for roles and return a paged list response.
     * Example
     * {
     *   "data" : [ {
     *     "uuid" : "7a67f1c1b8344eb9a7f1c1b8340eb960",
     *     "creator" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "900a84b2e9894b9a8a84b2e9891b9afc"
     *     },
     *     "created" : "2017-02-23T09:07:46.406Z",
     *     "editor" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "48adf9054d274a44adf9054d271a44cc"
     *     },
     *     "edited" : "2017-02-23T09:07:46.406Z",
     *     "name" : "Reader role",
     *     "groups" : [ ],
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : true,
     *       "delete" : true,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   }, {
     *     "uuid" : "677e9e90759b4494be9e90759b749402",
     *     "creator" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "76f8d931dfc44c25b8d931dfc4dc25da"
     *     },
     *     "created" : "2017-02-23T09:07:46.407Z",
     *     "editor" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "db0337811c064c208337811c065c207a"
     *     },
     *     "edited" : "2017-02-23T09:07:46.407Z",
     *     "name" : "Admin role",
     *     "groups" : [ {
     *       "name" : "editors",
     *       "uuid" : "ead20848b0f440ed920848b0f410edd4"
     *     }, {
     *       "name" : "guests",
     *       "uuid" : "86a38dbe963e436fa38dbe963eb36f0b"
     *     } ],
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : true,
     *       "delete" : true,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   } ],
     *   "_metainfo" : {
     *     "currentPage" : 1,
     *     "perPage" : 2,
     *     "pageCount" : 10,
     *     "totalCount" : 20
     *   }
     * }
     * 
     */
post: (data?: any, query?: any, token?: string):Promise<SearchRolesPostResponse> => {
                    return this.post(`/search/roles`, data, query, token); },
    
    }
    // -- end resource roles -- 
    ,
/**
    * Resource /search/schemas
    * 
    */ 
    schemas: {
        /**
     * Method post
     * Invoke a search query for schemas and return a paged list response.
     * Example
     * {
     *   "data" : [ {
     *     "uuid" : "f3981ee36c6c473e981ee36c6c673ea1",
     *     "displayField" : "name",
     *     "segmentField" : "name",
     *     "container" : false,
     *     "version" : 0,
     *     "name" : "Example Schema",
     *     "fields" : [ {
     *       "name" : "name",
     *       "label" : "Name",
     *       "required" : false,
     *       "type" : "string"
     *     }, {
     *       "name" : "number",
     *       "label" : "Number",
     *       "required" : false,
     *       "type" : "number"
     *     }, {
     *       "name" : "html",
     *       "label" : "Teaser",
     *       "required" : false,
     *       "type" : "html"
     *     }, {
     *       "name" : "list",
     *       "label" : "List of nodes",
     *       "required" : false,
     *       "listType" : "node",
     *       "type" : "list",
     *       "allow" : [ "content", "video" ]
     *     }, {
     *       "name" : "node",
     *       "required" : false,
     *       "type" : "node",
     *       "allow" : [ "content", "video", "image" ]
     *     }, {
     *       "name" : "location",
     *       "label" : "Location",
     *       "required" : false,
     *       "type" : "micronode",
     *       "allow" : [ "geolocation" ]
     *     }, {
     *       "name" : "locationlist",
     *       "label" : "List of Locations",
     *       "required" : false,
     *       "listType" : "micronode",
     *       "type" : "list",
     *       "allow" : [ "geolocation" ]
     *     } ],
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : true,
     *       "delete" : true,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   }, {
     *     "uuid" : "310b0b9ed8c946ac8b0b9ed8c996acd8",
     *     "displayField" : "name",
     *     "segmentField" : "name",
     *     "container" : false,
     *     "version" : 0,
     *     "name" : "Example Schema",
     *     "fields" : [ {
     *       "name" : "name",
     *       "label" : "Name",
     *       "required" : false,
     *       "type" : "string"
     *     }, {
     *       "name" : "number",
     *       "label" : "Number",
     *       "required" : false,
     *       "type" : "number"
     *     }, {
     *       "name" : "html",
     *       "label" : "Teaser",
     *       "required" : false,
     *       "type" : "html"
     *     }, {
     *       "name" : "list",
     *       "label" : "List of nodes",
     *       "required" : false,
     *       "listType" : "node",
     *       "type" : "list",
     *       "allow" : [ "content", "video" ]
     *     }, {
     *       "name" : "node",
     *       "required" : false,
     *       "type" : "node",
     *       "allow" : [ "content", "video", "image" ]
     *     }, {
     *       "name" : "location",
     *       "label" : "Location",
     *       "required" : false,
     *       "type" : "micronode",
     *       "allow" : [ "geolocation" ]
     *     }, {
     *       "name" : "locationlist",
     *       "label" : "List of Locations",
     *       "required" : false,
     *       "listType" : "micronode",
     *       "type" : "list",
     *       "allow" : [ "geolocation" ]
     *     } ],
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : true,
     *       "delete" : true,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   } ],
     *   "_metainfo" : {
     *     "currentPage" : 1,
     *     "perPage" : 2,
     *     "pageCount" : 10,
     *     "totalCount" : 20
     *   }
     * }
     * 
     */
post: (data?: any, query?: any, token?: string):Promise<SearchSchemasPostResponse> => {
                    return this.post(`/search/schemas`, data, query, token); },
    
    }
    // -- end resource schemas -- 
    ,
/**
    * Resource /search/status
    * 
    */ 
    status: {
        /**
     * Method get
     * Returns the search index status.
     * Example
     * {
     *   "message" : "I18n message"
     * }
     * 
     */
get: (query?: any, token?: string):Promise<SearchStatusGetResponse> => {
                    return this.get(`/search/status`, query, token); },
    
    }
    // -- end resource status -- 
    ,
/**
    * Resource /search/tagFamilies
    * 
    */ 
    tagFamilies: {
        /**
     * Method post
     * Invoke a search query for tagFamilies and return a paged list response.
     * Example
     * {
     *   "data" : [ {
     *     "creator" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "9f0d27ea6b8e4eaf8d27ea6b8e0eafea"
     *     },
     *     "created" : "2017-02-23T09:07:46.410Z",
     *     "editor" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "503a6a30b4e74cefba6a30b4e78cef04"
     *     },
     *     "edited" : "2017-02-23T09:07:46.410Z",
     *     "name" : "Colors",
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : false,
     *       "delete" : true,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   } ],
     *   "_metainfo" : {
     *     "currentPage" : 1,
     *     "perPage" : 2,
     *     "pageCount" : 10,
     *     "totalCount" : 20
     *   }
     * }
     * 
     */
post: (data?: any, query?: any, token?: string):Promise<SearchTagFamiliesPostResponse> => {
                    return this.post(`/search/tagFamilies`, data, query, token); },
    
    }
    // -- end resource tagFamilies -- 
    ,
/**
    * Resource /search/tags
    * 
    */ 
    tags: {
        /**
     * Method post
     * Invoke a search query for tags and return a paged list response.
     * Example
     * {
     *   "data" : [ {
     *     "uuid" : "7dedd44960d348e1add44960d3a8e145",
     *     "creator" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "2cf2d706650c4f05b2d706650c7f05d0"
     *     },
     *     "created" : "2017-02-23T09:07:46.409Z",
     *     "editor" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "e4c30314557443a5830314557433a5ba"
     *     },
     *     "edited" : "2017-02-23T09:07:46.409Z",
     *     "tagFamily" : {
     *       "name" : "colors",
     *       "uuid" : "09557ab6c4fc4af6957ab6c4fc2af6bc"
     *     },
     *     "name" : "green",
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : true,
     *       "delete" : true,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   }, {
     *     "uuid" : "95512d595ed245f8912d595ed2e5f833",
     *     "creator" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "b8ed85ef52694bddad85ef52692bdd9f"
     *     },
     *     "created" : "2017-02-23T09:07:46.409Z",
     *     "editor" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "153b6a8caa484f95bb6a8caa489f95d7"
     *     },
     *     "edited" : "2017-02-23T09:07:46.409Z",
     *     "tagFamily" : {
     *       "name" : "colors",
     *       "uuid" : "59015a4f9d6c4b46815a4f9d6c6b460f"
     *     },
     *     "name" : "Name for language tag en",
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : false,
     *       "delete" : false,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   } ],
     *   "_metainfo" : {
     *     "currentPage" : 1,
     *     "perPage" : 2,
     *     "pageCount" : 10,
     *     "totalCount" : 20
     *   }
     * }
     * 
     */
post: (data?: any, query?: any, token?: string):Promise<SearchTagsPostResponse> => {
                    return this.post(`/search/tags`, data, query, token); },
    
    }
    // -- end resource tags -- 
    ,
/**
    * Resource /search/users
    * 
    */ 
    users: {
        /**
     * Method post
     * Invoke a search query for users and return a paged list response.
     * Example
     * {
     *   "data" : [ {
     *     "uuid" : "ff609147fd41492ba09147fd41592ba1",
     *     "creator" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "757d0750ac7f45f9bd0750ac7f85f992"
     *     },
     *     "created" : "2017-02-23T09:07:46.405Z",
     *     "editor" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "c248a5a084e3455888a5a084e37558c4"
     *     },
     *     "edited" : "2017-02-23T09:07:46.405Z",
     *     "lastname" : "Doe",
     *     "firstname" : "Joe",
     *     "username" : "jdoe",
     *     "emailAddress" : "j.doe@nowhere.com",
     *     "nodeReference" : {
     *       "projectName" : "dummy",
     *       "uuid" : "01fd49bca79d4dc2bd49bca79d9dc256"
     *     },
     *     "enabled" : true,
     *     "groups" : [ {
     *       "name" : "editors",
     *       "uuid" : "3b87322973a740fa87322973a7b0fafa"
     *     } ],
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : true,
     *       "delete" : true,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   }, {
     *     "uuid" : "283dfee41d194172bdfee41d19a17273",
     *     "creator" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "f517e4590b0844c297e4590b0844c2ad"
     *     },
     *     "created" : "2017-02-23T09:07:46.405Z",
     *     "editor" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "6da2462d82c347f9a2462d82c367f97f"
     *     },
     *     "edited" : "2017-02-23T09:07:46.405Z",
     *     "lastname" : "Roe",
     *     "firstname" : "Jane",
     *     "username" : "jroe",
     *     "emailAddress" : "j.roe@nowhere.com",
     *     "nodeReference" : {
     *       "projectName" : "dummy",
     *       "uuid" : "f88f5559411547658f555941158765e3"
     *     },
     *     "enabled" : true,
     *     "groups" : [ {
     *       "name" : "editors",
     *       "uuid" : "b774cc32203945adb4cc322039c5adc9"
     *     }, {
     *       "name" : "super-editors",
     *       "uuid" : "f1e2ab96b11f4deca2ab96b11f9dec52"
     *     }, {
     *       "name" : "editors",
     *       "uuid" : "e9296f538864408fa96f538864b08fd1"
     *     } ],
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : true,
     *       "delete" : true,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   } ],
     *   "_metainfo" : {
     *     "currentPage" : 1,
     *     "perPage" : 2,
     *     "pageCount" : 10,
     *     "totalCount" : 20
     *   }
     * }
     * 
     */
post: (data?: any, query?: any, token?: string):Promise<SearchUsersPostResponse> => {
                    return this.post(`/search/users`, data, query, token); },
    
    }
    // -- end resource users -- 
    
    }
    // -- end resource search -- 
    ,
/**
    * Resource /utilities
    * Provides endpoints for various utility actions
    */ 
    utilities: {
    
    /**
    * Resource /utilities/linkResolver
    * 
    */ 
    linkResolver: {
        /**
     * Method post
     * Return the posted text and resolve and replace all found mesh links. A mesh link must be in the format {{mesh.link("UUID","languageTag")}}
     * Example
     * 
     */
post: (data?: any, query?: any, token?: string):Promise<UtilitiesLinkResolverPostResponse> => {
                    return this.post(`/utilities/linkResolver`, data, query, token); },
    
    }
    // -- end resource linkResolver -- 
    
    }
    // -- end resource utilities -- 
    ,
/**
    * Resource /auth
    * Endpoint which contains login and logout methods.
    */ 
    auth: {
    
    /**
    * Resource /auth/login
    * 
    */ 
    login: {
        /**
     * Method get
     * Login via basic authentication.
     * Example
     * 
     */
get: (query?: any, token?: string):Promise<AuthLoginGetResponse> => {
                    return this.get(`/auth/login`, query, token); },
    /**
     * Method post
     * Login via this dedicated login endpoint.
     * Example
     * {"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyVXVpZCI6IlVVSURPRlVTRVIxIiwiZXhwIjoxNDY5MTE3MjQ3LCJpYXQiOjE0NjkxMTM2NDd9.i1u4RMs4K7zBkGhmcpp1P79Wpz2UQYJkZKJTVdFp_iU="}
     */
post: (data?: any, query?: any, token?: string):Promise<AuthLoginPostResponse> => {
                    return this.post(`/auth/login`, data, query, token); },
    
    }
    // -- end resource login -- 
    ,
/**
    * Resource /auth/logout
    * 
    */ 
    logout: {
        /**
     * Method get
     * Logout and delete the currently active session.
     * Example
     * {
     *   "message" : "I18n message"
     * }
     * 
     */
get: (query?: any, token?: string):Promise<AuthLogoutGetResponse> => {
                    return this.get(`/auth/logout`, query, token); },
    
    }
    // -- end resource logout -- 
    ,
/**
    * Resource /auth/me
    * 
    */ 
    me: {
        /**
     * Method get
     * Load your own user which is currently logged in.
     * Example
     * {
     *   "uuid" : "7dd53c1547d044ae953c1547d0b4ae88",
     *   "creator" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "2f2fcc4249e54f23afcc4249e53f233f"
     *   },
     *   "created" : "2017-02-23T09:07:46.438Z",
     *   "editor" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "ba8f1200acc642c08f1200acc622c02d"
     *   },
     *   "edited" : "2017-02-23T09:07:46.439Z",
     *   "lastname" : "Doe",
     *   "firstname" : "Joe",
     *   "username" : "jdoe",
     *   "emailAddress" : "j.doe@nowhere.com",
     *   "nodeReference" : {
     *     "projectName" : "dummy",
     *     "uuid" : "1cbb6e934d714078bb6e934d711078e8"
     *   },
     *   "enabled" : true,
     *   "groups" : [ {
     *     "name" : "editors",
     *     "uuid" : "304a5b18da954cdf8a5b18da95bcdfb1"
     *   } ],
     *   "permissions" : {
     *     "create" : true,
     *     "read" : true,
     *     "update" : true,
     *     "delete" : true,
     *     "publish" : false,
     *     "readPublished" : false
     *   }
     * }
     * 
     */
get: (query?: any, token?: string):Promise<AuthMeGetResponse> => {
                    return this.get(`/auth/me`, query, token); },
    
    }
    // -- end resource me -- 
    
    }
    // -- end resource auth -- 
    ,
/**
    * Resource /eventbus
    * This endpoint is a SockJS compliant websocket that creates a bridge to the mesh eventbus. It allows handling of various mesh specific events.
    */ 
    eventbus: {
    
    
    }
    // -- end resource eventbus -- 
    ,
/**
    * Resource /{project}
    * 
    */ 
    project: (project: string) => {
        return {
    
    /**
    * Resource /{project}/nodes
    * Provides endpoints which allow the manipulation of nodes.
    */ 
    nodes: {
        /**
     * Method post
     * Create a new node.
     * Example
     * {
     *   "uuid" : "af4f029645b8491e8f029645b8691ed6",
     *   "creator" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "9a1923d398914fa69923d398910fa62a"
     *   },
     *   "created" : "2017-02-23T09:07:46.490Z",
     *   "edited" : "2017-02-23T09:07:46.490Z",
     *   "availableLanguages" : [ "en", "de" ],
     *   "languagePaths" : {
     *     "de" : "/api/v1/yourProject/webroot/Bilder",
     *     "en" : "/api/v1/yourProject/webroot/Images"
     *   },
     *   "parentNode" : {
     *     "uuid" : "c895f5f0fe4e414295f5f0fe4e414292",
     *     "displayName" : "parentNodeDisplayName"
     *   },
     *   "tags" : {
     *     "types" : {
     *       "items" : [ {
     *         "name" : "car",
     *         "uuid" : "82c50681226b4feb850681226b3feb99"
     *       }, {
     *         "name" : "ship",
     *         "uuid" : "0314508fa55b494694508fa55b8946fc"
     *       } ]
     *     },
     *     "colors" : {
     *       "items" : [ {
     *         "name" : "red",
     *         "uuid" : "090a724aa74b4eab8a724aa74beeab0a"
     *       }, {
     *         "name" : "green",
     *         "uuid" : "1f1b5278976241879b52789762d18736"
     *       } ]
     *     }
     *   },
     *   "childrenInfo" : {
     *     "folder" : {
     *       "schemaUuid" : "8f5f2102c30347609f2102c3039760b2",
     *       "count" : 5
     *     },
     *     "blogpost" : {
     *       "schemaUuid" : "17a135630314447ba135630314447b8e",
     *       "count" : 1
     *     }
     *   },
     *   "schema" : {
     *     "name" : "content",
     *     "uuid" : "bdcdb9330dfc46198db9330dfcb6192d",
     *     "version" : 1
     *   },
     *   "fields" : {
     *     "name" : "Name for language tag de-DE",
     *     "filename" : "dummy-content.de.html",
     *     "teaser" : "Dummy teaser for de-DE",
     *     "content" : "Content for language tag de-DE",
     *     "relatedProduct" : {
     *       "uuid" : "5fc3a15c30eb466d83a15c30ebd66d20"
     *     },
     *     "price" : 100.1,
     *     "enabled" : true,
     *     "release" : "2017-02-23T09:07:46.490Z",
     *     "categories" : [ {
     *       "uuid" : "b212886e1d85438a92886e1d85438a70"
     *     }, {
     *       "uuid" : "e8e3a2e9e5f3483ca3a2e9e5f3583c26"
     *     }, {
     *       "uuid" : "dd83e894aa73400a83e894aa73e00afd"
     *     } ],
     *     "names" : [ "Jack", "Joe", "Mary", "Tom" ],
     *     "categoryIds" : [ 1, 42, 133, 7 ],
     *     "binary" : {
     *       "fileName" : "flower.jpg",
     *       "width" : 800,
     *       "height" : 600,
     *       "sha512sum" : "ec582eb760034dd91d5fd33656c0b56f082b7365d32e2a139dd9c87ebc192bff3525f32ff4c4137463a31cad020ac19e6e356508db2b90e32d737b6d725e14c1",
     *       "fileSize" : 95365,
     *       "mimeType" : "image/jpeg",
     *       "dominantColor" : "#22a7f0"
     *     },
     *     "location" : {
     *       "uuid" : "71bbda2c891349f5bbda2c8913e9f581",
     *       "microschema" : {
     *         "name" : "geolocation",
     *         "uuid" : "d753bcc9b1d447ef93bcc9b1d457ef6b"
     *       },
     *       "fields" : {
     *         "latitude" : 48.208330230278,
     *         "longitude" : 16.373063840833
     *       }
     *     },
     *     "locations" : [ {
     *       "uuid" : "2282889f606840ec82889f606870ec76",
     *       "microschema" : {
     *         "name" : "geolocation",
     *         "uuid" : "e2ac6ba1fcb44248ac6ba1fcb4324871"
     *       },
     *       "fields" : {
     *         "latitude" : 48.208330230278,
     *         "longitude" : 16.373063840833
     *       }
     *     }, {
     *       "uuid" : "e951a8d25a474a8191a8d25a477a81c7",
     *       "microschema" : {
     *         "name" : "geolocation",
     *         "uuid" : "8ddca143a3f34b289ca143a3f3fb28fd"
     *       },
     *       "fields" : {
     *         "latitude" : 48.137222,
     *         "longitude" : 11.575556
     *       }
     *     } ]
     *   },
     *   "path" : "/api/v1/yourProject/webroot/Images",
     *   "breadcrumb" : [ {
     *     "uuid" : "b877c1b3cd72439bb7c1b3cd72839b57",
     *     "displayName" : "news",
     *     "path" : "/news"
     *   }, {
     *     "uuid" : "b4ef22163a25450eaf22163a25750e70",
     *     "displayName" : "2015",
     *     "path" : "/news/2015"
     *   } ],
     *   "container" : false,
     *   "permissions" : {
     *     "create" : true,
     *     "read" : true,
     *     "update" : true,
     *     "delete" : true,
     *     "publish" : false,
     *     "readPublished" : false
     *   }
     * }
     * 
     */
post: (data?: any, query?: any, token?: string):Promise<ProjectNodesPostResponse> => {
                    return this.post(`/${project}/nodes`, data, query, token); },
    /**
     * Method get
     * Read all nodes and return a paged list response.
     * Example
     * {
     *   "data" : [ {
     *     "uuid" : "f825ed773fe64452a5ed773fe6845292",
     *     "creator" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "209300c6708c42a49300c6708c92a43b"
     *     },
     *     "created" : "2017-02-23T09:07:46.494Z",
     *     "edited" : "2017-02-23T09:07:46.494Z",
     *     "availableLanguages" : [ "en", "de" ],
     *     "languagePaths" : {
     *       "de" : "/api/v1/yourProject/webroot/Bilder",
     *       "en" : "/api/v1/yourProject/webroot/Images"
     *     },
     *     "parentNode" : {
     *       "uuid" : "8a97306943c3400d97306943c3200dc2",
     *       "displayName" : "parentNodeDisplayName"
     *     },
     *     "tags" : {
     *       "types" : {
     *         "items" : [ {
     *           "name" : "car",
     *           "uuid" : "9a8e7995d26b4b898e7995d26bfb894f"
     *         }, {
     *           "name" : "ship",
     *           "uuid" : "e2ee04bfe9ee4916ae04bfe9ee99166c"
     *         } ]
     *       },
     *       "colors" : {
     *         "items" : [ {
     *           "name" : "red",
     *           "uuid" : "6740974857834d5d80974857830d5da9"
     *         }, {
     *           "name" : "green",
     *           "uuid" : "05fd3be5562a4443bd3be5562a944393"
     *         } ]
     *       }
     *     },
     *     "childrenInfo" : {
     *       "folder" : {
     *         "schemaUuid" : "10334bd81964489eb34bd81964789e98",
     *         "count" : 5
     *       },
     *       "blogpost" : {
     *         "schemaUuid" : "39180a996fa04823980a996fa03823e2",
     *         "count" : 1
     *       }
     *     },
     *     "schema" : {
     *       "name" : "content",
     *       "uuid" : "8773b72b19614136b3b72b1961e1365c",
     *       "version" : 1
     *     },
     *     "fields" : {
     *       "name" : "Name for language tag de-DE",
     *       "filename" : "dummy-content.de.html",
     *       "teaser" : "Dummy teaser for de-DE",
     *       "content" : "Content for language tag de-DE",
     *       "relatedProduct" : {
     *         "uuid" : "12fdf8103ee74657bdf8103ee78657dc"
     *       },
     *       "price" : 100.1,
     *       "enabled" : true,
     *       "release" : "2017-02-23T09:07:46.494Z",
     *       "categories" : [ {
     *         "uuid" : "61d88a23503442d4988a23503422d407"
     *       }, {
     *         "uuid" : "740e354ef499424c8e354ef499e24ce6"
     *       }, {
     *         "uuid" : "8f242e7e84394145a42e7e8439c145b0"
     *       } ],
     *       "names" : [ "Jack", "Joe", "Mary", "Tom" ],
     *       "categoryIds" : [ 1, 42, 133, 7 ],
     *       "binary" : {
     *         "fileName" : "flower.jpg",
     *         "width" : 800,
     *         "height" : 600,
     *         "sha512sum" : "ec582eb760034dd91d5fd33656c0b56f082b7365d32e2a139dd9c87ebc192bff3525f32ff4c4137463a31cad020ac19e6e356508db2b90e32d737b6d725e14c1",
     *         "fileSize" : 95365,
     *         "mimeType" : "image/jpeg",
     *         "dominantColor" : "#22a7f0"
     *       },
     *       "location" : {
     *         "uuid" : "1293ca5294244db593ca529424bdb520",
     *         "microschema" : {
     *           "name" : "geolocation",
     *           "uuid" : "9b209bc6dac5477da09bc6dac5a77d9b"
     *         },
     *         "fields" : {
     *           "latitude" : 48.208330230278,
     *           "longitude" : 16.373063840833
     *         }
     *       },
     *       "locations" : [ {
     *         "uuid" : "d73560a07f674edcb560a07f676edc57",
     *         "microschema" : {
     *           "name" : "geolocation",
     *           "uuid" : "313f3c300b6c4684bf3c300b6c4684b8"
     *         },
     *         "fields" : {
     *           "latitude" : 48.208330230278,
     *           "longitude" : 16.373063840833
     *         }
     *       }, {
     *         "uuid" : "fb05925059db403b85925059db203b67",
     *         "microschema" : {
     *           "name" : "geolocation",
     *           "uuid" : "a48cc55f11c34d768cc55f11c36d76d9"
     *         },
     *         "fields" : {
     *           "latitude" : 48.137222,
     *           "longitude" : 11.575556
     *         }
     *       } ]
     *     },
     *     "path" : "/api/v1/yourProject/webroot/Images",
     *     "breadcrumb" : [ {
     *       "uuid" : "3b8a3f66f19740e88a3f66f197b0e8e9",
     *       "displayName" : "news",
     *       "path" : "/news"
     *     }, {
     *       "uuid" : "a2ebab9169594905abab916959590589",
     *       "displayName" : "2015",
     *       "path" : "/news/2015"
     *     } ],
     *     "container" : false,
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : true,
     *       "delete" : true,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   }, {
     *     "uuid" : "e1c468ba6aac47388468ba6aacd738c8",
     *     "creator" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "9ea6a286193445e9a6a286193425e947"
     *     },
     *     "created" : "2017-02-23T09:07:46.494Z",
     *     "editor" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "0d71043825ba442cb1043825ba142cae"
     *     },
     *     "edited" : "2017-02-23T09:07:46.494Z",
     *     "parentNode" : {
     *       "uuid" : "c6fc8ba5baf24326bc8ba5baf22326d2",
     *       "displayName" : "parentNodeDisplayName"
     *     },
     *     "tags" : {
     *       "types" : {
     *         "items" : [ {
     *           "name" : "car",
     *           "uuid" : "5b9c18125ebd49ea9c18125ebd59ea3a"
     *         }, {
     *           "name" : "ship",
     *           "uuid" : "e4896744db2e498e896744db2e898e22"
     *         } ]
     *       },
     *       "colors" : {
     *         "items" : [ {
     *           "name" : "red",
     *           "uuid" : "98615b670ade4579a15b670ade157985"
     *         }, {
     *           "name" : "green",
     *           "uuid" : "f09377ad2e4740349377ad2e47403487"
     *         } ]
     *       }
     *     },
     *     "childrenInfo" : { },
     *     "schema" : {
     *       "name" : "content",
     *       "uuid" : "2c1c8593d2aa42439c8593d2aad243be",
     *       "version" : 1
     *     },
     *     "fields" : {
     *       "name" : "Name for language tag en",
     *       "filename" : "dummy-content.en.html",
     *       "teaser" : "Dummy teaser for en",
     *       "content" : "Content for language tag en"
     *     },
     *     "breadcrumb" : [ {
     *       "uuid" : "4973968eef834401b3968eef83e401c0",
     *       "displayName" : "news",
     *       "path" : "/news"
     *     }, {
     *       "uuid" : "3880e34fbb4548a080e34fbb4508a034",
     *       "displayName" : "2015",
     *       "path" : "/news/2015"
     *     } ],
     *     "container" : false,
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : false,
     *       "delete" : false,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   } ],
     *   "_metainfo" : {
     *     "currentPage" : 1,
     *     "perPage" : 2,
     *     "pageCount" : 10,
     *     "totalCount" : 20
     *   }
     * }
     * 
     */
get: (query?: any, token?: string):Promise<ProjectNodesGetResponse> => {
                    return this.get(`/${project}/nodes`, query, token); },
    /**
    * Resource /{project}/nodes/{nodeUuid}
    * 
    */ 
    nodeUuid: (nodeUuid: string) => {
        return {
        /**
     * Method get
     * Load the node with the given uuid.
     * Example
     * {
     *   "uuid" : "a173c41f05a44241b3c41f05a4e241a0",
     *   "creator" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "6cf6ac7da34b4a16b6ac7da34b7a16e2"
     *   },
     *   "created" : "2017-02-23T09:07:46.492Z",
     *   "edited" : "2017-02-23T09:07:46.492Z",
     *   "availableLanguages" : [ "en", "de" ],
     *   "languagePaths" : {
     *     "de" : "/api/v1/yourProject/webroot/Bilder",
     *     "en" : "/api/v1/yourProject/webroot/Images"
     *   },
     *   "parentNode" : {
     *     "uuid" : "24d1ba27d1f24a5391ba27d1f2ea5304",
     *     "displayName" : "parentNodeDisplayName"
     *   },
     *   "tags" : {
     *     "types" : {
     *       "items" : [ {
     *         "name" : "car",
     *         "uuid" : "61e2cb6e0e9c45f8a2cb6e0e9c95f8e1"
     *       }, {
     *         "name" : "ship",
     *         "uuid" : "cb7f39777d084301bf39777d08f301ca"
     *       } ]
     *     },
     *     "colors" : {
     *       "items" : [ {
     *         "name" : "red",
     *         "uuid" : "7e310046913348e6b10046913308e633"
     *       }, {
     *         "name" : "green",
     *         "uuid" : "ad8bbbe2a22f430b8bbbe2a22fb30b62"
     *       } ]
     *     }
     *   },
     *   "childrenInfo" : {
     *     "folder" : {
     *       "schemaUuid" : "b301ec109b6a47b981ec109b6a67b957",
     *       "count" : 5
     *     },
     *     "blogpost" : {
     *       "schemaUuid" : "a660fc05a66744e4a0fc05a66784e491",
     *       "count" : 1
     *     }
     *   },
     *   "schema" : {
     *     "name" : "content",
     *     "uuid" : "b0f33ac76bef444db33ac76beff44dfc",
     *     "version" : 1
     *   },
     *   "fields" : {
     *     "name" : "Name for language tag de-DE",
     *     "filename" : "dummy-content.de.html",
     *     "teaser" : "Dummy teaser for de-DE",
     *     "content" : "Content for language tag de-DE",
     *     "relatedProduct" : {
     *       "uuid" : "ea739c98d3ee45f2b39c98d3ee55f26f"
     *     },
     *     "price" : 100.1,
     *     "enabled" : true,
     *     "release" : "2017-02-23T09:07:46.492Z",
     *     "categories" : [ {
     *       "uuid" : "f766b6195d134564a6b6195d13c564aa"
     *     }, {
     *       "uuid" : "031d6830c1f944ed9d6830c1f9e4ed6b"
     *     }, {
     *       "uuid" : "0494c0b117e1480d94c0b117e1780de8"
     *     } ],
     *     "names" : [ "Jack", "Joe", "Mary", "Tom" ],
     *     "categoryIds" : [ 1, 42, 133, 7 ],
     *     "binary" : {
     *       "fileName" : "flower.jpg",
     *       "width" : 800,
     *       "height" : 600,
     *       "sha512sum" : "ec582eb760034dd91d5fd33656c0b56f082b7365d32e2a139dd9c87ebc192bff3525f32ff4c4137463a31cad020ac19e6e356508db2b90e32d737b6d725e14c1",
     *       "fileSize" : 95365,
     *       "mimeType" : "image/jpeg",
     *       "dominantColor" : "#22a7f0"
     *     },
     *     "location" : {
     *       "uuid" : "7bad38d7c39d4bd9ad38d7c39dfbd9bf",
     *       "microschema" : {
     *         "name" : "geolocation",
     *         "uuid" : "f71c86b5b4084a469c86b5b4088a468f"
     *       },
     *       "fields" : {
     *         "latitude" : 48.208330230278,
     *         "longitude" : 16.373063840833
     *       }
     *     },
     *     "locations" : [ {
     *       "uuid" : "cb6aaa36d0654aa5aaaa36d0650aa505",
     *       "microschema" : {
     *         "name" : "geolocation",
     *         "uuid" : "bb954bd730e84e42954bd730e87e42d9"
     *       },
     *       "fields" : {
     *         "latitude" : 48.208330230278,
     *         "longitude" : 16.373063840833
     *       }
     *     }, {
     *       "uuid" : "575bf6bb81564c759bf6bb8156ec7535",
     *       "microschema" : {
     *         "name" : "geolocation",
     *         "uuid" : "ef11eb4d1851464091eb4d1851d640ea"
     *       },
     *       "fields" : {
     *         "latitude" : 48.137222,
     *         "longitude" : 11.575556
     *       }
     *     } ]
     *   },
     *   "path" : "/api/v1/yourProject/webroot/Images",
     *   "breadcrumb" : [ {
     *     "uuid" : "28d427d96a21465f9427d96a21265f75",
     *     "displayName" : "news",
     *     "path" : "/news"
     *   }, {
     *     "uuid" : "73acd040fff44233acd040fff4b233b9",
     *     "displayName" : "2015",
     *     "path" : "/news/2015"
     *   } ],
     *   "container" : false,
     *   "permissions" : {
     *     "create" : true,
     *     "read" : true,
     *     "update" : true,
     *     "delete" : true,
     *     "publish" : false,
     *     "readPublished" : false
     *   }
     * }
     * 
     */
get: (query?: any, token?: string):Promise<ProjectNodesNodeUuidGetResponse> => {
                    return this.get(`/${project}/nodes/${nodeUuid}`, query, token); },
    /**
     * Method post
     * Update the node with the given uuid. It is mandatory to specify the version within the update request. Mesh will automatically check for version conflicts and return a 409 error if a conflict has been detected. Additional conflict checks for webrootpath conflicts will also be performed.
     * Example
     * {
     *   "uuid" : "e9d39618caf841f5939618caf8b1f5d3",
     *   "creator" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "63ee2f4216134c42ae2f4216137c4249"
     *   },
     *   "created" : "2017-02-23T09:07:46.500Z",
     *   "editor" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "ce0b45a7ced845b88b45a7ced825b8be"
     *   },
     *   "edited" : "2017-02-23T09:07:46.500Z",
     *   "parentNode" : {
     *     "uuid" : "a08f52cdea2544f88f52cdea2574f811",
     *     "displayName" : "parentNodeDisplayName"
     *   },
     *   "tags" : {
     *     "types" : {
     *       "items" : [ {
     *         "name" : "car",
     *         "uuid" : "f5e5b18d1f854799a5b18d1f8537992f"
     *       }, {
     *         "name" : "ship",
     *         "uuid" : "4c76322c87314670b6322c873176706d"
     *       } ]
     *     },
     *     "colors" : {
     *       "items" : [ {
     *         "name" : "red",
     *         "uuid" : "9f1ed51d1e614eb29ed51d1e611eb28f"
     *       }, {
     *         "name" : "green",
     *         "uuid" : "e941a172812a494281a172812ae942e3"
     *       } ]
     *     }
     *   },
     *   "childrenInfo" : { },
     *   "schema" : {
     *     "name" : "content",
     *     "uuid" : "7c6e4ea360fb49a7ae4ea360fb49a751",
     *     "version" : 1
     *   },
     *   "fields" : {
     *     "name" : "Name for language tag en",
     *     "filename" : "dummy-content.en.html",
     *     "teaser" : "Dummy teaser for en",
     *     "content" : "Content for language tag en"
     *   },
     *   "breadcrumb" : [ {
     *     "uuid" : "9e3d2705bf5e4b7fbd2705bf5eab7f71",
     *     "displayName" : "news",
     *     "path" : "/news"
     *   }, {
     *     "uuid" : "8d0e778c1890431d8e778c1890631d49",
     *     "displayName" : "2015",
     *     "path" : "/news/2015"
     *   } ],
     *   "container" : false,
     *   "permissions" : {
     *     "create" : true,
     *     "read" : true,
     *     "update" : false,
     *     "delete" : false,
     *     "publish" : false,
     *     "readPublished" : false
     *   }
     * }
     * 
     */
post: (data?: any, query?: any, token?: string):Promise<ProjectNodesNodeUuidPostResponse> => {
                    return this.post(`/${project}/nodes/${nodeUuid}`, data, query, token); },
    /**
     * Method delete
     * Delete the node with the given uuid.
     * Example
     * 
     */
delete: (token?: string):Promise<ProjectNodesNodeUuidDeleteResponse> => {
                    return this.delete(`/${project}/nodes/${nodeUuid}`, token); },
    /**
    * Resource /{project}/nodes/{nodeUuid}/binary
    * 
    */ 
    binary: {
    
    /**
    * Resource /{project}/nodes/{nodeUuid}/binary/{fieldName}
    * 
    */ 
    fieldName: (fieldName: string) => {
        return {
        /**
     * Method post
     * Update the binaryfield with the given name.
     * Example
     * {
     *   "uuid" : "bc9bbae76d454baa9bbae76d455baace",
     *   "creator" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "497ed9f953fb4704bed9f953fbb70401"
     *   },
     *   "created" : "2017-02-23T09:07:46.511Z",
     *   "edited" : "2017-02-23T09:07:46.511Z",
     *   "availableLanguages" : [ "en", "de" ],
     *   "languagePaths" : {
     *     "de" : "/api/v1/yourProject/webroot/Bilder",
     *     "en" : "/api/v1/yourProject/webroot/Images"
     *   },
     *   "parentNode" : {
     *     "uuid" : "e5bbbd9a8f2b4fe3bbbd9a8f2b4fe3ca",
     *     "displayName" : "parentNodeDisplayName"
     *   },
     *   "tags" : {
     *     "types" : {
     *       "items" : [ {
     *         "name" : "car",
     *         "uuid" : "84e9181e856e489fa9181e856eb89f69"
     *       }, {
     *         "name" : "ship",
     *         "uuid" : "1cbf6f58eddb47d5bf6f58eddbe7d56a"
     *       } ]
     *     },
     *     "colors" : {
     *       "items" : [ {
     *         "name" : "red",
     *         "uuid" : "f4362b6bedf64637b62b6bedf6f63764"
     *       }, {
     *         "name" : "green",
     *         "uuid" : "eee016e037824602a016e037826602b8"
     *       } ]
     *     }
     *   },
     *   "childrenInfo" : {
     *     "folder" : {
     *       "schemaUuid" : "a7e31e2fcde84567a31e2fcde8e567f4",
     *       "count" : 5
     *     },
     *     "blogpost" : {
     *       "schemaUuid" : "8a4db09bc39943658db09bc399c365ec",
     *       "count" : 1
     *     }
     *   },
     *   "schema" : {
     *     "name" : "content",
     *     "uuid" : "55d96e123d1a4868996e123d1af86856",
     *     "version" : 1
     *   },
     *   "fields" : {
     *     "name" : "Name for language tag de-DE",
     *     "filename" : "dummy-content.de.html",
     *     "teaser" : "Dummy teaser for de-DE",
     *     "content" : "Content for language tag de-DE",
     *     "relatedProduct" : {
     *       "uuid" : "0e9945544b7e49549945544b7ed95452"
     *     },
     *     "price" : 100.1,
     *     "enabled" : true,
     *     "release" : "2017-02-23T09:07:46.511Z",
     *     "categories" : [ {
     *       "uuid" : "ebdebe9f03524c5c9ebe9f0352dc5c8e"
     *     }, {
     *       "uuid" : "2e621863454d426da21863454dd26ddc"
     *     }, {
     *       "uuid" : "f45f44d49a114a089f44d49a115a0834"
     *     } ],
     *     "names" : [ "Jack", "Joe", "Mary", "Tom" ],
     *     "categoryIds" : [ 1, 42, 133, 7 ],
     *     "binary" : {
     *       "fileName" : "flower.jpg",
     *       "width" : 800,
     *       "height" : 600,
     *       "sha512sum" : "ec582eb760034dd91d5fd33656c0b56f082b7365d32e2a139dd9c87ebc192bff3525f32ff4c4137463a31cad020ac19e6e356508db2b90e32d737b6d725e14c1",
     *       "fileSize" : 95365,
     *       "mimeType" : "image/jpeg",
     *       "dominantColor" : "#22a7f0"
     *     },
     *     "location" : {
     *       "uuid" : "2773fd2879b9436cb3fd2879b9536c04",
     *       "microschema" : {
     *         "name" : "geolocation",
     *         "uuid" : "781330f0b89e478d9330f0b89e878d74"
     *       },
     *       "fields" : {
     *         "latitude" : 48.208330230278,
     *         "longitude" : 16.373063840833
     *       }
     *     },
     *     "locations" : [ {
     *       "uuid" : "0b9a0e9595fb46309a0e9595fb363043",
     *       "microschema" : {
     *         "name" : "geolocation",
     *         "uuid" : "ba1ef3fabfd246999ef3fabfd296995c"
     *       },
     *       "fields" : {
     *         "latitude" : 48.208330230278,
     *         "longitude" : 16.373063840833
     *       }
     *     }, {
     *       "uuid" : "62d6ba363027405c96ba363027405cae",
     *       "microschema" : {
     *         "name" : "geolocation",
     *         "uuid" : "cbbe6f0d705942f0be6f0d705992f021"
     *       },
     *       "fields" : {
     *         "latitude" : 48.137222,
     *         "longitude" : 11.575556
     *       }
     *     } ]
     *   },
     *   "path" : "/api/v1/yourProject/webroot/Images",
     *   "breadcrumb" : [ {
     *     "uuid" : "d3c37d5ac33843b7837d5ac33803b796",
     *     "displayName" : "news",
     *     "path" : "/news"
     *   }, {
     *     "uuid" : "de6913f34bdd4523a913f34bdd852371",
     *     "displayName" : "2015",
     *     "path" : "/news/2015"
     *   } ],
     *   "container" : false,
     *   "permissions" : {
     *     "create" : true,
     *     "read" : true,
     *     "update" : true,
     *     "delete" : true,
     *     "publish" : false,
     *     "readPublished" : false
     *   }
     * }
     * 
     */
post: (data?: any, query?: any, token?: string):Promise<ProjectNodesNodeUuidBinaryFieldNamePostResponse> => {
                    return this.post(`/${project}/nodes/${nodeUuid}/binary/${fieldName}`, data, query, token); },
    /**
     * Method get
     * Download the binary field with the given name.
     * Example
     * 
     */
get: (query?: any, token?: string):Promise<ProjectNodesNodeUuidBinaryFieldNameGetResponse> => {
                    return this.get(`/${project}/nodes/${nodeUuid}/binary/${fieldName}`, query, token); },
    
        };
    }
    // -- end resource {fieldName} -- 
    
    }
    // -- end resource binary -- 
    ,
/**
    * Resource /{project}/nodes/{nodeUuid}/binaryTransform
    * 
    */ 
    binaryTransform: {
    
    /**
    * Resource /{project}/nodes/{nodeUuid}/binaryTransform/{fieldName}
    * 
    */ 
    fieldName: (fieldName: string) => {
        return {
        /**
     * Method post
     * Transform the image with the given field name and overwrite the stored image with the transformation result.
     * Example
     * {
     *   "uuid" : "c24578ff46dd4a878578ff46dd8a87a6",
     *   "creator" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "8bb025f5539b4c78b025f5539bac7888"
     *   },
     *   "created" : "2017-02-23T09:07:46.513Z",
     *   "edited" : "2017-02-23T09:07:46.513Z",
     *   "availableLanguages" : [ "en", "de" ],
     *   "languagePaths" : {
     *     "de" : "/api/v1/yourProject/webroot/Bilder",
     *     "en" : "/api/v1/yourProject/webroot/Images"
     *   },
     *   "parentNode" : {
     *     "uuid" : "b960855e73ee4c23a0855e73ee4c23a6",
     *     "displayName" : "parentNodeDisplayName"
     *   },
     *   "tags" : {
     *     "types" : {
     *       "items" : [ {
     *         "name" : "car",
     *         "uuid" : "02e2b7e06462405aa2b7e06462d05aaa"
     *       }, {
     *         "name" : "ship",
     *         "uuid" : "be3ddc52d01c40b4bddc52d01c30b42b"
     *       } ]
     *     },
     *     "colors" : {
     *       "items" : [ {
     *         "name" : "red",
     *         "uuid" : "b69e6b6ec2d64ea49e6b6ec2d6aea44c"
     *       }, {
     *         "name" : "green",
     *         "uuid" : "f6f737ac6f494c27b737ac6f490c2719"
     *       } ]
     *     }
     *   },
     *   "childrenInfo" : {
     *     "folder" : {
     *       "schemaUuid" : "407e757ac35f45c2be757ac35f95c2c2",
     *       "count" : 5
     *     },
     *     "blogpost" : {
     *       "schemaUuid" : "4fa82c2db79c4337a82c2db79cf33751",
     *       "count" : 1
     *     }
     *   },
     *   "schema" : {
     *     "name" : "content",
     *     "uuid" : "db041f7a08a248ea841f7a08a238ead1",
     *     "version" : 1
     *   },
     *   "fields" : {
     *     "name" : "Name for language tag de-DE",
     *     "filename" : "dummy-content.de.html",
     *     "teaser" : "Dummy teaser for de-DE",
     *     "content" : "Content for language tag de-DE",
     *     "relatedProduct" : {
     *       "uuid" : "28a2c8e06e664572a2c8e06e66657246"
     *     },
     *     "price" : 100.1,
     *     "enabled" : true,
     *     "release" : "2017-02-23T09:07:46.513Z",
     *     "categories" : [ {
     *       "uuid" : "1be8dab777c84e99a8dab777c80e996f"
     *     }, {
     *       "uuid" : "5bb22a2a7acf44acb22a2a7acf74ac30"
     *     }, {
     *       "uuid" : "754910d85d8144d28910d85d81a4d217"
     *     } ],
     *     "names" : [ "Jack", "Joe", "Mary", "Tom" ],
     *     "categoryIds" : [ 1, 42, 133, 7 ],
     *     "binary" : {
     *       "fileName" : "flower.jpg",
     *       "width" : 800,
     *       "height" : 600,
     *       "sha512sum" : "ec582eb760034dd91d5fd33656c0b56f082b7365d32e2a139dd9c87ebc192bff3525f32ff4c4137463a31cad020ac19e6e356508db2b90e32d737b6d725e14c1",
     *       "fileSize" : 95365,
     *       "mimeType" : "image/jpeg",
     *       "dominantColor" : "#22a7f0"
     *     },
     *     "location" : {
     *       "uuid" : "8270f4c69a144c93b0f4c69a147c9359",
     *       "microschema" : {
     *         "name" : "geolocation",
     *         "uuid" : "25cc265f4cd844898c265f4cd8e48974"
     *       },
     *       "fields" : {
     *         "latitude" : 48.208330230278,
     *         "longitude" : 16.373063840833
     *       }
     *     },
     *     "locations" : [ {
     *       "uuid" : "8e4fbb2cd8094e818fbb2cd809ee819f",
     *       "microschema" : {
     *         "name" : "geolocation",
     *         "uuid" : "bb44e2d234134fc384e2d234130fc3f8"
     *       },
     *       "fields" : {
     *         "latitude" : 48.208330230278,
     *         "longitude" : 16.373063840833
     *       }
     *     }, {
     *       "uuid" : "efff4cf333c94e98bf4cf333c91e982b",
     *       "microschema" : {
     *         "name" : "geolocation",
     *         "uuid" : "6d4491ae204544778491ae2045947728"
     *       },
     *       "fields" : {
     *         "latitude" : 48.137222,
     *         "longitude" : 11.575556
     *       }
     *     } ]
     *   },
     *   "path" : "/api/v1/yourProject/webroot/Images",
     *   "breadcrumb" : [ {
     *     "uuid" : "fb369154233242bab691542332a2ba0c",
     *     "displayName" : "news",
     *     "path" : "/news"
     *   }, {
     *     "uuid" : "b42e2021b7564aa4ae2021b756faa4b5",
     *     "displayName" : "2015",
     *     "path" : "/news/2015"
     *   } ],
     *   "container" : false,
     *   "permissions" : {
     *     "create" : true,
     *     "read" : true,
     *     "update" : true,
     *     "delete" : true,
     *     "publish" : false,
     *     "readPublished" : false
     *   }
     * }
     * 
     */
post: (data?: any, query?: any, token?: string):Promise<ProjectNodesNodeUuidBinaryTransformFieldNamePostResponse> => {
                    return this.post(`/${project}/nodes/${nodeUuid}/binaryTransform/${fieldName}`, data, query, token); },
    
        };
    }
    // -- end resource {fieldName} -- 
    
    }
    // -- end resource binaryTransform -- 
    ,
/**
    * Resource /{project}/nodes/{nodeUuid}/children
    * 
    */ 
    children: {
        /**
     * Method get
     * Load all child nodes and return a paged list response.
     * Example
     * {
     *   "data" : [ {
     *     "uuid" : "dd3a466ee0fd4b9dba466ee0fd7b9d34",
     *     "creator" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "87f36a570d9a4c88b36a570d9a0c8806"
     *     },
     *     "created" : "2017-02-23T09:07:46.501Z",
     *     "edited" : "2017-02-23T09:07:46.501Z",
     *     "availableLanguages" : [ "en", "de" ],
     *     "languagePaths" : {
     *       "de" : "/api/v1/yourProject/webroot/Bilder",
     *       "en" : "/api/v1/yourProject/webroot/Images"
     *     },
     *     "parentNode" : {
     *       "uuid" : "f867be9a0fd34e1da7be9a0fd3de1da9",
     *       "displayName" : "parentNodeDisplayName"
     *     },
     *     "tags" : {
     *       "types" : {
     *         "items" : [ {
     *           "name" : "car",
     *           "uuid" : "615fa40bdaf941ad9fa40bdaf991ad8d"
     *         }, {
     *           "name" : "ship",
     *           "uuid" : "38cc373111c74c908c373111c7cc9037"
     *         } ]
     *       },
     *       "colors" : {
     *         "items" : [ {
     *           "name" : "red",
     *           "uuid" : "3256d0ae44464ebf96d0ae4446bebf44"
     *         }, {
     *           "name" : "green",
     *           "uuid" : "5b59a27cbc364c2d99a27cbc369c2d90"
     *         } ]
     *       }
     *     },
     *     "childrenInfo" : {
     *       "folder" : {
     *         "schemaUuid" : "3031643cea434fbfb1643cea438fbf7a",
     *         "count" : 5
     *       },
     *       "blogpost" : {
     *         "schemaUuid" : "6c60d0843a7d4d20a0d0843a7dfd20af",
     *         "count" : 1
     *       }
     *     },
     *     "schema" : {
     *       "name" : "content",
     *       "uuid" : "7f4b79f9c08542528b79f9c0855252f4",
     *       "version" : 1
     *     },
     *     "fields" : {
     *       "name" : "Name for language tag de-DE",
     *       "filename" : "dummy-content.de.html",
     *       "teaser" : "Dummy teaser for de-DE",
     *       "content" : "Content for language tag de-DE",
     *       "relatedProduct" : {
     *         "uuid" : "655aaca0c8f941c09aaca0c8f921c056"
     *       },
     *       "price" : 100.1,
     *       "enabled" : true,
     *       "release" : "2017-02-23T09:07:46.501Z",
     *       "categories" : [ {
     *         "uuid" : "4039dee19a5148d0b9dee19a51c8d013"
     *       }, {
     *         "uuid" : "b4d83dd54645499c983dd54645d99ce2"
     *       }, {
     *         "uuid" : "44423d557cdf4439823d557cdfa43914"
     *       } ],
     *       "names" : [ "Jack", "Joe", "Mary", "Tom" ],
     *       "categoryIds" : [ 1, 42, 133, 7 ],
     *       "binary" : {
     *         "fileName" : "flower.jpg",
     *         "width" : 800,
     *         "height" : 600,
     *         "sha512sum" : "ec582eb760034dd91d5fd33656c0b56f082b7365d32e2a139dd9c87ebc192bff3525f32ff4c4137463a31cad020ac19e6e356508db2b90e32d737b6d725e14c1",
     *         "fileSize" : 95365,
     *         "mimeType" : "image/jpeg",
     *         "dominantColor" : "#22a7f0"
     *       },
     *       "location" : {
     *         "uuid" : "554c678a678643ec8c678a678643ecc7",
     *         "microschema" : {
     *           "name" : "geolocation",
     *           "uuid" : "7ec79103a4de4239879103a4de32396e"
     *         },
     *         "fields" : {
     *           "latitude" : 48.208330230278,
     *           "longitude" : 16.373063840833
     *         }
     *       },
     *       "locations" : [ {
     *         "uuid" : "6c48954ac4ce4bdd88954ac4ce7bdd8b",
     *         "microschema" : {
     *           "name" : "geolocation",
     *           "uuid" : "289d8b02faca4bd19d8b02faca5bd180"
     *         },
     *         "fields" : {
     *           "latitude" : 48.208330230278,
     *           "longitude" : 16.373063840833
     *         }
     *       }, {
     *         "uuid" : "ea74dc0d2dd54760b4dc0d2dd57760e2",
     *         "microschema" : {
     *           "name" : "geolocation",
     *           "uuid" : "808dd52fdb3a46838dd52fdb3a268331"
     *         },
     *         "fields" : {
     *           "latitude" : 48.137222,
     *           "longitude" : 11.575556
     *         }
     *       } ]
     *     },
     *     "path" : "/api/v1/yourProject/webroot/Images",
     *     "breadcrumb" : [ {
     *       "uuid" : "779375764aea47b49375764aea67b419",
     *       "displayName" : "news",
     *       "path" : "/news"
     *     }, {
     *       "uuid" : "cce3229c2ad64ff8a3229c2ad64ff84d",
     *       "displayName" : "2015",
     *       "path" : "/news/2015"
     *     } ],
     *     "container" : false,
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : true,
     *       "delete" : true,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   }, {
     *     "uuid" : "225b7e367b5f43619b7e367b5f03612d",
     *     "creator" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "584b6a24200d474c8b6a24200de74c70"
     *     },
     *     "created" : "2017-02-23T09:07:46.502Z",
     *     "editor" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "5f2ac569b2c64ff2aac569b2c61ff256"
     *     },
     *     "edited" : "2017-02-23T09:07:46.502Z",
     *     "parentNode" : {
     *       "uuid" : "d253bb6b94ab44b893bb6b94aba4b887",
     *       "displayName" : "parentNodeDisplayName"
     *     },
     *     "tags" : {
     *       "types" : {
     *         "items" : [ {
     *           "name" : "car",
     *           "uuid" : "9281faf4ba574f4981faf4ba578f49c5"
     *         }, {
     *           "name" : "ship",
     *           "uuid" : "b7c5545f4fba400b85545f4fbaa00b7e"
     *         } ]
     *       },
     *       "colors" : {
     *         "items" : [ {
     *           "name" : "red",
     *           "uuid" : "9ffaea4cde584a81baea4cde589a8170"
     *         }, {
     *           "name" : "green",
     *           "uuid" : "c34b2b019dcf422b8b2b019dcfb22bbb"
     *         } ]
     *       }
     *     },
     *     "childrenInfo" : { },
     *     "schema" : {
     *       "name" : "content",
     *       "uuid" : "2cce78ead0cd495a8e78ead0cdb95abd",
     *       "version" : 1
     *     },
     *     "fields" : {
     *       "name" : "Name for language tag en",
     *       "filename" : "dummy-content.en.html",
     *       "teaser" : "Dummy teaser for en",
     *       "content" : "Content for language tag en"
     *     },
     *     "breadcrumb" : [ {
     *       "uuid" : "8bd859786d3f460e9859786d3f560e6d",
     *       "displayName" : "news",
     *       "path" : "/news"
     *     }, {
     *       "uuid" : "5f141f6cd97c4e6c941f6cd97c4e6c5d",
     *       "displayName" : "2015",
     *       "path" : "/news/2015"
     *     } ],
     *     "container" : false,
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : false,
     *       "delete" : false,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   } ],
     *   "_metainfo" : {
     *     "currentPage" : 1,
     *     "perPage" : 2,
     *     "pageCount" : 10,
     *     "totalCount" : 20
     *   }
     * }
     * 
     */
get: (query?: any, token?: string):Promise<ProjectNodesNodeUuidChildrenGetResponse> => {
                    return this.get(`/${project}/nodes/${nodeUuid}/children`, query, token); },
    
    }
    // -- end resource children -- 
    ,
/**
    * Resource /{project}/nodes/{nodeUuid}/languages
    * 
    */ 
    languages: {
    
    /**
    * Resource /{project}/nodes/{nodeUuid}/languages/{language}
    * 
    */ 
    language: (language: string) => {
        return {
        /**
     * Method delete
     * Delete the language specific content of the node.
     * Example
     * 
     */
delete: (token?: string):Promise<ProjectNodesNodeUuidLanguagesLanguageDeleteResponse> => {
                    return this.delete(`/${project}/nodes/${nodeUuid}/languages/${language}`, token); },
    /**
    * Resource /{project}/nodes/{nodeUuid}/languages/{language}/published
    * 
    */ 
    published: {
        /**
     * Method get
     * Return the publish status for the given language of the node.
     * Example
     * {
     *   "published" : true,
     *   "version" : {
     *     "uuid" : "ad4c07574cf1446d8c07574cf1046dd0",
     *     "number" : "3.0"
     *   },
     *   "publisher" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "93f82fd1f7244c9cb82fd1f724cc9c12"
     *   },
     *   "publishDate" : "2017-02-23T09:07:46.518Z"
     * }
     * 
     */
get: (query?: any, token?: string):Promise<ProjectNodesNodeUuidLanguagesLanguagePublishedGetResponse> => {
                    return this.get(`/${project}/nodes/${nodeUuid}/languages/${language}/published`, query, token); },
    
    }
    // -- end resource published -- 
    
        };
    }
    // -- end resource {language} -- 
    
    }
    // -- end resource languages -- 
    ,
/**
    * Resource /{project}/nodes/{nodeUuid}/moveTo
    * 
    */ 
    moveTo: {
    
    /**
    * Resource /{project}/nodes/{nodeUuid}/moveTo/{toUuid}
    * 
    */ 
    toUuid: (toUuid: string) => {
        return {
        /**
     * Method post
     * Move the node into the target node.
     * Example
     * 
     */
post: (data?: any, query?: any, token?: string):Promise<ProjectNodesNodeUuidMoveToToUuidPostResponse> => {
                    return this.post(`/${project}/nodes/${nodeUuid}/moveTo/${toUuid}`, data, query, token); },
    
        };
    }
    // -- end resource {toUuid} -- 
    
    }
    // -- end resource moveTo -- 
    ,
/**
    * Resource /{project}/nodes/{nodeUuid}/navigation
    * 
    */ 
    navigation: {
        /**
     * Method get
     * Returns a navigation object for the provided node.
     * Example
     * {
     *   "uuid" : "f13acef650234e5fbacef650237e5f06"
     * }
     * 
     */
get: (query?: any, token?: string):Promise<ProjectNodesNodeUuidNavigationGetResponse> => {
                    return this.get(`/${project}/nodes/${nodeUuid}/navigation`, query, token); },
    
    }
    // -- end resource navigation -- 
    ,
/**
    * Resource /{project}/nodes/{nodeUuid}/published
    * 
    */ 
    published: {
        /**
     * Method get
     * Return the published status of the node.
     * Example
     * {
     *   "availableLanguages" : {
     *     "de" : {
     *       "published" : false,
     *       "version" : {
     *         "uuid" : "9ada6ccf1592474e9a6ccf1592374ed4",
     *         "number" : "0.4"
     *       }
     *     },
     *     "en" : {
     *       "published" : true,
     *       "version" : {
     *         "uuid" : "89a72abd228c4c23a72abd228cfc238b",
     *         "number" : "3.0"
     *       },
     *       "publisher" : {
     *         "firstName" : "Joe",
     *         "lastName" : "Doe",
     *         "uuid" : "a05891a8c7ec46809891a8c7ece68043"
     *       },
     *       "publishDate" : "2017-02-23T09:07:46.516Z"
     *     },
     *     "fr" : {
     *       "published" : false,
     *       "version" : {
     *         "uuid" : "2c4edd6b430f45448edd6b430fa54447",
     *         "number" : "5.2"
     *       }
     *     }
     *   }
     * }
     * 
     */
get: (query?: any, token?: string):Promise<ProjectNodesNodeUuidPublishedGetResponse> => {
                    return this.get(`/${project}/nodes/${nodeUuid}/published`, query, token); },
    /**
     * Method post
     * Publish the node with the given uuid.
     * Example
     * {
     *   "availableLanguages" : {
     *     "de" : {
     *       "published" : false,
     *       "version" : {
     *         "uuid" : "d35a04e270234ed69a04e270232ed692",
     *         "number" : "0.4"
     *       }
     *     },
     *     "en" : {
     *       "published" : true,
     *       "version" : {
     *         "uuid" : "fba238a7441c41a4a238a7441cc1a4db",
     *         "number" : "3.0"
     *       },
     *       "publisher" : {
     *         "firstName" : "Joe",
     *         "lastName" : "Doe",
     *         "uuid" : "eb21a1b3807a4e42a1a1b3807a8e42f9"
     *       },
     *       "publishDate" : "2017-02-23T09:07:46.517Z"
     *     },
     *     "fr" : {
     *       "published" : false,
     *       "version" : {
     *         "uuid" : "5908714f1328497c88714f1328197ca9",
     *         "number" : "5.2"
     *       }
     *     }
     *   }
     * }
     * 
     */
post: (data?: any, query?: any, token?: string):Promise<ProjectNodesNodeUuidPublishedPostResponse> => {
                    return this.post(`/${project}/nodes/${nodeUuid}/published`, data, query, token); },
    /**
     * Method delete
     * Unpublish the given node.
     * Example
     * 
     */
delete: (token?: string):Promise<ProjectNodesNodeUuidPublishedDeleteResponse> => {
                    return this.delete(`/${project}/nodes/${nodeUuid}/published`, token); },
    
    }
    // -- end resource published -- 
    ,
/**
    * Resource /{project}/nodes/{nodeUuid}/tags
    * 
    */ 
    tags: {
        /**
     * Method get
     * Return a list of all tags which tag the node.
     * Example
     * {
     *   "data" : [ {
     *     "uuid" : "c172cbc7bdf14674b2cbc7bdf1a674c2",
     *     "creator" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "5e9c9efbc7a745aa9c9efbc7a7e5aabb"
     *     },
     *     "created" : "2017-02-23T09:07:46.506Z",
     *     "editor" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "d60f6f62233543718f6f62233593714b"
     *     },
     *     "edited" : "2017-02-23T09:07:46.506Z",
     *     "tagFamily" : {
     *       "name" : "colors",
     *       "uuid" : "e89e3242f8cc47609e3242f8ccf76077"
     *     },
     *     "name" : "green",
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : true,
     *       "delete" : true,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   }, {
     *     "uuid" : "bf4ca7a13db04a0b8ca7a13db01a0bc2",
     *     "creator" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "cb755b3d6ea24db9b55b3d6ea20db912"
     *     },
     *     "created" : "2017-02-23T09:07:46.506Z",
     *     "editor" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "19609df689564ed7a09df68956ced7cb"
     *     },
     *     "edited" : "2017-02-23T09:07:46.506Z",
     *     "tagFamily" : {
     *       "name" : "colors",
     *       "uuid" : "10a632bbd52a41eea632bbd52a11ee34"
     *     },
     *     "name" : "Name for language tag en",
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : false,
     *       "delete" : false,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   } ],
     *   "_metainfo" : {
     *     "currentPage" : 1,
     *     "perPage" : 2,
     *     "pageCount" : 10,
     *     "totalCount" : 20
     *   }
     * }
     * 
     */
get: (query?: any, token?: string):Promise<ProjectNodesNodeUuidTagsGetResponse> => {
                    return this.get(`/${project}/nodes/${nodeUuid}/tags`, query, token); },
    /**
    * Resource /{project}/nodes/{nodeUuid}/tags/{tagUuid}
    * 
    */ 
    tagUuid: (tagUuid: string) => {
        return {
        /**
     * Method post
     * Assign the given tag to the node.
     * Example
     * {
     *   "uuid" : "b6e1b74d86f04b67a1b74d86f0fb6783",
     *   "creator" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "d9c9408f2f85409789408f2f859097e9"
     *   },
     *   "created" : "2017-02-23T09:07:46.507Z",
     *   "editor" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "2be66d11aaaa4ccba66d11aaaaaccbe4"
     *   },
     *   "edited" : "2017-02-23T09:07:46.507Z",
     *   "parentNode" : {
     *     "uuid" : "130249cc5b39466b8249cc5b39f66bbe",
     *     "displayName" : "parentNodeDisplayName"
     *   },
     *   "tags" : {
     *     "types" : {
     *       "items" : [ {
     *         "name" : "car",
     *         "uuid" : "077051170ba348b6b051170ba348b649"
     *       }, {
     *         "name" : "ship",
     *         "uuid" : "c82b40d0ce524a9cab40d0ce529a9c95"
     *       } ]
     *     },
     *     "colors" : {
     *       "items" : [ {
     *         "name" : "red",
     *         "uuid" : "8f374cc99bf54deab74cc99bf57dea90"
     *       }, {
     *         "name" : "green",
     *         "uuid" : "f72ece1f6a884594aece1f6a88f5946a"
     *       } ]
     *     }
     *   },
     *   "childrenInfo" : { },
     *   "schema" : {
     *     "name" : "content",
     *     "uuid" : "a183399b37954a0183399b37957a0172",
     *     "version" : 1
     *   },
     *   "fields" : {
     *     "name" : "Name for language tag en",
     *     "filename" : "dummy-content.en.html",
     *     "teaser" : "Dummy teaser for en",
     *     "content" : "Content for language tag en"
     *   },
     *   "breadcrumb" : [ {
     *     "uuid" : "a2c524b30fe6426c8524b30fe6e26c8c",
     *     "displayName" : "news",
     *     "path" : "/news"
     *   }, {
     *     "uuid" : "4aadfcfb9eea4ea5adfcfb9eea1ea5b1",
     *     "displayName" : "2015",
     *     "path" : "/news/2015"
     *   } ],
     *   "container" : false,
     *   "permissions" : {
     *     "create" : true,
     *     "read" : true,
     *     "update" : false,
     *     "delete" : false,
     *     "publish" : false,
     *     "readPublished" : false
     *   }
     * }
     * 
     */
post: (data?: any, query?: any, token?: string):Promise<ProjectNodesNodeUuidTagsTagUuidPostResponse> => {
                    return this.post(`/${project}/nodes/${nodeUuid}/tags/${tagUuid}`, data, query, token); },
    /**
     * Method delete
     * Remove the given tag from the node.
     * Example
     * 
     */
delete: (token?: string):Promise<ProjectNodesNodeUuidTagsTagUuidDeleteResponse> => {
                    return this.delete(`/${project}/nodes/${nodeUuid}/tags/${tagUuid}`, token); },
    
        };
    }
    // -- end resource {tagUuid} -- 
    
    }
    // -- end resource tags -- 
    
        };
    }
    // -- end resource {nodeUuid} -- 
    
    }
    // -- end resource nodes -- 
    ,
/**
    * Resource /{project}/tagFamilies
    * Provides endpoints which allow the manipulation of tag families and tags.
    */ 
    tagFamilies: {
        /**
     * Method get
     * Load multiple tag families and return a paged list response.
     * Example
     * {
     *   "data" : [ {
     *     "creator" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "6686643beb32480f86643beb32880feb"
     *     },
     *     "created" : "2017-02-23T09:07:46.534Z",
     *     "editor" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "1656949c327b407696949c327b0076f1"
     *     },
     *     "edited" : "2017-02-23T09:07:46.534Z",
     *     "name" : "Colors",
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : false,
     *       "delete" : true,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   } ],
     *   "_metainfo" : {
     *     "currentPage" : 1,
     *     "perPage" : 2,
     *     "pageCount" : 10,
     *     "totalCount" : 20
     *   }
     * }
     * 
     */
get: (query?: any, token?: string):Promise<ProjectTagFamiliesGetResponse> => {
                    return this.get(`/${project}/tagFamilies`, query, token); },
    /**
     * Method post
     * Create a new tag family.
     * Example
     * {
     *   "creator" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "e5058e8924364cd4858e892436dcd4c0"
     *   },
     *   "created" : "2017-02-23T09:07:46.536Z",
     *   "editor" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "183d6bf0edaa4287bd6bf0edaa0287fd"
     *   },
     *   "edited" : "2017-02-23T09:07:46.536Z",
     *   "name" : "Colors",
     *   "permissions" : {
     *     "create" : true,
     *     "read" : true,
     *     "update" : false,
     *     "delete" : true,
     *     "publish" : false,
     *     "readPublished" : false
     *   }
     * }
     * 
     */
post: (data?: any, query?: any, token?: string):Promise<ProjectTagFamiliesPostResponse> => {
                    return this.post(`/${project}/tagFamilies`, data, query, token); },
    /**
    * Resource /{project}/tagFamilies/{tagFamilyUuid}
    * 
    */ 
    tagFamilyUuid: (tagFamilyUuid: string) => {
        return {
        /**
     * Method get
     * Read the tag family with the given uuid.
     * Example
     * {
     *   "creator" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "163f7d9bc2fd40eebf7d9bc2fd90ee2f"
     *   },
     *   "created" : "2017-02-23T09:07:46.533Z",
     *   "editor" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "ba9fc904aaef47819fc904aaef978171"
     *   },
     *   "edited" : "2017-02-23T09:07:46.533Z",
     *   "name" : "Colors",
     *   "permissions" : {
     *     "create" : true,
     *     "read" : true,
     *     "update" : false,
     *     "delete" : true,
     *     "publish" : false,
     *     "readPublished" : false
     *   }
     * }
     * 
     */
get: (query?: any, token?: string):Promise<ProjectTagFamiliesTagFamilyUuidGetResponse> => {
                    return this.get(`/${project}/tagFamilies/${tagFamilyUuid}`, query, token); },
    /**
     * Method post
     * Update the tag family with the given uuid.
     * Example
     * {
     *   "creator" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "19135a37912a4ae7935a37912a3ae7af"
     *   },
     *   "created" : "2017-02-23T09:07:46.536Z",
     *   "editor" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "d9e4a4f9d8bf4946a4a4f9d8bf094653"
     *   },
     *   "edited" : "2017-02-23T09:07:46.536Z",
     *   "name" : "Nicer colors",
     *   "permissions" : {
     *     "create" : true,
     *     "read" : true,
     *     "update" : false,
     *     "delete" : true,
     *     "publish" : false,
     *     "readPublished" : false
     *   }
     * }
     * 
     */
post: (data?: any, query?: any, token?: string):Promise<ProjectTagFamiliesTagFamilyUuidPostResponse> => {
                    return this.post(`/${project}/tagFamilies/${tagFamilyUuid}`, data, query, token); },
    /**
     * Method delete
     * Delete the tag family.
     * Example
     * 
     */
delete: (token?: string):Promise<ProjectTagFamiliesTagFamilyUuidDeleteResponse> => {
                    return this.delete(`/${project}/tagFamilies/${tagFamilyUuid}`, token); },
    /**
    * Resource /{project}/tagFamilies/{tagFamilyUuid}/tags
    * 
    */ 
    tags: {
        /**
     * Method get
     * Load tags which were assigned to this tag family and return a paged list response.
     * Example
     * {
     *   "data" : [ {
     *     "uuid" : "e2f4b9223fed4100b4b9223fedd10026",
     *     "creator" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "a103fd7202724b6083fd7202721b6009"
     *     },
     *     "created" : "2017-02-23T09:07:46.538Z",
     *     "editor" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "4a00dc6f72fc412680dc6f72fc212669"
     *     },
     *     "edited" : "2017-02-23T09:07:46.538Z",
     *     "tagFamily" : {
     *       "name" : "colors",
     *       "uuid" : "1c9cf730f4c546409cf730f4c526405e"
     *     },
     *     "name" : "green",
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : true,
     *       "delete" : true,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   }, {
     *     "uuid" : "66cbb39f3c304aff8bb39f3c305afff6",
     *     "creator" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "859b38f650d940dc9b38f650d910dc18"
     *     },
     *     "created" : "2017-02-23T09:07:46.538Z",
     *     "editor" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "83a9a2153dd34b48a9a2153dd38b48e6"
     *     },
     *     "edited" : "2017-02-23T09:07:46.538Z",
     *     "tagFamily" : {
     *       "name" : "colors",
     *       "uuid" : "763cc3e86ac44bedbcc3e86ac4abed80"
     *     },
     *     "name" : "Name for language tag en",
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : false,
     *       "delete" : false,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   } ],
     *   "_metainfo" : {
     *     "currentPage" : 1,
     *     "perPage" : 2,
     *     "pageCount" : 10,
     *     "totalCount" : 20
     *   }
     * }
     * 
     */
get: (query?: any, token?: string):Promise<ProjectTagFamiliesTagFamilyUuidTagsGetResponse> => {
                    return this.get(`/${project}/tagFamilies/${tagFamilyUuid}/tags`, query, token); },
    /**
    * Resource /{project}/tagFamilies/{tagFamilyUuid}/tags/{tagUuid}
    * 
    */ 
    tagUuid: (tagUuid: string) => {
        return {
        /**
     * Method get
     * Read the specified tag from the tag family.
     * Example
     * {
     *   "uuid" : "b0e125aea5db4144a125aea5dba14477",
     *   "creator" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "fc1663fb464f4ad79663fb464f9ad74c"
     *   },
     *   "created" : "2017-02-23T09:07:46.537Z",
     *   "editor" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "8dbebd59e8fd4b3ebebd59e8fd7b3e2a"
     *   },
     *   "edited" : "2017-02-23T09:07:46.537Z",
     *   "tagFamily" : {
     *     "name" : "colors",
     *     "uuid" : "1f1c928d125540f19c928d1255c0f1e9"
     *   },
     *   "name" : "red",
     *   "permissions" : {
     *     "create" : true,
     *     "read" : true,
     *     "update" : true,
     *     "delete" : true,
     *     "publish" : false,
     *     "readPublished" : false
     *   }
     * }
     * 
     */
get: (query?: any, token?: string):Promise<ProjectTagFamiliesTagFamilyUuidTagsTagUuidGetResponse> => {
                    return this.get(`/${project}/tagFamilies/${tagFamilyUuid}/tags/${tagUuid}`, query, token); },
    /**
     * Method post
     * Update the specified tag
     * Example
     * {
     *   "uuid" : "b2eea7d68e354ff9aea7d68e35dff9de",
     *   "creator" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "e0dffc072fb945a89ffc072fb9a5a858"
     *   },
     *   "created" : "2017-02-23T09:07:46.539Z",
     *   "editor" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "028f95a0af1a47b58f95a0af1a17b593"
     *   },
     *   "edited" : "2017-02-23T09:07:46.539Z",
     *   "tagFamily" : {
     *     "name" : "colors",
     *     "uuid" : "19c6a7718ef7403786a7718ef75037cd"
     *   },
     *   "name" : "Red",
     *   "permissions" : {
     *     "create" : true,
     *     "read" : true,
     *     "update" : true,
     *     "delete" : true,
     *     "publish" : false,
     *     "readPublished" : false
     *   }
     * }
     * 
     */
post: (data?: any, query?: any, token?: string):Promise<ProjectTagFamiliesTagFamilyUuidTagsTagUuidPostResponse> => {
                    return this.post(`/${project}/tagFamilies/${tagFamilyUuid}/tags/${tagUuid}`, data, query, token); },
    /**
     * Method delete
     * Remove the tag from the tag family.
     * Example
     * 
     */
delete: (token?: string):Promise<ProjectTagFamiliesTagFamilyUuidTagsTagUuidDeleteResponse> => {
                    return this.delete(`/${project}/tagFamilies/${tagFamilyUuid}/tags/${tagUuid}`, token); },
    /**
    * Resource /{project}/tagFamilies/{tagFamilyUuid}/tags/{tagUuid}/nodes
    * 
    */ 
    nodes: {
        /**
     * Method get
     * Load all nodes that have been tagged with the tag and return a paged list response.
     * Example
     * {
     *   "data" : [ {
     *     "uuid" : "ee97bb32869c488397bb32869ca88371",
     *     "creator" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "39d3dcf924cf4ea893dcf924cfbea85a"
     *     },
     *     "created" : "2017-02-23T09:07:46.540Z",
     *     "edited" : "2017-02-23T09:07:46.540Z",
     *     "availableLanguages" : [ "en", "de" ],
     *     "languagePaths" : {
     *       "de" : "/api/v1/yourProject/webroot/Bilder",
     *       "en" : "/api/v1/yourProject/webroot/Images"
     *     },
     *     "parentNode" : {
     *       "uuid" : "448d6df0f4c94bac8d6df0f4c90bac00",
     *       "displayName" : "parentNodeDisplayName"
     *     },
     *     "tags" : {
     *       "types" : {
     *         "items" : [ {
     *           "name" : "car",
     *           "uuid" : "44e78a8f4d374693a78a8f4d3776932e"
     *         }, {
     *           "name" : "ship",
     *           "uuid" : "f4e41764c0614966a41764c061a966ed"
     *         } ]
     *       },
     *       "colors" : {
     *         "items" : [ {
     *           "name" : "red",
     *           "uuid" : "e068e7d0b7ac4113a8e7d0b7acf113e3"
     *         }, {
     *           "name" : "green",
     *           "uuid" : "dbb157926c294b0db157926c29fb0dd1"
     *         } ]
     *       }
     *     },
     *     "childrenInfo" : {
     *       "folder" : {
     *         "schemaUuid" : "95bd32e25c584769bd32e25c5867699d",
     *         "count" : 5
     *       },
     *       "blogpost" : {
     *         "schemaUuid" : "a270bbc2b38246feb0bbc2b382b6fe78",
     *         "count" : 1
     *       }
     *     },
     *     "schema" : {
     *       "name" : "content",
     *       "uuid" : "bc2987a7e7464189a987a7e746a18948",
     *       "version" : 1
     *     },
     *     "fields" : {
     *       "name" : "Name for language tag de-DE",
     *       "filename" : "dummy-content.de.html",
     *       "teaser" : "Dummy teaser for de-DE",
     *       "content" : "Content for language tag de-DE",
     *       "relatedProduct" : {
     *         "uuid" : "d4317e144bb14522b17e144bb1352242"
     *       },
     *       "price" : 100.1,
     *       "enabled" : true,
     *       "release" : "2017-02-23T09:07:46.540Z",
     *       "categories" : [ {
     *         "uuid" : "76feb949fc704559beb949fc70f559b0"
     *       }, {
     *         "uuid" : "55a7a2b9503c4e03a7a2b9503c8e0385"
     *       }, {
     *         "uuid" : "81f1e66c66544782b1e66c6654478202"
     *       } ],
     *       "names" : [ "Jack", "Joe", "Mary", "Tom" ],
     *       "categoryIds" : [ 1, 42, 133, 7 ],
     *       "binary" : {
     *         "fileName" : "flower.jpg",
     *         "width" : 800,
     *         "height" : 600,
     *         "sha512sum" : "ec582eb760034dd91d5fd33656c0b56f082b7365d32e2a139dd9c87ebc192bff3525f32ff4c4137463a31cad020ac19e6e356508db2b90e32d737b6d725e14c1",
     *         "fileSize" : 95365,
     *         "mimeType" : "image/jpeg",
     *         "dominantColor" : "#22a7f0"
     *       },
     *       "location" : {
     *         "uuid" : "09e04f5bae9f428ba04f5bae9f828beb",
     *         "microschema" : {
     *           "name" : "geolocation",
     *           "uuid" : "c7e6550b71b04d30a6550b71b03d3074"
     *         },
     *         "fields" : {
     *           "latitude" : 48.208330230278,
     *           "longitude" : 16.373063840833
     *         }
     *       },
     *       "locations" : [ {
     *         "uuid" : "4768f1b2a7724f75a8f1b2a772af75fc",
     *         "microschema" : {
     *           "name" : "geolocation",
     *           "uuid" : "12f3d494adea47ffb3d494adea37ff0d"
     *         },
     *         "fields" : {
     *           "latitude" : 48.208330230278,
     *           "longitude" : 16.373063840833
     *         }
     *       }, {
     *         "uuid" : "b6d547f7afd34a329547f7afd30a3210",
     *         "microschema" : {
     *           "name" : "geolocation",
     *           "uuid" : "da2753bbe26743dfa753bbe267f3df19"
     *         },
     *         "fields" : {
     *           "latitude" : 48.137222,
     *           "longitude" : 11.575556
     *         }
     *       } ]
     *     },
     *     "path" : "/api/v1/yourProject/webroot/Images",
     *     "breadcrumb" : [ {
     *       "uuid" : "5e88be567be043bb88be567be0d3bb07",
     *       "displayName" : "news",
     *       "path" : "/news"
     *     }, {
     *       "uuid" : "2e6b48b0b35144a1ab48b0b35114a1da",
     *       "displayName" : "2015",
     *       "path" : "/news/2015"
     *     } ],
     *     "container" : false,
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : true,
     *       "delete" : true,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   }, {
     *     "uuid" : "5e1e824fb6d945fc9e824fb6d975fc8f",
     *     "creator" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "2a365b3d72cd4ad9b65b3d72cddad92a"
     *     },
     *     "created" : "2017-02-23T09:07:46.541Z",
     *     "editor" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "966638a5e84841c2a638a5e848a1c21e"
     *     },
     *     "edited" : "2017-02-23T09:07:46.541Z",
     *     "parentNode" : {
     *       "uuid" : "4d1fe6f1907a4c249fe6f1907a8c2482",
     *       "displayName" : "parentNodeDisplayName"
     *     },
     *     "tags" : {
     *       "types" : {
     *         "items" : [ {
     *           "name" : "car",
     *           "uuid" : "597c685030784d38bc685030782d387e"
     *         }, {
     *           "name" : "ship",
     *           "uuid" : "cb96cda7066c451e96cda7066c551eed"
     *         } ]
     *       },
     *       "colors" : {
     *         "items" : [ {
     *           "name" : "red",
     *           "uuid" : "225775c104e7497b9775c104e7b97b6e"
     *         }, {
     *           "name" : "green",
     *           "uuid" : "bd2141d898f248a0a141d898f2a8a0a7"
     *         } ]
     *       }
     *     },
     *     "childrenInfo" : { },
     *     "schema" : {
     *       "name" : "content",
     *       "uuid" : "c08f800461c54fbc8f800461c5ffbcb4",
     *       "version" : 1
     *     },
     *     "fields" : {
     *       "name" : "Name for language tag en",
     *       "filename" : "dummy-content.en.html",
     *       "teaser" : "Dummy teaser for en",
     *       "content" : "Content for language tag en"
     *     },
     *     "breadcrumb" : [ {
     *       "uuid" : "2af983c0640d43a3b983c0640d83a3d5",
     *       "displayName" : "news",
     *       "path" : "/news"
     *     }, {
     *       "uuid" : "7d6c436246d24c8bac436246d2cc8b73",
     *       "displayName" : "2015",
     *       "path" : "/news/2015"
     *     } ],
     *     "container" : false,
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : false,
     *       "delete" : false,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   } ],
     *   "_metainfo" : {
     *     "currentPage" : 1,
     *     "perPage" : 2,
     *     "pageCount" : 10,
     *     "totalCount" : 20
     *   }
     * }
     * 
     */
get: (query?: any, token?: string):Promise<ProjectTagFamiliesTagFamilyUuidTagsTagUuidNodesGetResponse> => {
                    return this.get(`/${project}/tagFamilies/${tagFamilyUuid}/tags/${tagUuid}/nodes`, query, token); },
    
    }
    // -- end resource nodes -- 
    
        };
    }
    // -- end resource {tagUuid} -- 
    
    }
    // -- end resource tags -- 
    
        };
    }
    // -- end resource {tagFamilyUuid} -- 
    
    }
    // -- end resource tagFamilies -- 
    ,
/**
    * Resource /{project}/navroot
    * Provides an endpoint which can be used to retrieve a navigation response
    */ 
    navroot: {
    
    /**
    * Resource /{project}/navroot/{path}
    * 
    */ 
    path: (path: string) => {
        return {
        /**
     * Method get
     * Return a navigation for the node which is located using the given path.
     * Example
     * {
     *   "uuid" : "7dced297a20943008ed297a2096300d2",
     *   "node" : {
     *     "uuid" : "7dced297a20943008ed297a2096300d2",
     *     "creator" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "7dbc9e916971489dbc9e916971989d58"
     *     },
     *     "created" : "2017-02-23T09:07:46.553Z",
     *     "edited" : "2017-02-23T09:07:46.553Z",
     *     "availableLanguages" : [ "en", "de" ],
     *     "languagePaths" : {
     *       "de" : "/api/v1/yourProject/webroot/Bilder",
     *       "en" : "/api/v1/yourProject/webroot/Images"
     *     },
     *     "parentNode" : {
     *       "uuid" : "b4b1eb694ccb4819b1eb694ccba81924",
     *       "displayName" : "parentNodeDisplayName"
     *     },
     *     "tags" : {
     *       "types" : {
     *         "items" : [ {
     *           "name" : "car",
     *           "uuid" : "d32ecc8637394501aecc863739850170"
     *         }, {
     *           "name" : "ship",
     *           "uuid" : "2c6cff2be1aa45f2acff2be1aa25f2ae"
     *         } ]
     *       },
     *       "colors" : {
     *         "items" : [ {
     *           "name" : "red",
     *           "uuid" : "7e88a5cd3b08483b88a5cd3b08383b3c"
     *         }, {
     *           "name" : "green",
     *           "uuid" : "99ea5abe63c44232aa5abe63c4023204"
     *         } ]
     *       }
     *     },
     *     "childrenInfo" : {
     *       "folder" : {
     *         "schemaUuid" : "1c77956086434971b7956086436971b3",
     *         "count" : 5
     *       },
     *       "blogpost" : {
     *         "schemaUuid" : "128b81261d0242088b81261d02420863",
     *         "count" : 1
     *       }
     *     },
     *     "schema" : {
     *       "name" : "content",
     *       "uuid" : "3b932d55cd7c4121932d55cd7c112125",
     *       "version" : 1
     *     },
     *     "fields" : {
     *       "name" : "Name for language tag de-DE",
     *       "filename" : "dummy-content.de.html",
     *       "teaser" : "Dummy teaser for de-DE",
     *       "content" : "Content for language tag de-DE",
     *       "relatedProduct" : {
     *         "uuid" : "6782bdb1aa0647a982bdb1aa0627a92d"
     *       },
     *       "price" : 100.1,
     *       "enabled" : true,
     *       "release" : "2017-02-23T09:07:46.553Z",
     *       "categories" : [ {
     *         "uuid" : "39ded47a7d9848c49ed47a7d98f8c480"
     *       }, {
     *         "uuid" : "5174bf4a7e62442bb4bf4a7e62442b7d"
     *       }, {
     *         "uuid" : "aeee1923467f4e8dae1923467fde8d74"
     *       } ],
     *       "names" : [ "Jack", "Joe", "Mary", "Tom" ],
     *       "categoryIds" : [ 1, 42, 133, 7 ],
     *       "binary" : {
     *         "fileName" : "flower.jpg",
     *         "width" : 800,
     *         "height" : 600,
     *         "sha512sum" : "ec582eb760034dd91d5fd33656c0b56f082b7365d32e2a139dd9c87ebc192bff3525f32ff4c4137463a31cad020ac19e6e356508db2b90e32d737b6d725e14c1",
     *         "fileSize" : 95365,
     *         "mimeType" : "image/jpeg",
     *         "dominantColor" : "#22a7f0"
     *       },
     *       "location" : {
     *         "uuid" : "b4e6406b3fb6432ea6406b3fb6532e19",
     *         "microschema" : {
     *           "name" : "geolocation",
     *           "uuid" : "31c5978d2e9943aa85978d2e9913aa1b"
     *         },
     *         "fields" : {
     *           "latitude" : 48.208330230278,
     *           "longitude" : 16.373063840833
     *         }
     *       },
     *       "locations" : [ {
     *         "uuid" : "e9355fd26d51406cb55fd26d51f06cd6",
     *         "microschema" : {
     *           "name" : "geolocation",
     *           "uuid" : "557369835e274a7eb369835e279a7ecf"
     *         },
     *         "fields" : {
     *           "latitude" : 48.208330230278,
     *           "longitude" : 16.373063840833
     *         }
     *       }, {
     *         "uuid" : "e14fb2b3d44048c48fb2b3d440c8c4e9",
     *         "microschema" : {
     *           "name" : "geolocation",
     *           "uuid" : "d2a275ca82b64e40a275ca82b67e40e0"
     *         },
     *         "fields" : {
     *           "latitude" : 48.137222,
     *           "longitude" : 11.575556
     *         }
     *       } ]
     *     },
     *     "path" : "/api/v1/yourProject/webroot/Images",
     *     "breadcrumb" : [ {
     *       "uuid" : "61919fd60ca34c92919fd60ca31c92dc",
     *       "displayName" : "news",
     *       "path" : "/news"
     *     }, {
     *       "uuid" : "f6d8c5fcb01e486998c5fcb01ec86982",
     *       "displayName" : "2015",
     *       "path" : "/news/2015"
     *     } ],
     *     "container" : false,
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : true,
     *       "delete" : true,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   },
     *   "children" : [ {
     *     "uuid" : "ab21769a87c24ff5a1769a87c2bff5db",
     *     "node" : {
     *       "uuid" : "ab21769a87c24ff5a1769a87c2bff5db",
     *       "creator" : {
     *         "firstName" : "Joe",
     *         "lastName" : "Doe",
     *         "uuid" : "6387c0681e734cff87c0681e735cffc9"
     *       },
     *       "created" : "2017-02-23T09:07:46.553Z",
     *       "edited" : "2017-02-23T09:07:46.553Z",
     *       "availableLanguages" : [ "en", "de" ],
     *       "languagePaths" : {
     *         "de" : "/api/v1/yourProject/webroot/Bilder",
     *         "en" : "/api/v1/yourProject/webroot/Images"
     *       },
     *       "parentNode" : {
     *         "uuid" : "6cab0466732e44c1ab0466732ec4c139",
     *         "displayName" : "parentNodeDisplayName"
     *       },
     *       "tags" : {
     *         "types" : {
     *           "items" : [ {
     *             "name" : "car",
     *             "uuid" : "235573d37c2e45629573d37c2e756210"
     *           }, {
     *             "name" : "ship",
     *             "uuid" : "b8fbfc9389ff431cbbfc9389ff231c7d"
     *           } ]
     *         },
     *         "colors" : {
     *           "items" : [ {
     *             "name" : "red",
     *             "uuid" : "2ddeecdbac0d45749eecdbac0de5744c"
     *           }, {
     *             "name" : "green",
     *             "uuid" : "8c7ad6ffc9444c8fbad6ffc9442c8f3b"
     *           } ]
     *         }
     *       },
     *       "childrenInfo" : {
     *         "folder" : {
     *           "schemaUuid" : "b6cf1f78cf4741038f1f78cf478103d5",
     *           "count" : 5
     *         },
     *         "blogpost" : {
     *           "schemaUuid" : "0db84a58f9fb47e3b84a58f9fb77e3fb",
     *           "count" : 1
     *         }
     *       },
     *       "schema" : {
     *         "name" : "content",
     *         "uuid" : "99691bc09ae54fbaa91bc09ae59fbaf0",
     *         "version" : 1
     *       },
     *       "fields" : {
     *         "name" : "Name for language tag de-DE",
     *         "filename" : "dummy-content.de.html",
     *         "teaser" : "Dummy teaser for de-DE",
     *         "content" : "Content for language tag de-DE",
     *         "relatedProduct" : {
     *           "uuid" : "52bcfc89dddb462fbcfc89dddbb62f61"
     *         },
     *         "price" : 100.1,
     *         "enabled" : true,
     *         "release" : "2017-02-23T09:07:46.553Z",
     *         "categories" : [ {
     *           "uuid" : "ff0bfa5eee674e1e8bfa5eee670e1e9b"
     *         }, {
     *           "uuid" : "778353b039284bd88353b03928abd80f"
     *         }, {
     *           "uuid" : "c24697a9295d49188697a9295d691862"
     *         } ],
     *         "names" : [ "Jack", "Joe", "Mary", "Tom" ],
     *         "categoryIds" : [ 1, 42, 133, 7 ],
     *         "binary" : {
     *           "fileName" : "flower.jpg",
     *           "width" : 800,
     *           "height" : 600,
     *           "sha512sum" : "ec582eb760034dd91d5fd33656c0b56f082b7365d32e2a139dd9c87ebc192bff3525f32ff4c4137463a31cad020ac19e6e356508db2b90e32d737b6d725e14c1",
     *           "fileSize" : 95365,
     *           "mimeType" : "image/jpeg",
     *           "dominantColor" : "#22a7f0"
     *         },
     *         "location" : {
     *           "uuid" : "fa0f9f9a50d949c38f9f9a50d9e9c330",
     *           "microschema" : {
     *             "name" : "geolocation",
     *             "uuid" : "301151edcba74e069151edcba76e061f"
     *           },
     *           "fields" : {
     *             "latitude" : 48.208330230278,
     *             "longitude" : 16.373063840833
     *           }
     *         },
     *         "locations" : [ {
     *           "uuid" : "806eeef766834aedaeeef766833aed1b",
     *           "microschema" : {
     *             "name" : "geolocation",
     *             "uuid" : "ac9937b3a54542279937b3a545022794"
     *           },
     *           "fields" : {
     *             "latitude" : 48.208330230278,
     *             "longitude" : 16.373063840833
     *           }
     *         }, {
     *           "uuid" : "3abf5a10ab4a4eb8bf5a10ab4a0eb83b",
     *           "microschema" : {
     *             "name" : "geolocation",
     *             "uuid" : "675e251d8e6a4cc59e251d8e6abcc567"
     *           },
     *           "fields" : {
     *             "latitude" : 48.137222,
     *             "longitude" : 11.575556
     *           }
     *         } ]
     *       },
     *       "path" : "/api/v1/yourProject/webroot/Images",
     *       "breadcrumb" : [ {
     *         "uuid" : "bd7f08251aa04b6bbf08251aa00b6b7c",
     *         "displayName" : "news",
     *         "path" : "/news"
     *       }, {
     *         "uuid" : "6569d42057574c09a9d42057576c0942",
     *         "displayName" : "2015",
     *         "path" : "/news/2015"
     *       } ],
     *       "container" : false,
     *       "permissions" : {
     *         "create" : true,
     *         "read" : true,
     *         "update" : true,
     *         "delete" : true,
     *         "publish" : false,
     *         "readPublished" : false
     *       }
     *     }
     *   } ]
     * }
     * 
     */
get: (query?: any, token?: string):Promise<ProjectNavrootPathGetResponse> => {
                    return this.get(`/${project}/navroot/${path}`, query, token); },
    
        };
    }
    // -- end resource {path} -- 
    
    }
    // -- end resource navroot -- 
    ,
/**
    * Resource /{project}/webroot
    * Provides endpoints which allow loading nodes via a webroot path.
    */ 
    webroot: {
    
    /**
    * Resource /{project}/webroot/{path}
    * 
    */ 
    path: (path: string) => {
        return {
        /**
     * Method get
     * Load the node or the node's binary data which is located using the provided path.
     * Example
     * 
     */
get: (query?: any, token?: string):Promise<ProjectWebrootPathGetResponse> => {
                    return this.get(`/${project}/webroot/${path}`, query, token); },
    
        };
    }
    // -- end resource {path} -- 
    
    }
    // -- end resource webroot -- 
    ,
/**
    * Resource /{project}/releases
    * Provides endpoints which allow the manipulation of releases.
    */ 
    releases: {
        /**
     * Method post
     * Create a new release and automatically invoke a node migration.
     * Example
     * {
     *   "uuid" : "aa7ed15672bd4c4abed15672bd3c4ae4",
     *   "creator" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "d8162f5ad7894dd0962f5ad7891dd030"
     *   },
     *   "created" : "2017-02-23T09:07:46.574Z",
     *   "editor" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "6533d2fca6d448e0b3d2fca6d478e07e"
     *   },
     *   "edited" : "2017-02-23T09:07:46.574Z",
     *   "name" : "Winter 2016",
     *   "migrated" : true,
     *   "permissions" : {
     *     "create" : true,
     *     "read" : true,
     *     "update" : true,
     *     "delete" : true,
     *     "publish" : false,
     *     "readPublished" : false
     *   },
     *   "rolePerms" : {
     *     "create" : true,
     *     "read" : true,
     *     "update" : true,
     *     "delete" : true,
     *     "publish" : false,
     *     "readPublished" : false
     *   }
     * }
     * 
     */
post: (data?: any, query?: any, token?: string):Promise<ProjectReleasesPostResponse> => {
                    return this.post(`/${project}/releases`, data, query, token); },
    /**
     * Method get
     * Load multiple releases and return a paged list response.
     * Example
     * {
     *   "data" : [ {
     *     "uuid" : "72d9a4ad610d431f99a4ad610df31fa0",
     *     "creator" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "b1d72091c0364f39972091c036df3984"
     *     },
     *     "created" : "2017-02-23T09:07:46.576Z",
     *     "editor" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "3373a29fcbcd4127b3a29fcbcd1127df"
     *     },
     *     "edited" : "2017-02-23T09:07:46.576Z",
     *     "name" : "summer2016",
     *     "migrated" : true,
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : true,
     *       "delete" : true,
     *       "publish" : false,
     *       "readPublished" : false
     *     },
     *     "rolePerms" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : true,
     *       "delete" : true,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   }, {
     *     "uuid" : "fe51d1f138c947af91d1f138c927af67",
     *     "creator" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "1cb291c5584149e7b291c55841f9e707"
     *     },
     *     "created" : "2017-02-23T09:07:46.576Z",
     *     "editor" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "4816760f56714aee96760f5671caeecd"
     *     },
     *     "edited" : "2017-02-23T09:07:46.576Z",
     *     "name" : "autumn2016",
     *     "migrated" : true,
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : true,
     *       "delete" : true,
     *       "publish" : false,
     *       "readPublished" : false
     *     },
     *     "rolePerms" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : true,
     *       "delete" : true,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   } ],
     *   "_metainfo" : {
     *     "currentPage" : 1,
     *     "perPage" : 2,
     *     "pageCount" : 10,
     *     "totalCount" : 20
     *   }
     * }
     * 
     */
get: (query?: any, token?: string):Promise<ProjectReleasesGetResponse> => {
                    return this.get(`/${project}/releases`, query, token); },
    /**
    * Resource /{project}/releases/{releaseUuid}
    * 
    */ 
    releaseUuid: (releaseUuid: string) => {
        return {
        /**
     * Method get
     * Load the release with the given uuid.
     * Example
     * {
     *   "uuid" : "dad0039f5905461990039f5905a61995",
     *   "creator" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "c023d0a55df2483aa3d0a55df2d83a52"
     *   },
     *   "created" : "2017-02-23T09:07:46.575Z",
     *   "editor" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "814eff8be1fc4ba98eff8be1fc2ba9f8"
     *   },
     *   "edited" : "2017-02-23T09:07:46.575Z",
     *   "name" : "Summer Collection Release",
     *   "migrated" : true,
     *   "permissions" : {
     *     "create" : true,
     *     "read" : true,
     *     "update" : true,
     *     "delete" : true,
     *     "publish" : false,
     *     "readPublished" : false
     *   },
     *   "rolePerms" : {
     *     "create" : true,
     *     "read" : true,
     *     "update" : true,
     *     "delete" : true,
     *     "publish" : false,
     *     "readPublished" : false
     *   }
     * }
     * 
     */
get: (query?: any, token?: string):Promise<ProjectReleasesReleaseUuidGetResponse> => {
                    return this.get(`/${project}/releases/${releaseUuid}`, query, token); },
    /**
     * Method post
     * Update the release with the given uuid.
     * Example
     * {
     *   "uuid" : "95719af019f346dcb19af019f3c6dcca",
     *   "creator" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "47517d4b6a724791917d4b6a72e7915f"
     *   },
     *   "created" : "2017-02-23T09:07:46.578Z",
     *   "editor" : {
     *     "firstName" : "Joe",
     *     "lastName" : "Doe",
     *     "uuid" : "47c5d4d8d05d4d6f85d4d8d05d3d6f40"
     *   },
     *   "edited" : "2017-02-23T09:07:46.578Z",
     *   "name" : "Winter Collection Release",
     *   "migrated" : true,
     *   "permissions" : {
     *     "create" : true,
     *     "read" : true,
     *     "update" : true,
     *     "delete" : true,
     *     "publish" : false,
     *     "readPublished" : false
     *   },
     *   "rolePerms" : {
     *     "create" : true,
     *     "read" : true,
     *     "update" : true,
     *     "delete" : true,
     *     "publish" : false,
     *     "readPublished" : false
     *   }
     * }
     * 
     */
post: (data?: any, query?: any, token?: string):Promise<ProjectReleasesReleaseUuidPostResponse> => {
                    return this.post(`/${project}/releases/${releaseUuid}`, data, query, token); },
    /**
    * Resource /{project}/releases/{releaseUuid}/microschemas
    * 
    */ 
    microschemas: {
        /**
     * Method get
     * Load microschemas that are assigned to the release and return a paged list response.
     * Example
     * [ {
     *   "name" : "vcard",
     *   "uuid" : "bbcae027e2cf4bbf8ae027e2cffbbf31",
     *   "version" : 2
     * }, {
     *   "name" : "geolocation",
     *   "uuid" : "dd57d48a0ad347d797d48a0ad357d702",
     *   "version" : 1
     * } ]
     * 
     */
get: (query?: any, token?: string):Promise<ProjectReleasesReleaseUuidMicroschemasGetResponse> => {
                    return this.get(`/${project}/releases/${releaseUuid}/microschemas`, query, token); },
    /**
     * Method post
     * Assign a microschema version to the release.
     * Example
     * [ {
     *   "name" : "vcard",
     *   "uuid" : "fb1e988b37a94ccd9e988b37a96ccde5",
     *   "version" : 2
     * }, {
     *   "name" : "geolocation",
     *   "uuid" : "98b17a58f3c040afb17a58f3c0f0af7f",
     *   "version" : 1
     * } ]
     * 
     */
post: (data?: any, query?: any, token?: string):Promise<ProjectReleasesReleaseUuidMicroschemasPostResponse> => {
                    return this.post(`/${project}/releases/${releaseUuid}/microschemas`, data, query, token); },
    
    }
    // -- end resource microschemas -- 
    ,
/**
    * Resource /{project}/releases/{releaseUuid}/schemas
    * 
    */ 
    schemas: {
        /**
     * Method get
     * Load schemas that are assigned to the release and return a paged list response.
     * Example
     * [ {
     *   "name" : "content",
     *   "uuid" : "1f6838c88f704aaca838c88f707aacc0",
     *   "version" : 1
     * }, {
     *   "name" : "folder",
     *   "uuid" : "c2e4cdaa56474985a4cdaa5647f98553",
     *   "version" : 1
     * }, {
     *   "name" : "binary-data",
     *   "uuid" : "bc51e79bbd3a46a591e79bbd3a56a5ba",
     *   "version" : 1
     * } ]
     * 
     */
get: (query?: any, token?: string):Promise<ProjectReleasesReleaseUuidSchemasGetResponse> => {
                    return this.get(`/${project}/releases/${releaseUuid}/schemas`, query, token); },
    /**
     * Method post
     * Assign a schema version to the release.
     * Example
     * [ {
     *   "name" : "content",
     *   "uuid" : "c8b833bc4fa441d8b833bc4fa4e1d8a1",
     *   "version" : 1
     * }, {
     *   "name" : "folder",
     *   "uuid" : "1d365cced8cb49cdb65cced8cbe9cdf4",
     *   "version" : 1
     * }, {
     *   "name" : "binary-data",
     *   "uuid" : "7189da1b353141c789da1b353141c7b2",
     *   "version" : 1
     * } ]
     * 
     */
post: (data?: any, query?: any, token?: string):Promise<ProjectReleasesReleaseUuidSchemasPostResponse> => {
                    return this.post(`/${project}/releases/${releaseUuid}/schemas`, data, query, token); },
    
    }
    // -- end resource schemas -- 
    
        };
    }
    // -- end resource {releaseUuid} -- 
    
    }
    // -- end resource releases -- 
    ,
/**
    * Resource /{project}/search
    * Provides endpoints which allow project wide search.
    */ 
    search: {
    
    /**
    * Resource /{project}/search/nodes
    * 
    */ 
    nodes: {
        /**
     * Method post
     * Invoke a search query for nodes and return a paged list response.
     * Example
     * {
     *   "data" : [ {
     *     "uuid" : "c2d9f95cbfef40bc99f95cbfefd0bc54",
     *     "creator" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "0f44b277aa1c4deb84b277aa1cedeb03"
     *     },
     *     "created" : "2017-02-23T09:07:46.588Z",
     *     "edited" : "2017-02-23T09:07:46.588Z",
     *     "availableLanguages" : [ "en", "de" ],
     *     "languagePaths" : {
     *       "de" : "/api/v1/yourProject/webroot/Bilder",
     *       "en" : "/api/v1/yourProject/webroot/Images"
     *     },
     *     "parentNode" : {
     *       "uuid" : "bd2c45b721c84e92ac45b721c8de92dc",
     *       "displayName" : "parentNodeDisplayName"
     *     },
     *     "tags" : {
     *       "types" : {
     *         "items" : [ {
     *           "name" : "car",
     *           "uuid" : "d7143cb6889b4de2943cb6889bede297"
     *         }, {
     *           "name" : "ship",
     *           "uuid" : "d59f491273f6452e9f491273f6552e88"
     *         } ]
     *       },
     *       "colors" : {
     *         "items" : [ {
     *           "name" : "red",
     *           "uuid" : "7bae4f3b8d1e48e5ae4f3b8d1e08e5e7"
     *         }, {
     *           "name" : "green",
     *           "uuid" : "2d4d3f7a94204e278d3f7a94209e27ee"
     *         } ]
     *       }
     *     },
     *     "childrenInfo" : {
     *       "folder" : {
     *         "schemaUuid" : "65ef8474a55b4aeeaf8474a55bfaee65",
     *         "count" : 5
     *       },
     *       "blogpost" : {
     *         "schemaUuid" : "6c756f8b76e440efb56f8b76e400efe8",
     *         "count" : 1
     *       }
     *     },
     *     "schema" : {
     *       "name" : "content",
     *       "uuid" : "66ec2da1c69d4f58ac2da1c69dbf583f",
     *       "version" : 1
     *     },
     *     "fields" : {
     *       "name" : "Name for language tag de-DE",
     *       "filename" : "dummy-content.de.html",
     *       "teaser" : "Dummy teaser for de-DE",
     *       "content" : "Content for language tag de-DE",
     *       "relatedProduct" : {
     *         "uuid" : "ad2619f6a67c4f0aa619f6a67c2f0ad8"
     *       },
     *       "price" : 100.1,
     *       "enabled" : true,
     *       "release" : "2017-02-23T09:07:46.588Z",
     *       "categories" : [ {
     *         "uuid" : "cf1b99e5e647410b9b99e5e647410b37"
     *       }, {
     *         "uuid" : "d06fedf341ee4b0dafedf341ee6b0d7d"
     *       }, {
     *         "uuid" : "1117971442f9470f97971442f9770fd5"
     *       } ],
     *       "names" : [ "Jack", "Joe", "Mary", "Tom" ],
     *       "categoryIds" : [ 1, 42, 133, 7 ],
     *       "binary" : {
     *         "fileName" : "flower.jpg",
     *         "width" : 800,
     *         "height" : 600,
     *         "sha512sum" : "ec582eb760034dd91d5fd33656c0b56f082b7365d32e2a139dd9c87ebc192bff3525f32ff4c4137463a31cad020ac19e6e356508db2b90e32d737b6d725e14c1",
     *         "fileSize" : 95365,
     *         "mimeType" : "image/jpeg",
     *         "dominantColor" : "#22a7f0"
     *       },
     *       "location" : {
     *         "uuid" : "b3954309f13f4097954309f13f009741",
     *         "microschema" : {
     *           "name" : "geolocation",
     *           "uuid" : "dbe34c78deb0422ea34c78deb0722e4f"
     *         },
     *         "fields" : {
     *           "latitude" : 48.208330230278,
     *           "longitude" : 16.373063840833
     *         }
     *       },
     *       "locations" : [ {
     *         "uuid" : "f734e49305b84a10b4e49305b80a1077",
     *         "microschema" : {
     *           "name" : "geolocation",
     *           "uuid" : "a1318afd702940d0b18afd7029d0d048"
     *         },
     *         "fields" : {
     *           "latitude" : 48.208330230278,
     *           "longitude" : 16.373063840833
     *         }
     *       }, {
     *         "uuid" : "dbec9d65e62843b9ac9d65e62863b962",
     *         "microschema" : {
     *           "name" : "geolocation",
     *           "uuid" : "ca7388547c734a76b388547c730a7687"
     *         },
     *         "fields" : {
     *           "latitude" : 48.137222,
     *           "longitude" : 11.575556
     *         }
     *       } ]
     *     },
     *     "path" : "/api/v1/yourProject/webroot/Images",
     *     "breadcrumb" : [ {
     *       "uuid" : "7f7f1ab27d4a4a49bf1ab27d4a3a4986",
     *       "displayName" : "news",
     *       "path" : "/news"
     *     }, {
     *       "uuid" : "891e0e7907bd4de49e0e7907bd8de4c6",
     *       "displayName" : "2015",
     *       "path" : "/news/2015"
     *     } ],
     *     "container" : false,
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : true,
     *       "delete" : true,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   }, {
     *     "uuid" : "1d8d9d3bb690443e8d9d3bb690d43ef4",
     *     "creator" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "cfc7b62440e14c0d87b62440e13c0dc9"
     *     },
     *     "created" : "2017-02-23T09:07:46.589Z",
     *     "editor" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "e611b6c6f4594aa891b6c6f4594aa876"
     *     },
     *     "edited" : "2017-02-23T09:07:46.589Z",
     *     "parentNode" : {
     *       "uuid" : "b60177680e214f118177680e213f11c1",
     *       "displayName" : "parentNodeDisplayName"
     *     },
     *     "tags" : {
     *       "types" : {
     *         "items" : [ {
     *           "name" : "car",
     *           "uuid" : "0f63f7047b89462ca3f7047b89762c58"
     *         }, {
     *           "name" : "ship",
     *           "uuid" : "5b5044c7e9b940dd9044c7e9b960dd2a"
     *         } ]
     *       },
     *       "colors" : {
     *         "items" : [ {
     *           "name" : "red",
     *           "uuid" : "8b99fc4a221c423199fc4a221cd231e0"
     *         }, {
     *           "name" : "green",
     *           "uuid" : "d38891e8bf9e440b8891e8bf9e940b8d"
     *         } ]
     *       }
     *     },
     *     "childrenInfo" : { },
     *     "schema" : {
     *       "name" : "content",
     *       "uuid" : "f3af439e3b18427daf439e3b18327da8",
     *       "version" : 1
     *     },
     *     "fields" : {
     *       "name" : "Name for language tag en",
     *       "filename" : "dummy-content.en.html",
     *       "teaser" : "Dummy teaser for en",
     *       "content" : "Content for language tag en"
     *     },
     *     "breadcrumb" : [ {
     *       "uuid" : "a8513ae9cdec403f913ae9cdecd03f8e",
     *       "displayName" : "news",
     *       "path" : "/news"
     *     }, {
     *       "uuid" : "604fdeb2e63a46c38fdeb2e63ab6c374",
     *       "displayName" : "2015",
     *       "path" : "/news/2015"
     *     } ],
     *     "container" : false,
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : false,
     *       "delete" : false,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   } ],
     *   "_metainfo" : {
     *     "currentPage" : 1,
     *     "perPage" : 2,
     *     "pageCount" : 10,
     *     "totalCount" : 20
     *   }
     * }
     * 
     */
post: (data?: any, query?: any, token?: string):Promise<ProjectSearchNodesPostResponse> => {
                    return this.post(`/${project}/search/nodes`, data, query, token); },
    
    }
    // -- end resource nodes -- 
    ,
/**
    * Resource /{project}/search/tagFamilies
    * 
    */ 
    tagFamilies: {
        /**
     * Method post
     * Invoke a search query for tagFamilies and return a paged list response.
     * Example
     * {
     *   "data" : [ {
     *     "creator" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "1308438990cc4c2e88438990ccfc2e52"
     *     },
     *     "created" : "2017-02-23T09:07:46.593Z",
     *     "editor" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "2c575d5c6dae44c2975d5c6daec4c25e"
     *     },
     *     "edited" : "2017-02-23T09:07:46.593Z",
     *     "name" : "Colors",
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : false,
     *       "delete" : true,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   } ],
     *   "_metainfo" : {
     *     "currentPage" : 1,
     *     "perPage" : 2,
     *     "pageCount" : 10,
     *     "totalCount" : 20
     *   }
     * }
     * 
     */
post: (data?: any, query?: any, token?: string):Promise<ProjectSearchTagFamiliesPostResponse> => {
                    return this.post(`/${project}/search/tagFamilies`, data, query, token); },
    
    }
    // -- end resource tagFamilies -- 
    ,
/**
    * Resource /{project}/search/tags
    * 
    */ 
    tags: {
        /**
     * Method post
     * Invoke a search query for tags and return a paged list response.
     * Example
     * {
     *   "data" : [ {
     *     "uuid" : "97a7f85a84e2425ba7f85a84e2625bd1",
     *     "creator" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "ed0dfb75cf2a403d8dfb75cf2a803d2d"
     *     },
     *     "created" : "2017-02-23T09:07:46.592Z",
     *     "editor" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "6db693c3f59c46e7b693c3f59c06e7a7"
     *     },
     *     "edited" : "2017-02-23T09:07:46.592Z",
     *     "tagFamily" : {
     *       "name" : "colors",
     *       "uuid" : "8a91633fbf18451f91633fbf18451f4c"
     *     },
     *     "name" : "green",
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : true,
     *       "delete" : true,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   }, {
     *     "uuid" : "e89f9edba138430c9f9edba138130cb0",
     *     "creator" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "ef0c200af7b446e58c200af7b4c6e5f3"
     *     },
     *     "created" : "2017-02-23T09:07:46.592Z",
     *     "editor" : {
     *       "firstName" : "Joe",
     *       "lastName" : "Doe",
     *       "uuid" : "92f62a93d5ab4fccb62a93d5abbfccce"
     *     },
     *     "edited" : "2017-02-23T09:07:46.592Z",
     *     "tagFamily" : {
     *       "name" : "colors",
     *       "uuid" : "ac1fbcca204a4dfe9fbcca204addfe7f"
     *     },
     *     "name" : "Name for language tag en",
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : false,
     *       "delete" : false,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   } ],
     *   "_metainfo" : {
     *     "currentPage" : 1,
     *     "perPage" : 2,
     *     "pageCount" : 10,
     *     "totalCount" : 20
     *   }
     * }
     * 
     */
post: (data?: any, query?: any, token?: string):Promise<ProjectSearchTagsPostResponse> => {
                    return this.post(`/${project}/search/tags`, data, query, token); },
    
    }
    // -- end resource tags -- 
    
    }
    // -- end resource search -- 
    ,
/**
    * Resource /{project}/schemas
    * Provides endpoints which can be used to assign schemas to projects.
    */ 
    schemas: {
        /**
     * Method get
     * Read multiple schemas and return a paged list response.
     * Example
     * {
     *   "data" : [ {
     *     "uuid" : "4fc5cfb282274d5785cfb282270d57f7",
     *     "displayField" : "name",
     *     "segmentField" : "name",
     *     "container" : false,
     *     "version" : 0,
     *     "name" : "Example Schema",
     *     "fields" : [ {
     *       "name" : "name",
     *       "label" : "Name",
     *       "required" : false,
     *       "type" : "string"
     *     }, {
     *       "name" : "number",
     *       "label" : "Number",
     *       "required" : false,
     *       "type" : "number"
     *     }, {
     *       "name" : "html",
     *       "label" : "Teaser",
     *       "required" : false,
     *       "type" : "html"
     *     }, {
     *       "name" : "list",
     *       "label" : "List of nodes",
     *       "required" : false,
     *       "listType" : "node",
     *       "type" : "list",
     *       "allow" : [ "content", "video" ]
     *     }, {
     *       "name" : "node",
     *       "required" : false,
     *       "type" : "node",
     *       "allow" : [ "content", "video", "image" ]
     *     }, {
     *       "name" : "location",
     *       "label" : "Location",
     *       "required" : false,
     *       "type" : "micronode",
     *       "allow" : [ "geolocation" ]
     *     }, {
     *       "name" : "locationlist",
     *       "label" : "List of Locations",
     *       "required" : false,
     *       "listType" : "micronode",
     *       "type" : "list",
     *       "allow" : [ "geolocation" ]
     *     } ],
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : true,
     *       "delete" : true,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   }, {
     *     "uuid" : "63924732a19c4ba8924732a19c4ba8b5",
     *     "displayField" : "name",
     *     "segmentField" : "name",
     *     "container" : false,
     *     "version" : 0,
     *     "name" : "Example Schema",
     *     "fields" : [ {
     *       "name" : "name",
     *       "label" : "Name",
     *       "required" : false,
     *       "type" : "string"
     *     }, {
     *       "name" : "number",
     *       "label" : "Number",
     *       "required" : false,
     *       "type" : "number"
     *     }, {
     *       "name" : "html",
     *       "label" : "Teaser",
     *       "required" : false,
     *       "type" : "html"
     *     }, {
     *       "name" : "list",
     *       "label" : "List of nodes",
     *       "required" : false,
     *       "listType" : "node",
     *       "type" : "list",
     *       "allow" : [ "content", "video" ]
     *     }, {
     *       "name" : "node",
     *       "required" : false,
     *       "type" : "node",
     *       "allow" : [ "content", "video", "image" ]
     *     }, {
     *       "name" : "location",
     *       "label" : "Location",
     *       "required" : false,
     *       "type" : "micronode",
     *       "allow" : [ "geolocation" ]
     *     }, {
     *       "name" : "locationlist",
     *       "label" : "List of Locations",
     *       "required" : false,
     *       "listType" : "micronode",
     *       "type" : "list",
     *       "allow" : [ "geolocation" ]
     *     } ],
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : true,
     *       "delete" : true,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   } ],
     *   "_metainfo" : {
     *     "currentPage" : 1,
     *     "perPage" : 2,
     *     "pageCount" : 10,
     *     "totalCount" : 20
     *   }
     * }
     * 
     */
get: (query?: any, token?: string):Promise<ProjectSchemasGetResponse> => {
                    return this.get(`/${project}/schemas`, query, token); },
    /**
    * Resource /{project}/schemas/{schemaUuid}
    * 
    */ 
    schemaUuid: (schemaUuid: string) => {
        return {
        /**
     * Method get
     * Load the schema with the given uuid.
     * Example
     * {
     *   "uuid" : "9831b8c15e4241fab1b8c15e4201fa61",
     *   "displayField" : "name",
     *   "segmentField" : "name",
     *   "container" : false,
     *   "version" : 0,
     *   "name" : "Example Schema",
     *   "fields" : [ {
     *     "name" : "name",
     *     "label" : "Name",
     *     "required" : false,
     *     "type" : "string"
     *   }, {
     *     "name" : "number",
     *     "label" : "Number",
     *     "required" : false,
     *     "type" : "number"
     *   }, {
     *     "name" : "html",
     *     "label" : "Teaser",
     *     "required" : false,
     *     "type" : "html"
     *   }, {
     *     "name" : "list",
     *     "label" : "List of nodes",
     *     "required" : false,
     *     "listType" : "node",
     *     "type" : "list",
     *     "allow" : [ "content", "video" ]
     *   }, {
     *     "name" : "node",
     *     "required" : false,
     *     "type" : "node",
     *     "allow" : [ "content", "video", "image" ]
     *   }, {
     *     "name" : "location",
     *     "label" : "Location",
     *     "required" : false,
     *     "type" : "micronode",
     *     "allow" : [ "geolocation" ]
     *   }, {
     *     "name" : "locationlist",
     *     "label" : "List of Locations",
     *     "required" : false,
     *     "listType" : "micronode",
     *     "type" : "list",
     *     "allow" : [ "geolocation" ]
     *   } ],
     *   "permissions" : {
     *     "create" : true,
     *     "read" : true,
     *     "update" : true,
     *     "delete" : true,
     *     "publish" : false,
     *     "readPublished" : false
     *   }
     * }
     * 
     */
get: (query?: any, token?: string):Promise<ProjectSchemasSchemaUuidGetResponse> => {
                    return this.get(`/${project}/schemas/${schemaUuid}`, query, token); },
    /**
     * Method post
     * Assign the schema to the project. This will automatically assign the latest schema version to all releases of the project.
     * Example
     * {
     *   "uuid" : "22c3a94387c649d783a94387c659d783",
     *   "displayField" : "name",
     *   "segmentField" : "name",
     *   "container" : false,
     *   "version" : 0,
     *   "name" : "Example Schema",
     *   "fields" : [ {
     *     "name" : "name",
     *     "label" : "Name",
     *     "required" : false,
     *     "type" : "string"
     *   }, {
     *     "name" : "number",
     *     "label" : "Number",
     *     "required" : false,
     *     "type" : "number"
     *   }, {
     *     "name" : "html",
     *     "label" : "Teaser",
     *     "required" : false,
     *     "type" : "html"
     *   }, {
     *     "name" : "list",
     *     "label" : "List of nodes",
     *     "required" : false,
     *     "listType" : "node",
     *     "type" : "list",
     *     "allow" : [ "content", "video" ]
     *   }, {
     *     "name" : "node",
     *     "required" : false,
     *     "type" : "node",
     *     "allow" : [ "content", "video", "image" ]
     *   }, {
     *     "name" : "location",
     *     "label" : "Location",
     *     "required" : false,
     *     "type" : "micronode",
     *     "allow" : [ "geolocation" ]
     *   }, {
     *     "name" : "locationlist",
     *     "label" : "List of Locations",
     *     "required" : false,
     *     "listType" : "micronode",
     *     "type" : "list",
     *     "allow" : [ "geolocation" ]
     *   } ],
     *   "permissions" : {
     *     "create" : true,
     *     "read" : true,
     *     "update" : true,
     *     "delete" : true,
     *     "publish" : false,
     *     "readPublished" : false
     *   }
     * }
     * 
     */
post: (data?: any, query?: any, token?: string):Promise<ProjectSchemasSchemaUuidPostResponse> => {
                    return this.post(`/${project}/schemas/${schemaUuid}`, data, query, token); },
    /**
     * Method delete
     * Remove the schema with the given uuid from the project. This will automatically remove all schema versions of the given schema from all releases of the project.
     * Example
     * 
     */
delete: (token?: string):Promise<ProjectSchemasSchemaUuidDeleteResponse> => {
                    return this.delete(`/${project}/schemas/${schemaUuid}`, token); },
    
        };
    }
    // -- end resource {schemaUuid} -- 
    
    }
    // -- end resource schemas -- 
    ,
/**
    * Resource /{project}/microschemas
    * Contains endpoints which allow microschemas to be assigned to projects.
    */ 
    microschemas: {
        /**
     * Method get
     * Read all microschemas which are assigned to the project.
     * Example
     * {
     *   "data" : [ {
     *     "uuid" : "cf0c0a526a184fd28c0a526a18ffd2f4",
     *     "version" : 1,
     *     "description" : "Microschema for Geolocations",
     *     "name" : "geolocation",
     *     "fields" : [ {
     *       "name" : "longitude",
     *       "label" : "Longitude",
     *       "required" : true,
     *       "type" : "number"
     *     }, {
     *       "name" : "latitude",
     *       "label" : "Latitude",
     *       "required" : true,
     *       "type" : "number"
     *     } ],
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : true,
     *       "delete" : true,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   }, {
     *     "uuid" : "c01fcfe06db541c99fcfe06db571c9dd",
     *     "version" : 1,
     *     "description" : "Microschema for Geolocations",
     *     "name" : "geolocation",
     *     "fields" : [ {
     *       "name" : "longitude",
     *       "label" : "Longitude",
     *       "required" : true,
     *       "type" : "number"
     *     }, {
     *       "name" : "latitude",
     *       "label" : "Latitude",
     *       "required" : true,
     *       "type" : "number"
     *     } ],
     *     "permissions" : {
     *       "create" : true,
     *       "read" : true,
     *       "update" : true,
     *       "delete" : true,
     *       "publish" : false,
     *       "readPublished" : false
     *     }
     *   } ],
     *   "_metainfo" : {
     *     "currentPage" : 1,
     *     "perPage" : 2,
     *     "pageCount" : 10,
     *     "totalCount" : 20
     *   }
     * }
     * 
     */
get: (query?: any, token?: string):Promise<ProjectMicroschemasGetResponse> => {
                    return this.get(`/${project}/microschemas`, query, token); },
    /**
    * Resource /{project}/microschemas/{microschemaUuid}
    * 
    */ 
    microschemaUuid: (microschemaUuid: string) => {
        return {
        /**
     * Method post
     * Add the microschema to the project.
     * Example
     * {
     *   "uuid" : "c6e30a15d1264a27a30a15d126fa27fe",
     *   "version" : 1,
     *   "description" : "Microschema for Geolocations",
     *   "name" : "geolocation",
     *   "fields" : [ {
     *     "name" : "longitude",
     *     "label" : "Longitude",
     *     "required" : true,
     *     "type" : "number"
     *   }, {
     *     "name" : "latitude",
     *     "label" : "Latitude",
     *     "required" : true,
     *     "type" : "number"
     *   } ],
     *   "permissions" : {
     *     "create" : true,
     *     "read" : true,
     *     "update" : true,
     *     "delete" : true,
     *     "publish" : false,
     *     "readPublished" : false
     *   }
     * }
     * 
     */
post: (data?: any, query?: any, token?: string):Promise<ProjectMicroschemasMicroschemaUuidPostResponse> => {
                    return this.post(`/${project}/microschemas/${microschemaUuid}`, data, query, token); },
    /**
     * Method delete
     * Remove the microschema from the project.
     * Example
     * 
     */
delete: (token?: string):Promise<ProjectMicroschemasMicroschemaUuidDeleteResponse> => {
                    return this.delete(`/${project}/microschemas/${microschemaUuid}`, token); },
    
        };
    }
    // -- end resource {microschemaUuid} -- 
    
    }
    // -- end resource microschemas -- 
    
        };
    }
    // -- end resource {project} -- 
     }
    }
export interface UsersPostResponse { "uuid": string
"creator": { "firstName": string
"lastName": string
"uuid": string }
"created": string
"editor": { "firstName": string
"lastName": string
"uuid": string }
"edited": string
"lastname": string
"firstname": string
"username": string
"emailAddress": string
"nodeReference": { "projectName": string
"uuid": string }
"enabled": boolean
"groups": { "name": string
"uuid": string }[]
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }
export interface UsersGetResponse { "data": { "uuid": string
"creator": { "firstName": string
"lastName": string
"uuid": string }
"created": string
"editor": { "firstName": string
"lastName": string
"uuid": string }
"edited": string
"lastname": string
"firstname": string
"username": string
"emailAddress": string
"nodeReference": { "projectName": string
"uuid": string }
"enabled": boolean
"groups": { "name": string
"uuid": string }[]
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }[]
"_metainfo": { "currentPage": number
"perPage": number
"pageCount": number
"totalCount": number } }
export interface UsersUserUuidPostResponse { "uuid": string
"creator": { "firstName": string
"lastName": string
"uuid": string }
"created": string
"editor": { "firstName": string
"lastName": string
"uuid": string }
"edited": string
"lastname": string
"firstname": string
"username": string
"emailAddress": string
"nodeReference": { "projectName": string
"uuid": string }
"enabled": boolean
"groups": { "name": string
"uuid": string }[]
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }
export interface UsersUserUuidGetResponse { "uuid": string
"creator": { "firstName": string
"lastName": string
"uuid": string }
"created": string
"editor": { "firstName": string
"lastName": string
"uuid": string }
"edited": string
"lastname": string
"firstname": string
"username": string
"emailAddress": string
"nodeReference": { "projectName": string
"uuid": string }
"enabled": boolean
"groups": { "name": string
"uuid": string }[]
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }
export interface UsersUserUuidDeleteResponse {  }
export interface UsersUserUuidPermissionsPathGetResponse { "create": boolean
"read": boolean
"update": boolean
"delete": boolean }
export interface UsersUserUuidTokenGetResponse { "token": string
"created": string }
export interface RolesPostResponse { "uuid": string
"creator": { "firstName": string
"lastName": string
"uuid": string }
"created": string
"editor": { "firstName": string
"lastName": string
"uuid": string }
"edited": string
"name": string
"groups": {  }
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }
export interface RolesGetResponse { "data": { "uuid": string
"creator": { "firstName": string
"lastName": string
"uuid": string }
"created": string
"editor": { "firstName": string
"lastName": string
"uuid": string }
"edited": string
"name": string
"groups": {  }
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }[]
"_metainfo": { "currentPage": number
"perPage": number
"pageCount": number
"totalCount": number } }
export interface RolesRoleUuidGetResponse { "uuid": string
"creator": { "firstName": string
"lastName": string
"uuid": string }
"created": string
"editor": { "firstName": string
"lastName": string
"uuid": string }
"edited": string
"name": string
"groups": {  }
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }
export interface RolesRoleUuidPostResponse { "uuid": string
"creator": { "firstName": string
"lastName": string
"uuid": string }
"created": string
"editor": { "firstName": string
"lastName": string
"uuid": string }
"edited": string
"name": string
"groups": {  }
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }
export interface RolesRoleUuidDeleteResponse {  }
export interface RolesRoleUuidPermissionsPathToElementPostResponse { "message": string }
export interface RolesRoleUuidPermissionsPathToElementGetResponse { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean }
export interface GroupsPostResponse { "uuid": string
"creator": { "firstName": string
"lastName": string
"uuid": string }
"created": string
"editor": { "firstName": string
"lastName": string
"uuid": string }
"edited": string
"name": string
"roles": { "name": string
"uuid": string }[]
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }
export interface GroupsGetResponse { "data": { "uuid": string
"creator": { "firstName": string
"lastName": string
"uuid": string }
"created": string
"editor": { "firstName": string
"lastName": string
"uuid": string }
"edited": string
"name": string
"roles": { "name": string
"uuid": string }[]
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }[]
"_metainfo": { "currentPage": number
"perPage": number
"pageCount": number
"totalCount": number } }
export interface GroupsGroupUuidGetResponse { "uuid": string
"creator": { "firstName": string
"lastName": string
"uuid": string }
"created": string
"editor": { "firstName": string
"lastName": string
"uuid": string }
"edited": string
"name": string
"roles": { "name": string
"uuid": string }[]
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }
export interface GroupsGroupUuidPostResponse { "uuid": string
"creator": { "firstName": string
"lastName": string
"uuid": string }
"created": string
"editor": { "firstName": string
"lastName": string
"uuid": string }
"edited": string
"name": string
"roles": { "name": string
"uuid": string }[]
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }
export interface GroupsGroupUuidDeleteResponse {  }
export interface GroupsGroupUuidRolesGetResponse { "data": { "uuid": string
"creator": { "firstName": string
"lastName": string
"uuid": string }
"created": string
"editor": { "firstName": string
"lastName": string
"uuid": string }
"edited": string
"name": string
"groups": {  }
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }[]
"_metainfo": { "currentPage": number
"perPage": number
"pageCount": number
"totalCount": number } }
export interface GroupsGroupUuidRolesRoleUuidPostResponse { "uuid": string
"creator": { "firstName": string
"lastName": string
"uuid": string }
"created": string
"editor": { "firstName": string
"lastName": string
"uuid": string }
"edited": string
"name": string
"roles": { "name": string
"uuid": string }[]
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }
export interface GroupsGroupUuidRolesRoleUuidDeleteResponse {  }
export interface GroupsGroupUuidUsersGetResponse { "data": { "uuid": string
"creator": { "firstName": string
"lastName": string
"uuid": string }
"created": string
"editor": { "firstName": string
"lastName": string
"uuid": string }
"edited": string
"lastname": string
"firstname": string
"username": string
"emailAddress": string
"nodeReference": { "projectName": string
"uuid": string }
"enabled": boolean
"groups": { "name": string
"uuid": string }[]
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }[]
"_metainfo": { "currentPage": number
"perPage": number
"pageCount": number
"totalCount": number } }
export interface GroupsGroupUuidUsersUserUuidPostResponse { "uuid": string
"creator": { "firstName": string
"lastName": string
"uuid": string }
"created": string
"editor": { "firstName": string
"lastName": string
"uuid": string }
"edited": string
"name": string
"roles": { "name": string
"uuid": string }[]
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }
export interface ProjectsPostResponse { "uuid": string
"creator": { "firstName": string
"lastName": string
"uuid": string }
"created": string
"editor": { "firstName": string
"lastName": string
"uuid": string }
"edited": string
"name": string
"rootNode": { "uuid": string }
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }
export interface ProjectsGetResponse { "data": { "uuid": string
"creator": { "firstName": string
"lastName": string
"uuid": string }
"created": string
"editor": { "firstName": string
"lastName": string
"uuid": string }
"edited": string
"name": string
"rootNode": { "uuid": string }
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }[]
"_metainfo": { "currentPage": number
"perPage": number
"pageCount": number
"totalCount": number } }
export interface ProjectsProjectUuidGetResponse { "uuid": string
"creator": { "firstName": string
"lastName": string
"uuid": string }
"created": string
"editor": { "firstName": string
"lastName": string
"uuid": string }
"edited": string
"name": string
"rootNode": { "uuid": string }
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }
export interface ProjectsProjectUuidPostResponse { "uuid": string
"creator": { "firstName": string
"lastName": string
"uuid": string }
"created": string
"editor": { "firstName": string
"lastName": string
"uuid": string }
"edited": string
"name": string
"rootNode": { "uuid": string }
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }
export interface ProjectsProjectUuidDeleteResponse {  }
export interface SchemasGetResponse { "data": { "uuid": string
"displayField": string
"segmentField": string
"container": boolean
"version": number
"name": string
"fields": any
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }[]
"_metainfo": { "currentPage": number
"perPage": number
"pageCount": number
"totalCount": number } }
export interface SchemasPostResponse { "uuid": string
"displayField": string
"segmentField": string
"container": boolean
"version": number
"name": string
"fields": any
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }
export interface SchemasSchemaUuidGetResponse { "uuid": string
"displayField": string
"segmentField": string
"container": boolean
"version": number
"name": string
"fields": any
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }
export interface SchemasSchemaUuidPostResponse { "uuid": string
"displayField": string
"segmentField": string
"container": boolean
"version": number
"name": string
"fields": any
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }
export interface SchemasSchemaUuidDeleteResponse {  }
export interface SchemasSchemaUuidChangesPostResponse { "message": string }
export interface SchemasSchemaUuidDiffPostResponse { "changes": { "operation": string
"properties": { "field": string
"label": string
"type": string
"listType": string } }[] }
export interface MicroschemasPostResponse { "uuid": string
"version": number
"description": string
"name": string
"fields": any
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }
export interface MicroschemasGetResponse { "data": { "uuid": string
"version": number
"description": string
"name": string
"fields": any
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }[]
"_metainfo": { "currentPage": number
"perPage": number
"pageCount": number
"totalCount": number } }
export interface MicroschemasMicroschemaUuidGetResponse { "uuid": string
"version": number
"description": string
"name": string
"fields": any
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }
export interface MicroschemasMicroschemaUuidPostResponse { "uuid": string
"version": number
"description": string
"name": string
"fields": any
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }
export interface MicroschemasMicroschemaUuidDeleteResponse {  }
export interface MicroschemasMicroschemaUuidChangesPostResponse { "message": string }
export interface MicroschemasMicroschemaUuidDiffPostResponse { "changes": { "operation": string
"properties": { "field": string
"label": string
"type": string
"listType": string } }[] }
export interface AdminStatusGetResponse { "message": string }
export interface AdminStatusMigrationsGetResponse { "message": string }
export interface SearchCreateMappingsGetResponse { "message": string }
export interface SearchGroupsPostResponse { "data": { "uuid": string
"creator": { "firstName": string
"lastName": string
"uuid": string }
"created": string
"editor": { "firstName": string
"lastName": string
"uuid": string }
"edited": string
"name": string
"roles": { "name": string
"uuid": string }[]
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }[]
"_metainfo": { "currentPage": number
"perPage": number
"pageCount": number
"totalCount": number } }
export interface SearchMicroschemasPostResponse { "data": { "uuid": string
"version": number
"description": string
"name": string
"fields": any
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }[]
"_metainfo": { "currentPage": number
"perPage": number
"pageCount": number
"totalCount": number } }
export interface SearchNodesPostResponse { "data": { "uuid": string
"creator": { "firstName": string
"lastName": string
"uuid": string }
"created": string
"edited": string
"availableLanguages": string[]
"languagePaths": { "de": string
"en": string }
"parentNode": { "uuid": string
"displayName": string }
"tags": { "types": { "items": { "name": string
"uuid": string }[] }
"colors": { "items": { "name": string
"uuid": string }[] } }
"childrenInfo": { "folder": { "schemaUuid": string
"count": number }
"blogpost": { "schemaUuid": string
"count": number } }
"schema": { "name": string
"uuid": string
"version": number }
"fields": any
"path": string
"breadcrumb": { "uuid": string
"displayName": string
"path": string }[]
"container": boolean
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }[]
"_metainfo": { "currentPage": number
"perPage": number
"pageCount": number
"totalCount": number } }
export interface SearchProjectsPostResponse { "data": { "uuid": string
"creator": { "firstName": string
"lastName": string
"uuid": string }
"created": string
"editor": { "firstName": string
"lastName": string
"uuid": string }
"edited": string
"name": string
"rootNode": { "uuid": string }
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }[]
"_metainfo": { "currentPage": number
"perPage": number
"pageCount": number
"totalCount": number } }
export interface SearchReindexGetResponse { "message": string }
export interface SearchRolesPostResponse { "data": { "uuid": string
"creator": { "firstName": string
"lastName": string
"uuid": string }
"created": string
"editor": { "firstName": string
"lastName": string
"uuid": string }
"edited": string
"name": string
"groups": {  }
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }[]
"_metainfo": { "currentPage": number
"perPage": number
"pageCount": number
"totalCount": number } }
export interface SearchSchemasPostResponse { "data": { "uuid": string
"displayField": string
"segmentField": string
"container": boolean
"version": number
"name": string
"fields": any
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }[]
"_metainfo": { "currentPage": number
"perPage": number
"pageCount": number
"totalCount": number } }
export interface SearchStatusGetResponse { "message": string }
export interface SearchTagFamiliesPostResponse { "data": { "creator": { "firstName": string
"lastName": string
"uuid": string }
"created": string
"editor": { "firstName": string
"lastName": string
"uuid": string }
"edited": string
"name": string
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }[]
"_metainfo": { "currentPage": number
"perPage": number
"pageCount": number
"totalCount": number } }
export interface SearchTagsPostResponse { "data": { "uuid": string
"creator": { "firstName": string
"lastName": string
"uuid": string }
"created": string
"editor": { "firstName": string
"lastName": string
"uuid": string }
"edited": string
"tagFamily": { "name": string
"uuid": string }
"name": string
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }[]
"_metainfo": { "currentPage": number
"perPage": number
"pageCount": number
"totalCount": number } }
export interface SearchUsersPostResponse { "data": { "uuid": string
"creator": { "firstName": string
"lastName": string
"uuid": string }
"created": string
"editor": { "firstName": string
"lastName": string
"uuid": string }
"edited": string
"lastname": string
"firstname": string
"username": string
"emailAddress": string
"nodeReference": { "projectName": string
"uuid": string }
"enabled": boolean
"groups": { "name": string
"uuid": string }[]
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }[]
"_metainfo": { "currentPage": number
"perPage": number
"pageCount": number
"totalCount": number } }
export interface UtilitiesLinkResolverPostResponse {  }
export interface AuthLoginGetResponse {  }
export interface AuthLoginPostResponse { "token": string }
export interface AuthLogoutGetResponse { "message": string }
export interface AuthMeGetResponse { "uuid": string
"creator": { "firstName": string
"lastName": string
"uuid": string }
"created": string
"editor": { "firstName": string
"lastName": string
"uuid": string }
"edited": string
"lastname": string
"firstname": string
"username": string
"emailAddress": string
"nodeReference": { "projectName": string
"uuid": string }
"enabled": boolean
"groups": { "name": string
"uuid": string }[]
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }
export interface ProjectNodesPostResponse { "uuid": string
"creator": { "firstName": string
"lastName": string
"uuid": string }
"created": string
"edited": string
"availableLanguages": string[]
"languagePaths": { "de": string
"en": string }
"parentNode": { "uuid": string
"displayName": string }
"tags": { "types": { "items": { "name": string
"uuid": string }[] }
"colors": { "items": { "name": string
"uuid": string }[] } }
"childrenInfo": { "folder": { "schemaUuid": string
"count": number }
"blogpost": { "schemaUuid": string
"count": number } }
"schema": { "name": string
"uuid": string
"version": number }
"fields": any
"path": string
"breadcrumb": { "uuid": string
"displayName": string
"path": string }[]
"container": boolean
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }
export interface ProjectNodesGetResponse { "data": { "uuid": string
"creator": { "firstName": string
"lastName": string
"uuid": string }
"created": string
"edited": string
"availableLanguages": string[]
"languagePaths": { "de": string
"en": string }
"parentNode": { "uuid": string
"displayName": string }
"tags": { "types": { "items": { "name": string
"uuid": string }[] }
"colors": { "items": { "name": string
"uuid": string }[] } }
"childrenInfo": { "folder": { "schemaUuid": string
"count": number }
"blogpost": { "schemaUuid": string
"count": number } }
"schema": { "name": string
"uuid": string
"version": number }
"fields": any
"path": string
"breadcrumb": { "uuid": string
"displayName": string
"path": string }[]
"container": boolean
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }[]
"_metainfo": { "currentPage": number
"perPage": number
"pageCount": number
"totalCount": number } }
export interface ProjectNodesNodeUuidGetResponse { "uuid": string
"creator": { "firstName": string
"lastName": string
"uuid": string }
"created": string
"edited": string
"availableLanguages": string[]
"languagePaths": { "de": string
"en": string }
"parentNode": { "uuid": string
"displayName": string }
"tags": { "types": { "items": { "name": string
"uuid": string }[] }
"colors": { "items": { "name": string
"uuid": string }[] } }
"childrenInfo": { "folder": { "schemaUuid": string
"count": number }
"blogpost": { "schemaUuid": string
"count": number } }
"schema": { "name": string
"uuid": string
"version": number }
"fields": any
"path": string
"breadcrumb": { "uuid": string
"displayName": string
"path": string }[]
"container": boolean
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }
export interface ProjectNodesNodeUuidPostResponse { "uuid": string
"creator": { "firstName": string
"lastName": string
"uuid": string }
"created": string
"editor": { "firstName": string
"lastName": string
"uuid": string }
"edited": string
"parentNode": { "uuid": string
"displayName": string }
"tags": { "types": { "items": { "name": string
"uuid": string }[] }
"colors": { "items": { "name": string
"uuid": string }[] } }
"childrenInfo": {  }
"schema": { "name": string
"uuid": string
"version": number }
"fields": any
"breadcrumb": { "uuid": string
"displayName": string
"path": string }[]
"container": boolean
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }
export interface ProjectNodesNodeUuidDeleteResponse {  }
export interface ProjectNodesNodeUuidBinaryFieldNamePostResponse { "uuid": string
"creator": { "firstName": string
"lastName": string
"uuid": string }
"created": string
"edited": string
"availableLanguages": string[]
"languagePaths": { "de": string
"en": string }
"parentNode": { "uuid": string
"displayName": string }
"tags": { "types": { "items": { "name": string
"uuid": string }[] }
"colors": { "items": { "name": string
"uuid": string }[] } }
"childrenInfo": { "folder": { "schemaUuid": string
"count": number }
"blogpost": { "schemaUuid": string
"count": number } }
"schema": { "name": string
"uuid": string
"version": number }
"fields": any
"path": string
"breadcrumb": { "uuid": string
"displayName": string
"path": string }[]
"container": boolean
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }
export interface ProjectNodesNodeUuidBinaryFieldNameGetResponse {  }
export interface ProjectNodesNodeUuidBinaryTransformFieldNamePostResponse { "uuid": string
"creator": { "firstName": string
"lastName": string
"uuid": string }
"created": string
"edited": string
"availableLanguages": string[]
"languagePaths": { "de": string
"en": string }
"parentNode": { "uuid": string
"displayName": string }
"tags": { "types": { "items": { "name": string
"uuid": string }[] }
"colors": { "items": { "name": string
"uuid": string }[] } }
"childrenInfo": { "folder": { "schemaUuid": string
"count": number }
"blogpost": { "schemaUuid": string
"count": number } }
"schema": { "name": string
"uuid": string
"version": number }
"fields": any
"path": string
"breadcrumb": { "uuid": string
"displayName": string
"path": string }[]
"container": boolean
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }
export interface ProjectNodesNodeUuidChildrenGetResponse { "data": { "uuid": string
"creator": { "firstName": string
"lastName": string
"uuid": string }
"created": string
"edited": string
"availableLanguages": string[]
"languagePaths": { "de": string
"en": string }
"parentNode": { "uuid": string
"displayName": string }
"tags": { "types": { "items": { "name": string
"uuid": string }[] }
"colors": { "items": { "name": string
"uuid": string }[] } }
"childrenInfo": { "folder": { "schemaUuid": string
"count": number }
"blogpost": { "schemaUuid": string
"count": number } }
"schema": { "name": string
"uuid": string
"version": number }
"fields": any
"path": string
"breadcrumb": { "uuid": string
"displayName": string
"path": string }[]
"container": boolean
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }[]
"_metainfo": { "currentPage": number
"perPage": number
"pageCount": number
"totalCount": number } }
export interface ProjectNodesNodeUuidLanguagesLanguageDeleteResponse {  }
export interface ProjectNodesNodeUuidLanguagesLanguagePublishedGetResponse { "published": boolean
"version": { "uuid": string
"number": string }
"publisher": { "firstName": string
"lastName": string
"uuid": string }
"publishDate": string }
export interface ProjectNodesNodeUuidMoveToToUuidPostResponse {  }
export interface ProjectNodesNodeUuidNavigationGetResponse { "uuid": string }
export interface ProjectNodesNodeUuidPublishedGetResponse { "availableLanguages": { "de": { "published": boolean
"version": { "uuid": string
"number": string } }
"en": { "published": boolean
"version": { "uuid": string
"number": string }
"publisher": { "firstName": string
"lastName": string
"uuid": string }
"publishDate": string }
"fr": { "published": boolean
"version": { "uuid": string
"number": string } } } }
export interface ProjectNodesNodeUuidPublishedPostResponse { "availableLanguages": { "de": { "published": boolean
"version": { "uuid": string
"number": string } }
"en": { "published": boolean
"version": { "uuid": string
"number": string }
"publisher": { "firstName": string
"lastName": string
"uuid": string }
"publishDate": string }
"fr": { "published": boolean
"version": { "uuid": string
"number": string } } } }
export interface ProjectNodesNodeUuidPublishedDeleteResponse {  }
export interface ProjectNodesNodeUuidTagsGetResponse { "data": { "uuid": string
"creator": { "firstName": string
"lastName": string
"uuid": string }
"created": string
"editor": { "firstName": string
"lastName": string
"uuid": string }
"edited": string
"tagFamily": { "name": string
"uuid": string }
"name": string
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }[]
"_metainfo": { "currentPage": number
"perPage": number
"pageCount": number
"totalCount": number } }
export interface ProjectNodesNodeUuidTagsTagUuidPostResponse { "uuid": string
"creator": { "firstName": string
"lastName": string
"uuid": string }
"created": string
"editor": { "firstName": string
"lastName": string
"uuid": string }
"edited": string
"parentNode": { "uuid": string
"displayName": string }
"tags": { "types": { "items": { "name": string
"uuid": string }[] }
"colors": { "items": { "name": string
"uuid": string }[] } }
"childrenInfo": {  }
"schema": { "name": string
"uuid": string
"version": number }
"fields": any
"breadcrumb": { "uuid": string
"displayName": string
"path": string }[]
"container": boolean
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }
export interface ProjectNodesNodeUuidTagsTagUuidDeleteResponse {  }
export interface ProjectTagFamiliesGetResponse { "data": { "creator": { "firstName": string
"lastName": string
"uuid": string }
"created": string
"editor": { "firstName": string
"lastName": string
"uuid": string }
"edited": string
"name": string
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }[]
"_metainfo": { "currentPage": number
"perPage": number
"pageCount": number
"totalCount": number } }
export interface ProjectTagFamiliesPostResponse { "creator": { "firstName": string
"lastName": string
"uuid": string }
"created": string
"editor": { "firstName": string
"lastName": string
"uuid": string }
"edited": string
"name": string
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }
export interface ProjectTagFamiliesTagFamilyUuidGetResponse { "creator": { "firstName": string
"lastName": string
"uuid": string }
"created": string
"editor": { "firstName": string
"lastName": string
"uuid": string }
"edited": string
"name": string
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }
export interface ProjectTagFamiliesTagFamilyUuidPostResponse { "creator": { "firstName": string
"lastName": string
"uuid": string }
"created": string
"editor": { "firstName": string
"lastName": string
"uuid": string }
"edited": string
"name": string
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }
export interface ProjectTagFamiliesTagFamilyUuidDeleteResponse {  }
export interface ProjectTagFamiliesTagFamilyUuidTagsGetResponse { "data": { "uuid": string
"creator": { "firstName": string
"lastName": string
"uuid": string }
"created": string
"editor": { "firstName": string
"lastName": string
"uuid": string }
"edited": string
"tagFamily": { "name": string
"uuid": string }
"name": string
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }[]
"_metainfo": { "currentPage": number
"perPage": number
"pageCount": number
"totalCount": number } }
export interface ProjectTagFamiliesTagFamilyUuidTagsTagUuidGetResponse { "uuid": string
"creator": { "firstName": string
"lastName": string
"uuid": string }
"created": string
"editor": { "firstName": string
"lastName": string
"uuid": string }
"edited": string
"tagFamily": { "name": string
"uuid": string }
"name": string
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }
export interface ProjectTagFamiliesTagFamilyUuidTagsTagUuidPostResponse { "uuid": string
"creator": { "firstName": string
"lastName": string
"uuid": string }
"created": string
"editor": { "firstName": string
"lastName": string
"uuid": string }
"edited": string
"tagFamily": { "name": string
"uuid": string }
"name": string
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }
export interface ProjectTagFamiliesTagFamilyUuidTagsTagUuidDeleteResponse {  }
export interface ProjectTagFamiliesTagFamilyUuidTagsTagUuidNodesGetResponse { "data": { "uuid": string
"creator": { "firstName": string
"lastName": string
"uuid": string }
"created": string
"edited": string
"availableLanguages": string[]
"languagePaths": { "de": string
"en": string }
"parentNode": { "uuid": string
"displayName": string }
"tags": { "types": { "items": { "name": string
"uuid": string }[] }
"colors": { "items": { "name": string
"uuid": string }[] } }
"childrenInfo": { "folder": { "schemaUuid": string
"count": number }
"blogpost": { "schemaUuid": string
"count": number } }
"schema": { "name": string
"uuid": string
"version": number }
"fields": any
"path": string
"breadcrumb": { "uuid": string
"displayName": string
"path": string }[]
"container": boolean
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }[]
"_metainfo": { "currentPage": number
"perPage": number
"pageCount": number
"totalCount": number } }
export interface ProjectNavrootPathGetResponse { "uuid": string
"node": { "uuid": string
"creator": { "firstName": string
"lastName": string
"uuid": string }
"created": string
"edited": string
"availableLanguages": string[]
"languagePaths": { "de": string
"en": string }
"parentNode": { "uuid": string
"displayName": string }
"tags": { "types": { "items": { "name": string
"uuid": string }[] }
"colors": { "items": { "name": string
"uuid": string }[] } }
"childrenInfo": { "folder": { "schemaUuid": string
"count": number }
"blogpost": { "schemaUuid": string
"count": number } }
"schema": { "name": string
"uuid": string
"version": number }
"fields": any
"path": string
"breadcrumb": { "uuid": string
"displayName": string
"path": string }[]
"container": boolean
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }
"children": { "uuid": string
"node": { "uuid": string
"creator": { "firstName": string
"lastName": string
"uuid": string }
"created": string
"edited": string
"availableLanguages": string[]
"languagePaths": { "de": string
"en": string }
"parentNode": { "uuid": string
"displayName": string }
"tags": { "types": { "items": { "name": string
"uuid": string }[] }
"colors": { "items": { "name": string
"uuid": string }[] } }
"childrenInfo": { "folder": { "schemaUuid": string
"count": number }
"blogpost": { "schemaUuid": string
"count": number } }
"schema": { "name": string
"uuid": string
"version": number }
"fields": any
"path": string
"breadcrumb": { "uuid": string
"displayName": string
"path": string }[]
"container": boolean
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } } }[] }
export interface ProjectWebrootPathGetResponse {  }
export interface ProjectReleasesPostResponse { "uuid": string
"creator": { "firstName": string
"lastName": string
"uuid": string }
"created": string
"editor": { "firstName": string
"lastName": string
"uuid": string }
"edited": string
"name": string
"migrated": boolean
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean }
"rolePerms": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }
export interface ProjectReleasesGetResponse { "data": { "uuid": string
"creator": { "firstName": string
"lastName": string
"uuid": string }
"created": string
"editor": { "firstName": string
"lastName": string
"uuid": string }
"edited": string
"name": string
"migrated": boolean
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean }
"rolePerms": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }[]
"_metainfo": { "currentPage": number
"perPage": number
"pageCount": number
"totalCount": number } }
export interface ProjectReleasesReleaseUuidGetResponse { "uuid": string
"creator": { "firstName": string
"lastName": string
"uuid": string }
"created": string
"editor": { "firstName": string
"lastName": string
"uuid": string }
"edited": string
"name": string
"migrated": boolean
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean }
"rolePerms": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }
export interface ProjectReleasesReleaseUuidPostResponse { "uuid": string
"creator": { "firstName": string
"lastName": string
"uuid": string }
"created": string
"editor": { "firstName": string
"lastName": string
"uuid": string }
"edited": string
"name": string
"migrated": boolean
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean }
"rolePerms": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }
export interface ProjectReleasesReleaseUuidMicroschemasGetResponse { "0": { "name": string
"uuid": string
"version": number }
"1": { "name": string
"uuid": string
"version": number } }
export interface ProjectReleasesReleaseUuidMicroschemasPostResponse { "0": { "name": string
"uuid": string
"version": number }
"1": { "name": string
"uuid": string
"version": number } }
export interface ProjectReleasesReleaseUuidSchemasGetResponse { "0": { "name": string
"uuid": string
"version": number }
"1": { "name": string
"uuid": string
"version": number }
"2": { "name": string
"uuid": string
"version": number } }
export interface ProjectReleasesReleaseUuidSchemasPostResponse { "0": { "name": string
"uuid": string
"version": number }
"1": { "name": string
"uuid": string
"version": number }
"2": { "name": string
"uuid": string
"version": number } }
export interface ProjectSearchNodesPostResponse { "data": { "uuid": string
"creator": { "firstName": string
"lastName": string
"uuid": string }
"created": string
"edited": string
"availableLanguages": string[]
"languagePaths": { "de": string
"en": string }
"parentNode": { "uuid": string
"displayName": string }
"tags": { "types": { "items": { "name": string
"uuid": string }[] }
"colors": { "items": { "name": string
"uuid": string }[] } }
"childrenInfo": { "folder": { "schemaUuid": string
"count": number }
"blogpost": { "schemaUuid": string
"count": number } }
"schema": { "name": string
"uuid": string
"version": number }
"fields": any
"path": string
"breadcrumb": { "uuid": string
"displayName": string
"path": string }[]
"container": boolean
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }[]
"_metainfo": { "currentPage": number
"perPage": number
"pageCount": number
"totalCount": number } }
export interface ProjectSearchTagFamiliesPostResponse { "data": { "creator": { "firstName": string
"lastName": string
"uuid": string }
"created": string
"editor": { "firstName": string
"lastName": string
"uuid": string }
"edited": string
"name": string
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }[]
"_metainfo": { "currentPage": number
"perPage": number
"pageCount": number
"totalCount": number } }
export interface ProjectSearchTagsPostResponse { "data": { "uuid": string
"creator": { "firstName": string
"lastName": string
"uuid": string }
"created": string
"editor": { "firstName": string
"lastName": string
"uuid": string }
"edited": string
"tagFamily": { "name": string
"uuid": string }
"name": string
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }[]
"_metainfo": { "currentPage": number
"perPage": number
"pageCount": number
"totalCount": number } }
export interface ProjectSchemasGetResponse { "data": { "uuid": string
"displayField": string
"segmentField": string
"container": boolean
"version": number
"name": string
"fields": any
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }[]
"_metainfo": { "currentPage": number
"perPage": number
"pageCount": number
"totalCount": number } }
export interface ProjectSchemasSchemaUuidGetResponse { "uuid": string
"displayField": string
"segmentField": string
"container": boolean
"version": number
"name": string
"fields": any
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }
export interface ProjectSchemasSchemaUuidPostResponse { "uuid": string
"displayField": string
"segmentField": string
"container": boolean
"version": number
"name": string
"fields": any
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }
export interface ProjectSchemasSchemaUuidDeleteResponse {  }
export interface ProjectMicroschemasGetResponse { "data": { "uuid": string
"version": number
"description": string
"name": string
"fields": any
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }[]
"_metainfo": { "currentPage": number
"perPage": number
"pageCount": number
"totalCount": number } }
export interface ProjectMicroschemasMicroschemaUuidPostResponse { "uuid": string
"version": number
"description": string
"name": string
"fields": any
"permissions": { "create": boolean
"read": boolean
"update": boolean
"delete": boolean
"publish": boolean
"readPublished": boolean } }
export interface ProjectMicroschemasMicroschemaUuidDeleteResponse {  }