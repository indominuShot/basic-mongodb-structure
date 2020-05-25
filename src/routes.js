const express = require('express');

const routes = express.Router();

const controller = require('./Controllers/index');

/* O PRIMEIRO PARÂMETRO É A URL E O SEGUNDO É O QUE 
   DEVE SER FEITO QUANDO ACESSADA ESSA ROTA A PARTIR
   DO TIPO DE REQUISIÇÃO */
routes.get('/', controller.listAll);
routes.post('/', controller.store);
routes.put('/', controller.update);
routes.delete('/', controller.delete);

/* IMPORTANTE EXPORTAR AS ROTAS PARA PODER 
   UTILIZAR NO ARQUIVO PRINCIPAL */
module.exports = routes;