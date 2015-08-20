module.exports = {

  cToF: function(c_temp) {
    return Math.round(c_temp * (9/5) + 32);
  },

  getBeachInfo: function(beachWaterQuality, beachName) {
    return beachWaterQuality.filter(function(beach) {
      return beach.beach_name == beachName;
    });
  },

  getMostRecentData: function(specificBeachData) {
    var sortedData = specificBeachData.sort(function(a, b) {
      return new Date(b.measurement_timestamp) - new Date(a.measurement_timestamp);
    });
    return sortedData[0];
  },

  consolidateBeachWaterQualityData: function(beachWaterQuality) {
    var self = this;
    var beaches = ["Calumet Beach", "Montrose Beach", "Ohio Street Beach",
                   "Osterman Beach", "63rd Street Beach", "Rainbow Beach"];
    var beachesWithWaterQuality = [];

    beaches.forEach(function(beach) {
      var thisBeachInfo = self.getBeachInfo(beachWaterQuality, beach);
      var mostRecentEntry = self.getMostRecentData(thisBeachInfo);
      beachesWithWaterQuality.push(mostRecentEntry)
    });

    return beachesWithWaterQuality;
  }
}
