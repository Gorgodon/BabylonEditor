import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, MeshBuilder } from "babylonjs";

declare const renderCanvas: HTMLCanvasElement;

export function InitializeSceneView() {
    
    const engine = new Engine(renderCanvas, true);
    const scene = new Scene(engine);

    const camera = new ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new Vector3(0, 0, 0));
    camera.attachControl(renderCanvas, true);

    const light = new HemisphericLight("light", new Vector3(0, 1, 0));

    const box = MeshBuilder.CreateBox("box", {});
    box.position = new Vector3(0, 1, 0);
    scene.addMesh(box);
    scene.addLight(light);

    const ground = MeshBuilder.CreateGround("ground", { width: 6, height: 6 });
    scene.addMesh(ground);
    engine.runRenderLoop(() => { scene.render(); });
}