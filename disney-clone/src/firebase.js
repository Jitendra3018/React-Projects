import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBybpF6MdXI2RKHMtzM298P2f7CD2lzHzM",
    authDomain: "disney-clone-1b886.firebaseapp.com",
    projectId: "disney-clone-1b886",
    storageBucket: "disney-clone-1b886.appspot.com",
    messagingSenderId: "108555073320",
    appId: "1:108555073320:web:1ecbf5782f332fefae821d",
    measurementId: "G-M9FXD6QPCV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage};
export default db;