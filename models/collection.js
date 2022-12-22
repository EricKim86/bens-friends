const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Collections extends Model { }

Collections.init(

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
                model: 'users',
                key: 'id',
            }
        },
        products_id: {
            type: DataTypes.INTEGER,
            reference: {
                model: 'products',
                key: 'id',
            }
        }
    },

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'collections',
    }
)

module.exports = Collections;