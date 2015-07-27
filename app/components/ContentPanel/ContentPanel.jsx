'use strict'

var React = require('React');
require('./ContentPanel.less');

module.exports = React.createClass({displayName: 'ContentPanel',
  render: function() {
    return (
    <div className='ContentPanel-container'>
    <p>Ready... Go! Get started coding something <a href="http://facebook.github.io/react/docs/tutorial.html">cool</a></p>
    </div>
    );
  }
});