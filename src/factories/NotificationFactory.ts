import { Notification } from "../interfaces/Notification";
import { EmailNotification } from "../notifications/EmailNotification";
import { PushNotification } from "../notifications/PushNotification";
import { SMSNotification } from "../notifications/SMSNotification";

export class NotificationFactory {
  private static cache: Map<String, Notification> = new Map();

  static createNotification(type: string) {
    if (this.cache.has(type)) {
      return this.cache.get(type);
    }
    let notifier: Notification;
    switch (type) {
      case "sms":
        notifier = new SMSNotification();
        break;
      case "email":
        notifier = new EmailNotification();
        break;
      case "push":
        notifier = new PushNotification();
        break;
      default:
        throw new Error(`Unsupported notification type: ${type}`);
    }
    this.cache.set(type, notifier);
    return notifier!;
  }
}
