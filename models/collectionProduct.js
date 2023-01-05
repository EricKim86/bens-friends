const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class CollectionProduct extends Model { }

CollectionProduct.init(

    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            reference: {
                model: 'user',
                key: 'id',
            }
        },
        collections_id: {
            type: DataTypes.INTEGER,
            reference: {
                model: 'collections',
                key: 'id',
            }
        },
        products_id: {
            type: DataTypes.INTEGER,
            reference: {
                model: 'products',
                key: 'id',
            }
        },
    },

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'collectionProduct',
    }
)

module.exports = CollectionProduct;