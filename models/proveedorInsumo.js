/*jshintindent:2*/ module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'ProveedorInsumo',

    {
      id_proveedor_insumo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      id_proveedor: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 'nextval(proveedor_insumo_id_proveedor_seq::regclass)' /* JARR */
      },
      id_insumo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 'nextval(proveedor_insumo_id_isumo_seq::regclass)' /* JARR */
      }
    },
    {
      tableName: 'proveedor_insumo',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      schema: 'public',
      classMethods: {
        associate: function(models) {
          models.ProveedorInsumo.belongsTo(
            models.Proveedor,

            {
              foreignKey: 'id_proveedor'
            }
          );
          models.ProveedorInsumo.belongsTo(
            models.Insumo,

            {
              foreignKey: 'id_insumo'
            }
          );
        }
      }
    }
  );
};
