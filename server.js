var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var connection = require('./config/connection.js');

var app = express();
var port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.listen(port, function(){
  console.log("Listening on PORT " + port);
})
