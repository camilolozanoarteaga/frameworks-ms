const proveedor = require('../models').Proveedor;
const ciudad = require('../models').Ciudad;

module.exports = {
  list(req, res) {
    return proveedor
      .findAll({})
      .then(proveedor => res.status(200).send(proveedor))
      .catch(error => {
        res.status(500).send(error);
      });
  },

  listDetail(req, res) {
    return proveedor
      .findAll({
        attributes: ['nombre_proveedor', 'nit'],
        include: [
          {
            model: ciudad,
            attributes: ['descripcion']
          }
        ]
      })
      .then(proveedor => res.status(200).send(proveedor))
      .catch(error => {
        res.status(500).send(error);
      });
  },

  getByIdDetail(req, res) {
    return proveedor
      .findById(req.params.id, {
        attributes: ['nombre_proveedor', 'nit'],
        include: [
          {
            model: ciudad,
            attributes: ['descripcion']
          }
        ]
      })
      .then(proveedor => {
        if (!proveedor) {
          return res.status(404).send({
            message: 'proveedor not found'
          });
        }
        return res.status(200).send(proveedor);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },

  add(req, res) {
    return proveedor
      .create({
        nombre_proveedor: req.body.nombre_proveedor,
        nit: req.body.nit,
        id_ciudad: req.body.id_ciudad
      })
      .then(proveedor => res.status(201).send(proveedor))
      .catch(error => res.status(500).send(error));
  },

  update(req, res) {
    return proveedor
      .findById(req.params.id)
      .then(proveedor => {
        if (!proveedor) {
          return res.status(404).send({
            message: 'proveedor not found'
          });
        }
        return proveedor
          .update({
            nombre_proveedor: req.body.nombre_proveedor || proveedor.nombre_proveedor,
            nit: req.body.nit || proveedor.nit,
            id_ciudad: req.body.id_ciudad || proveedor.id_ciudad
          })
          .then(proveedor => res.status(200).send(proveedor))
          .catch(error => res.status(500).send(error));
      })
      .catch(error => res.status(500).send(error));
  },

  delete(req, res) {
    return proveedor
      .findById(req.params.id)
      .then(proveedor => {
        if (!proveedor) {
          return res.status(404).send({
            message: 'proveedor not found'
          });
        }
        return proveedor
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
