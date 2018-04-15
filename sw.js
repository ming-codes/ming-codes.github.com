(function(){"use strict"
function e(e,t){return caches.keys().then(function(n){n.forEach(function(n){var s=0===n.indexOf(e),c=n!==t
s&&c&&caches.delete(n)})})}function t(e,t){return!!t.find(function(t){return t.test(decodeURI(e))})}self.CACHE_BUSTER="1523830152972|0.6134790101553977",self.addEventListener("install",function(e){return self.skipWaiting()}),self.addEventListener("activate",function(e){return self.clients.claim()})
var n=["assets/ming-codes-fastboot-e9b9c3bb6ccc5b8c5ae1d28a126d3fdf.js","assets/ming-codes-ff1fb686e529313c7d7c20d12cdf63de.css","assets/ming-codes-0209a1eb6fe71d93ee1f735501fbb448.js","assets/vendor-cb587864e2d03b72320aa90c864ca6c8.css","assets/vendor-a80aa1b2d90cd9d47ec2b1038a559e2e.js"],s="esw-asset-cache-1",c=n.map(function(e){return new URL(e,self.location).toString()}),i=function(){caches.open(s).then(function(e){return e.keys().then(function(t){t.forEach(function(t){-1===c.indexOf(t.url)&&e.delete(t)})})})}
self.addEventListener("install",function(e){e.waitUntil(caches.open(s).then(function(e){return Promise.all(c.map(function(t){var n=new Request(t,{mode:"cors"})
return fetch(n).then(function(n){if(n.status>=400){var s=new Error("Request for "+t+" failed with status "+n.statusText)
throw s}return e.put(t,n)}).catch(function(e){console.error("Not caching "+t+" due to "+e)})}))}))}),self.addEventListener("activate",function(t){t.waitUntil(Promise.all([e("esw-asset-cache",s),i()]))}),self.addEventListener("fetch",function(e){var t="GET"===e.request.method,n=-1!==c.indexOf(e.request.url)
t&&n&&e.respondWith(caches.match(e.request,{cacheName:s}).then(function(t){return t||fetch(e.request)}))})
var r=[],a=[]
self.INDEX_FILE_HASH="2c29c9a760bc7cf8555d0f91531fdd42"
var o=new URL("index.html",self.location).toString()
self.addEventListener("install",function(e){e.waitUntil(fetch(o,{credentials:"include"}).then(function(e){return caches.open("esw-index-1").then(function(t){return t.put(o,e)})}))}),self.addEventListener("activate",function(t){t.waitUntil(e("esw-index","esw-index-1"))}),self.addEventListener("fetch",function(e){var n=e.request,s=new URL(n.url),c="GET"===n.method,i=-1!==n.headers.get("accept").indexOf("text/html"),f=s.origin===location.origin,u=t(n.url,r),d=!a.length||t(n.url,a)
!("/tests"===s.pathname&&!1)&&c&&i&&f&&d&&!u&&e.respondWith(caches.match(o,{cacheName:"esw-index-1"}))})})()
