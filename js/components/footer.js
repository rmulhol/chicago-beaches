var React = require('react');
var Navbar = require('react-bootstrap/lib/Navbar');
var Nav = require('react-bootstrap/lib/Nav');
var NavItem = require('react-bootstrap/lib/NavItem');

var Footer = React.createClass({
  render: function() {
    return (
      <div>
        <Navbar fixedBottom>
          <Nav right>
            <NavItem>Contact</NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
});

module.exports = Footer;
