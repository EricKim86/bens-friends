const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Order_Items extends Model {}

Order_Items.init(

    {
       order_id: {
        type: Datatypes.INT,
        references: {
            model: 'order',
            key: 'id'
        }
       } ,
       product_id: {
        type: Datatypes.INT,
        references: {
            model: 'products',
            key: 'id'
        }
       },
       quantity: {
        type: Datatypes.INT,
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