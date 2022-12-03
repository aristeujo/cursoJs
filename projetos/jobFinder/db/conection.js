const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite', 
    storage: './db/app.db'
});

module.exports = sequelize; // exporta o objeto instanciado para ser usado fora