var request = require('superagent');

module.exports = {

  getBeachStatus: function() {
    var beachWaterQuality = new Promise(function(resolve, reject) {
      request
        .get('https://data.cityofchicago.org/resource/qmqz-2xku.json')
        .end(function(err, res) {
          err ? reject(err) : resolve(res.text);
        });
    });

    var beachWeather = new Promise(function(resolve, reject) {
      request
        .get('https://data.cityofchicago.org/resource/k7hf-8y75.json')
        .end(function(err, res) {
          err ? reject(err) : resolve(res.text);
        })
    });

    return Promise.all([beachWaterQuality, beachWeather]);
  }
};
