import React, { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { Box, Container } from "@mui/material";
import ChatBotInput from "../chat-bot-input/ChatBotInput";
import { ChatBotService } from "../../services/chat-bot/ChatBotService";
import ChatBotMessage from "../chat-bot-message/ChatBotMessage";
import "./ChatBot.css";
import { IChatBotMessage } from "../../domain/interfaces/IChatBotMessage";

const ChatBot: React.FC = () => {
  const chatBotService = new ChatBotService();
  const intl = useIntl();
  const [messages, setMessages] = useState<IChatBotMessage[]>([]);

  const handleButtonClick = async (inputValue: string) => {
    chatBotService.sendMessage(inputValue);
    const updatedMessages = await chatBotService.getMessages();
    setMessages(updatedMessages);
  };

  useEffect(() => {
    const fetchMessages = async () => {
      const initialMessages = await chatBotService.getMessages();
      setMessages(initialMessages);
    };
    fetchMessages();
  }, []);

  return (
    <Container className="chat-bot-container">
      <Box className="chat-bot-content">
        <Box className="chat-bot-messages">
          <ChatBotMessage messages={messages} />
        </Box>

        <Box className="chat-bot-input">
          <ChatBotInput
            placeholder={intl.formatMessage({
              id: "chatbot.inputPlaceholder",
            })}
            onButtonClick={handleButtonClick}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default ChatBot;
