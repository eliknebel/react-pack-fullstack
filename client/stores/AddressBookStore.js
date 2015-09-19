var alt = require('../dispatcher/alt');
var AddressBookActions = require('../actions/AddressBookActions');

var store = {
  contacts: []
}

class AddressBookStore {
  constructor() {
    this.bindListeners({
      handleCreateContact: AddressBookActions.createContact,
      handleRemoveContact: AddressBookActions.removeContact,
      handleUpdateContact: AddressBookActions.updateContact
    });
    
    this.uniqueId = 0
  }

  handleCreateContact(contactInfo) {
    var contact = {
      id: this.getNewId(),
      name: contactInfo.name,
      phone: contactInfo.phone,
      email: contactInfo.email
    };
    store.contacts.push(contact);
    
    console.log("AddressBookStore updated - contact created");
  }

  handleRemoveContact(contactId) {
    for (var i=0; i<store.contacts.length; i++) {
      if (store.contacts[i].id === contactId) {
        store.contacts.splice(i,1);
      }
    }
    
    console.log("AddressBookStore updated - contact removed");
  }

  handleUpdateContact(contactInfo) {
    // TODO
  }
  
  getNewId() {
    return this.uniqueId++;
  }

  static getState() {
    return store;
  }
}

module.exports = alt.createStore(AddressBookStore, 'AddressBookStore');