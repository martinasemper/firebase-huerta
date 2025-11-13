import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-database.js";


const firebaseConfig = {
  apiKey: "AIzaSyAAaCZcaNOyu0EYS9cPS-_St5wpr9qdris",
    authDomain: "fir-clase1-9a13f.firebaseapp.com",
    databaseURL: "https://fir-clase1-9a13f-default-rtdb.firebaseio.com/",
    projectId: "fir-clase1-9a13f",
    storageBucket: "fir-clase1-9a13f.firebasestorage.appp",
    messagingSenderId: "370078380745",
    appId: "1:370078380745:web:3d6cc2aad5d34183cb1318"
};


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const refDatos = ref(db, "huerta");

let pSuelo = document.querySelector("#suelo");
let pAire = document.querySelector("#aire");


onValue(refDatos, (snapshot) => {
  const huerta = snapshot.val();
  console.log(huerta);

  if (huerta) {
    pSuelo.textContent = ` Suelo Temperatura: ${huerta.tempSuelo}°C | Humedad: ${huerta.humSuelo}%`;
    pAire.textContent = ` Aire Temperatura: ${huerta.tempAire}°C | Humedad: ${huerta.humAire}%`;
  } else {
    pSuelo.textContent = "Sin datos disponibles de suelo.";
    pAire.textContent = "Sin datos disponibles de aire.";
  }
});
