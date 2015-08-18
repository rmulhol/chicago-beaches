var React = require('react');
var Navbar = require('react-bootstrap/lib/Navbar');
var Nav = require('react-bootstrap/lib/Nav');
var NavItem = require('react-bootstrap/lib/NavItem');

var Header = React.createClass({
  render: function() {
    return (
      <Navbar fixedTop brand='Beach?'>
        <Nav right>
          <NavItem href='#'>Home</NavItem>
          <NavItem href='#'>About</NavItem>
        </Nav>
      </Navbar>
    );
  }
});

module.exports = Header;
