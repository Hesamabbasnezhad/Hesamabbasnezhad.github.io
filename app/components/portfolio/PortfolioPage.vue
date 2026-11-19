<template>
    <div class="site">
        <a class="skip" href="#main">{{ copy.skipLink }}</a>

        <header class="masthead">
            <div class="shell masthead__inner">
                <NuxtLink :to="homePath" class="brand" :aria-label="brandName">
                    <svg class="brand__star" viewBox="0 0 40 40" aria-hidden="true">
                        <g fill="none" stroke="currentColor" stroke-width="1">
                            <rect x="9" y="9" width="22" height="22" />
                            <rect x="9" y="9" width="22" height="22" transform="rotate(45 20 20)" />
                        </g>
                    </svg>
                    <span class="brand__text">
                        <span class="brand__name">{{ brandName }}</span>
                        <span class="brand__role">{{ copy.brandRole }}</span>
                    </span>
                </NuxtLink>

                <nav class="nav" :aria-label="copy.navLabel">
                    <ul>
                        <li v-for="item in copy.nav" :key="item.id">
                            <a :href="`#${item.id}`">{{ item.label }}</a>
                        </li>
                    </ul>
                </nav>

                <NuxtLink
                    class="lang"
                    :to="otherPath"
                    :hreflang="locale === 'en' ? 'fa' : 'en'"
                    :lang="locale === 'en' ? 'fa' : 'en'"
                >
                    <span aria-hidden="true">◈</span>
                    {{ copy.switchLabel }}
                </NuxtLink>
            </div>
        </header>

        <main id="main">
            <section class="hero">
                <div class="hero__lattice pattern-girih" aria-hidden="true"></div>

                <div class="shell hero__grid">
                    <div class="hero__copy">
                        <p class="eyebrow">{{ copy.hero.eyebrow }}</p>

                        <h1 class="hero__title">
                            <span class="hero__line">{{ copy.hero.titleTop }}</span>
                            <span class="hero__line hero__line--accent">{{ copy.hero.titleAccent }}</span>
                        </h1>

                        <p class="hero__lede">{{ copy.hero.lede }}</p>

                        <div class="hero__actions">
                            <a class="btn btn--primary" href="#work">
                                {{ copy.hero.primaryCta }}
                                <span aria-hidden="true">↓</span>
                            </a>
                            <a class="btn btn--ghost" href="#contact">{{ copy.hero.secondaryCta }}</a>
                        </div>

                        <dl class="stats">
                            <div v-for="stat in copy.hero.stats" :key="stat.label" class="stats__item">
                                <dt>{{ stat.label }}</dt>
                                <dd>{{ stat.value }}</dd>
                            </div>
                        </dl>
                    </div>

                    <div class="hero__art">
                        <div class="hero__halo" aria-hidden="true"></div>

                        <svg class="arch" viewBox="0 0 440 584" role="img" :aria-label="copy.hero.archNote">
                            <defs>
                                <linearGradient id="archFill" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stop-color="#1c3368" />
                                    <stop offset="55%" stop-color="#101d3d" />
                                    <stop offset="100%" stop-color="#070e24" />
                                </linearGradient>
                                <linearGradient id="goldStroke" x1="0" y1="0" x2="1" y2="1">
                                    <stop offset="0%" stop-color="#f0d79b" />
                                    <stop offset="55%" stop-color="#c8a24c" />
                                    <stop offset="100%" stop-color="#9e7d2e" />
                                </linearGradient>
                                <pattern
                                    id="girihTile"
                                    width="72"
                                    height="72"
                                    patternUnits="userSpaceOnUse"
                                >
                                    <path
                                        d="M68 36 48.5 41.2 58.6 58.6 41.2 48.5 36 68 30.8 48.5 13.4 58.6 23.5 41.2 4 36 23.5 30.8 13.4 13.4 30.8 23.5 36 4 41.2 23.5 58.6 13.4 48.5 30.8Z"
                                        fill="none"
                                        stroke="#c8a24c"
                                        stroke-width="0.7"
                                        opacity="0.4"
                                    />
                                </pattern>
                            </defs>

                            <!-- Cuneiform ticks flanking the arch -->
                            <g class="arch__ticks" stroke="url(#goldStroke)" stroke-width="1" aria-hidden="true">
                                <template v-for="tick in 7" :key="tick">
                                    <line :x1="8" :y1="200 + tick * 30" :x2="32" :y2="200 + tick * 30" />
                                    <line :x1="408" :y1="200 + tick * 30" :x2="432" :y2="200 + tick * 30" />
                                </template>
                            </g>

                            <!-- Outer arch, filled with lapis -->
                            <path
                                d="M52 548 V256 C52 138 132 52 220 52 C308 52 388 138 388 256 V548 Z"
                                fill="url(#archFill)"
                                stroke="url(#goldStroke)"
                                stroke-width="1.4"
                            />

                            <!-- Girih lattice inside the arch -->
                            <path
                                d="M52 548 V256 C52 138 132 52 220 52 C308 52 388 138 388 256 V548 Z"
                                fill="url(#girihTile)"
                                opacity="0.55"
                            />

                            <!-- Inner arch line -->
                            <path
                                d="M78 548 V260 C78 152 142 78 220 78 C298 78 362 152 362 260 V548"
                                fill="none"
                                stroke="#c8a24c"
                                stroke-width="0.9"
                                opacity="0.7"
                            />

                            <!-- Columns and capitals -->
                            <g stroke="url(#goldStroke)" stroke-width="1" fill="none" opacity="0.75">
                                <line x1="100" y1="300" x2="100" y2="540" />
                                <line x1="340" y1="300" x2="340" y2="540" />
                                <rect x="94" y="292" width="12" height="9" />
                                <rect x="334" y="292" width="12" height="9" />
                            </g>

                            <!-- Eight-pointed star medallion -->
                            <g class="arch__medallion">
                                <circle cx="220" cy="206" r="86" fill="url(#archFill)" opacity="0.55" />
                                <g
                                    fill="none"
                                    stroke="url(#goldStroke)"
                                    stroke-width="1.2"
                                    transform="translate(220 206)"
                                >
                                    <rect x="-58" y="-58" width="116" height="116" />
                                    <rect x="-58" y="-58" width="116" height="116" transform="rotate(45)" />
                                    <circle r="34" stroke-width="0.8" opacity="0.8" />
                                </g>
                                <text x="220" y="224" text-anchor="middle" class="arch__monogram">
                                    {{ copy.hero.monogram }}
                                </text>
                            </g>

                            <!-- Base plinth -->
                            <g stroke="url(#goldStroke)" fill="none">
                                <line x1="24" y1="548" x2="416" y2="548" stroke-width="1.6" />
                                <line x1="44" y1="562" x2="396" y2="562" stroke-width="0.9" opacity="0.6" />
                                <path d="M220 554 l10 0 -5 8 z" fill="#c8a24c" stroke="none" />
                            </g>
                        </svg>

                        <p class="hero__caption">{{ copy.hero.archNote }}</p>
                    </div>
                </div>

                <div class="hero__baseline" aria-hidden="true">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </section>

            <section id="about" class="section">
                <div class="shell section__grid">
                    <header class="section__head">
                        <span class="section__num" aria-hidden="true">{{ pad(1) }}</span>
                        <p class="eyebrow">{{ copy.about.eyebrow }}</p>
                        <h2 class="section__title">{{ copy.about.title }}</h2>
                        <p class="section__lead">{{ copy.about.lead }}</p>
                    </header>

                    <div class="section__body">
                        <div class="prose">
                            <p v-for="(paragraph, index) in copy.about.paragraphs" :key="index">
                                {{ paragraph }}
                            </p>
                        </div>

                        <dl class="facts">
                            <div v-for="fact in copy.about.facts" :key="fact.label" class="facts__item">
                                <dt>{{ fact.label }}</dt>
                                <dd>{{ fact.value }}</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </section>

            <section id="approach" class="section section--alt">
                <div class="shell section__grid">
                    <header class="section__head">
                        <span class="section__num" aria-hidden="true">{{ pad(2) }}</span>
                        <p class="eyebrow">{{ copy.approach.eyebrow }}</p>
                        <h2 class="section__title">{{ copy.approach.title }}</h2>
                        <p class="section__lead">{{ copy.approach.lead }}</p>
                    </header>

                    <div class="section__body">
                        <ol class="approach">
                            <li
                                v-for="(item, index) in copy.approach.items"
                                :key="item.title"
                                class="approach__card"
                            >
                                <span class="approach__num" aria-hidden="true">{{ pad(index + 1) }}</span>
                                <h3 class="approach__title">{{ item.title }}</h3>
                                <p class="approach__text">{{ item.text }}</p>
                            </li>
                        </ol>
                    </div>
                </div>
            </section>

            <section id="work" class="section">
                <div class="shell section__grid">
                    <header class="section__head">
                        <span class="section__num" aria-hidden="true">{{ pad(3) }}</span>
                        <p class="eyebrow">{{ copy.work.eyebrow }}</p>
                        <h2 class="section__title">{{ copy.work.title }}</h2>
                        <p class="section__lead">{{ copy.work.lead }}</p>
                    </header>

                    <div class="section__body">
                        <div class="work">
                            <article
                                v-for="(project, index) in copy.work.projects"
                                :key="project.name"
                                class="work__row"
                            >
                                <span class="work__index" aria-hidden="true">{{ pad(index + 1) }}</span>

                                <div class="work__main">
                                    <div class="work__top">
                                        <h3 class="work__name">{{ project.name }}</h3>
                                        <span class="status" :data-status="project.status">
                                            {{ copy.work.statusLabels[project.status] }}
                                        </span>
                                    </div>

                                    <p class="work__kind">{{ project.kind }} — {{ project.role }}</p>
                                    <p class="work__desc">{{ project.description }}</p>

                                    <ul class="tags">
                                        <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
                                    </ul>
                                </div>

                                <a
                                    v-if="project.url"
                                    class="work__link"
                                    :href="project.url"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {{ copy.work.visit }}
                                    <span aria-hidden="true">↗</span>
                                    <span class="sr-only">— {{ project.name }}</span>
                                </a>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section id="stack" class="section section--alt">
                <div class="shell section__grid">
                    <header class="section__head">
                        <span class="section__num" aria-hidden="true">{{ pad(4) }}</span>
                        <p class="eyebrow">{{ copy.stack.eyebrow }}</p>
                        <h2 class="section__title">{{ copy.stack.title }}</h2>
                        <p class="section__lead">{{ copy.stack.lead }}</p>
                    </header>

                    <div class="section__body">
                        <div class="stack">
                            <div v-for="group in copy.stack.groups" :key="group.label" class="stack__group">
                                <h3 class="stack__label">{{ group.label }}</h3>
                                <ul class="stack__list">
                                    <li v-for="entry in group.items" :key="entry">{{ entry }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" class="contact">
                <div class="contact__lattice pattern-girih" aria-hidden="true"></div>

                <div class="shell contact__grid">
                    <div class="contact__intro">
                        <span class="section__num" aria-hidden="true">{{ pad(5) }}</span>
                        <p class="eyebrow">{{ copy.contact.eyebrow }}</p>
                        <h2 class="contact__title">{{ copy.contact.title }}</h2>
                        <p class="contact__lead">{{ copy.contact.lead }}</p>

                        <a class="contact__email" :href="`mailto:${SITE.email}`">
                            {{ SITE.email }}
                            <span aria-hidden="true">→</span>
                        </a>
                    </div>

                    <div class="contact__links">
                        <h3 class="contact__linksTitle">{{ copy.contact.linksTitle }}</h3>
                        <ul>
                            <li v-for="link in copy.contact.links" :key="link.label">
                                <a :href="link.href" target="_blank" rel="noopener noreferrer">
                                    <span class="contact__label">{{ link.label }}</span>
                                    <span class="contact__value">{{ link.value }}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>

        <footer class="footer">
            <div class="shell footer__inner">
                <p class="footer__tagline">{{ copy.footer.tagline }}</p>
                <div class="footer__meta">
                    <span>{{ copy.footer.studio }}</span>
                    <span>{{ copy.footer.rights }}</span>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup lang="ts">
import type { Locale } from '~/constants/seo'
import { SITE } from '~/constants/seo'
import { content } from '~/content/site'

const props = defineProps<{ locale: Locale }>()

const copy = computed(() => content[props.locale])
const homePath = computed(() => (props.locale === 'fa' ? '/fa/' : '/'))
const otherPath = computed(() => (props.locale === 'en' ? '/fa/' : '/'))
const brandName = computed(() => (props.locale === 'fa' ? SITE.nativeName : SITE.name))

/** 01, 02… in Latin; ۱, ۲… in Persian. */
function pad(value: number): string {
    const digits = props.locale === 'fa' ? '۰۱۲۳۴۵۶۷۸۹' : '0123456789'
    return String(value)
        .padStart(2, '0')
        .replace(/\d/g, (digit) => digits[Number(digit)] ?? digit)
}
</script>

<style scoped>
.site {
    display: flex;
    flex-direction: column;
    min-height: 100dvh;
    background: var(--parchment-50);
}

/* ---------------------------------------------------------------- skip link */
.skip {
    position: fixed;
    inset-block-start: 0.5rem;
    inset-inline-start: 0.5rem;
    z-index: 100;
    padding: 0.55rem 1rem;
    background: var(--gold-400);
    color: var(--lapis-900);
    font-size: 0.85rem;
    border-radius: 2px;
    transform: translateY(-200%);
    transition: transform 160ms var(--ease);
}

.skip:focus-visible {
    transform: translateY(0);
}

/* ----------------------------------------------------------------- masthead */
.masthead {
    position: sticky;
    inset-block-start: 0;
    z-index: 50;
    background: color-mix(in srgb, var(--lapis-950) 90%, transparent);
    backdrop-filter: blur(12px);
    border-bottom: var(--rule);
    color: var(--parchment-100);
}

.masthead__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: clamp(1rem, 3vw, 2.5rem);
    min-height: 74px;
}

