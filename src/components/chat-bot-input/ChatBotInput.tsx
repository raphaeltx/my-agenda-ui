import { useState } from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import { Container, IconButton, TextareaAutosize } from "@mui/material";
import { IChatBotInputProps } from "../../domain/interfaces/IChatBotInputProps";
import "./ChatBotInput.css";

const ChatBotInput: React.FC<IChatBotInputProps> = ({
  placeholder,
  onButtonClick,
}) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    onButtonClick(inputValue);
    setInputValue("");
  };

  return (
    <Container className="chat-bot-input-field-container">
      <TextareaAutosize
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="chat-bot-input-field"
        minRows={1}
        maxRows={5}
      />
      <IconButton
        type="button"
        onClick={handleButtonClick}
        className="chat-bot-input-icon-button"
      >
        <CiLocationArrow1 className="chat-bot-input-icon" />
      </IconButton>
    </Container>
  );
};

export default ChatBotInput;
