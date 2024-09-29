// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCxUW5zu4HyJXanLoRY8uqOTsDZf6UxodQ',
  authDomain: 'goorm-shop-app.firebaseapp.com',
  projectId: 'goorm-shop-app',
  storageBucket: 'goorm-shop-app.appspot.com',
  messagingSenderId: '984805235752',
  appId: '1:984805235752:web:45ebd22fc8b2f940b8291d',
  measurementId: 'G-1KC2CBDLM7',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
