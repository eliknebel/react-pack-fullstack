/* global global */
import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

/** Import app styles */
import './app.less';
import 'bootstrap/dist/css/bootstrap.css';

/** Import global JS Libraries*/
import 'jquery';

/** Import pages  */
import Main from './pages/Main';

let routes = (
  <Route name="home" path="/" handler={Main}>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});