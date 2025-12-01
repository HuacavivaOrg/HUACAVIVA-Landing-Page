const initialHuacas = [
    {
        id: 1,
        name: "Huaca Pucllana",
        district: "Miraflores",
        type: "Administrativo",
        image: "assets/images/Huaca1.png",
        description: "Gran centro ceremonial de la Cultura Lima (200-700 d.C.). Construida con adobes hechos a mano.",
        lat: -12.1111,
        lng: -77.0316,
        audio: "assets/audio/pucllana.mp3",
        schedule: "Miércoles a Lunes, 9am - 5pm",
        price: "S/ 15.00 General",
        glossary: [
            { term: "Adobe", def: "Ladrillo de barro sin cocer." },
            { term: "Adobito", def: "Pequeño adobe hecho a mano, característico de la Cultura Lima." }
        ]
    },
    {
        id: 2,
        name: "Huaca Huallamarca",
        district: "San Isidro",
        type: "Templo",
        image: "assets/images/Huaca2.png",
        description: "Pirámide truncada usada como cementerio y centro ceremonial. Restaurada en el siglo XX.",
        lat: -12.0968,
        lng: -77.0396,
        audio: "assets/audio/huallamarca.mp3",
        schedule: "Martes a Sábado, 9am - 5pm",
        price: "S/ 5.00 General",
        glossary: [
            { term: "Rampa", def: "Plano inclinado para acceder a niveles superiores." }
        ]
    },
    {
        id: 3,
        name: "Huaca Mateo Salado",
        district: "Lima",
        type: "Administrativo",
        image: "assets/images/Huaca3.png",
        description: "Complejo arqueológico monumental de la cultura Ychsma, luego ocupado por los Incas.",
        lat: -12.0736,
        lng: -77.0633,
        audio: "assets/audio/mateosalado.mp3",
        schedule: "Jueves a Sábado, 9am - 4pm",
        price: "S/ 10.00 General",
        glossary: [
            { term: "Ychsma", def: "Cultura preinca que habitó los valles de Rímac y Lurín." }
        ]
    },
    {
        id: 4,
        name: "Pachacámac",
        district: "Lurín",
        type: "Templo",
        image: "assets/images/Huaca4.png",
        description: "El oráculo más importante de la costa central. Peregrinaje de todo el imperio Inca.",
        lat: -12.2586,
        lng: -76.9008,
        audio: "assets/audio/pachacamac.mp3",
        schedule: "Martes a Domingo, 9am - 4pm",
        price: "S/ 15.00 General",
        glossary: [
            { term: "Acllawasi", def: "Casa de las escogidas (mujeres dedicadas al culto)." }
        ]
    },
    {
        id: 5,
        name: "Huaca San Marcos",
        district: "Lima",
        type: "Templo",
        image: "assets/images/Huaca1.png",
        description: "Parte del complejo Maranga, ubicada dentro de la UNMSM.",
        lat: -12.0569,
        lng: -77.0803,
        audio: "assets/audio/sanmarcos.mp3",
        schedule: "Previa Cita",
        price: "Gratuito",
        glossary: []
    },
    {
        id: 6,
        name: "Huaca Santa Cruz",
        district: "San Isidro",
        type: "Administrativo",
        image: "assets/images/Huaca2.png",
        description: "Pequeña huaca restaurada en zona urbana, conectada al señorío de Guatca.",
        lat: -12.1036,
        lng: -77.0425,
        audio: "assets/audio/santacruz.mp3",
        schedule: "Acceso Libre",
        price: "Gratuito",
        glossary: []
    }
];

const initialRoutes = [
    { id: 1, name: "Ruta de los Oráculos", huacaIds: [4, 1], duration: "4h", type: "Automática", status: "Not Started" },
    { id: 2, name: "Huacas de Miraflores", huacaIds: [1, 6], duration: "2h", type: "Manual", status: "In Progress" }
];

const initialExpeditions = [
    { id: 1, name: "Explorador de Lima", progress: 3, total: 5, image: "assets/images/Huaca1.png", active: true, completed: false },
    { id: 2, name: "Maestro de la Costa", progress: 0, total: 10, image: "assets/images/Huaca3.png", active: false, completed: false },
    { id: 3, name: "Ruta Moche (Virtual)", progress: 0, total: 8, image: "assets/images/Huaca4.png", active: false, completed: false }
];

const initialBadges = [
    { id: 1, icon: "fa-person-hiking", name: "Primeros Pasos", unlocked: true, condition: "Nivel 1" },
    { id: 2, icon: "fa-camera", name: "Fotógrafo", unlocked: true, condition: "1 Foto Publicada" },
    { id: 3, icon: "fa-book-open", name: "Erudito", unlocked: false, condition: "5 Trivias Correctas" },
    { id: 4, icon: "fa-star", name: "Super Fan", unlocked: false, condition: "Nivel 10" }
];

const initialPosts = [
    {
        id: 1,
        user: "Ana López",
        avatar: "assets/images/Testimonio Ana.png",
        content: "¡Increíble visita a la Huaca Pucllana hoy! La vista nocturna es espectacular. Muy recomendado para quienes visiten Miraflores.",
        likes: 24,
        type: "Relato",
        likedByMe: false,
        comments: [
            {
                id: 101,
                user: "Carlos Mendoza",
                content: "¡Me encanta ese lugar! ¿Fuiste con guía?",
                timestamp: "Hace 2 horas",
                replies: [
                    { id: 1011, user: "Ana López", content: "Sí, la guía fue excelente. Te explica toda la historia.", timestamp: "Hace 1 hora" }
                ]
            },
            {
                id: 102,
                user: "María Torres",
                content: "Las vistas nocturnas son impresionantes, totally agree!",
                timestamp: "Hace 1 hora",
                replies: []
            }
        ]
    },
    {
        id: 2,
        user: "John Smith",
        avatar: "assets/images/avatar-placeholder.png", // Fixed missing image
        type: "Relato",
        content: "Increíble la arquitectura de Huaca Mateo Salado. ¡Muy recomendado!",
        likes: 12,
        likedByMe: false,
        comments: []
    },
    {
        id: 3,
        user: "Abel Tesfaye",
        avatar: "assets/images/Testimonio Andres.png",
        content: "The energy at Mateo Salado is unique. You can really feel the history when you walk through the complex. Worth every minute!",
        likes: 12,
        type: "Relato",
        likedByMe: false,
        comments: []
    },
    {
        id: 4,
        user: "Ricardo Santos",
        avatar: "assets/images/Testimonio Walter.png",
        content: "Completé mi primera expedición hoy! 🏆 Badges desbloqueados: Explorador Novato y Fotógrafo. La gamificación hace que explorar sea mucho más divertido!",
        likes: 18,
        type: "Logro",
        likedByMe: false,
        badge: { icon: "fa-hiking", name: "Explorador Novato" },
        comments: [
            {
                id: 401,
                user: "Sofia Ramírez",
                content: "¡Felicidades! Yo también acabo de empezar mi viaje.",
                timestamp: "Hace 30 min",
                replies: []
            }
        ]
    },
    {
        id: 5,
        user: "Emily Johnson",
        avatar: "assets/images/Testimonio Ana.png",
        content: "Unlocked the 'First Steps' achievement! Can't wait to explore more huacas and complete expeditions. This app makes learning about Peruvian heritage so engaging!",
        likes: 31,
        type: "Logro",
        likedByMe: false,
        badge: { icon: "fa-person-hiking", name: "First Steps" },
        comments: []
    }
];

const initialRewards = [
    { id: 1, name: "Entrada 2x1 Huaca Pucllana", cost: 500, redeemed: false },
    { id: 2, name: "Merch HuacaViva", cost: 1000, redeemed: false },
    { id: 3, name: "Tour Guiado Privado", cost: 2000, redeemed: false }
];

const initialUser = {
    name: "Renzo Vílchez",
    bio: "Explorador apasionado de la historia peruana. Me encanta descubrir nuevos lugares y aprender sobre nuestras raíces.",
    avatar: "assets/images/Testimonio Walter.png",
    level: 1,
    xp: 150,
    nextLevelXp: 1000,
    favorites: [1, 3],
    preferences: {
        notifications: true,
        publicProfile: true,
        darkMode: false
    }
};

const initialLeaderboard = [
    { id: 1, name: "Renzo Vílchez", xp: 750, avatar: "assets/images/Testimonio Sofia.png", isMe: true },
    { id: 2, name: "Ana López", xp: 720, avatar: "assets/images/Testimonio Ana.png", isMe: false },
    { id: 3, name: "Carlos Ruiz", xp: 680, avatar: "assets/images/Testimonio Walter.png", isMe: false },
    { id: 4, name: "Abel Tesfaye", xp: 650, avatar: "assets/images/Testimonio Andres.png", isMe: false },
    { id: 5, name: "Álvaro Díaz", xp: 600, avatar: "assets/images/Testimonio Walter.png", isMe: false },
    { id: 6, name: "Kanye Torrejon", xp: 550, avatar: "assets/images/Testimonio Andres.png", isMe: false },
    { id: 7, name: "Tyler Verde", xp: 500, avatar: "assets/images/Testimonio Ana.png", isMe: false },
    { id: 8, name: "Emilio Gonzales", xp: 450, avatar: "assets/images/Testimonio Walter.png", isMe: false }
];

