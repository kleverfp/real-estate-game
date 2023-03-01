import Dice from "./Dice";
import Round from "./Round";

class Match{
    players = [];
    buildings=[];
    round;
    constructor(
        players
    ){
        this.players = players;
        this.buildings = buildings;
        this.round = new Round();
    }

    initialSetup(){

        const initialPlayers =  this.getPlayers();
        const buildings = this.getBuildings();
        this.getRound().start(initialPlayers,buildings);
       

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

export default Match;