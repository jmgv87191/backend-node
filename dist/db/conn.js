"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('juangtzc_portafolio', 'juangtzc_jmgv8719', 'Jmsa424b', {
    host: '162.241.203.241',
    dialect: 'mysql'
});
exports.default = sequelize;
