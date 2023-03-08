// firebase.js

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDlEwuqGehTXugAX5FALF7oN9lKTfjw8mw",
    authDomain: "mdev1005-assignment3-8598a.firebaseapp.com",
    projectId: "mdev1005-assignment3-8598a",
    storageBucket: "mdev1005-assignment3-8598a.appspot.com",
    messagingSenderId: "452182311674",
    appId: "1:452182311674:web:d734ac43f92b933c683f43",
    measurementId: "G-7HNTJ5FNYH"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;
