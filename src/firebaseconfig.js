// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBy9uR3L-R1hVxDGI94PYZpJMrLQde-9-Q",
  authDomain: "inhousedev-40487.firebaseapp.com",
  projectId: "inhousedev-40487",
  storageBucket: "inhousedev-40487.appspot.com",
  messagingSenderId: "379206170228",
  appId: "1:379206170228:web:bca94034b26443f8390321",
  measurementId: "G-VTE56S3CFJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { firestore, storage, auth };

export default app