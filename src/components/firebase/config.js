import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB_kNOHbwirQVULtzpxicIq7STAoP2zonE",
    authDomain: "chat-app-9b20c.firebaseapp.com",
    projectId: "chat-app-9b20c",
    storageBucket: "chat-app-9b20c.appspot.com",
    messagingSenderId: "567621581974",
    appId: "1:567621581974:web:ac4cbe68586ef662a6d6b7"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

auth.useEmulator('http://localhost:9099');
if(window.location.hostname==='localhost'){
  db.useEmulator('localhost','8080');
}

export {auth,db};
export default firebase;