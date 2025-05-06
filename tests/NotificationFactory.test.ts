import { NotificationFactory } from "../src/factories/NotificationFactory";
import { EmailNotification } from "../src/notifications/EmailNotification";
import { SMSNotification } from "../src/notifications/SMSNotification";
import { PushNotification } from "../src/notifications/PushNotification";

describe("NotificationFactory", () => {
  test("should return EmailNotification instance", () => {
    const notification = NotificationFactory.createNotification("email");
    expect(notification).toBeInstanceOf(EmailNotification);
  });

  test("should return SMSNotification instance", () => {
    const notification = NotificationFactory.createNotification("sms");
    expect(notification).toBeInstanceOf(SMSNotification);
  });

  test("should return PushNotification instance", () => {
    const notification = NotificationFactory.createNotification("push");
    expect(notification).toBeInstanceOf(PushNotification);
  });

  test("should throw error for unsupported type", () => {
    expect(() => {
      NotificationFactory.createNotification("fax");
    }).toThrow("Unsupported notification type: fax");
  });
});
