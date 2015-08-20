var React = require('react');
var BeachStatus = require('./beach_status');
var Button = require('react-bootstrap/lib/Button');

var BeachStatuses = React.createClass({

  render: function() {
    var beaches = this.props.beaches;

    return (
      <div>
        <div>
          <div className="col-md-4">
            <BeachStatus beach={beaches[0]} />
            <BeachStatus beach={beaches[1]} />
          </div>
          <div className="col-md-4">
            <BeachStatus beach={beaches[2]} />
            <BeachStatus beach={beaches[3]} />
          </div>
          <div className="col-md-4">
            <BeachStatus beach={beaches[4]} />
            <BeachStatus beach={beaches[5]} />
          </div>
        </div>
        <Button bsStyle='primary' onClick={this.props.getBeachInfo}>Refresh</Button>
      </div>
    )
  }
});

module.exports = BeachStatuses;
