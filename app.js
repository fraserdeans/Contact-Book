ContactList = Ember.Application.create();

ContactList.Contact = Ember.Object.extend({
  name: null,
  telephoneNumber: null,
});

ContactList.contactController = Ember.ArrayController.create({

  content: [],

  createContact: function( name, number ){
    var contact = ContactList.Contact.create({name: name, telephoneNumber: number});
    this.pushObject(contact)
  }
});


ContactList.formView = Ember.View.create({
  templateName: "addContactView",

  addContact: function() {
    var name = $('input[name="name"]').val();
    var number = $('input[name="telephone"]').val();
    $('input').val('');
    ContactList.contactController.createContact( name, number );
  }
})

ContactList.formView.appendTo('#form');
