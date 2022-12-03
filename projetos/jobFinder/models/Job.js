const Sequelize = require('sequelize');
const db        = require('../db/conection');


//cria o obj Js para modificar e atualizar o bando de dados
const Job = db.define('job',{
    titulo: {
        type: Sequelize.STRING,
    },
    descricao: {
        type: Sequelize.STRING,
    },
    salario: {
        type: Sequelize.STRING,
    },
    empresa: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    },
    new_job:{
        type: Sequelize.INTEGER,
    }
});


module.exports = Job; // exporta o objeto para ser usado fora