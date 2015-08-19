var React = require('react');
var Actions = require('../actions/actions');
var Store = require('../stores/store');
var DataParser = require('../utils/data_parser');
var Button = require('react-bootstrap/lib/Button');

var Body = React.createClass({

  getInitialState: function() {
    return {
      beachWaterQuality: []
    }
  },

  componentDidMount: function() {
    var self = this;
    var store = new Store();

    store.addBeachStatusListener(
      function(dispatchedState) {
        self.setState({
          beachWaterQuality: DataParser.consolidateBeachWaterQualityData(dispatchedState.beachWaterQuality),
        });
      }
    );
  },

  getBeachInfo: function() {
    Actions.getBeachStatus();
  },

  getBeachInfoTemplate: function() {
    return (
      <p>
        <Button bsStyle='primary' onClick={this.getBeachInfo}>Find Out!</Button>
      </p>
    )
  },

  showBeachInfoTemplate: function() {
    var beachWaterQuality = this.state.beachWaterQuality;
    var counter = 0;

    return (
      <div>
        <div>
          <div className="col-md-4">
            <div>
              <h3>{beachWaterQuality[0].beach_name}</h3>
              <h5>Water Quality</h5>
              <p>Turbidity: {beachWaterQuality[0].turbidity}</p>
              <p>Water Temperature: {DataParser.cToF(beachWaterQuality[0].water_temperature)} degrees fahrenheit</p>
            </div>
            <div>
              <h3>{beachWaterQuality[1].beach_name}</h3>
              <h5>Water Quality</h5>
              <p>Turbidity: {beachWaterQuality[1].turbidity}</p>
              <p>Water Temperature: {DataParser.cToF(beachWaterQuality[1].water_temperature)} degrees fahrenheit</p>
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <h3>{beachWaterQuality[2].beach_name}</h3>
              <h5>Water Quality</h5>
              <p>Turbidity: {beachWaterQuality[2].turbidity}</p>
              <p>Water Temperature: {DataParser.cToF(beachWaterQuality[2].water_temperature)} degrees fahrenheit</p>
            </div>
            <div>
              <h3>{beachWaterQuality[3].beach_name}</h3>
              <h5>Water Quality</h5>
              <p>Turbidity: {beachWaterQuality[3].turbidity}</p>
              <p>Water Temperature: {DataParser.cToF(beachWaterQuality[3].water_temperature)} degrees fahrenheit</p>
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <h3>{beachWaterQuality[4].beach_name}</h3>
              <h5>Water Quality</h5>
              <p>Turbidity: {beachWaterQuality[4].turbidity}</p>
              <p>Water Temperature: {DataParser.cToF(beachWaterQuality[4].water_temperature)} degrees fahrenheit</p>
            </div>
            <div>
              <h3>{beachWaterQuality[5].beach_name}</h3>
              <h5>Water Quality</h5>
              <p>Turbidity: {beachWaterQuality[5].turbidity}</p>
              <p>Water Temperature: {DataParser.cToF(beachWaterQuality[5].water_temperature)} degrees fahrenheit</p>
            </div>
          </div>
        </div>
        <Button bsStyle='primary' onClick={this.getBeachInfo}>Refresh</Button>
      </div>
    )
  },

  render: function() {
    var templateToPresent;

    if(this.state.beachWaterQuality.length == 0) {
      templateToPresent = this.getBeachInfoTemplate();
    } else {
      templateToPresent = this.showBeachInfoTemplate();
    }

    return (
      <div style={{ "textAlign": "center", "paddingTop": "70px" }}>
        <h1>Time to hit up a Chicago beach?</h1>
        {templateToPresent}
      </div>
    );
  }
});

module.exports = Body;
