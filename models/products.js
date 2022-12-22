const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class Products extends Model {}

Products.init(

    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
    },
 
    },
},
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'project',
      }
)

module.exports = Products;