// Base de datos de proyectos completa del portfolio
const projectsData = {
  // ================= ÁMBITO PROFESIONAL =================
  sensingtex: {
    title: "Sensing Tex — Media, Web & Producto",
    subtitle: "Evolución de plataforma digital, soporte técnico y diseño de producto para smart textiles.",
    tags: "#SEP 2025 – ACTUALIDAD · #SMART TEXTILES · #UI/UX · #I+D",
    disciplines: "Diseño Web UI/UX, Dirección de Arte para Redes, Diseño de Producto y Documentación Técnica.",
    tech: "Figma, Adobe Creative Suite (Photoshop, Illustrator, InDesign), CMS / Web y Odoo.",
    images: [
      "assets/sensingtex-1.jpg",
      "assets/sensingtex-2.jpg"
    ],
    sidebarGallery: [
      { src: "assets/sensingtex-extra-1.jpg", title: "Detalle de packaging y manual" },
      { src: "assets/sensingtex-2.jpg", title: "Interfaz y diseño digital" },
      { src: "assets/sensingtex-3.jpg", title: "Guías de usuario y soporte visual" }
    ],
    video: {
      src: "assets/sensingtex-demo.mp4",
      poster: "assets/sensingtex-1.jpg",
      title: "Demostración de Interacción & Sensores"
    },
    description: `
      <div class="story-section">
        <h4>El Reto & Contexto</h4>
        <p>Sensing Tex es una compañía referente en el desarrollo de tejidos inteligentes y sensórica integrada. Mi rol en el equipo abarca una visión 360°, unificando la estética de marca con la viabilidad técnica y comercial.</p>
      </div>
      <div class="story-section">
        <h4>Desarrollo & Metodología</h4>
        <p>Renovación del <em>look & feel</em> digital, creación de manuales técnicos de producto y soporte visual continuo para soluciones textiles avanzadas.</p>
      </div>
    `
  },

  radiosnovikov: {
    title: "Radios Novikov — Escape Room Interactivo",
    subtitle: "Diseño de la experiencia narrativa espacial, automatización ambiental y software master.",
    tags: "#ENE 2025 – MAY 2025 · #ESCAPE ROOM · #MAX MSP · #INTERACCIÓN",
    disciplines: "Diseño de Experiencias Inmersivas, Automatización Espacial, Dirección Sonora y Lumínica.",
    tech: "Max MSP, Protocolos de iluminación DMX/LED, control acústico multicanal.",
    images: [
      "assets/novikov-1.jpg",
      "assets/novikov-2.jpg"
    ],
    sidebarGallery: [
      { src: "assets/novikov-1.jpg", title: "Escenografía y mecanismos" },
      { src: "assets/novikov-2.jpg", title: "Panel interactivo del Master" }
    ],
    video: {
      src: "assets/novikov-demo.mp4",
      poster: "assets/novikov-1.jpg",
      title: "Registro de la Experiencia en Sala"
    },
    description: `
      <div class="story-section">
        <h4>El Reto & Contexto</h4>
        <p>Desarrollo in situ de una experiencia inmersiva continua, integrando elementos mecánicos con la narrativa espacial.</p>
      </div>
      <div class="story-section">
        <h4>Automatización & Control</h4>
        <p>Diseño de la interfaz del software para el Game Master y sincronización sonora y lumínica reactiva mediante Max MSP.</p>
      </div>
    `
  },

  txoko: {
    title: "Cartas Restaurante El Txoko",
    subtitle: "Sistema editorial minimalista físico y prototipo digital interactivo.",
    tags: "#ABR 2021 – OCT 2021 · #DISEÑO GRÁFICO · #EDITORIAL · #UX/UI",
    disciplines: "Diseño Gráfico, Identidad de Marca y Prototipado UX/UI en Figma.",
    tech: "Adobe InDesign, Illustrator, Figma.",
    images: [
      "assets/txoko-1.jpg",
      "assets/txoko-2.jpg"
    ],
    sidebarGallery: [
      { src: "assets/txoko-1.jpg", title: "Diseño de cartas físicas" },
      { src: "assets/txoko-2.jpg", title: "Prototipo interactivo móvil" }
    ],
    video: {
      src: "assets/videos/txoko-demo.mp4",
      poster: "assets/txoko-1.jpg",
      title: "Prototipo Interactivo de Carta Digital"
    },
    description: `
      <div class="story-section">
        <h4>El Proyecto</h4>
        <p>Rediseño integral de cartas físicas bajo una línea visual limpia junto al diseño de una plataforma web interactiva para comensales y cocina.</p>
      </div>
    `
  },

  // ================= ÁMBITO ACADÉMICO & EXPERIMENTAL =================
  introspection: {
    title: "IntroSpection",
    subtitle: "Espejo interactivo para la autorreflexión emocional en el hogar · Brand Products x CUPRA",
    tags: "#TFG · #ELISAVA · #CUPRA · #DiseñoInteractivo · #Python · #RaspberryPi",
    disciplines: "Diseño de Interacción, UX/UI Tangible, Computer Vision, Diseño Paramétrico de Producto, Machine Learning.",
    tech: "Raspberry Pi 3B+, Python (PyQt5, OpenCV, PyTorch, Hugging Face), Pantalla IPS DSI 5\", Cámara USB, Iluminación LED reactiva por MOSFET IRFZ44N, Metacrilato tipo espejo con degradado.",
    images: [
      "assets/projects/introspection/portada.png",
    ],
    sidebarGallery: [
      { src: "assets/projects/introspection/imagen-1.png", title: "" },
      { src: "assets/projects/introspection/imagen-2.png", title: "" },
      { src: "assets/projects/introspection/imagen-3.png", title: "" },
      { src: "assets/projects/introspection/imagen-4.png", title: "" }
    ],
    video: null,
    description: `
      <div class="story-section">
        <h4>El Reto & Contexto</h4>
        <p>En la era digital, la Generación Z enfrenta un incremento notable de ansiedad y desconexión interna, derivado de la comparación en redes sociales. El espejo doméstico ha funcionado históricamente como un juicio centrado en la apariencia externa.</p>
        <p>Bajo la colaboración con <strong>CUPRA Lifestyle</strong>, el proyecto redefine este objeto: transformar el acto cotidiano de mirarse al espejo en un ritual íntimo de pausa, autoconocimiento y salud mental.</p>
      </div>
      <div class="story-section">
        <h4>La Experiencia Interactiva</h4>
        <ul>
          <li><strong>Reconocimiento facial:</strong> Clasificación de 5 grados emocionales mediante visión computacional en tiempo real.</li>
          <li><strong>Patrón Voronoi dinámico:</strong> Malla viva generativa en pantalla inspirada en el lenguaje de diseño CUPRA.</li>
          <li><strong>Atmósfera lumínica:</strong> Retroalimentación sutil de iluminación LED según el estado anímico.</li>
          <li><strong>Red íntima:</strong> Registro semanal y seguimiento emocional compartido sin presión comunicativa.</li>
        </ul>
      </div>
      <div class="story-section">
        <h4>Morfología & Acabados</h4>
        <p>Cuerpo trapezoidal cortado a 10° que evoca el triángulo de CUPRA. Metacrilato con degradado en negro mate hacia un centro cromado reflectante que concentra la atención en el sujeto y desvanece la distracción ambiental.</p>
      </div>
    `
  },

  encoded: {
    title: "ENCODED",
    subtitle: "Sistema lúdico de comunicación cifrada para pacientes en el Hospital Sant Joan de Déu.",
    tags: "#HOSPITAL · #REDES · #SUPERHÉROE · #GAMIFICACIÓN",
    disciplines: "Diseño de Producto, Gamificación, Diseño Gráfico e Interacción Social.",
    tech: "Matriz LED 8x8 (64 píxeles), Mando Ergonómico interactivo, Pantalla OLED y Controlador rotativo LED.",
    images: [
      "assets/projects/encoded/portada.png",
    ],
    sidebarGallery: [
      { src: "assets/projects/encoded/imagen-1.png", title: "" },
      { src: "assets/projects/encoded/imagen-2.png", title: "" },
      { src: "assets/projects/encoded/imagen-3.png", title: "" },
      { src: "assets/projects/encoded/imagen-4.png", title: "" },
      { src: "assets/projects/encoded/imagen-5.png", title: "" }
    ],
    video: {
      src: "assets/projects/encoded/video.mp4",
      poster: "assets/projects/encoded/portada.png",
      title: "Interacción Criptográfica & Hardware"
    },
    description: `
      <div class="story-section">
        <h4>El Reto</h4>
        <p>Combatir el aburrimiento y el aislamiento de niños hospitalizados en estancias de media duración.</p>
      </div>
      <div class="story-section">
        <h4>La Solución</h4>
        <p>Transforma la comunicación en un juego criptográfico: se envía un audio encriptado y un patrón visual interactivo que el receptor debe resolver con su mando.</p>
      </div>
    `
  },

  smarttouch: {
    title: "Smart Touch",
    subtitle: "Camiseta wearable interactiva para la concienciación ecológica y el consumo responsable.",
    tags: "#ESPECULATIVO · #CAMBIO CLIMÁTICO · #EDUCACIÓN · #WEARABLE",
    disciplines: "Tecnología Vestible (Wearables), Diseño de Producto, Diseño Especulativo y Visualización.",
    tech: "Sensor RGB, Sensor de Presión, Pantalla OLED, Tira de 5 LEDs de Vidas y Motor Háptico Vibrador.",
    images: [
      "assets/projects/smarttouch/portada.png",
    ],
    sidebarGallery: [
      { src: "assets/projects/smarttouch/imagen-1.png", title: "" },
      { src: "assets/projects/smarttouch/imagen-2.png", title: "" },
      { src: "assets/projects/smarttouch/imagen-3.png", title: "" },
      { src: "assets/projects/smarttouch/imagen-4.png", title: "" },
      { src: "assets/projects/smarttouch/imagen-5.png", title: "" }
    ],
    video: {
      src: "assets/projects/smarttouch/video.mp4",
      poster: "assets/projects/smarttouch/portada.png",
      title: ""
    },
    description: `
      <div class="story-section">
        <h4>Concepto</h4>
        <p>Prenda inteligente con sensores de presión y color que evalúa el impacto de objetos al tacto y responde con vibración, datos y un sistema interactivo de vidas LED.</p>
      </div>
    `
  },

  deardata: {
    title: "Dear Data",
    subtitle: "Diario interactivo y visualización reflexiva sobre el uso de dispositivos y la huella digital.",
    tags: "#RECOLECCIÓN · #ANÁLISIS · #PHYGITAL · #DATA VIZ",
    disciplines: "Visualización de Datos, Diseño Web Interactivo y Gráfico Dinámico.",
    tech: "HTML, CSS, JavaScript y librería p5.js.",
    images: [
      "assets/projects/deardata/portada.png"
    ],
    sidebarGallery: [
      { src: "assets/projects/deardata/imagen-1.png", title: "" },
      { src: "assets/projects/deardata/imagen-2.png", title: "" },
      { src: "assets/projects/deardata/imagen-3.png", title: "" },
      { src: "assets/projects/deardata/imagen-4.png", title: "" }
    ],
    video: {
      src: "assets/projects/deardata/video.mp4",
      poster: "assets/projects/deardata/portada.png",
      title: "Video Demostrativo del Prototipo"
    },
    description: `
      <div class="story-section">
        <h4>Concepto</h4>
        <p>Plataforma web interactiva orientada a traducir el tiempo de pantalla en mapas gráficos visuales que invitan a reflexionar sobre la hiperconectividad cotidiana.</p>
      </div>
    `
  },

  phonecare: {
    title: "Phone Care",
    subtitle: "Artefacto tangible y especulativo para incentivar la desconexión del teléfono móvil.",
    tags: "#HIPERCONECTIVIDAD · #DESCONEXIÓN · #SALUD MENTAL",
    disciplines: "Diseño de Interacción Físico, Diseño de Producto y Pensamiento Crítico.",
    tech: "Caja sensora de presencia, lámpara corazón 3D, sensor de proximidad, altavoz y LEDs.",
    images: ["assets/phonecare-1.jpg"],
    sidebarGallery: [
      { src: "assets/phonecare-1.jpg", title: "Prototipo físico y corazón luminoso" }
    ],
    video: {
      src: "assets/videos/phonecare-demo.mp4",
      poster: "assets/phonecare-1.jpg",
      title: "Comportamiento Lumínico y Temporizador"
    },
    description: `
      <div class="story-section">
        <h4>Concepto</h4>
        <p>Base sensora que mantiene encendida una lámpara mientras el teléfono permanece sobre ella. Al retirarlo, se activa una cuenta regresiva para incentivar el desapego digital consciente.</p>
      </div>
    `
  },

  tiovivo: {
    title: "Tiovivo de Parque Interactivo",
    subtitle: "Maqueta espacial lúdica a escala 1:25 con velocidad reactiva y feedback lumínico.",
    tags: "#ESPACIO PÚBLICO · #LÚDICO · #SENSORICA",
    disciplines: "Diseño de Espacios Efímeros / Mobiliario Urbano, Interacción Tangible.",
    tech: "Arduino, Motores bidireccionales, Sensores de presión, Matriz circular LED.",
    images: ["assets/tiovivo-1.jpg"],
    sidebarGallery: [
      { src: "assets/tiovivo-1.jpg", title: "Estructura interactiva a escala" }
    ],
    video: {
      src: "assets/videos/tiovivo-demo.mp4",
      poster: "assets/tiovivo-1.jpg",
      title: "Mapeo de Presión y Giro Reactivo"
    },
    description: `
      <div class="story-section">
        <h4>Concepto</h4>
        <p>Estructura donde la velocidad de rotación se modula con la presión ejercida sobre los asideros, sincronizada con efectos de iluminación degradada.</p>
      </div>
    `
  },

  cajamusica: {
    title: "Caja de Música Interactiva",
    subtitle: "Dispositivo cinético y sonoro controlado por servomotores y encoder rotatorio.",
    tags: "#ARDUINO · #SERVOMOTORES · #SONIDO TANGIBLE",
    disciplines: "Diseño de Producto, Hardware Interactivo y Cinética.",
    tech: "Arduino, 4 Servomotores, Encoder rotatorio.",
    images: ["assets/caja-musica-1.jpg"],
    sidebarGallery: [
      { src: "assets/caja-musica-1.jpg", title: "Mecanismo cinético y Arduino" }
    ],
    video: {
      src: "assets/videos/cajamusica-demo.mp4",
      poster: "assets/caja-musica-1.jpg",
      title: "Patrones Acústicos y Cinemática"
    },
    description: `
      <div class="story-section">
        <h4>Concepto</h4>
        <p>Dispositivo que traduce selecciones mediante un encoder en patrones rítmicos percutidos por 4 servomotores con cascabeles a distintas frecuencias.</p>
      </div>
    `
  },

  juegoprecision: {
    title: "Juego de Precisión",
    subtitle: "Minijuego interactivo con interfaz táctil DIY elaborada con sensores caseros.",
    tags: "#PROCESSING · #ARDUINO · #INTERFAZ DIY",
    disciplines: "Diseño de Software / Minijuegos, Prototipado DIY y Sensores Tangibles.",
    tech: "Processing, Arduino, Sensores caseros de papel de aluminio y goma EVA.",
    images: ["assets/juego-precision-1.jpg"],
    sidebarGallery: [
      { src: "assets/juego-precision-1.jpg", title: "Pulsadores caseros y pantalla de juego" }
    ],
    video: {
      src: "assets/videos/juegoprecision-demo.mp4",
      poster: "assets/juego-precision-1.jpg",
      title: "Prueba de Jugabilidad & Sensores DIY"
    },
    description: `
      <div class="story-section">
        <h4>Concepto</h4>
        <p>Minijuego que conecta hardware artesanal con Processing, donde el jugador modula la velocidad de bolas en pantalla mediante pulsadores analógicos caseros.</p>
      </div>
    `
  }
};

