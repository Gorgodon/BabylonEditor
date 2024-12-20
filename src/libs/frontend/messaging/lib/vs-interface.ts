import { Message } from "../../../common/messaging";
import { MessageCommand } from "../../../common/messaging/lib/message";

interface vscode {
    postMessage(message: any): void;
}

declare const vscode: vscode;

export function PostMessage<T>(command: MessageCommand, payload: T): void {
    const message: Message = {
        command: command,
        payload: payload
    };
    vscode.postMessage(message);
}

export function Register<T>(command: MessageCommand, handler: (payload: T) => void): void {
    window.addEventListener("message", (event) => {
        const message = event.data as Message;
        if (message.command !== command) {
            return;
        }

        const payload = message.payload as T;
        handler(payload);
    });
}