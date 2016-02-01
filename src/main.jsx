var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./components/Header.jsx');
var PageContent = require('./components/PageContent.jsx');
var Footer = require('./components/Footer.jsx');

ReactDOM.render(<Header />, document.getElementById('nav'));
ReactDOM.render(<PageContent />, document.getElementById('content'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
