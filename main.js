// Base de datos de proyectos completa del portfolio
const projectsData = {
  // ÁMBITO PROFESIONAL
  sensingtex: {
    title: "Sensing Tex — Media, Web & Producto",
    subtitle: "Evolución de plataforma digital, soporte técnico y diseño de producto para smart textiles.",
    tags: "#SEP 2025 – ACTUALIDAD · #SMART TEXTILES · #UI/UX · #I+D",
    disciplines: "Diseño Web UI/UX, Dirección de Arte para Redes, Diseño de Producto y Documentación Técnica.",
    tech: "Figma, Adobe Creative Suite (Photoshop, Illustrator, InDesign), CMS / Web y Odoo.",
    description: `
      <p><strong>El Contexto:</strong> Sensing Tex es una compañía innovadora referente en el desarrollo de tejidos inteligentes y sensórica integrada. Mi rol en el equipo abarca una visión 360°, unificando la estética de marca con la viabilidad técnica y comercial.</p>
      <p><strong>Rediseño Web & Social Media:</strong> Renovación completa del <em>look & feel</em> de la plataforma digital para transmitir tecnología de vanguardia, minimalismo y claridad. Diseño de activos visuales y contenido dinámico para canales sociales y campañas de comunicación corporativa.</p>
      <p><strong>Diseño & Gestión de Producto:</strong> Maquetación y desarrollo de manuales técnicos, guías de usuario y soporte visual para soluciones de hardware y sensórica textil, mejorando la experiencia del cliente final en la configuración y uso del producto.</p>
    `,
    images: [
      "assets/sensingtex-1.jpg",
      "assets/sensingtex-2.jpg",
      "assets/sensingtex-3.jpg"
    ]
  },
  radiosnovikov: {
    title: "Radios Novikov — Escape Room Interactivo",
    subtitle: "Diseño de la experiencia narrativa espacial, automatización ambiental y software master.",
    tags: "#ENE 2025 – MAY 2025 · #ESCAPE ROOM · #MAX MSP · #INTERACCIÓN",
    disciplines: "Diseño de Experiencias Inmersivas, Automatización Espacial, Dirección Sonora y Lumínica.",
    tech: "Max MSP, Protocolos de iluminación DMX/LED, control acústico multicanal.",
    description: `
      <p><strong>El Reto:</strong> Durante las prácticas en Radios Novikov (La Sagrera), participé en la fase de desarrollo in situ del local donde se construyó la experiencia interactiva de juego.</p>
      <p><strong>Automatización & Atmósfera:</strong> Mi labor se centró en automatizar acciones físicas a partir del control de efectos dinámicos de iluminación y sonido con Max MSP, modulando la tensión en base a la narrativa.</p>
      <p><strong>Software del Game Master:</strong> Diseñé la interfaz del software que utiliza el máster para supervisar la partida en tiempo real y disparar los eventos sonoros y mecánicos durante la sesión.</p>
    `,
    images: [
      "assets/novikov-1.jpg",
      "assets/novikov-2.jpg"
    ]
  },
  txoko: {
    title: "Cartas Restaurante El Txoko",
    subtitle: "Sistema editorial minimalista físico y prototipo digital de carta en Figma.",
    tags: "#ABR 2021 – OCT 2021 · #DISEÑO GRÁFICO · #EDITORIAL · #UX/UI",
    disciplines: "Diseño Gráfico, Identidad de Marca y Prototipado UX/UI en Figma.",
    tech: "Adobe InDesign, Illustrator, Figma.",
    description: `
      <p><strong>El Proyecto:</strong> Rediseño completo de la carta física del restaurante El Txoko (comidas, bebidas, postres y vinos) bajo una línea visual limpia, tipográfica y elegante, junto a su versión digital interactiva para smartphones.</p>
    `,
    images: [
      "assets/txoko-1.jpg",
      "assets/txoko-2.jpg"
    ]
  },

  // ÁMBITO ACADÉMICO & EXPERIMENTAL
  introspection: {
    title: "IntroSpection",
    subtitle: "Espejo interactivo de autorreflexión emocional en colaboración conceptual con CUPRA.",
    tags: "#SALUD EMOCIONAL · #GENERACIÓN Z · #HOGAR · #TFG",
    disciplines: "Interacción Tangible, Diseño de Producto, Espacios y Dirección de Arte.",
    tech: "Raspberry Pi, Pantalla Encastrada, Metacrilato Espejo corte láser, Barniz Candy degradado, Iluminación LED y Sensores.",
    description: `
      <p><strong>El Reto:</strong> En la era digital, la Generación Z se enfrenta a altos niveles de ansiedad debido a la validación externa en redes. El objetivo fue diseñar un objeto para el hogar alineado con la filosofía de CUPRA que fomentara la introspección honesta.</p>
      <p><strong>La Solución:</strong> A diferencia de un espejo convencional, IntroSpection actúa como un canal sensible entre el yo visible y el yo invisible. Permite escanear, registrar y hacer seguimiento de las emociones diarias mediante una interfaz integrada en el reflejo, con opción de compartirlas.</p>
      <p><strong>Desarrollo Técnico:</strong> Corte por láser en metacrilato espejo de 38x50 cm con marco de encastre, caja técnica trasera impresa en 3D con ventilación degradada e iluminación periférica LED en L.</p>
    `,
    images: [
      "assets/introspection-1.jpg",
      "assets/introspection-2.jpg"
    ]
  },
  encoded: {
    title: "ENCODED",
    subtitle: "Sistema lúdico de comunicación cifrada para pacientes en el Hospital Sant Joan de Déu.",
    tags: "#HOSPITAL · #REDES · #SUPERHÉROE · #GAMIFICACIÓN",
    disciplines: "Diseño de Producto, Gamificación, Diseño Gráfico e Interacción Social.",
    tech: "Matriz LED 8x8 (64 píxeles), Mando Ergonómico interactivo, Pantalla OLED y Controlador rotativo LED.",
    description: `
      <p><strong>El Reto:</strong> Combatir el aburrimiento y el aislamiento de niños hospitalizados en estancias de media duración.</p>
      <p><strong>La Solución:</strong> Inspirado en el concepto del superhéroe y el poder de conectar, transforma la comunicación en un juego criptográfico. El paciente graba un audio y crea un patrón visual secreto ("candado") que el receptor debe reproducir con su mando para escuchar el mensaje.</p>
    `,
    images: [
      "assets/encoded-1.jpg",
      "assets/encoded-2.jpg"
    ]
  },
  smarttouch: {
    title: "Smart Touch",
    subtitle: "Camiseta wearable interactiva para la concienciación ecológica y el consumo responsable.",
    tags: "#ESPECULATIVO · #CAMBIO CLIMÁTICO · #EDUCACIÓN · #WEARABLE",
    disciplines: "Tecnología Vestible (Wearables), Diseño de Producto, Diseño Especulativo y Visualización.",
    tech: "Sensor RGB, Sensor de Presión, Pantalla OLED, Tira de 5 LEDs de Vidas y Motor Háptico Vibrador.",
    description: `
      <p><strong>El Reto:</strong> Ante la crisis climática y el consumo intensivo, hacer tangible el impacto ecológico de los materiales cotidianos.</p>
      <p><strong>La Solución:</strong> Prenda inteligente con sensores de presión y color que clasifica el impacto de objetos al tacto y responde con vibración, datos y un sistema lúdico de vidas LED en el pecho.</p>
    `,
    images: [
      "assets/smart-touch-1.jpg",
      "assets/smart-touch-2.jpg"
    ]
  },
  deardata: {
    title: "Dear Data",
    subtitle: "Diario interactivo y visualización reflexiva sobre el uso de dispositivos y la huella digital.",
    tags: "#RECOLECCIÓN · #ANÁLISIS · #PHYGITAL · #DATA VIZ",
    disciplines: "Visualización de Datos, Diseño Web Interactivo y Gráfico Dinámico.",
    tech: "HTML, CSS, JavaScript y librería p5.js.",
    description: `
      <p><strong>El Reto:</strong> Transformar las estadísticas numéricas y frías de tiempo de pantalla en una experiencia visual, comprensible y crítica que invite a reflexionar sobre la hiperconectividad.</p>
      <p><strong>La Solución:</strong> Plataforma web interactiva en columnas con diagramas dinámicos de puntos que comparan el uso de redes frente a estadísticas estatales.</p>
    `,
    images: ["assets/deardata-1.jpg"]
  },
  phonecare: {
    title: "Phone Care",
    subtitle: "Artefacto tangible y especulativo para incentivar la desconexión del teléfono móvil.",
    tags: "#HIPERCONECTIVIDAD · #DESCONEXIÓN · #SALUD MENTAL",
    disciplines: "Diseño de Interacción Físico, Diseño de Producto y Pensamiento Crítico.",
    tech: "Caja sensora de presencia, lámpara corazón 3D, sensor de proximidad, altavoz y LEDs.",
    description: `
      <p><strong>Concepto:</strong> Base sensora que enciende un corazón luminoso mientras el móvil permanece sobre ella. Al retirarlo, corre un temporizador de 30 minutos; al agotarse, el corazón se apaga y emite una alerta acústica continua hasta que se vuelve a colocar el teléfono.</p>
    `,
    images: ["assets/phonecare-1.jpg"]
  },
  tiovivo: {
    title: "Tiovivo de Parque Interactivo",
    subtitle: "Maqueta espacial lúdica a escala 1:25 con velocidad reactiva y feedback lumínico.",
    tags: "#ESPACIO PÚBLICO · #LÚDICO · #SENSORICA",
    disciplines: "Diseño de Espacios Efímeros / Mobiliario Urbano, Interacción Tangible.",
    tech: "Arduino, Motores bidireccionales, Sensores de presión, Matriz circular LED.",
    description: `
      <p><strong>Concepto:</strong> Estructura lúdica interactiva donde la velocidad de giro se modula con la fuerza de agarre sobre los sensores de presión, sincronizándose con luces LED en degradado.</p>
    `,
    images: ["assets/tiovivo-1.jpg"]
  },
  cajamusica: {
    title: "Caja de Música Interactiva",
    subtitle: "Exploración cinética y sonora controlada por servomotores y encoder.",
    tags: "#ARDUINO · #SERVOMOTORES · #SONIDO TANGIBLE",
    disciplines: "Diseño de Producto, Hardware Interactivo y Cinética.",
    tech: "Arduino, 4 Servomotores, Encoder rotatorio.",
    description: `
      <p><strong>Concepto:</strong> Dispositivo físico interactivo que traduce composiciones musicales en secuencias mecánicas tangibles mediante un encoder rotatorio.</p>
    `,
    images: ["assets/caja-musica-1.jpg"]
  },
  juegoprecision: {
    title: "Juego de Precisión",
    subtitle: "Minijuego interactivo con interfaz táctil DIY elaborada con sensores caseros.",
    tags: "#PROCESSING · #ARDUINO · #INTERFAZ DIY",
    disciplines: "Diseño de Software / Minijuegos, Prototipado DIY y Sensores Tangibles.",
    tech: "Processing, Arduino, Sensores caseros de papel de aluminio y goma EVA.",
    description: `
      <p><strong>Concepto:</strong> Juego que combina hardware artesanal y software en Processing, modulando la velocidad mediante pulsadores analógicos caseros.</p>
    `,
    images: ["assets/juego-precision-1.jpg"]
  }
};

