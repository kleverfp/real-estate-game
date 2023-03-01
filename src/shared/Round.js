import BuyBuildingService from "../modules/buildings/services/BuyBuildingService";
import CheckBuildingHasOwnerService from "../modules/buildings/services/CheckBuildingHasOwnerService";

class Round{
    dice;
    playersEliminated = [];

    constructor(){
        this.dice = new Dice();
    }

    async start(players, buildings){
        const allowedPlayers = players.filter(player=>player.eliminated == false);
        const orderedPlayers =  this.shufflePlayers(allowedPlayers);
        for await (let player of orderedPlayers){

            const points = this.getDice().roll();
            player.position += points;
            if(player.position > 20){
                player.position = player.position -20;
                player.balance += 100;
            }

            const buildOccupied =  buildings.filter(building =>building.position === player.position);
            if(buildOccupied){
                const buildingOwner  = isBuildingHasOwner(buildOccupied);
                if(buildingOwner){
                    
                    const playerOwner = allowedPlayers.filter((player)=>player.id === buildingOwner.user_id);
                    if(playerOwner){
                        this.playerRentBuilding(playerOwner,player, buildOccupied.rent_value);
                    }
                }

                else{
                   await  this.checkPurchaseByPlayerBehavior(buildOccupied,player);
                }

                if(players.length - this.getPlayersEliminated().length == 1){
                    this.setPlayersEliminated(player);
                    return this.getPlayersEliminated();
                }
            }

        };
    }


    async checkPurchaseByPlayerBehavior(buildOccupied,player){

        const buildingPrice = buildOccupied.sell_value;
        const playerBalance = player.balance;

        if(player.behavior === 'impulsive' ||
           player.behavior === 'demanding' && buildOccupied.rent_value > 50  ||
           player.behavior === 'cautious' && (playerBalance  - buildingPrice > 80) ||
           player.behavior === 'random' && Math.round(Math.random()) == 1){
            
            await playerPurchaseBuilding(player,buildOccupied);
           
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

    playerRentBuilding(playerOwner,player,rentValue){


        if(player.balance - rentValue > 0){
            player.balance -= buildingOwner.rent_value;
            playerOwner.balance += buildingOwner.rent_value;
        }

        else{
            player.eliminated = true;
            this.setPlayersEliminated(player);
            playerOwner.balance += player.balance;
            player.balance=0;
        }
    }


    shufflePlayers(players){
        
        for (let i = players.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = players[i];
            players[i] = players[j];
            players[j] = temp;
        }

        console.log("players",players);
          
    }

    getDice(){
        return this.dice;
    }

    getPlayersEliminated(){
        return this.playersEliminated;
    }
    setPlayersEliminated(player){
        this.getPlayersEliminated.push(player);
    }
}

export default Round;