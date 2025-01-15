import { IChatBotMessage } from "../../domain/interfaces/IChatBotMessage";
import { IChatBotService } from "../../domain/interfaces/IChatBotService";

export class ChatBotService implements IChatBotService {
  private messages: IChatBotMessage[] = [];

  async sendMessage(text: string): Promise<IChatBotMessage> {
    // TODO: Implement bot logic
    const botMessage: IChatBotMessage = {
      id: this.messages.length + 2,
      text: `Bot response to: ${text}`,
      timestamp: new Date(),
      sender: "bot",
    };
    
    const message: IChatBotMessage = {
      id: this.messages.length + 1,
      text,
      timestamp: new Date(),
      sender: "user",
    };
    
    this.messages.push(message);
    this.messages.push(botMessage);

    return message;
  }

  async getLastMessage(): Promise<IChatBotMessage[]> {
    // TODO: Implement get messages logic
    return [...this.messages];
  }
}
