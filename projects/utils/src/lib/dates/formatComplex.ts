import { differenceInMilliseconds, parseISO } from 'date-fns';
import { formatTimeDiff } from './formatTimeDiff';
import { getDatePartsFromMilliseconds } from './getDateParts';

export const formatComplex = (isoDate: string) => {
  const now = new Date();
  const date = parseISO(isoDate);

  const isAfterNow = date > now;
  const dateDiffInMs = Math.abs(differenceInMilliseconds(date, now));

  const dateParts = getDatePartsFromMilliseconds(dateDiffInMs);

  return formatTimeDiff({
    timeSince: dateParts,
    isAfterNow,
    precision: 3,
  });
};
