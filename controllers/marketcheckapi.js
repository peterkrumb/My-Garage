var request = require("request");

module.exports = function (app) {

    app.get("/api/marketchecksearch/:year/:make/:model", function (req, res) {
        var apiKey = "POlC5j3EWfUO6X8WI4utjku6XhR23Evl";
        var settings = {
            "url": "http://marketcheck-prod.apigee.net/v2/search/car/active?api_key=" + apiKey +
                "&year=" + req.params.year +
                "&make=" + req.params.make +
                "&model=" + req.params.model,
            "method": "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        };
        // $.ajax(settings).done(function(response) {
        request(settings, function (error, response) {
            var parse = JSON.parse(response.body)

            console.log("!!!!!!!!!!!!===============================!!!!!!!!!!!!!!!!!!!!!!!!!");
            // console.log(response.body)
            console.log("!!!!!!!!!!!!===============================!!!!!!!!!!!!!!!!!!!!!!!!!");

            // console.log(parse.listings);
            var data = parse.listings
            console.log(data);

            res.render("index", { data: data })
        })
    })
}
