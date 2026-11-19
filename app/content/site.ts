import type { Locale } from '~/constants/seo'

/** Labels reused across both locales. */
export type WorkStatus = 'live' | 'private' | 'beta'

export interface NavItem {
    id: string
    label: string
}

export interface Fact {
    label: string
    value: string
}

export interface ApproachItem {
    title: string
    text: string
}

export interface Project {
    name: string
    kind: string
    role: string
    description: string
    tags: string[]
    url?: string
    status: WorkStatus
}

export interface StackGroup {
    label: string
    items: string[]
}

export interface ContactLink {
    label: string
    value: string
    href: string
}

export interface Copy {
    dir: 'ltr' | 'rtl'
    switchLabel: string
    skipLink: string
    brandRole: string
    navLabel: string
    nav: NavItem[]
    hero: {
        eyebrow: string
        titleTop: string
        titleAccent: string
        lede: string
        primaryCta: string
        secondaryCta: string
        stats: { value: string; label: string }[]
        archNote: string
        monogram: string
    }
    about: {
        eyebrow: string
        title: string
        lead: string
        paragraphs: string[]
        facts: Fact[]
    }
    approach: {
        eyebrow: string
        title: string
        lead: string
        items: ApproachItem[]
    }
    work: {
        eyebrow: string
        title: string
        lead: string
        statusLabels: Record<WorkStatus, string>
        visit: string
        projects: Project[]
    }
    stack: {
        eyebrow: string
        title: string
        lead: string
        groups: StackGroup[]
    }
    contact: {
        eyebrow: string
        title: string
        lead: string
        emailLabel: string
        linksTitle: string
        links: ContactLink[]
    }
    footer: {
        tagline: string
        rights: string
        studio: string
    }
}

