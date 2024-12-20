import * as vscode from 'vscode';

import { InitializeSceneEditor } from './lib/scene-editor';
import { InitializeSceneContext, InitializeContextCommunication } from './lib/scene-context';

export function Activate(context: vscode.ExtensionContext) {
    InitializeSceneEditor(context, OnWebViewActive);
    InitializeSceneContext(context);
}

function OnWebViewActive(webView: vscode.Webview) {
    InitializeContextCommunication(webView);
}