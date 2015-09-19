var alt = require('../dispatcher/alt');

class AddressBookActions {
  createContact(contactInfo) {
    console.log("Action 'createContact' fired");
    this.dispatch(contactInfo);
  }

  updateContact(contactInfo) {
    console.log("Action 'updateContact' fired");
    this.dispatch(contactInfo);
  }
  
  removeContact(contactId) {
    console.log("Action 'removeContact' fired");
    this.dispatch(contactId);
  }

  listContacts() {
    console.log("Action 'listContacts' fired");
    this.dispatch();
  }

}

module.exports = alt.createActions(AddressBookActions);