const CACHE_NAME = "billetera-marcony-v1";

const ARCHIVOS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./perfil.png",
  "./Licencia.pdf",
  "./TARJETA PROPIEDAD.pdf",
  "./SOAT.pdf"
];


self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(cache => {
      return cache.addAll(ARCHIVOS);
    })
  );
});


self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
    .then(response => {
      return response || fetch(event.request);
    })
  );
});
