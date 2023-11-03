import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCL6CpZDJfjZHef5r8swS9HtjiuoHfxMNs",
    authDomain: "linkedin-clone-thisisehtesham.firebaseapp.com",
    projectId: "linkedin-clone-thisisehtesham",
    storageBucket: "linkedin-clone-thisisehtesham.appspot.com",
    messagingSenderId: "430950763425",
    appId: "1:430950763425:web:7aad1e64ac30ee9fd8d9e0"
};

//This special line on code here connects everything
const firebaseApp = firebase.initializeApp(firebaseConfig);

//This code gets the firestore database
const db = firebaseApp.firestore();

//We want to use firebase authentication
const auth = firebase.auth();

export { db, auth };