import{MeshAPI} from "./build/MeshAPI";

let Mesh = new MeshAPI();

// Mesh.api.auth.me.get().then((me) => {
//     console.log(me);
// });

Mesh.api.projectName("demo").nodes.get().then((nodes) => {
    console.log(nodes);
}).catch((reason) => {
    console.log(reason);
});