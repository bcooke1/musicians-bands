const { DataTypes } = require('sequelize/types');
const {Sequelize, sequelize} = require('./db');

// TODO - define the Band model

const Band = db.define('band', {
    name: {
        type: DataTypes.STRING
    },
    genre: {
        type:DataTypes.STRING
    }
})

module.exports = {
    Band
};