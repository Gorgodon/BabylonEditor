import { Message } from "../../../common/messaging";

interface vscode {
    postMessage(message: any): void;
}

declare const vscode: vscode /*= (window as any).acquireVsCodeApi() as vscode*/;

export function PostMessage(message: Message): void {
    vscode.postMessage(message);
}