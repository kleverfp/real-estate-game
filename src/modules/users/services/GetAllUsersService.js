
const Users = require ('../../../models/User');

class GetAllUsersService{

    constructor(){};

    async execute(){
        try {
            const users = await Users.findAll();
            return users;
        } catch (error) {
            console.log('error',error);
        }
      

    }

}

module.exports = GetAllUsersService;