// ================= SELECTOR DE FILTRO DE PROYECTOS =================
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const sectionHeading = document.getElementById('section-heading');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const scope = button.getAttribute('data-scope');
    if (sectionHeading) {
      sectionHeading.textContent = (scope === 'profesional')
        ? "Proyectos Profesionales"
        : "Proyectos Académicos & Experimentales";
    }

    projectCards.forEach(card => {
      const cardScope = card.getAttribute('data-scope');
      card.classList.toggle('hide', cardScope !== scope);
    });
  });
});

// ================= MODAL, CARRUSEL & SIDEBAR =================
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

    // 1. Datos de cabecera
    const elTitle = document.getElementById('modal-title');
    const elSub = document.getElementById('modal-subtitle');
    const elTags = document.getElementById('modal-tags');
    const elDisc = document.getElementById('modal-disciplines');
    const elTech = document.getElementById('modal-tech');
    const elDesc = document.getElementById('modal-description');

    if (elTitle) elTitle.textContent = data.title;
    if (elSub) elSub.textContent = data.subtitle;
    if (elTags) elTags.textContent = data.tags;
    if (elDisc) elDisc.textContent = data.disciplines;
    if (elTech) elTech.textContent = data.tech;

    // 2. Columna izquierda: Descripción + Vídeo
    let contentHtml = `<div class="project-modal-story">${data.description}`;
    if (data.video && data.video.src) {
      contentHtml += `
        <div class="story-section video-section">
          <h4>${data.video.title || 'Video Demostrativo'}</h4>
          <div class="project-video-wrapper">
            <video controls poster="${data.video.poster || ''}" class="modal-project-video">
              <source src="${data.video.src}" type="video/mp4">
              Tu navegador no soporta el formato de vídeo.
            </video>
          </div>
        </div>
      `;
    }
    contentHtml += `</div>`;
    if (elDesc) elDesc.innerHTML = contentHtml;

    // 3. Carrusel superior
    currentProjectImages = data.images || [];
    currentSlideIndex = 0;
    setupCarousel(data);

    // 4. Columna derecha: Botón de apertura de galería
    const galleryBlock = document.getElementById('sidebar-gallery-block');
    const btnOpenGallery = document.getElementById('btn-open-gallery');
    const btnGalleryText = document.getElementById('btn-gallery-text');

    if (galleryBlock && btnOpenGallery) {
      if (data.sidebarGallery && data.sidebarGallery.length > 0) {
        galleryBlock.style.display = 'block';
        if (btnGalleryText) {
          btnGalleryText.textContent = `Ver galería (${data.sidebarGallery.length} fotos) ↗`;
        }

        btnOpenGallery.onclick = (e) => {
          e.stopPropagation();
          openLightbox(data.sidebarGallery, 0);
        };
      } else {
        galleryBlock.style.display = 'none';
      }
    }

    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  });
});

