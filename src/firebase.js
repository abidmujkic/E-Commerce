import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB_Sx7zkk8tZCiVlA-ei-g9ae1xGrE-Z3Y",
    authDomain: "eshop-8e013.firebaseapp.com",
    projectId: "eshop-8e013",
    storageBucket: "eshop-8e013.appspot.com",
    messagingSenderId: "932738535657",
    appId: "1:932738535657:web:1273bc11ecb2be283aa078",
    measurementId: "G-2X0WQNDEYS"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export { db, auth };