const express = require('express');
const dateAndTime = require('date-and-time');
const db = require('./Config/Connections');
const routes = require('./routes')


const app = express();
const PORT = process.env.PORT || 3001;


db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });
  