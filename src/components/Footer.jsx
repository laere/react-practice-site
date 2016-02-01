var React = require('react');

var Footer = React.createClass({

    render: function() {

      var footerStyle = {
        backgroundColor: '#444',
        padding: '32px',
        position: 'absolute',
        bottom: '0',
        width: '100%',
        fontSize: '40px',
        color: 'white',
        textAlign: 'center'
      };

        return (
            <footer style={footerStyle}>
              <p>React app 2016</p>
            </footer>
        );
    }
})

module.exports = Footer;
