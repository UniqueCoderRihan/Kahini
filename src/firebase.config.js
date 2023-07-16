// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.TECH.apiKey,
  authDomain:import.meta.env.TECH_authDomain,
  projectId: import.meta.env.TECH_projectId,
  storageBucket: import.meta.env.TECH_storageBucket,
  messagingSenderId: import.meta.env.TECH_messagingSenderId,
  appId: import.meta.env.TECH_appId,
  measurementId: import.meta.env.TECH_measurementId
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;