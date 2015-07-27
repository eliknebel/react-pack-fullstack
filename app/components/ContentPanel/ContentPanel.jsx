'use strict'

var React = require('React');
require('./ContentPanel.less');

module.exports = React.createClass({displayName: 'ContentPanel',
  render: function() {
    return (
    <div className='ContentPanel-container'>
        <p>Start your React JS project today!</p>
    </div>
    );
  }
});