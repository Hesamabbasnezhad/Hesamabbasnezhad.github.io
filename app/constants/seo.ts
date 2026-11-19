/**
 * Single source of truth for every SEO signal on the site.
 *
 * It drives <head>, the JSON-LD graph and the static files in public/
 * (robots.txt, sitemap.xml, llms.txt, humans.txt).
 *
 * Change the canonical origin in ONE place: SITE_URL.
 */

export const SITE_URL = 'https://hesamabbasnezhad.github.io'

export const SITE = {
    url: SITE_URL,
    home: `${SITE_URL}/`,
    faHome: `${SITE_URL}/fa/`,
    name: 'Hesam Abbasnezhad',
    nativeName: 'حسام عباس‌نژاد',
    handle: 'hesamabbasnezhad',
    brand: 'Kowshan',
    title: 'Hesam Abbasnezhad — Backend Developer & Project Manager',
    shortTitle: 'Hesam Abbasnezhad — Laravel & Vue Developer',
    description:
        'Hesam Abbasnezhad — backend developer and project manager with four years of experience building Laravel, PHP and Vue platforms. Remote-first from Iran.',
    ogDescription:
        'Four years of backend and project leadership: Laravel, PHP, Vue and MySQL. Shipping production platforms for therapy, energy and hospitality.',
    email: 'hessam.abbasnezhad@gmail.com',
    city: 'Ardabil',
    region: 'Ardabil',
    country: 'IR',
    github: 'https://github.com/hesamabbasnezhad',
    telegram: 'https://t.me/hesam746',
    instagram: 'https://instagram.com/hesam.abbasnezhad',
    // UI kit is a Kowshan team asset — keep pointing at Kourva's deploy
    uiKit: 'https://kowshan-ui-kit.pages.dev/',
    ogImage: `${SITE_URL}/og.png`,
    ogImageAlt: 'Hesam Abbasnezhad — backend developer and project manager, portfolio homepage',
    lastUpdated: '2026-11-17',
    locale: 'en_US'
} as const

/** Persian copy of the identity block used by the /fa/ page. */
export const SITE_FA = {
    title: 'حسام عباس‌نژاد — توسعه‌دهنده بک‌اند و مدیر پروژه',
    shortTitle: 'حسام عباس‌نژاد — توسعه‌دهنده لاراول و Vue',
    description:
        'حسام عباس‌نژاد — توسعه‌دهنده بک‌اند و مدیر پروژه با چهار سال تجربه در ساخت پلتفرم‌های لاراول، PHP و Vue. کار از راه دور از ایران.',
    ogDescription:
        'چهار سال توسعه بک‌اند و مدیریت پروژه: لاراول، PHP، Vue و MySQL. ساخت پلتفرم‌های عملیاتی برای درمان، انرژی و مهمان‌پذیری.',
    ogImageAlt: 'حسام عباس‌نژاد — توسعه‌دهنده بک‌اند و مدیر پروژه، صفحه اصلی نمونه‌کار',
    locale: 'fa_IR'
} as const

export type Locale = 'en' | 'fa'

export const LOCALES = ['en', 'fa'] as const

/**
 * Cross-site entity IDs.
 *
 * KOWSHAN_ORG_ID and KOURVA_PERSON_ID are deliberately hard-coded to Kourva's
 * origin so Google consolidates the team into ONE Organization entity rather
 * than two competing "Kowshan" nodes. Do not localise these.
 */
const KOWSHAN_ORG_ID = 'https://kourva.github.io/#organization'
const KOURVA_PERSON_ID = 'https://kourva.github.io/#person'

const PERSON_ID = `${SITE_URL}/#person`
const WEBSITE_ID = `${SITE_URL}/#website`

const PROJECTS = [
    {
        name: 'Asayroom',
        url: 'https://asayroom.ir',
        description:
            'National therapy platform for psychology, psychiatry and counselling — multilingual, in-person and online, with video verification, nested article categories, assessments and in-app payments.'
    },
    {
        name: 'NIGC CRM',
        url: 'https://crm.nigc-ar.ir/',
        description:
            'Internal CRM for the National Iranian Gas Company, built as one of three independent Vue applications with its own visual identity.'
    },
    {
        name: 'NIGC Field PWA',
        url: 'https://es.nigc-ar.ir/pwa2',
        description:
            'Progressive web app for field operations at the National Iranian Gas Company, with an in-app photo capture flow for tasks.'
    },
    {
        name: 'Cafe Mahour',
        description:
            'Reservation-first platform for a cafe built around consultants and brokers: table booking, bundled packages, menu and a two-level admin.'
    },
    {
        name: 'Baam',
        description:
            'Professional qualification platform for inspectors, evaluators and auditors: resume builder, job selection and automatic skill-gap analysis.'
    }
] as const

export function localePath(locale: Locale): string {
    return locale === 'fa' ? '/fa/' : '/'
}

