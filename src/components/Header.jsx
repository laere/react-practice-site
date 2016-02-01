var React = require('react');

var Header = React.createClass({

  render: function() {
    var navbarStyle = {
      fontFamily: 'Lucida Console',
      fontSize: '30px',
      padding: '48px',
      color: 'white',
      backgroundColor: '#444',
      borderBottom: '10px solid #222',
      margin: '0'
    };

    var header = {
      fontSize: '50px',
    };

    var navLinks = {
      display: 'inline-block',
      marginRight: '16px',
      padding: '0 16px',
      backgroundColor: '#222',
      borderRadius: '10px'
    };

    var ul = {
      padding: '0',
      margin: '0'
    }

    return (
      <div style={navbarStyle}>
          <h1 style={header}>Navbar</h1>
          <div>
            <ul style={ul}>
                <li style={navLinks}>Link</li>
                <li style={navLinks}>Link</li>
                <li style={navLinks}>Link</li>
                <li style={navLinks}>Link</li>
                <li style={navLinks}>Link</li>
            </ul>
          </div>

        </div>
    );

  }

});

module.exports = Header;
