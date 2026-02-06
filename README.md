# 🌿 Jardín de Acciones - Dashboard de Planificación Consciente

Una herramienta serena y minimalista para gestionar las tres marcas con calma y presencia.

---

## ✨ ¿Qué es esto?

Es un tablero digital donde Laura y Maru pueden ver y organizar todas las tareas de:
- **Habilidades para el Cambio** (Fundación clínica)
- **Caja Eureka** (Juguetes de madera)
- **Laura Flynn** (Marca personal y escritura)

Cada marca tiene tres categorías organizadas por tipo de acción:
- 🔥 **Lo Urgente (Fuego)**: Tareas que requieren atención inmediata
- 💨 **Marketing y Comunicación (Aire)**: Acciones de difusión y expansión
- 🌱 **Planificación Estratégica (Tierra)**: Proyectos a largo plazo

---

## 🚀 Cómo publicar tu Dashboard (Paso a paso)

### Paso 1: Crear una cuenta en GitHub
1. Ve a [github.com](https://github.com)
2. Haz clic en "Sign up" (Registrarse)
3. Usa un email que revises regularmente
4. Elige un nombre de usuario simple (ej: `laura-flynn` o `jardin-acciones`)

### Paso 2: Crear un nuevo repositorio
1. Una vez dentro de GitHub, haz clic en el botón verde **"New"** (arriba a la izquierda)
2. Llena los siguientes campos:
   - **Repository name**: `jardin-de-acciones` (sin espacios, usa guiones)
   - **Description**: "Dashboard de planificación consciente para nuestras tres marcas"
   - **Public**: Selecciona esta opción (es necesario para GitHub Pages gratuito)
   - ✅ Marca la casilla **"Add a README file"**
3. Haz clic en el botón verde **"Create repository"**

### Paso 3: Subir los archivos del dashboard
1. En tu nuevo repositorio, haz clic en **"Add file"** > **"Upload files"**
2. Arrastra los siguientes archivos desde tu computadora:
   - `index.html`
   - `data.js`
   - `app.js`
3. Escribe un mensaje descriptivo (ej: "Primera versión del Jardín de Acciones")
4. Haz clic en el botón verde **"Commit changes"**

### Paso 4: Activar GitHub Pages
1. En tu repositorio, haz clic en **"Settings"** (arriba a la derecha)
2. En el menú lateral izquierdo, busca y haz clic en **"Pages"**
3. En la sección **"Source"**, selecciona:
   - Branch: **main**
   - Folder: **/ (root)**
4. Haz clic en **"Save"**
5. ¡Espera 1-2 minutos! GitHub te mostrará un mensaje con tu URL:
   ```
   Your site is published at: https://tu-usuario.github.io/jardin-de-acciones/
   ```

### Paso 5: Visitar tu dashboard
1. Copia la URL que GitHub te dio
2. Ábrela en tu navegador
3. ¡Listo! Ya puedes ver tu Jardín de Acciones

**Consejo**: Guarda esta URL en tus favoritos para acceder fácilmente.

---

## 📝 Cómo actualizar las tareas semanalmente

### Opción A: Editar directamente en GitHub (Más fácil)

1. Entra a tu repositorio en GitHub
2. Haz clic en el archivo **`data.js`**
3. Haz clic en el ícono del **lápiz** (arriba a la derecha) que dice "Edit this file"
4. Ahora puedes editar las tareas:

   **Para AGREGAR una tarea nueva:**
   ```javascript
   fuego: [
       "Tarea existente 1",
       "Tarea existente 2",
       "Mi nueva tarea"  // ← Agrégala aquí
   ],
   ```

   **Para ELIMINAR una tarea:**
   - Simplemente borra la línea completa
   - Si borras una línea del medio, asegúrate de que la anterior tenga coma (,)

   **Para MODIFICAR una tarea:**
   - Cambia el texto entre las comillas
   - No borres las comillas ni las comas

5. Cuando termines, baja hasta el final de la página
6. Escribe un mensaje breve describiendo qué cambiaste (ej: "Actualicé tareas de Caja Eureka")
7. Haz clic en el botón verde **"Commit changes"**
8. ¡Espera 1 minuto y recarga tu dashboard! Los cambios ya estarán visibles

### Opción B: Descargar, editar y volver a subir

1. En GitHub, haz clic en **`data.js`**
2. Haz clic en el botón **"Download"** o **"Raw"** y guarda el archivo
3. Ábrelo con cualquier editor de texto (Bloc de notas, TextEdit, etc.)
4. Edita las tareas siguiendo las instrucciones dentro del archivo
5. Guarda los cambios
6. Vuelve a GitHub, haz clic en `data.js`, luego en el ícono del lápiz
7. Copia y pega todo el contenido del archivo que editaste
8. Haz commit como en la Opción A

---

## ⚠️ Reglas importantes al editar `data.js`

### ✅ HACER:
- Mantener las comillas dobles `""` alrededor de cada tarea
- Poner coma `,` después de cada tarea (excepto la última de cada sección)
- Usar lenguaje claro y específico en las tareas
- Guardar los cambios con un mensaje descriptivo

### ❌ NO HACER:
- Borrar las llaves `{}` ni los corchetes `[]`
- Olvidar las comillas al escribir una tarea nueva
- Dejar la última tarea de una sección con coma al final
- Borrar las líneas que dicen `fuego:`, `aire:`, o `tierra:`

---

## 🎨 Personalización (Opcional)

### Cambiar los colores
Si quieres ajustar los colores, edita el archivo `index.html` y busca esta sección al inicio:

```css
:root {
    --tierra: #8B7355;
    --madera: #C4A884;
    --hoja: #7A9B76;
    --bordo: #8B4049;
    /* ... más colores ... */
}
```

Puedes cambiar los códigos hexadecimales (#XXXXXX) por otros que prefieras.
Usa [coolors.co](https://coolors.co) para explorar paletas de colores naturales.

---

## 🌸 Filosofía de uso

Este dashboard no es una lista de tareas agresiva. Es un **jardín que cultivás con calma**.

- **No te agobies** con la cantidad de tareas. Si hay muchas, es señal de que necesitás delegar o simplificar.
- **Usa el espacio en blanco**. Está ahí intencionalmente para darte respiro visual.
- **Actualiza con presencia**. Dedica 10 minutos al inicio de cada semana para revisar y ajustar con calma.
- **Celebra lo que se completa**. Antes de borrar una tarea, reconocé el logro.

---

## 🆘 Ayuda y solución de problemas

### "Los cambios no se ven en la página"
- Espera 1-2 minutos después de hacer commit
- Recarga la página con Ctrl+Shift+R (Windows) o Cmd+Shift+R (Mac)
- Verifica que editaste el archivo `data.js` correcto

### "Rompí algo y la página no carga"
No te preocupes, GitHub guarda todo el historial.
1. Ve a tu repositorio
2. Haz clic en `data.js`
3. Haz clic en "History" (arriba a la derecha)
4. Encuentra la versión anterior que funcionaba
5. Cópiala y pégala sobre la versión actual

### "Necesito más ayuda"
Contacta a Matías (tu desarrollador) y describe exactamente qué intentaste hacer y qué mensaje de error viste.

---

## 📧 Contacto

**Desarrollado con calma por:** Matías Benni - M DIGITAL  
**Para:** Laura Flynn y Maru  
**Inspirado en:** La filosofía de "Vivir con Calma"

---

## 🙏 Cierre

Este dashboard es una herramienta, no un amo. Úsenlo para crear más espacio en sus vidas, no para llenarlo de más "pendientes". 

Que cada tarea completada sea un paso hacia la visión de sus marcas, no solo un checkbox tachado.

Con presencia,  
Tu Dashboard 🌿
