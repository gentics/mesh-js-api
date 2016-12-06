import { MeshAPI } from "./build/MeshAPI";

let Mesh = new MeshAPI();

async function test(): Promise<any> {
    const PARENT_UUID = "8e7b5519386a4380bb5519386a1380f9";
    await Mesh.api.auth.login.post({ username: "admin", password: "admin" });
    let demo = Mesh.api.project("demo");
    let nodes = await demo.nodes.get({ page: 1, perPage: 300, version: "draft" });
    for (let node of nodes.data) {
        demo.nodes.nodeUuid(node.uuid).get({ version: "draft"});
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
