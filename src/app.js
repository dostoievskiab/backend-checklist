const express= require('express');

/**
 * @name AppController
 * @description A intenção com essa classe é que fique tudo no mesmo block e eu possa utilizar as rotas ou middle de
 * uma forma organizada.
 */
class AppController {
    constructor(){
        this.express = express();

        // Executando os metodos
        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.express.use(express.json()); // Permite que o express interprete json
    }

    routes() {
        this.express.use(require('./routes')); // Arquivo onde se encontra todas as rotas
    }
}

module.exports = new AppController().express;