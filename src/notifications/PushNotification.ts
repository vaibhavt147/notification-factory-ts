import { Notification } from "../interfaces/Notification";

export class PushNotification implements Notification {
  send(message: string) {
    console.log(`Sending push notification with message: ${message}`);
  }
}
