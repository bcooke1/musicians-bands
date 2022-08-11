const path = require('path');
const { Sequelize, Model } = require('sequelize');

// DONE - create the new sequelize connection
const db = new  Sequelize({
    dialect: 'sqlite',
    storage: './bd.sqlite'
})


module.exports = {
    db,
    Sequelize
};