export function absoluteUrl(path: string): string {
    return new URL(path.replace(/^\//, ''), `${SITE_URL}/`).href
}

/**
 * One @graph instead of separate <script> blocks: every node is wired by @id,
 * so Google reads Person, Kowshan, the site and the projects as a single
 * connected entity instead of orphaned fragments.
 */
export function buildStructuredData(locale: Locale = 'en') {
    const isFa = locale === 'fa'
    const copy = isFa ? SITE_FA : SITE
    const url = isFa ? SITE.faHome : SITE.home
    const personId = isFa ? `${url}#person` : PERSON_ID
    const websiteId = isFa ? `${url}#website` : WEBSITE_ID
    const profileId = `${url}#profilepage`
    const breadcrumbId = `${url}#breadcrumb`

    return {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Person',
                '@id': personId,
                name: isFa ? SITE.nativeName : SITE.name,
                alternateName: isFa ? [SITE.name, SITE.handle] : [SITE.handle, SITE.nativeName],
                url,
                image: SITE.ogImage,
                jobTitle: isFa ? 'توسعه‌دهنده بک‌اند و مدیر پروژه' : 'Backend Developer & Project Manager',
                description: isFa
                    ? 'توسعه‌دهنده بک‌اند و مدیر پروژه با چهار سال تجربه. ساخت پلتفرم‌های عملیاتی با لاراول، PHP، Vue و MySQL و هدایت تحویل پروژه‌ها در تیم کوشان.'
                    : 'Backend developer and project manager with four years of experience. Builds production platforms with Laravel, PHP, Vue and MySQL, and leads delivery across the Kowshan team.',
                email: `mailto:${SITE.email}`,
                address: {
                    '@type': 'PostalAddress',
                    addressLocality: SITE.city,
                    addressRegion: SITE.region,
                    addressCountry: SITE.country
                },
                areaServed: [
                    { '@type': 'City', name: 'Ardabil' },
                    { '@type': 'City', name: 'Tabriz' },
                    { '@type': 'City', name: 'Tehran' },
                    { '@type': 'Place', name: 'Worldwide (remote)' }
                ],
                sameAs: [SITE.github, SITE.telegram, SITE.instagram],
                knowsAbout: [
                    'Laravel',
                    'PHP',
                    'Vue.js',
                    'Nuxt',
                    'JavaScript',
                    'TypeScript',
                    'MySQL',
                    'Linux',
                    'REST APIs',
                    'project management',
                    'Agile'
                ],
                hasOccupation: {
                    '@type': 'Occupation',
                    name: isFa ? 'توسعه‌دهنده وب بک‌اند' : 'Backend Web Developer',
                    skills: 'Laravel, PHP, Vue, TypeScript, MySQL, Linux, project management',
                    occupationLocation: { '@type': 'Country', name: 'Iran' }
                },
                worksFor: { '@id': KOWSHAN_ORG_ID },
                knowsLanguage: [
                    { '@type': 'Language', name: 'Persian', alternateName: 'fa' },
                    { '@type': 'Language', name: 'English', alternateName: 'en' }
                ],
                knownFor: {
                    '@type': 'SoftwareSourceCode',
                    name: 'laravel-iran-bank',
                    description:
                        'Lightweight Laravel service for validating Iranian banking information — card numbers, account numbers and IBANs.',
                    codeRepository: 'https://github.com/Hesamabbasnezhad/laravel-iran-bank',
                    programmingLanguage: 'PHP'
                }
            },
            {
                '@type': 'Organization',
                // Shared @id — this node deliberately points at Kourva's origin
                // so both personal sites describe the SAME Kowshan entity.
                '@id': KOWSHAN_ORG_ID,
                name: SITE.brand,
                alternateName: 'Kourva',
                url: 'https://kourva.github.io/',
                logo: {
                    '@type': 'ImageObject',
                    url: 'https://kourva.github.io/favicon.svg',
                    width: 56,
                    height: 56
                },
                image: 'https://kourva.github.io/og.png',
                description:
                    'Kowshan is a small independent software studio — three developers and one designer — building web platforms with Vue, Nuxt, Laravel and Python.',
                founder: { '@id': KOURVA_PERSON_ID },
                email: 'mailto:realkourva@proton.me',
                address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Ardabil',
                    addressRegion: 'Ardabil',
                    addressCountry: 'IR'
                },
                areaServed: [
                    { '@type': 'Country', name: 'Iran' },
                    { '@type': 'Place', name: 'Worldwide (remote)' }
                ],
                numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 3, maxValue: 4 },
                sameAs: ['https://github.com/kourva', 'https://kowshan-ui-kit.pages.dev/'],
                contactPoint: [
                    {
                        '@type': 'ContactPoint',
                        contactType: 'project inquiries',
                        email: 'mailto:realkourva@proton.me',
                        availableLanguage: ['en', 'fa']
                    }
                ]
            },
            {
                '@type': 'WebSite',
                '@id': websiteId,
                url,
                name: copy.shortTitle,
                alternateName: isFa ? 'نمونه‌کار حسام عباس‌نژاد' : 'Hesam Abbasnezhad Portfolio',
                description: copy.description,
                inLanguage: locale,
                publisher: { '@id': personId },
                copyrightHolder: { '@id': personId }
            },
            {
                '@type': 'ProfilePage',
                '@id': profileId,
                url,
                name: copy.title,
                description: copy.description,
                isPartOf: { '@id': websiteId },
                about: { '@id': personId },
                mainEntity: { '@id': personId },
                inLanguage: locale,
                dateModified: SITE.lastUpdated,
                primaryImageOfPage: {
                    '@type': 'ImageObject',
                    url: SITE.ogImage,
                    width: 1200,
                    height: 630,
                    caption: copy.ogImageAlt
                },
                breadcrumb: { '@id': breadcrumbId },
                hasPart: PROJECTS.map((project) => ({
                    '@type': 'SoftwareApplication',
                    name: project.name,
                    applicationCategory: 'BusinessApplication',
                    operatingSystem: 'Web',
                    ...('url' in project ? { url: project.url } : {}),
                    description: project.description,
                    author: { '@id': KOURVA_PERSON_ID },
                    contributor: { '@id': personId }
                }))
            },
            {
                '@type': 'BreadcrumbList',
                '@id': breadcrumbId,
                itemListElement: [
                    {
                        '@type': 'ListItem',
                        position: 1,
                        name: isFa ? 'خانه' : 'Home',
                        item: url
                    }
                ]
            }
        ]
    }
}

