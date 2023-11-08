import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCCDUsLxn9PE2D3Su4rxoPf8BEbiyzqvpg",
    authDomain: "login-authentication-efd5a.firebaseapp.com",
    projectId: "login-authentication-efd5a",
    storageBucket: "login-authentication-efd5a.appspot.com",
    messagingSenderId: "599949187749",
    appId: "1:599949187749:web:524a2a76d2ae30a149cb4c",
    measurementId: "G-N6MTELR1ZK"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);