const db = require("../models");

module.exports = {
    findAll: function(req, res) {
      db.Botanist
        .find(req.query)
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(404).json(err));
    },
    findOne: function(req, res) {
      db.Botanist
        .findOne({id: req.params.id})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(404).json(err));
    },
    save: function(req, res) {
      db.Botanist
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(404).json(err));
    },
    remove: function(req, res) {
      db.Botanist
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(404).json(err));
    }
  };