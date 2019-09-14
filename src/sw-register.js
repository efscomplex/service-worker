// the browser knows if a service worker is allready registered
if('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('./sw.js')
        .then(console.log('service worker registered'))
        .catch(console.log) 
}else{ console.log('no service worker aviable!')}