.brand {
    display: inline-flex;
    align-items: center;
    gap: 0.7rem;
    color: var(--gold-300);
}

.brand__star {
    width: 30px;
    height: 30px;
    flex: none;
    transition: transform 600ms var(--ease);
}

.brand:hover .brand__star {
    transform: rotate(45deg);
}

.brand__text {
    display: flex;
    flex-direction: column;
    line-height: 1.25;
}

.brand__name {
    font-family: var(--font-display);
    font-size: 1.08rem;
    font-weight: 600;
    letter-spacing: 0.01em;
    color: var(--parchment-50);
}

.brand__role {
    font-size: 0.66rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: color-mix(in srgb, var(--gold-300) 68%, transparent);
}

.nav ul {
    display: flex;
    gap: clamp(1rem, 2.4vw, 1.9rem);
}

.nav a {
    position: relative;
    font-size: 0.82rem;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    color: color-mix(in srgb, var(--parchment-100) 72%, transparent);
    padding-block: 0.3rem;
    transition: color 180ms var(--ease);
}

.nav a::after {
    content: '';
    position: absolute;
    inset-inline: 0;
    inset-block-end: -2px;
    height: 1px;
    background: var(--gold-400);
    transform: scaleX(0);
    transform-origin: inline-start;
    transition: transform 260ms var(--ease);
}

