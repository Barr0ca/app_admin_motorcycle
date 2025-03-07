'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Empresas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Empresas.init({
    nomeEmpresa: DataTypes.STRING,
    enderecoEmpresa: DataTypes.STRING,
    whatsappEmpresa: DataTypes.STRING,
    telefoneEmpresa: DataTypes.STRING,
    imagensEmpresa: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Empresas',
  });
  return Empresas;
};