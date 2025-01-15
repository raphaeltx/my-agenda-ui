import React, { useEffect, useRef, useState } from "react";
import { useIntl } from "react-intl";
import { Box, Container } from "@mui/material";
import ChatBotInput from "../chat-bot-input/ChatBotInput";
import { ChatBotService } from "../../services/chat-bot/ChatBotService";
import { IChatBotMessage } from "../../domain/interfaces/IChatBotMessage";
import ChatBotMessage from "../chat-bot-message/ChatBotMessage";
import "./ChatBot.css";

const ChatBot: React.FC = () => {
  const intl = useIntl();
  const chatBotServiceRef = useRef<ChatBotService>(new ChatBotService());
  const [messages, setMessages] = useState<IChatBotMessage[]>([]);

  const handleButtonClick = async (inputValue: string) => {
    if (inputValue.trim()) {
      await chatBotServiceRef.current.sendMessage(inputValue);
      const updatedMessages = await chatBotServiceRef.current.getLastMessage();
      setMessages(updatedMessages);
    }
  };

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
