import { type ApiCalendarEvent } from './GoogleCalendarService';

export const mockCalendarEvents = (): ApiCalendarEvent[] => {
  return [
    {
      id: '1',
      summary: 'Hello world',
      start: { dateTime: '2025-05-02T19:26:55.086Z' },
    },
    {
      id: '2',
      summary: 'Foo bar',
      start: { dateTime: '2025-02-02T19:26:55.086Z' },
    },
  ];
};
