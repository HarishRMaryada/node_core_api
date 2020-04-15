import { Request, Response, NextFunction } from 'express'
import * as winston from 'winston'
export default function (err: any, req: Request, res: Response, next: NextFunction) {
    const logger = winston.createLogger({
        level: 'info',
        format: winston.format.json(),
        defaultMeta: { service: 'user-service' },
        transports: [
            new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
            new winston.transports.File({ filename: 'logs/combined.log' })
        ]
    });
    logger.error(err.message, err)
    if (process.env.NODE_ENV !== 'production') {
        logger.add(new winston.transports.Console({
            format: winston.format.simple()
        }));
    }
    res.status(500).send('Something went wrong!')
}