const Post = require('../../models/Post');
const controller = {};

controller.index = (req, res) => {
  Post
    .findAll()
    .then((data) => {
      res.json(200)
    })
    .catch((err) => {
      console.log('ERROR', err);
    })
}

module.exports = controller;
