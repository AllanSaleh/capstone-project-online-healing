import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC4908xSh1qCD4kWSf16TPejnT0EUP-26E',
  authDomain: 'healing-online.firebaseapp.com',
  databaseURL: 'https://healing-online-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'healing-online',
  storageBucket: 'healing-online.appspot.com',
  messagingSenderId: '283240525899',
  appId: '1:283240525899:web:5161ee7a04f34677051dce',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
