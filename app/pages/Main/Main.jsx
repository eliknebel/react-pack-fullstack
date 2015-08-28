'use strict'

import React from 'react';
import Page from 'app/pages';
import Header from 'app/components/Header';
import ContentPanel from 'app/components/ContentPanel';

import './Main.less';

export default class Main extends Page {
  render() {
    return (
    <div className='MainPage'>
        <Header></Header>
        <ContentPanel></ContentPanel>
    </div>
    );
  }
};