.nav a:hover {
    color: var(--gold-300);
}

.nav a:hover::after {
    transform: scaleX(1);
}

.lang {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.4rem 0.75rem;
    border: 1px solid color-mix(in srgb, var(--gold-500) 45%, transparent);
    border-radius: 2px;
    font-size: 0.78rem;
    letter-spacing: 0.06em;
    color: var(--gold-300);
    transition:
        background 180ms var(--ease),
        border-color 180ms var(--ease);
}

.lang:hover {
    background: color-mix(in srgb, var(--gold-500) 14%, transparent);
    border-color: var(--gold-400);
}

.lang span {
    font-size: 0.65rem;
    opacity: 0.7;
}

/* --------------------------------------------------------------------- hero */
.hero {
    position: relative;
    overflow: hidden;
    isolation: isolate;
    background:
        radial-gradient(120% 90% at 78% 8%, #1b3369 0%, transparent 58%),
        linear-gradient(180deg, var(--lapis-950) 0%, var(--lapis-900) 58%, var(--lapis-800) 100%);
    color: var(--parchment-100);
}

.hero__lattice {
    position: absolute;
    inset: 0;
    z-index: -1;
    opacity: 0.1;
    mask-image: radial-gradient(80% 70% at 70% 30%, #000 0%, transparent 75%);
}

.hero__grid {
    display: grid;
    grid-template-columns: minmax(0, 1.12fr) minmax(0, 0.88fr);
    gap: clamp(2rem, 5vw, 4.5rem);
    align-items: center;
    padding-block: clamp(3.25rem, 7vw, 5.75rem) clamp(2rem, 4vw, 3rem);
}

.eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: var(--gold-500);
}

.eyebrow::before {
    content: '';
    width: 1.6rem;
    height: 1px;
    background: currentColor;
    opacity: 0.7;
}

.hero__title {
    margin-block: 1.1rem 1.4rem;
    font-family: var(--font-display);
    font-weight: 600;
    font-size: clamp(2.5rem, 5.3vw, 4.15rem);
    line-height: 1.03;
    letter-spacing: -0.015em;
    color: var(--parchment-50);
    text-wrap: balance;
}

.hero__line {
    display: block;
}

.hero__line--accent {
    color: var(--gold-300);
    font-style: italic;
}

.hero__lede {
    max-width: 46ch;
    color: color-mix(in srgb, var(--parchment-100) 78%, transparent);
    font-size: 1.02rem;
    line-height: 1.75;
    text-wrap: pretty;
}

.hero__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.85rem;
    margin-block: 2rem 2.6rem;
}

