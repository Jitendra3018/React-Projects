import firebase from "firebase";

const firebaseConfig = { //This gives us the access to the actual database
	apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
	authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
	projectId: "disneyplus-clone-a33d5",
	storageBucket: "disneyplus-clone-a33d5.appspot.com",
	messagingSenderId: "37918794208",
	appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
	measurementId: "G-DRVLJKWRWG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);		//We initialize the Firebase app here
const db = firebaseApp.firestore();			// Using the firebase firestore   
const auth = firebase.auth();				// Used to be able to log in or log out
const provider = new firebase.auth.GoogleAuthProvider();	//Using the Google uthentication
const storage = firebase.storage();			// Using the firebase storage

export { auth, provider, storage };
export default db;
