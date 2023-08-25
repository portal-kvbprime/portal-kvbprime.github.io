/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("/workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/workbox-v3.6.3"});

importScripts(
<<<<<<< HEAD
  "/precache-manifest.fe15b3e52ffa064e8981e47b2448c57a.js"
=======
  "/precache-manifest.c4cfb881028a1ed0c0cd1d8223608559.js"
>>>>>>> 0bb8ac7784231e7dae30a305ddae6fb7cf196d61
);

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/html$/, workbox.strategies.networkOnly({ plugins: [new workbox.cacheableResponse.Plugin({"statuses":[200]})] }), 'GET');
