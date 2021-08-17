import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB0DZD8JdOpC_hiIdqEOIQkdhcZp7iRuow",
    authDomain: "disney-clone-e5456.firebaseapp.com",
    projectId: "disney-clone-e5456",
    storageBucket: "disney-clone-e5456.appspot.com",
    messagingSenderId: "1039336201575",
    appId: "1:1039336201575:web:dfc491257c38a8e03de3c2",
    measurementId: "G-PV5FK79QFZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
