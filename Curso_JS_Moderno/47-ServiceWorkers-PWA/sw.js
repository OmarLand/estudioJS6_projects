const nombreCache = 'apv-v1';
const archivos = [
    '/',
    '/index.html',
    '/error.html',
    '/css/bootstrap.css',
    '/css/styles.css',
    '/js/apv.js'
];

// Cuando se instala el ServiceWorker
self.addEventListener('install', e => {
    console.log('Instalado el Service Worker');
    //console.log( e );
    e.waitUntil(
        caches.open(nombreCache)
            .then( cache => {
                console.log('Cacheando...');
                cache.addAll( archivos )
                
            })
    )
});

// Activar el Service Worker
self.addEventListener('activate', e => {
    console.log( 'Service Worker Activado...!!! xD' );
    console.log('>>> ',e);  
});

// EVento fetch para descargar archivos estaticos:
self.addEventListener('fetch', e => {
    console.log( 'Fetch...', e );

    e.respondWith(
        caches.match(e.request)
            .then( respuestaCache => {
                return respuestaCache
            })
            .catch( () => caches.match('/error.html') )
    )
})