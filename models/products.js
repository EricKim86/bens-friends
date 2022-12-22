const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Products extends Model { }

Products.init(

    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        prod_name: {
            type: DataTypes.STRING,
        },
        prod_description: {
            type: DataTypes.STRING,
        },
        price: {
            type: DataTypes.INTEGER,
        },
        status: {
            type: DataTypes.BOOLEAN,
        },
        categories_id: {
            type: DataTypes.INTEGER,
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
        modelName: 'products',
    }
)

module.exports = Products;