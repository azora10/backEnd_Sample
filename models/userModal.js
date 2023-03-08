const db = require('../app/config/db.config');
const Sequelize = require('sequelize');
const { DataTypes } = Sequelize;


const user = db.define('user', { id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, name: { type: DataTypes.STRING }, email: { type: DataTypes.STRING }, password: { type: DataTypes.STRING }, phone: { type: DataTypes.STRING }, place: { type: DataTypes.STRING }, image: { type: DataTypes.STRING } });
// db.sync();


module.exports = user;