self.addEventListener('install', function (event) {
    console.log('SW Installed');
    event.waitUntil(caches.open('static')
        .then(function (cache) {
            cache.addAll([
                '/',
                'index.html',
                'dashboard.html',
                'p_policy.html',
                'src/js/app.js',
                'src/js/dash.js',
                'src/css/app.css',
                'src/images/person-icon.png',
                'src/images/map-icon.png',
                'src/images/flatspectrum.png',
                'src/images/crying-boy-photo-1024x768.png',
                'src/images/laughter-2457322_640.png',
                'src/images/red-hair-boy-8-yr-Sq.png',
                'src/images/ReacuarFullLogowebsite-350x152.png',
                'src/images/www.maxpixel.net-Alone-Lost-Kid-Park-Emotions-Guy-Child-Crying-1735221.png',
                'https://fonts.googleapis.com/css?family=Raleway:400,700'

            ]);
        })
    );
});

self.addEventListener('activate', function () {
    console.log('SW activated');
});

self.addEventListener('fetch', function(event){
    console.log('SW fetching');
    event.respondWith(
        caches.match(event.request)
        .then(function(res){
            if(res){
                return res;
            } else {
               return fetch(event.request);
            }
        })
    );
});