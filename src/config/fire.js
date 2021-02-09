import React from 'react';
import firebase from 'firebase';




var Config = {
    apiKey: "AIzaSyB33GxB5y86z6zBbFADn-QPY5qPNDTOrSY",
    authDomain: "fir-auth-2488d.firebaseapp.com",
    projectId: "fir-auth-2488d",
    storageBucket: "fir-auth-2488d.appspot.com",
    messagingSenderId: "1020173337588",
    appId: "1:1020173337588:web:9bc92b70255aaae2072fa1"
  };

  const fire =firebase.initializeApp(Config);

  export default fire;

