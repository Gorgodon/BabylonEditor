import * as vscode from 'vscode';
import { Console } from '../libs/backend/logging';
import * as SceneModule from '../modules/scene-module/backend';

export function activate(context: vscode.ExtensionContext) {
  Console.InitializeConsole();
  SceneModule.Activate(context);
}

export function deactivate() { }