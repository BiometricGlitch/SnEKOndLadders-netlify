const express = require("express");
const serverless = require("serverless-http");
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

app.engine('pug', require('pug').__express);

// Set view engine
app.set('view engine', 'pug');
app.set('views', './views');

// Serve static files
app.use(express.static('./public'));

// Route
app.get('/', (req, res) => {
  res.render('index');
});

module.exports.handler = serverless(app);