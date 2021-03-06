const fetch = require('node-fetch');

const News = {};

const API_KEY = process.env.apiKey;

News.getArticles = (source) => {
  return fetch(`https://newsapi.org/v1/articles?source=${source}&apiKey=${API_KEY}`);
}

module.exports = News;
