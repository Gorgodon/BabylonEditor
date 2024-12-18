import { WebLog } from "../../../common/logging";
import { Messaging } from "../../messaging";
import { Message } from "../../../common/messaging";

export function Error(message: string): void {
    SendLog({ type: "error", message: message });
}

export function Warning(message: string): void {
    SendLog({ type: "warn", message: message });
}

export function Info(message: string): void {
    SendLog({ type: "log", message: message });
}

function SendLog(log: WebLog): void {
    const message: Message = { command: "console", payload: log };
    Messaging.PostMessage(message);
}