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
    ],
    mediaExtra: [
      { type: "image", src: "assets/sensingtex-extra-1.jpg", caption: "Detalle de packaging y manual" },
      { type: "video", src: "assets/sensingtex-demo.mp4", caption: "Demostración de interacción y sensores" }
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
    ],
    mediaExtra: [
      { type: "image", src: "assets/sensingtex-extra-1.jpg", caption: "Detalle de packaging y manual" },
      { type: "video", src: "assets/sensingtex-demo.mp4", caption: "Demostración de interacción y sensores" }
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
    ],
    mediaExtra: [
      { type: "image", src: "assets/sensingtex-extra-1.jpg", caption: "Detalle de packaging y manual" },
      { type: "video", src: "assets/sensingtex-demo.mp4", caption: "Demostración de interacción y sensores" }
    ]
  },

  // ÁMBITO ACADÉMICO & EXPERIMENTAL
  introspection: {
    title: "IntroSpection",
    subtitle: "Espejo interactivo para la autorreflexión emocional en el hogar · Brand Products x CUPRA",
    tags: "#TFG · #ELISAVA · #CUPRA · #DiseñoInteractivo · #Python · #RaspberryPi",
    disciplines: "Diseño de Interacción, UX/UI Tangible, Computer Vision, Diseño Paramétrico de Producto, Machine Learning.",
    tech: "Raspberry Pi 3B+, Python (PyQt5, OpenCV, PyTorch, Hugging Face), Pantalla IPS DSI 5\", Cámara USB, Iluminación LED reactiva por MOSFET IRFZ44N, Metacrilato tipo espejo con degradado.",
    images: [
      "assets/introspection-1.tiff",
      "assets/introspection-2.jpg",
      "assets/introspection-3.jpg",
      "assets/introspection-4.jpg",
      "assets/introspection-5.jpg",
      "assets/introspection-6.jpg"
    ],
    // Galería interactiva vertical que se colocará en la barra lateral derecha
    sidebarGallery: [
      { src: "assets/introspection-proto.jpg", title: "Prototipo físico completo" },
      { src: "assets/introspection-ui.jpg", title: "Malla Voronoi en pantalla IPS" },
      { src: "assets/introspection-hardware.jpg", title: "Circuito y Raspberry Pi 3B+" },
      { src: "assets/introspection-espejo.jpg", title: "Pruebas de degradado láser" }
    ],
    description: `
      <div class="project-modal-story">
        
        <!-- Bloque 1: El Reto y Concepto -->
        <div class="story-section">
          <h4>El Reto & Contexto</h4>
          <p>
            En la era digital, la Generación Z enfrenta un incremento alarmante de ansiedad y desconexión con sus propias emociones, condicionado por la exposición constante a modelos de vida idealizados en redes sociales. El espejo doméstico ha funcionado históricamente como un instrumento centrado en el juicio estético y la apariencia externa.
          </p>
          <p>
            Bajo el marco de colaboración de <strong>CUPRA Lifestyle</strong> y la mención de Experiencias Interactivas en ELISAVA, el proyecto redefine este objeto cotidiano: transformar el acto rutinario de mirarse al espejo en un ritual íntimo de pausa, autoconocimiento y cuidado de la salud mental.
          </p>
        </div>

        <!-- Bloque 2: Experiencia e Interacción -->
        <div class="story-section">
          <h4>La Experiencia Interactiva</h4>
          <p>
            El dispositivo no busca emitir juicios ni diagnósticos médicos cerrados, sino funcionar como una interfaz sensible y mediadora:
          </p>
          <ul>
            <li><strong>Reconocimiento de expresión facial:</strong> Al situarse frente al espejo, una cámara capta el rostro y un modelo de aprendizaje profundo clasifica la expresión en 5 grados emocionales. Si la lectura automática no coincide con lo que la persona siente, esa discrepancia actúa como detonante para cuestionarse y matizar el estado real de forma consciente.</li>
            <li><strong>Patrón celular Voronoi dinámico:</strong> Como puente estético con la identidad paramétrica de CUPRA, la pantalla proyecta una malla generativa basada en diagramas de Voronoi: a mayor nivel de bienestar, más densa y viva es la red; en momentos de tristeza o baja energía, la estructura se muestra vacía y fragmentada.</li>
            <li><strong>Atmósfera lumínica reactiva:</strong> Un sistema de iluminación LED cálida modula su brillo de manera sutil según el estado anímico, envolviendo el entorno físico sin generar sobrecarga sensorial.</li>
            <li><strong>Seguimiento & Red Íntima de Cuidado:</strong> Ofrece un registro semanal y mensual para identificar patrones de conducta, además de una opción para compartir el estado anímico con un círculo cercano sin necesidad de escribir ni la presión de recibir una respuesta inmediata.</li>
          </ul>
        </div>

        <!-- Bloque 3: Morfología y Diseño de Producto -->
        <div class="story-section">
          <h4>Morfología & Lenguaje Formal CUPRA</h4>
          <p>
            La pieza (40 × 55 cm) rompe con la forma rectangular convencional adoptando una silueta trapezoidal con cortes angulares a 10°, evocando el triángulo característico del logotipo de CUPRA.
          </p>
          <p>
            El cristal cuenta con un tratamiento especial: un degradado visual que va desde bordes exteriores en negro mate hasta un centro cromado nítido. Al mirar de frente, el reflejo es claro; al desviar la mirada a los extremos, el entorno se desvanece en penumbra, aislando al usuario de distracciones externas para propiciar un momento de introspección pura.
          </p>
        </div>

        <!-- Bloque 4: Espacio para Vídeo Demostrativo -->
        <div class="story-section video-section">
          <h4>Video Demostrativo del Prototipo</h4>
          <div class="project-video-wrapper">
            <video controls poster="assets/introspection-1.jpg" class="modal-project-video">
              <source src="assets/videos/introspection-demo.mp4" type="video/mp4">
              Tu navegador no soporta el formato de vídeo.
            </video>
          </div>
        </div>

      </div>
    `
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
    subtitle: "Dispositivo cinético y sonoro controlado por servomotores y encoder rotatorio.",
    tags: "#ARDUINO · #SERVOMOTORES · #SONIDO TANGIBLE",
    disciplines: "Diseño de Producto, Hardware Interactivo y Cinética.",
    tech: "Arduino, 4 Servomotores, Encoder rotatorio.",
    description: `
      <p><strong>Concepto:</strong> Objeto interactivo que reinterpreta el concepto clásico de caja de música mediante computación física. A través de un encoder rotatorio, el usuario navega entre 4 patrones sonoros preprogramados que oscilan entre la melodía, el ritmo mecánico y el ruido digital. Cuatro servomotores actúan como percutores cinéticos moviendo cascabeles suspendidos a distintas velocidades y frecuencias, traduciendo secuencias de código en una experiencia acústica.</p>
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
      <p><strong>Concepto:</strong> Juego que combina hardware artesanal y software en Processing, modulando la velocidad de unas bolas de colores mediante pulsadores analógicos caseros. Cuando la primera bola llega a su destino se desbloquea la siguiente, así hasta completar los 4 colores.</p>
    `,
    images: ["assets/juego-precision-1.jpg"]
  }
};

