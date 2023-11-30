const { connect, connection } = require('mongoose');

// console.log('Connections hit')

const connectionString =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/studentsDB';

connect(connectionString);

module.exports = connection;




// Has this been tested: [X]