const {Model,DataTypes}  = require('sequelize');
class UserBuildings extends Model {
    static init(sequelize){
        super.init({
           
        },{
            sequelize
        })
    }
    static associate(models){
        this.belongsTo(models.User,{foreignKey:'user_id', as:'user'});
        this.belongsTo(models.Building,{foreignKey:'building_id', as:'building'})
    }
}

module.exports = UserBuildings;