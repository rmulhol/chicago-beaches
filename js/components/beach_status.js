var React = require('react');
var DataParser = require('../utils/data_parser');

var BeachStatus = React.createClass({

  render: function() {
    var beach = this.props.beach;

    return (
      <div className="beachStatus">
        <h3>{beach.beach_name}</h3>
        <h5>Water Quality</h5>
        <p>Turbidity: {beach.turbidity} NTU</p>
        <p>Water Temperature: {DataParser.cToF(beach.water_temperature)}&deg; F</p>
      </div>
    )
  }

});

module.exports = BeachStatus;
