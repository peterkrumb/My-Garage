$(document).ready(function() {

    $(".searchBtn").on("click", function(event) {

        event.preventDefault();
        var year = $("#year").val();
        var make = $("#make").val();
        var model = $("#model").val();

        $.ajax({
            url: `/api/marketchecksearch/${year}/${make}/${model}`,
            method: "GET"

        }).done(function(response) {
            console.log(response);

        })
    })

    $("#add-btn").on("click", function(event) {
        event.preventDefault();
        console.log("hitting");
        $.ajax({
            url: `/api/add`,
            method: "POST"

        }).done(function(res) {
            console.log(res);
        })

    })
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