const db = require('../config/db');

const Article = {};

Article.findAll = () => {
  return db.query(`SELECT * FROM articles`);
}

Article.create = (article, id) => {
  return db.one(`
    INSERT INTO articles
    (author, title, description, url, urlToImage, published, user_id)
    VALUES
    ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
    [
      article.author,
      article.title,
      article.description,
      article.url,
      article.urlToImage,
      article.published,
      id
    ]
  )
}

module.exports = Article;
