import * as vscode from 'vscode';
import { WebConsole } from '../../../../libs/backend/logging';

export function InitializeSceneEditor(context: vscode.ExtensionContext) {
    let currentPanel: vscode.WebviewPanel | undefined = undefined;
  
    const webview = vscode.commands.registerCommand('babylon.hello', () => {
      currentPanel = vscode.window.createWebviewPanel("webview", "React", vscode.ViewColumn.One, {
        enableScripts: true
      });
  
      WebConsole.InitializeWebConsole(currentPanel.webview);
  
      let scriptSrc = currentPanel.webview.asWebviewUri(vscode.Uri.joinPath(context.extensionUri, "out", "web", "scene-view", "index.js"));
      let cssSrc = currentPanel.webview.asWebviewUri(vscode.Uri.joinPath(context.extensionUri, "out", "web", "scene-view", "index.css"));
  
    currentPanel.webview.html = `<!DOCTYPE html>
        <html lang="en">
        <head>
          <link rel="stylesheet" href="${cssSrc}" />
        </head>
        <body>
          <div id="root"></div>
          <canvas id="renderCanvas" style="width: 100%; height: 100%;"></canvas>
          <script>
            const vscode = acquireVsCodeApi();
            const renderCanvas = document.getElementById("renderCanvas");
          </script>
          <script src="${scriptSrc}"></script>
        </body>
        </html>`;
  
      context.subscriptions.push(webview);
    });
  }