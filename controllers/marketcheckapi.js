var request = require("request");


$(document).ready(function () {
    $(document).on("click", "button", function () {
        alert("working")
    })
    $(".searchBtn").on("click", function (event) {
        event.preventDefault();
        var car = $(".search").val();
        alert("clicked")
        console.log(car);
    })

    module.exports = function (app) {
        app.get("/api/marketcheck", function (req, res) {
            var options = {
                method: 'GET',
                url: 'http://api.marketcheck.com/v2/search/car/active?api_key=wOLQfAk15aAqNUfsrUEHFA25GTOhALLm&year=2017',
                headers: {
                    'host': 'marketcheck-prod.apigee.net',
                }
            };
            request(options, function (error, response) {
                var parse = JSON.parse(response.body)
                console.log(parse);


                // console.log();
                // var images = parse.listings[0].media.photo_links[0]
                // images.JSON.Stringify()
                // console.log(images);


                // (parse.listings).split(",");
                // console.log(parse.listings);

                // find the array and pass it as an object in handlebars



                // res.render("index", { data: parse.listings })

            });
        })
    }