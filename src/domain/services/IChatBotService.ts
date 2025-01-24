import { IChatBotMessage } from "../interfaces/entities/IChatBotMessage";

export interface IChatBotService {
  sendMessage(text: string): Promise<IChatBotMessage>;
  getLastMessage(): Promise<IChatBotMessage[]>;
}