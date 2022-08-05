const UsuarioController = require('../Controllers/UsuarioController');

module.exports = (app) => {
    app.post('/usuarios', UsuarioController.post);
    app.put('/usuario/:id', UsuarioController.put);
    app.delete('/usuario/:id', UsuarioController.delete);
    app.get('/usuario', UsuarioController.get);
    app.get('/usuario/:id', UsuarioController.getById);
}