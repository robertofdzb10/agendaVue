import db from './firebase.js'; // Asegúrate de que la ruta sea correcta

new Vue({
    el: '#app',
    data: {
        contacts: [],
        newContact: { name: '', email: '', phone: '' }
    },
    created() {
        this.fetchContacts();
    },
    methods: {
        fetchContacts() {
            db.collection('contacts').get().then(querySnapshot => {
                this.contacts = [];
                querySnapshot.forEach(doc => {
                    let contact = doc.data();
                    contact.id = doc.id; // Guarda el ID del documento para futuras referencias
                    this.contacts.push(contact);
                });
            });
        },
        addContact() {
            if (this.newContact.name && this.newContact.email && this.newContact.phone) {
                db.collection('contacts').add(this.newContact).then(docRef => {
                    this.newContact.id = docRef.id; // Añade el ID al contacto
                    this.contacts.push(this.newContact);
                    this.newContact = { name: '', email: '', phone: '' }; // Reinicia el formulario
                });
            } else {
                alert('Todos los campos son obligatorios.');
            }
        },
        deleteContact(contact) {
            db.collection('contacts').doc(contact.id).delete().then(() => {
                this.contacts = this.contacts.filter(item => item.id !== contact.id);
            });
        }
    }
});
