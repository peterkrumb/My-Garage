const express = require('express');
const app = express();
const path = require('path');
var PORT = process.env.PORT || 8080;
const mysql = require('mysql');

const uuidv1 = require('uuid/v1');

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//<--Requires routes directory containing the controller-->
//var routes = require("./controllers/songs-controller.js");


const script = require('./public/assets/js/script');

script.getAll();
//app.use(routes);

app.listen(PORT, function () {
    console.log('Server listening on: http://localhost:' + PORT);
});