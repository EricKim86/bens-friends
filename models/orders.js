const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Orders extends Model {}

Orders.init(

    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
    },
      user_id: {
        references: {
            model: 'users',
            key: 'id',
        }
      },
      status: {
        type: DataTypes.VARCHAR,
      }
    },

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'orders',
      }
)

module.exports = Orders;