// SELECTOR DE ÁMBITO (PROFESIONAL VS ACADÉMICO)
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const counterLabel = document.getElementById('project-counter');
const sectionHeading = document.getElementById('section-heading');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const scope = button.getAttribute('data-scope');
    let visibleCount = 0;

    if (scope === 'profesional') {
      sectionHeading.textContent = "Proyectos Profesionales";
    } else {
      sectionHeading.textContent = "Proyectos Académicos & Experimentales";
    }

    projectCards.forEach(card => {
      const cardScope = card.getAttribute('data-scope');
      
      if (cardScope === scope) {
        card.classList.remove('hide');
        visibleCount++;
      } else {
        card.classList.add('hide');
      }
    });

    counterLabel.textContent = `${visibleCount} ${visibleCount === 1 ? 'Proyecto' : 'Proyectos'}`;
  });
});

// MODAL Y CARRUSEL
const modal = document.getElementById('project-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const backdrop = document.querySelector('.modal-backdrop');

const carouselTrack = document.getElementById('carousel-track');
const indicatorsContainer = document.getElementById('carousel-indicators');
const prevBtn = document.getElementById('carousel-prev');
const nextBtn = document.getElementById('carousel-next');

let currentSlideIndex = 0;
let currentProjectImages = [];

projectCards.forEach(card => {
  card.addEventListener('click', () => {
    const projectId = card.getAttribute('data-project');
    const data = projectsData[projectId];

    if (!data) return;

    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-subtitle').textContent = data.subtitle;
    document.getElementById('modal-tags').textContent = data.tags;
    document.getElementById('modal-description').innerHTML = data.description;
    document.getElementById('modal-disciplines').textContent = data.disciplines;
    document.getElementById('modal-tech').textContent = data.tech;

    currentProjectImages = data.images;
    currentSlideIndex = 0;
    setupCarousel();

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

modalCloseBtn.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);

function setupCarousel() {
  carouselTrack.innerHTML = '';
  indicatorsContainer.innerHTML = '';

  if (currentProjectImages.length <= 1) {
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
  } else {
    prevBtn.style.display = 'block';
    nextBtn.style.display = 'block';
  }

  currentProjectImages.forEach((src, idx) => {
    const slide = document.createElement('div');
    slide.classList.add('carousel-slide');
    const img = document.createElement('img');
    img.src = src;
    img.alt = "Imagen de proyecto";
    img.onerror = () => { img.src = 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80'; };
    slide.appendChild(img);
    carouselTrack.appendChild(slide);

    if (currentProjectImages.length > 1) {
      const dot = document.createElement('div');
      dot.classList.add('indicator-dot');
      if (idx === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(idx));
      indicatorsContainer.appendChild(dot);
    }
  });

  updateCarousel();
}

function updateCarousel() {
  carouselTrack.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
  
  const dots = document.querySelectorAll('.indicator-dot');
  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentSlideIndex);
  });
}

function goToSlide(index) {
  currentSlideIndex = index;
  updateCarousel();
}

prevBtn.addEventListener('click', () => {
  currentSlideIndex = (currentSlideIndex === 0) ? currentProjectImages.length - 1 : currentSlideIndex - 1;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentSlideIndex = (currentSlideIndex === currentProjectImages.length - 1) ? 0 : currentSlideIndex + 1;
  updateCarousel();
});

// ================= EFECTO TYPEWRITER (SOLO TURQUESA) =================
const words = [
  "mirar el mundo a través del color",
  "sentir las texturas del material",
  "respirar la esencia del espacio",
  "escuchar el ritmo de la tecnología",
  "saborear los matices de una idea"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const targetElement = document.getElementById("typewriter-text");

function typeEffect() {
  if (!targetElement) return;

  const currentWord = words[wordIndex];

  if (isDeleting) {
    targetElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    targetElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  // Velocidades: más lento al escribir, más rápido al borrar
  let typeSpeed = isDeleting ? 45 : 90;

  // Si terminó de escribir la palabra completa
  if (!isDeleting && charIndex === currentWord.length) {
    typeSpeed = 2200; // Pausa para que se lea cómodamente
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length; // Pasa a la siguiente palabra
    typeSpeed = 400; // Breve pausa antes de empezar la siguiente
  }

  setTimeout(typeEffect, typeSpeed);
}

// Inicia el efecto typewriter
document.addEventListener("DOMContentLoaded", typeEffect);

// ANIMACIÓN FADE UP AL HACER SCROLL (INTERSECTION OBSERVER)
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".animate-fade-up");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target); // Solo se anima una vez
      }
    });
  }, {
    threshold: 0.15, // Se activa al mostrarse el 15% del elemento
    rootMargin: "0px 0px -50px 0px"
  });

  animatedElements.forEach(el => observer.observe(el));
});