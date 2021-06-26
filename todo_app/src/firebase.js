// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCsjEOx9m2xrsJtEUWg7XjGTU414hLcF_E",
    authDomain: "todo-app-clone-8a4ba.firebaseapp.com",
    projectId: "todo-app-clone-8a4ba",
    storageBucket: "todo-app-clone-8a4ba.appspot.com",
    messagingSenderId: "163483808217",
    appId: "1:163483808217:web:32caed821db2367e0969c8",
    measurementId: "G-FRWG5NQC7Z"
});

const db = firebaseApp.firestore();

export default db;