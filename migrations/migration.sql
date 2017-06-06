BEGIN TRANSACTION;

DROP TABLE IF EXISTS users;
-- DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS articles;

CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password_digest VARCHAR(255) NOT NULL
);

-- CREATE TABLE posts (
--   id BIGSERIAL PRIMARY KEY,
--   title TEXT NOT NULL,
--   content TEXT NOT NULL,
--   user_id INTEGER NOT NULL
-- );

CREATE TABLE articles (
  id BIGSERIAL PRIMARY KEY,
  author TEXT,
  title TEXT,
  description TEXT,
  url TEXT,
  urlToImage TEXT,
  published TEXT,
  user_id INTEGER REFERENCES users(id)
);

COMMIT;
