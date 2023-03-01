const UserBuildings = require('../../../models/UserBuildings');

class CheckBuildingHasOwnerService{
    constructor(){

    }

    async execute(building){

        const build = await UserBuildings.findOne({where:{id:building.id}});

        return build;
    }
}

module.exports = CheckBuildingHasOwnerService;