const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());      /* POSSIBILITA QUE VOCÊ FILTRE QUEM PODE ACESSAR SEU BACK-END */

app.use(express.json());    /* IMPORTANTE PARA CASO VOCÊ QUEIRA TRABALHAR 
                                ESTRUTURA JSON */

/* VOCÊ PRECISA FAZER UM CADASTRO NO MONGODB PARA CRIAR UM CLUSTER */
mongoose.connect('url do seu cluster mongodb',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

/* OUVE AS ROTAS DEFINIDAS */
app.use(routes);

/* ESCUTA A PORTA 3333 */
app.listen(3333);
