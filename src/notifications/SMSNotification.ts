import { Notification } from "../interfaces/Notification";

export class SMSNotification implements Notification {
  send(message: string) {
    console.log(`Sending SMS with messages: ${message}`);
  }
}
