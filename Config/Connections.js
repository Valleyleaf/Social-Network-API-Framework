const { connect, connection } = require('mongoose');

console.log('Hit Connections')

connect('mongodb://127.0.0.1:27017/socialnetworkdb');

module.exports = connection;