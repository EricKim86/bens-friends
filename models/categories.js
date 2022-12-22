const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class Categories extends Model {}

Categories.init(

    {
        id: int [primary key]
        cat_name: varchar
    }

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'project',
      }
)

module.exports = Categories