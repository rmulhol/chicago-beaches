var React = require('react');
var Actions = require('../actions/actions');
var Store = require('../stores/store');
var DataParser = require('../utils/data_parser');
var Button = require('react-bootstrap/lib/Button');

var Body = React.createClass({

  getInitialState: function() {
    return {
      beachWaterQuality: [],
      beachWeather: [],
    }
  },

  componentDidMount: function() {
    var self = this;
    var store = new Store();

    store.addBeachStatusListener(
      function(dispatchedState) {
        self.setState({
          beachWaterQuality: DataParser.consolidateBeachWaterQualityData(dispatchedState.beachWaterQuality),
          beachWeather: dispatchedState.beachWeather
        });
      }
    );
  },

  getBeachInfo: function() {
    Actions.getBeachStatus();
  },

  render: function() {
    var beachWaterQuality = this.state.beachWaterQuality;
    var counter = 0;

    return (
      <div style={{ "textAlign": "center", "paddingTop": "70px" }}>
        <h1>Time to hit up a Chicago beach?</h1>
        <p>
          <Button bsStyle='primary' onClick={this.getBeachInfo}>Find Out!</Button>
        </p>

        <ul>
          {beachWaterQuality.map(function(beach) {
            return <li key={counter++}>
              <h1>{beach.beach_name}</h1>
              <p>Turbidity: {beach.turbidity}</p>
              <p>Temperature: {beach.water_temperature}</p>
            </li>;
          })}
        </ul>


      </div>
    );
  }
});

module.exports = Body;
