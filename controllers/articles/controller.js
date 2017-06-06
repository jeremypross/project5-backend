const Article = require('../../models/Article');
const controller = {};

controller.index = (req, res) => {
  Article
    .findAll()
    .then((data) => {
      res.json(200)
    })
    .catch((err) => {
      console.log('ERROR', err);
    })
}

controller.create = (req, res) => {
  Article
    .create()
    .then((data) => {
      res.json(200)
    })
    .catch((err) => {
      console.log('ERROR', err);
    })
}

module.exports = controller;
