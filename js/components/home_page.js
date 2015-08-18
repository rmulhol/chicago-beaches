var React = require('react');
var Header = require('./header');
var Body = require('./body');
var Footer = require('./footer');

var HomePage = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
});

module.exports = HomePage;
