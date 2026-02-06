// ============================================
// JARDÍN DE ACCIONES - LÓGICA DE LA APLICACIÓN
// ============================================

// Iconos para cada sección
const iconos = {
    fuego: "🔥",
    aire: "💨",
    tierra: "🌱"
};

// Títulos descriptivos
const titulos = {
    fuego: "Lo Urgente",
    aire: "Marketing y Comunicación",
    tierra: "Planificación Estratégica"
};

// Variable para rastrear la vista actual
let vistaActual = 'todas';

// ============================================
// FUNCIÓN PRINCIPAL: RENDERIZAR MARCAS
// ============================================
function renderizarMarcas() {
    const container = document.getElementById('vistaIndividual');
    container.innerHTML = '';

    datosJardin.marcas.forEach(marca => {
        // Crear card de la marca
        const marcaCard = document.createElement('div');
        marcaCard.className = `marca-card ${marca.id}`;
        marcaCard.style.display = (vistaActual === 'todas' || vistaActual === marca.id) ? 'block' : 'none';

        // Header de la marca
        const marcaHeader = `
            <div class="marca-header">
                <h2 class="marca-nombre">${marca.nombre}</h2>
                <p class="marca-descripcion">${marca.descripcion}</p>
            </div>
        `;

        // Secciones (Fuego, Aire, Tierra)
        const secciones = ['fuego', 'aire', 'tierra'].map(tipo => {
            const tareas = marca.tareas[tipo] || [];
            const tareasHTML = tareas.length > 0
                ? tareas.map(tarea => `<div class="tarea-item">${tarea}</div>`).join('')
                : '<p class="tarea-vacia">No hay acciones pendientes en este momento</p>';

            return `
                <div class="seccion ${tipo}">
                    <div class="seccion-titulo">
                        <span class="icono">${iconos[tipo]}</span>
                        <span>${titulos[tipo]}</span>
                    </div>
                    <div class="tareas-lista">
                        ${tareasHTML}
                    </div>
                </div>
            `;
        }).join('');

        marcaCard.innerHTML = marcaHeader + secciones;
        container.appendChild(marcaCard);
    });
}

// ============================================
// FUNCIÓN: RENDERIZAR VISTA GENERAL (RESUMEN)
// ============================================
function renderizarVistaGeneral() {
    const container = document.getElementById('vistaGeneral');
    container.innerHTML = '';

    // Crear sección para cada categoría (Fuego, Aire, Tierra)
    ['fuego', 'aire', 'tierra'].forEach(tipo => {
        const seccionDiv = document.createElement('div');
        seccionDiv.className = 'resumen-seccion';

        // Título de la sección
        const titulo = `
            <h3 class="resumen-titulo">
                <span>${iconos[tipo]}</span>
                <span>${titulos[tipo]}</span>
            </h3>
        `;

        // Grid con tareas de cada marca para esta categoría
        const marcasHTML = datosJardin.marcas.map(marca => {
            const tareas = marca.tareas[tipo] || [];
            const tareasHTML = tareas.length > 0
                ? `<ul>${tareas.map(t => `<li>${t}</li>`).join('')}</ul>`
                : '<p class="tarea-vacia">Sin acciones pendientes</p>';

            return `
                <div class="resumen-marca" style="border-left-color: ${marca.color}">
                    <h4>${marca.nombre}</h4>
                    ${tareasHTML}
                </div>
            `;
        }).join('');

        const grid = `<div class="resumen-grid">${marcasHTML}</div>`;

        seccionDiv.innerHTML = titulo + grid;
        container.appendChild(seccionDiv);
    });
}

// ============================================
// FUNCIÓN: CAMBIAR VISTA
// ============================================
function mostrarVista(vista) {
    vistaActual = vista;

    // Actualizar botones activos
    document.querySelectorAll('.filtro-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Mostrar/ocultar contenedores
    const vistaIndividual = document.getElementById('vistaIndividual');
    const vistaGeneral = document.getElementById('vistaGeneral');

    if (vista === 'todas') {
        vistaIndividual.style.display = 'none';
        vistaGeneral.style.display = 'block';
        vistaGeneral.classList.add('active');
        renderizarVistaGeneral();
    } else {
        vistaIndividual.style.display = 'grid';
        vistaGeneral.style.display = 'none';
        vistaGeneral.classList.remove('active');
        renderizarMarcas();
    }
}

// ============================================
// INICIALIZACIÓN
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Renderizar vista inicial (resumen general)
    renderizarVistaGeneral();
    renderizarMarcas();
    
    console.log('🌿 Jardín de Acciones cargado exitosamente');
});