let state = {
    huacas: initialHuacas,
    routes: initialRoutes,
    expeditions: initialExpeditions,

    // Gamification data (US07-US16)
    gamification: {
        user: {
            level: 5,
            levelName: "Explorador Experto",
            currentXP: 1250,
            nextLevelXP: 1500,
            rank: 147,
            totalExplorers: 3240,
            huacasVisited: 12,
            expeditionsCompleted: 4,
            badgesUnlocked: 8
        },
        badges: [
            { id: 1, name: "Primera Visita", icon: "fa-star", unlocked: true, condition: "Visita tu primera huaca" },
            { id: 2, name: "Explorador", icon: "fa-compass", unlocked: true, condition: "Visita 5 huacas diferentes" },
            { id: 3, name: "Fotógrafo", icon: "fa-camera", unlocked: true, condition: "Comparte 3 fotos" },
            { id: 4, name: "Maratonista", icon: "fa-running", unlocked: true, condition: "Completa una ruta sin parar" },
            { id: 5, name: "Historiador", icon: "fa-book", unlocked: true, condition: "Lee toda la info de 3 huacas" },
            { id: 6, name: "Social", icon: "fa-users", unlocked: true, condition: "Haz 10 amigos exploradores" },
            { id: 7, name: "Maestro", icon: "fa-graduation-cap", unlocked: true, condition: "Completa todas las trivias" },
            { id: 8, name: "Aventurero", icon: "fa-hiking", unlocked: true, condition: "Visita huacas en 3 distritos" },
            { id: 9, name: "Noctámbulo", icon: "fa-moon", unlocked: false, condition: "Visita una huaca de noche" },
            { id: 10, name: "Madrugador", icon: "fa-sun", unlocked: false, condition: "Visita antes de las 7am" },
            { id: 11, name: "Coleccionista", icon: "fa-crown", unlocked: false, condition: "Desbloquea 20 insignias" },
            { id: 12, name: "Leyenda", icon: "fa-trophy", unlocked: false, condition: "Alcanza nivel 10" }
        ],
        featuredBadges: [1, 2, 3, 7, 8], // IDs de las badges destacadas
        ranking: {
            global: [
                { id: 1, name: "María Torres", xp: 3850, isMe: false },
                { id: 2, name: "Carlos Mendoza", xp: 3420, isMe: false },
                { id: 3, name: "Ana Rodríguez", xp: 2980, isMe: false },
                { id: 4, name: "Jorge Silva", xp: 2750, isMe: false },
                { id: 5, name: "Lucía Vargas", xp: 2640, isMe: false },
                { id: 6, name: "Tú", xp: 1250, isMe: true },
                { id: 7, name: "Pedro López", xp: 1180, isMe: false },
                { id: 8, name: "Sofia Ramirez", xp: 1050, isMe: false },
                { id: 9, name: "Diego Castillo", xp: 980, isMe: false },
                { id: 10, name: "Valeria Sánchez", xp: 920, isMe: false }
            ],
            weekly: [
                { id: 1, name: "Carlos Mendoza", xp: 450, isMe: false },
                { id: 2, name: "Jorge Silva", xp: 390, isMe: false },
                { id: 3, name: "Ana Rodríguez", xp: 360, isMe: false },
                { id: 4, name: "Tú", xp: 280, isMe: true },
                { id: 5, name: "María Torres", xp: 250, isMe: false },
                { id: 6, name: "Lucía Vargas", xp: 220, isMe: false },
                { id: 7, name: "Pedro López", xp: 180, isMe: false },
                { id: 8, name: "Sofia Ramirez", xp: 150, isMe: false }
            ],
            monthly: [
                { id: 1, name: "María Torres", xp: 1250, isMe: false },
                { id: 2, name: "Tú", xp: 890, isMe: true },
                { id: 3, name: "Carlos Mendoza", xp: 820, isMe: false },
                { id: 4, name: "Ana Rodríguez", xp: 750, isMe: false },
                { id: 5, name: "Jorge Silva", xp: 680, isMe: false },
                { id: 6, name: "Lucía Vargas", xp: 590, isMe: false },
                { id: 7, name: "Diego Castillo", xp: 520, isMe: false },
                { id: 8, name: "Valeria Sánchez", xp: 480, isMe: false }
            ]
        },
        checkIns: [
            { id: 1, huacaName: "Huaca Pucllana", date: "2024-11-25", xpEarned: 50 },
            { id: 2, huacaName: "Huaca Huallamarca", date: "2024-11-23", xpEarned: 50 },
            { id: 3, huacaName: "Huaca Mateo Salado", date: "2024-11-20", xpEarned: 50 }
        ],
        completedExpeditions: [
            { id: 1, name: "Ruta Lima Pre-Hispánica", completedDate: "2024-11-18", xpEarned: 200, badgeEarned: "Explorador Lima" },
            { id: 2, name: "Cultura Ychsma", completedDate: "2024-11-10", xpEarned: 200, badgeEarned: "Experto Ychsma" },
            { id: 3, name: "Explorando San Isidro", completedDate: "2024-11-03", xpEarned: 150, badgeEarned: "Conocedor San Isidro" }
        ],
        communityBadges: [
            { id: 1, name: "Cronista HuacaViva", icon: "fa-pen-fancy", description: "3 relatos aprobados" },
            { id: 2, name: "Colaborador Estrella", icon: "fa-star-half-stroke", description: "Aportes de alta calidad" }
        ],
        contributions: 3
    },

    posts: initialPosts,
    rewards: initialRewards,
    user: initialUser,
    language: 'es'
};

