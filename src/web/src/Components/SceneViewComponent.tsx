import { ArcRotateCamera, Engine, HemisphericLight, MeshBuilder, Scene, Vector3 } from "babylonjs";
import React from "react";

const RENDER_CANVAS_ID = "renderCanvas";

export class SceneViewComponent extends React.Component {

    componentDidMount() {

        const canvas = document.getElementById(RENDER_CANVAS_ID) as HTMLCanvasElement;
        const engine = new Engine(canvas);
        const scene = new Scene(engine);

        const camera = new ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new Vector3(0, 0, 0));
        camera.attachControl(canvas, true);

        const light = new HemisphericLight("light", new Vector3(0, 1, 0));

        const box = MeshBuilder.CreateBox("box", {});
        scene.addMesh(box);
        scene.addLight(light);
        engine.runRenderLoop(() => { scene.render(); });
    }

    render() {
        return <canvas id={RENDER_CANVAS_ID} style={{ width: "100%", height: "100%" }} />;
    }
}