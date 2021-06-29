import * as Firebase from 'firebase';
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'API_KEY',
  authDomain: 'AUTH-DOMAIN',
  databaseURL: 'DATABASE_URL',
  projectId: 'PROJECT_ID',
  storageBucket: 'STORAGE_BUCKET',
  messagingSenderId: 'MESSAGING_SENDER_ID',
  appId: 'APP_ID',
  measurementId: 'MEASUREMENT_ID',
};
// Initialize Firebase
Firebase.initializeApp(firebaseConfig);

export default Firebase;
