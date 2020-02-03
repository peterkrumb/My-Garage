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


                // response.map(car => {
                //     console.log(car.vin);
                //     //vin ajax call
                //     $.ajax({
                //         url: `http://api.carmd.com/v3.0/image?vin=${car.vin}`,
                //         method: "GET",
                //         headers: {
                //             "content-type": "application/json",
                //             "authorization": "5f4e2ae2538a4179b169ed52eaf25833",
                //             "partner-token": "Basic MzcxZWQ3MGQtYTc4OC00YTg5LTk0OWYtYjdhYjVjMTYyNTM2"
                //         }

                //         //add key value
                //         // car=["text"] = "hello"

                //     })
                //     return car


                // })

                for (let i = 0; i < 4; i++) {

                    console.log("this is the res loop", response[i]);



                    $(".cards-row").append(` <div class="testing col s4 m3">
                    <div class="card">
                    <div class="card-image">
                        <img class="photolink" src="">
                        <span class="card-title"></span>
                        <a class="btn-floating halfway-fab waves-effect waves-light red"><i
                                class="material-icons">+</i></a>
                    </div>
                    <div class="card-content">
                       <p class="heading"></p>
                         <p class="body-type"></p>
                         <p class="drivetrain"></p>
                         <p class="engine"></p>
                         <p class="doors"></p>
                         <p class="transmission"> </p>
                     </div>
                      </div>
                      </div>`)

                    $(".photolink").attr("src", response[i].media.photo_links)
                    $(".heading").text(response[i].heading)
                    $(".body-type").text("Body Type: " + response[i].build.body_type)
                    $(".drivetrain").text("Drivetrain: " + response[i].build.drivetrain)
                    $(".engine").text("Engine: " + response[i].build.engine)
                    $(".doors").text("Doors: " + response[i].build.doors)
                    $(".transmission").text("Transmission: " + response[i].build.transmission)


                    vin = response[i]


                }




            })

    })



    var uniqueID

    //  get uniqueID from localStorage 
    uniqueID = localStorage.getItem("UUID")
    //  take a string and make an arr
    uniqueID = JSON.parse(uniqueID)
    // if uniqueID exists 
    if (uniqueID === null) {
        // assign value from lS to uniqueID
        getUUID();
    }

    function getUUID() {
        $.ajax({
            url: `/api/newUser/`,
            method: "GET"
        }).then(function (data) {
            uniqueID = data.newUser;
            storeUUID()
        })
    }



    // console.log(uniqueID);

    // storeUUID()


    function storeUUID() {
        localStorage.setItem("UUID", JSON.stringify(uniqueID));
    }












    $(".hover").mouseleave(
        function () {
            $(this).removeClass("hover");
        }
    );


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