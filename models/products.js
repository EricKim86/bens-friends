const { Model, DataTypes } = require('sequelize');
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
        prod_name: {
            type: DataTypes.VARCHAR
        },
        prod_description: {
            type: DataTypes.VARCHAR
        },
        price: {
            type: DataTypes.INTEGER
         },
        status: {
            type: DataTypes.BOOLEAN
         },
        category_id: {
            type: Datatypes.INTEGER,
            references: {
                model: 'categories',
                key: 'id'
            }
         }
    },
       
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'product',
      }
)

module.exports = Products;