const usuario = require('../models').Usuario;
const rol = require('../models').Rol;
const ciudad = require('../models').Ciudad;

module.exports = {
  list(req, res) {
    return usuario
      .findAll({})
      .then(usuario => res.status(200).send(usuario))
      .catch(error => {
        res.status(500).send(error);
      });
  },

  listDetail(req, res) {
    return usuario
      .findAll({
        attributes: ['nombre_usuario', 'apellidos_usuario'],
        include: [
          {
            model: rol,
            attributes: ['descripcion']
          },
          {
            model: ciudad,
            attributes: ['descripcion']
          }
        ]
      })
      .then(usuario => res.status(200).send(usuario))
      .catch(error => {
        res.status(500).send(error);
      });
  },

  getByIdDetail(req, res) {
    return usuario
      .findById(req.params.id, {
        attributes: ['nombre_usuario', 'apellidos_usuario'],
        include: [
          {
            model: rol,
            attributes: ['descripcion']
          },
          {
            model: ciudad,
            attributes: ['descripcion']
          }
        ]
      })
      .then(usuario => {
        if (!usuario) {
          return res.status(404).send({
            message: 'usuario not found'
          });
        }
        return res.status(200).send(usuario);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },

  add(req, res) {
    return usuario
      .create({
        nombre_usuario: req.body.nombre_usuario,
        apellidos_usuario: req.body.apellidos_usuario,
        id_rol: req.body.id_rol,
        id_ciudad: req.body.id_ciudad
      })
      .then(usuario => res.status(201).send(usuario))
      .catch(error => res.status(500).send(error));
  },

  update(req, res) {
    return usuario
      .findById(req.params.id)
      .then(usuario => {
        if (!usuario) {
          return res.status(404).send({
            message: 'usuario not found'
          });
        }
        console.log(usuario);
        return usuario
          .update({
            nombre_usuario: req.body.nombre_usuario || usuario.nombre_usuario,
            apellidos_usuario: req.body.apellidos_usuario || usuario.apellidos_usuario,
            id_rol: req.body.id_rol || usuario.id_rol,
            id_ciudad: req.body.id_ciudad || usuario.id_ciudad
          })
          .then(usuario => res.status(200).send(usuario))
          .catch(error => res.status(500).send(error));
      })
      .catch(error => res.status(500).send(error));
  },

  delete(req, res) {
    return usuario
      .findById(req.params.id)
      .then(usuario => {
        if (!usuario) {
          return res.status(404).send({
            message: 'usuario not found'
          });
        }
        return usuario
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
