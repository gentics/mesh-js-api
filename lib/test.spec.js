"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const MeshAPI_1 = require("./build/MeshAPI");
let Mesh = new MeshAPI_1.MeshAPI();
function test() {
    return __awaiter(this, void 0, void 0, function* () {
        const PARENT_UUID = "8e7b5519386a4380bb5519386a1380f9";
        yield Mesh.api.auth.login.post({ username: "admin", password: "admin" });
        let demo = Mesh.api.project("demo");
        let nodes = yield demo.nodes.get({ page: 1, perPage: 300, version: "draft" });
        for (let node of nodes.data) {
            let data = yield demo.nodes.nodeUuid(node.uuid).get({ version: "draft" });
            console.log(data);
        }
        // for (let j = 0; j < 10000; j++) {
        //     await demo.nodes.post({
        //         parentNodeUuid: PARENT_UUID,
        //         schema: { name: "vehicleImage" },
        //         language: "en",
        //         fields:
        //         {
        //             name: 'NODE ' + j + ' ' + Date.now(),
        //         }
        //     }, { c: j });
        // }
    });
}
// adding new nodes
// execution time:   78705ms -  1000 nodes
// execution time: 1419046ms - 10000 nodes
// for (let node of nodes.data) {
//     // node.fields.name += " C";
//     // demo.nodes.nodeUuid(node.uuid).post(node, { version: "draft" });
//     demo.nodes.nodeUuid(node.uuid).get();
// }
let timer = Date.now();
test().then(() => {
    console.log("execution time: " + (Date.now() - timer) + "ms");
}).catch(reason => {
    console.log(reason);
});
//# sourceMappingURL=test.spec.js.map