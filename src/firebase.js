import firebase from "firebase/app";
import "firebase/firebase-firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtuA2g8c2Wy3HW-XxSjeMtaeV4EfmpNUk",
  authDomain: "guptasiddhant-com.firebaseapp.com",
  databaseURL: "https://guptasiddhant-com.firebaseio.com",
  projectId: "guptasiddhant-com",
  storageBucket: "guptasiddhant-com.appspot.com",
  messagingSenderId: "693972243954",
  appId: "1:693972243954:web:9cabb4774c7f9e6196876b",
  measurementId: "G-SVFRY7WXKB"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
