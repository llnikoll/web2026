# Verificación en Google Search Console - Paso a Paso Correcto

## 📍 PASO 1: Agregar Propiedad (Primera pantalla)

Cuando entras a Search Console ves 2 opciones:

```
┌─────────────────────────────────────┐
│  ¿Cómo quieres añadir tu propiedad? │
└─────────────────────────────────────┘

  [ ] Dominio
      ↓
      capiata.com.py
      (verifica TODA la raíz)

  [✓] Prefijo de URL  ← ELIGE ESTA
      ↓
      https://niko-intendente.capiata.com.py/
      (verifica solo este prefijo)
```

### Instrucción Correcta:
```
1. Selecciona: "Prefijo de URL"
2. Pega: https://niko-intendente.capiata.com.py/
3. Haz click "Continuar"
```

---

## 📍 PASO 2: Elegir Método de Verificación

Después de pegar la URL, aparecerá una pantalla con opciones:

```
┌──────────────────────────────────┐
│   Verifica la propiedad           │
└──────────────────────────────────┘

  [✓] Meta tag  ← USA ESTA
  [ ] Archivo HTML
  [ ] Registro DNS
  [ ] Google Analytics
  [ ] Etiqueta de Google
```

### Instrucción Correcta:
```
1. Selecciona: "Meta tag"
2. Se abrirá una caja con código
3. Busca la línea que empiece con:
   <meta name="google-site-verification"
4. CÓPIALA COMPLETA
```

---

## 🎯 LA LÍNEA QUE NECESITAS COPIAR

Verás algo como esto (más largo):

```html
<meta name="google-site-verification" content="aJ1k2L3m4N5o6P7q8R9s0T1u2V3w4X5y6Z7jK8l9M0n1O2p3Q4r5S6t7U8v9W0x1Y2z3A4..." />
```

**Debes copiar TODO** desde `<meta` hasta `/>` (incluyendo los dos caracteres finales)

---

## ✅ SECUENCIA COMPLETA

### En Google Search Console:

```
1. Abre: https://search.google.com/search-console

2. VES ESTA PANTALLA:
   ┌─────────────────────┐
   │ Dominio vs Prefijo  │
   └─────────────────────┘
   
3. ELIGE: "Prefijo de URL"

4. PEGA: https://niko-intendente.capiata.com.py/

5. CLICK: "Continuar"

6. VES ESTA PANTALLA:
   ┌──────────────────────┐
   │ Métodos disponibles  │
   ├──────────────────────┤
   │ ✓ Meta tag          │ ← ELIGE ESTA
   │   Archivo HTML      │
   │   Registro DNS      │
   │   etc...            │
   └──────────────────────┘

7. ELIGE: "Meta tag"

8. SE ABRE CAJA CON CÓDIGO:
   
   <meta name="google-site-verification" 
   content="abc123def456..." />

9. COPIA TODO (desde < hasta />)

10. PEGA en index.html (línea 16)

11. SUBE: firebase deploy

12. VUELVE a Search Console

13. HAZE CLICK: "Verificar"

14. ✅ LISTO
```

---

## 🆘 SI AÚN NO VES "Meta tag"

Algunos usuarios ven una pantalla diferente. Si solo ves opciones limitadas:

**ALTERNATIVA: Usa Archivo HTML**

```
1. Selecciona "Archivo HTML"
2. Se descarga: google12345abcdef.html
3. Subes ese archivo a Firebase:
   - public/google12345abcdef.html
4. firebase deploy
5. En Search Console: "Verificar"
6. ✅ Listo
```

---

## 📞 CUÉNTAME

**¿Qué ves exactamente cuando abres Search Console?**

Describe la pantalla que ves para poder ayudarte mejor.
