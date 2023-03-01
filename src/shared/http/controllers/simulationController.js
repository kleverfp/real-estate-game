const  RunSimulationService  = require("../../services/RunSimulationService")

class SimulationController{
    async runSimulation(request,response){
        try {
            const runSimulation = new RunSimulationService();
            const result =  await runSimulation.execute();
    
            response.json(result);
        } catch (error) {
            console.log('error',error);
            response.status(500).json('internal server error');
        }
       
    }

}

module.exports = SimulationController