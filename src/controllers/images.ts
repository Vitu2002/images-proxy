import { QuerySchema } from '@schemas/query';
import axios from 'axios';
import type { Request, Response } from 'express';
import sharp from 'sharp';

export default async function ProcessImage(req: Request, res: Response) {
    try {
        const { h, q, w, url, format } = req.query as unknown as Zod.TypeOf<typeof QuerySchema>;
        const fetched = await axios.get(url, { responseType: 'arraybuffer' }).catch(() => null);
        if (!fetched) throw new Error('Failed to fetch image from url');
        if (!`${fetched.headers['content-type']}`?.startsWith('image/'))
            throw new Error('Provided URL is not from a image');
        const image = sharp(await fetched.data());
        if (w || h) image.resize(w, h);
        return res
            .setHeader('Content-Type', `image/${format}`)
            .send(await image.toFormat(format as 'png', { quality: q }).toBuffer());
    } catch (err: any) {
        return res.status(500).send({ status: 500, message: err.message });
    }
}
