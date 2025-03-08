import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import dotenv from 'dotenv';

import contactsRouter from './routers/contacts.js';
import { getEnvVar } from './utils/getEnvVar.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';


dotenv.config();

const PORT = Number(getEnvVar('PORT', '3000'));

export const setupServer = () => {
    const app = express();
    app.use(express.json());
    app.use(cors());

    app.use(
      pino({
        transport: {
          target: 'pino-pretty',
        },
      }),
    );

 // Маршрут для корня
 app.get('/', (req, res) => {
  res.send('Добро пожаловать в API Контактов');
});

  app.use(contactsRouter);


  app.use('*', notFoundHandler);

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};


