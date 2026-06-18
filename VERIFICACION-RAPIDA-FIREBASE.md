# ✅ VERIFICACIÓN RÁPIDA: Etiqueta HTML en Firebase

## 📍 OPCIÓN 1: Etiqueta HTML (Meta tag) - MÁS RÁPIDA ⭐

### Paso 1: En Google Search Console
```
1. En la pantalla que ves, busca: "Etiqueta HTML"
2. Haz click en esa opción
3. Se abrirá un código como:

   <meta name="google-site-verification" content="abc123def456..." />

4. COPIA TODO el código (desde < hasta />)
```

### Paso 2: Pega en tu index.html

Reemplaza esta línea (línea 16-17):
```html
    <!-- REEMPLAZA ESTO CON TU META TAG DE GOOGLE SEARCH CONSOLE -->
    <!-- <meta name="google-site-verification" content="PEGA_AQUI_TU_TOKEN" /> -->
```

Con tu código real:
```html
    <meta name="google-site-verification" content="abc123def456ghi789jkl..." />
```

### Paso 3: Deploy a Firebase
```bash
cd /c/Users/jakao/Proyectos/web2026
firebase deploy
```

### Paso 4: Verifica en Search Console
```
1. Vuelve a Search Console
2. En la pantalla de "Etiqueta HTML", haz click: "Verificar"
3. Espera 5-10 segundos
4. ✅ LISTO
```

---

## 📍 OPCIÓN 2: Archivo HTML (Si prefieres)

### Paso 1: Descarga el archivo
```
En Search Console:
1. Haz click en "Descarga el archivo"
2. Guardarás: google12345abcdef.html (el nombre puede cambiar)
3. Cópialo
```

### Paso 2: Sube a Firebase
```
Coloca el archivo en:
/c/Users/jakao/Proyectos/web2026/public/google12345abcdef.html
```

### Paso 3: Deploy
```bash
firebase deploy
```

### Paso 4: Verifica
```
En Search Console:
1. Haz click "Verificar"
2. ✅ LISTO
```

---

## 🎯 MI RECOMENDACIÓN

**Usa "Etiqueta HTML"** porque:
- ✅ No necesitas bajar archivos
- ✅ Es más rápido
- ✅ Funciona perfectamente con Firebase
- ✅ Solo es 1 línea de código

---

## 👉 SIGUIENTE PASO

**¿Cuál prefieres?**

**Opción A:** Dame el código que ves en "Etiqueta HTML" y yo lo inserto automáticamente

```
Copia todo desde: <meta name="google-site-verification"
Hasta: />
```

**Opción B:** Hazlo tú manualmente
```
1. Copia el meta tag
2. Edita index.html línea 16-17
3. Pégalo
4. firebase deploy
5. Verifica en Search Console
```

¿Cuál hago? 🚀
