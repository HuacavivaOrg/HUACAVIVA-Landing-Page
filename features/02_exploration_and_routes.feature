Característica: Exploración, Mapas y Rutas
  Como explorador cultural
  Quiero encontrar sitios y planificar rutas
  Para optimizar mi visita

  @US30 @US31 @US32 @Descubrimiento
  Escenario: Filtrar Huacas en el Mapa
    Dado que el usuario está en la pestaña "Mapa"
    Cuando aplica el filtro "Distrito: Miraflores" Y "Tiene RA"
    Entonces el mapa se actualiza mostrando solo los pines coincidentes
    Y la vista de lista refleja los mismos resultados

  @US62 @Busqueda
  Escenario: Búsqueda Global
    Dado que el usuario toca la barra de búsqueda global
    Cuando escribe "Mateo Salado"
    Entonces el sistema muestra "Complejo Arqueológico Mateo Salado" en sugerencias
    Y al hacer clic navega al detalle de la Huaca

  @US33 @US34 @Informacion
  Escenario: Ver Info Práctica y Generar Ruta
    Dado que el usuario está en el detalle de una Huaca
    Cuando revisa la "Información Práctica"
    Entonces el sistema muestra Horarios y Precios
    Cuando selecciona "Generar Ruta" basada en "Cultura Inca"
    Entonces el sistema propone un itinerario optimizado visitando 3 sitios cercanos

  @US35 @US36 @US37 @US38 @Rutas
  Escenario: Gestionar Rutas Personalizadas
    Dado que el usuario crea una ruta manual llamada "Mi Viaje de Fin de Semana"
    Y añade "Huaca Pucllana" y "Huaca Huallamarca"
    Cuando guarda la ruta
    Entonces aparece en "Mis Rutas Guardadas"
    Y el usuario puede iniciar la navegación para esta ruta

  @US40 @US41 @Favoritos
  Escenario: Gestionar Favoritos
    Dado que al usuario le gusta un sitio específico
    Cuando toca el icono de "Corazón"
    Entonces el sitio se añade a la lista "Mis Favoritos"
    Y el icono cambia a estado relleno