import { baseHead } from './app/constants/seo'

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: false },

    css: ['~/assets/styles/main.css'],

    app: {
        head: baseHead('en')
    },

    components: [{ path: '~/components', pathPrefix: false }],

    nitro: {
        // Both locales are prerendered; the /fa/ route is linked from the header.
        prerender: {
            routes: ['/', '/fa/'],
            crawlLinks: true
        }
    },

    // Static hosting on GitHub Pages: no server runtime needed.
    ssr: true,

    experimental: {
        payloadExtraction: true
    },

    runtimeConfig: {
        public: {}
    },

    telemetry: false
})
