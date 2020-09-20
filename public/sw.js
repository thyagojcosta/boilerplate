if (!self.define) {
  const e = (e) => {
      'require' !== e && (e += '.js')
      let s = Promise.resolve()
      return (
        a[e] ||
          (s = new Promise(async (s) => {
            if ('document' in self) {
              const a = document.createElement('script')
              ;(a.src = e), document.head.appendChild(a), (a.onload = s)
            } else importScripts(e), s()
          })),
        s.then(() => {
          if (!a[e]) throw new Error(`Module ${e} didn’t register its module`)
          return a[e]
        })
      )
    },
    s = (s, a) => {
      Promise.all(s.map(e)).then((e) => a(1 === e.length ? e[0] : e))
    },
    a = { require: Promise.resolve(s) }
  self.define = (s, n, r) => {
    a[s] ||
      (a[s] = Promise.resolve().then(() => {
        let a = {}
        const i = { uri: location.origin + s.slice(1) }
        return Promise.all(
          n.map((s) => {
            switch (s) {
              case 'exports':
                return a
              case 'module':
                return i
              default:
                return e(s)
            }
          })
        ).then((e) => {
          const s = r(...e)
          return a.default || (a.default = s), a
        })
      }))
  }
}
define('./sw.js', ['./workbox-c2b5e142'], function (e) {
  'use strict'
  importScripts(),
    e.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/LJ0PpLbVg6DQXMZHCfaoY/_buildManifest.js',
          revision: '189fb6753293b56e86140a976da857e2'
        },
        {
          url: '/_next/static/LJ0PpLbVg6DQXMZHCfaoY/_ssgManifest.js',
          revision: 'abee47769bf307639ace4945f9cfd4ff'
        },
        {
          url:
            '/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.4229f5e0a2a0cb365a7b.js',
          revision: '3492ad2b2f38311e21cdb923442faa45'
        },
        {
          url:
            '/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.9398c0bf99254ee54697.js',
          revision: '33b603f886a91c687e6d47a7bbec25d6'
        },
        {
          url: '/_next/static/chunks/framework.cb05d56be993eb6b088a.js',
          revision: '18cf5f5d0de16c62614aa6853bc8704e'
        },
        {
          url: '/_next/static/chunks/main-3eec34faad1ed4d14b44.js',
          revision: '9409db05a11bbaf771a0e898eb1c1442'
        },
        {
          url: '/_next/static/chunks/pages/_app-bba7b81cd957e384be0e.js',
          revision: '8f18eb2c1c83154898b5e29cd7338963'
        },
        {
          url: '/_next/static/chunks/pages/_error-f4f567df00ce0843964e.js',
          revision: '1ce7635ad73519a6bb086b2767b96914'
        },
        {
          url: '/_next/static/chunks/pages/index-163e408bbe7a72e3891b.js',
          revision: '5a909cbdc2245fafe3b7cef864db5b98'
        },
        {
          url: '/_next/static/chunks/polyfills-4950599f73bdfc797cc8.js',
          revision: '8b7a99a51188f6b47909ea2ad7ac38ab'
        },
        {
          url: '/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js',
          revision: '8c19f623e8389f11131a054a7e17ff95'
        },
        { url: '/favicon.ico', revision: '21b739d43fcb9bbb83d8541fe4fe88fa' },
        { url: '/img/cover.png', revision: '8f5771ad3f27909414b4f6fc24cd1fbc' },
        {
          url: '/img/hero-illustration.svg',
          revision: '70b29078f21f2d829ca450d4ae01ba3d'
        },
        {
          url: '/img/icon-192.png',
          revision: 'd27169d080684ebb57b8387d05c4b444'
        },
        {
          url: '/img/icon-512.png',
          revision: 'f1d74b43a3832183202483a40d9e9d84'
        },
        { url: '/img/logo.svg', revision: '37ec18e21a0e84e78077565dd634314d' },
        {
          url: '/img/project.png',
          revision: '756a6f17b5e793295a623403eac0b531'
        },
        { url: '/manifest.json', revision: '2b19621eb00c338ee252b1c8dda19b2a' },
        { url: '/vercel.svg', revision: '4b4f1876502eb6721764637fe5c41702' }
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 1,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 31536e3,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/api\/.*$/i,
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /.*/i,
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    )
})