const en: Copy = {
    dir: 'ltr',
    switchLabel: 'فارسی',
    skipLink: 'Skip to content',
    brandRole: 'Backend developer & project manager',
    navLabel: 'Sections',
    nav: [
        { id: 'about', label: 'About' },
        { id: 'approach', label: 'Approach' },
        { id: 'work', label: 'Work' },
        { id: 'stack', label: 'Stack' },
        { id: 'contact', label: 'Contact' }
    ],
    hero: {
        eyebrow: 'Kowshan studio — Ardabil, Iran',
        titleTop: 'Software built to last,',
        titleAccent: 'like ancient stone.',
        lede: "I'm Hesam Abbasnezhad, a backend developer and project manager. For four years I've built the quiet machinery behind Laravel, PHP and Vue platforms — and kept the teams shipping them on time.",
        primaryCta: 'See the work',
        secondaryCta: 'Start a conversation',
        stats: [
            { value: '4 yrs', label: 'Backend & delivery' },
            { value: '5', label: 'Platforms in production' },
            { value: '3', label: 'Cities, remote-first' }
        ],
        archNote: 'Lapis · gold · girih',
        monogram: 'HA'
    },
    about: {
        eyebrow: 'About',
        title: 'Backend first, delivery always.',
        lead: 'I build the parts users never see, and plan the parts they feel.',
        paragraphs: [
            'I started in backend and stayed: Laravel services, MySQL schemas, REST APIs other teams build on. Four years later the job grew into project management — sizing the work, sequencing releases, and translating what a client actually needs into what the code should do.',
            'I work with a small studio of three developers and one designer, mostly on national-scale platforms in health, energy and hospitality. My favourite kind of project is one where the domain is complicated and the interface stays calm.'
        ],
        facts: [
            { label: 'Role', value: 'Backend developer & project manager' },
            { label: 'Based in', value: 'Ardabil, Iran' },
            { label: 'Working', value: 'Remote across Iran' },
            { label: 'Languages', value: 'Persian, English' },
            { label: 'Everyday tools', value: 'Laravel · Vue · MySQL' }
        ]
    },
    approach: {
        eyebrow: 'Approach',
        title: 'Four habits I keep on every project.',
        lead: 'Nothing exotic. Just the same quiet rules, applied until they become the reason releases land on time.',
        items: [
            {
                title: 'Model the domain first',
                text: 'Schema and nouns before screens. A week spent naming things properly saves a quarter of patching later.'
            },
            {
                title: 'Ship complete slices',
                text: 'Every release is a vertical slice: migration, endpoint, flow, empty and error states, docs. Nothing half-wired sits in main.'
            },
            {
                title: 'Keep the stack boring',
                text: 'Laravel, MySQL, Vue. Proven pieces, few dependencies, upgrades that stay cheap for the next person.'
            },
            {
                title: 'Own the delivery',
                text: 'Estimate honestly, surface risk early, and write the handover document before the last sprint — not after it.'
            }
        ]
    },
    work: {
        eyebrow: 'Selected work',
        title: 'Platforms in daily use.',
        lead: 'Five products across therapy, energy, hospitality and professional qualification. Frontend by the studio; the backend and the delivery were mine.',
        statusLabels: { live: 'Live', private: 'Private', beta: 'In development' },
        visit: 'Visit',
        projects: [
            {
                name: 'Asayroom',
                kind: 'National health platform',
                role: 'Backend & delivery',
                description:
                    'Therapy platform for psychology, psychiatry and counselling: multilingual, in-person and online sessions, video verification, four-level article categories, assessments and in-app payments — built for national and international scale.',
                tags: ['Laravel', 'Vue', 'MySQL'],
                url: 'https://asayroom.ir',
                status: 'live'
            },
            {
                name: 'NIGC CRM',
                kind: 'Enterprise · National Iranian Gas Company',
                role: 'Backend & project management',
                description:
                    'Staff CRM for a national utility, delivered as one of three independent Vue applications, each with its own visual identity and its own permission model.',
                tags: ['Laravel', 'Vue', 'MySQL'],
                url: 'https://crm.nigc-ar.ir/',
                status: 'live'
            },
            {
                name: 'NIGC Field PWA',
                kind: 'Field operations',
                role: 'Backend & delivery',
                description:
                    'Progressive web app for field crews, with offline-tolerant task lists and an in-app photo capture flow that reports straight back to the CRM.',
                tags: ['Laravel', 'Vue', 'PWA'],
                url: 'https://es.nigc-ar.ir/pwa2',
                status: 'live'
            },
            {
                name: 'Cafe Mahour',
                kind: 'Hospitality',
                role: 'Product & backend',
                description:
                    'Reservation-first platform for a cafe built around consultants and brokers: table booking with bundled packages, a full menu, and a two-level admin shared by the cafe owner and the platform owner.',
                tags: ['Laravel', 'Vue', 'MySQL'],
                status: 'private'
            },
            {
                name: 'Baam',
                kind: 'Professional qualification',
                role: 'Backend & project management',
                description:
                    'Qualification platform for inspectors, evaluators and auditors: resume builder, job selection, automatic per-role skill-gap analysis and suggested assessments, courses and articles.',
                tags: ['Laravel', 'Nuxt', 'MySQL'],
                status: 'beta'
            }
        ]
    },
    stack: {
        eyebrow: 'Stack',
        title: 'Small, sharp and well known.',
        lead: 'The tools I reach for without thinking, and the ones I would rather not add.',
        groups: [
            { label: 'Backend', items: ['Laravel', 'PHP', 'MySQL', 'REST APIs'] },
            { label: 'Frontend', items: ['Vue.js', 'Nuxt', 'JavaScript', 'TypeScript'] },
            { label: 'Practice', items: ['Project management', 'Agile delivery', 'Linux', 'Git'] }
        ]
    },
    contact: {
        eyebrow: 'Contact',
        title: 'Let’s build something that lasts.',
        lead: 'Open to contract work, long-term collaboration and the occasional review of a schema that has grown strange. Email is fastest; Telegram is close behind.',
        emailLabel: 'Write an email',
        linksTitle: 'Elsewhere',
        links: [
            { label: 'GitHub', value: 'hesamabbasnezhad', href: 'https://github.com/hesamabbasnezhad' },
            { label: 'Telegram', value: '@hesam746', href: 'https://t.me/hesam746' },
            { label: 'Instagram', value: '@hesam.abbasnezhad', href: 'https://instagram.com/hesam.abbasnezhad' }
        ]
    },
    footer: {
        tagline: 'Set in lapis and gold, after the reliefs of Persepolis.',
        rights: '© 2026 Hesam Abbasnezhad',
        studio: 'Kowshan — three developers, one designer'
    }
}

