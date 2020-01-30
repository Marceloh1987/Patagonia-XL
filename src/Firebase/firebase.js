import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/analytics';


const firebaseConfig = {
    apiKey: "AIzaSyASZiJGNBLjQqNTTZKD73vmIlQISLF8-rI",
    authDomain: "patagonia-xl.firebaseapp.com",
    databaseURL: "https://patagonia-xl.firebaseio.com",
    projectId: "patagonia-xl",
    storageBucket: "patagonia-xl.appspot.com",
    messagingSenderId: "294474857412",
    appId: "1:294474857412:web:44ff463bcba8964d6f0291",
    measurementId: "G-WS344RLJSH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export const LogIn = (email,pswd) => {
    firebase.auth()
        .signInWithEmailAndPassword(email, pswd)
        .then((user) => {
            if(user){
              return true
              // history.push('/Dashboard');
            }
            else{
              return false
            }
          })
            .catch((error) => {
              console.log(error);
            });
  }

  export default firebase;