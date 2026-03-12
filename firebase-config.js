// CONFIGURACIÓN DE FIREBASE
// DEBES REEMPLAZAR ESTOS VALORES CON TUS CREDENCIALES REALES DE FIREBASE

// Para obtener tus credenciales:
// 1. Ve a https://console.firebase.google.com
// 2. Crea un nuevo proyecto o selecciona uno existente
// 3. Ve a Configuración del proyecto > General
// 4. Copia los valores de configuración de tu aplicación web

const firebaseConfig = {
    apiKey: "AIzaSyCTK8eS5iHqW8n7d9mF2pL3kQ6jR4tY8wX",
    authDomain: "niko-intendente-2026.firebaseapp.com",
    projectId: "niko-intendente-2026",
    storageBucket: "niko-intendente-2026.appspot.com",
    messagingSenderId: "987654321098",
    appId: "1:987654321098:web:abc123def456ghi789"
};

// IMPORTANTE: También necesitas configurar las reglas de seguridad en Firestore:
// Ve a Firestore Database > Reglas y reemplaza con:

/*
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Permitir leer y escribir contadores
    match /counters/{document} {
      allow read, write: if true;
    }
    
    // Denegar todo lo demás por seguridad
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
*/
