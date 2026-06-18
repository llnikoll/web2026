#!/bin/bash
# Script de Verificación en Firebase para Google Search Console

echo "========================================"
echo "🔐 VERIFICACIÓN FIREBASE + GOOGLE SEARCH CONSOLE"
echo "========================================"
echo ""

# Paso 1: Obtener el meta tag
echo "📋 PASO 1: Obtén tu meta tag de Google Search Console"
echo ""
echo "1. Ve a: https://search.google.com/search-console"
echo "2. Selecciona 'Meta tag' como método de verificación"
echo "3. Copia la línea completa que empiece con: <meta name=\"google-site-verification\""
echo ""
read -p "Pega aquí tu meta tag (Ctrl+V): " META_TAG

# Paso 2: Reemplazar en index.html
echo ""
echo "📝 PASO 2: Actualizando index.html..."

# Crear backup
cp index.html index.html.backup
echo "✅ Backup creado: index.html.backup"

# Reemplazar la línea de placeholder
sed -i "s|<!-- <meta name=\"google-site-verification\" content=\"PEGA_AQUI_TU_TOKEN\" /> -->|${META_TAG}|g" index.html

echo "✅ Meta tag insertado en index.html"

# Paso 3: Deploy a Firebase
echo ""
echo "🚀 PASO 3: Desplegando a Firebase..."
echo ""

firebase deploy

echo ""
echo "========================================"
echo "✅ DEPLOYMENT COMPLETADO"
echo "========================================"
echo ""
echo "📍 PASO 4: En Google Search Console"
echo ""
echo "1. Ve a Search Console"
echo "2. Haz click en 'Verificar'"
echo "3. Espera 5-10 segundos"
echo "4. ¡LISTO! ✅"
echo ""
echo "========================================"
