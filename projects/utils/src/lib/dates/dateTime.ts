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

export const doesIsoDateHaveTime = (isoDate: string) => {
  return isoDate.includes('T') && isoDate.match(/T\d{2}:\d{2}/);
};

type IsoDateFormatOptions = {
  date?: Intl.DateTimeFormatOptions['dateStyle'];
  time?: Intl.DateTimeFormatOptions['timeStyle'];
};

export const formatIsoDate = (
  isoDate: string,
  options?: IsoDateFormatOptions
) => {
  const hasTime = doesIsoDateHaveTime(isoDate);

  const date = hasTime ? new Date(isoDate) : new Date(`${isoDate}T00:00:00`);

  if (hasTime && !!options?.time) {
    const formatter = new Intl.DateTimeFormat('en-us', {
      dateStyle: options?.date || 'short',
      timeStyle: options?.time || 'short',
    });
    return formatter.format(date);
  } else {
    const formatter = new Intl.DateTimeFormat('en-us', {
      dateStyle: options?.date || 'short',
    });
    return formatter.format(date);
  }
};
