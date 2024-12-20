import { Vector3 } from "babylonjs";

export type SceneCommand = {
    type: "box" | "sphere";
    position: Vector3;
}