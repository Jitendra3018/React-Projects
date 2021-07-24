import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAht6KpMisLLmqBDd8yVUEbKQxy5kSSKpI",
    authDomain: "slack-clone-45537.firebaseapp.com",
    projectId: "slack-clone-45537",
    storageBucket: "slack-clone-45537.appspot.com",
    messagingSenderId: "507918278845",
    appId: "1:507918278845:web:69d740e41b2f2267f557d4",
    measurementId: "G-M4K525HFDD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