.btn {
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
    padding: 0.85rem 1.5rem;
    font-family: var(--font-body);
    font-size: 0.84rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    clip-path: polygon(0 0, calc(100% - 11px) 0, 100% 11px, 100% 100%, 11px 100%, 0 calc(100% - 11px));
    transition:
        transform 200ms var(--ease),
        filter 200ms var(--ease),
        background 200ms var(--ease);
}

.btn--primary {
    background: linear-gradient(135deg, var(--gold-300), var(--gold-500));
    color: var(--lapis-900);
}

.btn--primary:hover {
    filter: brightness(1.06);
    transform: translateY(-2px);
}

.btn--ghost {
    background: color-mix(in srgb, var(--gold-500) 6%, transparent);
    color: var(--gold-300);
    box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--gold-500) 60%, transparent);
}

.btn--ghost:hover {
    background: color-mix(in srgb, var(--gold-500) 16%, transparent);
    transform: translateY(-2px);
}

.stats {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.2rem;
    padding-block-start: 1.5rem;
    border-top: 1px solid color-mix(in srgb, var(--gold-500) 28%, transparent);
}

.stats__item {
    display: flex;
    flex-direction: column-reverse;
    gap: 0.2rem;
}

.stats__item dt {
    font-size: 0.68rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: color-mix(in srgb, var(--parchment-100) 55%, transparent);
}

