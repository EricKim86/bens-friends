const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Order_Items extends Model { }

Order_Items.init(

    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        orders_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'orders',
                key: 'id'
            }
        },
        products_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'products',
                key: 'id'
            }
        },
        quantity: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'order_items',
    }
)

module.exports = Order_Items;