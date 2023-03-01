
const GetAllUsersService  = require( '../../modules/users/services/GetAllUsersService');
const GetAllBuildingsService = require( '../../modules/buildings/services/GetAllBuildingsService');
const Match =  require('../Match');

class RunSimulationService{

    constructor(
    ){

    }

    async execute(){

        const getUsers = new GetAllUsersService();
        const usersDataValues = await getUsers.execute();

        const users = usersDataValues.map((user)=>user.dataValues)
        

        users.map((user)=>{
            user.eliminated = false;
            user.position =0;
        });
       

        const getBuildings = new GetAllBuildingsService();
        const buildingsDataValues = await getBuildings.execute();
        const buildings = buildingsDataValues.map((building)=>building.dataValues);
       

        const match = new Match(users,buildings);
        const result = await match.start();

        const resultBehavior = result.map((player)=>{
            return player.behavior;
        });

        return {
            winner:resultBehavior[0],
            players:resultBehavior
        }

    }

}

module.exports = RunSimulationService;