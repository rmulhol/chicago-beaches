var Dispatcher = require('../dispatcher/dispatcher');
var Constants = require('../constants/constants');
var WebService = require('../utils/web_service.js');

var Actions = {

  getBeachStatus: function() {
    WebService.getBeachStatus().then(function(results) {
      Dispatcher.dispatch({
        actionType: Constants.getBeachStatus,
        beachWaterQuality: JSON.parse(results)
      })
    }, function(error) {
      console.log(error);
    });
  }
};

module.exports = Actions;
