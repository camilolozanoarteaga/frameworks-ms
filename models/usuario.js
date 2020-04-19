/*jshintindent:2*/ module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'Usuario',

    {
      id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      nombre_usuario: {
        type: DataTypes.CHAR,
        allowNull: false
      },
      apellidos_usuario: {
        type: DataTypes.CHAR,
        allowNull: false
      },
      id_rol: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 'nextval(usuario_id_rol_seq::regclass)' /* JARR */
      },
      id_ciudad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 'nextval(usuario_id_ciudad_seq::regclass)' /* JARR */
      }
    },
    {
      tableName: 'usuario',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      schema: 'public',
      classMethods: {
        associate: function(models) {
          models.Usuario.belongsTo(
            models.Rol,

            {
              foreignKey: 'id_rol'
            }
          );
          models.Usuario.belongsTo(
            models.Ciudad,

            {
              foreignKey: 'id_ciudad'
            }
          );
          models.Usuario.hasMany(
            models.Venta,

            {
              foreignKey: 'id_usuario'
            }
          );
        }
      }
    }
  );
};
