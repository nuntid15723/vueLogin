import firebase from 'firebase/app'
import 'firebase/firestore'
import'firebase/auth'


// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
const firebaseConfig = {
    apiKey: "AIzaSyB8XVdooERaMErkIZpI-PefpOxz_oGKkFA",
    authDomain: "cs313-db-cebb6.firebaseapp.com",
    projectId: "cs313-db-cebb6",
    storageBucket: "cs313-db-cebb6.appspot.com",
    messagingSenderId: "103875759397",
    appId: "1:103875759397:web:8a4a1d9af358059a289ecc",
    measurementId: "G-GS4R767NGY"
  };
  firebase.initializeApp(firebaseConfig)
}
export const db = firebase.firestore()
export const auth = firebase.auth()