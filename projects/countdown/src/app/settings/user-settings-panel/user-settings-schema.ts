import { z } from 'zod';
import {
  UserSettingFormats,
  UserSettingThemes,
} from '../../services/LocalStorageService';

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
  theme: z.enum(UserSettingThemes),
  defaultCalendarId: z
    .string()
    .trim()
    .refine((value) => value.trim().length > 0, {
      message: 'Calendar ID is required',
    }),
  defaultFormat: z.enum(UserSettingFormats),
});

export type UserSettingsModel = z.infer<typeof userSettingsSchema>;