.stats__item dd {
    margin: 0;
    font-family: var(--font-display);
    font-size: 1.7rem;
    font-weight: 600;
    color: var(--gold-300);
    line-height: 1.2;
}

/* --------------------------------------------------------------- arch artwork */
.hero__art {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.hero__halo {
    position: absolute;
    inset-block-start: 6%;
    width: 78%;
    aspect-ratio: 1;
    border-radius: 50%;
    background: radial-gradient(circle, color-mix(in srgb, var(--gold-500) 26%, transparent) 0%, transparent 68%);
    filter: blur(28px);
    animation: halo 11s ease-in-out infinite;
}

.arch {
    position: relative;
    width: min(100%, 420px);
    height: auto;
    filter: drop-shadow(0 26px 48px rgba(3, 8, 22, 0.55));
}

.arch__ticks {
    opacity: 0.55;
}

.arch__monogram {
    font-family: var(--font-display);
    font-size: 54px;
    font-weight: 600;
    fill: var(--gold-300);
    letter-spacing: 0.02em;
}

.hero__caption {
    font-size: 0.66rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: color-mix(in srgb, var(--gold-300) 55%, transparent);
}

.hero__baseline {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.9rem;
    max-width: var(--shell);
    margin-inline: auto;
    padding-inline: var(--gutter);
}

.hero__baseline span {
    height: 1px;
    flex: 1;
    background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--gold-500) 55%, transparent), transparent);
}

.hero__baseline span:nth-child(2) {
    flex: none;
    width: 7px;
    height: 7px;
    transform: rotate(45deg);
    background: var(--gold-500);
}

