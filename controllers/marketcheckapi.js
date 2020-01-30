var request = require("request");
module.exports = function (app) {
    app.get("/api/marketcheck", function (req, res) {
        var options = {
            method: 'GET',
            url: 'http://api.marketcheck.com/v2/search/car/active?api_key=Ya546Kh7BRRrFkCKAeOJ5ShV6Mp1oJAD&year=2015&make=ford',
            headers: {
                'host': 'marketcheck-prod.apigee.net',
            }
        };
        request(options, function (error, response) {
            console.log(response);

        });
    })
}