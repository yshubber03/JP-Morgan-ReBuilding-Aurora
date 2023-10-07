import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// import firebaseConfig from './services/firebase.config.js';

const app = firebase.initializeApp(
    {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectID: process.env.FIREBASE_PROJ_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENTID
})

export const auth = app.auth()
export default app