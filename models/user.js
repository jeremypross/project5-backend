const bcrypt = require('bcrypt');
const db     = require('../config/db');

const User   = {};

User.findAll = () => {
  return db.query(`SELECT * FROM users`);
}

User.create = (user) => {
  console.log('User.create in model', user);
  const password = bcrypt.hashSync(user.password_digest, 10);
  return db.one(`
    INSERT INTO users
    (first_name, last_name, email, password_digest)
    VALUES
    ($1, $2, $3, $4) RETURNING *`,
    [
      user.first_name,
      user.last_name,
      user.email,
      password
    ]
  );
};

User.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM users
    WHERE id = $1;`,
    [id]
  );
};

User.findByEmail = (email) => {
  return db.oneOrNone(`
    SELECT * FROM users
    WHERE email = $1;`,
    [email]
  );
};

User.update = (user, id) => {
  const updatedPassword = bcrypt.hashSync(user.password_digest, 10);
  return db.none(`
    UPDATE users
    SET
      first_name = $1,
      last_name = $2,
      email = $3,
      password_digest = $4
    WHERE id = $5`,
    [
      user.first_name,
      user.last_name,
      user.email,
      updatedPassword,
      id
    ]
  );
}

User.destroy = (id) => {
  return db.none(`
    DELETE FROM users
    WHERE id = $1`,
    [id]
  );
};

module.exports = User;
