import { config } from 'dotenv';
import * as z from 'zod';

config();

const quality = {
    min: process.env.MIN_QUALITY || 1,
    max: process.env.MAX_QUALITY || 100,
    default: process.env.DEFAULT_QUALITY || 75
};
const size = { min: process.env.MIN_SIZE || 64, max: process.env.MAX_SIZE || 1024 };
const hosts = process.env.ALLOW_HOSTS ? process.env.ALLOW_HOSTS.split(',') : [];
const formats = process.env.ALLOW_FORMATS
    ? process.env.ALLOW_FORMATS?.split(',')
    : ['jpg', 'png', 'webp', 'avif'];
export const QuerySchema = z.object({
    w: z.coerce.number().min(size.min).max(size.max).optional(),
    h: z.coerce.number().int().min(size.min).max(size.max).optional(),
    q: z.coerce
        .number()
        .int()
        .min(quality.min)
        .max(quality.max)
        .optional()
        .default(quality.default),
    format: z
        .enum(['jpg', ...formats])
        .optional()
        .default('jpg'),
    url: z
        .string()
        .url()
        .refine(url => !!hosts.find(f => f === new URL(url as string)?.host), {
            message: 'Host not allowed',
            path: ['url']
        })
});
