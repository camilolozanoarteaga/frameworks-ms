const ciudad = require('../models').Ciudad;

module.exports = {
  list(req, res) {
    return ciudad
      .findAll({})
      .then(ciudad => res.status(200).send(ciudad))
      .catch(error => res.status(500).send(error));
  },

  getById(req, res) {
    return ciudad
      .findById(req.params.id)
      .then(ciudad => {
        if (!ciudad) {
          return res.status(404).send({
            message: 'ciudad not found'
          });
        }
        return res.status(200).send(ciudad);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },

  add(req, res) {
    return ciudad
      .create({
        descripcion: req.body.descripcion
      })
      .then(ciudad => res.status(201).send(ciudad))
      .catch(error => res.status(500).send(error));
  },

  update(req, res) {
    return ciudad
      .findById(req.params.id)
      .then(ciudad => {
        if (!ciudad) {
          return res.status(404).send({
            message: 'ciudad not found'
          });
        }
        return ciudad
          .update({
            descripcion: req.body.descripcion
          })
          .then(ciudad => res.status(200).send(ciudad))
          .catch(error => res.status(500).send(error));
      })
      .catch(error => res.status(500).send(error));
  },

  delete(req, res) {
    return ciudad
      .findById(req.params.id)
      .then(ciudad => {
        if (!ciudad) {
          return res.status(404).send({
            message: 'ciudad not found'
          });
        }
        return ciudad
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
