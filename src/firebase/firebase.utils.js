import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBtZ4ia-jEs093VfflPr_927-ebqLZ98lY",
    authDomain: "crwn-db-2ba23.firebaseapp.com",
    projectId: "crwn-db-2ba23",
    storageBucket: "crwn-db-2ba23.appspot.com",
    messagingSenderId: "942114412982",
    appId: "1:942114412982:web:82215d12a587fec17ac917"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;