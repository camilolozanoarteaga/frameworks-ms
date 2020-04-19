/*jshintindent:2*/ module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'Insumo',

    {
      id_insumo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      nombre: {
        type: DataTypes.CHAR,
        allowNull: false
      },
      valor_und: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 'nextval(insumo_valor_und_seq::regclass)'
      },
      cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      fecha_compra: {
        type: DataTypes.DATEONLY,
        allowNull: false
      }
    },
    {
      tableName: 'insumo',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      schema: 'public',
      classMethods: {
        associate: function(models) {
          models.Insumo.hasMany(
            models.ProveedorInsumo,

            {
              foreignKey: 'id_insumo'
            }
          );
        }
      }
    }
  );
};
