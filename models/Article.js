const db = require('../config/db');

const Article = {};

Article.findAll = () => {
  return db.query(`SELECT * FROM articles`);
}

Article.create = (article) => {
  console.log("MODEL: ARTICLE", article);
  return db.none(`
    INSERT INTO articles
    (author, title, description, url, urlToImage, published, user_id)
    VALUES
    ($1, $2, $3, $4, $5, $6, $7)`,
    [
      article.author,
      article.title,
      article.description,
      article.url,
      article.urlToImage,
      article.published,
      article.user_id
    ]
  )
}

module.exports = Article;
