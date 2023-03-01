const UserBuildings = require('../../../models/UserBuildings');

class CheckBuildingHasOwnerService{
    constructor(){

    }

    async execute(building){
        if(!building.id){
            throw new Error('invalid buid id');
        }

        const build = await UserBuildings.findOne({where:{id:building.id}});

        return build;
    }
}

module.exports = CheckBuildingHasOwnerService;