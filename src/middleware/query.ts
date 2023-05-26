import { QuerySchema } from '@schemas/query';
import type { NextFunction, Request, Response } from 'express';

export default function QueryMiddleware(req: Request, res: Response, next: NextFunction) {
    try {
        const data = QuerySchema.parse(req.query);
        req.query = data as any;
        return next();
    } catch (err) {
        console.log(err);
        return res.status(400).json({ status: 400, message: err.message });
    }
}
