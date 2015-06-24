var React = require('React');

/** Import app styles */
require('./app.less');
require('semantic-ui/dist/semantic.css');

/** Import global JS Libraries*/
var $ = jQuery = require('jquery');

var MainPage = require('./components/MainPage');

React.render(React.createElement(MainPage, null), document.getElementById('app'));