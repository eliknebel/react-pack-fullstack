'use strict'

var React = require('React');
var Header = require('../../Components/Header');
var ContentPanel = require('../../Components/ContentPanel');

require('./MainPage.less');

module.exports = React.createClass({displayName: 'MainPage',
  render: function() {
    return (
    <div className='MainPage-container'>
        <Header></Header>
        <ContentPanel></ContentPanel>
    </div>
    );
  }
});