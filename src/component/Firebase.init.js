// Import the functions you need from the SDKs you need
import {getApp,getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMIXBYHSOWHqBsL_R-y3U4OW3xwbqU_Xg",
  authDomain: "music-website-574e1.firebaseapp.com",
  projectId: "music-website-574e1",
  storageBucket: "music-website-574e1.appspot.com",
  messagingSenderId: "610639150135",
  appId: "1:610639150135:web:abcaac1ca07bc5a988d3b2"
};

// Initialize Firebase
const app = getApps.length>0 ? getApps() :initializeApp(firebaseConfig);
const storage=getStorage(app);
export {app,storage};