const translations = {
    es: {
        // Navegación
        explore: "Explorar",
        routes: "Rutas",
        missions: "Misiones",
        gamification: "Gamificación",
        community: "Comunidad",
        profile: "Perfil",

        // Explorar
        exploreTitle: "Explora el Pasado",
        searchPlaceholder: "Buscar huaca por nombre, distrito o cultura...",
        allDistricts: "Todos los distritos",
        allTypes: "Todos los tipos",
        viewDetails: "Ver Detalles",
        share: "Compartir",
        favorite: "Favorito",

        // Rutas
        routesTitle: "Rutas Culturales",
        autoRoute: "Ruta Inteligente",
        autoRouteDesc: "Genera una ruta basada en tus intereses.",
        manualRoute: "Ruta Personalizada",
        manualRouteDesc: "Crea tu propia ruta seleccionando huacas.",
        createRoute: "Crear Nueva Ruta",
        generateRoute: "Generar Ruta",
        myRoutes: "Mis Rutas Guardadas",
        huacas: "Huacas",
        seeRoute: "Ver Ruta",
        viewRoute: "Ver Ruta",
        startRoute: "Iniciar",
        continueRoute: "Continuar",

        // Gamification
        gamificationTitle: "Mi Progreso y Logros",
        ranking: "Ranking",
        of: "de",
        xpForNextLevel: "XP para nivel 6",
        huacasVisited: "Huacas Visitadas",
        expeditions: "Expediciones",
        badges: "Insignias",
        trivia: "Trivia Diaria",
        badgesShowcase: "Exhibición de Insignias",
        viewAll: "Ver Todas",
        customizeShowcase: "Personaliza tu exhibición para mostrar tus mejores logros",
        recentVisits: "Visitas Recientes",
        explorersRanking: "Ranking de Exploradores",
        global: "Global",
        weekly: "Semanal",
        monthly: "Mensual",
        explorer: "Explorador",
        completedExpeditions: "Expediciones Completadas",
        shop: "Tienda de Recompensas",
        available: "Disponibles",
        redeemed: "Canjeados",
        communityRecognition: "Reconocimiento de la Comunidad",
        approvedContributions: "Contribuciones Aprobadas",
        redeem: "Canjear",
        insufficientXP: "XP Insuficiente",
        redeemedStatus: "Canjeado",
        correct: "¡Correcto! +20 XP",
        incorrect: "Incorrecto. Intenta de nuevo mañana.",
        alreadyAnswered: "¡Ya respondiste la trivia de hoy! Vuelve mañana.",
        redeemConfirm: "¿Canjear {name} por {cost} XP?",
        redeemSuccess: "¡Has canjeado {name}!",

        // Misiones
        missionsTitle: "Misiones y Expediciones",
        activeExpeditions: "Expediciones Activas",
        catalog: "Catálogo de Expediciones",
        arExperiences: "Experiencias AR Destacadas",
        startAR: "Iniciar AR",
        startExpedition: "Iniciar Expedición",
        abandonExpedition: "Abandonar",
        comingSoon: "Próximamente",
        missions: "Misiones",
        difficulty: "Dificultad",
        difficultyMedium: "Dificultad: Media",
        completed: "Completada",
        inProgress: "En Progreso",
        notStarted: "No Iniciada",

        // Logros
        achievementsTitle: "Tu Progreso",
        explorerLevel: "Nivel de Explorador",
        level: "Nivel",
        explorer: "Explorador",
        badges: "Mis Insignias",
        trivia: "Trivia Diaria",
        triviaQuestion: "¿Qué cultura construyó la Huaca Pucllana?",
        triviaAnswered: "¡Ya respondiste la trivia de hoy! Vuelve mañana.",
        leaderboard: "Ranking de Exploradores",
        user: "Usuario",
        shop: "Tienda de Beneficios",
        available: "Disponibles",
        redeemed: "Canjeados",
        redeem: "Canjear",
        insufficientXP: "Insuficiente XP",
        cost: "Costo",
        points: "Puntos",
        xp: "XP",

        // Comunidad
        communityTitle: "Comunidad HuacaViva",
        feed: "Activity Feed",
        featured: "Exploradores Destacados",
        sharePost: "Compartir Experiencia",
        shareExperience: "Compartir Experiencia",
        all: "Todo",
        stories: "Relatos",
        photos: "Fotos",
        achievements_type: "Logros",
        publish: "Publicar",
        publishStory: "Publicar Relato",
        selectHuaca: "Selecciona una Huaca",
        postType: "Relato",
        writeExperience: "Escribe tu experiencia...",
        comment: "Comentar",
        reply: "Responder",

        // Perfil
        profileTitle: "Mi Perfil",
        myProfile: "Mi Perfil",
        preferences: "Preferencias",
        notifications: "Notificaciones de RA cercana",
        publicProfile: "Perfil Público",
        darkMode: "Modo Oscuro",
        activate: "Activar",
        deactivate: "Desactivar",
        language: "Idioma",
        spanish: "Español (ES)",
        english: "English (EN)",
        favorites: "Mis Huacas Favoritas",
        myFavoriteHuacas: "Mis Huacas Favoritas",
        noFavorites: "No tienes favoritos aún.",
        remove: "Quitar",
        logout: "Cerrar Sesión",
        editProfile: "Editar Perfil",
        name: "Nombre",
        bio: "Biografía",
        bioPlaceholder: "Tu bio (ej. Explorador desde...)",
        avatar: "Avatar",
        saveChanges: "Guardar Cambios",

        // Modal Rutas
        createManualRoute: "Crear Ruta Manual",
        routeName: "Nombre de la ruta",
        selectHuacas: "Selecciona las huacas:",
        saveRoute: "Guardar Ruta",
        selectAtLeast2: "Selecciona al menos 2 huacas",

        // Detalle Huaca
        overview: "Resumen",
        ra3d: "RA / 3D",
        visit: "Visita",
        glossary: "Glosario",
        district: "Distrito",
        type: "Tipo",
        rating: "Valoración",
        audioGuide: "Audio Guía",
        arExperience: "Experiencia AR",
        viewAR: "Ver en Realidad Aumentada",
        planVisit: "Planifica tu visita",
        schedule: "Horario",
        entrance: "Entrada",
        location: "Ubicación",
        noTerms: "No hay términos disponibles.",

        // Botones generales
        close: "Cerrar",
        cancel: "Cancelar",
        accept: "Aceptar",
        back: "Volver"
    },
    en: {
        // Navigation
        explore: "Explore",
        routes: "Routes",
        missions: "Missions",
        gamification: "Gamification",
        community: "Community",
        profile: "Profile",

        // Explore
        exploreTitle: "Explore the Past",
        searchPlaceholder: "Search huaca by name, district or culture...",
        allDistricts: "All districts",
        allTypes: "All types",
        viewDetails: "View Details",
        share: "Share",
        favorite: "Favorite",

        // Routes
        routesTitle: "Cultural Routes",
        autoRoute: "Smart Route",
        autoRouteDesc: "Generate a route based on your interests.",
        manualRoute: "Custom Route",
        manualRouteDesc: "Create your own route by selecting huacas.",
        createRoute: "Create New Route",
        generateRoute: "Generate Route",
        myRoutes: "My Saved Routes",
        huacas: "Huacas",
        seeRoute: "View Route",
        viewRoute: "View Route",
        startRoute: "Start",
        continueRoute: "Continue",
        // Gamification
        gamificationTitle: "My Progress & Achievements",
        ranking: "Ranking",
        of: "of",
        xpForNextLevel: "XP for level 6",
        huacasVisited: "Huacas Visited",
        expeditions: "Expeditions",
        badges: "Badges",
        trivia: "Daily Trivia",
        badgesShowcase: "Badges Showcase",
        viewAll: "View All",
        customizeShowcase: "Customize your showcase to display your best achievements",
        recentVisits: "Recent Visits",
        explorersRanking: "Explorers Ranking",
        global: "Global",
        weekly: "Weekly",
        monthly: "Monthly",
        explorer: "Explorer",
        completedExpeditions: "Completed Expeditions",
        shop: "Rewards Shop",
        available: "Available",
        redeemed: "Redeemed",
        communityRecognition: "Community Recognition",
        approvedContributions: "Approved Contributions",
        redeem: "Redeem",
        insufficientXP: "Insufficient XP",
        redeemedStatus: "Redeemed",
        correct: "Correct! +20 XP",
        incorrect: "Incorrect. Try again tomorrow.",
        alreadyAnswered: "You already answered today's trivia! Come back tomorrow.",
        redeemConfirm: "Redeem {name} for {cost} XP?",
        redeemSuccess: "You redeemed {name}!",
        // Missions
        missionsTitle: "Missions and Expeditions",
        activeExpeditions: "Active Expeditions",
        catalog: "Expedition Catalog",
        arExperiences: "Featured AR Experiences",
        startAR: "Start AR",
        startExpedition: "Start Expedition",
        abandonExpedition: "Abandon",
        comingSoon: "Coming Soon",
        missions: "Missions",
        difficulty: "Difficulty",
        difficultyMedium: "Difficulty: Medium",
        completed: "Completed",
        inProgress: "In Progress",
        notStarted: "Not Started",

        // Achievements
        achievementsTitle: "Your Progress",
        explorerLevel: "Explorer Level",
        level: "Level",
        explorer: "Explorer",
        badges: "My Badges",
        trivia: "Daily Trivia",
        triviaQuestion: "Which culture built Huaca Pucllana?",
        triviaAnswered: "You've already answered today's trivia! Come back tomorrow.",
        leaderboard: "Explorer Ranking",
        user: "User",
        shop: "Rewards Shop",
        available: "Available",
        redeemed: "Redeemed",
        redeem: "Redeem",
        insufficientXP: "Insufficient XP",
        cost: "Cost",
        points: "Points",
        xp: "XP",

        // Community
        communityTitle: "HuacaViva Community",
        feed: "Activity Feed",
        featured: "Featured Explorers",
        sharePost: "Share Experience",
        shareExperience: "Share Experience",
        all: "All",
        stories: "Stories",
        photos: "Photos",
        achievements_type: "Achievements",
        publish: "Publish",
        publishStory: "Publish Story",
        selectHuaca: "Select a Huaca",
        postType: "Story",
        writeExperience: "Write your experience...",
        comment: "Comment",
        reply: "Reply",

        // Profile
        profileTitle: "My Profile",
        myProfile: "My Profile",
        preferences: "Preferences",
        notifications: "Nearby AR Notifications",
        publicProfile: "Public Profile",
        darkMode: "Dark Mode",
        activate: "Activate",
        deactivate: "Deactivate",
        language: "Language",
        spanish: "Español (ES)",
        english: "English (EN)",
        favorites: "My Favorite Huacas",
        myFavoriteHuacas: "My Favorite Huacas",
        noFavorites: "You don't have any favorites yet.",
        remove: "Remove",
        logout: "Log Out",
        editProfile: "Edit Profile",
        name: "Name",
        bio: "Bio",
        bioPlaceholder: "Your bio (e.g. Explorer since...)",
        avatar: "Avatar",
        saveChanges: "Save Changes",

        // Modal Routes
        createManualRoute: "Create Manual Route",
        routeName: "Route name",
        selectHuacas: "Select huacas:",
        saveRoute: "Save Route",
        selectAtLeast2: "Select at least 2 huacas",

        // Huaca Detail
        overview: "Overview",
        ra3d: "AR / 3D",
        visit: "Visit",
        glossary: "Glossary",
        district: "District",
        type: "Type",
        rating: "Rating",
        audioGuide: "Audio Guide",
        arExperience: "AR Experience",
        viewAR: "View in Augmented Reality",
        planVisit: "Plan Your Visit",
        schedule: "Schedule",
        entrance: "Entrance",
        location: "Location",
        noTerms: "No terms available.",

        // General buttons
        close: "Close",
        cancel: "Cancel",
        accept: "Accept",
        back: "Back"
    }
};

function loadState() {
    // 1. Cargar datos por defecto SIEMPRE primero
    state.huacas = initialHuacas;
    state.routes = initialRoutes;
    state.expeditions = initialExpeditions;
    state.badges = initialBadges;
    state.posts = initialPosts;
    state.rewards = initialRewards;
    state.leaderboard = initialLeaderboard;
    state.user = initialUser;
    state.language = 'es';

    // 2. Intentar recuperar localStorage (solo si existe y es válido)
    try {
        const saved = localStorage.getItem('huacaviva_state');
        if (saved) {
            const parsed = JSON.parse(saved);
            if (parsed.user && parsed.user.name !== "Usuario") state.user = parsed.user;
            if (parsed.huacas && parsed.huacas.length) state.huacas = parsed.huacas;
            if (parsed.routes && parsed.routes.length) state.routes = parsed.routes;
            if (parsed.expeditions && parsed.expeditions.length) state.expeditions = parsed.expeditions;
            if (parsed.badges && parsed.badges.length) state.badges = parsed.badges;
            if (parsed.posts && parsed.posts.length) state.posts = parsed.posts;
            if (parsed.rewards && parsed.rewards.length) state.rewards = parsed.rewards;
            if (parsed.leaderboard && parsed.leaderboard.length) state.leaderboard = parsed.leaderboard;
            if (parsed.language) state.language = parsed.language;
        }
    } catch (e) {
        console.error("Error loading state, using defaults", e);
        localStorage.removeItem('huacaviva_state');
    }

    // 3. Forzar nombre correcto si falló algo
    if (!state.user.name || state.user.name === "Usuario") {
        state.user = initialUser;
    }

    // 4. Sincronizar leaderboard
    const me = state.leaderboard.find(u => u.isMe);
    if (me) {
        me.name = state.user.name;
        me.xp = state.user.xp;
        me.avatar = state.user.avatar;
    }

    // 5. Aplicar Dark Mode
    if (state.user.preferences && state.user.preferences.darkMode) {
        document.body.classList.add('dark-mode');
        const btn = document.getElementById('dark-mode-toggle');
        if (btn) btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
}

function saveState() {
    localStorage.setItem('huacaviva_state', JSON.stringify(state));
}

// --- Modulos ---

let map;
let markers = {};

function initExploreModule() {
    // mapa
    if (!map) {
        map = L.map('map').setView([-12.0464, -77.0428], 12); // Lima Center
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);
    }

    renderHuacasAndMap();

    // buscar
    document.getElementById('huaca-search').addEventListener('input', renderHuacasAndMap);
    document.getElementById('filter-district').addEventListener('change', renderHuacasAndMap);
    document.getElementById('filter-type').addEventListener('change', renderHuacasAndMap);

    // Modal cerrar
    document.querySelector('#huaca-detail-modal .close-modal').addEventListener('click', () => {
        document.getElementById('huaca-detail-modal').classList.add('hidden');
    });
}

