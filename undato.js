import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBYdKwms_YS97E6BUuSuGdSoRy1dD4lUr4",
    authDomain: "proyectohuertalmms.firebaseapp.com",
    databaseURL: "https://proyectohuertalmms-default-rtdb.firebaseio.com",
    projectId: "proyectohuertalmms",
    storageBucket: "proyectohuertalmms.firebasestorage.app",
    messagingSenderId: "940351629789",
    appId: "1:940351629789:web:b26125b82bb54d0c23ee34"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


let sueloSpan = document.querySelector("#suelo");
let aireSpan = document.querySelector("#aire");
let tempSpan = document.querySelector("#temp");


let barra = document.querySelector("#barra-estado");
let alertaTexto = document.querySelector("#alerta-texto");

const refSensores = ref(db, "sensores");

onValue(refSensores, (datos) => {
    let sensor = datos.val();

    let humedadSuelo = sensor.humedadSuelo;
    let humedadAire = sensor.humedadAire;
    let temperatura = sensor.temperatura;

    
    sueloSpan.textContent = `${humedadSuelo}%`;
    aireSpan.textContent = `${humedadAire}%`;
    tempSpan.textContent = `${temperatura}°C`;

    
    barra.style.width = humedadSuelo + "%";

    
    if (humedadSuelo < 30) {
        barra.style.background = "red";
        alertaTexto.textContent = "La planta necesita agua ¡Regarla!";
        alertaTexto.style.color = "red";

        
        alert("La planta necesita agua");
    }
    else if (humedadSuelo < 60) {
        barra.style.background = "orange";
        alertaTexto.textContent = "La planta está en nivel medio de humedad";
        alertaTexto.style.color = "orange";
    }
    else {
        barra.style.background = "green";
        alertaTexto.textContent = "La planta está bien hidratada";
        alertaTexto.style.color = "green";
    }
});

