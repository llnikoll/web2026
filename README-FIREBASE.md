# Configuración de Firebase para Contadores

## Pasos para configurar Firebase correctamente:

### 1. Crear proyecto en Firebase
1. Ve a https://console.firebase.google.com
2. Crea un nuevo proyecto llamado "niko-intendente-2026"
3. Habilita Firestore Database

### 2. Obtener credenciales
1. En la consola de Firebase, ve a "Configuración del proyecto" > "General"
2. En la sección "Tus aplicaciones", haz clic en el ícono de web (</>)
3. Registra tu aplicación con el nombre "web"
4. Copia el objeto `firebaseConfig` que te proporcionen

### 3. Reemplazar credenciales en index.html
Busca estas líneas en `index.html` (alrededor de la línea 1128):

```javascript
const firebaseConfig = {
    apiKey: "AIzaSyCTK8eS5iHqW8n7d9mF2pL3kQ6jR4tY8wX",
    authDomain: "niko-intendente-2026.firebaseapp.com",
    projectId: "niko-intendente-2026",
    storageBucket: "niko-intendente-2026.appspot.com",
    messagingSenderId: "987654321098",
    appId: "1:987654321098:web:abc123def456ghi789"
};
```

Reemplaza estos valores con TUS credenciales reales.

### 4. Configurar reglas de seguridad de Firestore
1. En la consola de Firebase, ve a "Firestore Database" > "Reglas"
2. Reemplaza el contenido con:

```
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
```

3. Haz clic en "Publicar"

### 5. Probar la configuración
Una vez configurado, los contadores deberían funcionar:
- **Contador de visitas**: Se incrementa una vez por usuario/dispotitivo
- **Contador de apoyos**: Se incrementa cada vez que alguien hace clic en "Dar mi apoyo"

## Solución de problemas

### Si los contadores no funcionan:
1. Abre la consola del navegador (F12)
2. Busca errores de Firebase en la pestaña "Console"
3. Verifica que las credenciales sean correctas
4. Asegúrate de que las reglas de Firestore estén configuradas correctamente

### Errores comunes:
- "Missing or insufficient permissions": Revisa las reglas de Firestore
- "Firebase project not initialized": Verifica las credenciales
- "Network error": Revisa tu conexión a internet

## Funcionamiento esperado

### Contador de visitas:
- Usa localStorage para evitar contar múltiples veces al mismo usuario
- Se sincroniza con Firebase para mostrar el conteo global
- Solo se incrementa una vez por dispositivo/navegador

### Contador de apoyos:
- Cada usuario puede apoyar una sola vez (controlado por localStorage)
- El conteo se guarda en Firebase en tiempo real
- Muestra el número total de apoyos recibidos