/** Locale-aware <head> for a page. `baseHead` is also used in nuxt.config. */
export function baseHead(locale: Locale = 'en') {
    const isFa = locale === 'fa'
    const copy = isFa ? SITE_FA : SITE

    return {
        htmlAttrs: { lang: locale, dir: isFa ? 'rtl' : 'ltr' },
        title: copy.title,
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'description', content: copy.description },
            {
                name: 'robots',
                content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
            },
            { name: 'author', content: isFa ? SITE.nativeName : SITE.name },
            { name: 'theme-color', content: '#0b1533' },
            { name: 'color-scheme', content: 'light' }
        ]
    }
}

export function headForLocale(locale: Locale, baseURL: string = '/') {
    const isFa = locale === 'fa'
    const copy = isFa ? SITE_FA : SITE
    const url = isFa ? SITE.faHome : SITE.home

    // Public files (favicon) live under the deploy base, which is "/" for a
    // <user>.github.io repo and "/<repo>/" for a project repo.
    const base = baseURL.endsWith('/') ? baseURL : `${baseURL}/`
    const asset = (file: string) => `${base}${file}`

    return {
        ...baseHead(locale),
        link: [
            { rel: 'canonical', href: url },
            { rel: 'alternate', hreflang: 'en', href: SITE.home },
            { rel: 'alternate', hreflang: 'fa', href: SITE.faHome },
            { rel: 'alternate', hreflang: 'x-default', href: SITE.home },
            { rel: 'icon', type: 'image/svg+xml', href: asset('favicon.svg') },
            { rel: 'apple-touch-icon', href: asset('favicon.svg') },
            { rel: 'sitemap', type: 'application/xml', href: `${SITE_URL}/sitemap.xml` },
            { rel: 'alternate', type: 'text/plain', href: `${SITE_URL}/llms.txt`, title: 'llms.txt' },
            { rel: 'me', href: SITE.github },
            { rel: 'me', href: SITE.telegram }
        ],
        meta: [
            ...baseHead(locale).meta,
            { property: 'og:type', content: 'profile' },
            { property: 'og:site_name', content: `${SITE.handle} — ${SITE.brand}` },
            { property: 'og:locale', content: copy.locale },
            { property: 'og:locale:alternate', content: isFa ? SITE.locale : SITE_FA.locale },
            { property: 'og:title', content: copy.title },
            { property: 'og:description', content: copy.ogDescription },
            { property: 'og:url', content: url },
            { property: 'og:image', content: SITE.ogImage },
            { property: 'og:image:type', content: 'image/png' },
            { property: 'og:image:width', content: '1200' },
            { property: 'og:image:height', content: '630' },
            { property: 'og:image:alt', content: copy.ogImageAlt },
            { property: 'profile:first_name', content: 'Hesam' },
            { property: 'profile:last_name', content: 'Abbasnezhad' },

            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: copy.title },
            { name: 'twitter:description', content: copy.ogDescription },
            { name: 'twitter:image', content: SITE.ogImage },
            { name: 'twitter:image:alt', content: copy.ogImageAlt }
        ],
        script: [
            {
                type: 'application/ld+json',
                innerHTML: JSON.stringify(buildStructuredData(locale))
            }
        ]
    }
}
