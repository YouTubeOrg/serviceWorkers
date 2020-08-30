// Make sure sw are supported
if (navigator.serviceWorker) { // aliter if navigator.serviceWorker
  // listen to the load event, 
  // take the navigator object
  // then registerthe file
  // returns a promise
  // returns a reg object
  // if there's an error,we catch
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('../simple_service_worker/sw_cached_site.js')
      .then(reg => console.log('Service Worker: Registered')) 
      .catch(err => console.log(`Service Worker: Error: ${err}`));
  });
  // console.log('worked')
}
