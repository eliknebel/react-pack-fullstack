'use strict'

import React from 'react';
import Component from 'app/components';
import './ContactsList.scss';

import FluxyMixin from 'alt/mixins/FluxyMixin';
import AddressBookStore from 'app/stores/AddressBookStore';
import AddressBookActions from 'app/actions/AddressBookActions';

/** Helper function to get state from flux store */
function getStateFromStores() {
  return AddressBookStore.getState();
}

export default class ContactsList extends Component {
  /** Constructor */
  constructor(props) {
    super(props);
    
    this.state = {
      contacts: []
    };
  }
  
  /** React Component Did Mount */
  componentDidMount() {
    AddressBookStore.listen(this.onAddressBookStoreChange);
  }
  
  /** React Component Did Unmount */
  componentWillUnmount() {
    AddressBookStore.unlisten(this.onAddressBookStoreChange);
  }
  
  /** React Render */
  render() {
    var self = this;
    
    return (
    <div className='ContactsList'>
      <ul>
      {
        this.state.contacts.map(function(contact) {
        return(
            <li key={contact.id}>
              <span className='contactField'><strong>Name:</strong> {contact.name}</span>
              <span className='contactField'><strong>Phone:</strong> {contact.phone}</span>
              <span className='contactField'><strong>Email:</strong> {contact.email}</span>
              <button className='removeButton' key={contact.id} onClick={self.onRemoveButtonClick.bind(self, contact.id)} >Remove</button>
            </li>
          );
      })}
      {(() => {
        if(this.state.contacts.length < 1) {
          return (
          <div style={{ textAlign: 'center'}}>
          Address Book is Empty
          </div>
          );
        }
        })()
      }
      </ul>
    </div>
    );
  }
  
  /** Event Handlers */
  onAddressBookStoreChange() {
    console.log('AddressBookStore changed, updating ContactsList view');
    this.setState(getStateFromStores());
  }
  
  onRemoveButtonClick(contactId) {
    console.log("ContactsList view fired event 'removeContact', send to dispatcher");
    AddressBookActions.removeContact(contactId);
  }
};