function renderHuacasAndMap() {
    const term = document.getElementById('huaca-search').value.toLowerCase();
    const district = document.getElementById('filter-district').value;
    const type = document.getElementById('filter-type').value;

    const filtered = state.huacas.filter(h => {
        const matchName = h.name.toLowerCase().includes(term);
        const matchDistrict = district ? h.district === district : true;
        const matchType = type ? h.type === type : true;
        return matchName && matchDistrict && matchType;
    });

    // Renderizar Lista
    const listEl = document.getElementById('huaca-list');
    listEl.innerHTML = '';
    filtered.forEach(huaca => {
        const isFav = state.user.favorites.includes(huaca.id);
        const card = document.createElement('div');
        card.className = 'huaca-card';
        card.onclick = (e) => {
            if (!e.target.closest('button')) focusOnHuaca(huaca.id);
        };
        card.innerHTML = `
        <img src="${huaca.image}" alt="${huaca.name}">
        <div class="huaca-card-content">
            <h3>${huaca.name}</h3>
            <p class="district">${huaca.district} • ${huaca.type}</p>
            <div class="huaca-actions">
                <button class="btn-view-details" onclick="openHuacaDetail(${huaca.id})">Ver Detalles</button>
                <button class="btn-favorite ${isFav ? 'active' : ''}" onclick="toggleFavorite(${huaca.id})">
                    <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                </button>
            </div>
        </div>
        `;
        listEl.appendChild(card);
    });

    // Renderizado de mapa
    for (let id in markers) {
        map.removeLayer(markers[id]);
    }
    markers = {};

    filtered.forEach(huaca => {
        const marker = L.marker([huaca.lat, huaca.lng]).addTo(map);
        marker.bindPopup(`<b>${huaca.name}</b><br>${huaca.type}`);
        marker.on('click', () => {
            openHuacaDetail(huaca.id);
        });
        markers[huaca.id] = marker;
    });
}

window.focusOnHuaca = (id) => {
    const huaca = state.huacas.find(h => h.id === id);
    if (huaca && map) {
        map.setView([huaca.lat, huaca.lng], 15);
        if (markers[id]) markers[id].openPopup();
    }
};

window.openHuacaDetail = (id) => {
    const huaca = state.huacas.find(h => h.id === id);
    if (!huaca) return;

    const content = document.getElementById('huaca-detail-content');
    const isFav = state.user.favorites.includes(id);

    const glossaryHtml = huaca.glossary.map(g => `<tr><td><strong>${g.term}</strong></td><td>${g.def}</td></tr>`).join('');

    content.innerHTML = `
    <div class="huaca-detail-header">
        <h2>${huaca.name}</h2>
        <div style="display:flex; gap:10px;">
            <button class="btn-favorite" onclick="shareHuaca(${huaca.id})" title="Compartir">
                <i class="fa-solid fa-share-nodes"></i>
            </button>
            <button class="btn-favorite ${isFav ? 'active' : ''}" onclick="toggleFavorite(${huaca.id}); openHuacaDetail(${huaca.id})" title="Favorito">
                <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
            </button>
        </div>
    </div>

    <div class="detail-tabs">
        <button class="tab-btn active" onclick="switchDetailTab('overview')">Resumen</button>
        <button class="tab-btn" onclick="switchDetailTab('ra')">RA / 3D</button>
        <button class="tab-btn" onclick="switchDetailTab('visit')">Visita</button>
        <button class="tab-btn" onclick="switchDetailTab('glossary')">Glosario</button>
    </div>

    <div id="tab-overview" class="detail-tab-content active">
        <img src="${huaca.image}" class="modal-huaca-img">
            <p><strong>Distrito:</strong> ${huaca.district}</p>
            <p><strong>Tipo:</strong> ${huaca.type}</p>
            <p style="margin: 15px 0;">${huaca.description}</p>
            <div class="rating-container" style="margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                <span style="font-weight: 600;">Valoración:</span>
                <div class="stars" style="color: #f1c40f;">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <small style="color: #888;">(4.0/5)</small>
            </div>
            <div class="audio-player">
                <p><i class="fa-solid fa-headphones"></i> Audio Guía</p>
                <audio controls style="width: 100%;">
                    <source src="${huaca.audio}" type="audio/mpeg">
                        Tu navegador no soporta audio.
                </audio>
            </div>
    </div>

    <div id="tab-ra" class="detail-tab-content">
        <div class="ra-placeholder">
            <i class="fa-solid fa-cube fa-3x"></i>
            <h3>Experiencia AR</h3>
            <p>Apunta tu cámara a una superficie plana para ver el modelo 3D de ${huaca.name}.</p>
            <button class="button-primary" onclick="window.location.href='ar.html?id=${huaca.id}'">Ver en Realidad Aumentada</button>
            <div class="ar-tutorial">
                <small>Tip: Asegúrate de tener buena iluminación.</small>
            </div>
        </div>
    </div>

    <div id="tab-visit" class="detail-tab-content">
        <h3>Planifica tu visita</h3>
        <ul style="list-style: none; padding: 0;">
            <li><i class="fa-regular fa-clock"></i> <strong>Horario:</strong> ${huaca.schedule}</li>
            <li><i class="fa-solid fa-ticket"></i> <strong>Entrada:</strong> ${huaca.price}</li>
            <li><i class="fa-solid fa-location-dot"></i> <strong>Ubicación:</strong> ${huaca.district}, Lima</li>
        </ul>
        <div class="map-mini" style="height: 150px; background: #eee; margin-top: 10px; display: flex; align-items: center; justify-content: center;">
            Mapa de ubicación (Simulado)
        </div>
    </div>

    <div id="tab-glossary" class="detail-tab-content">
        <h3>Glosario</h3>
        ${glossaryHtml ? `<table class="glossary-table">${glossaryHtml}</table>` : '<p>No hay términos disponibles.</p>'}
    </div>
    `;
    document.getElementById('huaca-detail-modal').classList.remove('hidden');
};

window.switchDetailTab = (tabName) => {
    document.querySelectorAll('.detail-tabs .tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.detail-tab-content').forEach(c => c.classList.remove('active'));

    event.target.classList.add('active');
    document.getElementById(`tab-${tabName}`).classList.add('active');
};

window.toggleFavorite = (id) => {
    if (state.user.favorites.includes(id)) {
        state.user.favorites = state.user.favorites.filter(fid => fid !== id);
    } else {
        state.user.favorites.push(id);
    }
    saveState();
    renderHuacasAndMap();
    renderProfileModule();
};

// 2. Módulo de Rutas
function initRoutesModule() {
    renderRoutesList();

    // Auto Ruta
    document.getElementById('auto-route-btn').addEventListener('click', () => {
        const newRoute = {
            id: Date.now(),
            name: `Ruta Recomendada ${state.routes.length + 1}`,
            huacaIds: [1, 2, 3],
            duration: "3h",
            type: "Automática",
            status: "Not Started"
        };
        state.routes.push(newRoute);
        saveState();
        renderRoutesList();
        alert('Ruta generada y guardada en "Mis Rutas"');
    });

    // Ruta Manual
    const modal = document.getElementById('manual-route-modal');
    document.getElementById('manual-route-btn').addEventListener('click', () => {
        const list = document.getElementById('manual-route-huaca-list');
        list.innerHTML = '';
        state.huacas.forEach(h => {
            list.innerHTML += `
                <div class="huaca-checkbox-item">
                    <input type="checkbox" value="${h.id}" id="route-h-${h.id}">
                    <label for="route-h-${h.id}">${h.name}</label>
                </div>
            `;
        });
        modal.classList.remove('hidden');
    });

    document.querySelector('#manual-route-modal .close-modal').addEventListener('click', () => modal.classList.add('hidden'));

    document.getElementById('manual-route-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('manual-route-name').value;
        const selected = Array.from(document.querySelectorAll('#manual-route-huaca-list input:checked')).map(cb => parseInt(cb.value));

        if (selected.length < 2) {
            alert('Selecciona al menos 2 huacas');
            return;
        }

        state.routes.push({
            id: Date.now(),
            name: name,
            huacaIds: selected,
            duration: `${selected.length}h`,
            type: "Manual",
            status: "Not Started"
        });
        saveState();
        renderRoutesList();
        modal.classList.add('hidden');
    });
}

