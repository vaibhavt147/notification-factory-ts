import { Notification } from "../interfaces/Notification";

export class EmailNotification implements Notification {
  send(message: string) {
    console.log(`Sending Email with messages: ${message}`);
  }
}
