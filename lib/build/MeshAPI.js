"use strict";
const APIBase_1 = require("../APIBase");
class MeshAPI extends APIBase_1.APIBase {
    constructor() {
        super(...arguments);
        this.api = {
            users: {
                /**
             * Method post
             * Create a new user.
             * Example
             * {
             *   "uuid" : "8e08d784b55947f688d784b559f7f654",
             *   "creator" : {
             *     "lastName" : "Doe",
             *     "firstName" : "Joe",
             *     "uuid" : "5c926b9fb7f74369926b9fb7f7f36933"
             *   },
             *   "created" : "2016-11-17T08:46:27.032Z",
             *   "editor" : {
             *     "lastName" : "Doe",
             *     "firstName" : "Joe",
             *     "uuid" : "8ca3e3f47e474078a3e3f47e4780781f"
             *   },
             *   "edited" : "2016-11-17T08:46:27.032Z",
             *   "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
             *   "lastname" : "Doe",
             *   "firstname" : "Joe",
             *   "username" : "newuser",
             *   "emailAddress" : "j.doe@nowhere.com",
             *   "nodeReference" : {
             *     "projectName" : "dummy",
             *     "uuid" : "f902819bd653457982819bd65385796c"
             *   },
             *   "enabled" : true,
             *   "groups" : [ {
             *     "name" : "editors",
             *     "uuid" : "68d88db216c24319988db216c2331942"
             *   } ]
             * }
             *
             */
                post: (data, query, token) => {
                    return this.post(`/users`, data, query, token);
                },
                /**
                 * Method get
                 * Load multiple users and return a paged list response.
                 * Example
                 * {
                 *   "data" : [ {
                 *     "uuid" : "d7e013a01af34be5a013a01af3ebe558",
                 *     "creator" : {
                 *       "lastName" : "Doe",
                 *       "firstName" : "Joe",
                 *       "uuid" : "892d3ef7fa8643b4ad3ef7fa8673b405"
                 *     },
                 *     "created" : "2016-11-17T08:46:27.178Z",
                 *     "editor" : {
                 *       "lastName" : "Doe",
                 *       "firstName" : "Joe",
                 *       "uuid" : "9862dab055694ea6a2dab055692ea64d"
                 *     },
                 *     "edited" : "2016-11-17T08:46:27.178Z",
                 *     "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                 *     "lastname" : "Doe",
                 *     "firstname" : "Joe",
                 *     "username" : "jdoe",
                 *     "emailAddress" : "j.doe@nowhere.com",
                 *     "nodeReference" : {
                 *       "projectName" : "dummy",
                 *       "uuid" : "bccbd2741fde49be8bd2741fde29bef8"
                 *     },
                 *     "enabled" : true,
                 *     "groups" : [ {
                 *       "name" : "editors",
                 *       "uuid" : "8ee34f178f3146b9a34f178f3166b93c"
                 *     } ]
                 *   }, {
                 *     "uuid" : "c3e3a70651394753a3a706513917531c",
                 *     "creator" : {
                 *       "lastName" : "Doe",
                 *       "firstName" : "Joe",
                 *       "uuid" : "0752b4ada62a422492b4ada62a322436"
                 *     },
                 *     "created" : "2016-11-17T08:46:27.178Z",
                 *     "editor" : {
                 *       "lastName" : "Doe",
                 *       "firstName" : "Joe",
                 *       "uuid" : "8ae63cc205eb4e90a63cc205eb2e90ae"
                 *     },
                 *     "edited" : "2016-11-17T08:46:27.178Z",
                 *     "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                 *     "lastname" : "Roe",
                 *     "firstname" : "Jane",
                 *     "username" : "jroe",
                 *     "emailAddress" : "j.roe@nowhere.com",
                 *     "nodeReference" : {
                 *       "projectName" : "dummy",
                 *       "uuid" : "81af21cd1e84416caf21cd1e84016c93"
                 *     },
                 *     "enabled" : true,
                 *     "groups" : [ {
                 *       "name" : "editors",
                 *       "uuid" : "cb380a50464d4972b80a50464df97251"
                 *     }, {
                 *       "name" : "super-editors",
                 *       "uuid" : "8b6883a666ec4a2aa883a666ec7a2a0d"
                 *     }, {
                 *       "name" : "editors",
                 *       "uuid" : "8f802366ec654997802366ec65999748"
                 *     } ]
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
                get: (query, token) => {
                    return this.get(`/users`, query, token);
                },
                /**
                * Resource /users/{userUuid}
                *
                */
                userUuid: (userUuid) => {
                    return {
                        /**
                     * Method get
                     * Read the user with the given uuid
                     * Example
                     * {
                     *   "uuid" : "4ee6bcce4c8e424ea6bcce4c8e924e97",
                     *   "creator" : {
                     *     "lastName" : "Doe",
                     *     "firstName" : "Joe",
                     *     "uuid" : "fa399bb93adf4e27b99bb93adf1e27e6"
                     *   },
                     *   "created" : "2016-11-17T08:46:27.174Z",
                     *   "editor" : {
                     *     "lastName" : "Doe",
                     *     "firstName" : "Joe",
                     *     "uuid" : "6885f70f214c417285f70f214c017235"
                     *   },
                     *   "edited" : "2016-11-17T08:46:27.174Z",
                     *   "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                     *   "lastname" : "Doe",
                     *   "firstname" : "Joe",
                     *   "username" : "jdoe",
                     *   "emailAddress" : "j.doe@nowhere.com",
                     *   "nodeReference" : {
                     *     "projectName" : "dummy",
                     *     "uuid" : "814f011a82f045fe8f011a82f0a5fe3d"
                     *   },
                     *   "enabled" : true,
                     *   "groups" : [ {
                     *     "name" : "editors",
                     *     "uuid" : "9fecc51658a74c0facc51658a70c0f49"
                     *   } ]
                     * }
                     *
                     */
                        get: (query, token) => {
                            return this.get(`/users/${userUuid}`, query, token);
                        },
                        /**
                         * Method post
                         * Update the user with the given uuid.
                         * Example
                         * {
                         *   "uuid" : "31aa5238030c4a32aa5238030cea329c",
                         *   "creator" : {
                         *     "lastName" : "Doe",
                         *     "firstName" : "Joe",
                         *     "uuid" : "c6e62bc22ba646f4a62bc22ba666f4c8"
                         *   },
                         *   "created" : "2016-11-17T08:46:27.193Z",
                         *   "editor" : {
                         *     "lastName" : "Doe",
                         *     "firstName" : "Joe",
                         *     "uuid" : "f34149fae4ac46bc8149fae4acb6bcb9"
                         *   },
                         *   "edited" : "2016-11-17T08:46:27.193Z",
                         *   "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                         *   "lastname" : "Doe",
                         *   "firstname" : "Joe",
                         *   "username" : "jdoe42",
                         *   "emailAddress" : "j.doe@nowhere.com",
                         *   "nodeReference" : {
                         *     "projectName" : "dummy",
                         *     "uuid" : "30529b81a473459b929b81a473b59b84"
                         *   },
                         *   "enabled" : true,
                         *   "groups" : [ {
                         *     "name" : "editors",
                         *     "uuid" : "cf7ea586162d4b59bea586162d5b5986"
                         *   } ]
                         * }
                         *
                         */
                        post: (data, query, token) => {
                            return this.post(`/users/${userUuid}`, data, query, token);
                        },
                        /**
                         * Method delete
                         * Deactivate the user with the given uuid. Please note that users can't be deleted since they are needed to construct creator/editor information.
                         * Example
                         *
                         */
                        delete: (token) => {
                            return this.delete(`/users/${userUuid}`, token);
                        },
                        /**
                        * Resource /users/{userUuid}/permissions
                        *
                        */
                        permissions: {
                            /**
                            * Resource /users/{userUuid}/permissions/{path}
                            *
                            */
                            path: (path) => {
                                return {
                                    /**
                                 * Method get
                                 * Read the user permissions on the element/s that are located by the specified path.
                                 * Example
                                 * {
                                 *   "permissions" : [ "read", "create", "update", "delete" ]
                                 * }
                                 *
                                 */
                                    get: (query, token) => {
                                        return this.get(`/users/${userUuid}/permissions/${path}`, query, token);
                                    },
                                };
                            }
                        }
                    };
                }
            },
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
             *   "uuid" : "93c1422f08634c5f81422f08630c5f8e",
             *   "creator" : {
             *     "lastName" : "Doe",
             *     "firstName" : "Joe",
             *     "uuid" : "2652f6fca7c9433292f6fca7c9133213"
             *   },
             *   "created" : "2016-11-17T08:46:27.227Z",
             *   "editor" : {
             *     "lastName" : "Doe",
             *     "firstName" : "Joe",
             *     "uuid" : "feb0ce88d1c446a3b0ce88d1c486a388"
             *   },
             *   "edited" : "2016-11-17T08:46:27.227Z",
             *   "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
             *   "name" : "New role",
             *   "groups" : [ ]
             * }
             *
             */
                post: (data, query, token) => {
                    return this.post(`/roles`, data, query, token);
                },
                /**
                 * Method get
                 * Load multiple roles and return a paged list response
                 * Example
                 * {
                 *   "data" : [ {
                 *     "uuid" : "12ec171204eb4ab9ac171204ebfab9cc",
                 *     "creator" : {
                 *       "lastName" : "Doe",
                 *       "firstName" : "Joe",
                 *       "uuid" : "e40604c137b045188604c137b0751857"
                 *     },
                 *     "created" : "2016-11-17T08:46:27.233Z",
                 *     "editor" : {
                 *       "lastName" : "Doe",
                 *       "firstName" : "Joe",
                 *       "uuid" : "546ae75c2e3145b7aae75c2e31c5b73c"
                 *     },
                 *     "edited" : "2016-11-17T08:46:27.233Z",
                 *     "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                 *     "name" : "Reader role",
                 *     "groups" : [ ]
                 *   }, {
                 *     "uuid" : "4c7cec0710d9418cbcec0710d9418c3d",
                 *     "creator" : {
                 *       "lastName" : "Doe",
                 *       "firstName" : "Joe",
                 *       "uuid" : "dcdba58f04c645ae9ba58f04c6c5ae64"
                 *     },
                 *     "created" : "2016-11-17T08:46:27.233Z",
                 *     "editor" : {
                 *       "lastName" : "Doe",
                 *       "firstName" : "Joe",
                 *       "uuid" : "4724221ee8cb40f4a4221ee8cba0f457"
                 *     },
                 *     "edited" : "2016-11-17T08:46:27.233Z",
                 *     "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                 *     "name" : "Admin role",
                 *     "groups" : [ {
                 *       "name" : "editors",
                 *       "uuid" : "a08fc28de78141ad8fc28de781c1adcb"
                 *     }, {
                 *       "name" : "guests",
                 *       "uuid" : "5a72ffddefaf48b4b2ffddefaff8b44b"
                 *     } ]
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
                get: (query, token) => {
                    return this.get(`/roles`, query, token);
                },
                /**
                * Resource /roles/{roleUuid}
                *
                */
                roleUuid: (roleUuid) => {
                    return {
                        /**
                     * Method get
                     * Load the role with the given uuid.
                     * Example
                     * {
                     *   "uuid" : "67d5f2561c33409c95f2561c33d09c73",
                     *   "creator" : {
                     *     "lastName" : "Doe",
                     *     "firstName" : "Joe",
                     *     "uuid" : "c1ed3fd919ac4ba0ad3fd919ac7ba070"
                     *   },
                     *   "created" : "2016-11-17T08:46:27.232Z",
                     *   "editor" : {
                     *     "lastName" : "Doe",
                     *     "firstName" : "Joe",
                     *     "uuid" : "cd72b64356fb4f55b2b64356fbef5578"
                     *   },
                     *   "edited" : "2016-11-17T08:46:27.232Z",
                     *   "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                     *   "name" : "Admin Role",
                     *   "groups" : [ ]
                     * }
                     *
                     */
                        get: (query, token) => {
                            return this.get(`/roles/${roleUuid}`, query, token);
                        },
                        /**
                         * Method post
                         * Update the role with the given uuid.
                         * Example
                         * {
                         *   "uuid" : "6fec719e8e394667ac719e8e394667bf",
                         *   "creator" : {
                         *     "lastName" : "Doe",
                         *     "firstName" : "Joe",
                         *     "uuid" : "4a36630e557e45cbb6630e557ed5cb67"
                         *   },
                         *   "created" : "2016-11-17T08:46:27.236Z",
                         *   "editor" : {
                         *     "lastName" : "Doe",
                         *     "firstName" : "Joe",
                         *     "uuid" : "162b456450324c0dab456450322c0d81"
                         *   },
                         *   "edited" : "2016-11-17T08:46:27.236Z",
                         *   "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                         *   "name" : "New role name",
                         *   "groups" : [ ]
                         * }
                         *
                         */
                        post: (data, query, token) => {
                            return this.post(`/roles/${roleUuid}`, data, query, token);
                        },
                        /**
                         * Method delete
                         * Delete the role with the given uuid
                         * Example
                         *
                         */
                        delete: (token) => {
                            return this.delete(`/roles/${roleUuid}`, token);
                        },
                        /**
                        * Resource /roles/{roleUuid}/permissions
                        *
                        */
                        permissions: {
                            /**
                            * Resource /roles/{roleUuid}/permissions/{pathToElement}
                            *
                            */
                            pathToElement: (pathToElement) => {
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
                                    post: (data, query, token) => {
                                        return this.post(`/roles/${roleUuid}/permissions/${pathToElement}`, data, query, token);
                                    },
                                    /**
                                     * Method get
                                     * Load the permissions between given role and the targeted element.
                                     * Example
                                     * {
                                     *   "permissions" : [ "read", "create", "update", "delete" ]
                                     * }
                                     *
                                     */
                                    get: (query, token) => {
                                        return this.get(`/roles/${roleUuid}/permissions/${pathToElement}`, query, token);
                                    },
                                };
                            }
                        }
                    };
                }
            },
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
             *   "uuid" : "d68344b0578341738344b05783d1731a",
             *   "creator" : {
             *     "lastName" : "Doe",
             *     "firstName" : "Joe",
             *     "uuid" : "6585057a07d84c4585057a07d80c4576"
             *   },
             *   "created" : "2016-11-17T08:46:27.268Z",
             *   "editor" : {
             *     "lastName" : "Doe",
             *     "firstName" : "Joe",
             *     "uuid" : "e819dd45692f4e2199dd45692f5e212f"
             *   },
             *   "edited" : "2016-11-17T08:46:27.268Z",
             *   "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
             *   "name" : "New group",
             *   "roles" : [ {
             *     "name" : "admin",
             *     "uuid" : "dc2c6a22f1864e81ac6a22f1863e814b"
             *   } ]
             * }
             *
             */
                post: (data, query, token) => {
                    return this.post(`/groups`, data, query, token);
                },
                /**
                 * Method get
                 * Read multiple groups and return a paged list response.
                 * Example
                 * {
                 *   "data" : [ {
                 *     "uuid" : "9b761fb9e7cc4166b61fb9e7cc2166b6",
                 *     "creator" : {
                 *       "lastName" : "Doe",
                 *       "firstName" : "Joe",
                 *       "uuid" : "f2894fe5f392457a894fe5f392c57a42"
                 *     },
                 *     "created" : "2016-11-17T08:46:27.269Z",
                 *     "editor" : {
                 *       "lastName" : "Doe",
                 *       "firstName" : "Joe",
                 *       "uuid" : "749082f5059c43679082f5059c93679e"
                 *     },
                 *     "edited" : "2016-11-17T08:46:27.269Z",
                 *     "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                 *     "name" : "Admin Group",
                 *     "roles" : [ {
                 *       "name" : "admin",
                 *       "uuid" : "49df7794f9b043359f7794f9b06335e6"
                 *     } ]
                 *   }, {
                 *     "uuid" : "30d7363b8b654c0c97363b8b65bc0cd7",
                 *     "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                 *     "name" : "Editor Group",
                 *     "roles" : [ ]
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
                get: (query, token) => {
                    return this.get(`/groups`, query, token);
                },
                /**
                * Resource /groups/{groupUuid}
                *
                */
                groupUuid: (groupUuid) => {
                    return {
                        /**
                     * Method get
                     * Read the group with the given uuid.
                     * Example
                     * {
                     *   "uuid" : "9497c993a5de418497c993a5de9184f4",
                     *   "creator" : {
                     *     "lastName" : "Doe",
                     *     "firstName" : "Joe",
                     *     "uuid" : "9d5e70f5d6b24f4c9e70f5d6b2af4ca1"
                     *   },
                     *   "created" : "2016-11-17T08:46:27.269Z",
                     *   "editor" : {
                     *     "lastName" : "Doe",
                     *     "firstName" : "Joe",
                     *     "uuid" : "361d7eeaed9545039d7eeaed95d50380"
                     *   },
                     *   "edited" : "2016-11-17T08:46:27.269Z",
                     *   "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                     *   "name" : "Admin Group",
                     *   "roles" : [ {
                     *     "name" : "admin",
                     *     "uuid" : "8a5904770e8146829904770e819682bc"
                     *   } ]
                     * }
                     *
                     */
                        get: (query, token) => {
                            return this.get(`/groups/${groupUuid}`, query, token);
                        },
                        /**
                         * Method post
                         * Update the group with the given uuid.
                         * Example
                         * {
                         *   "uuid" : "56d43a48bcf440a4943a48bcf430a466",
                         *   "creator" : {
                         *     "lastName" : "Doe",
                         *     "firstName" : "Joe",
                         *     "uuid" : "6dde0f7bc85943259e0f7bc859332532"
                         *   },
                         *   "created" : "2016-11-17T08:46:27.271Z",
                         *   "editor" : {
                         *     "lastName" : "Doe",
                         *     "firstName" : "Joe",
                         *     "uuid" : "6db29a9df4984c68b29a9df498fc68fe"
                         *   },
                         *   "edited" : "2016-11-17T08:46:27.271Z",
                         *   "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                         *   "name" : "New group name",
                         *   "roles" : [ {
                         *     "name" : "admin",
                         *     "uuid" : "448552bae01949b08552bae019b9b034"
                         *   } ]
                         * }
                         *
                         */
                        post: (data, query, token) => {
                            return this.post(`/groups/${groupUuid}`, data, query, token);
                        },
                        /**
                         * Method delete
                         * Delete the given group.
                         * Example
                         *
                         */
                        delete: (token) => {
                            return this.delete(`/groups/${groupUuid}`, token);
                        },
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
                         *     "uuid" : "ace1c3e02b714c56a1c3e02b71ac5626",
                         *     "creator" : {
                         *       "lastName" : "Doe",
                         *       "firstName" : "Joe",
                         *       "uuid" : "960fe4b704da4cf28fe4b704da9cf2cf"
                         *     },
                         *     "created" : "2016-11-17T08:46:27.258Z",
                         *     "editor" : {
                         *       "lastName" : "Doe",
                         *       "firstName" : "Joe",
                         *       "uuid" : "660d10b767c3437a8d10b767c3837a38"
                         *     },
                         *     "edited" : "2016-11-17T08:46:27.258Z",
                         *     "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                         *     "lastname" : "Doe",
                         *     "firstname" : "Joe",
                         *     "username" : "jdoe",
                         *     "emailAddress" : "j.doe@nowhere.com",
                         *     "nodeReference" : {
                         *       "projectName" : "dummy",
                         *       "uuid" : "3cd258a988b846ff9258a988b8a6ffc1"
                         *     },
                         *     "enabled" : true,
                         *     "groups" : [ {
                         *       "name" : "editors",
                         *       "uuid" : "01fb3a41a8114dbfbb3a41a8112dbfce"
                         *     } ]
                         *   }, {
                         *     "uuid" : "2dc3929ed8d1403583929ed8d1b03536",
                         *     "creator" : {
                         *       "lastName" : "Doe",
                         *       "firstName" : "Joe",
                         *       "uuid" : "bbd0cbcbe57f4f2990cbcbe57f3f296b"
                         *     },
                         *     "created" : "2016-11-17T08:46:27.258Z",
                         *     "editor" : {
                         *       "lastName" : "Doe",
                         *       "firstName" : "Joe",
                         *       "uuid" : "3154a2b7e35a46bf94a2b7e35a16bfad"
                         *     },
                         *     "edited" : "2016-11-17T08:46:27.259Z",
                         *     "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                         *     "lastname" : "Roe",
                         *     "firstname" : "Jane",
                         *     "username" : "jroe",
                         *     "emailAddress" : "j.roe@nowhere.com",
                         *     "nodeReference" : {
                         *       "projectName" : "dummy",
                         *       "uuid" : "0aa0ccba0173472da0ccba0173a72dea"
                         *     },
                         *     "enabled" : true,
                         *     "groups" : [ {
                         *       "name" : "editors",
                         *       "uuid" : "feb61b5ec0ca4fa8b61b5ec0cacfa8a0"
                         *     }, {
                         *       "name" : "super-editors",
                         *       "uuid" : "2cf468a67d3040d3b468a67d30a0d398"
                         *     }, {
                         *       "name" : "editors",
                         *       "uuid" : "5c83abd1a4f6412983abd1a4f67129c7"
                         *     } ]
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
                            get: (query, token) => {
                                return this.get(`/groups/${groupUuid}/users`, query, token);
                            },
                            /**
                            * Resource /groups/{groupUuid}/users/{userUuid}
                            *
                            */
                            userUuid: (userUuid) => {
                                return {
                                    /**
                                 * Method post
                                 * Add the given user to the group
                                 * Example
                                 * {
                                 *   "uuid" : "9be2f75a2fa540d2a2f75a2fa5a0d27a",
                                 *   "creator" : {
                                 *     "lastName" : "Doe",
                                 *     "firstName" : "Joe",
                                 *     "uuid" : "99540dfcc6cb46c8940dfcc6cba6c8cf"
                                 *   },
                                 *   "created" : "2016-11-17T08:46:27.260Z",
                                 *   "editor" : {
                                 *     "lastName" : "Doe",
                                 *     "firstName" : "Joe",
                                 *     "uuid" : "885f6c0607344a9e9f6c0607341a9e63"
                                 *   },
                                 *   "edited" : "2016-11-17T08:46:27.260Z",
                                 *   "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                                 *   "name" : "Group name",
                                 *   "roles" : [ {
                                 *     "name" : "admin",
                                 *     "uuid" : "a0e6d378017a4040a6d378017ad04099"
                                 *   } ]
                                 * }
                                 *
                                 */
                                    post: (data, query, token) => {
                                        return this.post(`/groups/${groupUuid}/users/${userUuid}`, data, query, token);
                                    },
                                };
                            }
                        },
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
                         *     "uuid" : "464f96be26d947168f96be26d9a716f2",
                         *     "creator" : {
                         *       "lastName" : "Doe",
                         *       "firstName" : "Joe",
                         *       "uuid" : "fb2f3a5381ab440eaf3a5381ab840ea8"
                         *     },
                         *     "created" : "2016-11-17T08:46:27.264Z",
                         *     "editor" : {
                         *       "lastName" : "Doe",
                         *       "firstName" : "Joe",
                         *       "uuid" : "ef0610ddc29040588610ddc2904058e2"
                         *     },
                         *     "edited" : "2016-11-17T08:46:27.264Z",
                         *     "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                         *     "name" : "Reader role",
                         *     "groups" : [ ]
                         *   }, {
                         *     "uuid" : "e252f34a44d64a6192f34a44d62a61d5",
                         *     "creator" : {
                         *       "lastName" : "Doe",
                         *       "firstName" : "Joe",
                         *       "uuid" : "7f864b7062654ec3864b7062654ec393"
                         *     },
                         *     "created" : "2016-11-17T08:46:27.264Z",
                         *     "editor" : {
                         *       "lastName" : "Doe",
                         *       "firstName" : "Joe",
                         *       "uuid" : "282279ae834646afa279ae8346e6af51"
                         *     },
                         *     "edited" : "2016-11-17T08:46:27.264Z",
                         *     "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                         *     "name" : "Admin role",
                         *     "groups" : [ {
                         *       "name" : "editors",
                         *       "uuid" : "505cd05d613e4ba49cd05d613efba45c"
                         *     }, {
                         *       "name" : "guests",
                         *       "uuid" : "63a4f8bfb1ef45f0a4f8bfb1ef65f071"
                         *     } ]
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
                            get: (query, token) => {
                                return this.get(`/groups/${groupUuid}/roles`, query, token);
                            },
                            /**
                            * Resource /groups/{groupUuid}/roles/{roleUuid}
                            *
                            */
                            roleUuid: (roleUuid) => {
                                return {
                                    /**
                                 * Method post
                                 * Add the specified role to the group.
                                 * Example
                                 * {
                                 *   "uuid" : "517dc814ac694e8cbdc814ac69ce8c0b",
                                 *   "creator" : {
                                 *     "lastName" : "Doe",
                                 *     "firstName" : "Joe",
                                 *     "uuid" : "3a27c5f63b094314a7c5f63b0913145f"
                                 *   },
                                 *   "created" : "2016-11-17T08:46:27.265Z",
                                 *   "editor" : {
                                 *     "lastName" : "Doe",
                                 *     "firstName" : "Joe",
                                 *     "uuid" : "2db635ecc1134495b635ecc113b49575"
                                 *   },
                                 *   "edited" : "2016-11-17T08:46:27.265Z",
                                 *   "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                                 *   "name" : "Group name",
                                 *   "roles" : [ {
                                 *     "name" : "admin",
                                 *     "uuid" : "a02c4668534b45d0ac4668534b35d0f8"
                                 *   } ]
                                 * }
                                 *
                                 */
                                    post: (data, query, token) => {
                                        return this.post(`/groups/${groupUuid}/roles/${roleUuid}`, data, query, token);
                                    },
                                    /**
                                     * Method delete
                                     * Remove the given role from the group.
                                     * Example
                                     *
                                     */
                                    delete: (token) => {
                                        return this.delete(`/groups/${groupUuid}/roles/${roleUuid}`, token);
                                    },
                                };
                            }
                        }
                    };
                }
            },
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
             *   "uuid" : "6b7f24be41c8478fbf24be41c8178fd9",
             *   "creator" : {
             *     "lastName" : "Doe",
             *     "firstName" : "Joe",
             *     "uuid" : "d601b5cd31df4aca81b5cd31df9aca36"
             *   },
             *   "created" : "2016-11-17T08:46:27.292Z",
             *   "editor" : {
             *     "lastName" : "Doe",
             *     "firstName" : "Joe",
             *     "uuid" : "99aec876bae84f2aaec876bae87f2a84"
             *   },
             *   "edited" : "2016-11-17T08:46:27.292Z",
             *   "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
             *   "name" : "New Project",
             *   "rootNodeUuid" : "29407a03172a42ab807a03172af2abab"
             * }
             *
             */
                post: (data, query, token) => {
                    return this.post(`/projects`, data, query, token);
                },
                /**
                 * Method get
                 * Load multiple projects and return a paged response.
                 * Example
                 * {
                 *   "data" : [ {
                 *     "uuid" : "e7e06a22ebeb446ba06a22ebeb946b26",
                 *     "creator" : {
                 *       "lastName" : "Doe",
                 *       "firstName" : "Joe",
                 *       "uuid" : "a25c4bf70f524e149c4bf70f52fe1424"
                 *     },
                 *     "created" : "2016-11-17T08:46:27.294Z",
                 *     "editor" : {
                 *       "lastName" : "Doe",
                 *       "firstName" : "Joe",
                 *       "uuid" : "2778345db0624948b8345db062b94868"
                 *     },
                 *     "edited" : "2016-11-17T08:46:27.294Z",
                 *     "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                 *     "name" : "Dummy project",
                 *     "rootNodeUuid" : "67a8029422244efca802942224defc6f"
                 *   }, {
                 *     "uuid" : "408cfd1d416d4c6b8cfd1d416ddc6be2",
                 *     "creator" : {
                 *       "lastName" : "Doe",
                 *       "firstName" : "Joe",
                 *       "uuid" : "73ee8c081dbd4588ae8c081dbdb5884a"
                 *     },
                 *     "created" : "2016-11-17T08:46:27.294Z",
                 *     "editor" : {
                 *       "lastName" : "Doe",
                 *       "firstName" : "Joe",
                 *       "uuid" : "8ee6e26ff51045e0a6e26ff51015e043"
                 *     },
                 *     "edited" : "2016-11-17T08:46:27.294Z",
                 *     "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                 *     "name" : "Dummy Project (Mobile)",
                 *     "rootNodeUuid" : "1a416823125748c88168231257c8c8bb"
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
                get: (query, token) => {
                    return this.get(`/projects`, query, token);
                },
                /**
                * Resource /projects/{projectUuid}
                *
                */
                projectUuid: (projectUuid) => {
                    return {
                        /**
                     * Method get
                     * Load the project with the given uuid.
                     * Example
                     * {
                     *   "uuid" : "248d4ea23f944b5f8d4ea23f941b5f85",
                     *   "creator" : {
                     *     "lastName" : "Doe",
                     *     "firstName" : "Joe",
                     *     "uuid" : "1181c7fbbffd4a6a81c7fbbffd1a6a44"
                     *   },
                     *   "created" : "2016-11-17T08:46:27.294Z",
                     *   "editor" : {
                     *     "lastName" : "Doe",
                     *     "firstName" : "Joe",
                     *     "uuid" : "6dc8d3bf8dc346c988d3bf8dc336c92d"
                     *   },
                     *   "edited" : "2016-11-17T08:46:27.294Z",
                     *   "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                     *   "name" : "Project name",
                     *   "rootNodeUuid" : "19b4109e09c441d6b4109e09c401d64b"
                     * }
                     *
                     */
                        get: (query, token) => {
                            return this.get(`/projects/${projectUuid}`, query, token);
                        },
                        /**
                         * Method post
                         * Update the project with the given uuid.
                         * Example
                         * {
                         *   "uuid" : "a22865534e154e32a865534e158e32e3",
                         *   "creator" : {
                         *     "lastName" : "Doe",
                         *     "firstName" : "Joe",
                         *     "uuid" : "ab17bf090dd04a2d97bf090dd00a2d53"
                         *   },
                         *   "created" : "2016-11-17T08:46:27.296Z",
                         *   "editor" : {
                         *     "lastName" : "Doe",
                         *     "firstName" : "Joe",
                         *     "uuid" : "07dbf674e74b432f9bf674e74b732f5b"
                         *   },
                         *   "edited" : "2016-11-17T08:46:27.296Z",
                         *   "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                         *   "name" : "New project name",
                         *   "rootNodeUuid" : "689a0cfe2c7145229a0cfe2c7185228c"
                         * }
                         *
                         */
                        post: (data, query, token) => {
                            return this.post(`/projects/${projectUuid}`, data, query, token);
                        },
                        /**
                         * Method delete
                         * Delete the project and all attached nodes.
                         * Example
                         *
                         */
                        delete: (token) => {
                            return this.delete(`/projects/${projectUuid}`, token);
                        },
                    };
                }
            },
            /**
                * Resource /schemas
                * Provides endpoints which allow the manipulation of schemas.
                */
            schemas: {
                /**
             * Method post
             * Create a new schema.
             * Example
             * {
             *   "uuid" : "65e9edc50c1a4e47a9edc50c1a8e47b3",
             *   "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
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
             *   "displayField" : "name",
             *   "segmentField" : "name",
             *   "container" : false
             * }
             *
             */
                post: (data, query, token) => {
                    return this.post(`/schemas`, data, query, token);
                },
                /**
                 * Method get
                 * Read multiple schemas and return a paged list response.
                 * Example
                 * {
                 *   "data" : [ {
                 *     "uuid" : "93a3400a6e354ecba3400a6e356ecb00",
                 *     "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
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
                 *     "displayField" : "name",
                 *     "segmentField" : "name",
                 *     "container" : false
                 *   }, {
                 *     "uuid" : "ce878a2345484e24878a234548be24d2",
                 *     "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
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
                 *     "displayField" : "name",
                 *     "segmentField" : "name",
                 *     "container" : false
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
                get: (query, token) => {
                    return this.get(`/schemas`, query, token);
                },
                /**
                * Resource /schemas/{schemaUuid}
                *
                */
                schemaUuid: (schemaUuid) => {
                    return {
                        /**
                     * Method get
                     * Load the schema with the given uuid.
                     * Example
                     * {
                     *   "uuid" : "27de261684f34c139e261684f31c13d0",
                     *   "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
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
                     *   "displayField" : "name",
                     *   "segmentField" : "name",
                     *   "container" : false
                     * }
                     *
                     */
                        get: (query, token) => {
                            return this.get(`/schemas/${schemaUuid}`, query, token);
                        },
                        /**
                         * Method post
                         * Update the schema.
                         * Example
                         * {
                         *   "uuid" : "b2cac4aa442148e28ac4aa442168e29e",
                         *   "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
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
                         *   "displayField" : "name",
                         *   "segmentField" : "name",
                         *   "container" : false
                         * }
                         *
                         */
                        post: (data, query, token) => {
                            return this.post(`/schemas/${schemaUuid}`, data, query, token);
                        },
                        /**
                         * Method delete
                         * Delete the schema with the given uuid.
                         * Example
                         *
                         */
                        delete: (token) => {
                            return this.delete(`/schemas/${schemaUuid}`, token);
                        },
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
                            post: (data, query, token) => {
                                return this.post(`/schemas/${schemaUuid}/diff`, data, query, token);
                            },
                        },
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
                            post: (data, query, token) => {
                                return this.post(`/schemas/${schemaUuid}/changes`, data, query, token);
                            },
                        }
                    };
                }
            },
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
             *   "uuid" : "77a616c737814ca8a616c73781eca83a",
             *   "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
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
             *   } ]
             * }
             *
             */
                post: (data, query, token) => {
                    return this.post(`/microschemas`, data, query, token);
                },
                /**
                 * Method get
                 * Read multiple microschemas and return a paged list response.
                 * Example
                 * {
                 *   "data" : [ {
                 *     "uuid" : "4be8021c37b847afa8021c37b807af3f",
                 *     "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
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
                 *     } ]
                 *   }, {
                 *     "uuid" : "bcbf5dd6e4db4673bf5dd6e4dbc67374",
                 *     "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
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
                 *     } ]
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
                get: (query, token) => {
                    return this.get(`/microschemas`, query, token);
                },
                /**
                * Resource /microschemas/{microschemaUuid}
                *
                */
                microschemaUuid: (microschemaUuid) => {
                    return {
                        /**
                     * Method get
                     * Read the microschema with the given uuid.
                     * Example
                     * {
                     *   "uuid" : "7eeaa7c9d9214b39aaa7c9d9213b3977",
                     *   "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
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
                     *   } ]
                     * }
                     *
                     */
                        get: (query, token) => {
                            return this.get(`/microschemas/${microschemaUuid}`, query, token);
                        },
                        /**
                         * Method post
                         * Update the microschema with the given uuid.
                         * Example
                         * {
                         *   "uuid" : "a5a27fa9cf99448ca27fa9cf99648cb0",
                         *   "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
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
                         *   } ]
                         * }
                         *
                         */
                        post: (data, query, token) => {
                            return this.post(`/microschemas/${microschemaUuid}`, data, query, token);
                        },
                        /**
                         * Method delete
                         * Delete the microschema with the given uuid.
                         * Example
                         *
                         */
                        delete: (token) => {
                            return this.delete(`/microschemas/${microschemaUuid}`, token);
                        },
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
                            post: (data, query, token) => {
                                return this.post(`/microschemas/${microschemaUuid}/diff`, data, query, token);
                            },
                        },
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
                            post: (data, query, token) => {
                                return this.post(`/microschemas/${microschemaUuid}/changes`, data, query, token);
                            },
                        }
                    };
                }
            },
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
                    get: (query, token) => {
                        return this.get(`/admin/status`, query, token);
                    },
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
                        get: (query, token) => {
                            return this.get(`/admin/status/migrations`, query, token);
                        },
                    }
                }
            },
            /**
                * Resource /search
                * Provides search endpoints which can be used to invoke global searches
                */
            search: {
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
                 *     "uuid" : "6074223b33a9487fb4223b33a9487fdc",
                 *     "creator" : {
                 *       "lastName" : "Doe",
                 *       "firstName" : "Joe",
                 *       "uuid" : "31977687c3be4c6a977687c3becc6ad7"
                 *     },
                 *     "created" : "2016-11-17T08:46:27.420Z",
                 *     "editor" : {
                 *       "lastName" : "Doe",
                 *       "firstName" : "Joe",
                 *       "uuid" : "b7bfda65e43e44dbbfda65e43e74db90"
                 *     },
                 *     "edited" : "2016-11-17T08:46:27.420Z",
                 *     "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                 *     "lastname" : "Doe",
                 *     "firstname" : "Joe",
                 *     "username" : "jdoe",
                 *     "emailAddress" : "j.doe@nowhere.com",
                 *     "nodeReference" : {
                 *       "projectName" : "dummy",
                 *       "uuid" : "77afa25c92a34c38afa25c92a39c3847"
                 *     },
                 *     "enabled" : true,
                 *     "groups" : [ {
                 *       "name" : "editors",
                 *       "uuid" : "25379e50d03842bcb79e50d03872bc27"
                 *     } ]
                 *   }, {
                 *     "uuid" : "69546e248bfa4c9d946e248bfa5c9d09",
                 *     "creator" : {
                 *       "lastName" : "Doe",
                 *       "firstName" : "Joe",
                 *       "uuid" : "68dabcf06ea243c59abcf06ea2e3c5d8"
                 *     },
                 *     "created" : "2016-11-17T08:46:27.421Z",
                 *     "editor" : {
                 *       "lastName" : "Doe",
                 *       "firstName" : "Joe",
                 *       "uuid" : "8283850b378c471b83850b378c971b2f"
                 *     },
                 *     "edited" : "2016-11-17T08:46:27.421Z",
                 *     "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                 *     "lastname" : "Roe",
                 *     "firstname" : "Jane",
                 *     "username" : "jroe",
                 *     "emailAddress" : "j.roe@nowhere.com",
                 *     "nodeReference" : {
                 *       "projectName" : "dummy",
                 *       "uuid" : "4ed553b18188407a9553b18188f07aeb"
                 *     },
                 *     "enabled" : true,
                 *     "groups" : [ {
                 *       "name" : "editors",
                 *       "uuid" : "cec97b1063a94197897b1063a9319761"
                 *     }, {
                 *       "name" : "super-editors",
                 *       "uuid" : "e1540ffb189e4ad1940ffb189ebad163"
                 *     }, {
                 *       "name" : "editors",
                 *       "uuid" : "79e344c587f7446aa344c587f7846a5d"
                 *     } ]
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
                    post: (data, query, token) => {
                        return this.post(`/search/users`, data, query, token);
                    },
                },
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
                 *     "uuid" : "b208337b2027420888337b2027a208c5",
                 *     "creator" : {
                 *       "lastName" : "Doe",
                 *       "firstName" : "Joe",
                 *       "uuid" : "b3e59c8a59bf4a4ca59c8a59bf6a4cd9"
                 *     },
                 *     "created" : "2016-11-17T08:46:27.424Z",
                 *     "editor" : {
                 *       "lastName" : "Doe",
                 *       "firstName" : "Joe",
                 *       "uuid" : "c671c608976a4a8eb1c608976aba8ef6"
                 *     },
                 *     "edited" : "2016-11-17T08:46:27.424Z",
                 *     "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                 *     "name" : "Admin Group",
                 *     "roles" : [ {
                 *       "name" : "admin",
                 *       "uuid" : "01b3193a51004124b3193a5100712496"
                 *     } ]
                 *   }, {
                 *     "uuid" : "8ca019e5bf014110a019e5bf016110a6",
                 *     "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                 *     "name" : "Editor Group",
                 *     "roles" : [ ]
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
                    post: (data, query, token) => {
                        return this.post(`/search/groups`, data, query, token);
                    },
                },
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
                 *     "uuid" : "cb79830de6104904b9830de610590461",
                 *     "creator" : {
                 *       "lastName" : "Doe",
                 *       "firstName" : "Joe",
                 *       "uuid" : "26cd351642e947bb8d351642e927bb14"
                 *     },
                 *     "created" : "2016-11-17T08:46:27.425Z",
                 *     "editor" : {
                 *       "lastName" : "Doe",
                 *       "firstName" : "Joe",
                 *       "uuid" : "62d10971c7cd44b3910971c7cda4b3f9"
                 *     },
                 *     "edited" : "2016-11-17T08:46:27.425Z",
                 *     "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                 *     "name" : "Reader role",
                 *     "groups" : [ ]
                 *   }, {
                 *     "uuid" : "2f5e379dffc04d649e379dffc0ad6418",
                 *     "creator" : {
                 *       "lastName" : "Doe",
                 *       "firstName" : "Joe",
                 *       "uuid" : "cd79c79c49f64a2bb9c79c49f6aa2b98"
                 *     },
                 *     "created" : "2016-11-17T08:46:27.425Z",
                 *     "editor" : {
                 *       "lastName" : "Doe",
                 *       "firstName" : "Joe",
                 *       "uuid" : "852be91d11244341abe91d1124d34175"
                 *     },
                 *     "edited" : "2016-11-17T08:46:27.426Z",
                 *     "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                 *     "name" : "Admin role",
                 *     "groups" : [ {
                 *       "name" : "editors",
                 *       "uuid" : "9c54bb77a1a3427d94bb77a1a3327db2"
                 *     }, {
                 *       "name" : "guests",
                 *       "uuid" : "794b51b36fa042a68b51b36fa0d2a660"
                 *     } ]
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
                    post: (data, query, token) => {
                        return this.post(`/search/roles`, data, query, token);
                    },
                },
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
                 *     "uuid" : "137ea61e723241dabea61e723231da84",
                 *     "creator" : {
                 *       "lastName" : "Doe",
                 *       "firstName" : "Joe",
                 *       "uuid" : "9f5359e56d424f549359e56d426f547e"
                 *     },
                 *     "created" : "2016-11-17T08:46:27.429Z",
                 *     "edited" : "2016-11-17T08:46:27.429Z",
                 *     "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                 *     "availableLanguages" : [ "en", "de" ],
                 *     "languagePaths" : {
                 *       "de" : "/api/v1/yourProject/webroot/Bilder",
                 *       "en" : "/api/v1/yourProject/webroot/Images"
                 *     },
                 *     "parentNode" : {
                 *       "uuid" : "3f2e337ac86240e8ae337ac86270e891",
                 *       "displayName" : "parentNodeDisplayName"
                 *     },
                 *     "tags" : {
                 *       "types" : {
                 *         "items" : [ {
                 *           "name" : "car",
                 *           "uuid" : "6df385d3d9794e9ab385d3d979be9a62"
                 *         }, {
                 *           "name" : "ship",
                 *           "uuid" : "6bda9923be164acc9a9923be166acc11"
                 *         } ]
                 *       },
                 *       "colors" : {
                 *         "items" : [ {
                 *           "name" : "red",
                 *           "uuid" : "6cd36e9a360c4ca4936e9a360c7ca4a7"
                 *         }, {
                 *           "name" : "green",
                 *           "uuid" : "0362d51bd7cd42fba2d51bd7cd92fbb6"
                 *         } ]
                 *       }
                 *     },
                 *     "childrenInfo" : {
                 *       "folder" : {
                 *         "schemaUuid" : "09150f4d5f89440e950f4d5f89f40ead",
                 *         "count" : 5
                 *       },
                 *       "blogpost" : {
                 *         "schemaUuid" : "f856c6c49a354e4e96c6c49a35de4e66",
                 *         "count" : 1
                 *       }
                 *     },
                 *     "schema" : {
                 *       "name" : "content",
                 *       "uuid" : "77f836c8d6f14437b836c8d6f1c437e1",
                 *       "version" : 1
                 *     },
                 *     "fields" : {
                 *       "name-stringField" : "Name for language tag de-DE",
                 *       "filename-stringField" : "dummy-content.de.html",
                 *       "teaser-stringField" : "Dummy teaser for de-DE",
                 *       "content-htmlField" : "Content for language tag de-DE",
                 *       "relatedProduct-nodeField" : {
                 *         "uuid" : "02eeab9edbaf452baeab9edbafe52be0"
                 *       },
                 *       "price-numberField" : 100.1,
                 *       "enabled-booleanField" : true,
                 *       "release-dateField" : "2016-11-17T08:46:27.431Z",
                 *       "categories-nodeListField" : [ {
                 *         "uuid" : "fe815d29de2f4ea4815d29de2ffea46e"
                 *       }, {
                 *         "uuid" : "0cfe0040e2fd4388be0040e2fd0388e3"
                 *       }, {
                 *         "uuid" : "b4afbed8a55842b7afbed8a558d2b7ba"
                 *       } ],
                 *       "names-stringListField" : [ "Jack", "Joe", "Mary", "Tom" ],
                 *       "categoryIds-numberListField" : [ 1, 42, 133, 7 ],
                 *       "binary-binaryField" : {
                 *         "fileName" : "flower.jpg",
                 *         "width" : 800,
                 *         "height" : 600,
                 *         "sha512sum" : "ec582eb760034dd91d5fd33656c0b56f082b7365d32e2a139dd9c87ebc192bff3525f32ff4c4137463a31cad020ac19e6e356508db2b90e32d737b6d725e14c1",
                 *         "fileSize" : 95365,
                 *         "mimeType" : "image/jpeg",
                 *         "dominantColor" : "#22a7f0"
                 *       },
                 *       "location-micronodeField" : {
                 *         "uuid" : "4a2353411f9d4d4aa353411f9d0d4aba",
                 *         "microschema" : {
                 *           "name" : "geolocation",
                 *           "uuid" : "81a628cea47e48efa628cea47eb8ef3c"
                 *         },
                 *         "fields" : {
                 *           "latitude" : 48.208330230278,
                 *           "longitude" : 16.373063840833
                 *         }
                 *       },
                 *       "locations-micronodeListField" : [ {
                 *         "uuid" : "ea8ef836a50d4b158ef836a50d2b15a7",
                 *         "microschema" : {
                 *           "name" : "geolocation",
                 *           "uuid" : "6c00c16a0ea949b780c16a0ea959b75e"
                 *         },
                 *         "fields" : {
                 *           "latitude" : 48.208330230278,
                 *           "longitude" : 16.373063840833
                 *         }
                 *       }, {
                 *         "uuid" : "6482cbe3095a493882cbe3095a7938c4",
                 *         "microschema" : {
                 *           "name" : "geolocation",
                 *           "uuid" : "b47e8cbcbc864eb9be8cbcbc86beb9fb"
                 *         },
                 *         "fields" : {
                 *           "latitude" : 48.137222,
                 *           "longitude" : 11.575556
                 *         }
                 *       } ]
                 *     },
                 *     "path" : "/api/v1/yourProject/webroot/Images",
                 *     "breadcrumb" : [ {
                 *       "uuid" : "f2ce9a964d6444198e9a964d645419d0",
                 *       "displayName" : "news",
                 *       "path" : "/news"
                 *     }, {
                 *       "uuid" : "0ec39e9a01174567839e9a0117856718",
                 *       "displayName" : "2015",
                 *       "path" : "/news/2015"
                 *     } ],
                 *     "container" : false
                 *   }, {
                 *     "uuid" : "877969c977f84432b969c977f82432a8",
                 *     "creator" : {
                 *       "lastName" : "Doe",
                 *       "firstName" : "Joe",
                 *       "uuid" : "dafafee669364923bafee66936492323"
                 *     },
                 *     "created" : "2016-11-17T08:46:27.432Z",
                 *     "editor" : {
                 *       "lastName" : "Doe",
                 *       "firstName" : "Joe",
                 *       "uuid" : "7186bed185cf45c886bed185cf65c8d6"
                 *     },
                 *     "edited" : "2016-11-17T08:46:27.432Z",
                 *     "permissions" : [ "READ", "CREATE" ],
                 *     "parentNode" : {
                 *       "uuid" : "7e318605cfae4ba5b18605cfaedba5e0",
                 *       "displayName" : "parentNodeDisplayName"
                 *     },
                 *     "tags" : {
                 *       "types" : {
                 *         "items" : [ {
                 *           "name" : "car",
                 *           "uuid" : "e4d5a7fa4b9f435f95a7fa4b9fd35f8a"
                 *         }, {
                 *           "name" : "ship",
                 *           "uuid" : "a14075aed0d8492b8075aed0d8992b4d"
                 *         } ]
                 *       },
                 *       "colors" : {
                 *         "items" : [ {
                 *           "name" : "red",
                 *           "uuid" : "93b0b6f4c72d4385b0b6f4c72df385d2"
                 *         }, {
                 *           "name" : "green",
                 *           "uuid" : "0409b97e270e45f189b97e270e05f198"
                 *         } ]
                 *       }
                 *     },
                 *     "childrenInfo" : { },
                 *     "schema" : {
                 *       "name" : "content",
                 *       "uuid" : "f095b6e69bc7452b95b6e69bc7252bc7",
                 *       "version" : 1
                 *     },
                 *     "fields" : {
                 *       "name" : "Name for language tag en",
                 *       "filename" : "dummy-content.en.html",
                 *       "teaser" : "Dummy teaser for en",
                 *       "content" : "Content for language tag en"
                 *     },
                 *     "breadcrumb" : [ {
                 *       "uuid" : "8804c42f1b2c4f4884c42f1b2c0f4841",
                 *       "displayName" : "news",
                 *       "path" : "/news"
                 *     }, {
                 *       "uuid" : "a959bb831cf345fe99bb831cf395fe25",
                 *       "displayName" : "2015",
                 *       "path" : "/news/2015"
                 *     } ],
                 *     "container" : false
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
                    post: (data, query, token) => {
                        return this.post(`/search/nodes`, data, query, token);
                    },
                },
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
                 *     "uuid" : "b636ed05d3544fa7b6ed05d3541fa700",
                 *     "creator" : {
                 *       "lastName" : "Doe",
                 *       "firstName" : "Joe",
                 *       "uuid" : "b0783f10b110471cb83f10b110c71cd9"
                 *     },
                 *     "created" : "2016-11-17T08:46:27.453Z",
                 *     "editor" : {
                 *       "lastName" : "Doe",
                 *       "firstName" : "Joe",
                 *       "uuid" : "fca26f1dd16d47a6a26f1dd16da7a6b7"
                 *     },
                 *     "edited" : "2016-11-17T08:46:27.453Z",
                 *     "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                 *     "tagFamily" : {
                 *       "name" : "colors",
                 *       "uuid" : "db92c2b7c481463392c2b7c481e633e5"
                 *     },
                 *     "name" : "green"
                 *   }, {
                 *     "uuid" : "895dfe2d66f84a9a9dfe2d66f86a9ae4",
                 *     "creator" : {
                 *       "lastName" : "Doe",
                 *       "firstName" : "Joe",
                 *       "uuid" : "a32aabaa042c41abaaabaa042c41ab5f"
                 *     },
                 *     "created" : "2016-11-17T08:46:27.453Z",
                 *     "editor" : {
                 *       "lastName" : "Doe",
                 *       "firstName" : "Joe",
                 *       "uuid" : "5117760bf7e046b497760bf7e046b43d"
                 *     },
                 *     "edited" : "2016-11-17T08:46:27.453Z",
                 *     "permissions" : [ "READ", "CREATE" ],
                 *     "tagFamily" : {
                 *       "name" : "colors",
                 *       "uuid" : "6013ef46e7a14cfc93ef46e7a10cfc88"
                 *     },
                 *     "name" : "Name for language tag en"
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
                    post: (data, query, token) => {
                        return this.post(`/search/tags`, data, query, token);
                    },
                },
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
                 *       "lastName" : "Doe",
                 *       "firstName" : "Joe",
                 *       "uuid" : "4bbdc843fea94560bdc843fea9b560cb"
                 *     },
                 *     "created" : "2016-11-17T08:46:27.456Z",
                 *     "editor" : {
                 *       "lastName" : "Doe",
                 *       "firstName" : "Joe",
                 *       "uuid" : "f624f78834d7435ea4f78834d7535e96"
                 *     },
                 *     "edited" : "2016-11-17T08:46:27.456Z",
                 *     "permissions" : [ "READ", "CREATE", "UPDATE" ],
                 *     "name" : "Colors"
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
                    post: (data, query, token) => {
                        return this.post(`/search/tagFamilies`, data, query, token);
                    },
                },
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
                 *     "uuid" : "635fc81499eb45419fc81499ebc54105",
                 *     "creator" : {
                 *       "lastName" : "Doe",
                 *       "firstName" : "Joe",
                 *       "uuid" : "f035f15c6ad74fe8b5f15c6ad79fe8b3"
                 *     },
                 *     "created" : "2016-11-17T08:46:27.457Z",
                 *     "editor" : {
                 *       "lastName" : "Doe",
                 *       "firstName" : "Joe",
                 *       "uuid" : "2d07ccd80e6849c787ccd80e68e9c79b"
                 *     },
                 *     "edited" : "2016-11-17T08:46:27.457Z",
                 *     "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                 *     "name" : "Dummy project",
                 *     "rootNodeUuid" : "1026f39efbc74274a6f39efbc772741f"
                 *   }, {
                 *     "uuid" : "146c2538a1b54975ac2538a1b549751c",
                 *     "creator" : {
                 *       "lastName" : "Doe",
                 *       "firstName" : "Joe",
                 *       "uuid" : "3bbe271d27a84ec4be271d27a82ec4ed"
                 *     },
                 *     "created" : "2016-11-17T08:46:27.457Z",
                 *     "editor" : {
                 *       "lastName" : "Doe",
                 *       "firstName" : "Joe",
                 *       "uuid" : "f306d61c16534e2b86d61c16531e2b32"
                 *     },
                 *     "edited" : "2016-11-17T08:46:27.457Z",
                 *     "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                 *     "name" : "Dummy Project (Mobile)",
                 *     "rootNodeUuid" : "ab34ed1192614e6db4ed119261be6d98"
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
                    post: (data, query, token) => {
                        return this.post(`/search/projects`, data, query, token);
                    },
                },
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
                 *     "uuid" : "a46ec26f391c484caec26f391cd84c22",
                 *     "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
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
                 *     "displayField" : "name",
                 *     "segmentField" : "name",
                 *     "container" : false
                 *   }, {
                 *     "uuid" : "497ffaab02404059bffaab024010598b",
                 *     "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
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
                 *     "displayField" : "name",
                 *     "segmentField" : "name",
                 *     "container" : false
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
                    post: (data, query, token) => {
                        return this.post(`/search/schemas`, data, query, token);
                    },
                },
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
                 *     "uuid" : "3583a8ae089e41c683a8ae089e61c670",
                 *     "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
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
                 *     } ]
                 *   }, {
                 *     "uuid" : "80b7984b054d40b5b7984b054d50b5cf",
                 *     "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
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
                 *     } ]
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
                    post: (data, query, token) => {
                        return this.post(`/search/microschemas`, data, query, token);
                    },
                },
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
                    get: (query, token) => {
                        return this.get(`/search/status`, query, token);
                    },
                },
                /**
                    * Resource /search/clearBatches
                    *
                    */
                clearBatches: {
                    /**
                 * Method get
                 * Removes the existing search queue batches from the queue.
                 * Example
                 * {
                 *   "message" : "I18n message"
                 * }
                 *
                 */
                    get: (query, token) => {
                        return this.get(`/search/clearBatches`, query, token);
                    },
                },
                /**
                    * Resource /search/processBatches
                    *
                    */
                processBatches: {
                    /**
                 * Method get
                 * Invoke batch processing of remaining batches in the queue.
                 * Example
                 * {
                 *   "message" : "I18n message"
                 * }
                 *
                 */
                    get: (query, token) => {
                        return this.get(`/search/processBatches`, query, token);
                    },
                },
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
                    get: (query, token) => {
                        return this.get(`/search/createMappings`, query, token);
                    },
                },
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
                    get: (query, token) => {
                        return this.get(`/search/reindex`, query, token);
                    },
                }
            },
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
                 * Return the posted text and resolve and replace all found links.
                 * Example
                 *
                 */
                    post: (data, query, token) => {
                        return this.post(`/utilities/linkResolver`, data, query, token);
                    },
                }
            },
            /**
                * Resource /auth
                * Endpoint which contains login and logout methods.
                */
            auth: {
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
                 *   "uuid" : "a47802ec66ec4bb9b802ec66ec5bb944",
                 *   "creator" : {
                 *     "lastName" : "Doe",
                 *     "firstName" : "Joe",
                 *     "uuid" : "660d54461b99406d8d54461b99f06d85"
                 *   },
                 *   "created" : "2016-11-17T08:46:27.493Z",
                 *   "editor" : {
                 *     "lastName" : "Doe",
                 *     "firstName" : "Joe",
                 *     "uuid" : "1062966588aa447aa2966588aa647a9b"
                 *   },
                 *   "edited" : "2016-11-17T08:46:27.493Z",
                 *   "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                 *   "lastname" : "Doe",
                 *   "firstname" : "Joe",
                 *   "username" : "jdoe",
                 *   "emailAddress" : "j.doe@nowhere.com",
                 *   "nodeReference" : {
                 *     "projectName" : "dummy",
                 *     "uuid" : "1ae7da401ea5490ea7da401ea5490e22"
                 *   },
                 *   "enabled" : true,
                 *   "groups" : [ {
                 *     "name" : "editors",
                 *     "uuid" : "767ceaba983c4066bceaba983c106678"
                 *   } ]
                 * }
                 *
                 */
                    get: (query, token) => {
                        return this.get(`/auth/me`, query, token);
                    },
                },
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
                    get: (query, token) => {
                        return this.get(`/auth/login`, query, token);
                    },
                    /**
                     * Method post
                     * Login via this dedicated login endpoint.
                     * Example
                     * {"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyVXVpZCI6IlVVSURPRlVTRVIxIiwiZXhwIjoxNDY5MTE3MjQ3LCJpYXQiOjE0NjkxMTM2NDd9.i1u4RMs4K7zBkGhmcpp1P79Wpz2UQYJkZKJTVdFp_iU="}
                     */
                    post: (data, query, token) => {
                        return this.post(`/auth/login`, data, query, token);
                    },
                },
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
                    get: (query, token) => {
                        return this.get(`/auth/logout`, query, token);
                    },
                }
            },
            /**
                * Resource /eventbus
                * This endpoint is a SockJS compliant websocket that creates a bridge to the mesh eventbus. It allows handling of various mesh specific events.
                */
            eventbus: {},
            /**
                * Resource /{project}
                *
                */
            project: (project) => {
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
                     *   "uuid" : "6f06edd738d04e3f86edd738d09e3f8b",
                     *   "creator" : {
                     *     "lastName" : "Doe",
                     *     "firstName" : "Joe",
                     *     "uuid" : "a24763d48f9340e58763d48f9390e50d"
                     *   },
                     *   "created" : "2016-11-17T08:46:27.521Z",
                     *   "edited" : "2016-11-17T08:46:27.521Z",
                     *   "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                     *   "availableLanguages" : [ "en", "de" ],
                     *   "languagePaths" : {
                     *     "de" : "/api/v1/yourProject/webroot/Bilder",
                     *     "en" : "/api/v1/yourProject/webroot/Images"
                     *   },
                     *   "parentNode" : {
                     *     "uuid" : "0c1bbc8bb2194f759bbc8bb2195f7555",
                     *     "displayName" : "parentNodeDisplayName"
                     *   },
                     *   "tags" : {
                     *     "types" : {
                     *       "items" : [ {
                     *         "name" : "car",
                     *         "uuid" : "d1b9b25d4ebf4e97b9b25d4ebffe979d"
                     *       }, {
                     *         "name" : "ship",
                     *         "uuid" : "4bd1f65c46424c9491f65c46420c942c"
                     *       } ]
                     *     },
                     *     "colors" : {
                     *       "items" : [ {
                     *         "name" : "red",
                     *         "uuid" : "65701219d1d24c02b01219d1d2fc02f7"
                     *       }, {
                     *         "name" : "green",
                     *         "uuid" : "82923ab620fd45fc923ab620fd65fcb7"
                     *       } ]
                     *     }
                     *   },
                     *   "childrenInfo" : {
                     *     "folder" : {
                     *       "schemaUuid" : "c81344b5abad4ef49344b5abadaef47b",
                     *       "count" : 5
                     *     },
                     *     "blogpost" : {
                     *       "schemaUuid" : "0bb71a6470fc43edb71a6470fc53ed39",
                     *       "count" : 1
                     *     }
                     *   },
                     *   "schema" : {
                     *     "name" : "content",
                     *     "uuid" : "829b5ce1f88d473e9b5ce1f88d173ea5",
                     *     "version" : 1
                     *   },
                     *   "fields" : {
                     *     "name-stringField" : "Name for language tag de-DE",
                     *     "filename-stringField" : "dummy-content.de.html",
                     *     "teaser-stringField" : "Dummy teaser for de-DE",
                     *     "content-htmlField" : "Content for language tag de-DE",
                     *     "relatedProduct-nodeField" : {
                     *       "uuid" : "84eca35ca0a64575aca35ca0a6b57517"
                     *     },
                     *     "price-numberField" : 100.1,
                     *     "enabled-booleanField" : true,
                     *     "release-dateField" : "2016-11-17T08:46:27.521Z",
                     *     "categories-nodeListField" : [ {
                     *       "uuid" : "6e23d5cf45474e28a3d5cf45476e2856"
                     *     }, {
                     *       "uuid" : "4faf184a5b7040b8af184a5b7090b8b5"
                     *     }, {
                     *       "uuid" : "cbc61692d2ee4a2b861692d2ee0a2bd2"
                     *     } ],
                     *     "names-stringListField" : [ "Jack", "Joe", "Mary", "Tom" ],
                     *     "categoryIds-numberListField" : [ 1, 42, 133, 7 ],
                     *     "binary-binaryField" : {
                     *       "fileName" : "flower.jpg",
                     *       "width" : 800,
                     *       "height" : 600,
                     *       "sha512sum" : "ec582eb760034dd91d5fd33656c0b56f082b7365d32e2a139dd9c87ebc192bff3525f32ff4c4137463a31cad020ac19e6e356508db2b90e32d737b6d725e14c1",
                     *       "fileSize" : 95365,
                     *       "mimeType" : "image/jpeg",
                     *       "dominantColor" : "#22a7f0"
                     *     },
                     *     "location-micronodeField" : {
                     *       "uuid" : "037aa0e16d654589baa0e16d65058974",
                     *       "microschema" : {
                     *         "name" : "geolocation",
                     *         "uuid" : "6348a01fb76145e588a01fb76125e5ae"
                     *       },
                     *       "fields" : {
                     *         "latitude" : 48.208330230278,
                     *         "longitude" : 16.373063840833
                     *       }
                     *     },
                     *     "locations-micronodeListField" : [ {
                     *       "uuid" : "1d1f97b1aa9f438c9f97b1aa9ff38c64",
                     *       "microschema" : {
                     *         "name" : "geolocation",
                     *         "uuid" : "34155d11c66c4586955d11c66cf5866b"
                     *       },
                     *       "fields" : {
                     *         "latitude" : 48.208330230278,
                     *         "longitude" : 16.373063840833
                     *       }
                     *     }, {
                     *       "uuid" : "8d5580cfbbd54eb49580cfbbd5ceb448",
                     *       "microschema" : {
                     *         "name" : "geolocation",
                     *         "uuid" : "5155300026274a7495300026275a741f"
                     *       },
                     *       "fields" : {
                     *         "latitude" : 48.137222,
                     *         "longitude" : 11.575556
                     *       }
                     *     } ]
                     *   },
                     *   "path" : "/api/v1/yourProject/webroot/Images",
                     *   "breadcrumb" : [ {
                     *     "uuid" : "e3608ab217fb4487a08ab217fb948710",
                     *     "displayName" : "news",
                     *     "path" : "/news"
                     *   }, {
                     *     "uuid" : "55f3af091c114857b3af091c11d857f4",
                     *     "displayName" : "2015",
                     *     "path" : "/news/2015"
                     *   } ],
                     *   "container" : false
                     * }
                     *
                     */
                        post: (data, query, token) => {
                            return this.post(`/${project}/nodes`, data, query, token);
                        },
                        /**
                         * Method get
                         * Read all nodes and return a paged list response.
                         * Example
                         * {
                         *   "data" : [ {
                         *     "uuid" : "9862198122214a8da219812221ea8d9b",
                         *     "creator" : {
                         *       "lastName" : "Doe",
                         *       "firstName" : "Joe",
                         *       "uuid" : "5223ae839c5343bea3ae839c5343bef0"
                         *     },
                         *     "created" : "2016-11-17T08:46:27.525Z",
                         *     "edited" : "2016-11-17T08:46:27.525Z",
                         *     "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                         *     "availableLanguages" : [ "en", "de" ],
                         *     "languagePaths" : {
                         *       "de" : "/api/v1/yourProject/webroot/Bilder",
                         *       "en" : "/api/v1/yourProject/webroot/Images"
                         *     },
                         *     "parentNode" : {
                         *       "uuid" : "9998e3cfc1424b7798e3cfc1423b7786",
                         *       "displayName" : "parentNodeDisplayName"
                         *     },
                         *     "tags" : {
                         *       "types" : {
                         *         "items" : [ {
                         *           "name" : "car",
                         *           "uuid" : "8a83dfefb158480d83dfefb158180dc4"
                         *         }, {
                         *           "name" : "ship",
                         *           "uuid" : "a96116ef49294178a116ef4929e178f9"
                         *         } ]
                         *       },
                         *       "colors" : {
                         *         "items" : [ {
                         *           "name" : "red",
                         *           "uuid" : "1f3ab9d478164cadbab9d478168cad93"
                         *         }, {
                         *           "name" : "green",
                         *           "uuid" : "ff6d9cce4afa465ead9cce4afa665e89"
                         *         } ]
                         *       }
                         *     },
                         *     "childrenInfo" : {
                         *       "folder" : {
                         *         "schemaUuid" : "47bef716a68547e6bef716a68587e643",
                         *         "count" : 5
                         *       },
                         *       "blogpost" : {
                         *         "schemaUuid" : "9c898ed36bb14e5f898ed36bb1ae5fbe",
                         *         "count" : 1
                         *       }
                         *     },
                         *     "schema" : {
                         *       "name" : "content",
                         *       "uuid" : "faf076698768480db076698768480db5",
                         *       "version" : 1
                         *     },
                         *     "fields" : {
                         *       "name-stringField" : "Name for language tag de-DE",
                         *       "filename-stringField" : "dummy-content.de.html",
                         *       "teaser-stringField" : "Dummy teaser for de-DE",
                         *       "content-htmlField" : "Content for language tag de-DE",
                         *       "relatedProduct-nodeField" : {
                         *         "uuid" : "3cdea4ee478243539ea4ee4782a3531a"
                         *       },
                         *       "price-numberField" : 100.1,
                         *       "enabled-booleanField" : true,
                         *       "release-dateField" : "2016-11-17T08:46:27.525Z",
                         *       "categories-nodeListField" : [ {
                         *         "uuid" : "630e2c50ea154add8e2c50ea152add24"
                         *       }, {
                         *         "uuid" : "e6e201e0594a4ea3a201e0594a8ea300"
                         *       }, {
                         *         "uuid" : "3d807f46f518409b807f46f518809b9c"
                         *       } ],
                         *       "names-stringListField" : [ "Jack", "Joe", "Mary", "Tom" ],
                         *       "categoryIds-numberListField" : [ 1, 42, 133, 7 ],
                         *       "binary-binaryField" : {
                         *         "fileName" : "flower.jpg",
                         *         "width" : 800,
                         *         "height" : 600,
                         *         "sha512sum" : "ec582eb760034dd91d5fd33656c0b56f082b7365d32e2a139dd9c87ebc192bff3525f32ff4c4137463a31cad020ac19e6e356508db2b90e32d737b6d725e14c1",
                         *         "fileSize" : 95365,
                         *         "mimeType" : "image/jpeg",
                         *         "dominantColor" : "#22a7f0"
                         *       },
                         *       "location-micronodeField" : {
                         *         "uuid" : "00c0cfc0fe764bf280cfc0fe763bf2cf",
                         *         "microschema" : {
                         *           "name" : "geolocation",
                         *           "uuid" : "059825aa3983421e9825aa3983e21e6a"
                         *         },
                         *         "fields" : {
                         *           "latitude" : 48.208330230278,
                         *           "longitude" : 16.373063840833
                         *         }
                         *       },
                         *       "locations-micronodeListField" : [ {
                         *         "uuid" : "a00f1e43d99443398f1e43d994933983",
                         *         "microschema" : {
                         *           "name" : "geolocation",
                         *           "uuid" : "71a1181902354307a11819023593072e"
                         *         },
                         *         "fields" : {
                         *           "latitude" : 48.208330230278,
                         *           "longitude" : 16.373063840833
                         *         }
                         *       }, {
                         *         "uuid" : "5b35257c79a04c45b5257c79a03c45ab",
                         *         "microschema" : {
                         *           "name" : "geolocation",
                         *           "uuid" : "c9139b554b264e90939b554b265e90e0"
                         *         },
                         *         "fields" : {
                         *           "latitude" : 48.137222,
                         *           "longitude" : 11.575556
                         *         }
                         *       } ]
                         *     },
                         *     "path" : "/api/v1/yourProject/webroot/Images",
                         *     "breadcrumb" : [ {
                         *       "uuid" : "42cbe72eebaa41d38be72eebaa91d3bb",
                         *       "displayName" : "news",
                         *       "path" : "/news"
                         *     }, {
                         *       "uuid" : "50138e9af83d498e938e9af83d498e41",
                         *       "displayName" : "2015",
                         *       "path" : "/news/2015"
                         *     } ],
                         *     "container" : false
                         *   }, {
                         *     "uuid" : "eb4232ad5c4844118232ad5c489411cd",
                         *     "creator" : {
                         *       "lastName" : "Doe",
                         *       "firstName" : "Joe",
                         *       "uuid" : "fae72e1d5833411da72e1d5833b11d1e"
                         *     },
                         *     "created" : "2016-11-17T08:46:27.525Z",
                         *     "editor" : {
                         *       "lastName" : "Doe",
                         *       "firstName" : "Joe",
                         *       "uuid" : "7393bf8943ed40ab93bf8943ed80ab53"
                         *     },
                         *     "edited" : "2016-11-17T08:46:27.525Z",
                         *     "permissions" : [ "READ", "CREATE" ],
                         *     "parentNode" : {
                         *       "uuid" : "519e35a2581e44ef9e35a2581e94efaf",
                         *       "displayName" : "parentNodeDisplayName"
                         *     },
                         *     "tags" : {
                         *       "types" : {
                         *         "items" : [ {
                         *           "name" : "car",
                         *           "uuid" : "6f8ba824a5b54f2e8ba824a5b53f2e27"
                         *         }, {
                         *           "name" : "ship",
                         *           "uuid" : "5000f01da1a84aeb80f01da1a8aaeb2f"
                         *         } ]
                         *       },
                         *       "colors" : {
                         *         "items" : [ {
                         *           "name" : "red",
                         *           "uuid" : "897459d3187c44bfb459d3187cb4bf4a"
                         *         }, {
                         *           "name" : "green",
                         *           "uuid" : "533c6d22447d4f66bc6d22447d4f66a6"
                         *         } ]
                         *       }
                         *     },
                         *     "childrenInfo" : { },
                         *     "schema" : {
                         *       "name" : "content",
                         *       "uuid" : "2adc2850476842679c2850476852671e",
                         *       "version" : 1
                         *     },
                         *     "fields" : {
                         *       "name" : "Name for language tag en",
                         *       "filename" : "dummy-content.en.html",
                         *       "teaser" : "Dummy teaser for en",
                         *       "content" : "Content for language tag en"
                         *     },
                         *     "breadcrumb" : [ {
                         *       "uuid" : "fc4cf6074d2744238cf6074d271423ff",
                         *       "displayName" : "news",
                         *       "path" : "/news"
                         *     }, {
                         *       "uuid" : "940e5ad859504b328e5ad859507b3242",
                         *       "displayName" : "2015",
                         *       "path" : "/news/2015"
                         *     } ],
                         *     "container" : false
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
                        get: (query, token) => {
                            return this.get(`/${project}/nodes`, query, token);
                        },
                        /**
                        * Resource /{project}/nodes/{nodeUuid}
                        *
                        */
                        nodeUuid: (nodeUuid) => {
                            return {
                                /**
                             * Method get
                             * Load the node with the given uuid.
                             * Example
                             * {
                             *   "uuid" : "f474e97577d74842b4e97577d70842eb",
                             *   "creator" : {
                             *     "lastName" : "Doe",
                             *     "firstName" : "Joe",
                             *     "uuid" : "d1da543733c24c5f9a543733c2ac5fdf"
                             *   },
                             *   "created" : "2016-11-17T08:46:27.523Z",
                             *   "edited" : "2016-11-17T08:46:27.523Z",
                             *   "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                             *   "availableLanguages" : [ "en", "de" ],
                             *   "languagePaths" : {
                             *     "de" : "/api/v1/yourProject/webroot/Bilder",
                             *     "en" : "/api/v1/yourProject/webroot/Images"
                             *   },
                             *   "parentNode" : {
                             *     "uuid" : "43227ee384334738a27ee3843387381f",
                             *     "displayName" : "parentNodeDisplayName"
                             *   },
                             *   "tags" : {
                             *     "types" : {
                             *       "items" : [ {
                             *         "name" : "car",
                             *         "uuid" : "22f11dbfa0ff496cb11dbfa0ff596cfd"
                             *       }, {
                             *         "name" : "ship",
                             *         "uuid" : "0333d7ffaf2b4151b3d7ffaf2b9151a6"
                             *       } ]
                             *     },
                             *     "colors" : {
                             *       "items" : [ {
                             *         "name" : "red",
                             *         "uuid" : "64f518e9feee4fd5b518e9feee1fd5c7"
                             *       }, {
                             *         "name" : "green",
                             *         "uuid" : "5130dd9f0aac4454b0dd9f0aac3454f1"
                             *       } ]
                             *     }
                             *   },
                             *   "childrenInfo" : {
                             *     "folder" : {
                             *       "schemaUuid" : "56dc9a5e6627404f9c9a5e6627804fd7",
                             *       "count" : 5
                             *     },
                             *     "blogpost" : {
                             *       "schemaUuid" : "b40db58e18d246138db58e18d29613f1",
                             *       "count" : 1
                             *     }
                             *   },
                             *   "schema" : {
                             *     "name" : "content",
                             *     "uuid" : "4fb5a842e6254cf3b5a842e625bcf386",
                             *     "version" : 1
                             *   },
                             *   "fields" : {
                             *     "name-stringField" : "Name for language tag de-DE",
                             *     "filename-stringField" : "dummy-content.de.html",
                             *     "teaser-stringField" : "Dummy teaser for de-DE",
                             *     "content-htmlField" : "Content for language tag de-DE",
                             *     "relatedProduct-nodeField" : {
                             *       "uuid" : "564e579a3040463d8e579a3040f63db4"
                             *     },
                             *     "price-numberField" : 100.1,
                             *     "enabled-booleanField" : true,
                             *     "release-dateField" : "2016-11-17T08:46:27.523Z",
                             *     "categories-nodeListField" : [ {
                             *       "uuid" : "484e8e0cac734d138e8e0cac73bd13ed"
                             *     }, {
                             *       "uuid" : "2205188a17124d8685188a1712fd8627"
                             *     }, {
                             *       "uuid" : "ab56e6bf79ae455996e6bf79ae9559fe"
                             *     } ],
                             *     "names-stringListField" : [ "Jack", "Joe", "Mary", "Tom" ],
                             *     "categoryIds-numberListField" : [ 1, 42, 133, 7 ],
                             *     "binary-binaryField" : {
                             *       "fileName" : "flower.jpg",
                             *       "width" : 800,
                             *       "height" : 600,
                             *       "sha512sum" : "ec582eb760034dd91d5fd33656c0b56f082b7365d32e2a139dd9c87ebc192bff3525f32ff4c4137463a31cad020ac19e6e356508db2b90e32d737b6d725e14c1",
                             *       "fileSize" : 95365,
                             *       "mimeType" : "image/jpeg",
                             *       "dominantColor" : "#22a7f0"
                             *     },
                             *     "location-micronodeField" : {
                             *       "uuid" : "e651a55e643d4fc791a55e643d8fc702",
                             *       "microschema" : {
                             *         "name" : "geolocation",
                             *         "uuid" : "276c6afb19b14841ac6afb19b148415c"
                             *       },
                             *       "fields" : {
                             *         "latitude" : 48.208330230278,
                             *         "longitude" : 16.373063840833
                             *       }
                             *     },
                             *     "locations-micronodeListField" : [ {
                             *       "uuid" : "833149ec70124a6bb149ec70124a6bde",
                             *       "microschema" : {
                             *         "name" : "geolocation",
                             *         "uuid" : "e7409f3a06594c22809f3a06599c221d"
                             *       },
                             *       "fields" : {
                             *         "latitude" : 48.208330230278,
                             *         "longitude" : 16.373063840833
                             *       }
                             *     }, {
                             *       "uuid" : "78bc3ee2ab8a4281bc3ee2ab8a42815b",
                             *       "microschema" : {
                             *         "name" : "geolocation",
                             *         "uuid" : "bbe5fc2650444503a5fc2650442503a7"
                             *       },
                             *       "fields" : {
                             *         "latitude" : 48.137222,
                             *         "longitude" : 11.575556
                             *       }
                             *     } ]
                             *   },
                             *   "path" : "/api/v1/yourProject/webroot/Images",
                             *   "breadcrumb" : [ {
                             *     "uuid" : "1439d5d781a6434fb9d5d781a6a34fb3",
                             *     "displayName" : "news",
                             *     "path" : "/news"
                             *   }, {
                             *     "uuid" : "485d02962c6e4b7d9d02962c6e4b7deb",
                             *     "displayName" : "2015",
                             *     "path" : "/news/2015"
                             *   } ],
                             *   "container" : false
                             * }
                             *
                             */
                                get: (query, token) => {
                                    return this.get(`/${project}/nodes/${nodeUuid}`, query, token);
                                },
                                /**
                                 * Method post
                                 * Update the node with the given uuid. It is mandatory to specify the version within the update request. Mesh will automatically check for version conflicts and return a 409 error if a conflict has been detected. Additional conflict checks for webrootpath conflicts will also be performed.
                                 * Example
                                 * {
                                 *   "uuid" : "4d82477953c0468e82477953c0d68e55",
                                 *   "creator" : {
                                 *     "lastName" : "Doe",
                                 *     "firstName" : "Joe",
                                 *     "uuid" : "17a4753d5cca4a9ca4753d5cca8a9cf2"
                                 *   },
                                 *   "created" : "2016-11-17T08:46:27.527Z",
                                 *   "editor" : {
                                 *     "lastName" : "Doe",
                                 *     "firstName" : "Joe",
                                 *     "uuid" : "17a57b929491468da57b929491f68d82"
                                 *   },
                                 *   "edited" : "2016-11-17T08:46:27.527Z",
                                 *   "permissions" : [ "READ", "CREATE" ],
                                 *   "parentNode" : {
                                 *     "uuid" : "63d2d8cdb599497392d8cdb599797359",
                                 *     "displayName" : "parentNodeDisplayName"
                                 *   },
                                 *   "tags" : {
                                 *     "types" : {
                                 *       "items" : [ {
                                 *         "name" : "car",
                                 *         "uuid" : "ddee7d66cfa64765ae7d66cfa6f765c9"
                                 *       }, {
                                 *         "name" : "ship",
                                 *         "uuid" : "391265dd4d4741f89265dd4d4761f817"
                                 *       } ]
                                 *     },
                                 *     "colors" : {
                                 *       "items" : [ {
                                 *         "name" : "red",
                                 *         "uuid" : "6ebdb250ddeb43febdb250ddebb3fe8a"
                                 *       }, {
                                 *         "name" : "green",
                                 *         "uuid" : "9ed513d00a4442e79513d00a4492e7c6"
                                 *       } ]
                                 *     }
                                 *   },
                                 *   "childrenInfo" : { },
                                 *   "schema" : {
                                 *     "name" : "content",
                                 *     "uuid" : "1d5fa843e2e64a799fa843e2e62a79ee",
                                 *     "version" : 1
                                 *   },
                                 *   "fields" : {
                                 *     "name" : "Name for language tag en",
                                 *     "filename" : "dummy-content.en.html",
                                 *     "teaser" : "Dummy teaser for en",
                                 *     "content" : "Content for language tag en"
                                 *   },
                                 *   "breadcrumb" : [ {
                                 *     "uuid" : "467a432726ad44f0ba432726ad24f02b",
                                 *     "displayName" : "news",
                                 *     "path" : "/news"
                                 *   }, {
                                 *     "uuid" : "6ff23bf189314341b23bf18931d34158",
                                 *     "displayName" : "2015",
                                 *     "path" : "/news/2015"
                                 *   } ],
                                 *   "container" : false
                                 * }
                                 *
                                 */
                                post: (data, query, token) => {
                                    return this.post(`/${project}/nodes/${nodeUuid}`, data, query, token);
                                },
                                /**
                                 * Method delete
                                 * Delete the node with the given uuid.
                                 * Example
                                 *
                                 */
                                delete: (token) => {
                                    return this.delete(`/${project}/nodes/${nodeUuid}`, token);
                                },
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
                                 *     "uuid" : "39d59dc6409b4eeb959dc6409b9eeb9d",
                                 *     "creator" : {
                                 *       "lastName" : "Doe",
                                 *       "firstName" : "Joe",
                                 *       "uuid" : "659b921117464c799b92111746cc79a2"
                                 *     },
                                 *     "created" : "2016-11-17T08:46:27.528Z",
                                 *     "edited" : "2016-11-17T08:46:27.528Z",
                                 *     "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                                 *     "availableLanguages" : [ "en", "de" ],
                                 *     "languagePaths" : {
                                 *       "de" : "/api/v1/yourProject/webroot/Bilder",
                                 *       "en" : "/api/v1/yourProject/webroot/Images"
                                 *     },
                                 *     "parentNode" : {
                                 *       "uuid" : "0cf4d317070140bcb4d3170701a0bc22",
                                 *       "displayName" : "parentNodeDisplayName"
                                 *     },
                                 *     "tags" : {
                                 *       "types" : {
                                 *         "items" : [ {
                                 *           "name" : "car",
                                 *           "uuid" : "b8fdfe4a1c5b4984bdfe4a1c5bb98493"
                                 *         }, {
                                 *           "name" : "ship",
                                 *           "uuid" : "a28f180d36fd4cf48f180d36fdacf45f"
                                 *         } ]
                                 *       },
                                 *       "colors" : {
                                 *         "items" : [ {
                                 *           "name" : "red",
                                 *           "uuid" : "be7c6497f69b4733bc6497f69b7733c5"
                                 *         }, {
                                 *           "name" : "green",
                                 *           "uuid" : "5d3b468e4d77497ebb468e4d77997ece"
                                 *         } ]
                                 *       }
                                 *     },
                                 *     "childrenInfo" : {
                                 *       "folder" : {
                                 *         "schemaUuid" : "456659da627f4465a659da627f046562",
                                 *         "count" : 5
                                 *       },
                                 *       "blogpost" : {
                                 *         "schemaUuid" : "f00801f7a94b4dc98801f7a94badc9b1",
                                 *         "count" : 1
                                 *       }
                                 *     },
                                 *     "schema" : {
                                 *       "name" : "content",
                                 *       "uuid" : "9a191218554740f9991218554730f9d9",
                                 *       "version" : 1
                                 *     },
                                 *     "fields" : {
                                 *       "name-stringField" : "Name for language tag de-DE",
                                 *       "filename-stringField" : "dummy-content.de.html",
                                 *       "teaser-stringField" : "Dummy teaser for de-DE",
                                 *       "content-htmlField" : "Content for language tag de-DE",
                                 *       "relatedProduct-nodeField" : {
                                 *         "uuid" : "6ef52a5aeec64806b52a5aeec63806f5"
                                 *       },
                                 *       "price-numberField" : 100.1,
                                 *       "enabled-booleanField" : true,
                                 *       "release-dateField" : "2016-11-17T08:46:27.528Z",
                                 *       "categories-nodeListField" : [ {
                                 *         "uuid" : "e018cfc0112747aa98cfc01127a7aab5"
                                 *       }, {
                                 *         "uuid" : "49f5a34b8b08494db5a34b8b08494dc7"
                                 *       }, {
                                 *         "uuid" : "43ae39a5c8a14cfdae39a5c8a1ccfd76"
                                 *       } ],
                                 *       "names-stringListField" : [ "Jack", "Joe", "Mary", "Tom" ],
                                 *       "categoryIds-numberListField" : [ 1, 42, 133, 7 ],
                                 *       "binary-binaryField" : {
                                 *         "fileName" : "flower.jpg",
                                 *         "width" : 800,
                                 *         "height" : 600,
                                 *         "sha512sum" : "ec582eb760034dd91d5fd33656c0b56f082b7365d32e2a139dd9c87ebc192bff3525f32ff4c4137463a31cad020ac19e6e356508db2b90e32d737b6d725e14c1",
                                 *         "fileSize" : 95365,
                                 *         "mimeType" : "image/jpeg",
                                 *         "dominantColor" : "#22a7f0"
                                 *       },
                                 *       "location-micronodeField" : {
                                 *         "uuid" : "1732ef8bc8a74c07b2ef8bc8a7cc0769",
                                 *         "microschema" : {
                                 *           "name" : "geolocation",
                                 *           "uuid" : "0c62e2b8fc7741c6a2e2b8fc77b1c679"
                                 *         },
                                 *         "fields" : {
                                 *           "latitude" : 48.208330230278,
                                 *           "longitude" : 16.373063840833
                                 *         }
                                 *       },
                                 *       "locations-micronodeListField" : [ {
                                 *         "uuid" : "d8ee786d1a7d4ff9ae786d1a7d2ff989",
                                 *         "microschema" : {
                                 *           "name" : "geolocation",
                                 *           "uuid" : "88050a8160104147850a81601031470d"
                                 *         },
                                 *         "fields" : {
                                 *           "latitude" : 48.208330230278,
                                 *           "longitude" : 16.373063840833
                                 *         }
                                 *       }, {
                                 *         "uuid" : "966b88ae298d492aab88ae298df92afa",
                                 *         "microschema" : {
                                 *           "name" : "geolocation",
                                 *           "uuid" : "60582b964c4343e1982b964c4353e143"
                                 *         },
                                 *         "fields" : {
                                 *           "latitude" : 48.137222,
                                 *           "longitude" : 11.575556
                                 *         }
                                 *       } ]
                                 *     },
                                 *     "path" : "/api/v1/yourProject/webroot/Images",
                                 *     "breadcrumb" : [ {
                                 *       "uuid" : "cf97952aa3ab456797952aa3ab656720",
                                 *       "displayName" : "news",
                                 *       "path" : "/news"
                                 *     }, {
                                 *       "uuid" : "75928ef5f9954942928ef5f99519422a",
                                 *       "displayName" : "2015",
                                 *       "path" : "/news/2015"
                                 *     } ],
                                 *     "container" : false
                                 *   }, {
                                 *     "uuid" : "60348b68172045a0b48b681720b5a0e7",
                                 *     "creator" : {
                                 *       "lastName" : "Doe",
                                 *       "firstName" : "Joe",
                                 *       "uuid" : "f8682e4d226c4c68a82e4d226cfc68ab"
                                 *     },
                                 *     "created" : "2016-11-17T08:46:27.528Z",
                                 *     "editor" : {
                                 *       "lastName" : "Doe",
                                 *       "firstName" : "Joe",
                                 *       "uuid" : "cca43bcbf22447cda43bcbf224f7cdb9"
                                 *     },
                                 *     "edited" : "2016-11-17T08:46:27.528Z",
                                 *     "permissions" : [ "READ", "CREATE" ],
                                 *     "parentNode" : {
                                 *       "uuid" : "f0939276ae844861939276ae84686180",
                                 *       "displayName" : "parentNodeDisplayName"
                                 *     },
                                 *     "tags" : {
                                 *       "types" : {
                                 *         "items" : [ {
                                 *           "name" : "car",
                                 *           "uuid" : "fdd75a0dd3644262975a0dd364426260"
                                 *         }, {
                                 *           "name" : "ship",
                                 *           "uuid" : "61575cac826c46b2975cac826c06b27e"
                                 *         } ]
                                 *       },
                                 *       "colors" : {
                                 *         "items" : [ {
                                 *           "name" : "red",
                                 *           "uuid" : "11111508ac4648db911508ac4638db3c"
                                 *         }, {
                                 *           "name" : "green",
                                 *           "uuid" : "491b05483c894e6c9b05483c890e6c6e"
                                 *         } ]
                                 *       }
                                 *     },
                                 *     "childrenInfo" : { },
                                 *     "schema" : {
                                 *       "name" : "content",
                                 *       "uuid" : "934482fb80b145e78482fb80b1c5e76e",
                                 *       "version" : 1
                                 *     },
                                 *     "fields" : {
                                 *       "name" : "Name for language tag en",
                                 *       "filename" : "dummy-content.en.html",
                                 *       "teaser" : "Dummy teaser for en",
                                 *       "content" : "Content for language tag en"
                                 *     },
                                 *     "breadcrumb" : [ {
                                 *       "uuid" : "53fac923a253482fbac923a253c82fc2",
                                 *       "displayName" : "news",
                                 *       "path" : "/news"
                                 *     }, {
                                 *       "uuid" : "d2234033fedc466fa34033fedca66fff",
                                 *       "displayName" : "2015",
                                 *       "path" : "/news/2015"
                                 *     } ],
                                 *     "container" : false
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
                                    get: (query, token) => {
                                        return this.get(`/${project}/nodes/${nodeUuid}/children`, query, token);
                                    },
                                },
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
                                 *     "uuid" : "556a789306c440c8aa789306c480c82f",
                                 *     "creator" : {
                                 *       "lastName" : "Doe",
                                 *       "firstName" : "Joe",
                                 *       "uuid" : "82eefe077315435faefe077315b35faf"
                                 *     },
                                 *     "created" : "2016-11-17T08:46:27.530Z",
                                 *     "editor" : {
                                 *       "lastName" : "Doe",
                                 *       "firstName" : "Joe",
                                 *       "uuid" : "c070f253ccf24746b0f253ccf297463d"
                                 *     },
                                 *     "edited" : "2016-11-17T08:46:27.530Z",
                                 *     "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                                 *     "tagFamily" : {
                                 *       "name" : "colors",
                                 *       "uuid" : "de0b5ed5f2f6402e8b5ed5f2f6102ead"
                                 *     },
                                 *     "name" : "green"
                                 *   }, {
                                 *     "uuid" : "e73e37bd8b1d48ddbe37bd8b1dc8dd8f",
                                 *     "creator" : {
                                 *       "lastName" : "Doe",
                                 *       "firstName" : "Joe",
                                 *       "uuid" : "dda98548d49c4375a98548d49cd37500"
                                 *     },
                                 *     "created" : "2016-11-17T08:46:27.530Z",
                                 *     "editor" : {
                                 *       "lastName" : "Doe",
                                 *       "firstName" : "Joe",
                                 *       "uuid" : "31012aedfa6740a4812aedfa67e0a475"
                                 *     },
                                 *     "edited" : "2016-11-17T08:46:27.530Z",
                                 *     "permissions" : [ "READ", "CREATE" ],
                                 *     "tagFamily" : {
                                 *       "name" : "colors",
                                 *       "uuid" : "8252d7df193548e292d7df193528e2b1"
                                 *     },
                                 *     "name" : "Name for language tag en"
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
                                    get: (query, token) => {
                                        return this.get(`/${project}/nodes/${nodeUuid}/tags`, query, token);
                                    },
                                    /**
                                    * Resource /{project}/nodes/{nodeUuid}/tags/{tagUuid}
                                    *
                                    */
                                    tagUuid: (tagUuid) => {
                                        return {
                                            /**
                                         * Method post
                                         * Assign the given tag to the node.
                                         * Example
                                         * {
                                         *   "uuid" : "f015ba7b8266483495ba7b8266d83485",
                                         *   "creator" : {
                                         *     "lastName" : "Doe",
                                         *     "firstName" : "Joe",
                                         *     "uuid" : "1ff97889391547dfb97889391567dfaf"
                                         *   },
                                         *   "created" : "2016-11-17T08:46:27.531Z",
                                         *   "editor" : {
                                         *     "lastName" : "Doe",
                                         *     "firstName" : "Joe",
                                         *     "uuid" : "f595b17e23ea478f95b17e23ea278fce"
                                         *   },
                                         *   "edited" : "2016-11-17T08:46:27.531Z",
                                         *   "permissions" : [ "READ", "CREATE" ],
                                         *   "parentNode" : {
                                         *     "uuid" : "b17f9e31efab4732bf9e31efab2732ed",
                                         *     "displayName" : "parentNodeDisplayName"
                                         *   },
                                         *   "tags" : {
                                         *     "types" : {
                                         *       "items" : [ {
                                         *         "name" : "car",
                                         *         "uuid" : "9a7e7b939fed497fbe7b939fed597f8a"
                                         *       }, {
                                         *         "name" : "ship",
                                         *         "uuid" : "17182d5fe64d4487982d5fe64d9487ae"
                                         *       } ]
                                         *     },
                                         *     "colors" : {
                                         *       "items" : [ {
                                         *         "name" : "red",
                                         *         "uuid" : "b167bc965f1e44d0a7bc965f1ec4d031"
                                         *       }, {
                                         *         "name" : "green",
                                         *         "uuid" : "7e5b051a84374b8d9b051a8437cb8d32"
                                         *       } ]
                                         *     }
                                         *   },
                                         *   "childrenInfo" : { },
                                         *   "schema" : {
                                         *     "name" : "content",
                                         *     "uuid" : "d222019c2d144cd2a2019c2d145cd22f",
                                         *     "version" : 1
                                         *   },
                                         *   "fields" : {
                                         *     "name" : "Name for language tag en",
                                         *     "filename" : "dummy-content.en.html",
                                         *     "teaser" : "Dummy teaser for en",
                                         *     "content" : "Content for language tag en"
                                         *   },
                                         *   "breadcrumb" : [ {
                                         *     "uuid" : "9a8f8163baea43768f8163baeae37629",
                                         *     "displayName" : "news",
                                         *     "path" : "/news"
                                         *   }, {
                                         *     "uuid" : "7316d0224f32443f96d0224f32f43f1a",
                                         *     "displayName" : "2015",
                                         *     "path" : "/news/2015"
                                         *   } ],
                                         *   "container" : false
                                         * }
                                         *
                                         */
                                            post: (data, query, token) => {
                                                return this.post(`/${project}/nodes/${nodeUuid}/tags/${tagUuid}`, data, query, token);
                                            },
                                            /**
                                             * Method delete
                                             * Remove the given tag from the node.
                                             * Example
                                             *
                                             */
                                            delete: (token) => {
                                                return this.delete(`/${project}/nodes/${nodeUuid}/tags/${tagUuid}`, token);
                                            },
                                        };
                                    }
                                },
                                /**
                                    * Resource /{project}/nodes/{nodeUuid}/moveTo
                                    *
                                    */
                                moveTo: {
                                    /**
                                    * Resource /{project}/nodes/{nodeUuid}/moveTo/{toUuid}
                                    *
                                    */
                                    toUuid: (toUuid) => {
                                        return {
                                            /**
                                         * Method post
                                         * Move the node into the target node.
                                         * Example
                                         *
                                         */
                                            post: (data, query, token) => {
                                                return this.post(`/${project}/nodes/${nodeUuid}/moveTo/${toUuid}`, data, query, token);
                                            },
                                        };
                                    }
                                },
                                /**
                                    * Resource /{project}/nodes/{nodeUuid}/languages
                                    *
                                    */
                                languages: {
                                    /**
                                    * Resource /{project}/nodes/{nodeUuid}/languages/{language}
                                    *
                                    */
                                    language: (language) => {
                                        return {
                                            /**
                                         * Method delete
                                         * Delete the language specific content of the node.
                                         * Example
                                         *
                                         */
                                            delete: (token) => {
                                                return this.delete(`/${project}/nodes/${nodeUuid}/languages/${language}`, token);
                                            },
                                            /**
                                            * Resource /{project}/nodes/{nodeUuid}/languages/{language}/fields
                                            *
                                            */
                                            fields: {
                                                /**
                                                * Resource /{project}/nodes/{nodeUuid}/languages/{language}/fields/{field}
                                                *
                                                */
                                                field: (field) => {
                                                    return {
                                                        /**
                                                     * Method post
                                                     * Create a new field with the given name.
                                                     * Example
                                                     *
                                                     */
                                                        post: (data, query, token) => {
                                                            return this.post(`/${project}/nodes/${nodeUuid}/languages/${language}/fields/${field}`, data, query, token);
                                                        },
                                                        /**
                                                         * Method get
                                                         * Load the field with the given name.
                                                         * Example
                                                         *
                                                         */
                                                        get: (query, token) => {
                                                            return this.get(`/${project}/nodes/${nodeUuid}/languages/${language}/fields/${field}`, query, token);
                                                        },
                                                        /**
                                                         * Method delete
                                                         * Delete the field with the given name
                                                         * Example
                                                         *
                                                         */
                                                        delete: (token) => {
                                                            return this.delete(`/${project}/nodes/${nodeUuid}/languages/${language}/fields/${field}`, token);
                                                        },
                                                        /**
                                                        * Resource /{project}/nodes/{nodeUuid}/languages/{language}/fields/{field}/transform
                                                        *
                                                        */
                                                        transform: {
                                                            /**
                                                         * Method post
                                                         * Transform the image with the given field name and overwrite the stored image with the transformation result.
                                                         * Example
                                                         * {
                                                         *   "message" : "I18n message"
                                                         * }
                                                         *
                                                         */
                                                            post: (data, query, token) => {
                                                                return this.post(`/${project}/nodes/${nodeUuid}/languages/${language}/fields/${field}/transform`, data, query, token);
                                                            },
                                                        },
                                                        /**
                                                            * Resource /{project}/nodes/{nodeUuid}/languages/{language}/fields/{field}/{itemIndex}
                                                            *
                                                            */
                                                        itemIndex: (itemIndex) => {
                                                            return {
                                                                /**
                                                             * Method delete
                                                             * Delete the field list item at the given index position (Not yet implemented)
                                                             * Example
                                                             * {
                                                             *   "message" : "I18n message"
                                                             * }
                                                             *
                                                             */
                                                                delete: (token) => {
                                                                    return this.delete(`/${project}/nodes/${nodeUuid}/languages/${language}/fields/${field}/${itemIndex}`, token);
                                                                },
                                                                /**
                                                                 * Method get
                                                                 * Load the field list item at the given index position. (Not yet implemented)
                                                                 * Example
                                                                 * {
                                                                 *   "message" : "I18n message"
                                                                 * }
                                                                 *
                                                                 */
                                                                get: (query, token) => {
                                                                    return this.get(`/${project}/nodes/${nodeUuid}/languages/${language}/fields/${field}/${itemIndex}`, query, token);
                                                                },
                                                                /**
                                                                 * Method post
                                                                 * Update the field list item at the given index position. (Not yet implemented)
                                                                 * Example
                                                                 *
                                                                 */
                                                                post: (data, query, token) => {
                                                                    return this.post(`/${project}/nodes/${nodeUuid}/languages/${language}/fields/${field}/${itemIndex}`, data, query, token);
                                                                },
                                                                /**
                                                                * Resource /{project}/nodes/{nodeUuid}/languages/{language}/fields/{field}/{itemIndex}/move
                                                                *
                                                                */
                                                                move: {
                                                                    /**
                                                                    * Resource /{project}/nodes/{nodeUuid}/languages/{language}/fields/{field}/{itemIndex}/move/{newItemIndex}
                                                                    *
                                                                    */
                                                                    newItemIndex: (newItemIndex) => {
                                                                        return {
                                                                            /**
                                                                         * Method post
                                                                         * Move the field list item on a new index position. (Not yet implemented)
                                                                         * Example
                                                                         *
                                                                         */
                                                                            post: (data, query, token) => {
                                                                                return this.post(`/${project}/nodes/${nodeUuid}/languages/${language}/fields/${field}/${itemIndex}/move/${newItemIndex}`, data, query, token);
                                                                            },
                                                                        };
                                                                    }
                                                                }
                                                            };
                                                        }
                                                    };
                                                }
                                            },
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
                                             *     "uuid" : "3dc1527ba1e545de81527ba1e525dea5",
                                             *     "number" : "3.0"
                                             *   },
                                             *   "publisher" : {
                                             *     "lastName" : "Doe",
                                             *     "firstName" : "Joe",
                                             *     "uuid" : "9e316950794d4949b16950794d294937"
                                             *   },
                                             *   "publishDate" : "2016-11-17T08:46:27.545Z"
                                             * }
                                             *
                                             */
                                                get: (query, token) => {
                                                    return this.get(`/${project}/nodes/${nodeUuid}/languages/${language}/published`, query, token);
                                                },
                                            }
                                        };
                                    }
                                },
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
                                 *   "root" : {
                                 *     "uuid" : "63981a00739344de981a00739374de6f"
                                 *   }
                                 * }
                                 *
                                 */
                                    get: (query, token) => {
                                        return this.get(`/${project}/nodes/${nodeUuid}/navigation`, query, token);
                                    },
                                },
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
                                 *         "uuid" : "ba1c2ffd492f44a19c2ffd492fe4a10b",
                                 *         "number" : "0.4"
                                 *       }
                                 *     },
                                 *     "en" : {
                                 *       "published" : true,
                                 *       "version" : {
                                 *         "uuid" : "a01ad40d1ac04ec19ad40d1ac0eec175",
                                 *         "number" : "3.0"
                                 *       },
                                 *       "publisher" : {
                                 *         "lastName" : "Doe",
                                 *         "firstName" : "Joe",
                                 *         "uuid" : "a4dfd835561d42d99fd835561d52d9bf"
                                 *       },
                                 *       "publishDate" : "2016-11-17T08:46:27.540Z"
                                 *     },
                                 *     "fr" : {
                                 *       "published" : false,
                                 *       "version" : {
                                 *         "uuid" : "7a9380f8c72c41e89380f8c72c01e8e4",
                                 *         "number" : "5.2"
                                 *       }
                                 *     }
                                 *   }
                                 * }
                                 *
                                 */
                                    get: (query, token) => {
                                        return this.get(`/${project}/nodes/${nodeUuid}/published`, query, token);
                                    },
                                    /**
                                     * Method post
                                     * Publish the node with the given uuid.
                                     * Example
                                     * {
                                     *   "availableLanguages" : {
                                     *     "de" : {
                                     *       "published" : false,
                                     *       "version" : {
                                     *         "uuid" : "b85298e964bd4ed99298e964bdfed919",
                                     *         "number" : "0.4"
                                     *       }
                                     *     },
                                     *     "en" : {
                                     *       "published" : true,
                                     *       "version" : {
                                     *         "uuid" : "f9bea15eeeef4801bea15eeeefe801bd",
                                     *         "number" : "3.0"
                                     *       },
                                     *       "publisher" : {
                                     *         "lastName" : "Doe",
                                     *         "firstName" : "Joe",
                                     *         "uuid" : "b0694f88b37a4edea94f88b37abede7a"
                                     *       },
                                     *       "publishDate" : "2016-11-17T08:46:27.543Z"
                                     *     },
                                     *     "fr" : {
                                     *       "published" : false,
                                     *       "version" : {
                                     *         "uuid" : "93e63c01146c4ae3a63c01146cfae353",
                                     *         "number" : "5.2"
                                     *       }
                                     *     }
                                     *   }
                                     * }
                                     *
                                     */
                                    post: (data, query, token) => {
                                        return this.post(`/${project}/nodes/${nodeUuid}/published`, data, query, token);
                                    },
                                    /**
                                     * Method delete
                                     * Unpublish the given node.
                                     * Example
                                     *
                                     */
                                    delete: (token) => {
                                        return this.delete(`/${project}/nodes/${nodeUuid}/published`, token);
                                    },
                                }
                            };
                        }
                    },
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
                     *       "lastName" : "Doe",
                     *       "firstName" : "Joe",
                     *       "uuid" : "1af0d92240334b3fb0d92240337b3f36"
                     *     },
                     *     "created" : "2016-11-17T08:46:27.573Z",
                     *     "editor" : {
                     *       "lastName" : "Doe",
                     *       "firstName" : "Joe",
                     *       "uuid" : "ab64754d0c11400ba4754d0c11b00b9d"
                     *     },
                     *     "edited" : "2016-11-17T08:46:27.573Z",
                     *     "permissions" : [ "READ", "CREATE", "UPDATE" ],
                     *     "name" : "Colors"
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
                        get: (query, token) => {
                            return this.get(`/${project}/tagFamilies`, query, token);
                        },
                        /**
                         * Method post
                         * Create a new tag family.
                         * Example
                         * {
                         *   "creator" : {
                         *     "lastName" : "Doe",
                         *     "firstName" : "Joe",
                         *     "uuid" : "db5886d740cc402f9886d740cc202fd8"
                         *   },
                         *   "created" : "2016-11-17T08:46:27.573Z",
                         *   "editor" : {
                         *     "lastName" : "Doe",
                         *     "firstName" : "Joe",
                         *     "uuid" : "aed7206c9e3540c797206c9e3530c7ff"
                         *   },
                         *   "edited" : "2016-11-17T08:46:27.573Z",
                         *   "permissions" : [ "READ", "CREATE", "UPDATE" ],
                         *   "name" : "Colors"
                         * }
                         *
                         */
                        post: (data, query, token) => {
                            return this.post(`/${project}/tagFamilies`, data, query, token);
                        },
                        /**
                        * Resource /{project}/tagFamilies/{tagFamilyUuid}
                        *
                        */
                        tagFamilyUuid: (tagFamilyUuid) => {
                            return {
                                /**
                             * Method get
                             * Read the tag family with the given uuid.
                             * Example
                             * {
                             *   "creator" : {
                             *     "lastName" : "Doe",
                             *     "firstName" : "Joe",
                             *     "uuid" : "5fcc96ff15c640558c96ff15c6805596"
                             *   },
                             *   "created" : "2016-11-17T08:46:27.572Z",
                             *   "editor" : {
                             *     "lastName" : "Doe",
                             *     "firstName" : "Joe",
                             *     "uuid" : "34e571a369714b6ca571a369716b6cd7"
                             *   },
                             *   "edited" : "2016-11-17T08:46:27.572Z",
                             *   "permissions" : [ "READ", "CREATE", "UPDATE" ],
                             *   "name" : "Colors"
                             * }
                             *
                             */
                                get: (query, token) => {
                                    return this.get(`/${project}/tagFamilies/${tagFamilyUuid}`, query, token);
                                },
                                /**
                                 * Method post
                                 * Update the tag family with the given uuid.
                                 * Example
                                 * {
                                 *   "creator" : {
                                 *     "lastName" : "Doe",
                                 *     "firstName" : "Joe",
                                 *     "uuid" : "0b837564b797432d837564b797e32d51"
                                 *   },
                                 *   "created" : "2016-11-17T08:46:27.574Z",
                                 *   "editor" : {
                                 *     "lastName" : "Doe",
                                 *     "firstName" : "Joe",
                                 *     "uuid" : "48635a5f8d4e4856a35a5f8d4ed8566f"
                                 *   },
                                 *   "edited" : "2016-11-17T08:46:27.574Z",
                                 *   "permissions" : [ "READ", "CREATE", "UPDATE" ],
                                 *   "name" : "Nicer colors"
                                 * }
                                 *
                                 */
                                post: (data, query, token) => {
                                    return this.post(`/${project}/tagFamilies/${tagFamilyUuid}`, data, query, token);
                                },
                                /**
                                 * Method delete
                                 * Delete the tag family.
                                 * Example
                                 *
                                 */
                                delete: (token) => {
                                    return this.delete(`/${project}/tagFamilies/${tagFamilyUuid}`, token);
                                },
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
                                 *     "uuid" : "43c3b42922944e2b83b42922945e2b4a",
                                 *     "creator" : {
                                 *       "lastName" : "Doe",
                                 *       "firstName" : "Joe",
                                 *       "uuid" : "82f360ee7d134882b360ee7d13888269"
                                 *     },
                                 *     "created" : "2016-11-17T08:46:27.576Z",
                                 *     "editor" : {
                                 *       "lastName" : "Doe",
                                 *       "firstName" : "Joe",
                                 *       "uuid" : "98b96770fbaf4bc1b96770fbafdbc11a"
                                 *     },
                                 *     "edited" : "2016-11-17T08:46:27.576Z",
                                 *     "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                                 *     "tagFamily" : {
                                 *       "name" : "colors",
                                 *       "uuid" : "3753a885d0b2493593a885d0b27935b8"
                                 *     },
                                 *     "name" : "green"
                                 *   }, {
                                 *     "uuid" : "5ce109c761c34e56a109c761c3fe5629",
                                 *     "creator" : {
                                 *       "lastName" : "Doe",
                                 *       "firstName" : "Joe",
                                 *       "uuid" : "0d69f864b4c3439ba9f864b4c3d39b97"
                                 *     },
                                 *     "created" : "2016-11-17T08:46:27.576Z",
                                 *     "editor" : {
                                 *       "lastName" : "Doe",
                                 *       "firstName" : "Joe",
                                 *       "uuid" : "fb8e5413f83c42bd8e5413f83cf2bdc5"
                                 *     },
                                 *     "edited" : "2016-11-17T08:46:27.576Z",
                                 *     "permissions" : [ "READ", "CREATE" ],
                                 *     "tagFamily" : {
                                 *       "name" : "colors",
                                 *       "uuid" : "3c1e69fcbb07441a9e69fcbb07d41a61"
                                 *     },
                                 *     "name" : "Name for language tag en"
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
                                    get: (query, token) => {
                                        return this.get(`/${project}/tagFamilies/${tagFamilyUuid}/tags`, query, token);
                                    },
                                    /**
                                    * Resource /{project}/tagFamilies/{tagFamilyUuid}/tags/{tagUuid}
                                    *
                                    */
                                    tagUuid: (tagUuid) => {
                                        return {
                                            /**
                                         * Method get
                                         * Read the specified tag from the tag family.
                                         * Example
                                         * {
                                         *   "uuid" : "68d95a203e844ad4995a203e84ead40d",
                                         *   "creator" : {
                                         *     "lastName" : "Doe",
                                         *     "firstName" : "Joe",
                                         *     "uuid" : "603cebff2f444225bcebff2f444225a7"
                                         *   },
                                         *   "created" : "2016-11-17T08:46:27.575Z",
                                         *   "editor" : {
                                         *     "lastName" : "Doe",
                                         *     "firstName" : "Joe",
                                         *     "uuid" : "d6b8a538bfa14362b8a538bfa1a36275"
                                         *   },
                                         *   "edited" : "2016-11-17T08:46:27.575Z",
                                         *   "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                                         *   "tagFamily" : {
                                         *     "name" : "colors",
                                         *     "uuid" : "4ab7eb7aad7a46a1b7eb7aad7ae6a150"
                                         *   },
                                         *   "name" : "red"
                                         * }
                                         *
                                         */
                                            get: (query, token) => {
                                                return this.get(`/${project}/tagFamilies/${tagFamilyUuid}/tags/${tagUuid}`, query, token);
                                            },
                                            /**
                                             * Method post
                                             * Update the specified tag
                                             * Example
                                             * {
                                             *   "uuid" : "2077331ae7bd4eaeb7331ae7bdaeae27",
                                             *   "creator" : {
                                             *     "lastName" : "Doe",
                                             *     "firstName" : "Joe",
                                             *     "uuid" : "e45c0847b62545599c0847b625455928"
                                             *   },
                                             *   "created" : "2016-11-17T08:46:27.577Z",
                                             *   "editor" : {
                                             *     "lastName" : "Doe",
                                             *     "firstName" : "Joe",
                                             *     "uuid" : "cbbc27697a22405dbc27697a22c05d32"
                                             *   },
                                             *   "edited" : "2016-11-17T08:46:27.577Z",
                                             *   "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                                             *   "tagFamily" : {
                                             *     "name" : "colors",
                                             *     "uuid" : "9de78ea641a54f7ca78ea641a5bf7c80"
                                             *   },
                                             *   "name" : "Red"
                                             * }
                                             *
                                             */
                                            post: (data, query, token) => {
                                                return this.post(`/${project}/tagFamilies/${tagFamilyUuid}/tags/${tagUuid}`, data, query, token);
                                            },
                                            /**
                                             * Method delete
                                             * Remove the tag from the tag family.
                                             * Example
                                             *
                                             */
                                            delete: (token) => {
                                                return this.delete(`/${project}/tagFamilies/${tagFamilyUuid}/tags/${tagUuid}`, token);
                                            },
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
                                             *     "uuid" : "656c3b153ddc4f9cac3b153ddc1f9cbe",
                                             *     "creator" : {
                                             *       "lastName" : "Doe",
                                             *       "firstName" : "Joe",
                                             *       "uuid" : "842ef59f59b74805aef59f59b74805e8"
                                             *     },
                                             *     "created" : "2016-11-17T08:46:27.579Z",
                                             *     "edited" : "2016-11-17T08:46:27.579Z",
                                             *     "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                                             *     "availableLanguages" : [ "en", "de" ],
                                             *     "languagePaths" : {
                                             *       "de" : "/api/v1/yourProject/webroot/Bilder",
                                             *       "en" : "/api/v1/yourProject/webroot/Images"
                                             *     },
                                             *     "parentNode" : {
                                             *       "uuid" : "90534c4b4cd2433a934c4b4cd2833a81",
                                             *       "displayName" : "parentNodeDisplayName"
                                             *     },
                                             *     "tags" : {
                                             *       "types" : {
                                             *         "items" : [ {
                                             *           "name" : "car",
                                             *           "uuid" : "67fb6082394b481fbb6082394b881ffc"
                                             *         }, {
                                             *           "name" : "ship",
                                             *           "uuid" : "3b4014cab9234d008014cab9235d0003"
                                             *         } ]
                                             *       },
                                             *       "colors" : {
                                             *         "items" : [ {
                                             *           "name" : "red",
                                             *           "uuid" : "f047955d9f4f48bf87955d9f4f58bf6f"
                                             *         }, {
                                             *           "name" : "green",
                                             *           "uuid" : "eac589befd3743388589befd37c33865"
                                             *         } ]
                                             *       }
                                             *     },
                                             *     "childrenInfo" : {
                                             *       "folder" : {
                                             *         "schemaUuid" : "dfdaa9f9abec43889aa9f9abec8388f4",
                                             *         "count" : 5
                                             *       },
                                             *       "blogpost" : {
                                             *         "schemaUuid" : "4fc0ac493268437a80ac493268137a16",
                                             *         "count" : 1
                                             *       }
                                             *     },
                                             *     "schema" : {
                                             *       "name" : "content",
                                             *       "uuid" : "41ce56f1e95541df8e56f1e95531df54",
                                             *       "version" : 1
                                             *     },
                                             *     "fields" : {
                                             *       "name-stringField" : "Name for language tag de-DE",
                                             *       "filename-stringField" : "dummy-content.de.html",
                                             *       "teaser-stringField" : "Dummy teaser for de-DE",
                                             *       "content-htmlField" : "Content for language tag de-DE",
                                             *       "relatedProduct-nodeField" : {
                                             *         "uuid" : "932bdd90bad143e2abdd90bad1a3e27f"
                                             *       },
                                             *       "price-numberField" : 100.1,
                                             *       "enabled-booleanField" : true,
                                             *       "release-dateField" : "2016-11-17T08:46:27.579Z",
                                             *       "categories-nodeListField" : [ {
                                             *         "uuid" : "01029101bfc0424f829101bfc0124fcd"
                                             *       }, {
                                             *         "uuid" : "b499aa0b49e04f1b99aa0b49e05f1bb8"
                                             *       }, {
                                             *         "uuid" : "988eb656568742558eb65656876255f0"
                                             *       } ],
                                             *       "names-stringListField" : [ "Jack", "Joe", "Mary", "Tom" ],
                                             *       "categoryIds-numberListField" : [ 1, 42, 133, 7 ],
                                             *       "binary-binaryField" : {
                                             *         "fileName" : "flower.jpg",
                                             *         "width" : 800,
                                             *         "height" : 600,
                                             *         "sha512sum" : "ec582eb760034dd91d5fd33656c0b56f082b7365d32e2a139dd9c87ebc192bff3525f32ff4c4137463a31cad020ac19e6e356508db2b90e32d737b6d725e14c1",
                                             *         "fileSize" : 95365,
                                             *         "mimeType" : "image/jpeg",
                                             *         "dominantColor" : "#22a7f0"
                                             *       },
                                             *       "location-micronodeField" : {
                                             *         "uuid" : "1b7520f10d354725b520f10d35e72558",
                                             *         "microschema" : {
                                             *           "name" : "geolocation",
                                             *           "uuid" : "28c7b79fa9ec440087b79fa9ecc400cd"
                                             *         },
                                             *         "fields" : {
                                             *           "latitude" : 48.208330230278,
                                             *           "longitude" : 16.373063840833
                                             *         }
                                             *       },
                                             *       "locations-micronodeListField" : [ {
                                             *         "uuid" : "2bfe2a15a7794e31be2a15a779fe3107",
                                             *         "microschema" : {
                                             *           "name" : "geolocation",
                                             *           "uuid" : "a4dba464682b43af9ba464682bf3afa3"
                                             *         },
                                             *         "fields" : {
                                             *           "latitude" : 48.208330230278,
                                             *           "longitude" : 16.373063840833
                                             *         }
                                             *       }, {
                                             *         "uuid" : "d2637873149340e0a37873149320e074",
                                             *         "microschema" : {
                                             *           "name" : "geolocation",
                                             *           "uuid" : "e1a9d2294e514d5fa9d2294e519d5f67"
                                             *         },
                                             *         "fields" : {
                                             *           "latitude" : 48.137222,
                                             *           "longitude" : 11.575556
                                             *         }
                                             *       } ]
                                             *     },
                                             *     "path" : "/api/v1/yourProject/webroot/Images",
                                             *     "breadcrumb" : [ {
                                             *       "uuid" : "2e09ab483336417689ab483336b176e4",
                                             *       "displayName" : "news",
                                             *       "path" : "/news"
                                             *     }, {
                                             *       "uuid" : "986997674b934329a997674b9333298f",
                                             *       "displayName" : "2015",
                                             *       "path" : "/news/2015"
                                             *     } ],
                                             *     "container" : false
                                             *   }, {
                                             *     "uuid" : "4bf66acc656348bbb66acc6563a8bb29",
                                             *     "creator" : {
                                             *       "lastName" : "Doe",
                                             *       "firstName" : "Joe",
                                             *       "uuid" : "96ef96ec9714486faf96ec9714686f6c"
                                             *     },
                                             *     "created" : "2016-11-17T08:46:27.579Z",
                                             *     "editor" : {
                                             *       "lastName" : "Doe",
                                             *       "firstName" : "Joe",
                                             *       "uuid" : "389fff64a2aa464e9fff64a2aa764ef1"
                                             *     },
                                             *     "edited" : "2016-11-17T08:46:27.579Z",
                                             *     "permissions" : [ "READ", "CREATE" ],
                                             *     "parentNode" : {
                                             *       "uuid" : "124fc1c7873449798fc1c78734597984",
                                             *       "displayName" : "parentNodeDisplayName"
                                             *     },
                                             *     "tags" : {
                                             *       "types" : {
                                             *         "items" : [ {
                                             *           "name" : "car",
                                             *           "uuid" : "2f3487aeac32488bb487aeac32888bff"
                                             *         }, {
                                             *           "name" : "ship",
                                             *           "uuid" : "23409766539f4ee4809766539f9ee421"
                                             *         } ]
                                             *       },
                                             *       "colors" : {
                                             *         "items" : [ {
                                             *           "name" : "red",
                                             *           "uuid" : "8cd10c3c81de436f910c3c81de436f1f"
                                             *         }, {
                                             *           "name" : "green",
                                             *           "uuid" : "bf283fd61f7d4bd7a83fd61f7d0bd751"
                                             *         } ]
                                             *       }
                                             *     },
                                             *     "childrenInfo" : { },
                                             *     "schema" : {
                                             *       "name" : "content",
                                             *       "uuid" : "b5c6747176334d738674717633fd7301",
                                             *       "version" : 1
                                             *     },
                                             *     "fields" : {
                                             *       "name" : "Name for language tag en",
                                             *       "filename" : "dummy-content.en.html",
                                             *       "teaser" : "Dummy teaser for en",
                                             *       "content" : "Content for language tag en"
                                             *     },
                                             *     "breadcrumb" : [ {
                                             *       "uuid" : "815d25e6d83f43459d25e6d83fe345a5",
                                             *       "displayName" : "news",
                                             *       "path" : "/news"
                                             *     }, {
                                             *       "uuid" : "a7a83732cc834626a83732cc837626ca",
                                             *       "displayName" : "2015",
                                             *       "path" : "/news/2015"
                                             *     } ],
                                             *     "container" : false
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
                                                get: (query, token) => {
                                                    return this.get(`/${project}/tagFamilies/${tagFamilyUuid}/tags/${tagUuid}/nodes`, query, token);
                                                },
                                            }
                                        };
                                    }
                                }
                            };
                        }
                    },
                    /**
                        * Resource /{project}/navroot
                        * Provides an endpoint which can be used to retrieve a navigation response
                        */
                    navroot: {
                        /**
                        * Resource /{project}/navroot/{path}
                        *
                        */
                        path: (path) => {
                            return {
                                /**
                             * Method get
                             * Return a navigation for the node which is located using the given path.
                             * Example
                             * {
                             *   "root" : {
                             *     "uuid" : "b1bfc7516b7c4105bfc7516b7c6105d3",
                             *     "node" : {
                             *       "uuid" : "b1bfc7516b7c4105bfc7516b7c6105d3",
                             *       "creator" : {
                             *         "lastName" : "Doe",
                             *         "firstName" : "Joe",
                             *         "uuid" : "bc9818b4b9ea437f9818b4b9ea237fe8"
                             *       },
                             *       "created" : "2016-11-17T08:46:27.600Z",
                             *       "edited" : "2016-11-17T08:46:27.600Z",
                             *       "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                             *       "availableLanguages" : [ "en", "de" ],
                             *       "languagePaths" : {
                             *         "de" : "/api/v1/yourProject/webroot/Bilder",
                             *         "en" : "/api/v1/yourProject/webroot/Images"
                             *       },
                             *       "parentNode" : {
                             *         "uuid" : "7554b3977f814b7994b3977f814b79ae",
                             *         "displayName" : "parentNodeDisplayName"
                             *       },
                             *       "tags" : {
                             *         "types" : {
                             *           "items" : [ {
                             *             "name" : "car",
                             *             "uuid" : "2bffc6fc249c4e0cbfc6fc249c9e0ce8"
                             *           }, {
                             *             "name" : "ship",
                             *             "uuid" : "6990d808fd344b6690d808fd346b6600"
                             *           } ]
                             *         },
                             *         "colors" : {
                             *           "items" : [ {
                             *             "name" : "red",
                             *             "uuid" : "e2df24cd96444d9b9f24cd9644fd9bd1"
                             *           }, {
                             *             "name" : "green",
                             *             "uuid" : "9bad4c64bf84483aad4c64bf84283af9"
                             *           } ]
                             *         }
                             *       },
                             *       "childrenInfo" : {
                             *         "folder" : {
                             *           "schemaUuid" : "54f0d380e2d14e91b0d380e2d14e915e",
                             *           "count" : 5
                             *         },
                             *         "blogpost" : {
                             *           "schemaUuid" : "d77637c5255f4be8b637c5255f8be8e6",
                             *           "count" : 1
                             *         }
                             *       },
                             *       "schema" : {
                             *         "name" : "content",
                             *         "uuid" : "cb3f73f5c9764552bf73f5c9768552ce",
                             *         "version" : 1
                             *       },
                             *       "fields" : {
                             *         "name-stringField" : "Name for language tag de-DE",
                             *         "filename-stringField" : "dummy-content.de.html",
                             *         "teaser-stringField" : "Dummy teaser for de-DE",
                             *         "content-htmlField" : "Content for language tag de-DE",
                             *         "relatedProduct-nodeField" : {
                             *           "uuid" : "6b896d8243464558896d824346e5581f"
                             *         },
                             *         "price-numberField" : 100.1,
                             *         "enabled-booleanField" : true,
                             *         "release-dateField" : "2016-11-17T08:46:27.600Z",
                             *         "categories-nodeListField" : [ {
                             *           "uuid" : "9a1cd274ca724b8d9cd274ca726b8dc0"
                             *         }, {
                             *           "uuid" : "f47b9b253c0243c4bb9b253c02c3c4c3"
                             *         }, {
                             *           "uuid" : "45796cafd1974da0b96cafd1972da033"
                             *         } ],
                             *         "names-stringListField" : [ "Jack", "Joe", "Mary", "Tom" ],
                             *         "categoryIds-numberListField" : [ 1, 42, 133, 7 ],
                             *         "binary-binaryField" : {
                             *           "fileName" : "flower.jpg",
                             *           "width" : 800,
                             *           "height" : 600,
                             *           "sha512sum" : "ec582eb760034dd91d5fd33656c0b56f082b7365d32e2a139dd9c87ebc192bff3525f32ff4c4137463a31cad020ac19e6e356508db2b90e32d737b6d725e14c1",
                             *           "fileSize" : 95365,
                             *           "mimeType" : "image/jpeg",
                             *           "dominantColor" : "#22a7f0"
                             *         },
                             *         "location-micronodeField" : {
                             *           "uuid" : "6b66de06f8014236a6de06f801f2360d",
                             *           "microschema" : {
                             *             "name" : "geolocation",
                             *             "uuid" : "f00dd8e011904f5f8dd8e011909f5fee"
                             *           },
                             *           "fields" : {
                             *             "latitude" : 48.208330230278,
                             *             "longitude" : 16.373063840833
                             *           }
                             *         },
                             *         "locations-micronodeListField" : [ {
                             *           "uuid" : "a4f7925d5fab44f2b7925d5fab04f282",
                             *           "microschema" : {
                             *             "name" : "geolocation",
                             *             "uuid" : "899993bdbdae4f8d9993bdbdaeaf8d38"
                             *           },
                             *           "fields" : {
                             *             "latitude" : 48.208330230278,
                             *             "longitude" : 16.373063840833
                             *           }
                             *         }, {
                             *           "uuid" : "96c248421d0a4c658248421d0aec6542",
                             *           "microschema" : {
                             *             "name" : "geolocation",
                             *             "uuid" : "4b2767ff548a43c1a767ff548a83c158"
                             *           },
                             *           "fields" : {
                             *             "latitude" : 48.137222,
                             *             "longitude" : 11.575556
                             *           }
                             *         } ]
                             *       },
                             *       "path" : "/api/v1/yourProject/webroot/Images",
                             *       "breadcrumb" : [ {
                             *         "uuid" : "193b235498bb41fcbb235498bb31fcba",
                             *         "displayName" : "news",
                             *         "path" : "/news"
                             *       }, {
                             *         "uuid" : "a082e7b55f4b4f0482e7b55f4bff04ba",
                             *         "displayName" : "2015",
                             *         "path" : "/news/2015"
                             *       } ],
                             *       "container" : false
                             *     },
                             *     "children" : [ {
                             *       "uuid" : "f835b4135f0845d2b5b4135f0815d2eb",
                             *       "node" : {
                             *         "uuid" : "f835b4135f0845d2b5b4135f0815d2eb",
                             *         "creator" : {
                             *           "lastName" : "Doe",
                             *           "firstName" : "Joe",
                             *           "uuid" : "bd1787d0e9e74c239787d0e9e72c2336"
                             *         },
                             *         "created" : "2016-11-17T08:46:27.600Z",
                             *         "edited" : "2016-11-17T08:46:27.600Z",
                             *         "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                             *         "availableLanguages" : [ "en", "de" ],
                             *         "languagePaths" : {
                             *           "de" : "/api/v1/yourProject/webroot/Bilder",
                             *           "en" : "/api/v1/yourProject/webroot/Images"
                             *         },
                             *         "parentNode" : {
                             *           "uuid" : "2a98f992a91b4b4698f992a91bab46ed",
                             *           "displayName" : "parentNodeDisplayName"
                             *         },
                             *         "tags" : {
                             *           "types" : {
                             *             "items" : [ {
                             *               "name" : "car",
                             *               "uuid" : "b95877583cc340ea9877583cc3c0ea2b"
                             *             }, {
                             *               "name" : "ship",
                             *               "uuid" : "61c6414e883744d486414e883704d4d5"
                             *             } ]
                             *           },
                             *           "colors" : {
                             *             "items" : [ {
                             *               "name" : "red",
                             *               "uuid" : "30b541bbfbfd490db541bbfbfd090d97"
                             *             }, {
                             *               "name" : "green",
                             *               "uuid" : "00d1e76b720044eb91e76b720094eba7"
                             *             } ]
                             *           }
                             *         },
                             *         "childrenInfo" : {
                             *           "folder" : {
                             *             "schemaUuid" : "83da2196ced144029a2196ced1540207",
                             *             "count" : 5
                             *           },
                             *           "blogpost" : {
                             *             "schemaUuid" : "041e3c087804481e9e3c087804281e95",
                             *             "count" : 1
                             *           }
                             *         },
                             *         "schema" : {
                             *           "name" : "content",
                             *           "uuid" : "11f525a29f904a5ab525a29f902a5a98",
                             *           "version" : 1
                             *         },
                             *         "fields" : {
                             *           "name-stringField" : "Name for language tag de-DE",
                             *           "filename-stringField" : "dummy-content.de.html",
                             *           "teaser-stringField" : "Dummy teaser for de-DE",
                             *           "content-htmlField" : "Content for language tag de-DE",
                             *           "relatedProduct-nodeField" : {
                             *             "uuid" : "74a03402e7e54393a03402e7e5c39304"
                             *           },
                             *           "price-numberField" : 100.1,
                             *           "enabled-booleanField" : true,
                             *           "release-dateField" : "2016-11-17T08:46:27.600Z",
                             *           "categories-nodeListField" : [ {
                             *             "uuid" : "0264725789f24ce3a4725789f24ce368"
                             *           }, {
                             *             "uuid" : "370f3232f2dd46b78f3232f2dd36b723"
                             *           }, {
                             *             "uuid" : "7050ac8e54964d7790ac8e54962d7741"
                             *           } ],
                             *           "names-stringListField" : [ "Jack", "Joe", "Mary", "Tom" ],
                             *           "categoryIds-numberListField" : [ 1, 42, 133, 7 ],
                             *           "binary-binaryField" : {
                             *             "fileName" : "flower.jpg",
                             *             "width" : 800,
                             *             "height" : 600,
                             *             "sha512sum" : "ec582eb760034dd91d5fd33656c0b56f082b7365d32e2a139dd9c87ebc192bff3525f32ff4c4137463a31cad020ac19e6e356508db2b90e32d737b6d725e14c1",
                             *             "fileSize" : 95365,
                             *             "mimeType" : "image/jpeg",
                             *             "dominantColor" : "#22a7f0"
                             *           },
                             *           "location-micronodeField" : {
                             *             "uuid" : "ec117b269d2d4c69917b269d2d3c696f",
                             *             "microschema" : {
                             *               "name" : "geolocation",
                             *               "uuid" : "0bcd143879294e7e8d143879299e7ea2"
                             *             },
                             *             "fields" : {
                             *               "latitude" : 48.208330230278,
                             *               "longitude" : 16.373063840833
                             *             }
                             *           },
                             *           "locations-micronodeListField" : [ {
                             *             "uuid" : "59bf1b513e804e3ebf1b513e807e3ef8",
                             *             "microschema" : {
                             *               "name" : "geolocation",
                             *               "uuid" : "668c9c109d3741c48c9c109d37c1c406"
                             *             },
                             *             "fields" : {
                             *               "latitude" : 48.208330230278,
                             *               "longitude" : 16.373063840833
                             *             }
                             *           }, {
                             *             "uuid" : "af150836e45044ba950836e450a4ba47",
                             *             "microschema" : {
                             *               "name" : "geolocation",
                             *               "uuid" : "2ec02e4625084cc4802e4625081cc40b"
                             *             },
                             *             "fields" : {
                             *               "latitude" : 48.137222,
                             *               "longitude" : 11.575556
                             *             }
                             *           } ]
                             *         },
                             *         "path" : "/api/v1/yourProject/webroot/Images",
                             *         "breadcrumb" : [ {
                             *           "uuid" : "e02e9d6f1e6843b7ae9d6f1e6823b747",
                             *           "displayName" : "news",
                             *           "path" : "/news"
                             *         }, {
                             *           "uuid" : "8a4f513816fa44a58f513816fab4a5eb",
                             *           "displayName" : "2015",
                             *           "path" : "/news/2015"
                             *         } ],
                             *         "container" : false
                             *       }
                             *     } ]
                             *   }
                             * }
                             *
                             */
                                get: (query, token) => {
                                    return this.get(`/${project}/navroot/${path}`, query, token);
                                },
                            };
                        }
                    },
                    /**
                        * Resource /{project}/webroot
                        * Provides endpoints which allow loading nodes via a webroot path.
                        */
                    webroot: {
                        /**
                        * Resource /{project}/webroot/{path}
                        *
                        */
                        path: (path) => {
                            return {
                                /**
                             * Method get
                             * Load the node or the node's binary data which is located using the provided path.
                             * Example
                             *
                             */
                                get: (query, token) => {
                                    return this.get(`/${project}/webroot/${path}`, query, token);
                                },
                            };
                        }
                    },
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
                     *   "uuid" : "9214f2ebb8834d1d94f2ebb883dd1d20",
                     *   "creator" : {
                     *     "lastName" : "Doe",
                     *     "firstName" : "Joe",
                     *     "uuid" : "59fba5e6b2424070bba5e6b242b0704e"
                     *   },
                     *   "created" : "2016-11-17T08:46:27.642Z",
                     *   "editor" : {
                     *     "lastName" : "Doe",
                     *     "firstName" : "Joe",
                     *     "uuid" : "431b77e7006e47519b77e7006ec751cf"
                     *   },
                     *   "edited" : "2016-11-17T08:46:27.642Z",
                     *   "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                     *   "rolePerms" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                     *   "name" : "Winter 2016",
                     *   "migrated" : true
                     * }
                     *
                     */
                        post: (data, query, token) => {
                            return this.post(`/${project}/releases`, data, query, token);
                        },
                        /**
                         * Method get
                         * Load multiple releases and return a paged list response.
                         * Example
                         * {
                         *   "data" : [ {
                         *     "uuid" : "173ec70e52a3449bbec70e52a3549b9a",
                         *     "creator" : {
                         *       "lastName" : "Doe",
                         *       "firstName" : "Joe",
                         *       "uuid" : "7f5aa1995c2d42639aa1995c2d52632c"
                         *     },
                         *     "created" : "2016-11-17T08:46:27.651Z",
                         *     "editor" : {
                         *       "lastName" : "Doe",
                         *       "firstName" : "Joe",
                         *       "uuid" : "d5389ddbe2c34f21b89ddbe2c34f21d4"
                         *     },
                         *     "edited" : "2016-11-17T08:46:27.651Z",
                         *     "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                         *     "rolePerms" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                         *     "name" : "summer2016",
                         *     "migrated" : true
                         *   }, {
                         *     "uuid" : "35f1e91e1e87436bb1e91e1e87836b88",
                         *     "creator" : {
                         *       "lastName" : "Doe",
                         *       "firstName" : "Joe",
                         *       "uuid" : "6b8509de983b45f18509de983be5f155"
                         *     },
                         *     "created" : "2016-11-17T08:46:27.651Z",
                         *     "editor" : {
                         *       "lastName" : "Doe",
                         *       "firstName" : "Joe",
                         *       "uuid" : "3ade3b9e6c504a079e3b9e6c505a07f4"
                         *     },
                         *     "edited" : "2016-11-17T08:46:27.651Z",
                         *     "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                         *     "rolePerms" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                         *     "name" : "autumn2016",
                         *     "migrated" : true
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
                        get: (query, token) => {
                            return this.get(`/${project}/releases`, query, token);
                        },
                        /**
                        * Resource /{project}/releases/{releaseUuid}
                        *
                        */
                        releaseUuid: (releaseUuid) => {
                            return {
                                /**
                             * Method get
                             * Load the release with the given uuid.
                             * Example
                             * {
                             *   "uuid" : "94335cd6e15d45e6b35cd6e15d65e6e3",
                             *   "creator" : {
                             *     "lastName" : "Doe",
                             *     "firstName" : "Joe",
                             *     "uuid" : "feb8d27b03fa4dc1b8d27b03fa4dc12c"
                             *   },
                             *   "created" : "2016-11-17T08:46:27.650Z",
                             *   "editor" : {
                             *     "lastName" : "Doe",
                             *     "firstName" : "Joe",
                             *     "uuid" : "874b46304e944cf48b46304e947cf4c7"
                             *   },
                             *   "edited" : "2016-11-17T08:46:27.650Z",
                             *   "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                             *   "rolePerms" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                             *   "name" : "Summer Collection Release",
                             *   "migrated" : true
                             * }
                             *
                             */
                                get: (query, token) => {
                                    return this.get(`/${project}/releases/${releaseUuid}`, query, token);
                                },
                                /**
                                 * Method post
                                 * Update the release with the given uuid.
                                 * Example
                                 * {
                                 *   "uuid" : "9785be759cb2452485be759cb2252408",
                                 *   "creator" : {
                                 *     "lastName" : "Doe",
                                 *     "firstName" : "Joe",
                                 *     "uuid" : "41fd9c2e079b4cd1bd9c2e079bacd143"
                                 *   },
                                 *   "created" : "2016-11-17T08:46:27.655Z",
                                 *   "editor" : {
                                 *     "lastName" : "Doe",
                                 *     "firstName" : "Joe",
                                 *     "uuid" : "fadb15b0d6b342989b15b0d6b3429801"
                                 *   },
                                 *   "edited" : "2016-11-17T08:46:27.655Z",
                                 *   "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                                 *   "rolePerms" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                                 *   "name" : "Winter Collection Release",
                                 *   "migrated" : true
                                 * }
                                 *
                                 */
                                post: (data, query, token) => {
                                    return this.post(`/${project}/releases/${releaseUuid}`, data, query, token);
                                },
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
                                 *   "uuid" : "88906909bd39402f906909bd39c02fd6",
                                 *   "version" : 1
                                 * }, {
                                 *   "name" : "folder",
                                 *   "uuid" : "22dfcfe86ad34f309fcfe86ad30f30c4",
                                 *   "version" : 1
                                 * }, {
                                 *   "name" : "binary-data",
                                 *   "uuid" : "dc9acece3c0140f89acece3c01d0f86a",
                                 *   "version" : 1
                                 * } ]
                                 *
                                 */
                                    get: (query, token) => {
                                        return this.get(`/${project}/releases/${releaseUuid}/schemas`, query, token);
                                    },
                                    /**
                                     * Method post
                                     * Assign a schema version to the release.
                                     * Example
                                     * [ {
                                     *   "name" : "content",
                                     *   "uuid" : "68a23e2098c14229a23e2098c1c22913",
                                     *   "version" : 1
                                     * }, {
                                     *   "name" : "folder",
                                     *   "uuid" : "f662b3f1655948dba2b3f1655938dba0",
                                     *   "version" : 1
                                     * }, {
                                     *   "name" : "binary-data",
                                     *   "uuid" : "dc268f62148447dba68f62148407db7c",
                                     *   "version" : 1
                                     * } ]
                                     *
                                     */
                                    post: (data, query, token) => {
                                        return this.post(`/${project}/releases/${releaseUuid}/schemas`, data, query, token);
                                    },
                                },
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
                                 *   "uuid" : "4040e9253d0b46ce80e9253d0ba6ce31",
                                 *   "version" : 2
                                 * }, {
                                 *   "name" : "geolocation",
                                 *   "uuid" : "ea6648fb949c4866a648fb949c486663",
                                 *   "version" : 1
                                 * } ]
                                 *
                                 */
                                    get: (query, token) => {
                                        return this.get(`/${project}/releases/${releaseUuid}/microschemas`, query, token);
                                    },
                                    /**
                                     * Method post
                                     * Assign a microschema version to the release.
                                     * Example
                                     * [ {
                                     *   "name" : "vcard",
                                     *   "uuid" : "1e144d92e9e64cca944d92e9e60ccad8",
                                     *   "version" : 2
                                     * }, {
                                     *   "name" : "geolocation",
                                     *   "uuid" : "6d231d90e10d48d2a31d90e10df8d244",
                                     *   "version" : 1
                                     * } ]
                                     *
                                     */
                                    post: (data, query, token) => {
                                        return this.post(`/${project}/releases/${releaseUuid}/microschemas`, data, query, token);
                                    },
                                }
                            };
                        }
                    },
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
                         *     "uuid" : "1b95c0dc31334f6d95c0dc31330f6d30",
                         *     "creator" : {
                         *       "lastName" : "Doe",
                         *       "firstName" : "Joe",
                         *       "uuid" : "4e97b9af8596430f97b9af8596130f4e"
                         *     },
                         *     "created" : "2016-11-17T08:46:27.677Z",
                         *     "edited" : "2016-11-17T08:46:27.677Z",
                         *     "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                         *     "availableLanguages" : [ "en", "de" ],
                         *     "languagePaths" : {
                         *       "de" : "/api/v1/yourProject/webroot/Bilder",
                         *       "en" : "/api/v1/yourProject/webroot/Images"
                         *     },
                         *     "parentNode" : {
                         *       "uuid" : "35b3d2390a934c58b3d2390a936c5820",
                         *       "displayName" : "parentNodeDisplayName"
                         *     },
                         *     "tags" : {
                         *       "types" : {
                         *         "items" : [ {
                         *           "name" : "car",
                         *           "uuid" : "85b9e44f28174313b9e44f28172313e3"
                         *         }, {
                         *           "name" : "ship",
                         *           "uuid" : "28250cc1b4744220a50cc1b474f22004"
                         *         } ]
                         *       },
                         *       "colors" : {
                         *         "items" : [ {
                         *           "name" : "red",
                         *           "uuid" : "02529848bb9b4ee0929848bb9b8ee0a4"
                         *         }, {
                         *           "name" : "green",
                         *           "uuid" : "9610784c6d714baf90784c6d712bafaa"
                         *         } ]
                         *       }
                         *     },
                         *     "childrenInfo" : {
                         *       "folder" : {
                         *         "schemaUuid" : "107e89fa36b944bfbe89fa36b974bfb3",
                         *         "count" : 5
                         *       },
                         *       "blogpost" : {
                         *         "schemaUuid" : "e34690efe2bf48978690efe2bf48979f",
                         *         "count" : 1
                         *       }
                         *     },
                         *     "schema" : {
                         *       "name" : "content",
                         *       "uuid" : "f13feca95a4341bcbfeca95a4361bccc",
                         *       "version" : 1
                         *     },
                         *     "fields" : {
                         *       "name-stringField" : "Name for language tag de-DE",
                         *       "filename-stringField" : "dummy-content.de.html",
                         *       "teaser-stringField" : "Dummy teaser for de-DE",
                         *       "content-htmlField" : "Content for language tag de-DE",
                         *       "relatedProduct-nodeField" : {
                         *         "uuid" : "e98fa1960a924a908fa1960a922a90fd"
                         *       },
                         *       "price-numberField" : 100.1,
                         *       "enabled-booleanField" : true,
                         *       "release-dateField" : "2016-11-17T08:46:27.677Z",
                         *       "categories-nodeListField" : [ {
                         *         "uuid" : "45ef3d1009554f4baf3d1009550f4b35"
                         *       }, {
                         *         "uuid" : "067d2a69d3214069bd2a69d3212069d9"
                         *       }, {
                         *         "uuid" : "5e2fc95226ce42d6afc95226ce72d6ec"
                         *       } ],
                         *       "names-stringListField" : [ "Jack", "Joe", "Mary", "Tom" ],
                         *       "categoryIds-numberListField" : [ 1, 42, 133, 7 ],
                         *       "binary-binaryField" : {
                         *         "fileName" : "flower.jpg",
                         *         "width" : 800,
                         *         "height" : 600,
                         *         "sha512sum" : "ec582eb760034dd91d5fd33656c0b56f082b7365d32e2a139dd9c87ebc192bff3525f32ff4c4137463a31cad020ac19e6e356508db2b90e32d737b6d725e14c1",
                         *         "fileSize" : 95365,
                         *         "mimeType" : "image/jpeg",
                         *         "dominantColor" : "#22a7f0"
                         *       },
                         *       "location-micronodeField" : {
                         *         "uuid" : "3db35ede6d154ccbb35ede6d150ccb28",
                         *         "microschema" : {
                         *           "name" : "geolocation",
                         *           "uuid" : "2bb5c6484f6744c2b5c6484f67e4c26f"
                         *         },
                         *         "fields" : {
                         *           "latitude" : 48.208330230278,
                         *           "longitude" : 16.373063840833
                         *         }
                         *       },
                         *       "locations-micronodeListField" : [ {
                         *         "uuid" : "800ec002a6fa43618ec002a6fa236173",
                         *         "microschema" : {
                         *           "name" : "geolocation",
                         *           "uuid" : "c0e6b74d77924ca4a6b74d7792bca4b8"
                         *         },
                         *         "fields" : {
                         *           "latitude" : 48.208330230278,
                         *           "longitude" : 16.373063840833
                         *         }
                         *       }, {
                         *         "uuid" : "51f96bfc39164bc3b96bfc3916dbc39b",
                         *         "microschema" : {
                         *           "name" : "geolocation",
                         *           "uuid" : "3df9e6d6f361407cb9e6d6f361107c64"
                         *         },
                         *         "fields" : {
                         *           "latitude" : 48.137222,
                         *           "longitude" : 11.575556
                         *         }
                         *       } ]
                         *     },
                         *     "path" : "/api/v1/yourProject/webroot/Images",
                         *     "breadcrumb" : [ {
                         *       "uuid" : "438e2425a4e746d28e2425a4e796d2fb",
                         *       "displayName" : "news",
                         *       "path" : "/news"
                         *     }, {
                         *       "uuid" : "5b373446e2504948b73446e250494887",
                         *       "displayName" : "2015",
                         *       "path" : "/news/2015"
                         *     } ],
                         *     "container" : false
                         *   }, {
                         *     "uuid" : "3268167472cd4a36a8167472cdca3611",
                         *     "creator" : {
                         *       "lastName" : "Doe",
                         *       "firstName" : "Joe",
                         *       "uuid" : "0fcc5a5870a245988c5a5870a2159838"
                         *     },
                         *     "created" : "2016-11-17T08:46:27.678Z",
                         *     "editor" : {
                         *       "lastName" : "Doe",
                         *       "firstName" : "Joe",
                         *       "uuid" : "bf81ebebbacf442f81ebebbacfc42f6d"
                         *     },
                         *     "edited" : "2016-11-17T08:46:27.678Z",
                         *     "permissions" : [ "READ", "CREATE" ],
                         *     "parentNode" : {
                         *       "uuid" : "e0cdd225019046878dd2250190568766",
                         *       "displayName" : "parentNodeDisplayName"
                         *     },
                         *     "tags" : {
                         *       "types" : {
                         *         "items" : [ {
                         *           "name" : "car",
                         *           "uuid" : "112c15c0da684cd5ac15c0da68ccd558"
                         *         }, {
                         *           "name" : "ship",
                         *           "uuid" : "3cde0e334bd148ec9e0e334bd118ec6d"
                         *         } ]
                         *       },
                         *       "colors" : {
                         *         "items" : [ {
                         *           "name" : "red",
                         *           "uuid" : "031b6df1e2d948fb9b6df1e2d9f8fb80"
                         *         }, {
                         *           "name" : "green",
                         *           "uuid" : "c7240a80de70417ca40a80de70217cff"
                         *         } ]
                         *       }
                         *     },
                         *     "childrenInfo" : { },
                         *     "schema" : {
                         *       "name" : "content",
                         *       "uuid" : "002b34538df54cb5ab34538df53cb5f7",
                         *       "version" : 1
                         *     },
                         *     "fields" : {
                         *       "name" : "Name for language tag en",
                         *       "filename" : "dummy-content.en.html",
                         *       "teaser" : "Dummy teaser for en",
                         *       "content" : "Content for language tag en"
                         *     },
                         *     "breadcrumb" : [ {
                         *       "uuid" : "37853748796740fc8537487967f0fcb5",
                         *       "displayName" : "news",
                         *       "path" : "/news"
                         *     }, {
                         *       "uuid" : "c6b28ab6d2954255b28ab6d295c255f0",
                         *       "displayName" : "2015",
                         *       "path" : "/news/2015"
                         *     } ],
                         *     "container" : false
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
                            post: (data, query, token) => {
                                return this.post(`/${project}/search/nodes`, data, query, token);
                            },
                        },
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
                         *     "uuid" : "d63efb5f038d43dcbefb5f038db3dc07",
                         *     "creator" : {
                         *       "lastName" : "Doe",
                         *       "firstName" : "Joe",
                         *       "uuid" : "a7ea4388d08e40f0aa4388d08ec0f01a"
                         *     },
                         *     "created" : "2016-11-17T08:46:27.683Z",
                         *     "editor" : {
                         *       "lastName" : "Doe",
                         *       "firstName" : "Joe",
                         *       "uuid" : "672fac91ab0440a4afac91ab04f0a4a0"
                         *     },
                         *     "edited" : "2016-11-17T08:46:27.683Z",
                         *     "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
                         *     "tagFamily" : {
                         *       "name" : "colors",
                         *       "uuid" : "30a433bad06646baa433bad06636ba51"
                         *     },
                         *     "name" : "green"
                         *   }, {
                         *     "uuid" : "d2d41deef5784ed3941deef578ced3fc",
                         *     "creator" : {
                         *       "lastName" : "Doe",
                         *       "firstName" : "Joe",
                         *       "uuid" : "97748fca5af84362b48fca5af8136268"
                         *     },
                         *     "created" : "2016-11-17T08:46:27.683Z",
                         *     "editor" : {
                         *       "lastName" : "Doe",
                         *       "firstName" : "Joe",
                         *       "uuid" : "c353e9c00b8147f293e9c00b8117f22f"
                         *     },
                         *     "edited" : "2016-11-17T08:46:27.683Z",
                         *     "permissions" : [ "READ", "CREATE" ],
                         *     "tagFamily" : {
                         *       "name" : "colors",
                         *       "uuid" : "81ad3c426f064596ad3c426f068596ea"
                         *     },
                         *     "name" : "Name for language tag en"
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
                            post: (data, query, token) => {
                                return this.post(`/${project}/search/tags`, data, query, token);
                            },
                        },
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
                         *       "lastName" : "Doe",
                         *       "firstName" : "Joe",
                         *       "uuid" : "307c8da220244434bc8da220240434a6"
                         *     },
                         *     "created" : "2016-11-17T08:46:27.684Z",
                         *     "editor" : {
                         *       "lastName" : "Doe",
                         *       "firstName" : "Joe",
                         *       "uuid" : "a1215176a84c4241a15176a84cc2412b"
                         *     },
                         *     "edited" : "2016-11-17T08:46:27.684Z",
                         *     "permissions" : [ "READ", "CREATE", "UPDATE" ],
                         *     "name" : "Colors"
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
                            post: (data, query, token) => {
                                return this.post(`/${project}/search/tagFamilies`, data, query, token);
                            },
                        }
                    },
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
                     *     "uuid" : "7c05e82090db4f1a85e82090dbef1af1",
                     *     "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
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
                     *     "displayField" : "name",
                     *     "segmentField" : "name",
                     *     "container" : false
                     *   }, {
                     *     "uuid" : "70c8b5a4ef1d428788b5a4ef1da2876c",
                     *     "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
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
                     *     "displayField" : "name",
                     *     "segmentField" : "name",
                     *     "container" : false
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
                        get: (query, token) => {
                            return this.get(`/${project}/schemas`, query, token);
                        },
                        /**
                        * Resource /{project}/schemas/{schemaUuid}
                        *
                        */
                        schemaUuid: (schemaUuid) => {
                            return {
                                /**
                             * Method get
                             * Load the schema with the given uuid.
                             * Example
                             * {
                             *   "uuid" : "66ff86c869754d6cbf86c86975ad6c4c",
                             *   "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
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
                             *   "displayField" : "name",
                             *   "segmentField" : "name",
                             *   "container" : false
                             * }
                             *
                             */
                                get: (query, token) => {
                                    return this.get(`/${project}/schemas/${schemaUuid}`, query, token);
                                },
                                /**
                                 * Method post
                                 * Assign the schema to the project. This will automatically assign the latest schema version to all releases of the project.
                                 * Example
                                 * {
                                 *   "uuid" : "ae8e1f8810c545b78e1f8810c555b7f4",
                                 *   "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
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
                                 *   "displayField" : "name",
                                 *   "segmentField" : "name",
                                 *   "container" : false
                                 * }
                                 *
                                 */
                                post: (data, query, token) => {
                                    return this.post(`/${project}/schemas/${schemaUuid}`, data, query, token);
                                },
                                /**
                                 * Method delete
                                 * Remove the schema with the given uuid from the project. This will automatically remove all schema versions of the given schema from all releases of the project.
                                 * Example
                                 *
                                 */
                                delete: (token) => {
                                    return this.delete(`/${project}/schemas/${schemaUuid}`, token);
                                },
                            };
                        }
                    },
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
                     *     "uuid" : "ba87f049f643462b87f049f643062b47",
                     *     "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
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
                     *     } ]
                     *   }, {
                     *     "uuid" : "9c7e37042ee24ad7be37042ee28ad770",
                     *     "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
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
                     *     } ]
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
                        get: (query, token) => {
                            return this.get(`/${project}/microschemas`, query, token);
                        },
                        /**
                        * Resource /{project}/microschemas/{microschemaUuid}
                        *
                        */
                        microschemaUuid: (microschemaUuid) => {
                            return {
                                /**
                             * Method post
                             * Add the microschema to the project.
                             * Example
                             * {
                             *   "uuid" : "1b9963c93c5d40ed9963c93c5df0edf4",
                             *   "permissions" : [ "READ", "UPDATE", "DELETE", "CREATE" ],
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
                             *   } ]
                             * }
                             *
                             */
                                post: (data, query, token) => {
                                    return this.post(`/${project}/microschemas/${microschemaUuid}`, data, query, token);
                                },
                                /**
                                 * Method delete
                                 * Remove the microschema from the project.
                                 * Example
                                 *
                                 */
                                delete: (token) => {
                                    return this.delete(`/${project}/microschemas/${microschemaUuid}`, token);
                                },
                            };
                        }
                    }
                };
            }
        };
    }
}
exports.MeshAPI = MeshAPI;
//# sourceMappingURL=MeshAPI.js.map