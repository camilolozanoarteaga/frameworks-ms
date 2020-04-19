/*jshintindent:2*/ module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'MetodoPago',

    {
      id_metodo_pago: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      descripcion: {
        type: DataTypes.CHAR,
        allowNull: false
      }
    },
    {
      tableName: 'metodo_pago',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      schema: 'public',
      classMethods: {
        associate: function(models) {
          models.MetodoPago.hasMany(
            models.Venta,

            {
              foreignKey: 'id_metodo_pago'
            }
          );
        }
      }
    }
  );
};
