const bcrypt = require('bcrypt');
const jwt    = require('jsonwebtoken');

const User = require('../../models/User');

const controller = {};

controller.index = (req, res) => {
  User
    .findAll()
    .then((users) => {
      res.json(users)
    })
    .catch((err) => {
      res
      .status(400)
      .json(err);
    });
}

controller.authorizeToken = (req, res) => {
  jwt.verify(req.headers.authorization, 'taco cat', (err, decoded) => {
    if (err) {
      res
        .status(401)
        .json({ error: err.message });
    } else {
      res.status(200)
      console.log('*** Token Successfully Authorized! ***');
      // FIND SAVED ITEMS BY USER EMAIL TO DASHBOARD HERE
    }
  })
}

controller.login = (req, res) => {
  User
    .findByEmail(req.body.user.email)
    .then((user) => {
      // if user exists
      if (user) {
        const isAuthed = bcrypt.compareSync(req.body.user.password, user.password_digest);
        if (isAuthed) {
          // create token with email from user record with options
          const token = jwt.sign({
            email: user.email,
            user_id: user.id
          }, 'taco cat', { expiresIn: '7d' });
            // response: token and user id
            res.json({ token: {
              token: token,
              user_id: user.id,
              loggedIn: true
            }
          });
        } else {
          res.sendStatus(401)
        }
      } else {
        res.status(404)
        .json({ error: 'No user found' });
      }
    });
}

controller.create = (req, res) => {
  User
    .create(req.body.user)
    .then((data) => {
      res.status(201)
      res.json({ user: data })
    })
    .catch((err) => console.log('ERROR', err));
};

controller.delete = (req, res) => {
  User
    .destroy(req.params.id)
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => {
      res
      .status(400)
      .json(err);
    });
};

module.exports = controller;
