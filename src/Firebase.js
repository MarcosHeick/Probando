

import { initializeApp } from "firebase/app";

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

export default appFireBase