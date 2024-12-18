import * as vscode from 'vscode';
import { Console } from '../libs/backend/logging';
import { InitializeSceneEditor } from '../modules/scene-module/backend';

export function activate(context: vscode.ExtensionContext) {
  Console.InitializeConsole();
  InitializeSceneEditor(context);
}

export function deactivate() { }