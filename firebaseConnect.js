import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  setPersistence,
  browserLocalPersistence, // Importa el tipo de persistencia local
} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCcMr1nEHkyqZTLu6zq0iXhbzUDhDgF_YE",
  authDomain: "prestamodenotebooks.firebaseapp.com",
  projectId: "prestamodenotebooks",
  storageBucket: "prestamodenotebooks.appspot.com",
  messagingSenderId: "426037856037",
  appId: "1:426037856037:web:f51dd02badbfd354e47ccc",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

// Configuración de la persistencia de sesión en "local"
setPersistence(auth, browserLocalPersistence);

export class ManageAccount {
  register(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // Mostrar alerta de registro exitoso
        alert(
          "Registro exitoso. Serás redirigido a la página de inicio de sesión."
        );
      })
      .catch((error) => {
        console.error(error.message);
        // Mostrar alerta de error de registro
        alert("Error al registrar: " + error.message);
      });
  }
  
  authenticate(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // Mostrar alerta de inicio de sesión exitoso
        alert(`Bienvenido ${user.email}! Has iniciado sesión`);
        alert(
          "Has iniciado sesión correctamente. Serás redirigido a la página principal."
        );
        // Redirigir al usuario a la página principal
        window.location.href = "index.html";
      })
      .catch((error) => {
        console.error(error.message);
        // Mostrar alerta de error de inicio de sesión
        alert("Error al iniciar sesión: " + error.message);
      });
  }

  signOut() {
    signOut(auth)
      .then(() => {
        // Redirigir al usuario a la página principal
        window.location.href = "index.html";
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}
