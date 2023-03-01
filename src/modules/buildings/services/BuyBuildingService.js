const UserBuildings = require("../../../models/UserBuildings");

class BuyBuildingService{
    constructor(){}

    async execute(building,player){
        
        const userBuilnding = await UserBuildings.create({
            user_id:player.id,
            building_id:building.id
        });

        await userBuilnding.save();
    }
}


module.exports = BuyBuildingService;