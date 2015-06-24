'use strict'

var React = require('React');
require('./Sidebar.less');

module.exports = React.createClass({displayName: 'Sidebar',
  render: function() {
    return (
    <div className='Sidebar-container'>
        <h1>Component!</h1>
    </div>
    );
  }
});