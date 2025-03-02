import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import dotenv from 'dotenv';

import { getEnvVar } from './utils/getEnvVar.js';
import { getAllContacts, getContactById } from './services/contacts.js';

dotenv.config();

const PORT = Number(getEnvVar('PORT', '3000'));

export const setupServer = () => {
    const app = express();
     // src/server.js

 // Маршрут для корня
 app.get('/', (req, res) => {
  res.send('Добро пожаловать в API Контактов');
});

// Маршрут для фавиконки, чтобы избежать ошибки 404
app.get('/favicon.ico', (req, res) => res.status(204));

app.get('/contacts', async (req, res) => {
const contacts = await getAllContacts();
res.status(200).json({
  data: contacts,
});
});

app.get('/contacts/:contactId', async (req, res) => {
  const { contactId } = req.params;
  const contact = await getContactById(contactId);
  if(!contact) {
    res.status(404).json({
      message: 'Contact not found'
    });
    return;
  }
  res.status(200).json({
    data: contact,
  });

});


  app.use(express.json());
  app.use(cors());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.use('*', (req, res, next) => {
    res.status(404).json({
      message: 'Not found',
    });
  });

  app.use((err, req, res, next) => {
    res.status(500).json({
      message: 'Something went wrong',
      error: err.message,
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};


