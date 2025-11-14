import { Preferences } from '@capacitor/preferences';

const TIME_KEY = "saved_time";
const HISTORY_KEY = "timer_history";

export const saveTime = async (seconds: number) => {
  await Preferences.set({
    key: TIME_KEY,
    value: seconds.toString(),
  });
};

export const loadTime = async (): Promise<number> => {
  const { value } = await Preferences.get({ key: TIME_KEY });
  return value ? parseInt(value) : 0;
};

export const saveHistory = async (list: string[]) => {
  await Preferences.set({
    key: HISTORY_KEY,
    value: JSON.stringify(list),
  });
};

export const loadHistory = async (): Promise<string[]> => {
  const { value } = await Preferences.get({ key: HISTORY_KEY });
  return value ? JSON.parse(value) : [];
};

export {};
