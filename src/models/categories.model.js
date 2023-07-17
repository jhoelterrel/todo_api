const  { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Categories = db.define('categories',{
    title : {
        type: DataTypes.STRING(30),
        allowNull:false
    },
    description : {
        type:DataTypes.STRING(100),
        allowNull: true,
    },
}
);

module.exports = Categories;