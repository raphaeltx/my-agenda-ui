export interface IChatBotMessage {
  id: number;
  text: string;
  timestamp: Date;
  sender: "user" | "bot";
}
