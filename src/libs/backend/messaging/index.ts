import { Webview } from "vscode";
import { MessageCommand } from "../../common/messaging/lib/message";


export function Register<T>(webview: Webview, command: MessageCommand, handler: (payload: T) => void): void {
    
    webview.onDidReceiveMessage((message) => {
        if (message.command !== command) {
            return;
        }
        
        const payload = message.payload as T;
        handler(payload);
    });
}

export function PostMessage<T>(webview: Webview, command: MessageCommand, payload: T): void {
    webview.postMessage({
        command: command,
        payload: payload
    });
}