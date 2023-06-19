const sequelize = require('sequelize');
const database = require('../db');

const programmer = database.define('programmer', {
    Id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primarykey: true
    },
    name: {
        type: sequelize.STRING,
        allowNull: false
    },
    python: {
        type: sequelize.BOOLEAN,
        allowNull:false
    },
    javascript: {
        type: sequelize.BOOLEAN,
        allowNull:false
    },
    java: {
        type: sequelize.BOOLEAN,
        allowNull:false
    },
});

module.exports = programmer;
