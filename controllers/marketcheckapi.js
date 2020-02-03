var request = require("request");


module.exports = function (app) {
    app.get("/api/marketcheck", function (req, res) {
        var options = {
            method: 'GET',
            url: 'http://api.marketcheck.com/v2/search/car/active?api_key=wOLQfAk15aAqNUfsrUEHFA25GTOhALLm&year=2017',
            headers: {
                host: 'marketcheck-prod.apigee.net',
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





        });
    });
    app.get("/api/marketchecksearch/:year/:make/:model", function (req, res) {

        var apiKey = "wOLQfAk15aAqNUfsrUEHFA25GTOhALLm";
        var settings = {
            url: "http://marketcheck-prod.apigee.net/v2/search/car/active?api_key=" + apiKey +
                "&year=" + req.params.year +
                "&make=" + req.params.make +
                "&model=" + req.params.model,
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        };
        // $.ajax(settings).done(function(response) {
        console.log(settings.url);

        request(settings, function (error, response) {
            var parse = JSON.parse(response.body)

            console.log("!!!!!!!!!!!!===============================!!!!!!!!!!!!!!!!!!!!!!!!!");

            console.log("!!!!!!!!!!!!===============================!!!!!!!!!!!!!!!!!!!!!!!!!");

            // console.log(parse.listings);
            var data = parse.listings

            res.json(data)
        })
    })



};

