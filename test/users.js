const request = require('supertest');
const expect  = require('chai').expect;
const app     = require('../index');
const User    = require('../models/User');

describe('Users', () => {

  let user;

  before((done) => {

    User
      .create({
        first_name: "Jeremy",
        last_name: "Ross",
        email: "jeremy@ross.com",
        password_digest: "password"
      })
      .then((data) => {
        user = data;
        done();
      });
  })

  after((done) => {
    done();
  })

  it('GET /users should return a 200 status code and be an array', (done) => {
    request(app)
    .get('/users')
    .end((err, results) => {
      expect(results.statusCode).to.equal(200);
      expect(results.body).to.be.an.instanceOf(Array);
      done();
    })
  })

  it('GET /users/:id should return a 200 status code and be an Object', (done) => {
    request(app)
    .get(`/users/${user.id}`)
    .end((err, results) => {
      expect(results.statusCode).to.equal(200);
      expect(results.body).to.be.an.instanceOf(Object);
      done();
    })
  })

  it('POST /users should return a 201 status code and be an object', (done) => {
    request(app)
    .post(`/users`)
    .send({
      user: {
        first_name: "John",
        last_name: "Smith",
        email: "john@smith.com",
        password_digest: "password"
      }
    })
    .end((err, results) => {
      expect(results.statusCode).to.equal(201);
      expect(results.body).to.be.an.instanceOf(Object);
      expect(results.body).to.not.be.an.instanceOf(Array);
      done();
    })
  })

  it('PUT /users/:id should return a 200 status code', (done) => {
    request(app)
    .put(`/users/${user.id}`)
    .send({
      user: {
        first_name: "Paul",
        last_name: "Jones",
        email: "paul@jones.com",
        password_digest: "password"
      }
    })
    .end((err, results) => {
      expect(results.statusCode).to.equal(200);
      done();
    })
  })

  it('DELETE /users/:id should return a 200 status code', (done) => {
    request(app)
    .delete(`/users/${user.id}`)
    .end((err, results) => {
      expect(results.statusCode).to.equal(200);
      done();
    })
  })


});
