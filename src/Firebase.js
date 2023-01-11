

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const{APIKEY,AUTHDOMAIN,STORAGEBUCKET,MESSAGIN,APPID,MEASURENT} = process.env


  const firebaseConfig = {
    apiKey: APIKEY,
    authDomain: AUTHDOMAIN,
    projectId: "pruebatecnicaheick-8f89a",
    storageBucket: STORAGEBUCKET,
    messagingSenderId: MESSAGIN,
    appId: APPID,
    measurementId: MEASURENT
  };


const appFireBase = initializeApp(firebaseConfig);
const db= getFirestore(appFireBase)

export default db