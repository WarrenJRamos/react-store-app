// Converted firebase@7.20.0 to the newest version firebase@9.6.9 (March 19, 8:52 am MT)

// "firebase/app" is a subpackage
import { initializeApp } from "firebase/app";
/*
  * Import Firebase services we want to use
  * They use the pattern of 'import {} from "firebase/<service>"'
  * Import the service getter funtion inside the {}
    E.g. { getAuth } for "firebase/auth"
*/
// "firebase/auth" monitors authentication state
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Firebase configuration object
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// YOU MUST INITIALIZE YOUR FIREBASE APP FIRST BEFORE CALLING ANY SERVICE GETTER
// iniitalizeApp creates a Firebase app that stores your Firebase configuation
// for your project. It returns a Firebase app instance.
// This instance is how the Firebase SDK knows how to connect to your
// specific Firebase backend.
const app = initializeApp(firebaseConfig);
// Returns the Auth instance associated with the provided FirebaseApp. If
// no instance exists, initializes an Auth instance with platform-specific
// default dependencies.
export const auth = getAuth(app);

// export const auth = app.auth();

// export the app just in case; I don't believe I use this anywhere
export default app;
