'use strict'

var React = require('React');
require('./Header.less');

module.exports = React.createClass({displayName: 'Header',
  render: function() {
    return (
    <div className='Header-container'>
    <h1>React-Pack-Starter</h1>
    </div>
    );
  }
});