import { z } from 'zod';
import { createDateTimeZoned } from '@cocco3/utils';

/**
 * TODO: can this be extracted from the schema
 */
export type CreateEventModel = {
  name: string;
  description: string;
  startDate: string;
  startTime?: string;
  endDate: string;
  endTime?: string;
};

export function createEventSchema({
  query,
  timeZone,
}: {
  query: string;
  timeZone: string;
}) {
  return z
    .object({
      name: z
        .string()
        .trim()
        .refine((value) => value.length > 0, {
          error: 'Event name is required',
        }),
      description: z
        .string()
        .trim()
        .refine((value) => value.includes(query), {
          error: `Description must include "${query}"`,
        }),
      startDate: z
        .string()
        .trim()
        .refine((value) => value.length > 0, {
          error: 'Start date is required',
        }),
      startTime: z.string().optional(),
      endDate: z
        .string()
        .trim()
        .refine((value) => value.length > 0, {
          error: 'End date is required',
        }),
      endTime: z.string().optional(),
    })
    .superRefine((data, ctx) => {
      if (data.startTime && !data.endTime) {
        ctx.addIssue({
          code: 'custom',
          message: 'Provide an endTime with startTime',
          path: ['endTime'],
        });
      } else if (!data.startTime && data.endTime) {
        ctx.addIssue({
          code: 'custom',
          message: 'Provide a startTime with endTime',
          path: ['startTime'],
        });
      } else if (
        data.startDate &&
        data.startTime &&
        data.endDate &&
        data.endTime
      ) {
        const start = createDateTimeZoned(
          data.startDate,
          data.startTime,
          timeZone
        );
        const end = createDateTimeZoned(data.endDate, data.endTime, timeZone);

        if (end < start) {
          ctx.addIssue({
            code: 'custom',
            message: 'End time must be on or after start',
            path: ['endTime'],
          });
        }
      }
    })
    .superRefine((data, ctx) => {
      const start = new Date(data.startDate);
      const end = new Date(data.endDate);

      if (!isNaN(start.getTime()) && !isNaN(end.getTime()) && end < start) {
        ctx.addIssue({
          code: 'custom',
          message: 'End date must be on or after start date',
          path: ['endDate'],
        });
      }
    });
}
