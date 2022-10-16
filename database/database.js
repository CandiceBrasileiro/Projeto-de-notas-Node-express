const Sequelize = require('sequelize');

const connection = new Sequelize('exercicioNode', 'root', 'bibi1fred2Msql', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = connection;