const express = require('express');
const exphbs = require("express-handlebars");
var db = require("./models");
const app = express();
const path = require('path');
var PORT = process.env.PORT || 8080;
const mysql = require('mysql');

const uuidv1 = require('uuid/v1');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//<--Requires routes directory containing the controller-->
//var routes = require("./controllers/songs-controller.js");


// const script = require('./public/assets/js/script');

// script.getAll();

//app.use(routes);
var uuid = uuidv1()
// module.exports = uuid

//app.use(routes);
require("./controllers/api-routes.js")(app);

require("./controllers/marketcheckapi")(app);


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on http://localhost:" + PORT);
    });
});