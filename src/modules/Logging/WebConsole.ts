import * as Console from './Console';
import { Webview } from 'vscode';
import { WebLog } from './Types';
import { Message } from '@modules/common/engine';

export function InitializeWebConsole(webview: Webview): void {
    Console.Info("Initializing Web Console");
    webview.onDidReceiveMessage((message) => {
        LogWebMessage(message);
    });
}

function LogWebMessage(message: Message): void {
    if (message.command !== "console") {
        return;
    }
    const payload = message.payload as WebLog;
    switch (payload.type) {
        case "log":
            Console.Info(payload.message);
            break;
        case "error":
            Console.Error(payload.message);
            break;
        case "warn":
            Console.Warning(payload.message);
            break;
    }
}