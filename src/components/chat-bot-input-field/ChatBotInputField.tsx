import { Container, IconButton, InputBase } from "@mui/material";
import { CiLocationArrow1 } from "react-icons/ci";
import { ChatBotInputFieldProps } from "./ChatBotInputField.types";
import "./ChatBotInputField.css";
import { useState } from "react";

const ChatBotInputField: React.FC<ChatBotInputFieldProps> = ({ placeholder, onButtonClick }) => {
    const [inputValue, setInputValue] = useState<string>("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    const handleButtonClick = () => {
        onButtonClick(inputValue);
        setInputValue("");
    };

    return (
        <Container className="chat-bot-input-field-container">
            <InputBase
                placeholder={placeholder}
                value={inputValue}
                onChange={handleInputChange}
            />
            <IconButton type="button" onClick={handleButtonClick}>
                <CiLocationArrow1 className="chat-bot-input-icon"/>
            </IconButton>
        </Container>
    );
}

export default ChatBotInputField;