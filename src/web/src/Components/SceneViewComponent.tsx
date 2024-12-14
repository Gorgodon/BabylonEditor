import { ArcRotateCamera, Engine, HemisphericLight, MeshBuilder, Scene, Vector3 } from "babylonjs";
import React, { useEffect } from "react";

export function SceneViewComponent() {

    const RENDER_CANVAS_ID: string = "renderCanvas";

    useEffect(() => {
        const canvas = document.getElementById(RENDER_CANVAS_ID) as HTMLCanvasElement;
        const engine = new Engine(canvas, true);
        const scene = new Scene(engine);

        const camera = new ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new Vector3(0, 0, 0));
        camera.attachControl(canvas, true);

        const light = new HemisphericLight("light", new Vector3(0, 1, 0));

        const box = MeshBuilder.CreateBox("box", {});
        scene.addMesh(box);
        scene.addLight(light);
        engine.runRenderLoop(() => { scene.render(); });

        window.addEventListener("resize", () => { engine.resize(); });
        window.addEventListener("beforeunload", () => { engine.dispose(); });
        window.addEventListener("message", (event) => {
            const message: string = event.data;
            switch (message) {
                case "AddBox":
                    const newBox = MeshBuilder.CreateBox("box", {});
                    newBox.position = new Vector3(Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1);
                    scene.addMesh(newBox);
                    testFunction({ test: "test" ,number: 1 });
                    break;
            }
        });
    });

    return (
        <div>
            <canvas id={RENDER_CANVAS_ID} style={{ width: "100%", height: "100%" }}></canvas>
        </div>
    );
}


import { TestType } from "@modules/frontend/Engine/Types.js";

export function testFunction(Types: TestType) {
  console.log(Types);
}