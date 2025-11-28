Característica: Autenticación y Gestión de Perfil
  Como usuario
  Quiero gestionar mi cuenta de forma segura
  Para guardar mi progreso y personalizar mi experiencia

  @US01 @US06 @Registro
  Escenario: Registro exitoso y verificación de correo
    Dado que el usuario está en la pantalla de "Registro"
    Cuando el usuario ingresa datos válidos (Nombre, Correo, Contraseña)
    Y hace clic en "Registrarse"
    Entonces el sistema crea la cuenta con estado "No Verificado"
    Y envía un correo de verificación
    Cuando el usuario hace clic en el enlace de verificación
    Entonces el estado de la cuenta cambia a "Verificado"

  @US02 @US04 @Login
  Esquema del escenario: Inicio de sesión con diferentes métodos
    Dado que el usuario está en la pantalla de "Iniciar Sesión"
    Cuando el usuario selecciona <metodo>
    Y proporciona credenciales válidas
    Entonces el sistema redirige al "Panel Principal"
    
    Ejemplos:
      | metodo             |
      | "Correo/Contraseña"|
      | "Google OAuth"     |
      | "Apple ID"         |

  @US03 @Recuperacion
  Escenario: Recuperación de contraseña
    Dado que el usuario olvidó su contraseña
    Cuando solicita un enlace de restablecimiento para "usuario@ejemplo.com"
    Entonces el sistema envía un correo con un token temporal
    Y el usuario puede establecer una nueva contraseña usando ese token

  @US05 @Invitado
  Escenario: Acceso en Modo Invitado
    Dado que el usuario no ha iniciado sesión
    Cuando selecciona "Explorar como Invitado"
    Entonces el usuario puede ver el Mapa y detalles de Huacas
    Pero el usuario no puede acceder a funciones de "Check-in" o "Mi Perfil"

  @US42 @US43 @US44 @US45 @Perfil
  Escenario: Gestión del Perfil
    Dado que el usuario ha iniciado sesión
    Cuando navega a "Mi Perfil"
    Entonces puede ver sus estadísticas y avatar
    Y puede actualizar su "Nombre Visible"
    Y puede cambiar su contraseña
    Y puede "Cerrar Sesión" de forma segura