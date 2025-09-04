import { z } from 'zod';

export const userSettingsSchema = z.object({
  query: z
    .string()
    .trim()
    .refine((value) => value.trim().length > 0, {
      message: 'Query is required',
    }),
  timeZone: z
    .string()
    .trim()
    .refine((value) => value.trim().length > 0, {
      message: 'TimeZone is required',
    }),
  theme: z
    .string()
    .trim()
    .refine((value) => value.trim().length > 0, {
      message: 'Theme is required',
    }),
  defaultCalendarId: z
    .string()
    .trim()
    .refine((value) => value.trim().length > 0, {
      message: 'Calendar ID is required',
    }),
  defaultFormat: z
    .string()
    .trim()
    .refine((value) => value.trim().length > 0, {
      message: 'Format is required',
    }),
});

export type UserSettingsModel = z.infer<typeof userSettingsSchema>;
