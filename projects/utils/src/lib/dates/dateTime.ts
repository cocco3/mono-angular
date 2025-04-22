import { TZDate } from '@date-fns/tz';

/**
 * @returns Datetime in ISO format
 */
export const createDateTimeZoned = (
  date: string,
  time: string,
  timeZone: string
) => {
  const combinedDateTime = `${date}T${time}:00`;
  const tzDate = new TZDate(combinedDateTime, timeZone);
  return tzDate.toISOString();
};

/**
 * @returns Today's date in ISO format (YYYY-MM-DD)
 */
export const getToday = () => {
  const today = new Date();
  const localDate = new Date(
    today.getTime() - today.getTimezoneOffset() * 60000
  );
  return localDate.toISOString().split('T')[0];
};
