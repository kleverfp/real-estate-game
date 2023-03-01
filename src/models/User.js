const {Model,DataTypes}  = require('sequelize');
class User extends Model {
    static init(sequelize){
        super.init({
            behavior:DataTypes.STRING,
            balance:DataTypes.STRING,
        },{
            sequelize
        })
    }
}

module.exports = User;