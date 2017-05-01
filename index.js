require('dotenv').config();
const express        = require('express');
const bodyParser     = require('body-parser');
const logger         = require('morgan');
const path           = require('path');
const methodOverride = require('method-override');
const expressJWT     = require('express-jwt');
const jwt            = require('jsonwebtoken');
const cors           = require('cors');
const PORT           = process.env.PORT || 3000;
const app            = express();

// config cors
let corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // IE doesn't like 204 status codes
}

// config cors
app.use(cors(corsOptions));

// config morgan
app.use(logger('dev'));

// config path
app.use(express.static(path.join(__dirname, 'public')));

// config bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// config EJS for mock views
app.set('view engine', 'ejs');

// link to resources.js
app.use('/', require('./resources'));

app.listen(PORT, () => {
  console.log('Server is listening on', PORT);
});
