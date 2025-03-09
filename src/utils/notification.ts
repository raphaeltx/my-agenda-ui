import { AlertColor } from "@mui/material";
import { INotificationProps } from "../domain/interfaces/properties/INotificationProps";
import { info } from "console";

type NotificationHandler = (options: INotificationProps) => void;

class NotificationUtil {
  private handler: NotificationHandler | null = null;

  registerHandler(handler: NotificationHandler) {
    this.handler = handler;
  }

  success(message: string) {
    this.showNotification(message, "success");
  }

  error(message: string) {
    this.showNotification(message, "error");
  }

  info(message: string) {
    this.showNotification(message, "info");
  }

  private showNotification(message: string, severity: AlertColor = "error") {
    if (this.handler) {
      this.handler({ open: true, message, severity });
    }
  }
}

export const notificationUtil = new NotificationUtil();
