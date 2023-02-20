import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAsG5ajUMD50ktyDpjtGyVDkpmDfqAjnnk",
  authDomain: "react-contact-form-41d70.firebaseapp.com",
  databaseURL: "https://react-contact-form-41d70-default-rtdb.firebaseio.com",
  projectId: "react-contact-form-41d70",
  storageBucket: "react-contact-form-41d70.appspot.com",
  messagingSenderId: "681524293509",
  appId: "1:681524293509:web:b20e018c071846168bdeec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;