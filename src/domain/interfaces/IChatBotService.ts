import { IChatBotMessage } from "./IChatBotMessage";

export interface IChatBotService {
  sendMessage(text: string): Promise<IChatBotMessage>;
  getLastMessage(): Promise<IChatBotMessage[]>;
}