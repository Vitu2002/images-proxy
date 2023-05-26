import ProcessImage from '@controllers/images';
import QueryMiddleware from '@middleware/query';
import logger from '@services/logger';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.listen(port, () => logger.log(`Server exposed in port: ${port}`, 'Express'));
app.get('/', QueryMiddleware, ProcessImage);
app.on('error', err => logger.error(err, 'Express'));
process.on('unhandledRejection', err => logger.error(err, 'unhandledRejection'));
process.on('uncaughtException', err => logger.error(err, 'uncaughtException'));
