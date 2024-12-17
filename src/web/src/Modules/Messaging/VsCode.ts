import { Message } from "@modules/common/engine/index.js";

interface vscode {
    postMessage(message: any): void;
}

const vscode: vscode = (window as any).acquireVsCodeApi() as vscode;

export function PostMessage(message: Message): void {
    vscode.postMessage(message);
}