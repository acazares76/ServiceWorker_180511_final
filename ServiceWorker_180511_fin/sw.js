

//FASE DOS INSTALACION DEL SW


//let self =this;    
/*
 self.addEventListener('install', () =>{
    console.log('SW instalado');

}) 



//ACTIVACION DEL SW

 self.addEventListener('activate', () =>{
    console.log('SW Activado');
})
*/

var nameChache = "mascotas";
var files = [
    "/", 
    "/style.css", 
    "/index.js", 
    "/reset.css"
];

self.addEventListener("install", function (event) {
  event.waitUntil(

    caches.open(nameChache).then(function (cache) {
      console.log("Cache Opened");
      return cache.addAll(files);
    })
  );
});

self.addEventListener("fetch", (eventFetch) =>{
// estrategias cache
//1.  cache only :la aplicacion solo va a responder lo que se encuentre en cache
//    eventFecth.respondWith(
//        caches.match(eventFetch.request)
//   

//2 Network only: Las aplicacion solamente va a responder la misma peticion
// sirve cuando    
    eventFetch.respondWith
    (fetch(eventFetch.request));

}) 



/*
self.addEventListener('install', result =>{

    let nameCache ='mascotas'
    let files = [
    'index.html',
    'style.css', 
    'reset.css',
   
    ]
    caches.open('nameCache')
    .then(cache =>{
        return cache.addAll(files)
    })
    .catch(()=>{
        console.log('algo salio mal')
    })
})

self.addEventListener("fetch", (event)=>{
    event.respondWith(
        caches.match(event.request).then((param)=>{
            if(param){
                return param
            }
            return fetch(event.request)
        })
    )
})
*/

