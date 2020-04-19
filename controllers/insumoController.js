const insumoController = require('../models').Insumo;

module.exports = {
  list(req, res) {
    return insumoController
      .findAll({})
      .then(insumo => res.status(200).send(insumo))
      .catch(error => res.status(500).send(error));
  },

  getById(req, res) {
    return insumoController
      .findById(req.params.id)
      .then(insumo => {
        if (!insumo) {
          return res.status(404).send({
            message: 'Insumo not found'
          });
        }
        return res.status(200).send(insumo);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },

  add(req, res) {
    return insumoController
      .create({
        nombre: req.body.nombre,
        valor_und: req.body.valor_und,
        cantidad: req.body.cantidad,
        fecha_compra: req.body.fecha_compra
      })
      .then(insumo => res.status(201).send(insumo))
      .catch(error => res.status(500).send(error));
  },

  update(req, res) {
    console.log(req.body);
    return insumoController
      .findById(req.params.id)
      .then(insumou => {
        if (!insumou) {
          return res.status(404).send({
            message: 'insumo not found'
          });
        }
        return insumou
          .update({
            nombre: req.body.nombre || insumou.nombre,
            valor_und: req.body.valor_und || insumou.valor_und,
            cantidad: req.body.cantidad || insumou.cantidad,
            fecha_compra: req.body.fecha_compra || insumou.fecha_compra
          })
          .then(ins => res.status(200).send(ins))
          .catch(error => res.status(500).send(error));
      })
      .catch(error => res.status(500).send(error));
  },

  delete(req, res) {
    return insumoController
      .findById(req.params.id)
      .then(insumo => {
        if (!insumo) {
          return res.status(404).send({
            message: 'insumo not found'
          });
        }
        return insumo
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
