export type WebLog =
{
    type: "log" | "error" | "warn";
    message: string;
}