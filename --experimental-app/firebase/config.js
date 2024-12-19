// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD4JbILwpMYHw1iywIZP7NzoXQsnf68oEk',
  authDomain: 'nextjsfirebase-f7d73.firebaseapp.com',
  projectId: 'nextjsfirebase-f7d73',
  storageBucket: 'nextjsfirebase-f7d73.firebasestorage.app',
  messagingSenderId: '771679665426',
  appId: '1:771679665426:web:b7698212f0e1932e2387cb',
  measurementId: 'G-JFV0F780TV',
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase_app);
export default firebase_app;
