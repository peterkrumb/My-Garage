// import { response } from "express";

$(document).ready(function () {
  $(".searchBtn").on("click", function (event) {
    event.preventDefault();

    $(".marquee").addClass("hide");

    var year = $("#year").val();
    var make = $("#make").val();
    var model = $("#model").val();

    $.ajax({
      url: `/api/marketchecksearch/${year}/${make}/${model}`,
      method: "GET",
    }).done(function (response) {
      if (response.length == 0) {
        var modal = document.querySelector(".modal1");
        modal.style.display = "block";
      } else {
        $(".cards-row").empty();
        $(".marquee").addClass("hide");
        console.log(response);

        for (let i = 0; i < 4; i++) {
          console.log(response[i]);

          $(".cards-row").append(` <div class="main-cards col s4 m3">
                              <div class="card">
                              <div class="card-image">
                                  <img id="height1" class="photolink" src="${response[i].media.photo_links[0]}">
                                  <span class="card-title"></span>
                                  <a class="btn-floating halfway-fab waves-effect waves-light red" data-body_type=${response[i].build.body_type} data-engine="${response[i].build.engine}" data-img="${response[i].media.photo_links[0]}" data-drivetrain="${response[i].build.drivetrain}" data-doors="${response[i].build.doors}" data-transmission="${response[i].build.transmission}" data-heading="${response[i].heading}" id="add-btn"><i
                                          class="material-icons"  data-engine=${response[i]} data-image data- body_type data-drivetrain data-doors data-transmission>+</i></a>
                              
                              </div>
                              <div id="height2" class="card-content">
                                 <p class="heading">${response[i].heading}</p>
                                   <p class="body-type">Body-type: ${response[i].build.body_type}</p>
                                   <p class="drivetrain">Drivetrain: ${response[i].build.drivetrain}</p>
                                   <p class="engine">Engine: ${response[i].build.engine}</p>
                                   <p class="doors">Doors: ${response[i].build.doors}</p>
                                   <p class="transmission">Transmission: ${response[i].build.transmission}</p>
                               </div>
                                </div>
                                </div>`);
        }
      }
    });
  });
  // add car button and put in database
  $(document).on("click", "#add-btn", function (event) {
    // event.preventDefault();
    console.log("hitting");

    const userCar = {
      image: $(this).data("img"),
      heading: $(this).data("heading"),
      body_type: $(this).data("body_type"),
      drivetrain: $(this).data("drivetrain"),
      engine: $(this).data("engine"),
      doors: $(this).data("doors"),
      transmission: $(this).data("transmission"),
      uuid: localStorage.getItem("UUID"),
    };
    //console.log(userCar);

    $.ajax({
      url: `/api/add`,
      method: "POST",
      data: userCar,
    }).done(function (response) {
      console.log(response);
    });
  });

  var uniqueID;

  //  get uniqueID from localStorage
  uniqueID = localStorage.getItem("UUID");

  //  take a string and make an arr
  //================================================
  // uniqueID = JSON.parse(uniqueID)
  // ===============================================
  // if uniqueID exists
  if (uniqueID === null) {
    console.log("id is null");
    // assign value from lS to uniqueID
    getUUID();
  }
  console.log(typeof uniqueID);

  function getUUID() {
    $.ajax({
      url: `/api/newUser/`,
      method: "GET",
    }).then(function (data) {
      // console.log("received uuid");
      uniqueID = data.uuid;
      storeUUID();
    });
  }

  function storeUUID() {
    console.log("storing uuid");

    localStorage.setItem("UUID", uniqueID);
    console.log("id stored");
  }

  console.log(uniqueID);

  function getCarsbyUUID() {
    $.ajax({
      url: `/garage/${uniqueID}`,
      method: "GET",
    });
  }

  $("#myGarage").on("click", event => {
    event.preventDefault();
    console.log("======click event=======");
    window.location.href = "/garage/" + uniqueID;
    // window.location.href = "localhost:8080/garage/" + uniqueID
  });

  // getCarsbyUUID()

  $(document).on("click", ".delete-car", handleDeleteButtonPress);

  function handleDeleteButtonPress() {
    console.log(event);
    console.log(event.target.id);

    var id = event.target.id;
    $.ajax({
      method: "DELETE",
      url: "/garage/" + id,
    }).then(location.reload());
  }
});
