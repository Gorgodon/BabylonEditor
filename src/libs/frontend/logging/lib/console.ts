import { WebLog } from "../../../common/logging";
import { Messaging } from "../../messaging";

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
    Messaging.PostMessage("console", log);
}