var assert = require('assert');
var dataParser = require('../../../js/utils/data_parser');
var allBeachData = require('./all_beach_data.json');
var calumetBeachData = require('./calumet_beach_data.json');
var mostRecentCalumetBeachData = require('./most_recent_calumet_beach_data.json');

describe('DataParser', function() {
  describe('getBeachInfo', function() {
    it('extracts data about the passed beach', function() {
      assert.deepEqual(calumetBeachData, dataParser.getBeachInfo(allBeachData, "Calumet Beach"));
    });
  });

  describe('getMostRecentData', function() {
    it('selects the most recent entry', function() {
      assert.deepEqual(mostRecentCalumetBeachData, dataParser.getMostRecentData(calumetBeachData));
    });
  });
});
