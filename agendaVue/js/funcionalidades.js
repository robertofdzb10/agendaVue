new Vue({
    el: '#app',
    data: {
        contacts: [],
        newContact: { name: '', email: '', phone: '' }
    },
    methods: {
        addContact: function() {
            this.contacts.push(this.newContact);
            this.newContact = { name: '', email: '', phone: '' };
        },
        deleteContact: function(index) {
            this.contacts.splice(index, 1);
        }
    }
});