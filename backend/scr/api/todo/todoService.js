const Todo = require('./todo');

//post = inserir ; put = alterar
Todo.methods(['get', 'post', 'put', 'delete']);

//quando atualizar um dado, trazer este dado atualizado e validado
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo;