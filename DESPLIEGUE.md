# 🚀 GUÍA DE DESPLIEGUE - PASO A PASO CON IMÁGENES

Esta guía te ayudará a publicar tu "Jardín de Acciones" en GitHub Pages de manera gratuita.

---

## 📦 Archivos incluidos en este proyecto

```
dashboard-consciente/
├── index.html          ← Página principal del dashboard
├── data.js             ← Archivo donde editarás las tareas
├── app.js              ← Lógica de la aplicación (no tocar)
├── README.md           ← Documentación completa
├── GUIA-RAPIDA.md      ← Referencia rápida
└── DESPLIEGUE.md       ← Este archivo
```

---

## 🎯 PASO 1: Crear cuenta en GitHub

### ¿Qué es GitHub?
Es una plataforma gratuita donde podés guardar tus archivos y hacer que sean accesibles como una página web.

### Cómo crear tu cuenta:
1. Abre tu navegador y ve a: **https://github.com**
2. Haz clic en **"Sign up"** (arriba a la derecha)
3. Completa el formulario:
   ```
   Email: tu-email@ejemplo.com
   Password: (elige una contraseña segura)
   Username: laura-flynn (o el que prefieras)
   ```
4. Verifica tu email (recibirás un código de confirmación)
5. ¡Listo! Ya tenés cuenta en GitHub

**Consejo**: Guarda tu usuario y contraseña en un lugar seguro.

---

## 🎯 PASO 2: Crear un repositorio nuevo

### ¿Qué es un repositorio?
Es como una carpeta en línea donde vas a guardar los archivos de tu dashboard.

### Cómo crearlo:
1. Inicia sesión en GitHub
2. Haz clic en el botón **"+"** arriba a la derecha
3. Selecciona **"New repository"**
4. Completa estos campos:

   ```
   Repository name: jardin-de-acciones
   (importante: sin espacios, usa guiones)
   
   Description: Dashboard de planificación consciente
   
   Public: ✅ (debe estar seleccionado)
   
   Add a README file: ✅ (marcá esta casilla)
   ```

5. Haz clic en **"Create repository"** (botón verde)

**¡Felicidades!** Acabás de crear tu primer repositorio.

---

## 🎯 PASO 3: Subir los archivos del dashboard

### Opción A: Subir desde la interfaz web (Recomendado)

1. Estando en tu repositorio, busca el botón **"Add file"**
2. Selecciona **"Upload files"**
3. Arrastra los siguientes archivos desde tu computadora:
   - `index.html`
   - `data.js`
   - `app.js`
   
   **O** haz clic en "choose your files" y selecciónalos manualmente

4. Abajo verás una sección "Commit changes":
   ```
   Commit message: Primera versión del Jardín de Acciones
   ```

5. Haz clic en **"Commit changes"** (botón verde)

### Verificación:
Deberías ver ahora 3 archivos nuevos en tu repositorio:
- index.html
- data.js
- app.js

---

## 🎯 PASO 4: Activar GitHub Pages

### ¿Qué es GitHub Pages?
Es el servicio gratuito de GitHub que convierte tus archivos en una página web accesible desde cualquier lugar.

### Cómo activarlo:

1. En tu repositorio, haz clic en **"Settings"** (arriba, última pestaña)

2. En el menú lateral IZQUIERDO, busca y haz clic en **"Pages"**

3. Verás una sección que dice **"Source"**. Configúrala así:
   ```
   Branch: main (seleccioná del menú desplegable)
   Folder: / (root)
   ```

4. Haz clic en **"Save"**

5. **¡Espera 1-2 minutos!** GitHub está procesando tu sitio.

6. Recarga la página. Deberías ver un mensaje verde que dice:
   ```
   ✅ Your site is live at https://tu-usuario.github.io/jardin-de-acciones/
   ```

---

## 🎯 PASO 5: Acceder a tu dashboard

1. Copia la URL que te dio GitHub en el paso anterior
2. Pégala en tu navegador
3. **¡LISTO!** Ya está publicado tu Jardín de Acciones

