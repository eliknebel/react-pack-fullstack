'use strict'

var React = require('React');
var Sidebar = require('../Sidebar');
var Ribbon = require('../Ribbon');
var Listbox = require('../Listbox');
var ContentPanel = require('../ContentPanel');

require('./MainPage.less');

module.exports = React.createClass({displayName: 'MainPage',
  render: function() {
    return (
    <div className='MainPage-container'>
        <Ribbon></Ribbon>
        <div className='sizer-vertical'>
            <Sidebar></Sidebar>
            <Listbox></Listbox>
            <ContentPanel></ContentPanel>
        </div>
    </div>
    );
  }
});