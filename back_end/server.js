import express from 'express';
import json from 'body-parser';
import urlencoded from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import { connect } from './utils/db.js';

// Express Route
import peopleRoute from './resources/people/person.router.js';
import messageRoute from './resources/messages/message.router.js';
// Connecting mongoDB Database

const app = express();

app.disable('x-powered-by');

app.use(cors());
app.use(json());
app.use(urlencoded({extended: true}));
app.use(morgan('dev'));
app.get('/', (req, res) => res.send({message:'hi'}))
app.use('/person', peopleRoute);
app.use('/messages', messageRoute);

// PORT
const port = process.env.PORT || 4000;
export const start = async () => {
  try {
    await connect()
    app.listen(port, () => {
      console.log('Connected to Port ' + port);
    })
  } catch (e) {
    console.error(e);
  }
}


