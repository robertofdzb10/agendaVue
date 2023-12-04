import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AgendaContactos",
  authDomain: "agendacontactos-5dc22.firebaseapp.com",
  projectId: "agendacontactos-5dc22",
  // ... otras configuraciones ...
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

// Inicializa Firestore
const db = firebase.firestore();

export default db;
