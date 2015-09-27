'use strict'

import React from 'react';
import Component from 'app/components';
import './ContentPanel.scss';

import ContactCard from 'components/ContactCard';
import ContactsList from 'components/ContactsList';

export default class ContentPanel extends Component {
  render() {
    return (
    <div className='ContentPanel'>
      <h3>Example Address Book (Using Flux)</h3>
      <ContactCard />
      <ContactsList />
    </div>
    );
  }
};