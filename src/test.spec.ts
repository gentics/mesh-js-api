import{MeshAPI} from "./build/MeshAPI";

let Mesh = new MeshAPI();

// Mesh.api.groups.groupUuid("").users.get();
// Mesh.api.groups.groupUuid("").users.userUuid("").put();
// Mesh.api.groups.groupUuid("").roles.get();
// Mesh.api.groups.groupUuid("").roles.roleUuid("").put();
// Mesh.api.groups.groupUuid("").roles.roleUuid("").delete();
// Mesh.api.groups.post();
// Mesh.api.groups.get();
// Mesh.api.groups.groupUuid("").get();
// Mesh.api.groups.groupUuid("").put();
// Mesh.api.groups.groupUuid("").delete();

let demo = Mesh.api.project("demo");
const UUID = "8257e65b614a4a5d97e65b614aaa5d1d";

async function test (): Promise<any> {
    let nodes = await demo.nodes.get();
    let node = nodes.data[1];
    console.log(node.fields.name);
    node.fields.name += " C";
    let updatedNode = await demo.nodes.nodeUuid(UUID).post(node);
    console.log(updatedNode.fields.name);
}
test().then().catch(reason => {
    console.log(reason);
});
