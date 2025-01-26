// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3TA2HRYLe2SkCgXG7EKqkrSibJi6mQHw",
  authDomain: "wattland-f4776.firebaseapp.com",
  projectId: "wattland-f4776",
  storageBucket: "wattland-f4776.firebasestorage.app",
  messagingSenderId: "199560497090",
  appId: "1:199560497090:web:7923bbd8f5c14d1f32385b",
  measurementId: "G-Q9JECHFEVY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Authentication
const db = getFirestore(app);
const auth = getAuth(app);

// Optional: Initialize analytics (only if needed)
const analytics = getAnalytics(app);

// Export the instances to use in your app
export { db, auth, analytics };