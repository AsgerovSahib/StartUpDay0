// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
// import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJGxKn5LovzE31gDdpyNXJz48AhY1s7lE",
  authDomain: "startupday0-f6856.firebaseapp.com",
  projectId: "startupday0-f6856",
  storageBucket: "startupday0-f6856.appspot.com",
  messagingSenderId: "1033383491607",
  appId: "1:1033383491607:web:0a82d6374698c0c04dc452",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function writeSetData(collection, data) {
  const collRef = ref(db, collection);
  set(collRef, data);
}

function writePushData(collection, data) {
  const collRef = ref(db, collection);
  push(collRef, data);
}
writePushData("contact", {
  name: "sahib3",
  phone: 268451638,
});
