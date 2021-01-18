importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyAHj2iRPj8WiWFp6P8wlFJ7bZk-1LudAPg",
    authDomain: "expensetrackernotification.firebaseapp.com",
    projectId: "expensetrackernotification",
    storageBucket: "expensetrackernotification.appspot.com",
    messagingSenderId: "521615607455",
    appId: "1:521615607455:web:a96781e7af5ee3225944aa",
    measurementId: "G-CBKE09Y0RL"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.messaging();