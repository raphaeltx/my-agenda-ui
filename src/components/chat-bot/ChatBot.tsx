import React from 'react';
import { useIntl } from 'react-intl';
import { Box, Container, IconButton, InputBase } from '@mui/material';
import { CiLocationArrow1 } from "react-icons/ci";
import './ChatBot.css';

const ChatBot: React.FC = () => {
  const intl = useIntl();

  return (
    <Container className="chat-bot-container">  
      <Box className="chat-bot-content">
        <Box className="chat-bot-messages">
          {/* TODO: chat messages */}
        </Box>

        <Box className="chat-bot-input">
          <InputBase
            placeholder={intl.formatMessage({ id: 'chatbot.inputPlaceholder' })}
          />
          <IconButton type="button">
            <CiLocationArrow1 className="chat-bot-input-icon"/>
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
}

export default ChatBot;