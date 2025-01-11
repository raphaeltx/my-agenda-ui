import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import './NotFoundPage.css';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm">
      <Box className="not-found-container">
        <Typography variant="h4" component="h2" className="not-found-title">
          <FormattedMessage id="notfoundPage.title" />
        </Typography>
        <Typography variant="body1" color="text.secondary" className="not-found-description">
          <FormattedMessage id="notfoundPage.description" />
        </Typography>
        <Button
          variant="outlined"
          size="small"
          className="not-found-button"
          onClick={() => navigate('/home')}
        >
          <FormattedMessage id="notfoundPage.returnHome" />
        </Button>
      </Box>
    </Container>
  );
};

export default NotFoundPage;