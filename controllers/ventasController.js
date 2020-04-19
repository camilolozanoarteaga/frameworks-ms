const venta = require('../models').Ventas;

module.exports = {
  list(res) {
    return venta
      .findAll({})
      .then(venta => res.status(200).send(venta))
      .catch(error => res.status(500).send(error));
  },

  getById(req, res) {
    return venta
      .findById(req.params.id)
      .then(venta => {
        console.log(venta);
        if (!venta) {
          return res.status(404).send({
            message: 'venta not found'
          });
        }
        return res.status(200).send(venta);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },

  add(req, res) {
    return venta
      .create({
        num_factura: req.body.num_factura,
        valor: req.body.valor,
        id_metodo_pago: req.body.id_metodo_pago,
        id_usuario: req.body.id_usuario
      })
      .then(venta => res.status(201).send(venta))
      .catch(error => res.status(500).send(error));
  },

  update(req, res) {
    return venta
      .findById(req.params.id)
      .then(venta => {
        if (!venta) {
          return res.status(404).send({
            message: 'venta not found'
          });
        }
        return venta
          .update({
            num_factura: req.body.num_factura,
            valor: req.body.valor,
            id_metodo_pago: req.body.id_metodo_pago,
            id_usuario: req.body.id_usuario
          })
          .then(venta => res.status(200).send(venta))
          .catch(error => res.status(500).send(error));
      })
      .catch(error => res.status(500).send(error));
  },

  delete(req, res) {
    return venta
      .findById(req.params.id)
      .then(venta => {
        if (!venta) {
          return res.status(404).send({
            message: 'venta not found'
          });
        }
        return venta
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
