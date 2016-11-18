import{MeshAPI} from "./build/MeshAPI";

let Mesh = new MeshAPI();

async function test (): Promise<any> {
    let demo = Mesh.api.project("demo");
    await Mesh.api.auth.login.post({ username: "admin", password: "admin" });
    let nodes = await demo.nodes.get({ version: "draft" });
    nodes.data.map(node => {
        node.fields.name += " C";
        demo.nodes.nodeUuid(node.uuid).post(node, { version: "draft" }).then();
    });
}
test().then().catch(reason => {
    console.log(reason);
});
