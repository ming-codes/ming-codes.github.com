(function(){"use strict"
function e(e,t){return caches.keys().then(function(n){n.forEach(function(n){var s=0===n.indexOf(e),c=n!==t
s&&c&&caches.delete(n)})})}function t(e,t){return!!t.find(function(t){return t.test(decodeURI(e))})}self.CACHE_BUSTER="1524295862987|0.571104978027843",self.addEventListener("install",function(e){return self.skipWaiting()}),self.addEventListener("activate",function(e){return self.clients.claim()})
var n=["assets/ming-codes-fastboot-e9b9c3bb6ccc5b8c5ae1d28a126d3fdf.js","assets/ming-codes-8b452b6c8458411c1c64551152a0e35d.css","assets/ming-codes-09835e146f8b7b377179ec2448c230f0.js","assets/vendor-cb587864e2d03b72320aa90c864ca6c8.css","assets/vendor-6071832148fbf6f94a74378a7423d141.js"],s="esw-asset-cache-1",c=n.map(function(e){return new URL(e,self.location).toString()}),i=function(){caches.open(s).then(function(e){return e.keys().then(function(t){t.forEach(function(t){-1===c.indexOf(t.url)&&e.delete(t)})})})}
self.addEventListener("install",function(e){e.waitUntil(caches.open(s).then(function(e){return Promise.all(c.map(function(t){var n=new Request(t,{mode:"cors"})
return fetch(n).then(function(n){if(n.status>=400){var s=new Error("Request for "+t+" failed with status "+n.statusText)
throw s}return e.put(t,n)}).catch(function(e){console.error("Not caching "+t+" due to "+e)})}))}))}),self.addEventListener("activate",function(t){t.waitUntil(Promise.all([e("esw-asset-cache",s),i()]))}),self.addEventListener("fetch",function(e){var t="GET"===e.request.method,n=-1!==c.indexOf(e.request.url)
t&&n&&e.respondWith(caches.match(e.request,{cacheName:s}).then(function(t){return t||fetch(e.request)}))})
var a=[],r=[]
self.INDEX_FILE_HASH="d871a1cf93c10bba20280e8dcac67cbe"
var o=new URL("index.html",self.location).toString()
self.addEventListener("install",function(e){e.waitUntil(fetch(o,{credentials:"include"}).then(function(e){return caches.open("esw-index-1").then(function(t){return t.put(o,e)})}))}),self.addEventListener("activate",function(t){t.waitUntil(e("esw-index","esw-index-1"))}),self.addEventListener("fetch",function(e){var n=e.request,s=new URL(n.url),c="GET"===n.method,i=-1!==n.headers.get("accept").indexOf("text/html"),u=s.origin===location.origin,f=t(n.url,a),d=!r.length||t(n.url,r)
!("/tests"===s.pathname&&!1)&&c&&i&&u&&d&&!f&&e.respondWith(caches.match(o,{cacheName:"esw-index-1"}))})})()
