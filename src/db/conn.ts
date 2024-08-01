import { Sequelize } from "sequelize";

const sequelize = new Sequelize('juangtzc_portafolio', 'juangtzc_jmgv8719', 'Jmsa424b', {
    host: '162.241.203.241',
    dialect: 'mysql'
});

export default sequelize