const express = require("express");
const serverless = require("serverless-http");
const path = require('path');

const app = express();

// Set view engine
app.engine('pug', require('pug').__express)
app.set('view engine', 'pug');
app.set('views', './views');

// Serve static files
app.use(express.static('public'));

// Route
app.get('/', (req, res) => {
  res.render('index.pug');
});

module.exports.handler = serverless(app);