@keyframes halo {
    0%,
    100% {
        opacity: 0.55;
        transform: scale(1);
    }
    50% {
        opacity: 0.9;
        transform: scale(1.06);
    }
}

/* ------------------------------------------------------------------ sections */
.section {
    position: relative;
    padding-block: clamp(3.5rem, 7vw, 6.25rem);
    border-top: var(--rule);
    scroll-margin-block-start: 86px;
}

.section--alt {
    background: var(--parchment-100);
}

.section__grid {
    display: grid;
    grid-template-columns: minmax(0, 0.36fr) minmax(0, 0.64fr);
    gap: clamp(2rem, 5vw, 4.5rem);
    align-items: start;
}

.section__head {
    position: sticky;
    inset-block-start: 108px;
}

.section__num {
    display: block;
    font-family: var(--font-display);
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 0.28em;
    color: var(--gold-600);
    margin-block-end: 1rem;
}

.section__title {
    margin-block: 0.7rem 1rem;
    font-family: var(--font-display);
    font-weight: 600;
    font-size: clamp(1.75rem, 3.1vw, 2.5rem);
    line-height: 1.12;
    letter-spacing: -0.012em;
    color: var(--ink);
    text-wrap: balance;
}

.section__lead {
    color: var(--ink-soft);
    font-size: 0.96rem;
    max-width: 38ch;
}

.section__body {
    min-width: 0;
}

.prose p {
    color: var(--ink-soft);
    line-height: 1.85;
    max-width: 64ch;
}

.prose p + p {
    margin-block-start: 1rem;
}

.prose p:first-child::first-letter {
    float: inline-start;
    font-family: var(--font-display);
    font-size: 3.3rem;
    line-height: 0.86;
    padding-inline-end: 0.6rem;
    padding-block-start: 0.3rem;
    color: var(--gold-600);
}

/* --------------------------------------------------------------------- facts */
.facts {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1px;
    margin-block-start: clamp(1.8rem, 3vw, 2.6rem);
    background: color-mix(in srgb, var(--gold-500) 38%, transparent);
    border: 1px solid color-mix(in srgb, var(--gold-500) 38%, transparent);
}

.facts__item {
    background: var(--parchment-50);
    padding: 1rem 1.15rem;
}

.section--alt .facts__item {
    background: var(--parchment-100);
}

.facts__item dt {
    font-size: 0.66rem;
    letter-spacing: 0.17em;
    text-transform: uppercase;
    color: var(--gold-600);
}

.facts__item dd {
    margin: 0.3rem 0 0;
    font-size: 0.94rem;
    color: var(--ink);
    line-height: 1.5;
}

/* ------------------------------------------------------------------ approach */
.approach {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1px;
    background: color-mix(in srgb, var(--gold-500) 32%, transparent);
    border: 1px solid color-mix(in srgb, var(--gold-500) 32%, transparent);
}

.approach__card {
    position: relative;
    background: var(--parchment-50);
    padding: clamp(1.4rem, 2.6vw, 1.9rem);
    transition: background 240ms var(--ease);
}

.approach__card:hover {
    background: #fffdf6;
}

.approach__num {
    display: block;
    font-family: var(--font-display);
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 0.26em;
    color: var(--turquoise-600);
}

.approach__title {
    margin-block: 0.65rem 0.5rem;
    font-family: var(--font-display);
    font-size: 1.32rem;
    font-weight: 600;
    line-height: 1.25;
    color: var(--ink);
}

.approach__text {
    font-size: 0.93rem;
    line-height: 1.75;
    color: var(--ink-soft);
}

/* ---------------------------------------------------------------------- work */
.work__row {
    display: grid;
    grid-template-columns: 3rem minmax(0, 1fr) auto;
    gap: clamp(0.9rem, 2.4vw, 1.8rem);
    padding-block: clamp(1.5rem, 3vw, 2.1rem);
    border-top: var(--rule);
}

.work__row:last-child {
    border-bottom: var(--rule);
}

.work__index {
    font-family: var(--font-display);
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    color: var(--gold-500);
    padding-block-start: 0.45rem;
}

.work__top {
    display: flex;
    align-items: baseline;
    gap: 0.75rem;
    flex-wrap: wrap;
}

