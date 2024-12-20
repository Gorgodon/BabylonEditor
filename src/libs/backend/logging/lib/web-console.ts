import { Webview } from 'vscode';
import { WebLog } from '../../../common/logging';
import * as Console from './console';
import { Register } from '../../messaging';

export function InitializeWebConsole(webview: Webview): void {
    Console.Info("Initializing Web Console");
    Register<WebLog>(webview, "console", LogWebMessage);
}

function LogWebMessage(message: WebLog): void {
    switch (message.type) {
        case "log":
            Console.Info(message.message);
            break;
        case "error":
            Console.Error(message.message);
            break;
        case "warn":
            Console.Warning(message.message);
            break;
    }
}