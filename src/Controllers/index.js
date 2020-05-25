const Exemplo = require('../Models/exemplo');

module.exports = {
    async listAll(req, res){
        /* BUSCA TODOS OS DADOS DO BANCO */
        const response = await Exemplo.find();

        return res.status(200).json(response);
    },

    async store(req, res){
        const data = req.body;

        /* CRIA UM NOVO DADO NO BANCO A PARTIR DOS DADOS
           PASSADOS NO CORPO DA REQUISIÇÃO */
        const response = await Exemplo.create(data);

        if(response) return res.status(200).json({Message : "Cadastro realizado!"});
    },

    async update(req, res){
        const {id} = req.params;

        /* ALTERA O VALOR DOS DADOS A PARTIR DO ID EXISTENTE
           NO PARÂMETRO DA URL */

        /* O PRIMEIRO PARÂMETRO É QUAL DADO QUE VOCÊ QUER MUDAR,
           NO EXEMPLO ABAIXO EU ESCOLHI ALTERAR O DADO COM ID
           IGUAL AO PASSADO NO PARÂMETRO DA REQUISIÇÃO */
        /* O SEGUNDO PARÂMETRO É QUAL CAMPO VOCÊ QUER ALTERAR */
        const response = await Exemplo.findOneAndUpdate(
            id,
            {$set : {campo1 : 'teste'}}
        );

        if(response) return res.status(200).json({Message : "Cadastro atualizado!"});
    },

    async delete(req, res){
        const {id} = req.params;

        /* DELETA O DADO COM O ID IGUAL AO PASSADO COMO PARÂMETRO */
        const response = Exemplo.findOneAndDelete(id);

        if(response) return res.status(200).json({Message : "Cadastro deletado!"});
    }
};