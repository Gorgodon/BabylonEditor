import * as vscode from 'vscode';
import { Console } from '../libs/backend/logging';
import { WebConsole } from '../libs/backend/logging';

export function activate(context: vscode.ExtensionContext) {
  let currentPanel: vscode.WebviewPanel | undefined = undefined;
  Console.InitializeConsole();

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
          <script>
            const vscode = acquireVsCodeApi();
          </script>
          <body>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <div id="root"></div>
            <script src="${scriptSrc}"></script>
          </body>
        </html>`;

    context.subscriptions.push(webview);

    const addBoxCommand = vscode.commands.registerCommand('babylon.addBox', () => {
      if (!currentPanel) {
        return;
      }
      currentPanel.webview.postMessage("AddBox");
    });
    context.subscriptions.push(addBoxCommand);
  });
}

export function deactivate() { }