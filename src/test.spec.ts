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
demo.nodes.get().then(nodes => {
    nodes.data.map(n => {
        console.log(n.uuid, n.fields.name);
        n.fields.name += " CHANGED";
        demo.nodes.nodeUuid(n.uuid).put("", n).then(r => {
            console.log(r);
        }).catch(r => console.log(r));
    });
});
