const { DataTypes } = require('sequelize/types');
const {Sequelize, sequelize} = require('./db');

// TODO - define the Musician model
const Musician = db.define('musician',{
    name: {
        type: DataTypes.STRING
    },
    instrument: {
        type: DataTypes.STRING
    }
})

module.exports = {
    Musician
};