const Sequelize = require('sequelize');
const sequelize = new Sequelize('design','root','ameya',{dialect:'mysql',host:'localhost'});


module.exports=sequelize;