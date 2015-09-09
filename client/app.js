/* global global */
import React from 'react';

/** Import app styles */
import './app.less';
import 'bootstrap/dist/css/bootstrap.css';

/** Import global JS Libraries*/
import 'jquery';

/** Define App Global Constants */
const APP = {
	root: __dirname,
	component: function(componentName) {
		return __dirname + '/components/' + componentName;
	},
	page: function(pageName) {
		return __dirname + '/pages/' + pageName;
	},
	hello: function() {
		console.log("hello, world");
	}
};
export default APP;

import Main from './pages/Main';

React.render(React.createElement(Main, null), document.getElementById('app'));