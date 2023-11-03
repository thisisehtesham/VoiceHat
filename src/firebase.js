import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBuaAnlIjgFR3DnbaMPPSdwIKPjbfj3nHw",
    authDomain: "linkedin-clone-4f013.firebaseapp.com",
    projectId: "linkedin-clone-4f013",
    storageBucket: "linkedin-clone-4f013.appspot.com",
    messagingSenderId: "310635228161",
    appId: "1:310635228161:web:791bbb197e9a2b5f9e6400"
};

//This special line on code here connects everything
const firebaseApp = firebase.initializeApp(firebaseConfig);

//This code gets the firestore database
const db = firebaseApp.firestore();

//We want to use firebase authentication
const auth = firebase.auth();

export { db, auth };