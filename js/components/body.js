var React = require('react');
var Actions = require('../actions/actions');
var Store = require('../stores/store');
var DataParser = require('../utils/data_parser');
var BeachStatuses = require('./beach_statuses');
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
    return (
      <BeachStatuses beaches={this.state.beachWaterQuality} getBeachInfo={this.getBeachInfo} />
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
      <div className="body">
        <h1>Time to hit up a Chicago beach?</h1>
        {templateToPresent}
      </div>
    );
  }
});

module.exports = Body;