function renderRoutesList() {
    const list = document.getElementById('saved-routes-list');
    if (!list) {
        console.error('saved-routes-list element not found');
        return;
    }

    list.innerHTML = state.routes.map(route => `
        <div class="route-card">
            <div class="route-header" style="display:flex; justify-content:space-between; margin-bottom:10px;">
                <span class="route-type-badge" style="background:${route.type === 'Automática' ? 'var(--accent-color)' : 'var(--primary-color)'}; color:white; padding:4px 10px; border-radius:12px; font-size:0.75rem;">${route.type}</span>
                <span class="route-duration" style="color:var(--text-light); font-size:0.85rem;"><i class="fa-regular fa-clock"></i> ${route.duration}</span>
            </div>
            <h4 style="margin-bottom:5px; color:var(--primary-color);">${route.name}</h4>
            <p style="font-size:0.85rem; color:var(--text-medium); margin-bottom:15px;">${route.huacaIds.length} Huacas: ${route.huacaIds.map(id => state.huacas.find(h => h.id === id)?.name).join(', ')}</p>
            
            <div class="route-actions" style="display:flex; gap:10px;">
                <button class="button-primary" style="flex:1; font-size:0.85rem; padding:8px;" onclick="startRoute(${route.id})">
                    ${route.status === 'Not Started' ? 'Iniciar' : 'Continuar'}
                </button>
                <button class="button-secondary" style="flex:1; font-size:0.85rem; padding:8px;" onclick="viewRouteDetails(${route.id})">
                    Ver Detalles
                </button>
            </div>
        </div>
    `).join('');
}

window.generateRoute = () => {
    const newRoute = {
        id: Date.now(),
        name: `Ruta Inteligente ${state.routes.length + 1}`,
        huacaIds: [1, 3, 5],
        duration: "4h",
        type: "Automática",
        status: "Not Started"
    };
    state.routes.push(newRoute);
    saveState();
    renderRoutesList();
    alert('¡Ruta generada exitosamente basada en tus intereses!');
};

window.viewRouteDetails = (id) => {
    const route = state.routes.find(r => r.id === id);
    if (!route) return;
    const huacaNames = route.huacaIds.map(hid => state.huacas.find(h => h.id === hid)?.name).join(', ');
    alert(`Detalles de la ruta: ${route.name}\nHuacas: ${huacaNames}\nDuración: ${route.duration}\nEstado: ${route.status}`);
};

window.startRoute = (id) => {
    const route = state.routes.find(r => r.id === id);
    if (route) {
        route.status = 'In Progress';
        saveState();
        renderRoutesList();
        alert(`Iniciando ruta: ${route.name}`);
    }
};

// 3. Módulo de Misiones
function initMissionsModule() {
    renderExpeditions();
}

function renderExpeditions() {
    const activeList = document.getElementById('active-expeditions-list');
    const catalogList = document.getElementById('expeditions-list');

    if (activeList) activeList.innerHTML = '';
    if (catalogList) catalogList.innerHTML = '';

    if (!state.expeditions || !Array.isArray(state.expeditions)) return;

    state.expeditions.forEach(exp => {
        if (exp.active) {
            const isCompleted = exp.progress >= exp.total;
            const pct = (exp.progress / exp.total) * 100;
            activeList.innerHTML += `
        <div class="expedition-card" style="background: var(--bg-card); padding: 15px; border-radius: 12px; margin-bottom: 15px; box-shadow: var(--shadow-sm); border-left: 4px solid ${isCompleted ? 'var(--accent-color)' : 'var(--primary-color)'};">
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 10px;">
                <h4 style="margin: 0; color: var(--text-dark);">${exp.name}</h4>
                ${isCompleted ? '<span style="background: var(--accent-color); color: white; padding: 4px 10px; border-radius: 12px; font-size: 0.75rem;"><i class="fa-solid fa-trophy"></i> Completada</span>' : ''}
            </div>
            <p style="color: var(--text-medium); font-size: 0.9rem; margin-bottom: 12px;">${exp.description || ''}</p>
            <div style="margin-bottom: 12px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 6px; font-size: 0.85rem;">
                    <span style="color: var(--text-medium);">Progreso</span>
                    <span style="color: var(--text-dark); font-weight: 600;">${exp.progress}/${exp.total} Pasos</span>
                </div>
                <div style="background: var(--bg-light); border-radius: 8px; height: 8px; overflow: hidden;">
                    <div style="background: linear-gradient(90deg, var(--primary-color), var(--accent-color)); height: 100%; width: ${pct}%; transition: width 0.5s ease;"></div>
                </div>
            </div>
            <div style="display: flex; gap: 10px;">
                ${!isCompleted ? `<button class="button-primary" style="flex: 1; font-size: 0.85rem;" onclick="progressExpedition(${exp.id})"><i class="fa-solid fa-check"></i> Completar Paso</button>` : ''}
                <button class="button-secondary" style="${!isCompleted ? '' : 'flex: 1;'} font-size: 0.85rem;" onclick="abandonExpedition(${exp.id})"><i class="fa-solid fa-xmark"></i> Abandonar</button>
            </div>
        </div>
    `;
        } else {
            catalogList.innerHTML += `
                <div class="expedition-card">
                    <img src="${exp.image}">
                    <div class="expedition-content">
                        <h3>${exp.name}</h3>
                        <p>Dificultad: Media</p>
                        <button class="button-primary" style="margin-top: 10px; width: 100%;" onclick="startExpedition(${exp.id})">Iniciar Expedición</button>
                    </div>
                </div>
            `;
        }
    });
}

window.startExpedition = (id) => {
    const exp = state.expeditions.find(e => e.id === id);
    if (exp) {
        exp.active = true;
        saveState();
        renderExpeditions();
        alert(`¡Expedición "${exp.name}" iniciada!`);
    }
};

window.abandonExpedition = (id) => {
    if (confirm('¿Estás seguro de abandonar esta expedición? Perderás el progreso.')) {
        const exp = state.expeditions.find(e => e.id === id);
        if (exp) {
            exp.active = false;
            exp.progress = 0;
            saveState();
            renderExpeditions();
        }
    }
};

window.progressExpedition = (id) => {
    const exp = state.expeditions.find(e => e.id === id);
    if (exp && exp.progress < exp.total) {
        exp.progress++;
        addXP(50);
        if (exp.progress === exp.total) {
            exp.completed = true;
            addXP(200);
            alert('¡Expedición Completada! +200 XP');
        }
        saveState();
        renderExpeditions();
    }
};

// 4. Módulo de Gamificación (US07-US16)
function initGamificationModule() {
    console.log('🎮 Inicializando módulo de Gamificación...');

    try {
        renderProgressSummary();
        renderFeaturedBadges();
        renderCheckInHistory();
        renderExplorersRanking('global');
        renderCompletedExpeditions();
        renderCommunityRecognition();
        renderTrivia();
        renderShop();
        console.log('✅ Gamificación inicializada');
    } catch (error) {
        console.error('Error en gamificación:', error);
    }
}

// Render: Resumen de Progreso (US13)
function renderProgressSummary() {
    console.log('📊 renderProgressSummary called');
    console.log('state.gamification:', state.gamification);

    if (!state.gamification || !state.gamification.user) {
        console.error('❌ state.gamification or state.gamification.user is undefined!');
        return;
    }

    const gData = state.gamification.user;
    console.log('gData:', gData);

    const levelNameEl = document.getElementById('user-level-name');
    console.log('user-level-name element:', levelNameEl);

    if (!levelNameEl) {
        console.error('❌ Could not find element: user-level-name');
        return;
    }

    const t = translations[state.language];

    // Actualizar textos dinámicos
    document.getElementById('user-level-name').innerText = state.gamification.user.levelName;
    document.getElementById('user-current-level').innerText = state.gamification.user.level;
    document.getElementById('user-rank-position').innerText = state.gamification.user.rank;
    document.getElementById('total-explorers').innerText = state.gamification.user.totalExplorers.toLocaleString();
    document.getElementById('current-xp').innerText = state.gamification.user.currentXP.toLocaleString();
    document.getElementById('next-level-xp').innerText = state.gamification.user.nextLevelXP.toLocaleString();

    // Update XP text with translation
    const xpText = document.querySelector('[data-i18n="xpForNextLevel"]');
    if (xpText) xpText.innerText = t.xpForNextLevel.replace('6', state.gamification.user.level + 1);

    const xpProgress = ((state.gamification.user.currentXP - ((state.gamification.user.level - 1) * 200)) / 200) * 100;
    document.getElementById('xp-progress-bar').style.width = `${Math.min(xpProgress, 100)}%`;

    document.getElementById('stat-huacas-visited').innerText = state.gamification.user.huacasVisited;
    document.getElementById('stat-expeditions').innerText = state.gamification.user.expeditionsCompleted;
    document.getElementById('stat-badges').innerText = state.gamification.user.badgesUnlocked;

    console.log('✅ renderProgressSummary completed');
}

