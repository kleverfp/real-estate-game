const Buildings  = require( '../../../models/Building');

class GetAllBuildingsService{

    async execute(){
       const buildings = await Buildings.findAll();

       return buildings;
    }
}

module.exports =  GetAllBuildingsService;