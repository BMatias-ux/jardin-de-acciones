// ============================================
// JARDÍN DE ACCIONES - DATOS
// ============================================
// Este archivo contiene todas las tareas organizadas por marca y categoría.
// Para actualizar las tareas, simplemente edita este archivo y haz commit en GitHub.
// La página se actualizará automáticamente.

const datosJardin = {
    marcas: [
        {
            id: "habilidades",
            nombre: "Habilidades para el Cambio",
            descripcion: "Fundación clínica • Equipo profesional • Estructura con alma",
            color: "#7A9B76",
            tareas: {
                fuego: [
                    "Reunión de equipo clínico - Viernes 3pm",
                    "Resolver tema de facturación pendiente con obra social",
                    "Confirmación de turnos para la semana próxima"
                ],
                aire: [
                    "Publicar testimonial de paciente (aprobado) en Instagram",
                    "Actualizar página web con nuevos profesionales del equipo",
                    "Preparar contenido para newsletter mensual sobre salud mental"
                ],
                tierra: [
                    "Planificar talleres grupales para el segundo trimestre",
                    "Revisar estrategia de expansión a nuevas zonas de la ciudad",
                    "Diseñar programa de supervisión continua para el equipo"
                ]
            }
        },
        {
            id: "eureka",
            nombre: "Caja Eureka",
            descripcion: "Juguetes de madera • Sensorial • Lo hecho a mano con ternura",
            color: "#C4A884",
            tareas: {
                fuego: [
                    "Recibir nuevo stock de manzanas de tela - Confirmar con proveedor",
                    "Responder consulta mayorista sobre arcoíris de madera",
                    "Preparar envíos pendientes de la semana pasada"
                ],
                aire: [
                    "Fotografiar nuevos productos para el catálogo",
                    "Publicar video de proceso artesanal en Instagram Reels",
                    "Actualizar descripción de productos en Mercado Libre"
                ],
                tierra: [
                    "Investigar nuevos proveedores de madera certificada",
                    "Diseñar línea de juguetes para estimulación temprana",
                    "Planificar participación en feria de artesanías de abril"
                ]
            }
        },
        {
            id: "laura",
            nombre: "Laura Flynn",
            descripcion: "Marca personal • Escritura • Conferencias • El libro",
            color: "#8B4049",
            tareas: {
                fuego: [
                    "Revisión final del capítulo 7 del libro con la editora",
                    "Confirmar fecha de charla en universidad - Email pendiente",
                    "Preparar guion para podcast sobre maternidad consciente"
                ],
                aire: [
                    "Publicar reflexión semanal en blog personal",
                    "Compartir fragmento del libro en LinkedIn con call-to-action",
                    "Programar 3 posts para Instagram sobre rituales de calma"
                ],
                tierra: [
                    "Planificar gira de presentación del libro (ciudades clave)",
                    "Diseñar workshop online sobre escritura introspectiva",
                    "Estructurar contenido para segundo libro (borrador inicial)"
                ]
            }
        }
    ]
};

// ============================================
// INSTRUCCIONES PARA EDITAR
// ============================================
// 
// 1. Para AGREGAR una tarea nueva:
//    - Copia una línea existente (ej: "Texto de la tarea")
//    - Pégala en la sección correspondiente (fuego, aire, tierra)
//    - No olvides la coma (,) al final de cada línea, excepto en la última
//
// 2. Para ELIMINAR una tarea:
//    - Simplemente borra la línea completa
//    - Asegúrate de que la línea anterior tenga coma si no es la última
//
// 3. Para MODIFICAR una tarea:
//    - Cambia el texto entre comillas
//
// 4. IMPORTANTE: Respeta las comillas ("") y las comas (,)
//    - Cada tarea debe estar entre comillas dobles
//    - Las tareas se separan con comas
//    - La última tarea de cada sección NO lleva coma al final
//
// Ejemplo de cómo se ve la estructura:
//
// fuego: [
//     "Primera tarea",
//     "Segunda tarea",
//     "Última tarea"  ← SIN COMA
// ],
//
// ============================================
