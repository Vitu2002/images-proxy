import { QuerySchema } from '@schemas/query';
import type { Request, Response } from 'express';
import fetch from 'node-fetch';
import sharp from 'sharp';

export default async function ProcessImage(req: Request, res: Response) {
    try {
        const { h, q, w, url, format } = req.query as Zod.TypeOf<typeof QuerySchema>;
        const fetched = await fetch(url as string);
        if (!fetched.ok) throw new Error('Failed to fetch image from url');
        if (!fetched.headers.get('content-type')?.startsWith('image/'))
            throw new Error('Provided URL is not from a image');
        const image = sharp(await fetched.arrayBuffer());
        if (w || h) image.resize(w, h);
        return res
            .setHeader('Content-Type', `image/${format}`)
            .send(await image.toFormat(format as 'png', { quality: q }).toBuffer());
    } catch (err) {
        return res.status(500).send({ status: 500, message: err.message });
    }
}