function closeModal() {
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';

    const videos = modal.querySelectorAll('video');
    videos.forEach(v => v.pause());
  }
}

if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
if (backdrop) backdrop.addEventListener('click', closeModal);

// ================= LÓGICA DEL CARRUSEL =================
function setupCarousel(projectData) {
  if (!carouselTrack || !indicatorsContainer) return;
  carouselTrack.innerHTML = '';
  indicatorsContainer.innerHTML = '';

  if (currentProjectImages.length <= 1) {
    if (prevBtn) prevBtn.style.display = 'none';
    if (nextBtn) nextBtn.style.display = 'none';
  } else {
    if (prevBtn) prevBtn.style.display = 'block';
    if (nextBtn) nextBtn.style.display = 'block';
  }

  currentProjectImages.forEach((src, idx) => {
    const slide = document.createElement('div');
    slide.classList.add('carousel-slide');
    const img = document.createElement('img');
    img.src = src;
    img.alt = "Imagen de cabecera";
    img.onerror = () => { img.src = 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80'; };
    img.style.cursor = 'zoom-in';

    // Al hacer clic en fotos del carrusel, también se abren en el Lightbox
    img.onclick = () => {
      const headerGallery = currentProjectImages.map(imgSrc => ({
        src: imgSrc,
        title: projectData.title || ''
      }));
      openLightbox(headerGallery, idx);
    };

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
  if (!carouselTrack) return;
  carouselTrack.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
  const dots = document.querySelectorAll('.indicator-dot');
  dots.forEach((dot, idx) => dot.classList.toggle('active', idx === currentSlideIndex));
}

function goToSlide(index) {
  currentSlideIndex = index;
  updateCarousel();
}

if (prevBtn) {
  prevBtn.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex === 0) ? currentProjectImages.length - 1 : currentSlideIndex - 1;
    updateCarousel();
  });
}

