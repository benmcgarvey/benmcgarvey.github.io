!function(){"use strict";const e=["client/index.7e06e2f5.js","client/ContentContainer.ae9d2b2e.js","client/ImageLink.ad538c31.js","client/Note.bfbeb5f3.js","client/resume.97c77203.js","client/index.9504eae2.js","client/random.5b6ca544.js","client/instaformat.f76c3c2d.js","client/contact.0ba224f7.js","client/resume.962e1470.js","client/index.8f88dd1c.js","client/index.11370fc8.js","client/[slug].107f8fd7.js","client/ATSResume.fe94bad0.js","client/suellan.5bc6695d.js","client/client.a3fab00d.js","client/Resume.22e8e9ee.js","client/work.e9f51337.js"].concat(["service-worker-index.html","acorn.png","acorn_256.png","acorn_512.png","bcdtravel.png","dark.css","favicon.png","light.css","manifest.json","nord.css","oceanic-next.css","sidekicker.png","statravel.png","uom.png"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1613472585305").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1613472585305"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&t.has(n.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1613472585305").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const s=await t.match(e.request);if(s)return s;throw n}}))))})}();
