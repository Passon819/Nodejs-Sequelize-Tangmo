process.env.NODE_ENV = process.env.NODE_ENV || 'development';

require('import-export');
require('./app');

//const db = require('./app/models/index')
//console.log('db=>',db);