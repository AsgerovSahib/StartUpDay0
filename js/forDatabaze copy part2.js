import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  push, // push fonksiyonunu buraya ekleyin
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";

//* firabase elements
let nameAndSurname = document.querySelector("nameAndSurname");
let phoneNumber = document.querySelector("phoneNumber");
let muracietEtButton = document.querySelector("muracietEtButton");

//* firabase setting
const firebaseConfig = {
  apiKey: "AIzaSyAJGxKn5LovzE31gDdpyNXJz48AhY1s7lE",
  authDomain: "startupday0-f6856.firebaseapp.com",
  projectId: "startupday0-f6856",
  storageBucket: "startupday0-f6856.appspot.com",
  messagingSenderId: "1033383491607",
  appId: "1:1033383491607:web:0a82d6374698c0c04dc452",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function writeSetData(collection, data) {
  const collRef = ref(db, collection);
  set(collRef, data);
}

function writePushData(collection, data) {
  const collRef = ref(db, collection);
  push(collRef, data); // push fonksiyonunu bu şekilde kullanın
}

function push(nameAndSurname,phoneNumber) {
  writePushData("deneme1", {
    key: "sas",
    Name: nameAndSurname,
    Number: phoneNumber,
  });
}
muracietEtButton.addEventListener("click",{push})

// writeSetData("aboute", {
//   title: "test1",
//   dec: "test2",
//   img: "https://ddss.com.jpg",
// });

writePushData("contact2", {
  name: "sahib3",
  phone: 268451638,
});
