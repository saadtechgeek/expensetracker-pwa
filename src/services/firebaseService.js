import firebase from 'firebase';

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
  const messaging = firebase.messaging();

export function initNotification() {
    Notification.requestPermission().then((permission) => { 
        console.log(permission) 
        if(permission === "granted"){
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log("TOKEN")
                    console.log(currentToken);
                } else {
                  console.log('No Instance ID token available. Request permission to generate one.');

                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
              });
        }
    })
}