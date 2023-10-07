import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import firebaseConfig from './services/firebase.config.js';
import SignUp from './signin'
// import firebase.

const app = firebase.initializeApp(firebaseConfig)

export const auth = app.auth()
export default app
// export default SignUp