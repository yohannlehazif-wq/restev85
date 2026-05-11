const CACHE_NAME = 'restev-cache-v2';

const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/logo_restev_carre.png',
  '/logo_restev_long.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
/* Conteneur pour la perspective 3D */
.logo-container {
    position: relative;
    perspective: 1000px;
    display: inline-block;
    margin-bottom: 30px;
}

.unique-logo-anim {
    width: 150px;
    height: 150px;
    background: white;
    padding: 15px;
    border-radius: 30px; /* Forme "Squircle" moderne */
    position: relative;
    z-index: 2;
    box-shadow: 0 20px 50px rgba(0,0,0,0.3);
    /* Animation de flottement magnétique en 3D */
    animation: magneticFloat 5s ease-in-out infinite;
}

/* Les ondes de choc (Pulse) */
.logo-container::before, 
.logo-container::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 150px;
    height: 150px;
    border: 2px solid white;
    border-radius: 35px;
    transform: translate(-50%, -50%);
    z-index: 1;
    opacity: 0;
    animation: bioPulse 3s linear infinite;
}

.logo-container::after {
    animation-delay: 1.5s;
}

/* Effet de scan laser qui passe sur le logo */
.laser-scan {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 30px;
    background: linear-gradient(to bottom, 
        transparent 0%, 
        rgba(255, 255, 255, 0.8) 50%, 
        transparent 100%);
    z-index: 3;
    height: 20%;
    opacity: 0.5;
    pointer-events: none;
    animation: scanning 4s linear infinite;
}

@keyframes magneticFloat {
    0%, 100% { transform: rotateY(0deg) rotateX(0deg) translateY(0); }
    25% { transform: rotateY(15deg) rotateX(10deg) translateY(-10px); }
    50% { transform: rotateY(0deg) rotateX(20deg) translateY(-5px); }
    75% { transform: rotateY(-15deg) rotateX(10deg) translateY(-12px); }
}

@keyframes bioPulse {
    0% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; }
    100% { transform: translate(-50%, -50%) scale(2.5); opacity: 0; }
}

@keyframes scanning {
    0% { top: -20%; }
    100% { top: 120%; }
}

/* Animation d'apparition initiale */
.splash-content {
    animation: contentZoom 1s cubic-bezier(0.17, 0.67, 0.83, 0.67);
}

@keyframes contentZoom {
    0% { opacity: 0; transform: scale(0.5); }
    100% { opacity: 1; transform: scale(1); }
      }
