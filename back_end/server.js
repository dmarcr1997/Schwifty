import express from 'express';
import { json, urlencoded } from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connect } from './utils/db.js';

// Express Route
import peopleRoute from './routes/people.route.js';
import messageRoute from './routes/message.route.js';
// Connecting mongoDB Database

const app = express();

app.disable('x-powered-by');

app.use(cors());
app.use(json());
app.use(urlencoded({extended: true}));

app.use('/people', peopleRoute);
app.use('/messages', messageRoute);

// PORT
const port = process.env.PORT || 4000;
export const start = async () => {
  try {
    await connect()
    app.listen(config.port, () => {
      console.log('Connected to Port ' + port);
    })
  } catch (e) {
    console.error(e);
  }
}


