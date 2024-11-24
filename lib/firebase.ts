// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "code-visionary-studio-baa96.firebaseapp.com",
  projectId: "code-visionary-studio-baa96",
  storageBucket: "code-visionary-studio-baa96.firebasestorage.app",
  messagingSenderId: "845565245626",
  appId: "1:845565245626:web:fcb4c0beb179e1641f2a83",
  measurementId: "G-N9YQV7E19P"
};

// Initialize Firebase
let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
let analytics;

// Initialize analytics only on client side
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { app, analytics };
