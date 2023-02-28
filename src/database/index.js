const Sequeize = require('sequelize');
const dbConfig = require('../../config/db');

const connectionDB = new Sequeize(dbConfig);
module.exports = connectionDB;