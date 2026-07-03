 /*==========================================================
    BALANCED LIFE
    SERVICE WORKER
==========================================================*/

const CACHE_NAME = "balancedlife-v1";

const FILES_TO_CACHE = [

    "./",

    "./index.html",

    "./manifest.json",

    "./favicon.ico",

    "./assets/css/style.css",

    "./assets/js/app.js",

    "./assets/img/logo.png",

    "./assets/img/icon-192.png",

    "./assets/img/icon-512.png",

    "./assets/svg/blob-top.svg",

    "./assets/svg/blob-bottom.svg",

    "./assets/svg/leaf-left.svg",

    "./assets/svg/leaf-right.svg",

    "./assets/svg/apple-divider.svg"

];


/*==========================================================
    INSTALACIÓN
==========================================================*/

self.addEventListener("install", event => {

    event.waitUntil(

        caches.open(CACHE_NAME)

            .then(cache => cache.addAll(FILES_TO_CACHE))

    );

});


/*==========================================================
    ACTIVACIÓN
==========================================================*/

self.addEventListener("activate", event => {

    event.waitUntil(

        caches.keys().then(keys =>

            Promise.all(

                keys.map(key => {

                    if(key !== CACHE_NAME){

                        return caches.delete(key);

                    }

                })

            )

        )

    );

});


/*==========================================================
    FETCH
==========================================================*/

self.addEventListener("fetch", event => {

    event.respondWith(

        caches.match(event.request)

            .then(response => {

                return response || fetch(event.request);

            })

    );

});