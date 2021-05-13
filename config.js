import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyDP-JKe_EBnHnD_mQBqdNPLOmT3drnlgJ0',
  authDomain: 'schoolattendence-9052b.firebaseapp.com',
  databaseURL: 'https://schoolattendence-9052b.firebaseio.com',
  projectId: 'schoolattendence-9052b',
  storageBucket: 'schoolattendence-9052b.appspot.com',
  messagingSenderId: '765136749594',
  appId: '1:765136749594:web:8065a1785812eb0aeb7da3',
  measurementId: 'G-6TQPD8BG0K',
};
firebase.initializeApp(firebaseConfig);
export default firebase.database();
