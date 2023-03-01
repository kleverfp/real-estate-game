const UserBuildings = require("../../../models/UserBuildings");

class RemovePlayerBuildingsOwnerService{
    constructor(){

    }

    async execute(player){
        await UserBuildings.destroy({where:{user_id:player.id}});
        
    }
}

module.exports = RemovePlayerBuildingsOwnerService;