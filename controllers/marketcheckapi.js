var request = require("request");


module.exports = function(app) {
    app.get("/api/marketchecksearch/:year/:make/:model", function(req, res) {

        var apiKey = "1MtnufSBkehJUjAvxLvHAKNOQZAG83hO";
        var settings = {
            url: "http://marketcheck-prod.apigee.net/v2/search/car/active?api_key=" + "1MtnufSBkehJUjAvxLvHAKNOQZAG83hO" +
                "&year=" + req.params.year +
                "&make=" + req.params.make +
                "&model=" + req.params.model,
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        };

        console.log(settings.url);

        request(settings, function(error, response) {
            var parse = JSON.parse(response.body)
            var data = parse.listings

            res.json(data)
        })
    })



};