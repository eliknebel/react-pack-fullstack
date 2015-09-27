'use strict'

import React from 'react';
import Component from 'app/components';
import './ContactCard.scss';

import AddressBookActions from 'app/actions/AddressBookActions';

import userIcon from './images/user.png';

export default class ContactCard extends Component {
  /** Constructor */
  constructor(props) {
    super(props);
    
    this.state = {
      name: "",
      phone: "",
      email: ""
    }
  }
  
  /** React Render */
  render() {
    return (
    <div className='ContactCard'>
      <div className='photo'>
        <img src={userIcon}></img>
      </div>
      <div className='details'>
        <div>
          <label>Name:</label><input type='text' ref='name' onChange={this.onNameValueChange}></input>
        </div>
        <div>
          <label>Phone:</label><input type='text' ref='phone' onChange={this.onPhoneValueChange}></input>
        </div>
        <div>
          <label>Email:</label><input type='text' ref='email' onChange={this.onEmailValueChange}></input>
        </div>
      </div>
      <div className='add'>
        <button onClick={this.onAddContact}>Add to Address Book</button>
      </div>
    </div>
    );
    
  }
  
  /** Event Handlers */
  onNameValueChange(e) {
    console.log("ContactCard view fired event 'nameValueChanged', update state: name");
    this.setState({
      name: e.target.value
    });
  }
  
  onPhoneValueChange(e) {
    console.log("ContactCard view fired event 'phoneValueChanged', update state: phone");
    this.setState({
      phone: e.target.value
    });
  }
  
  onEmailValueChange(e) {
    console.log("ContactCard view fired event 'emailValueChanged', update state: email");
    this.setState({
      email: e.target.value
    });
  }
  
  onAddContact() {
    console.log("ContactCard view fired event 'addContact', send to dispatcher - addContact using current state");
    AddressBookActions.createContact(this.state);
  }
};
