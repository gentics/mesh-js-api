import{MeshAPI} from "./build/MeshAPI";

let Mesh = new MeshAPI();

let DemoProject = Mesh.api.projectName("demo");
DemoProject.nodes.get().then();