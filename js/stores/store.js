var Dispatcher = require('../dispatcher/dispatcher');
var EventEmitter = require('events').EventEmitter;
var util = require('util');
var Constants = require('../constants/constants');

var Store = function() {
  EventEmitter.call(this);
  var self = this;

  emitBeachStatus = function(action) {
    self.emit(Constants.getBeachStatus, {
      beachWaterQuality: action.beachWaterQuality,
      beachWeather: action.beachWeather
    });
  };

  this.addBeachStatusListener = function(cb) {
    self.on(Constants.getBeachStatus, cb);
  };

  this.dispatchToken = Dispatcher.register(function(action) {
    switch (action.actionType) {
      case Constants.getBeachStatus:
        emitBeachStatus(action);
        break;
    }
  });
};
util.inherits(Store, EventEmitter);

module.exports = Store;
