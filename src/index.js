import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();

// temp data arr
const ads = [
  {title: 'Hello, world (again)!'}
];

// Helmet for API security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

app.get('/users', (req, res) => {
  return res.send('Received a GET HTTP method');
});

app.post('/users', (req, res) => {
  return res.send('Received a POST HTTP method');
});

app.put('/users', (req, res) => {
  return res.send('Received a PUT HTTP method');
});

app.delete('/users', (req, res) => {
  return res.send('Received a DELETE HTTP method');
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);