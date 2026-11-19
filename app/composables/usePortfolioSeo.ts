import type { Locale } from '~/constants/seo'
import { headForLocale } from '~/constants/seo'

/**
 * Applies the locale-aware <head>: title, description, Open Graph, canonical,
 * hreflang alternates and the JSON-LD graph for this page.
 */
export function usePortfolioSeo(locale: Locale) {
    const { app } = useRuntimeConfig()
    useHead(headForLocale(locale, app.baseURL))
}
