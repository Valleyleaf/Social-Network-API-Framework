const connection = require('../config/connection');
const { User, Thoughts } = require('../models');
// If functions are added to data. Require them here.

connection.on('error', (err) => err);