'use strict'

var React = require('React');
require('./ContentPanel.less');

var S = require('semantic-ui/dist/semantic.js');

module.exports = React.createClass({displayName: 'ContentPanel',
  render: function() {
    return (
    <div className='ContentPanel-container'>
        <h1>Component!</h1>
    </div>
    );
  }
});