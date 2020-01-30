var request = require("request");
const axios = require("axios");

function getAll() {

    var options = {
        method: 'GET',
        url: 'http://api.marketcheck.com/v2/search/car/active?api_key=Ya546Kh7BRRrFkCKAeOJ5ShV6Mp1oJAD&year=2015&make=ford',
        headers: {
            'host': 'marketcheck-prod.apigee.net',
        }
    };
    request(options, function (error, response) {
        if (error) throw error;
        var parse = JSON.parse(response.body);
        console.log(parse.listings[0].media.photo_links[0]);
        console.log(parse.listings[0].heading);
        console.log(parse.listings[0].build.body_type);
        console.log(parse.listings[0].build.drivetrain);
        console.log(parse.listings[0].build.engine);
        console.log(parse.listings[0].build.doors);
        console.log(parse.listings[0].build.transmission);


    });

}





// getAll();
module.exports = {
    getAll: getAll
}