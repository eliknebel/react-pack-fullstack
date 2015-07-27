'use strict'

var React = require('React');
require('./Example.less');

module.exports = React.createClass({displayName: 'Example',
  render: function() {
    return (
    <div className='Example-container'>
        <h1>Example Component!</h1>
    </div>
    );
  }
});
