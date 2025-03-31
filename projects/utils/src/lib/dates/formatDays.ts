import { differenceInSeconds, parseISO } from 'date-fns';
import { formatTimeDiff } from './formatTimeDiff';

export const formatDays = (isoDate: string) => {
  const now = new Date();
  const date = parseISO(isoDate);

  const isAfterNow = date > now;
  const dateDiffInSeconds = Math.abs(differenceInSeconds(date, now));

  const days = dateDiffInSeconds / 86400.0;

  const dateParts = { days: +days.toFixed(2) };

  return formatTimeDiff({
    timeSince: dateParts,
    isAfterNow,
    precision: 1,
  });
};
