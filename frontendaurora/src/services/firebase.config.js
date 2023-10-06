import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
    apiKey: "",
    authDomain: "cfg2023-54bdb.firebaseapp.com",
    projectId: "cfg2023-54bdb",
    storageBucket: "cfg2023-54bdb.appspot.com",
    messagingSenderId: "785096055341",
    appId: "1:785096055341:web:a5af7ab19545294cea76a4",
    measurementId: "G-C6TWKTLMMZ"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    //const analytics = getAnalytics(app);

export const db = getFirestore(app)