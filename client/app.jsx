/* global global */
import React from 'react';
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'

/** Import app styles */
import './app.scss';
import 'bootstrap/dist/css/bootstrap.css';
import './theme.scss';

/** Import global JS Libraries*/
import 'jquery';

/** Import pages  */
import Main from './pages/Main';

render((
  <Router>
    <Route path="/" component={Main}>
    </Route>
  </Router>
), document.getElementById('app'));