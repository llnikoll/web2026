# Checklist de Implementación SEO - Niko Oviedo Intendente 2026

## ✅ COMPLETADO - Lo que ya hemos hecho

### Estructural
- [x] **robots.txt** - Permite rastreo de Google, ChatGPT y otros buscadores
- [x] **sitemap.xml** - Mapa del sitio para indexación rápida
- [x] **.htaccess** - Caché, compresión GZIP y seguridad
- [x] **Meta tags completos** - OG, Twitter, geolocalización
- [x] **Canonical URL** - Evita contenido duplicado

### Contenido
- [x] **H1 optimizado** - Contiene palabras clave principales
- [x] **Blog creado** - /blog/index.html con estructura SEO
- [x] **Primer artículo** - infraestructura-capiata-2026.html con NewsArticle schema
- [x] **Lazy loading** - Imágenes cargan solo cuando se necesitan

### Schema Markup (JSON-LD)
- [x] **Person Schema** - Identifica a Nicolás Oviedo como candidato
- [x] **LocalBusiness Schema** - Para campaña política
- [x] **BreadcrumbList** - Navegación estructurada
- [x] **WebSite Schema** - Estructura general del sitio
- [x] **FAQPage Schema** - Preguntas frecuentes
- [x] **SocialMediaPosting** - Redes sociales
- [x] **NewsArticle Schema** - Para artículos de blog
- [x] **BlogPosting Schema** - Para lista de blog posts

### Documentación
- [x] **SEO-GUIDE.md** - Guía completa de SEO
- [x] **ESTRATEGIA-VISIBILIDAD.md** - Plan de marketing y visibilidad
- [x] **PALABRAS-CLAVE.md** - Estrategia de keywords
- [x] **google-analytics.html** - Código de GA4 para copiar

### Optimizaciones Técnicas
- [x] Compresión GZIP en .htaccess
- [x] Caché del navegador configurado
- [x] Headers de seguridad (X-UA-Compatible, etc.)
- [x] HTTPS enforcement en .htaccess
- [x] Redirecciones www → non-www

---

## 🔴 PRÓXIMOS PASOS INMEDIATOS (HOY)

### 1. **Google Search Console** [CRÍTICO - 30 mins]
```
Pasos:
1. Accede a https://search.google.com/search-console
2. Haz click en "Agregar propiedad"
3. Elige "Prefijo de URL": https://niko-intendente.capiata.com.py
4. Elige "Verificación por DNS" (es más rápida)
5. Copia el registro TXT que aparece
6. Ve a tu proveedor de dominio (ej: GoDaddy, Namecheap, etc.)
7. Agrega el registro DNS TXT
8. Espera 5-10 minutos
9. Vuelve a Search Console y haz click "Verificar"
10. Espera confirmación (puede tomar 24-48 hrs)
```

**Estado**: ⏳ PENDIENTE
**Prioridad**: 🔴 CRÍTICA
**Impacto**: Alto - Sin esto Google no sabe que tu sitio existe

---

### 2. **Enviar Sitemap a Google** [15 mins]
```
1. En Search Console, ve a "Sitemaps"
2. En el campo de URL, escribe: sitemap.xml
3. Haz click "Enviar"
4. Google lo procesará en 24-48 hrs
```

**Estado**: ⏳ PENDIENTE
**Prioridad**: 🔴 CRÍTICA

---

### 3. **Google My Business** [1 hora]
```
1. Ve a https://www.google.com/intl/es_es/business/
2. Haz click "Empezar ahora"
3. Completa:
   - Nombre: "Campaña Nicolás Oviedo para Intendente Capiatá"
   - Categoría: "Candidato Político" (si existe) o "Organización Política"
   - Ubicación: Capiatá, Paraguay
   - Teléfono: +595993539237
   - Email: niko.oviedo@gmail.com
   - Sitio web: https://niko-intendente.capiata.com.py/
   - Horario: Si aplica, configura
4. Agrega fotos (perfil, eventos, propuestas)
5. Verifica el perfil (Google enviará tarjeta postal)
```

**Estado**: ⏳ PENDIENTE
**Prioridad**: 🔴 ALTA
**Impacto**: Alto - Mejora visibilidad local

---

### 4. **Instalar Google Analytics 4** [20 mins]
```
1. Ve a https://analytics.google.com/
2. Crea nueva propiedad: "niko-intendente.capiata.com.py"
3. Obtén tu ID (empieza con "G-")
4. Copia el código de: js/google-analytics.html
5. Reemplaza 'G-XXXXXXXXXX' con tu ID real
6. Pega antes del </head> en index.html y blog/index.html
7. Espera 24hrs para ver datos
```

**Estado**: ⏳ PENDIENTE
**Prioridad**: 🟡 ALTA
**Impacto**: Alto - Sin esto no sabes quién te visita

---

## 🟡 PRÓXIMOS PASOS (ESTA SEMANA)

### 5. **Conectar Search Console con Google Analytics** [10 mins]
```
En Google Analytics:
1. Admin → Fuentes de Datos → Search Console
2. Selecciona tu propiedad de Search Console
3. Esto integrará datos de búsquedas
```

---

### 6. **Publicar 2 Artículos de Blog más** [2-3 horas]
Crear artículos con keywords temáticas:

