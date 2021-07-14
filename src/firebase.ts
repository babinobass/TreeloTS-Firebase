import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

interface FBconfig {
    apiKey: string,
    authDomain: string,
    projectId: string,
    storageBucket: string,
    messagingSenderId: string,
    appId: string
}

const firebaseConfig: FBconfig = {
    apiKey: "AIzaSyAMnrSOwk1Zbbw56wL8VZ15N3Z5cmlN8Vs",
    authDomain: "trellotsapp.firebaseapp.com",
    projectId: "trellotsapp",
    storageBucket: "trellotsapp.appspot.com",
    messagingSenderId: "1033707149801",
    appId: "1:1033707149801:web:b48a3e95e8108f2ab4d378",
}


firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()
export default firebase;