// ================= SELECTOR DE ÁMBITO (PROFESIONAL VS ACADÉMICO) =================
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const sectionHeading = document.getElementById('section-heading');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const scope = button.getAttribute('data-scope');

    if (scope === 'profesional') {
      sectionHeading.textContent = "Proyectos Profesionales";
    } else {
      sectionHeading.textContent = "Proyectos Académicos & Experimentales";
    }

    projectCards.forEach(card => {
      const cardScope = card.getAttribute('data-scope');
      if (cardScope === scope) {
        card.classList.remove('hide');
      } else {
        card.classList.add('hide');
      }
    });
  });
});

// ================= MODAL Y CARRUSEL =================
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

    // Rellenar información base
    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-subtitle').textContent = data.subtitle;
    document.getElementById('modal-tags').textContent = data.tags;
    document.getElementById('modal-description').innerHTML = data.description;
    document.getElementById('modal-disciplines').textContent = data.disciplines;
    document.getElementById('modal-tech').textContent = data.tech;

    // Galería extra general si existe en proyectos como Sensing Tex
    const galleryContainer = document.getElementById('modal-gallery');
    galleryContainer.innerHTML = '';

    if (data.mediaExtra && data.mediaExtra.length > 0) {
      const heading = document.createElement('h5');
      heading.className = 'gallery-heading';
      heading.textContent = 'Documentación visual & proceso';
      galleryContainer.appendChild(heading);

      const grid = document.createElement('div');
      grid.className = 'gallery-grid';

      data.mediaExtra.forEach(item => {
        const figure = document.createElement('figure');
        figure.className = 'gallery-item';

        if (item.type === 'video') {
          const video = document.createElement('video');
          video.src = item.src;
          video.controls = true;
          video.playsInline = true;
          video.className = 'gallery-video';
          figure.appendChild(video);
        } else {
          const img = document.createElement('img');
          img.src = item.src;
          img.alt = item.caption || 'Imagen del proyecto';
          img.className = 'gallery-img';
          figure.appendChild(img);
        }

        if (item.caption) {
          const caption = document.createElement('figcaption');
          caption.textContent = item.caption;
          figure.appendChild(caption);
        }

        grid.appendChild(figure);
      });

      galleryContainer.appendChild(grid);
    }

    // Configurar carrusel superior (2 fotos o más)
    currentProjectImages = data.images || [];
    currentSlideIndex = 0;
    setupCarousel();

    // ================= VISOR VERTICAL LATERAL (DERECHA) =================
    const sidebarEl = document.querySelector('.modal-sidebar');
    const existingViewer = document.getElementById('sidebar-vertical-viewer');
    if (existingViewer) existingViewer.remove();

    if (data.sidebarGallery && data.sidebarGallery.length > 0) {
      const viewerBlock = document.createElement('div');
      viewerBlock.className = 'info-block sidebar-viewer-block';
      viewerBlock.id = 'sidebar-vertical-viewer';
      
      viewerBlock.innerHTML = `
        <h5>Detalles & Proceso</h5>
        <div class="sidebar-vslider-frame">
          ${data.sidebarGallery.map((item, idx) => `
            <img src="${item.src}" class="sidebar-vslide ${idx === 0 ? 'active' : ''}" alt="${item.title || 'Detalle'}">
          `).join('')}
        </div>
        <div class="sidebar-vslider-controls">
          <button type="button" class="v-btn" id="sb-prev" aria-label="Anterior">❮</button>
          <span class="v-counter" id="sb-counter">1 / ${data.sidebarGallery.length}</span>
          <button type="button" class="v-btn" id="sb-next" aria-label="Siguiente">❯</button>
        </div>
      `;

      sidebarEl.appendChild(viewerBlock);

      let sbIndex = 0;
      const sbSlides = viewerBlock.querySelectorAll('.sidebar-vslide');
      const sbCounter = viewerBlock.querySelector('#sb-counter');
      const btnPrev = viewerBlock.querySelector('#sb-prev');
      const btnNext = viewerBlock.querySelector('#sb-next');

      function updateSbSlider() {
        sbSlides.forEach((img, i) => img.classList.toggle('active', i === sbIndex));
        if (sbCounter) sbCounter.textContent = `${sbIndex + 1} / ${sbSlides.length}`;
      }

      btnPrev.onclick = (e) => {
        e.stopPropagation();
        sbIndex = (sbIndex === 0) ? sbSlides.length - 1 : sbIndex - 1;
        updateSbSlider();
      };

      btnNext.onclick = (e) => {
        e.stopPropagation();
        sbIndex = (sbIndex === sbSlides.length - 1) ? 0 : sbIndex + 1;
        updateSbSlider();
      };
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';

  // Quita el visor lateral para no acumularlo en el siguiente proyecto que se abra
  const existingViewer = document.getElementById('sidebar-vertical-viewer');
  if (existingViewer) existingViewer.remove();
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

// ================= EFECTO TYPEWRITER =================
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

// ================= ANIMACIÓN FADE UP AL HACER SCROLL =================
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

// ================= MÁSCARA DIFUMINADA HERO =================
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

// ================= CONTROL DE PESTAÑAS =================
const tabButtons = document.querySelectorAll('.nav-tab-btn');
const tabViews = document.querySelectorAll('.tab-view');
const navLogo = document.getElementById('nav-logo');

function switchTab(targetId) {
  tabViews.forEach(view => {
    if (view.id === targetId) {
      view.classList.add('active');
    } else {
      view.classList.remove('active');
    }
  });

  tabButtons.forEach(btn => {
    if (btn.getAttribute('data-tab') === targetId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
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