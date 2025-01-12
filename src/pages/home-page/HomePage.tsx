import { Box, Container } from "@mui/material";
import ChatBot from "../../components/chat-bot/ChatBot";
import MenuSettigns from "../../components/menu-settigns/MenuSettigns";
import "./HomePage.css";

const HomePage: React.FC = () => {
  return (
    <Container className="home-page-container">
      <Box className="menu-settings">
        <MenuSettigns />
      </Box>

      <Box className="chat-bot">
        <ChatBot />
      </Box>
    </Container>
  );
};

export default HomePage;