// Render: Vitrina de Insignias (US11)
function renderFeaturedBadges() {
    const container = document.getElementById('featured-badges-showcase');
    if (!container) return;

    container.innerHTML = '';

    state.gamification.featuredBadges.forEach(badgeId => {
        const badge = state.gamification.badges.find(b => b.id === badgeId);
        if (!badge) return;

        const badgeEl = document.createElement('div');
        badgeEl.style.cssText = `
            width: 100%;
            aspect-ratio: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border-radius: 12px;
            background: ${badge.unlocked ? 'linear-gradient(135deg, var(--accent-color), #d4af37)' : 'var(--bg-light)'};
            color: ${badge.unlocked ? 'white' : 'var(--text-light)'};
            cursor: pointer;
            transition: transform 0.3s ease;
            padding: 10px;
        `;

        badgeEl.title = `${badge.name} - ${badge.condition}`;

        if (badge.unlocked) {
            badgeEl.onmouseenter = () => badgeEl.style.transform = 'scale(1.1) rotate(5deg)';
            badgeEl.onmouseleave = () => badgeEl.style.transform = 'scale(1)';
        }

        badgeEl.innerHTML = `
            <i class="fa-solid ${badge.icon}" style="font-size: 2rem; margin-bottom: 5px;"></i>
            <small style="font-size: 0.7rem; font-weight: 600; text-align: center;">${badge.unlocked ? badge.name : '🔒'}</small>
        `;

        container.appendChild(badgeEl);
    });
}

// Render: Historial de Check-ins (US08)
function renderCheckInHistory() {
    const container = document.getElementById('recent-checkins-list');
    if (!container) return;

    container.innerHTML = '';

    if (state.gamification.checkIns.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-medium); padding: 20px;">No hay visitas registradas</p>';
        return;
    }

    state.gamification.checkIns.forEach(checkIn => {
        const item = document.createElement('div');
        item.style.cssText = `
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 15px;
            background: var(--bg-light);
            border-radius: 10px;
            border-left: 4px solid var(--primary-color);
        `;

        const date = new Date(checkIn.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'short' });

        item.innerHTML = `
            <div>
                <div style="font-weight: 600; color: var(--text-dark); margin-bottom: 3px;">${checkIn.huacaName}</div>
                <div style="font-size: 0.8rem; color: var(--text-medium);">
                    <i class="fa-solid fa-calendar"></i> ${date}
                </div>
            </div>
            <div style="text-align: right;">
                <div style="font-weight: 700; color: var(--accent-color);">+${checkIn.xpEarned}</div>
                <div style="font-size: 0.75rem; color: var(--text-medium);">XP</div>
            </div>
        `;

        container.appendChild(item);
    });
}

// Render: Ranking de Exploradores (US09)
function renderExplorersRanking(period = 'global') {
    const tbody = document.getElementById('ranking-table-body');
    if (!tbody) return;

    tbody.innerHTML = '';

    const ranking = state.gamification.ranking[period] || state.gamification.ranking.global;

    ranking.forEach((user, index) => {
        const row = document.createElement('tr');
        row.style.cssText = `
            border-bottom: 1px solid var(--bg-light);
            ${user.isMe ? 'background: linear-gradient(90deg, rgba(212, 175, 55, 0.15), transparent); border-left: 4px solid var(--accent-color);' : ''}
        `;

        row.innerHTML = `
            <td style="padding: 12px; font-weight: 700; color: var(--text-dark);">${index + 1}</td>
            <td style="padding: 12px;">
                <strong style="color: ${user.isMe ? 'var(--accent-color)' : 'var(--text-dark)'};">${user.name}</strong>
                ${user.isMe ? '<span style="color: var(--accent-color); font-size: 0.75rem; margin-left: 5px;">(Tú)</span>' : ''}
            </td>
            <td style="padding: 12px; text-align: right; font-weight: 700; color: var(--primary-color);">${user.xp.toLocaleString()} XP</td>
        `;

        tbody.appendChild(row);
    });
}

// Render: Expediciones Completadas (US07)
function renderCompletedExpeditions() {
    const container = document.getElementById('completed-expeditions-list');
    if (!container) return;

    container.innerHTML = '';

    if (state.gamification.completedExpeditions.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-medium); padding: 20px;">No hay expediciones completadas</p>';
        return;
    }

    state.gamification.completedExpeditions.forEach(exp => {
        const item = document.createElement('div');
        item.style.cssText = `
            padding: 15px;
            background: var(--bg-light);
            border-radius: 12px;
            border-left: 4px solid var(--accent-color);
        `;

        const date = new Date(exp.completedDate).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' });

        item.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 10px;">
                <div style="font-weight: 700; color: var(--text-dark); font-size: 1.05rem;">
                    <i class="fa-solid fa-trophy" style="color: var(--accent-color);"></i> ${exp.name}
                </div>
            </div>
            <div style="font-size: 0.85rem; color: var(--text-medium); margin-bottom: 8px;">
                <i class="fa-solid fa-calendar-check"></i> Completada: ${date}
            </div>
            <div style="display: flex; gap: 15px;">
                <span style="background: var(--primary-color); color: white; padding: 4px 10px; border-radius: 8px; font-size: 0.8rem; font-weight: 600;">
                    +${exp.xpEarned} XP
                </span>
                <span style="background: var(--accent-color); color: white; padding: 4px 10px; border-radius: 8px; font-size: 0.8rem; font-weight: 600;">
                    <i class="fa-solid fa-award"></i> ${exp.badgeEarned}
                </span>
            </div>
        `;

        container.appendChild(item);
    });
}

// Render: Reconocimiento Comunitario (US16)
function renderCommunityRecognition() {
    const container = document.getElementById('community-recognition');
    if (!container) return;

    container.innerHTML = '';

    if (state.gamification.communityBadges.length === 0) {
        container.innerHTML = '<p style="text-align: center; opacity: 0.9;">Contribuye a la comunidad para recibir reconocimientos especiales</p>';
        return;
    }

    state.gamification.communityBadges.forEach(badge => {
        const item = document.createElement('div');
        item.style.cssText = `
            display: flex;
            align-items: center;
            gap: 15px;
            padding: 12px;
            background: rgba(255,255,255,0.15);
            border-radius: 12px;
        `;

        item.innerHTML = `
            <div style="width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; 
                        background: rgba(255,255,255,0.25); border-radius: 10px;">
                <i class="fa-solid ${badge.icon}" style="font-size: 1.5rem;"></i>
            </div>
            <div style="flex: 1;">
                <div style="font-weight: 700; font-size: 1.05rem;">${badge.name}</div>
                <div style="font-size: 0.85rem; opacity: 0.9;">${badge.description}</div>
            </div>
        `;

        container.appendChild(item);
    });

    document.getElementById('community-contributions').innerText = state.gamification.contributions;
}

// Función de filtro de ranking
window.filterRanking = function (period) {
    document.querySelectorAll('[data-filter]').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-filter="${period}"]`)?.classList.add('active');

    renderExplorersRanking(period);
};

// Modal de todas las insignias
window.openAllBadgesModal = function () {
    alert('Modal de insignias - Aquí se mostraría la galería completa de badges con opciones de personalización');
};

function addXP(amount) {
    state.user.xp += amount;
    const newLevel = Math.floor(state.user.xp / 200) + 1;
    if (newLevel > state.user.level) {
        state.user.level = newLevel;
        alert(`¡Subiste al Nivel ${newLevel}!`);
    }

    const me = state.leaderboard.find(u => u.isMe);
    if (me) me.xp = state.user.xp;
    state.leaderboard.sort((a, b) => b.xp - a.xp);

    saveState();
    renderGamificationStats();
    renderProfileModule();
}

function renderGamificationStats() {
    console.log('=== renderGamificationStats START ===');
    renderProgressSummary();
    renderFeaturedBadges();
    renderExplorersRanking('global');
    console.log('=== renderGamificationStats END ===');
}

function renderTrivia() {
    const container = document.getElementById('trivia-container');
    const today = new Date().toDateString();
    const t = translations[state.language];

    if (state.user.lastTriviaDate === today) {
        container.innerHTML = `<p class="text-center">${t.alreadyAnswered}</p>`;
        return;
    }
    container.innerHTML = `
    <p class="question">${t.triviaQuestion || "¿Qué cultura construyó la Huaca Pucllana?"}</p>
    <div class="options">
        <button class="trivia-option" onclick="answerTrivia(this, true)">Cultura Lima</button>
        <button class="trivia-option" onclick="answerTrivia(this, false)">Cultura Wari</button>
        <button class="trivia-option" onclick="answerTrivia(this, false)">Cultura Ychsma</button>
    </div>
    `;
}

window.answerTrivia = (btn, isCorrect) => {
    const t = translations[state.language];
    const btns = document.querySelectorAll('.trivia-option');
    btns.forEach(b => b.disabled = true);

    if (isCorrect) {
        btn.style.background = '#2ecc71';
        btn.style.color = 'white';
        addXP(20);
        state.user.triviasAnswered++;
        state.user.lastTriviaDate = new Date().toDateString();
        saveState();
        alert(t.correct);
    } else {
        btn.style.background = '#e74c3c';
        btn.style.color = 'white';
        state.user.triviasAnswered++;
        state.user.lastTriviaDate = new Date().toDateString();
        saveState();
        alert(t.incorrect);
    }
};

