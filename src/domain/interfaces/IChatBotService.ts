import { IChatBotMessage } from "./IChatBotMessage";

export interface IChatBotService {
  sendMessage(text: string): Promise<IChatBotMessage>;
  getMessages(): Promise<IChatBotMessage[]>;
}