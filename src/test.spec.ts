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

demo.nodes.nodeUuid(UUID).get().then(node => {
    console.log(node.fields.name);
    node.fields.name += " C";
    demo.nodes.nodeUuid(UUID).post(node)
    .then(node => {
        console.log(node.fields.name);
    })
    .catch(reason => {
        console.error(reason);
    });
});
