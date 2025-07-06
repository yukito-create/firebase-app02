import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAL7fjqKm2HLT7rD7rlPwYPNHSRJ_zZA5U",
  authDomain: "fir-login-tutorial-e9c3b.firebaseapp.com",
  projectId: "fir-login-tutorial-e9c3b",
  storageBucket: "fir-login-tutorial-e9c3b.firebasestorage.app",
  messagingSenderId: "621923363478",
  appId: "1:621923363478:web:e5de186b7bf25a9ca570b7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };