import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyAlLNBdOzMd0QrH9ZVMuTRQnx6uY4DhueI',
  authDomain: 'marioplan-e3ff9.firebaseapp.com',
  databaseURL: 'https://marioplan-e3ff9.firebaseio.com',
  projectId: 'marioplan-e3ff9',
  storageBucket: 'marioplan-e3ff9.appspot.com',
  messagingSenderId: '841349814041'
};

firebase.initializeApp(config);

export default firebase;
