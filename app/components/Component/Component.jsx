'use strict'

var React = require('React');
require('./Component.less');

module.exports = React.createClass({displayName: 'Component',
  render: function() {
    return (
    <div className='Component-container'>
        <h1>Component!</h1>
    </div>
    );
  }
});