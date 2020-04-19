const metodoPago = require('../models').MetodoPago;

module.exports = {
  list(req, res) {
    return metodoPago
      .findAll({})
      .then(metodoPago => res.status(200).send(metodoPago))
      .catch(error => res.status(500).send(error));
  },

  getById(req, res) {
    return metodoPago
      .findById(req.params.id)
      .then(metodoPago => {
        if (!metodoPago) {
          return res.status(404).send({
            message: 'metodo pago not found'
          });
        }
        return res.status(200).send(metodoPago);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },

  add(req, res) {
    return metodoPago
      .create({
        descripcion: req.body.descripcion
      })
      .then(metodoPago => res.status(201).send(metodoPago))
      .catch(error => res.status(500).send(error));
  },

  update(req, res) {
    return metodoPago
      .findById(req.params.id)
      .then(metodoPago => {
        if (!metodoPago) {
          return res.status(404).send({
            message: 'metodo pago not found'
          });
        }
        return metodoPago
          .update({
            descripcion: req.body.descripcion
          })
          .then(metodoPago => res.status(200).send(metodoPago))
          .catch(error => res.status(500).send(error));
      })
      .catch(error => res.status(500).send(error));
  },

  delete(req, res) {
    return metodoPago
      .findById(req.params.id)
      .then(metodoPago => {
        if (!metodoPago) {
          return res.status(404).send({
            message: 'metodo pago not found'
          });
        }
        return metodoPago
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
