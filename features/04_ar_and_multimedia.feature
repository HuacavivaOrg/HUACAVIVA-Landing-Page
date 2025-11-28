Característica: Experiencia Inmersiva (RA/3D)
  Como usuario
  Quiero ver reconstrucciones y escuchar historias
  Para entender mejor la historia del lugar

  @US18 @US20 @RA
  Escenario: Activar Experiencia de Realidad Aumentada
    Dado que el usuario está en un sitio compatible
    Y otorga permisos de cámara
    Cuando abre la "Vista RA"
    Entonces el sistema muestra el tutorial "Cómo usar RA"
    Y al finalizar, superpone la reconstrucción 3D sobre la vista de cámara

  @US17 @US19 @3D
  Escenario: Modelo 3D Interactivo
    Dado que el usuario selecciona "Vista 3D"
    Cuando toca un "Punto de Interés" en el modelo
    Entonces aparece una tarjeta de información con contexto histórico (Texto/Imagen)

  @US21 @US22 @US23 @Audio
  Escenario: Audioguía con Subtítulos
    Dado que el usuario está viendo el detalle de un sitio
    Cuando reproduce la "Narración de Audio"
    Y activa los "Subtítulos"
    Entonces el audio se reproduce
    Y los subtítulos aparecen en pantalla en el idioma seleccionado
    Y el usuario puede pausar o adelantar el audio

  @US21 @Glosario
  Escenario: Consultar Glosario
    Dado que el usuario lee un término complejo como "Adobito"
    Cuando toca el término subrayado
    Entonces aparece un tooltip con la definición del Glosario