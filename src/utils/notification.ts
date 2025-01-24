import { AlertColor } from "@mui/material";
import { INotificationProps } from "../domain/interfaces/properties/INotificationProps";

type NotificationHandler = (options: INotificationProps) => void;

class NotificationUtil {
  private handler: NotificationHandler | null = null;

  registerHandler(handler: NotificationHandler) {
    this.handler = handler;
  }

  showNotification(message: string, severity: AlertColor = "error") {
    if (this.handler) {
      this.handler({ open: true, message, severity });
    }
  }
}

export const notificationUtil = new NotificationUtil();
