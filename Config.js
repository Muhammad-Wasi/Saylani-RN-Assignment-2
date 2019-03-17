import React from 'react';
import firebase from 'firebase';

<script src="https://www.gstatic.com/firebasejs/5.7.0/firebase.js"></script>
// Initialize Firebase
var config = {
    apiKey: "AIzaSyD2sUrTutnzrsoJm1g3Zz3RVwHgh390bf4",
    authDomain: "q-app-7ac8b.firebaseapp.com",
    databaseURL: "https://q-app-7ac8b.firebaseio.com",
    projectId: "q-app-7ac8b",
    storageBucket: "q-app-7ac8b.appspot.com",
    messagingSenderId: "402669836949"
};
firebase.initializeApp(config);

export default firebase;