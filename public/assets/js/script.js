$(document).ready(function () {

    var vin = ""

    $(".searchBtn").on("click", function (event) {

        event.preventDefault();


        $(".marquee").addClass("hide")



        var year = $("#year").val();
        var make = $("#make").val();
        var model = $("#model").val();
        // var apiKey = "POlC5j3EWfUO6X8WI4utjku6XhR23Evl";
        // var settings = {
        //     "url": "http://marketcheck-prod.apigee.net/v2/search/car/active?api_key=" + apiKey +
        //         "&year=" + year +
        //         "&make=" + make +
        //         "&model=" + model,
        //     "method": "GET",
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // };
        // console.log(year, make, model);

        $.ajax({
            url: `/api/marketchecksearch/${year}/${make}/${model}`,
            method: "GET"

        })
            .done(function (response) {
                $('.cards-row').empty()
                console.log(response);



                for (let i = 0; i < 4; i++) {
                    console.log(response[i]);

                    // var responses = JSON.stringify(response[i])
                    // console.log("this is the res loop" + JSON.stringify(response[i]));

                    // $('.cards-row' + [i]).empty()
                    $(".cards-row").append(` <div class="testing col s4 m3">
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
                         <p class="drivetrain">Driventrain: ${response[i].build.drivetrain}</p>
                         <p class="engine">Engine: ${response[i].build.engine}</p>
                         <p class="doors">Doors: ${response[i].build.doors}</p>
                         <p class="transmission">Transmission: ${response[i].build.transmission}</p>
                     </div>
                      </div>
                      </div>`)


                    // $(".photolink").attr("src", response[i].media.photo_links)
                    // $(".heading").text(response[i].heading)
                    // $(".body-type").text("Body Type: " + response[i].build.body_type)
                    // $(".drivetrain").text("Drivetrain: " + response[i].build.drivetrain)
                    // $(".engine").text("Engine: " + response[i].build.engine)
                    // $(".doors").text("Doors: " + response[i].build.doors)
                    // $(".transmission").text("Transmission: " + response[i].build.transmission)

                    // vin = response[i]

                }

            })

    })

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
                uuid: localStorage.getItem("UUID")
            }
            //console.log(userCar);



        $.ajax({
            url: `/api/add`,
            method: "POST",
            data: userCar
        })
            .done(function (response) {
                console.log(response);

            })

    })

    var uniqueID

    //  get uniqueID from localStorage 
    uniqueID = localStorage.getItem("UUID")
    //  take a string and make an arr
    uniqueID = JSON.parse(uniqueID)
    // if uniqueID exists 
    if (uniqueID === null) {
        console.log("id is null")
        // assign value from lS to uniqueID
        getUUID();
    }

    function getUUID() {
        $.ajax({
            url: `/api/newUser/`,
            method: "GET"
        }).then(function (data) {
            // console.log("received uuid");

            uniqueID = data.uuid;
            storeUUID()
        })
    }


    function getCarsbyUUID() {
        $.ajax({
                url: `/garage/${uniqueID}`,
                method: "GET"
            })
            .done(function(response) {
                var parse = JSON.parse(response);
                //console.log(parse);



                for (let i = 0; i < 8; i++) {
                    //console.log(response[i]);

                    // var responses = JSON.stringify(response[i])
                    // console.log("this is the res loop" + JSON.stringify(response[i]));

                    // $('.cards-row' + [i]).empty()
                    $("body").append(` <div class="testing col s4 m3">
                    <div class="card">
                    <div class="card-image">
                        <img id="height1" class="photolink" src="${response[i].media.photo_links}">
                        <span class="card-title"></span>
                    
                    </div>
                    <div id="height2" class="card-content">
                       <p class="heading">${response[i].heading}</p>
                         <p class="body-type">Body-type: ${response[i].build.body_type}</p>
                         <p class="drivetrain">Driventrain: ${response[i].build.drivetrain}</p>
                         <p class="engine">Engine: ${response[i].build.engine}</p>
                         <p class="doors">Doors: ${response[i].build.doors}</p>
                         <p class="transmission">Transmission: ${response[i].build.transmission}</p>
                     </div>
                      </div>
                      </div>`)
                }
            })
    }
    getCarsbyUUID()
        // console.log(uniqueID);

    // storeUUID()


    function storeUUID() {
        console.log("storing uuid");

        localStorage.setItem("UUID", uniqueID);
        console.log("id stored");

    }

    console.log(uniqueID);

    function getCarsbyUUID() {
        $.ajax({
            url: `/garage/${uniqueID}`,
            method: "GET"
        }).then(function (data) {

            console.log("new data=================", data);




        })
    }


    getCarsbyUUID()




})





// function getAll() {

//     var options = {
//         method: 'GET',
//         url: 'http://api.marketcheck.com/v2/search/car/active?api_key=Ya546Kh7BRRrFkCKAeOJ5ShV6Mp1oJAD&year=2015&make=ford',
//         headers: {
//             'host': 'marketcheck-prod.apigee.net',
//         }
//     };
//     request(options, function (error, response) {
//         if (error) throw error;
//         var parse = JSON.parse(response.body);
//         var image = parse.listings[0].media.photo_links[0]
//         $(".car-image").attr("src", image);
//         $(".heading").text(parse.listings[0].heading);

//         console.log(parse.listings[0].media.photo_links[0]);
//         console.log(parse.listings[0].heading);
//         console.log(parse.listings[0].build.body_type);
//         console.log(parse.listings[0].build.drivetrain);
//         console.log(parse.listings[0].build.engine);
//         console.log(parse.listings[0].build.doors);
//         console.log(parse.listings[0].build.transmission);


//     });

// }




// getAll();
// module.exports = {
//     getAll: getAll
// }