if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex === currentProjectImages.length - 1) ? 0 : currentSlideIndex + 1;
    updateCarousel();
  });
}

// ================= CONTROL DEL LIGHTBOX NAVEGABLE =================
const lightboxModal = document.getElementById('lightbox-modal');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxCounter = document.getElementById('lightbox-counter');
const lightboxCloseBtn = document.getElementById('lightbox-close');
const lightboxBackdrop = document.getElementById('lightbox-backdrop');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');

let currentGallery = [];
let currentGalleryIndex = 0;

function openLightbox(gallery, startIndex = 0) {
  if (!lightboxModal || !gallery || gallery.length === 0) return;
  currentGallery = gallery;
  currentGalleryIndex = startIndex;
  updateLightbox();
  lightboxModal.classList.add('active');
}

function updateLightbox() {
  const item = currentGallery[currentGalleryIndex];
  if (!item || !lightboxImg) return;

  lightboxImg.src = item.src;
  if (lightboxCaption) lightboxCaption.textContent = item.title || '';
  
  if (currentGallery.length > 1) {
    if (lightboxCounter) lightboxCounter.textContent = `${currentGalleryIndex + 1} / ${currentGallery.length}`;
    if (lightboxPrev) lightboxPrev.style.display = 'flex';
    if (lightboxNext) lightboxNext.style.display = 'flex';
  } else {
    if (lightboxCounter) lightboxCounter.textContent = '';
    if (lightboxPrev) lightboxPrev.style.display = 'none';
    if (lightboxNext) lightboxNext.style.display = 'none';
  }
}

