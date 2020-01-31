var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the Cars
  app.get("/", function (req, res) {
    // console.log("hitting route");
    // console.log(req);

    db.Cars.findAll({}).then(function (dbCars) {
      console.log(dbCars);

      res.render("index", { data: dbCars });
    });
  });

  app.get("/garage", function (req, res) {
    db.Cars.findAll({}).then(function (dbCars) {
      console.log(dbCars);

      res.render("garage", { data: dbCars });
    })
  });

  app.get("/newUser", function (req, res) {

    const newUser = new UUID;
    res.json({
      uuid: newUser
    })
  });

  app.get('/garage/:userId', function (req, res) {
    db.Cars.findAll({ where: { id: req.params.userId } }).then((theirCars) => {
      res.render("garage", { data: theirCars })
    })
  })


  app.post("/api/search", function (req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Cars.create({
      name: req.body.name,
      year: req.body.year
    }).then(function (dbCars) {
      // We have access to the new Cars as an argument inside of the callback function
      res.json(dbCars);
    })
      .catch(function (err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });
  // DELETE route for deleting todos. We can get the id of the todo to be deleted from
  // req.params.id
  app.delete("/api/garage/:id", function (req, res) {
    // We just have to specify which todo we want to destroy with "where"
    db.Cars.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbCars) {
      res.json(dbCars);
    });

  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  //   app.put("/api/todos", function(req, res) {

  //     // Update takes in an object describing the properties we want to update, and
  //     // we use where to describe which objects we want to update
  //     db.Todo.update({
  //       text: req.body.text,
  //       complete: req.body.complete
  //     }, {
  //       where: {
  //         id: req.body.id
  //       }
  //     }).then(function(dbTodo) {
  //       res.json(dbTodo);
  //     })
  //       .catch(function(err) {
  //       // Whenever a validation or flag fails, an error is thrown
  //       // We can "catch" the error to prevent it from being "thrown", which could crash our node app
  //         res.json(err);
  //       });
  //   });
};