import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";

// Firebase elements
let muracietEtButton = document.querySelector("#muracietEtButton"); // # eklendi, HTML elementini seçmek için gerekli

let nameAndSurname = document.querySelector("#nameAndSurname"); // # eklendi, HTML elementini seçmek için gerekli
let phoneNumber = document.querySelector("#phoneNumber"); // # eklendi, HTML elementini seçmek için gerekli
let mailAdres = document.querySelector("#mailAdres");
let layheTesviri = document.querySelector("#layheTesviri");
let layheHellEtdiyiPreablem = document.querySelector(
  "#layheHellEtdiyiPreablem"
);
let selectedValue = document.querySelector('input[name="sahe"]:checked');
if (selectedValue === "dig") {
  let digSahesiValue = document.getElementById("digSahesi").value;
  console.log("Seçilen sahe:", digSahesiValue);
} else {
  console.log("Seçilen sahe:", selectedValue);
}
let layheTeqdimat = document.querySelector("#layheTeqdimat");
let infoHardandir = document.querySelector("#infoHardandir");
// Firebase setting
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

//^ firabase metods-----------------------------------
function writeSetData(collection, data) {
  const collRef = ref(db, collection);
  set(collRef, data);
}

function writePushData(collection, data) {
  const collRef = ref(db, collection);
  push(collRef, data);
}

function readData(collection) {
  const starCountRef = ref(db, collection);
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();

    const newData = Object.entries(data).map((item) => ({
      id: item[0],
      ...item[1],
    }));
    console.log(newData);
  });
}

//! doing function-------------------------------------

function handleButtonClick() {
  // Input değerlerini al
  const nameAndSurnameValue = nameAndSurname.value;
  const phoneNumberValue = phoneNumber.value;
  const mailAdresValue = mailAdres.value;
  const layheTesviriValue = layheTesviri.value;
  const layheHellEtdiyiPreablemValue = layheHellEtdiyiPreablem.value;

  // Seçilen radio butonunun değerini al
  const selectedValue = document.querySelector('input[name="sahe"]:checked');
  const selectedValueValue = selectedValue ? selectedValue.value : "";

  // Eğer "dig" seçildiyse, text input'un değerini al
  let digSahesiValue = "";
  if (selectedValueValue === "dig") {
    digSahesiValue = document.getElementById("digSahesi").value;
  }
  const selectIdeaLevel = document.querySelector(
    'input[name="merhele"]:checked'
  );
  const selectIdeaLevelValue = selectIdeaLevel ? selectIdeaLevel.value : "";

  const layheTeqdimatValue = layheTeqdimat.value;
  const infoHardandirValue = infoHardandir.value;
  // Veritabanına veriyi ekle
  writePushData("deneme1", {
    Name: nameAndSurnameValue,
    Number: phoneNumberValue,
    mail: mailAdresValue,
    layheTesviri: layheTesviriValue,
    layheHellEtdiyiPreablem: layheHellEtdiyiPreablemValue,
    selectedValue: selectedValueValue,
    digSahesi: digSahesiValue,
    selectIdeaLevel: selectIdeaLevelValue,
    layheTeqdimat: layheTeqdimatValue,
    infoHardandir: infoHardandirValue,
  });

  // İşlem başarılıysa kullanıcıya bir mesaj gösterilebilir
  alert("Müraciətiniz uğurla qeydə alındı!");
}

// Butona tıklandığında handleButtonClick fonksiyonunu çağır
muracietEtButton.addEventListener("click", handleButtonClick);

// Koleksiyondan verileri oku ve console'a yazdır
readData("deneme1");