### URL de ejemplo:
Si tu usuario de GitHub es `laura-flynn` y tu repositorio se llama `jardin-de-acciones`, tu URL será:

```
https://laura-flynn.github.io/jardin-de-acciones/
```

---

## 📱 PASO 6: Guardar acceso rápido

### En computadora:
- Presiona **Ctrl+D** (Windows) o **Cmd+D** (Mac) para guardar en favoritos

### En celular:

**iPhone/iPad (Safari):**
1. Toca el ícono de "Compartir" (cuadrado con flecha hacia arriba)
2. Scrollea y selecciona "Agregar a pantalla de inicio"
3. Elige un nombre: "Jardín 🌿"
4. Toca "Agregar"

**Android (Chrome):**
1. Toca el menú (tres puntitos arriba a la derecha)
2. Selecciona "Agregar a pantalla de inicio"
3. Elige un nombre: "Jardín 🌿"
4. Toca "Agregar"

---

## 🔄 Actualizar tareas en el futuro

### Método rápido (directamente en GitHub):

1. Ve a tu repositorio en GitHub
2. Haz clic en el archivo **`data.js`**
3. Haz clic en el ícono del **lápiz** (editar)
4. Modifica las tareas según necesites
5. Scrollea abajo, escribe un mensaje: "Actualización semanal"
6. Haz clic en **"Commit changes"**
7. Espera 30-60 segundos y **recarga tu dashboard**

Los cambios se verán reflejados automáticamente.

---

## ❓ Preguntas frecuentes

### "¿Cuánto cuesta esto?"
**Es 100% GRATUITO.** GitHub Pages es gratis para sitios públicos.

### "¿Pueden ver otras personas mi dashboard?"
Sí, cualquiera con la URL puede verlo. Si necesitás privacidad:
- Opción 1: No compartas la URL
- Opción 2: Usa contraseñas complejas en las tareas (sin datos sensibles)

### "¿Qué pasa si rompo algo editando?"
GitHub guarda TODO el historial. Siempre podés volver a una versión anterior:
1. Ve al archivo en GitHub
2. Haz clic en "History"
3. Busca la versión que funcionaba
4. Cópiala y restaurala

### "¿Necesito saber programar?"
**NO.** Solo necesitás saber:
- Editar texto (como en Word)
- Copiar y pegar
- Hacer clic en botones

### "¿Puedo cambiar los colores?"
Sí, pero requiere editar CSS. Consulta la sección "Personalización" en README.md

---

## 🆘 Solución de problemas comunes

### Problema: "El dashboard no carga, veo una página en blanco"
**Solución:**
1. Verifica que subiste los 3 archivos: `index.html`, `data.js`, `app.js`
2. Espera 2-3 minutos más (GitHub puede tardar)
3. Recarga con Ctrl+Shift+R (fuerza la recarga)

### Problema: "Hice cambios pero no se ven"
**Solución:**
1. Verifica que hiciste "Commit changes" (botón verde)
2. Espera 1 minuto
3. Recarga con Ctrl+Shift+R

### Problema: "El archivo data.js tiene errores"
**Solución:**
1. Verifica que no borraste las comillas `""`
2. Verifica que las comas `,` estén bien puestas
3. Usa el historial de GitHub para volver a una versión anterior

---

## 📞 Soporte técnico

Si nada de esto funciona, contacta a:

**Matías Benni - M DIGITAL**
- WhatsApp: +54 9 387 406 0702
- Email: (tu email de contacto)

Incluye:
- URL de tu repositorio
- Qué intentaste hacer
- Captura de pantalla del error (si hay)

---

## 🎉 ¡Felicidades!

Si llegaste hasta acá, ya tenés tu dashboard funcionando en la nube, accesible desde cualquier dispositivo, ¡y sin pagar un peso!

Que lo uses con calma y presencia 🌿

---

**Creado por:** Matías Benni  
**Para:** Laura Flynn y Maru  
**Fecha:** Enero 2025  
**Versión:** 1.0