function prevLightbox() {
  if (currentGallery.length <= 1) return;
  currentGalleryIndex = (currentGalleryIndex === 0) ? currentGallery.length - 1 : currentGalleryIndex - 1;
  updateLightbox();
}

function nextLightbox() {
  if (currentGallery.length <= 1) return;
  currentGalleryIndex = (currentGalleryIndex === currentGallery.length - 1) ? 0 : currentGalleryIndex + 1;
  updateLightbox();
}

function closeLightbox() {
  if (!lightboxModal) return;
  lightboxModal.classList.remove('active');
  if (lightboxImg) lightboxImg.src = '';
  currentGallery = [];
}

if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);
if (lightboxPrev) lightboxPrev.addEventListener('click', (e) => { e.stopPropagation(); prevLightbox(); });
if (lightboxNext) lightboxNext.addEventListener('click', (e) => { e.stopPropagation(); nextLightbox(); });

window.addEventListener('keydown', (e) => {
  if (!lightboxModal || !lightboxModal.classList.contains('active')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') prevLightbox();
  if (e.key === 'ArrowRight') nextLightbox();
});

// ================= TYPEWRITER EFFECT =================
const words = [
  "amante de los animales",
  "amante de la naturaleza",
  "amante del deporte",
  "amante de los colores"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const targetElement = document.getElementById("typewriter-text");
const targetElementLight = document.getElementById("typewriter-text-light");

function typeEffect() {
  if (!targetElement) return;

  const currentWord = words[wordIndex];
  const currentSub = isDeleting 
    ? currentWord.substring(0, charIndex - 1) 
    : currentWord.substring(0, charIndex + 1);

  targetElement.textContent = currentSub;
  if (targetElementLight) {
    targetElementLight.textContent = currentSub;
  }

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  let typeSpeed = isDeleting ? 45 : 90;

  if (!isDeleting && charIndex === currentWord.length) {
    typeSpeed = 2200;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typeSpeed = 400;
  }

  setTimeout(typeEffect, typeSpeed);
}

document.addEventListener("DOMContentLoaded", typeEffect);

// ================= ANIMACIÓN FADE UP (INTERSECTION OBSERVER) =================
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".animate-fade-up");
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  });

  animatedElements.forEach(el => observer.observe(el));
});

