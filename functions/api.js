const express = require("express");
const serverless = require("serverless-http");
const path = require('path');

const app = express();

// Set view engine
app.engine('pug', require('pug').__express);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/views'));

// Serve static files
app.use(express.static(path.join(__dirname, '/public')));

// Route
app.get('/', (req, res) => {
  res.render('index');
});

module.exports.handler = serverless(app);