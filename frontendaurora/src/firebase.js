import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// import firebaseConfig from './services/firebase.config.js';

const app = firebase.initializeApp(
    {
    // apiKey: process.env.FIREBASE_API_KEY,
    // authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    // projectID: process.env.FIREBASE_PROJ_ID,
    // storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.FIREBASE_APP_ID,
    // measurementId: process.env.FIREBASE_MEASUREMENTID
    apiKey: "",
    authDomain: "cfg2023-54bdb.firebaseapp.com",
    projectId: "cfg2023-54bdb",
    storageBucket: "cfg2023-54bdb.appspot.com",
    messagingSenderId: "785096055341",
    appId: "1:785096055341:web:a5af7ab19545294cea76a4",
    measurementId: "G-C6TWKTLMMZ"
})

export const auth = app.auth()
export default app