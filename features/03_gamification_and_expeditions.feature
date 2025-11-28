Característica: Sistema de Gamificación
  Como usuario
  Quiero ganar recompensas por mi actividad
  Para sentirme motivado a seguir explorando

  @US08 @GeoLocalizacion @CheckIn
  Escenario: Validación de Check-in
    Dado que el usuario está físicamente en "Huaca Pucllana" (Coincidencia GPS)
    Cuando toca "Hacer Check-in"
    Entonces el sistema otorga "50 XP"
    Y desbloquea el logro "Primera Visita"

  @US08 @Negativo
  Escenario: Check-in Fallido (Ubicación Incorrecta)
    Dado que el usuario NO está en el sitio
    Cuando toca "Hacer Check-in"
    Entonces el sistema muestra el error "Debes estar en el sitio para hacer check-in"

  @US50 @US51 @US52 @US53 @Expediciones
  Escenario: Ciclo de vida de una Expedición
    Dado que el usuario navega el catálogo de "Expediciones"
    Cuando inicia la "Ruta de la Cultura Lima"
    Entonces la expedición pasa a estado "Activa"
    Y el usuario puede rastrear su progreso (ej. 1/5 sitios visitados)
    
  @US07 @US56 @Completado
  Escenario: Completar una Expedición
    Dado que el usuario completa la tarea final de una expedición
    Entonces el sistema la marca como "Completada"
    Y otorga la insignia "Maestro del Sendero"
    Y añade puntos extra a la billetera del usuario

  @US09 @US10 @US11 @Social
  Escenario: Trivias y Rankings
    Dado que el usuario responde correctamente una Trivia
    Entonces gana puntos
    Y su posición en el "Ranking Global" se actualiza
    Y puede ver sus insignias en la "Vitrina de Logros"

  @US12 @US14 @US15 @Tienda
  Escenario: Canjear Recompensas
    Dado que el usuario tiene 1000 puntos
    Y una "Entrada al Museo" cuesta 800 puntos
    Cuando toca "Canjear"
    Entonces los puntos son deducidos
    Y se genera un código QR en "Mis Recompensas"