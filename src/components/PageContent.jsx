var React = require('react');

var PageContent = React.createClass({

  render: function() {

    var articleStyle = {
      textAlign: 'center'
    };

      return (

          <article style={articleStyle}>
            <section>
              <h2>Header here</h2>
              <p>TEXTTEXTEXTETXTETXTETETXETETETXETXETXETXETXE</p>
            </section>
            <section>
              <h2>Header here</h2>
              <p>TEXTTEXTEXTETXTETXTETETXETETETXETXETXETXETXE</p>
            </section>
            <section>
              <h2>Header here</h2>
              <p>TEXTTEXTEXTETXTETXTETETXETETETXETXETXETXETXE</p>
            </section>
            <section>
              <h2>Header here</h2>
              <p>TEXTTEXTEXTETXTETXTETETXETETETXETXETXETXETXE</p>
            </section>
          </article>
      );
  }

});

module.exports = PageContent;
