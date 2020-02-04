var db = require("../models");
const uuidv1 = require('uuid/v1');

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
  // app.get("/garage/", function (req, res) {


  app.get("/garage", function (req, res) {
    db.myCars.findAll({}).then(function (dbCars) {
      console.log(dbCars);



      res.render("garage", { data: dbCars });
    });
  });

  app.get("garage/:uniqueID", function (req, res) {
    db.myCars.findAll({ where: { uuid: req.params.uniqueID } }).then(function (data) {
      console.log(data);
    });
  });

  app.get('/garage/:userId', function (req, res) {
    db.myCars.findAll({ where: { uuid: req.params.uniqueID } }).then((theirCars) => {
      res.json(theirCars);
    })
      .catch(function (err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });

  })


  app.get("/api/newUser", function (req, res) {

    const newUser = uuidv1();
    res.json({
      uuid: newUser
    })
  });


  // app.get('/garage/:userId', function (req, res) {
  //   db.Cars.findAll({ where: { id: req.params.userId } }).then((theirCars) => {
  //     res.render("garage", { data: theirCars })
  //   })
  // })


  app.post("/api/search", function (req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Cars.create({
      image: media.photo_links,
      heading: heading,
      body_type: build.body_type,
      driventrain: build.drivetrain,
      engine: build.engine,
      doors: build.doors,
      transmission: transmission
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

  app.post("/api/add", function (req, res) {
    console.log(req.body);
    db.myCars.create(req.body)
      .then(function (dbCars) {
        // We have access to the new Cars as an argument inside of the callback function
        res.json(dbCars);
      })
      .catch(function (err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });

  app.get("garage/:uniqueID", function (req, res) {
    db.myCars.findAll({ where: { uuid: req.params.uniqueID } }).then(function (data) {
      //console.log(data);
      var parse = JSON.parse(data);
      console.log(parse);
      res.render("garage", { data: data });
    })
  });


  app.delete("/garage/:id", function (req, res) {
    console.log(req.params.id);

    db.myCars.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbCars) {
      // We have access to the new Cars as an argument inside of the callback function
      res.redirect("/garage");

    }).catch(function (err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
      res.json(err);
    });
  });

};