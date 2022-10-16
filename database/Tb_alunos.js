const Sequelize = require("sequelize");
const connection = require("./database");

const CadastroMedia = connection.define('alunos', { // esse 'aluno' é o nome da tabela
  nome: {
      type: Sequelize.STRING(80),
      allowNull: false,
  },
  nota1: {
      type: Sequelize.FLOAT,
      allowNull: false
  },
  nota2: {
      type: Sequelize.FLOAT,
      allowNull: false
  }
  });

  CadastroMedia.sync({force: false}).then(() => {});

  module.exports = CadastroMedia;
