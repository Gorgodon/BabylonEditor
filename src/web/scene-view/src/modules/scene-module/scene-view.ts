import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, MeshBuilder } from "babylonjs";
import { InitializeContextMenu } from "./scene-context-menu";
import { Messaging } from "../../../../../libs/frontend/messaging";
import { SceneCommand } from "../../../../../modules/scene-module/common";

declare const renderCanvas: HTMLCanvasElement;

let scene: Scene;

export function InitializeSceneView() {
    
    const engine = new Engine(renderCanvas, true);
    scene = new Scene(engine);

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
    InitializeContextMenu(scene);
    Messaging.Register<SceneCommand>("scene", AddObject);
}

function AddObject(command: SceneCommand) {
    switch (command.type) {
        case "box":
            const box = MeshBuilder.CreateBox("box", {});
            box.position = command.position;
            scene.addMesh(box);
            break;
        case "sphere":
            const sphere = MeshBuilder.CreateSphere("sphere", {});
            sphere.position = command.position;
            scene.addMesh(sphere);
            break;
    }
}
