var request = require('superagent');

module.exports = {

  getBeachStatus: function() {
    return new Promise(function(resolve, reject) {
      request
        .get('https://data.cityofchicago.org/resource/qmqz-2xku.json')
        .end(function(err, res) {
          err ? reject(err) : resolve(res.text);
        });
    });
  }
};