// ================= MÁSCARA HERO INTERACTIVA =================
const heroSection = document.getElementById('hero-section');
const heroReveal = document.getElementById('hero-reveal');

if (heroSection && heroReveal) {
  const radius = 240;
  heroReveal.style.setProperty('--reveal-radius', `${radius}px`);

  heroSection.addEventListener('mousemove', (e) => {
    const rect = heroSection.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    heroReveal.style.setProperty('--reveal-x', `${x}px`);
    heroReveal.style.setProperty('--reveal-y', `${y}px`);
    heroReveal.classList.add('active');
  });

  heroSection.addEventListener('mouseleave', () => {
    heroReveal.classList.remove('active');
  });
}

// ================= SISTEMA DE PESTAÑAS =================
const tabButtons = document.querySelectorAll('.nav-tab-btn');
const tabViews = document.querySelectorAll('.tab-view');
const navLogo = document.getElementById('nav-logo');

function switchTab(targetId) {
  tabViews.forEach(view => {
    view.classList.toggle('active', view.id === targetId);
  });

  tabButtons.forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-tab') === targetId);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetTab = btn.getAttribute('data-tab');
    switchTab(targetTab);
  });
});

if (navLogo) {
  navLogo.addEventListener('click', (e) => {
    e.preventDefault();
    switchTab('tab-sobremi');
  });
}

// ================= MENÚ HAMBURGUESA MÓVIL =================
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('button, a').forEach(el => {
    el.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });
}