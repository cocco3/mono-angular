export const getDatePartsFromMilliseconds = (ms: number) => {
  // Get the whole values of each unit, rounded down ( `|0` truncates)
  const years = (ms / 3.154e10) | 0;
  const months = ((ms % 3.154e10) / 2.628e9) | 0;
  const weeks = ((ms % 2.628e9) / 6.048e8) | 0;
  const days = ((ms % 6.048e8) / 8.64e7) | 0;
  const hours = ((ms % 8.64e7) / 3.6e6) | 0;
  const minutes = ((ms % 3.6e6) / 6e4) | 0;
  const seconds = ((ms % 6e4) / 1e3) | 0;

  return {
    years,
    months,
    weeks,
    days,
    hours,
    minutes,
    seconds,
  };
};