.work__name {
    font-family: var(--font-display);
    font-size: clamp(1.35rem, 2.3vw, 1.65rem);
    font-weight: 600;
    line-height: 1.2;
    color: var(--ink);
}

.work__kind {
    margin-block-start: 0.35rem;
    font-size: 0.72rem;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    color: var(--turquoise-600);
}

.work__desc {
    margin-block-start: 0.75rem;
    font-size: 0.95rem;
    line-height: 1.78;
    color: var(--ink-soft);
    max-width: 64ch;
}

.status {
    font-size: 0.62rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    padding: 0.16rem 0.5rem;
    border: 1px solid color-mix(in srgb, var(--gold-500) 55%, transparent);
    color: var(--gold-600);
    white-space: nowrap;
}

.status[data-status='live'] {
    border-color: color-mix(in srgb, var(--turquoise-500) 60%, transparent);
    color: var(--turquoise-600);
}

.status[data-status='beta'] {
    color: var(--gold-600);
    border-style: dashed;
}

.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-block-start: 0.95rem;
}

.tags li {
    font-size: 0.7rem;
    letter-spacing: 0.06em;
    padding: 0.18rem 0.5rem;
    color: var(--ink-soft);
    border: 1px solid color-mix(in srgb, var(--ink) 14%, transparent);
}

.work__link {
    align-self: start;
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.72rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--gold-600);
    padding-block-start: 0.45rem;
    border-bottom: 1px solid transparent;
    transition:
        color 200ms var(--ease),
        border-color 200ms var(--ease);
}

.work__link:hover {
    color: var(--ink);
    border-color: var(--gold-500);
}

/* --------------------------------------------------------------------- stack */
.stack {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: clamp(1.5rem, 3vw, 2.5rem);
}

.stack__label {
    padding-block-end: 0.55rem;
    border-bottom: var(--rule);
    font-family: var(--font-display);
    font-size: 1.05rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    color: var(--gold-600);
}

.stack__list li {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding-block: 0.42rem;
    font-size: 0.93rem;
    color: var(--ink-soft);
    border-bottom: 1px solid color-mix(in srgb, var(--ink) 7%, transparent);
}

.stack__list li::before {
    content: '';
    flex: none;
    width: 5px;
    height: 5px;
    background: var(--gold-500);
    transform: rotate(45deg);
}

