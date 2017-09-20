const mongoose = require('mongoose');

//tirar mensagem de adivertencia
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/todo');