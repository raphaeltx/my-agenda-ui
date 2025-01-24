import React, { useState, useEffect } from "react";
import { Snackbar, Alert, AlertColor } from "@mui/material";
import { notificationUtil } from "../../utils/notification";

const Notification: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<AlertColor>("error");

  useEffect(() => {
    notificationUtil.registerHandler(({ open, message, severity }) => {
      setOpen(open);
      setMessage(message);
      setSeverity(severity);
    });
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        severity={severity}
        sx={{ width: "100%", textAlign: "center" }}
        variant="filled"
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
