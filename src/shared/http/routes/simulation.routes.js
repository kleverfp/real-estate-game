const express = require('express');
const SimulationController = require('../controllers/simulationController');


const router = express.Router();
const simulationControler = new SimulationController();


router.get('/',simulationControler.runSimulation);

module.exports =router;