**Artículo 2**: "Cómo eliminaremos la corrupción municipal"
- Ubicación: /blog/corrupcion-transparencia.html
- Keyword principal: "Corrupción municipal Capiatá"
- Longitud: 1500-2000 palabras
- Include: Schema NewsArticle

**Artículo 3**: "Transporte público moderno para Capiatá"
- Ubicación: /blog/transporte-capiata.html
- Keyword principal: "Transporte público Capiatá moderno"
- Longitud: 1500-2000 palabras

---

### 7. **Contactar Medios Locales** [1-2 horas]
```
Envía comunicado de prensa a:
- Diario Última Hora: prensa@ultimahora.com
- ABC Color: redaccion@abc.com.py
- Radio local de Capiatá (busca contactos)
- Blogs políticos de Paraguay

Template:
"Nicolás Oviedo, candidato a Intendente de Capiatá 2026, 
presenta propuestas de transparencia, infraestructura moderna 
y combate a corrupción. Más en: niko-intendente.capiata.com.py"
```

---

### 8. **Optimizar Imágenes** [1 hora]
```
Para cada imagen en tu sitio:
1. Comprime usando: https://tinypng.com/
2. Asegúrate de que sea formato .webp (mejor compresión)
3. Agrega alt text descriptivo:
   ✅ "Nicolás Oviedo, Candidato Intendente Capiatá 2026"
   ❌ "foto.webp"
```

---

## 🟢 PRÓXIMAS 2 SEMANAS

### 9. **Crear Landing Page de Email** [2 horas - opcional]
Si quieres capturar emails de simpatizantes:
```html
<form id="email-form">
  <input type="email" required placeholder="Tu email">
  <button>Recibir actualizaciones</button>
</form>
```
Integrar con Firebase (ya usas Firebase)

---

### 10. **Monitorear en Search Console** [15 mins diarios]
Checklist diario:
- [ ] ¿Cuántas impresiones?
- [ ] ¿Cuántos clics?
- [ ] ¿Qué keywords traen tráfico?
- [ ] ¿Algún error de indexación?

---

## 📊 MÉTRICAS A MONITOREAR

### En Search Console
| Métrica | Objetivo 2 semanas | Objetivo 1 mes |
|---------|-------------------|-----------------|
| Impresiones | 500+ | 2000+ |
| Clics | 20+ | 100+ |
| Posición promedio | 15-20 | 10-15 |
| Sitios indexados | 4+ | 10+ |

### En Google Analytics
| Métrica | Objetivo |
|---------|----------|
| Usuarios únicos/día | 10+ |
| Sesiones/día | 15+ |
| Páginas por sesión | 2+ |
| Bounce rate | < 60% |

---

## 🚀 ACCIONES DE MARKETING PARA AMPLIFICAR

### Redes Sociales (Compartir 3-4 veces/semana)
```
Facebook: Publica blog posts, noticias, propuestas
Instagram: Stories, reels, infografías
TikTok: Videos cortos (15-60 seg) sobre propuestas
Twitter/X: Threads sobre políticas, responde a ciudadanos
```

### Email Marketing (Si captures emails)
```
Envía newsletter semanal:
- Resumen de propuestas
- Link al blog
- Invitación a compartir
```

### Alianzas y Backlinks
```
Obtén menciones en:
- Directorios de candidatos
- Sitios de política local
- Portales de noticias Paraguay
```

---

## 💻 ARCHIVO DE CONFIGURACIÓN RECOMENDADO

### Si tienes acceso a tu servidor/hosting

#### Crear `.htaccess` (YA CREADO - solo sube)
- Caché para usuarios
- Compresión GZIP
- Redirecciones

#### Crear `robots.txt` (YA CREADO - solo sube)
- Permite Google, ChatGPT, Bing

#### Crear `sitemap.xml` (YA CREADO - solo sube)
- Mapa del sitio

---

## 🎯 INDICADORES DE ÉXITO

**En 2 semanas deberías ver:**
- ✅ Sitio indexado en Google (5-10 páginas)
- ✅ Primeras impresiones en búsquedas
- ✅ Google My Business activo

**En 1 mes deberías alcanzar:**
- ✅ Top 10 en búsqueda de "Nicolás Oviedo Capiatá"
- ✅ 100+ visitantes desde búsqueda orgánica
- ✅ 2000+ impresiones mensuales

**En 3 meses:**
- ✅ Top 3 en búsquedas principales
- ✅ 500+ visitantes mensuales
- ✅ Menciones en medios locales

---

## 📞 SOPORTE Y DUDAS

Si tienes dudas:
1. **Search Console Help**: https://support.google.com/webmasters
2. **Google Analytics Help**: https://support.google.com/analytics
3. **Schema.org Validation**: https://schema.org/validate

---

## 🔒 Checklist Final

Antes de lanzar:
- [ ] Todos los URLs reemplazan capiata2026.com por niko-intendente.capiata.com.py
- [ ] robots.txt y sitemap.xml están en la raíz
- [ ] Google Analytics está instalado (si quieres)
- [ ] Todos los links funcionan
- [ ] No hay errores 404
- [ ] Mobile se ve bien (prueba en https://search.google.com/test/mobile-friendly)

---

**Última actualización**: 2026-06-17
**Próxima revisión**: 2026-06-24
