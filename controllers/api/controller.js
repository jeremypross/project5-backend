const News = require('../../services/newsapi.js');
const controller = {};

controller.getArticles = (req, res) => {
  console.log('query parameter in api controller', req.params.source)
  News
    // pass source parameter to fetch call
    .getArticles(req.params.source)
    // parse response object to json
    .then(r => r.json())
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      res
      .status(400)
      .json(err);
    });
};


module.exports = controller;
