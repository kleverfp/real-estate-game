class CheckDataBaseConnectionService{

    constructor(){} 
    async execute(connectionDB){
        try {
            await connectionDB.authenticate();
            console.log('Connection has been established successfully.');
        } 
        
        catch (error) {
            console.error('Unable to connect to the database:', error);
        }  
    }
        
    

};

module.exports =  CheckDataBaseConnectionService;