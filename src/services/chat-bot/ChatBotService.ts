import { IChatBotMessage } from "../../domain/interfaces/IChatBotMessage";
import { IChatBotService } from "../../domain/interfaces/IChatBotService";

export class ChatBotService implements IChatBotService {
  private messages: IChatBotMessage[] = [];

  async sendMessage(text: string): Promise<IChatBotMessage> {
    // TODO: Implement bot logic

    const message: IChatBotMessage = {
      id: new Date().toISOString(),
      text,
      timestamp: new Date(),
      sender: "user",
    };
    
    const botMessage: IChatBotMessage = {
      id: new Date().toISOString(),
      text: `Bot response to: ${text}`,
      timestamp: new Date(),
      sender: "bot",
    };
    
    this.messages.push(message);
    this.messages.push(botMessage);

    return message;
  }

  async getMessages(): Promise<IChatBotMessage[]> {
    // TODO: Implement get messages logic
    return this.messages;
  }
}
