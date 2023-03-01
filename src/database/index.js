const Sequeize = require('sequelize');
const dbConfig = require('../../config/db');
const Building = require('../models/Building');
const User = require('../models/User');
const UserBuildings = require('../models/UserBuildings');

const connectionDB = new Sequeize(dbConfig);

User.init(connectionDB);
Building.init(connectionDB);
UserBuildings.init(connectionDB);



module.exports = connectionDB;