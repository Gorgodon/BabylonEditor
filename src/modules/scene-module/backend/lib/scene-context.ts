import * as vscode from 'vscode';
import { Vector3 } from 'babylonjs';
import { PostMessage, Register } from '../../../../libs/backend/messaging';
import { SceneCommand } from '../../common';

let addPosition: Vector3 = new Vector3(0, 0, 0);
let view: vscode.Webview;

export function InitializeSceneContext(context: vscode.ExtensionContext) {
  let contextCommand = vscode.commands.registerCommand('babylon.scene.context.add.box', () => {
    AddObject({ type: "box", position: addPosition });
  });
  context.subscriptions.push(contextCommand);

  contextCommand = vscode.commands.registerCommand('babylon.scene.context.add.sphere', () => {
    AddObject({ type: "sphere", position: addPosition });
  });
  context.subscriptions.push(contextCommand);
}

export function InitializeContextCommunication(webView: vscode.Webview) {
  view = webView;
  Register<Vector3>(webView, "scene", SetAddPosition);
}

function SetAddPosition(position: Vector3) {
  addPosition = position;
}

function AddObject(objectType: SceneCommand) {
  PostMessage(view, "scene", objectType);
}