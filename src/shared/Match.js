const Round  = require("./Round");

class Match{
    players = [];
    buildings=[];
    round;
    constructor(
        players,
        buildings
    ){
        this.players = players;
        this.buildings = buildings;
        this.round = new Round();
    }

    async start(){

        const initialPlayers =  this.getPlayers();
        const buildings = this.getBuildings();
        const result = await this.getRound().start(initialPlayers,buildings);
        return result;
       

    }


    getPlayers(){
        return this.players;
    }

    getBuildings(){
        return this.buildings;
    }


    getRound(){
        return this.round;
    }

   

    




}

module.exports =  Match;