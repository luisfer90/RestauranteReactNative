import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDteYjCFWHjVXrFfb_PuPTa_job643fOaw",
  authDomain: "restaurentereactnative.firebaseapp.com",
  projectId: "restaurentereactnative",
  storageBucket: "restaurentereactnative.appspot.com",
  messagingSenderId: "873790290463",
  appId: "1:873790290463:web:ae95e6cab92725d59c332a",
  measurementId: "G-W0ZJZL559X"
};

export const initFirebase = initializeApp(firebaseConfig);
