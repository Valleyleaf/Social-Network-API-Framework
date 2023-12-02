const express = require('express');
const db = require('./Config/Connections');
const routes = require('./routes')


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });
  

  process.on('unhandledRejection', (error) => {
    console.error('Unhandled Rejection:', error);
    process.exit(1); 
  });
  //Adding process handler to ensure server doesn't run if it runs into an error.

// Has this been tested: [X]