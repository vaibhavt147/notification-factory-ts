import { NotificationFactory } from "./factories/NotificationFactory";

function notify(type: string, messages: string) {
  try {
    const notifier = NotificationFactory.createNotification(type);
    if (notifier) {
      notifier.send(messages);
    }
  } catch (error) {
    console.error((error as Error).message);
  }
}

notify("email", "Welcome via Email!");
notify("sms", "Your OTP is 1234");
notify("push", "New push notification!");
notify("fax", "This will fail");
