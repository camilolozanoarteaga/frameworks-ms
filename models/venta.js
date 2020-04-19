/*jshintindent:2*/ module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'Venta',

    {
      id_venta: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      num_factura: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      valor: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      id_metodo_pago: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 'nextval(venta_id_metodo_pago_seq::regclass)' /* JARR */
      },
      id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 'nextval(venta_id_usuario_seq::regclass)' /* JARR */
      }
    },
    {
      tableName: 'venta',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      schema: 'public',
      classMethods: {
        associate: function(models) {
          models.Venta.belongsTo(
            models.MetodoPago,

            {
              foreignKey: 'id_metodo_pago'
            }
          );
          models.Venta.belongsTo(
            models.Usuario,

            {
              foreignKey: 'id_usuario'
            }
          );
        }
      }
    }
  );
};