const fa: Copy = {
    dir: 'rtl',
    switchLabel: 'English',
    skipLink: 'رفتن به محتوا',
    brandRole: 'توسعه‌دهنده بک‌اند و مدیر پروژه',
    navLabel: 'بخش‌ها',
    nav: [
        { id: 'about', label: 'درباره' },
        { id: 'approach', label: 'رویکرد' },
        { id: 'work', label: 'نمونه‌کارها' },
        { id: 'stack', label: 'مهارت‌ها' },
        { id: 'contact', label: 'تماس' }
    ],
    hero: {
        eyebrow: 'استودیو کوشان — اردبیل، ایران',
        titleTop: 'سامانه‌هایی برای ماندن،',
        titleAccent: 'چون سنگِ پارسه.',
        lede: 'من حسام عباس‌نژاد هستم؛ توسعه‌دهنده بک‌اند و مدیر پروژه. چهار سال است چرخ‌دنده‌های خاموشِ پشت پلتفرم‌های لاراول، PHP و Vue را می‌سازم و تیم را تا تحویل همراهی می‌کنم.',
        primaryCta: 'دیدن نمونه‌کارها',
        secondaryCta: 'شروع گفت‌وگو',
        stats: [
            { value: '۴ سال', label: 'بک‌اند و تحویل' },
            { value: '۵', label: 'پلتفرم عملیاتی' },
            { value: '۳', label: 'شهر، کار از راه دور' }
        ],
        archNote: 'لاجورد · طلا · گره‌چینی',
        monogram: 'ح'
    },
    about: {
        eyebrow: 'درباره',
        title: 'بک‌اند اول، تحویل همیشه.',
        lead: 'آن بخشی را می‌سازم که کاربر نمی‌بیند، و آن بخشی را برنامه‌ریزی می‌کنم که حس می‌کند.',
        paragraphs: [
            'از بک‌اند شروع کردم و همان‌جا ماندم: سرویس‌های لاراول، ساختار MySQL و APIهایی که تیم‌های دیگر رویشان می‌سازند. چهار سال بعد، کار به مدیریت پروژه رسید — برآورد حجم کار، ترتیب انتشار، و ترجمهٔ آنچه مشتری واقعاً می‌خواهد به آنچه کد باید انجام دهد.',
            'با استودیویی کوچک کار می‌کنم؛ سه توسعه‌دهنده و یک طراح، بیشتر روی پلتفرم‌های مقیاس ملی در حوزهٔ سلامت، انرژی و مهمان‌پذیری. پروژهٔ محبوبم آن است که دامنه‌اش پیچیده باشد و رابطش آرام بماند.'
        ],
        facts: [
            { label: 'نقش', value: 'توسعه‌دهنده بک‌اند و مدیر پروژه' },
            { label: 'موقعیت', value: 'اردبیل، ایران' },
            { label: 'شیوهٔ کار', value: 'از راه دور در ایران' },
            { label: 'زبان‌ها', value: 'فارسی، انگلیسی' },
            { label: 'ابزار روزانه', value: 'لاراول · Vue · MySQL' }
        ]
    },
    approach: {
        eyebrow: 'رویکرد',
        title: 'چهار عادتی که در هر پروژه نگه می‌دارم.',
        lead: 'هیچ چیز عجیبی نیست؛ همان قواعد آرام، آن‌قدر تکرارشده که دلیلِ به‌موقع رسیدن انتشارها شوند.',
        items: [
            {
                title: 'اول دامنه را مدل کن',
                text: 'ساختار داده و نام‌ها پیش از صفحه‌ها. یک هفته وقت گذاشتن برای نام‌گذاری درست، یک فصل پچ‌کاری بعدی را حذف می‌کند.'
            },
            {
                title: 'برش‌های کامل تحویل بده',
                text: 'هر انتشار یک برش عمودی است: مایگریشن، اندپوینت، جریان کاربر، حالت‌های خالی و خطا، مستندات. هیچ چیز نیمه‌ساخته در شاخهٔ اصلی نمی‌ماند.'
            },
            {
                title: 'پشته را خسته‌کننده نگه دار',
                text: 'لاراول، MySQL، Vue. قطعات آزموده، وابستگی کم و ارتقایی که برای نفر بعدی هم ارزان بماند.'
            },
            {
                title: 'مالک تحویل باش',
                text: 'صادقانه برآورد کن، ریسک را زود بگو و مستند تحویل را پیش از اسپرینت آخر بنویس، نه بعد از آن.'
            }
        ]
    },
    work: {
        eyebrow: 'نمونه‌کارها',
        title: 'پلتفرم‌هایی در استفادهٔ روزانه.',
        lead: 'پنج محصول در حوزه‌های سلامت، انرژی، مهمان‌پذیری و صلاحیت حرفه‌ای. فرانت‌اند کار استودیو بوده؛ بک‌اند و تحویل، کار من.',
        statusLabels: { live: 'فعال', private: 'خصوصی', beta: 'در حال توسعه' },
        visit: 'بازدید',
        projects: [
            {
                name: 'آسای‌روم',
                kind: 'پلتفرم ملی سلامت',
                role: 'بک‌اند و تحویل',
                description:
                    'پلتفرم درمان برای روان‌شناسی، روان‌پزشکی و مشاوره: چندزبانه، حضوری و آنلاین، احراز هویت ویدیویی، دسته‌بندی چهارسطحی مقالات، آزمون‌ها و پرداخت درون‌برنامه‌ای — ساخته‌شده برای مقیاس ملی و بین‌المللی.',
                tags: ['Laravel', 'Vue', 'MySQL'],
                url: 'https://asayroom.ir',
                status: 'live'
            },
            {
                name: 'CRM شرکت گاز',
                kind: 'سازمانی · شرکت ملی گاز ایران',
                role: 'بک‌اند و مدیریت پروژه',
                description:
                    'CRM کارکنان برای یک شرکت ملی، تحویل‌شده به‌عنوان یکی از سه اپلیکیشن مستقل Vue که هرکدام هویت بصری و مدل دسترسی خودش را دارد.',
                tags: ['Laravel', 'Vue', 'MySQL'],
                url: 'https://crm.nigc-ar.ir/',
                status: 'live'
            },
            {
                name: 'PWA عملیات میدانی گاز',
                kind: 'عملیات میدانی',
                role: 'بک‌اند و تحویل',
                description:
                    'اپلیکیشن وب پیشرو برای اکیپ‌های میدانی، با فهرست وظایف مقاوم در قطعی شبکه و جریان ثبت عکس درون‌برنامه‌ای که مستقیم به CRM گزارش می‌دهد.',
                tags: ['Laravel', 'Vue', 'PWA'],
                url: 'https://es.nigc-ar.ir/pwa2',
                status: 'live'
            },
            {
                name: 'کافه ماهور',
                kind: 'مهمان‌پذیری',
                role: 'محصول و بک‌اند',
                description:
                    'پلتفرم رزرو‌محور برای یک کافه، طراحی‌شده حول مشاوران و کارگزاران: رزرو میز با بسته‌های ترکیبی، منوی کامل و پنل مدیریت دو سطحی برای صاحب کافه و صاحب پلتفرم.',
                tags: ['Laravel', 'Vue', 'MySQL'],
                status: 'private'
            },
            {
                name: 'بام',
                kind: 'صلاحیت حرفه‌ای',
                role: 'بک‌اند و مدیریت پروژه',
                description:
                    'پلتفرم احراز صلاحیت برای بازرسان، ارزیابان و حسابرسان: رزومه‌ساز، انتخاب شغل، تحلیل خودکار شکاف مهارتی برای هر نقش و پیشنهاد آزمون، دوره و مقاله.',
                tags: ['Laravel', 'Nuxt', 'MySQL'],
                status: 'beta'
            }
        ]
    },
    stack: {
        eyebrow: 'مهارت‌ها',
        title: 'کوچک، تیز و شناخته‌شده.',
        lead: 'ابزارهایی که بدون فکر کردن به سراغشان می‌روم، و آن‌هایی که ترجیح می‌دهم اضافه نکنم.',
        groups: [
            { label: 'بک‌اند', items: ['لاراول', 'PHP', 'MySQL', 'REST APIs'] },
            { label: 'فرانت‌اند', items: ['Vue.js', 'Nuxt', 'JavaScript', 'TypeScript'] },
            { label: 'روش کار', items: ['مدیریت پروژه', 'تحویل چابک', 'لینوکس', 'Git'] }
        ]
    },
    contact: {
        eyebrow: 'تماس',
        title: 'بیایید چیزی بسازیم که بماند.',
        lead: 'برای پروژه‌های قراردادی، همکاری بلندمدت و گاهی بازبینی ساختار داده‌ای که عجیب بزرگ شده باز هستم. سریع‌ترین راه ایمیل است؛ تلگرام در قدم بعد.',
        emailLabel: 'نوشتن ایمیل',
        linksTitle: 'جای‌های دیگر',
        links: [
            { label: 'GitHub', value: 'hesamabbasnezhad', href: 'https://github.com/hesamabbasnezhad' },
            { label: 'تلگرام', value: '@hesam746', href: 'https://t.me/hesam746' },
            { label: 'اینستاگرام', value: '@hesam.abbasnezhad', href: 'https://instagram.com/hesam.abbasnezhad' }
        ]
    },
    footer: {
        tagline: 'نشسته در لاجورد و طلا، به پیروی از نقش‌برجسته‌های تخت جمشید.',
        rights: '© ۲۰۲۶ حسام عباس‌نژاد',
        studio: 'کوشان — سه توسعه‌دهنده، یک طراح'
    }
}

export const content: Record<Locale, Copy> = { en, fa }

export function useCopy(locale: Locale): Copy {
    return content[locale]
}
