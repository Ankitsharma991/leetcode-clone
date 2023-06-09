import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_APP_ID,
//   measurementId: "G-B1VG6C85SM",
// };

const firebaseConfig = {
  apiKey: "AIzaSyAQNiWvKBW67hfnh9I1dZgqxdNImBMsNUA",
  authDomain: "leetclone-55793.firebaseapp.com",
  projectId: "leetclone-55793",
  storageBucket: "leetclone-55793.appspot.com",
  messagingSenderId: "241845417682",
  appId: "1:241845417682:web:d1f41d97a0714799d81f0b",
  measurementId: "G-B1VG6C85SM",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };
