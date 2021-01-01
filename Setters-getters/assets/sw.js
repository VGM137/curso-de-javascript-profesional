const VERSION = 'v1'

self.addEventListener('install', event => {
  event.waitUntil(precache())
})
self.addEventListener('fetch', event => {
  const request = event.request
  //GET
  if(!request.method === 'GET') {
    return
  }

  // buscar en cache
  event.respondWith(cachedRequest(request))

  //actualizar el cache
  event.waitUntil(updateRequest(request))
})

async function precache(){
  const cache = await caches.open(VERSION)
  return cache.addAll([
/*     '../',
    '../Setters-getters',
    '../Setters-getters/index.html',
    '../Setters-getters/assets/index.js',
    '../Setters-getters/assets/MediaPlayer.js',
    '../Setters-getters/assets/plugins/AutoPlay.js',
    '../Setters-getters/assets/plugins/AutoPause.js',
    '../Setters-getters/assets/index.css',
    '../Setters-getters/assets/FHD0107.mp4', */
  ])
}

async function cachedRequest(request){
  const cache = await caches.open(VERSION)
  const response = await cache.match(request)
  return response || fetch(request)
}

async function updateRequest(request){
  const cache = await caches.open(VERSION)
  const response = await fetch(request)
  return cache.put(request, response)
}
