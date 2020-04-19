/*jshintindent:2*/ module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'Ciudad',

    {
      id_ciudad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      descripcion: {
        type: DataTypes.CHAR,
        allowNull: true
      }
    },
    {
      tableName: 'ciudad',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      schema: 'public',
      classMethods: {
        associate: function(models) {
          models.Ciudad.hasMany(
            models.Proveedor,

            {
              foreignKey: 'id_ciudad'
            }
          );
          models.Ciudad.hasMany(
            models.Usuario,

            {
              foreignKey: 'id_ciudad'
            }
          );
        }
      }
    }
  );
};
