import BuyBuildingService from "../modules/buildings/services/BuyBuildingService";
import CheckBuildingHasOwnerService from "../modules/buildings/services/CheckBuildingHasOwnerService";

class Round{
    dice;
    playersEliminated = [];

    constructor(){
        this.dice = new Dice();
    }

    start(players, buildings){
        const allowedPlayers = players.filter(player=>player.eliminated == false);
        const orderedPlayers =  this.shufflePlayers(allowedPlayers);
        orderedPlayers.map(async (player)=>{
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
                    player.balance -= buildingOwner.rent_value;

                    const playerOwner = allowedPlayers.filter((player)=>player.id === buildingOwner.user_id);
                    if(playerOwner){
                        playerOwner.balance += buildingOwner.rent_value;
                    }

                    if(player.balance < 0){
                        player.eliminated = true;
                        this.setPlayersEliminated(player);
                    }
                }
                else{
                   await  this.checkPurchaseByPlayerBehavior(buildOccupied,player);
                }
            }


        })
    }


    async checkPurchaseByPlayerBehavior(buildOccupied,player){

        const buildingPrice = buildOccupied.sell_value;
        const playerBalance = player.balance;

        if(player.behavior === 'impulsive' ||
           player.behavior === 'demanding' && buildOccupied.rent_value > 50  ||
           player.behavior === 'cautious' && (playerBalance  - buildingPrice > 80) ||
           player.behavior === 'random' && Math.round(Math.random()) == 1){
            
            await playerPurchaseBuilding();
           
        }  
        
    }

    async isBuildingHasOwner(building){
        const checkIsBuilderHasOwner = new CheckBuildingHasOwnerService();
        const buildingOwner =  await checkIsBuilderHasOwner.execute(building);
        return buildingOwner;
    }



    async playerPurchaseBuilding(){

        const playerBalance = player.balance;
        const buildingPurchaseValue = buildOccupied.sell_value;
        if(playerBalance - buildingPurchaseValue > 0){
            player.balance -= buildOccupied.sell_value;
            const buyBuilding = new BuyBuildingService();
            await buyBuilding.execute(buildOccupied,player);
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