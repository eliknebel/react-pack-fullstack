var React = require('React');

/** Import app styles */
require('./app.less');
require('bootstrap/dist/css/bootstrap.css');

/** Import global JS Libraries*/
var $ = jQuery = require('jquery');

var MainPage = require('./pages/MainPage');

React.render(React.createElement(MainPage, null), document.getElementById('app'));