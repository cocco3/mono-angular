export const parseDateTime = (date: string, time?: string) => {
  const dateTime = new Date(date);
  if (time) {
    const [hours, minutes] = time.split(':');
    dateTime.setHours(Number(hours), Number(minutes));
  }

  return dateTime;
};
