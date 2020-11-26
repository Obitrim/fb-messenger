import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD80__su6msTuF2XnMJwvrIFdP9yL4xXTg",
  authDomain: "fb-messenger-95d7d.firebaseapp.com",
  databaseURL: "https://fb-messenger-95d7d.firebaseio.com",
  projectId: "fb-messenger-95d7d",
  storageBucket: "fb-messenger-95d7d.appspot.com",
  messagingSenderId: "399244334340",
  appId: "1:399244334340:web:a0ac2b344a68ed1a562c51",
  measurementId: "G-W8ZZRYJXLE"
});

const db = firebaseApp.firestore();

export default db;