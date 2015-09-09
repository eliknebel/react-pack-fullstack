'use strict'

import React from 'react';
import Component from 'app/components';
import './ContentPanel.less';

export default class ContentPanel extends Component {
  render() {
    return (
    <div className='ContentPanel'>
    <p>Ready... Go! Get started coding something <a href="http://facebook.github.io/react/docs/tutorial.html">cool</a></p>
    </div>
    );
  }
};