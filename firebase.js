import firebase from 'firebase'
 export const firebaseConfig = {
    apiKey: "AIzaSyB2fVSH0al6qBICMHEcj473XpriOfFG0Tc",
    authDomain: "darshan-jewellers-a076c.firebaseapp.com",
    projectId: "darshan-jewellers-a076c",
    storageBucket: "darshan-jewellers-a076c.appspot.com",
    messagingSenderId: "704938442721",
    appId: "1:704938442721:web:b171793e93624455441ca0",
    measurementId: "G-L8G8M461WG"
};

const app = firebase.initializeApp(firebaseConfig)
const db = app.firestore();
const auth = app.auth();
export {db,auth}
