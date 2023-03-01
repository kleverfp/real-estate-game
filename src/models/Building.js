const {Model,DataTypes}  = require('sequelize');
class Building extends Model {
    static init(sequelize){
        super.init({
            sell_value:DataTypes.INTEGER,
            rent_value:DataTypes.INTEGER,
            position:DataTypes.INTEGER,
        },{
            sequelize
        })
    }
}

module.exports = Building;