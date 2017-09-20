const server = require('./config/server');
require('./config/database');
require('./config/routes')(server); //chama a funcao passando o server
