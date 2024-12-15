import * as vscode from 'vscode';

let channel: vscode.LogOutputChannel;

export function InitializeConsole(): void {
    channel = vscode.window.createOutputChannel("Babylon",{log: true});
    Info("Console Initialized");
}

export function Error(message: string): void {
    channel.error(message);
}

export function Warning(message: string): void {
    channel.warn(message);
}

export function Info(message: string): void {
    channel.info(message);
}