const express = require('express');
const exphbs = require("express-handlebars");
var db = require("./models");
const app = express();
const path = require('path');
var PORT = process.env.PORT || 8080;
const mysql = require('mysql');
var compression = require('compression')


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//<--Requires routes directory containing the controller-->

require("./controllers/api-routes.js")(app);

require("./controllers/marketcheckapi")(app);


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("App listening on http://localhost:" + PORT);
    });
});