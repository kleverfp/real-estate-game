const BuyBuildingService =  require( "../modules/buildings/services/BuyBuildingService");
const CheckBuildingHasOwnerService =  require( "../modules/buildings/services/CheckBuildingHasOwnerService");
const RemovePlayerBuildingsOwnerService =  require("../modules/buildings/services/RemovePlayerBuildingsOwnerService");
const Dice = require('./Dice');

class Round{
    dice;
    playersEliminated = [];
    roundCount = 0;

    constructor(){
        this.dice = new Dice();
    }

    async start(players, buildings){
        const allowedPlayers = players.filter(player=>player.eliminated === false);
        const orderedPlayers =  this.shufflePlayers(allowedPlayers);
        this.setRoundCount(this.getRoundCount()+ 1);

        for await (let player of orderedPlayers){

            const points = this.getDice().roll();
            player.position += points;
            if(player.position > 20){
                player.position = player.position -20;
                player.balance += 100;
            }

            const buildOccupied =  buildings.filter(building =>building.position === player.position);
            if(buildOccupied && buildOccupied.length> 0){
                const buildingOwner  = await this.isBuildingHasOwner(buildOccupied[0]);
                if(buildingOwner){
                    const playerOwner = allowedPlayers.filter((player)=>player.id === buildingOwner.user_id);
                    if(playerOwner){
                        await this.playerRentBuilding(playerOwner,player, buildOccupied[0].rent_value);
                    }
                }

                else{
                   await  this.checkPurchaseByPlayerBehavior(buildOccupied[0],player);
                }

               
            }

        };

        if(!this.checkEndGame(players)){
            await this.start(players,buildings);
        }

        return this.getPlayersEliminated();
    }


    checkEndGame(players){

        const playersInGame = players.filter((player)=>player.eliminated === false)

        if(playersInGame.length === 1){
           
            this.setPlayersEliminated(playersInGame[0]);
            return true
        }

        else if(this.getRoundCount() >=10){
          
            
            const orderedPlayersByBalance = playersInGame.sort((playerA,playerB)=>{
                return playerB.balance - playerA.balance
            });
          

            for(let player of orderedPlayersByBalance){
               
                this.setPlayersEliminated(player);
            };

            return true;
        }
    }


    async checkPurchaseByPlayerBehavior(buildOccupied,player){

        const buildingPrice = buildOccupied.sell_value;
        const playerBalance = player.balance;

        if(player.behavior === 'impulsive' ||
           player.behavior === 'demanding' && buildOccupied.rent_value > 50  ||
           player.behavior === 'cautious' && (playerBalance  - buildingPrice > 80) ||
           player.behavior === 'random' && Math.round(Math.random()) == 1){
            
            await this.playerPurchaseBuilding(player,buildOccupied);
           
        }  
        
    }

    async isBuildingHasOwner(building){
        const checkIsBuilderHasOwner = new CheckBuildingHasOwnerService();
        const buildingOwner =  await checkIsBuilderHasOwner.execute(building);
        return buildingOwner;
    }



    async playerPurchaseBuilding(player,buildOccupied){

        const playerBalance = player.balance;
        const buildingPurchaseValue = buildOccupied.sell_value;
        if(playerBalance - buildingPurchaseValue > 0){
            player.balance -= buildOccupied.sell_value;
            const buyBuilding = new BuyBuildingService();
            await buyBuilding.execute(buildOccupied,player);
        }
    }

    async playerRentBuilding(playerOwner,player,rentValue){


        if(player.balance - rentValue > 0){
            player.balance -= brentValue;
            playerOwner.balance += rentValue;
        }

        else{
            player.eliminated = true;
            this.setPlayersEliminated(player);
            playerOwner.balance += player.balance;
            player.balance=0;
            const removePlayerBuildings = new RemovePlayerBuildingsOwnerService();
            await removePlayerBuildings.execute(player);
        }
    }


    shufflePlayers(players){
        
        for (let i = players.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = players[i];
            players[i] = players[j];
            players[j] = temp;
        }

         return players; 
    }

    getDice(){
        return this.dice;
    }

    getPlayersEliminated(){
        return this.playersEliminated;
    }
    setPlayersEliminated(player){
        this.playersEliminated.push(player);
    }

    getRoundCount(){
        return this.roundCount;
    }

    setRoundCount(roundValue){
        this.roundCount = roundValue
    }

   
}

module.exports = Round;