import {  PointerEventTypes, PointerInfo, Scene, Vector3 } from "babylonjs";
import { Messaging } from "../../../../../libs/frontend/messaging";

export function InitializeContextMenu(scene: Scene) {
    scene.onPointerObservable.add(ShowContextMenu);
}

function ShowContextMenu(pointerInfo: PointerInfo) {
    if (pointerInfo.type !== PointerEventTypes.POINTERTAP) {
        return;
    }

    if(pointerInfo.event.inputIndex !== 4){
        return;
    }

    Messaging.PostMessage("scene", new Vector3(0, 5, 0));
    const mouseEvent: MouseEvent = pointerInfo.event as MouseEvent;
    mouseEvent.target?.dispatchEvent(new MouseEvent("contextmenu", { bubbles: true, clientX: mouseEvent.clientX, clientY: mouseEvent.clientY }));
    console.log("Context menu shown");
}