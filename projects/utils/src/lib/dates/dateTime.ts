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

export const formatIsoDate = (isoDate: string) => {
  const hasTime = doesIsoDateHaveTime(isoDate);

  if (hasTime) {
    const date = new Date(isoDate);
    const formatter = new Intl.DateTimeFormat('en-us', {
      dateStyle: 'long',
      timeStyle: 'short',
    });

    return formatter.format(date);
  } else {
    const date = new Date(`${isoDate}T00:00:00`);
    const formatter = new Intl.DateTimeFormat('en-us', {
      dateStyle: 'long',
    });

    return formatter.format(date);
  }
};

export const doesIsoDateHaveTime = (isoDate: string) => {
  return isoDate.includes('T') && isoDate.match(/T\d{2}:\d{2}/);
};
