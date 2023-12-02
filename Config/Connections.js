const { connect, connection } = require('mongoose');

// console.log('Connections HIT!')

const connectionString =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/studentsDB';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

connection.on('connected', () => {
  console.log('MongoDB connected successfully');
});

connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

process.on('SIGINT', () => {
  connection.close(() => {
    console.log('MongoDB connection closed due to process termination');
    process.exit(0);
  });
});
//Adding console.error to connectionString to do bugfixing.
module.exports = connection;

// Has this been tested: [X]