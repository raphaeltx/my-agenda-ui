export interface IChatBotMessage {
  id: string;
  text: string;
  timestamp: Date;
  sender: "user" | "bot";
}
