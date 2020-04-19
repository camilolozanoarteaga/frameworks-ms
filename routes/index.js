var express = require('express');
var router = express.Router();

const ciudadController = require('../controllers').ciudadController;
const rolController = require('../controllers').rolController;
const usuarioController = require('../controllers').usuarioController;
const ventaController = require('../controllers').ventaController;
const proveedorController = require('../controllers').proveedorController;
const proveedorInsumoController = require('../controllers').proveedorIsumoController;
const insumoConstroller = require('../controllers').insumoController;
const metodoPagoController = require('../controllers/metodoPagoController');

/* Seccion de las rutas para el rol // lista  */
router.get('/api/roles', rolController.list); // select
router.get('/api/rol/:id', rolController.getById); // select
router.post('/api/rol', rolController.add); // insert
router.put('/api/rol/:id', rolController.update); // update
router.delete('/api/rol/:id', rolController.delete); // delete

/* Seccion de las rutas para el usuario //listo*/
router.get('/api/usuarios', usuarioController.list);
router.get('/api/usuariosDetail', usuarioController.listDetail);
router.get('/api/usuario/:id', usuarioController.getByIdDetail);
router.post('/api/usuario', usuarioController.add);
router.put('/api/usuario/:id', usuarioController.update);
router.delete('/api/usuario/:id', usuarioController.delete);

/* Seccion de las rutas para el venta lista */
router.get('/api/ventas', ventaController.list);
router.get('/api/venta/:id', ventaController.getById);
router.post('/api/venta', ventaController.add);
router.put('/api/venta/:id', ventaController.update);
router.delete('/api/venta/:id', ventaController.delete);

/* Seccion de las rutas para el ciudad lista */
router.get('/api/ciudades', ciudadController.list);
router.get('/api/ciudad/:id', ciudadController.getById);
router.post('/api/ciudad', ciudadController.add);
router.put('/api/ciudad/:id', ciudadController.update);
router.delete('/api/ciudad/:id', ciudadController.delete);

/* Seccion de las rutas para el proveedor // listo */
router.get('/api/proveedores', proveedorController.list);
router.get('/api/proveedoresDetail', proveedorController.listDetail);
router.get('/api/proveedor/:id', proveedorController.getByIdDetail);
router.post('/api/proveedor', proveedorController.add);
router.put('/api/proveedor/:id', proveedorController.update);
router.delete('/api/proveedor/:id', proveedorController.delete);

/* Seccion de las rutas para el proveedor insumo listo */
router.get('/api/provedoresInsumos', proveedorInsumoController.list);
router.get('/api/provedorInsumo/:id', proveedorInsumoController.getById);
router.post('/api/provedorInsumo', proveedorInsumoController.add);
router.put('/api/provedorInsumo/:id', proveedorInsumoController.update);
router.delete('/api/provedorInsumo/:id', proveedorInsumoController.delete);

/* Seccion de las rutas para el insumo lista */
router.get('/api/insumos', insumoConstroller.list);
router.get('/api/insumo/:id', insumoConstroller.getById);
router.post('/api/insumo', insumoConstroller.add);
router.put('/api/insumo/:id', insumoConstroller.update);
router.delete('/api/insumo/:id', insumoConstroller.delete);

/* Seccion de las rutas para el metodo pago //listo */
router.get('/api/metodosPago', metodoPagoController.list);
router.get('/api/metodoPago/:id', metodoPagoController.getById);
router.post('/api/metodoPago', metodoPagoController.add);
router.put('/api/metodoPago/:id', metodoPagoController.update);
router.delete('/api/metodoPago/:id', metodoPagoController.delete);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
