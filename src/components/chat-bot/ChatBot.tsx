import React from "react";
import { useIntl } from "react-intl";
import { Box, Container } from "@mui/material";
import ChatBotInputField from "../chat-bot-input-field/ChatBotInputField";
import "./ChatBot.css";

const ChatBot: React.FC = () => {
  const intl = useIntl();

  const handleButtonClick = (inputValue: string) => {
    // TODO: call backend API
  };

  return (
    <Container className="chat-bot-container">
      <Box className="chat-bot-content">
        <Box className="chat-bot-messages">{/* TODO: chat messages */}</Box>

        <Box className="chat-bot-input">
          <ChatBotInputField
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
