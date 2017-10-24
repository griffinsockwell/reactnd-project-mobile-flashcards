import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';

const NOTIFICATION_KEY = 'UdaciFlashcards:notifications';

export const clearLocalNotification = async () => {
  try {
    await AsyncStorage.removeItem(NOTIFICATION_KEY);
    await Notifications.cancelAllScheduledNotificationsAsync();
  } catch (error) {
    console.log(error);
  }
};

export const setLocalNotification = async () => {
  try {
    const result = await AsyncStorage.getItem(NOTIFICATION_KEY);
    const data = JSON.parse(result);
    if (data === null) {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);

      if (status === 'granted') {
        await Notifications.cancelAllScheduledNotificationsAsync();

        const notification = {
          title: 'Study with your flashcards!',
          body: "Don't forget to spend some time studying today!",
          ios: {
            sound: true,
          },
          android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
          },
        };
        let tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(20);
        tomorrow.setMinutes(0);
        const options = {
          time: tomorrow,
          repeat: 'day',
        };
        await Notifications.scheduleLocalNotificationAsync(notification, options);

        await AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
      }
    }
  } catch (error) {
    console.log(error);
  }
};
