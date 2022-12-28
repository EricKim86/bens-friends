const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Attributes extends Model { }

Attributes.init(

    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        pokemon: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        dungeon_dragons: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        dog: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        games: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        fashion: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        comedy: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    },

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'attribute',
    }
)

module.exports = Attributes;