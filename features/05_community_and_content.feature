Característica: Interacción Comunitaria
  Como miembro de la comunidad
  Quiero compartir y ver contenido
  Para contribuir a la memoria colectiva

  @US25 @US26 @Subida
  Escenario: Subir Historia Comunitaria
    Dado que el usuario está en la pestaña "Comunidad" de una Huaca
    Cuando sube una foto con una descripción
    Entonces el sistema la marca como "Pendiente de Revisión"
    Y notifica al usuario cuando es aprobada

  @US27 @US39 @Interaccion
  Escenario: Calificar y Dar Me Gusta
    Dado que el usuario ve una publicación de otro explorador
    Cuando toca "Me Gusta"
    Entonces el contador de likes incrementa
    Cuando el usuario califica la Huaca con "5 Estrellas"
    Entonces el promedio de calificación del sitio se recalcula

  @US29 @Filtros
  Escenario: Filtrar Publicaciones de la Comunidad
    Dado que el usuario está en el Feed de Comunidad
    Cuando filtra por "Fotos Antiguas"
    Entonces solo se muestran publicaciones que contienen fotografía histórica

  @US28 @Moderacion
  Escenario: Reportar Contenido Inapropiado
    Dado que el usuario ve un comentario ofensivo
    Cuando selecciona "Reportar" -> "Spam/Ofensivo"
    Entonces el sistema oculta el contenido para el usuario
    Y lo marca para revisión del administrador