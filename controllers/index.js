const ciudadController = require('./ciudadController');
const insumoController = require('./insumoController');
const proveedorController = require('./proveedorController');
const proveedorIsumoController = require('./proveedorInsumoCotroller');
const rolController = require('./rolController');
const usuarioController = require('./usuarioController');
const ventaController = require('./ventasController');
const metodoPagoController = require('./metodoPagoController');

module.exports = {
  ciudadController,
  rolController,
  usuarioController,
  ventaController,
  proveedorController,
  proveedorIsumoController,
  insumoController,
  metodoPagoController
};