function renderShop(tab = 'available') {
    const container = document.getElementById('rewards-list');
    if (!container) return;

    const t = translations[state.language];

    container.innerHTML = '';
    container.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; padding: 15px 0;';

    const filtered = state.rewards.filter(r => tab === 'available' ? !r.redeemed : r.redeemed);

    if (filtered.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align:center; padding:40px; color: var(--text-light);">
                <i class="fa-solid fa-gift" style="font-size:3rem; margin-bottom:15px; opacity:0.5;"></i>
                <p>${tab === 'available' ? t.available : t.redeemed} - ${t.noFavorites || "No items"}</p>
            </div>
        `;
        return;
    }

    filtered.forEach(reward => {
        const canAfford = state.user.xp >= reward.cost;
        const card = document.createElement('div');
        card.className = `reward-card ${reward.redeemed ? 'redeemed' : ''} ${!canAfford ? 'disabled' : ''}`;

        if (!reward.redeemed && canAfford) {
            card.onclick = () => {
                if (confirm(t.redeemConfirm.replace('{name}', reward.name).replace('{cost}', reward.cost))) {
                    redeemReward(reward.id);
                }
            };
        }

        card.innerHTML = `
            ${reward.redeemed ? `<div class="reward-badge"><i class="fa-solid fa-check"></i> ${t.redeemedStatus}</div>` : ''}
            
            <div class="reward-icon">
                <i class="fa-solid fa-gift" style="color: ${canAfford ? 'var(--accent-color)' : 'var(--text-light)'};"></i>
            </div>
            <h4 class="reward-title">${reward.name}</h4>
            
            <div class="reward-cost">
                <i class="fa-solid fa-coins"></i>
                <span class="cost-value">${reward.cost}</span>
                <span class="cost-label">XP</span>
            </div>
            
            ${!reward.redeemed ? `
                <button 
                    class="button-primary reward-btn" 
                    ${!canAfford ? 'disabled' : ''}
                    onclick="event.stopPropagation(); redeemReward(${reward.id})">
                    ${canAfford ? `<i class="fa-solid fa-shopping-cart"></i> ${t.redeem}` : `<i class="fa-solid fa-lock"></i> ${t.insufficientXP}`}
                </button>
            ` : ''}
        `;

        container.appendChild(card);
    });

    const buttons = document.querySelectorAll('.shop-tabs .filter-chip');
    buttons.forEach(b => {
        b.classList.remove('active');
        if (b.getAttribute('data-i18n') === tab) b.classList.add('active');
    });
};

window.redeemReward = (id) => {
    const t = translations[state.language];
    const reward = state.rewards.find(r => r.id === id);
    if (reward && state.user.xp >= reward.cost) {
        state.user.xp -= reward.cost;
        reward.redeemed = true;
        saveState();
        renderGamificationStats();
        renderShop('available');
        alert(t.redeemSuccess.replace('{name}', reward.name));
    }
};

// 5. Módulo de Comunidad
function initCommunityModule() {
    console.log('Inicializando módulo de Comunidad...');

    renderFeed('all');
    renderCommunityLeaderboard();

    const featuredSection = document.getElementById('featured-explorers-body');
    if (featuredSection) {
        renderFeaturedExplorers();
    }

    console.log('✓ Módulo de Comunidad inicializado');

    // Nuevo Post
    const modal = document.getElementById('new-post-modal');
    document.getElementById('new-post-btn').addEventListener('click', () => {
        event.preventDefault();
        const select = document.getElementById('post-huaca');
        select.innerHTML = '<option value="">Selecciona una Huaca</option>';
        state.huacas.forEach(h => {
            select.innerHTML += `<option value="${h.name}">${h.name}</option>`;
        });
        modal.classList.remove('hidden');
    });

    document.querySelector('#new-post-modal .close-modal').addEventListener('click', () => modal.classList.add('hidden'));

    document.getElementById('new-post-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const huaca = document.getElementById('post-huaca').value;
        const type = document.getElementById('post-type').value;
        const content = document.getElementById('post-content').value;

        const newPost = {
            id: Date.now(),
            user: state.user.name,
            avatar: state.user.avatar,
            content: `[${huaca}] ${content}`,
            likes: 0,
            comments: 0,
            type: type,
            likedByMe: false
        };

        state.posts.unshift(newPost);
        saveState();
        renderFeed('all');
        modal.classList.add('hidden');
        addXP(10);
    });
}

window.switchCommunityTab = (tab) => {
    document.querySelectorAll('.community-tabs-nav .nav-link').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');

    if (tab === 'feed') {
        document.getElementById('community-feed-section').classList.remove('hidden');
        document.getElementById('community-featured-section').classList.add('hidden');
    } else {
        document.getElementById('community-feed-section').classList.add('hidden');
        document.getElementById('community-featured-section').classList.remove('hidden');
        renderFeaturedExplorers();
    }
};

window.filterCommunity = (type) => {
    renderFeed(type);
    const buttons = document.querySelectorAll('.feed-filters .filter-chip');
    buttons.forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
};

function renderFeed(filter = 'all') {
    const feedContainer = document.getElementById('community-feed');
    if (!feedContainer) return;

    feedContainer.innerHTML = '';

    if (!state.posts || !Array.isArray(state.posts)) return;

    const filteredPosts = filter === 'all'
        ? state.posts
        : state.posts.filter(p => p.type === filter);

    feedContainer.innerHTML = filteredPosts.map(post => {
        const commentsHTML = (post.comments || []).map(comment => {
            const repliesHTML = (comment.replies || []).map(reply => `
    <div class="comment-reply" style="margin-left: 40px; margin-top: 10px; padding-left: 15px; border-left: 2px solid rgba(212, 175, 55, 0.3);">
        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 5px;">
            <strong style="font-size: 0.85rem; color: var(--primary-color);">${reply.user}</strong>
            <small style="color: var(--text-light); font-size: 0.75rem;">${reply.timestamp}</small>
        </div>
        <p style="font-size: 0.85rem; color: var(--text-medium); margin: 0;">${reply.content}</p>
    </div>
    `).join('');

            return `
    <div class="comment-item" style="padding: 12px 0; border-bottom: 1px solid rgba(0,0,0,0.05);">
        <div style="display: flex; align-items: flex-start; gap: 12px;">
            <div class="comment-avatar" style="width: 32px; height: 32px; border-radius: 50%; background: var(--primary-color); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 0.8rem;">
                ${comment.user.charAt(0)}
            </div>
            <div class="comment-content" style="flex: 1;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 5px;">
                    <strong style="font-size: 0.9rem; color: var(--text-dark);">${comment.user}</strong>
                    <small style="color: var(--text-light); font-size: 0.75rem;">${comment.timestamp}</small>
                </div>
                <p style="font-size: 0.9rem; color: var(--text-medium); margin: 0 0 8px 0;">${comment.content}</p>
                <button onclick="replyToComment(${post.id}, ${comment.id})" style="background: none; border: none; color: var(--primary-color); font-size: 0.8rem; cursor: pointer; padding: 0; font-weight: 600;">
                    <i class="fa-solid fa-reply"></i> Responder
                </button>
                ${repliesHTML}
            </div>
        </div>
    </div>
    `;
        }).join('');

        const badgeHTML = post.badge ? `
    <div class="post-badge" style="margin-top: 15px; padding: 15px; background: linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(212, 175, 55, 0.05)); border-left: 3px solid var(--accent-color); border-radius: 8px;">
        <div style="display: flex; align-items: center; gap: 12px;">
            <i class="fa-solid ${post.badge.icon}" style="font-size: 2rem; color: var(--accent-color);"></i>
            <div>
                <strong style="color: var(--accent-color);">Insignia Desbloqueada</strong>
                <p style="margin: 5px 0 0 0; color: var(--text-medium);">${post.badge.name}</p>
            </div>
        </div>
    </div>
    ` : '';

        return `
    <div class="post-card" style="background: var(--bg-card); padding: 20px; border-radius: var(--border-radius-m); margin-bottom: 20px; box-shadow: var(--shadow-sm);">
        <div class="post-header" style="display: flex; align-items: center; gap: 12px; margin-bottom: 15px;">
            <img src="${post.avatar}" alt="${post.user}" style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover;">
                <div>
                    <strong style="color: var(--text-dark); font-size: 1rem;">${post.user}</strong>
                    <small style="display: block; color: var(--text-light); font-size: 0.8rem;">${post.type}</small>
                </div>
        </div>
        <p style="color: var(--text-medium); line-height: 1.6; margin-bottom: 15px;">${post.content}</p>
        ${badgeHTML}
        <div class="post-actions" style="display: flex; gap: 20px; padding-top: 15px; border-top: 1px solid rgba(0,0,0,0.05); margin-bottom: 15px;">
            <button onclick="toggleLike(${post.id})" style="background: none; border: none; color: ${post.likedByMe ? 'var(--accent-color)' : 'var(--text-light)'}; cursor: pointer; display: flex; align-items: center; gap: 5px;">
                <i class="fa-solid fa-heart"></i> <span>${post.likes}</span>
            </button>
            <span style="color: var(--text-light); display: flex; align-items: center; gap: 5px;">
                <i class="fa-solid fa-comment"></i> ${post.comments?.length || 0}
            </span>
        </div>
        <div class="post-comments">
            ${commentsHTML}
            <div class="add-comment-form" style="margin-top: 15px; display: flex; gap: 10px;">
                <input type="text" id="comment-input-${post.id}" placeholder="Agregar un comentario..." style="flex: 1; padding: 10px; border: 1px solid rgba(0,0,0,0.1); border-radius: 20px; font-size: 0.9rem;">
                    <button onclick="addComment(${post.id})" style="padding: 10px 20px; background: var(--primary-color); color: white; border: none; border-radius: 20px; cursor: pointer; font-weight: 600;">
                        Comentar
                    </button>
            </div>
        </div>
    </div>
    `;
    }).join('');

    renderCommunityLeaderboard();
}

function renderCommunityLeaderboard() {
    const tbody = document.getElementById('community-leaderboard-body');
    if (!tbody) return;

    const t = translations[state.language];
    tbody.innerHTML = '';

    let data = state.gamification.ranking.global;

    const sorted = [...data].sort((a, b) => b.xp - a.xp).slice(0, 5);

    sorted.forEach((user, index) => {
        tbody.innerHTML += `
            <tr class="${user.isMe ? 'highlight-row' : ''}">
                <td style="padding: 12px; font-weight: 700; color: var(--text-medium);">${index + 1}</td>
                <td style="padding: 12px;">
                    <strong style="color: ${user.isMe ? 'var(--accent-color)' : 'var(--text-dark)'};" class="ranking-user-name">
                        ${user.name}
                    </strong>
                    ${user.isMe ? `<span style="font-size: 0.75rem; color: var(--accent-color); margin-left: 5px;">(${t.user || 'Tú'})</span>` : ''}
                </td>
                <td style="padding: 12px; font-weight: 700; color: var(--primary-color); text-align: right;">${user.xp.toLocaleString()} XP</td>
            </tr>
        `;
    });
}

window.addComment = (postId) => {
    const input = document.getElementById(`comment-input-${postId}`);
    if (!input || !input.value.trim()) return;

    const post = state.posts.find(p => p.id === postId);
    if (!post) return;

    const newComment = {
        id: Date.now(),
        user: state.user.name,
        content: input.value.trim(),
        timestamp: "Justo ahora",
        replies: []
    };

    if (!post.comments) post.comments = [];
    post.comments.push(newComment);

    state.user.xp += 5;

    saveState();
    input.value = '';
    renderFeed('all');
    renderGamificationStats();
};

window.replyToComment = (postId, commentId) => {
    const replyText = prompt('Escribe tu respuesta:');
    if (!replyText || !replyText.trim()) return;

    const post = state.posts.find(p => p.id === postId);
    if (!post) return;

    const comment = post.comments.find(c => c.id === commentId);
    if (!comment) return;

    if (!comment.replies) comment.replies = [];

    const newReply = {
        id: Date.now(),
        user: state.user.name,
        content: replyText.trim(),
        timestamp: "Justo ahora"
    };

    comment.replies.push(newReply);

    state.user.xp += 3;

    saveState();
    renderFeed('all');
    renderGamificationStats();
};

window.toggleLike = (id) => {
    const post = state.posts.find(p => p.id === id);
    if (post) {
        post.likedByMe = !post.likedByMe;
        post.likes += post.likedByMe ? 1 : -1;
        saveState();
        renderFeed('all');
    }
};

// 6. Módulo del Perfil
function initProfileModule() {
    renderProfileInfo();
    renderProfileFavorites();

    const modal = document.getElementById('edit-profile-modal');
    const editBtn = document.getElementById('edit-profile-btn');

    if (editBtn) {
        editBtn.addEventListener('click', () => {
            document.getElementById('edit-name').value = state.user.name;
            document.getElementById('edit-bio').value = state.user.bio;
            modal.classList.remove('hidden');
        });
    }

    document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);

    document.querySelector('#edit-profile-modal .close-modal').addEventListener('click', () => modal.classList.add('hidden'));

    document.getElementById('edit-profile-form').addEventListener('submit', (e) => {
        e.preventDefault();
        state.user.name = document.getElementById('edit-name').value;
        state.user.bio = document.getElementById('edit-bio').value;
        const avatar = document.getElementById('edit-avatar').value;
        if (avatar) state.user.avatar = avatar;

        const me = state.leaderboard.find(u => u.isMe);
        if (me) {
            me.name = state.user.name;
            me.avatar = state.user.avatar;
        }

        saveState();
        renderProfileInfo();
        renderGamificationStats();
        modal.classList.add('hidden');
    });

    document.getElementById('logout-btn').addEventListener('click', () => {
        localStorage.removeItem('huacaviva_state');
        window.location.href = 'index.html';
    });
}

// Función unificada para actualizar todo el perfil
function renderProfileModule() {
    renderProfileInfo();
    renderProfileFavorites();
}

function renderProfileInfo() {
    document.getElementById('profile-name-display').innerText = state.user.name;
    document.getElementById('profile-bio-display').innerText = state.user.bio;
    document.getElementById('profile-pic-display').src = state.user.avatar;

    // Preferencias
    document.getElementById('pref-notifications').checked = state.user.preferences.notifications;
    document.getElementById('pref-public').checked = state.user.preferences.publicProfile;

    // Cambio de Idioma
    const langBtn = document.getElementById('language-toggle');
    if (langBtn) langBtn.innerText = state.language === 'es' ? 'ES' : 'EN';

    const langSelector = document.getElementById('language-selector');
    if (langSelector) langSelector.value = state.language;
}

window.toggleLanguage = () => {
    state.language = state.language === 'es' ? 'en' : 'es';
    saveState();
    applyTranslations();
    renderProfileInfo();
};

window.changeLanguage = () => {
    const selector = document.getElementById('language-selector');
    if (selector) {
        state.language = selector.value;
        saveState();
        applyTranslations();
        renderProfileInfo();
    }
};

function applyTranslations() {
    const t = translations[state.language];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            const icon = el.querySelector('i');
            if (icon) {
                const iconHTML = icon.outerHTML;
                el.innerHTML = `${iconHTML} ${t[key]}`;
            } else {
                el.textContent = t[key];
            }
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) {
            el.placeholder = t[key];
        }
    });

    document.querySelectorAll('.nav-link[data-tab]').forEach(link => {
        const tab = link.dataset.tab;
        const icons = {
            explore: 'fa-compass',
            routes: 'fa-route',
            missions: 'fa-flag-checkered',
            achievements: 'fa-trophy',
            community: 'fa-users',
            profile: 'fa-user'
        };
        if (t[tab] && icons[tab]) {
            link.innerHTML = `<i class="fa-solid ${icons[tab]}"></i> ${t[tab]}`;
        }
    });

    renderGamificationStats();
    renderFeed('all');
    renderCommunityLeaderboard();
}

function renderProfileFavorites() {
    const list = document.getElementById('favorite-huacas-list');
    list.innerHTML = '';
    const favHuacas = state.huacas.filter(h => state.user.favorites.includes(h.id));

    if (favHuacas.length === 0) {
        list.innerHTML = '<p style="color:#888;">No tienes favoritos aún.</p>';
        return;
    }

    favHuacas.forEach(huaca => {
        list.innerHTML += `
        <div class="huaca-card">
            <img src="${huaca.image}" alt="${huaca.name}">
                <div class="huaca-card-content">
                    <h3>${huaca.name}</h3>
                    <p class="district">${huaca.district}</p>
                    <button class="button-secondary" style="font-size:0.8rem; margin-top:5px;" onclick="toggleFavorite(${huaca.id})">Quitar</button>
                </div>
            </div>
    `;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadState();

    const tabs = document.querySelectorAll('.nav-link[data-tab]');
    const tabContents = document.querySelectorAll('.tab-content');
    let gamificationInitialized = false; // Flag para inicializar gamificación solo una vez

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const target = tab.dataset.tab;
            console.log('🔵 TAB CLICKED:', target); // DEBUG

            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === target) content.classList.add('active');
            });

            if (target === 'explore' && map) {
                setTimeout(() => map.invalidateSize(), 100);
            }

            // Inicializar gamificación la primera vez que se hace clic
            if (target === 'gamification') {
                console.log('🎮 GAMIFICATION TAB DETECTED');
                if (!gamificationInitialized) {
                    console.log('🎮 Inicializando Gamificación por primera vez...');
                    setTimeout(() => {
                        console.log('🎮 Executing initGamificationModule NOW');
                        initGamificationModule();
                    }, 100);
                    gamificationInitialized = true;
                } else {
                    console.log('⚠️ Gamificación ya fue inicializada');
                }
            }

            if (document.body.classList.contains("show-mobile-menu")) {
                document.querySelector("#menu-open-button").click();
            }
        });
    });

    const menuOpenButton = document.querySelector("#menu-open-button");
    const menuCloseButton = document.querySelector("#menu-close-button");
    if (menuOpenButton) menuOpenButton.addEventListener("click", () => document.body.classList.toggle("show-mobile-menu"));
    if (menuCloseButton) menuCloseButton.addEventListener("click", () => menuOpenButton.click());

    initExploreModule();
    initRoutesModule();
    initMissionsModule();
    initCommunityModule();
    initProfileModule();
});

// Utilidades
window.toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    state.user.preferences.darkMode = document.body.classList.contains('dark-mode');

    const btn = document.getElementById('dark-mode-toggle');
    const toggleBtn = document.getElementById('dark-mode-toggle-btn');

    if (state.user.preferences.darkMode) {
        if (btn) btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        if (toggleBtn) {
            toggleBtn.innerText = 'Desactivar';
            toggleBtn.style.background = 'var(--primary-color)';
            toggleBtn.style.color = 'white';
        }
    } else {
        if (btn) btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        if (toggleBtn) {
            toggleBtn.innerText = 'Activar';
            toggleBtn.style.background = 'transparent';
            toggleBtn.style.color = 'var(--primary-color)';
        }
    }

    saveState();
};

window.shareHuaca = (id) => {
    // Simular copiado al portapapeles
    showToast('Enlace copiado al portapapeles');
};

window.reportPost = (id) => {
    showToast('Publicación reportada. Gracias por contribuir a una comunidad segura.');
};

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerText = message;

    Object.assign(toast.style, {
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'var(--primary-color)',
        color: 'white',
        padding: '12px 24px',
        borderRadius: '50px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        zIndex: '3000',
        opacity: '0',
        transition: 'opacity 0.3s, transform 0.3s'
    });

    document.body.appendChild(toast);

    requestAnimationFrame(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(-50%) translateY(-10px)';
    });

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-50%) translateY(0)';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}
