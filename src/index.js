import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { v4 as uuidv4 } from 'uuid'; 
import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// temp data arr users and messages
let users = {
  1: {
    id: '1',
    username: 'Thomas',
  },
  2: {
    id: '2',
    username: 'Dave',
  },
};

let messages = {
  1: {
    id: '1',
    text: 'Text for user id 1',
    userId: '1',
  },
  2: {
    id: '2',
    text: 'Text for user id 2',
    userId: '2',
  },
};

// Helmet for API security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));




app.get('/users', (req, res) => {
  return res.send(Object.values(users));
});

app.get('/users/:userId', (req, res) => {
  return res.send(users[req.params.userId]);
});

app.get('/messages', (req, res) => {
  return res.send(Object.values(messages));
});

app.get('/messages/:messageId', (req, res) => {
  return res.send(messages[req.params.messageId]);
});

app.post('/users', (req, res) => {
  return res.send('Received a POST HTTP method');
});

app.put('/users/:userId', (req, res) => {
  return res.send(
    `PUT HTTP method on user/${req.params.userId} resource`,
  );
});

app.delete('/users/:userId', (req, res) => {
  return res.send(
    `DELETE HTTP method on user/${req.params.userId} resource`,
  );
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);


app.post('/messages', (req, res) => {
  const id = uuidv4();
  const message = {
    id,
  };
  
  const date = Date.parse(req.body.date);
  const count = Number(req.body.count);

  messages[id] = message;

  return res.send(message);
});