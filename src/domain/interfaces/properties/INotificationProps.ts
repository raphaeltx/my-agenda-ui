import { AlertColor } from "@mui/material";

export interface INotificationProps {
  open: boolean;
  message: string;
  severity: AlertColor;
}
