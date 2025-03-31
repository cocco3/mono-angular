const USE_TEST_DATA = false;

export type EventItem = {
  id: string;
  date: string;
  name: string;
};

export const getCalendarEvents = (): EventItem[] => {
  return USE_TEST_DATA
    ? [
        { name: 'Hello world', date: '2025-05-02T19:26:55.086Z', id: '1' },
        { name: 'Foo bar', date: '2025-02-02T19:26:55.086Z', id: '2' },
      ]
    : [];
};
