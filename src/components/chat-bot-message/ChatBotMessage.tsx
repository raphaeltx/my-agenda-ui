import React, { useRef } from "react";
import { Box, Typography } from "@mui/material";
import "./ChatBotMessage.css";
import { IChatBotMessageProps } from "../../domain/interfaces/IChatBotMessageProps";

const ChatBotMessage: React.FC<IChatBotMessageProps> = ({ messages }) => {
  // TODO: Fix messages order 
  const messageContainerRef = useRef<HTMLDivElement | null>(null);

  return (
    <Box className="chat-container">
      <Box className="chat-messages-container">
        {messages.map((message) => (
          <Box key={message.id} className={`chat-message ${message.sender}`}>
            <Typography className="chat-message-text" variant="body1">
              {message.text}
            </Typography>
            <Typography variant="caption">
              {message.timestamp.toLocaleTimeString()}
            </Typography>
          </Box>
        ))}
      </Box>
      <div ref={messageContainerRef} />
    </Box>
  );
};

export default ChatBotMessage;
