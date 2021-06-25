const express = require('express');
const dotenv = require('dotenv');

// Route files
const bootcamps = require('./routes/bootcamps');

// Load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

//Mount routers
let version = '/api/v1';
app.use(`${version}/bootcamps`, bootcamps);

app.get('/', (request, response) => {
  response.send('Hello from express');
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_EN} mode on port ${PORT}`),
);
