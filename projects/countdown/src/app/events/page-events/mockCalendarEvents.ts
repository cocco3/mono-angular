import { type EventsData } from '../../services/GoogleCalendarService';

export const mockCalendarEvents = (): EventsData[] => {
  return [
    {
      id: '1',
      name: 'Hello world',
      date: '2025-05-02T19:26:55.086Z',
    },
    {
      id: '2',
      name: 'Foo bar',
      date: '2025-02-02T19:26:55.086Z',
    },
  ];
};
