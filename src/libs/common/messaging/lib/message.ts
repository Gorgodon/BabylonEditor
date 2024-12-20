export type MessageCommand = "console" | "scene";

export interface Message {
    command: MessageCommand;
    payload?: any;
}