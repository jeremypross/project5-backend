const db = require('../config/db');

Post.findAll = () => {
  return db.query(`SELECT * FROM posts`);
}

Post.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM posts
    WHERE id = $1;`,
    [id]
  )
}

Post.update = (post, id) => {
  return db.none(`
    UPDATE posts
    SET
      title = $1,
      content = $2,
      user_id = $3
    WHERE id = $4`,
    [
      post.title,
      post.content,
      post.user_id,
      id
    ]
  );
}

Post.destroy = (id) => {
  return db.none(`
    DELETE FROM posts
    WHERE id = $1`,
    [id]
  );
};

module.exports = Post;
