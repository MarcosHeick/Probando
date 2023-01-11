
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  // const firebaseConfig = {
  //   apiKey: "AIzaSyArULXrb8kHGjlxpFa9d0yKriU-NGSQuwA",
  //   authDomain: "pruebatecnicaheick-8f89a.firebaseapp.com",
  //   projectId: "pruebatecnicaheick-8f89a",
  //   storageBucket: "pruebatecnicaheick-8f89a.appspot.com",
  //   messagingSenderId: "801534839394",
  //   appId: "1:801534839394:web:5a70eb83ab7472e5035f3b",
  //   measurementId: "G-SJL4WPWC73"
  // };
const{APIKEY,AUTHDOMAIN,PROJECTID,STORAGEBUCKET,MESSAGIN,APPID,MEASURENT} = process.env

const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: AUTHDOMAIN,
  projectId: PROJECTID,
  storageBucket: STORAGEBUCKET,
  messagingSenderId:MESSAGIN,
  appId: APPID,
  measurementId: MEASURENT
};
// Initialize Firebase
const appFireBase = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export default appFireBase