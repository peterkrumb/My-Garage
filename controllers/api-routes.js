var db = require("../models");
const { Op } = require("sequelize")
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

  // app.get("/garage", function (req, res) {
  //   db.myCars.findAll({}).then(function (dbCars) {
  //     console.log(dbCars);



  //     res.render("garage", { data: dbCars });
  //   });
  // });

  // app.get("garage/:uniqueID", function (req, res) {
  //   console.log("this one is req.params", req.params);

  //   db.myCars.findAll({ where: { uuid: req.params.uniqueID } }).then(function (data) {
  //     console.log("over here!", data);
  //     res.json("garage", { data: data })
  //   })
  //     .catch(function (err) {
  //       res.json(err);
  //     });

  // });

  app.get('/garage/:uniqueID', function (req, res) {
    console.log("are we working?", req.params);
    console.log(typeof req.params.uniqueID);

    db.myCars.findAll({ where: { uuid: { [Op.eq]: req.params.uniqueID } } }).then((theirCars) => {
      console.log("theircars", theirCars);
      res.render("garage", { data: theirCars });

    })
      .catch(function (err) {
        res.json(err);
      });

  })


  app.get("/api/newUser", function (req, res) {

    const newUser = uuidv1();
    res.json({
      uuid: newUser
    })
  });




  app.post("/api/search", function (req, res) {

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

        res.json(err);
      });
  });

  app.post("/api/add", function (req, res) {
    console.log("api add", req.body);
    db.myCars.create(req.body)
      .then(function (dbCars) {

        res.json(dbCars);
      })
      .catch(function (err) {

        res.json(err);
      });
  });


  app.delete("/garage/:id", function (req, res) {
    console.log("delete", req.params.id);

    db.myCars.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbCars) {

      res.redirect("/garage");

    }).catch(function (err) {

      res.json(err);
    });
  });

};