/*jshintindent:2*/ module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'Proveedor',

    {
      id_proveedor: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      nombre_proveedor: {
        type: DataTypes.CHAR,
        allowNull: false
      },
      nit: {
        type: DataTypes.CHAR,
        allowNull: false
      },
      id_ciudad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 'nextval(proveedor_id_ciudad_seq::regclass)' /* JARR */
      }
    },
    {
      tableName: 'proveedor',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      schema: 'public',
      classMethods: {
        associate: function(models) {
          models.Proveedor.belongsTo(
            models.Ciudad,

            {
              foreignKey: 'id_ciudad'
            }
          );
          models.Proveedor.hasMany(
            models.ProveedorInsumo,

            {
              foreignKey: 'id_proveedor'
            }
          );
        }
      }
    }
  );
};
