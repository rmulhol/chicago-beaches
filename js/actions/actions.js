var Dispatcher = require('../dispatcher/dispatcher');
var Constants = require('../constants/constants');
var WebService = require('../utils/web_service.js');

var Actions = {

  getBeachStatus: function() {
    WebService.getBeachStatus().then(function(results) {
      var beachWaterQuality = JSON.parse(results[0]);
      var beachWeather = JSON.parse(results[1]);

      Dispatcher.dispatch({
        actionType: Constants.getBeachStatus,
        beachWaterQuality: beachWaterQuality,
        beachWeather: beachWeather
      })
    }, function(error) {
      console.log(error);
    });
  }
};

module.exports = Actions;
