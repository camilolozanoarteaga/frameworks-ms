const proveedorInsumo = require('../models').ProveedorInsumo;

module.exports = {
  list(req, res) {
    return proveedorInsumo
      .findAll({})
      .then(proveedorInsumo => res.status(200).send(proveedorInsumo))
      .catch(error => res.status(500).send(error));
  },

  getById(req, res) {
    return proveedorInsumo
      .findById(req.params.id)
      .then(proveedorInsumo => {
        if (!proveedorInsumo) {
          return res.status(404).send({
            message: 'proveedor insumo not found'
          });
        }
        return res.status(200).send(proveedorInsumo);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },

  add(req, res) {
    return proveedorInsumo
      .create({
        id_proveedor: req.body.id_proveedor,
        id_insumo: req.body.id_insumo
      })
      .then(proveedorInsumo => res.status(201).send(proveedorInsumo))
      .catch(error => res.status(500).send(error));
  },

  update(req, res) {
    return proveedorInsumo
      .findById(req.params.id)
      .then(proveedorInsumo => {
        if (!proveedorInsumo) {
          return res.status(404).send({
            message: 'proveedor insumo not found'
          });
        }
        return proveedorInsumo
          .update({
            id_proveedor: req.body.id_proveedor || proveedorInsumo.id_proveedor,
            id_insumo: req.body.id_insumo || proveedorInsumo.id_insumo
          })
          .then(proveedorInsumo => res.status(200).send(proveedorInsumo))
          .catch(error => res.status(500).send(error));
      })
      .catch(error => res.status(500).send(error));
  },

  delete(req, res) {
    return proveedorInsumo
      .findById(req.params.id)
      .then(proveedorInsumo => {
        if (!proveedorInsumo) {
          return res.status(404).send({
            message: 'proveedor insumo not found'
          });
        }
        return proveedorInsumo
          .destroy()
          .then(() => res.status(204).send({ delete: 'ok' }))
          .catch(error => {
            console.log(error);
            res.status(500).send(error);
          });
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  }
};
