$(document).ready(function () {

    /* 
    When page loads check local storage for "myGarageKey"
    if (myGarageKey)
       func getUsersCars (garageKey) {
            $.ajax('/users/' + myGarageKey)
            display rendered stuff
       } 
    else func getNewId () {
        we get a uuid
        ajax ('/newUser)
            returns a new uuid @ res.data.uuid?
            store uuid in localstorage
        getUsersCars( uuid )
    }
    */
    // $(document).on("click", "button", function () {
    //     alert("working")
    $(".searchBtn").on("click", function (event) {
        event.preventDefault();
        var car = $(".search").val().trim();
        alert("clicked")
        console.log(car);
    })

    // $('.carousel').carousel();
    $('.carousel-slider').slider({ full_width: true });

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

