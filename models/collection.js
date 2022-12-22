const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class Collections extends Model {}

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
                key:'id',
                }
    },
        items: {
            type: DataTypes.INT,
            reference: {
                model: 'products',
                key:'id',
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