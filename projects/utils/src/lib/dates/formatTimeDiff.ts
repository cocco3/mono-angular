// Helper to add 's' to a number if other than 1
function addS(n: number) {
  return n === 1 ? '' : 's';
}

type Args = {
  timeSince: {
    years?: number;
    months?: number;
    weeks?: number;
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
  };
  isAfterNow: boolean;
  precision: number;
};

export const formatTimeDiff = ({ timeSince, isAfterNow, precision }: Args) => {
  const { years, months, weeks, days, hours, minutes, seconds } = timeSince;

  const parts = [];

  if (precision && years) {
    parts.push(years + ' year' + addS(years));
    precision--;
  }

  if (precision && months) {
    parts.push(months + ' month' + addS(months));
    precision--;
  }

  if (precision && weeks) {
    parts.push(weeks + ' week' + addS(weeks));
    precision--;
  }

  if (precision && days) {
    parts.push(days + ' day' + addS(days));
    precision--;
  }

  if (precision && hours) {
    parts.push(hours + ' hour' + addS(hours));
    precision--;
  }

  if (precision && minutes) {
    parts.push(minutes + ' minute' + addS(minutes));
    precision--;
  }

  if (precision && seconds) {
    parts.push(seconds + ' second' + addS(seconds));
    precision--;
  }

  return isAfterNow ? `in ${parts.join(', ')}` : `${parts.join(', ')} ago`;
};
