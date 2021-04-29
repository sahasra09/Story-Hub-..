import  firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCikNM8Z3ZlFh7zxgSiCrLFooNrxnIS3gE",
    authDomain: "story-hub-6dcfb.firebaseapp.com",
    projectId: "story-hub-6dcfb",
    storageBucket: "story-hub-6dcfb.appspot.com",
    messagingSenderId: "601030788518",
    appId: "1:601030788518:web:775f317828e8d113193b67"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  

  export default firebase.firestore()