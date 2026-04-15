import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDPZx2q4IZMBVHbc7hmFYt-mWWCh5iZDQA",
  authDomain: "unipam-augusto-app.firebaseapp.com",
  projectId: "unipam-augusto-app",
  storageBucket: "unipam-augusto-app.firebasestorage.app",
  messagingSenderId: "852825662826",
  appId: "1:852825662826:web:0415be30183d45f265b113"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);