/* ------------------------------------------------------------------- contact */
.contact {
    position: relative;
    overflow: hidden;
    isolation: isolate;
    border-top: var(--rule);
    background:
        radial-gradient(90% 80% at 15% 0%, #172a55 0%, transparent 60%),
        linear-gradient(180deg, var(--lapis-900), var(--lapis-950));
    color: var(--parchment-100);
    padding-block: clamp(4rem, 8vw, 7rem);
    scroll-margin-block-start: 86px;
}

.contact__lattice {
    position: absolute;
    inset: 0;
    z-index: -1;
    opacity: 0.12;
    mask-image: radial-gradient(70% 80% at 80% 20%, #000 0%, transparent 72%);
}

.contact__grid {
    display: grid;
    grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
    gap: clamp(2.5rem, 6vw, 5rem);
    align-items: end;
}

.contact .section__num {
    color: color-mix(in srgb, var(--gold-300) 70%, transparent);
}

.contact__title {
    margin-block: 0.8rem 1rem;
    font-family: var(--font-display);
    font-weight: 600;
    font-size: clamp(2.1rem, 4.4vw, 3.3rem);
    line-height: 1.08;
    letter-spacing: -0.015em;
    color: var(--parchment-50);
    text-wrap: balance;
}

.contact__lead {
    max-width: 50ch;
    font-size: 0.98rem;
    line-height: 1.8;
    color: color-mix(in srgb, var(--parchment-100) 74%, transparent);
}

.contact__email {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    margin-block-start: 1.8rem;
    font-family: var(--font-display);
    font-size: clamp(1.25rem, 2.7vw, 1.85rem);
    color: var(--gold-300);
    border-bottom: 1px solid color-mix(in srgb, var(--gold-400) 45%, transparent);
    padding-block-end: 0.25rem;
    transition:
        border-color 200ms var(--ease),
        color 200ms var(--ease);
    word-break: break-word;
}

.contact__email:hover {
    color: var(--parchment-50);
    border-color: var(--gold-300);
}

.contact__linksTitle {
    font-size: 0.68rem;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: color-mix(in srgb, var(--gold-300) 72%, transparent);
    margin-block-end: 0.9rem;
}

.contact__links ul {
    border-top: 1px solid color-mix(in srgb, var(--gold-500) 22%, transparent);
}

.contact__links li {
    border-bottom: 1px solid color-mix(in srgb, var(--gold-500) 22%, transparent);
}

.contact__links a {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;
    padding-block: 0.8rem;
    color: color-mix(in srgb, var(--parchment-100) 82%, transparent);
    transition: color 200ms var(--ease);
}

.contact__links a:hover {
    color: var(--gold-300);
}

.contact__label {
    font-size: 0.72rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: color-mix(in srgb, var(--parchment-100) 50%, transparent);
}

.contact__value {
    font-size: 0.9rem;
}

/* -------------------------------------------------------------------- footer */
.footer {
    background: var(--lapis-950);
    color: color-mix(in srgb, var(--parchment-100) 52%, transparent);
    border-top: 1px solid color-mix(in srgb, var(--gold-500) 20%, transparent);
    padding-block: 1.9rem;
    font-size: 0.78rem;
}

.footer__inner {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 0.8rem;
}

.footer__tagline {
    font-family: var(--font-display);
    font-size: 0.95rem;
    color: color-mix(in srgb, var(--gold-300) 72%, transparent);
}

.footer__meta {
    display: flex;
    flex-wrap: wrap;
    gap: 1.2rem;
    letter-spacing: 0.05em;
}

/* -------------------------------------------------------- script direction */
:lang(fa) .brand__role,
:lang(fa) .nav a,
:lang(fa) .eyebrow,
:lang(fa) .stats__item dt,
:lang(fa) .facts__item dt,
:lang(fa) .work__kind,
:lang(fa) .status,
:lang(fa) .work__link,
:lang(fa) .contact__linksTitle,
:lang(fa) .contact__label,
:lang(fa) .btn,
:lang(fa) .hero__caption {
    letter-spacing: 0;
    text-transform: none;
}

:lang(fa) .hero__title,
:lang(fa) .contact__title,
:lang(fa) .section__title {
    line-height: 1.35;
}

:lang(fa) .prose p:first-child::first-letter {
    float: none;
    font-size: inherit;
    line-height: inherit;
    padding: 0;
    color: inherit;
}

:lang(fa) .work__row {
    grid-template-columns: 3rem minmax(0, 1fr) auto;
}

/* ---------------------------------------------------------------- responsive */
@media (max-width: 960px) {
    .hero__grid,
    .section__grid,
    .contact__grid {
        grid-template-columns: minmax(0, 1fr);
    }

    .hero__copy {
        order: 1;
    }

    .hero__art {
        order: 2;
        width: min(100%, 340px);
        margin-inline: auto;
    }

    .section__head {
        position: static;
    }

    .section__lead {
        max-width: 56ch;
    }

    .contact__grid {
        align-items: start;
    }
}

@media (max-width: 880px) {
    .masthead__inner {
        flex-wrap: wrap;
        row-gap: 0.5rem;
        padding-block: 0.7rem;
    }

    .nav {
        order: 3;
        width: 100%;
        overflow-x: auto;
        scrollbar-width: none;
    }

    .nav::-webkit-scrollbar {
        display: none;
    }

    .nav ul {
        gap: 1.15rem;
        padding-block-end: 0.15rem;
    }

    .brand__role {
        display: none;
    }
}

@media (max-width: 620px) {
    .hero__title {
        font-size: clamp(2.1rem, 9vw, 2.9rem);
    }

    .stats {
        gap: 0.8rem;
    }

    .stats__item dd {
        font-size: 1.35rem;
    }

    .approach,
    .stack {
        grid-template-columns: minmax(0, 1fr);
    }

    .facts {
        grid-template-columns: minmax(0, 1fr);
    }

    .work__row {
        grid-template-columns: 2rem minmax(0, 1fr);
    }

    .work__link {
        grid-column: 2;
        justify-self: start;
        padding-block-start: 0.6rem;
    }

    .footer__inner {
        flex-direction: column;
        align-items: flex-start;
    }
}
</style>
