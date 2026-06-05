import { useMemo, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  Search,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Clock,
  Award,
  Sparkles,
  ChevronRight,
  Navigation,
  MessageCircle,
  Languages,
} from 'lucide-react';
import { services, type Service } from './components/services-data';
import { ServiceCard } from './components/ServiceCard';
import { ServiceModal } from './components/ServiceModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileActionBar } from './components/MobileActionBar';
import { LangContext, ui, MAPS_URL, PHONE, EMAIL, waLink, type Lang } from './components/i18n';

export default function App() {
  const [lang, setLang] = useState<Lang>('mr');
  const [query, setQuery] = useState('');
  const [active, setActive] = useState<Service | null>(null);
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 800], [0, 180]);
  const yMid = useTransform(scrollY, [0, 800], [0, 80]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return services;
    return services.filter(
      (s) =>
        s.title.mr.toLowerCase().includes(q) ||
        s.title.en.toLowerCase().includes(q) ||
        s.description.mr.toLowerCase().includes(q) ||
        s.description.en.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <div
        className="min-h-screen w-full max-w-[100vw] bg-background text-foreground relative overflow-x-clip pb-[96px] md:pb-0"
        style={{ WebkitOverflowScrolling: 'touch', scrollBehavior: 'smooth' }}
      >
        {/* MARKER-MAKE-KIT-INVOKED */}

        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10 opacity-[0.5]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(30,58,95,0.07) 1px, transparent 1px)',
            backgroundSize: '22px 22px',
          }}
        />

        <div className="w-full bg-[var(--primary)] text-white/90 text-xs">
          <div className="max-w-7xl mx-auto px-5 py-2 flex flex-wrap items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5" />
              {lang === 'mr' ? 'शासकीय अधिकृत सेवा केंद्र · MahaOnline' : 'Government-authorized service center · MahaOnline'}
            </span>
            <span className="inline-flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--sage)] animate-pulse" />
                {ui.open247[lang]}
              </span>
              <span className="inline-flex items-center gap-1.5"><Phone className="h-3.5 w-3.5" /> {PHONE}</span>
            </span>
          </div>
        </div>

        <header className="sticky top-0 z-30 bg-background/85 backdrop-blur-xl border-b border-border">
          <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[#2c5282] flex items-center justify-center ring-1 ring-[var(--primary)]/20">
                <Award className="h-5 w-5 text-white" strokeWidth={2.2} />
                <span className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full bg-[var(--sage)] ring-2 ring-background" />
              </div>
              <div>
                <p className="text-foreground leading-tight">{ui.brand[lang]}</p>
                <p className="text-[11px] text-muted-foreground tracking-wide">{ui.subBrand[lang]} · {ui.type[lang]}</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-7 text-sm text-slate-600">
              <a href="#services" className="hover:text-[var(--primary)] transition-colors">{ui.navServices[lang]}</a>
              <a href="#about" className="hover:text-[var(--primary)] transition-colors">{ui.navAbout[lang]}</a>
              <a href="#contact" className="hover:text-[var(--primary)] transition-colors">{ui.navContact[lang]}</a>
            </nav>

            <div className="flex items-center gap-2.5">
              <div className="relative flex items-center gap-1 p-1 rounded-full bg-secondary ring-1 ring-border">
                <Languages className="h-3.5 w-3.5 text-muted-foreground ml-2" />
                {(['mr', 'en'] as Lang[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className="relative z-10 px-3 py-1.5 text-xs tracking-wide"
                  >
                    {lang === l && (
                      <motion.span
                        layoutId="lang-pill"
                        className="absolute inset-0 rounded-full bg-[var(--primary)]"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className={`relative ${lang === l ? 'text-white' : 'text-slate-600'}`}>
                      {l === 'mr' ? 'मराठी' : 'EN'}
                    </span>
                  </button>
                ))}
              </div>
              <a
                href={`tel:${PHONE}`}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--primary)] text-white text-sm hover:bg-[#16304f] transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="hidden lg:inline">{ui.callNow[lang]}</span>
              </a>
            </div>
          </div>
        </header>

        <section className="relative overflow-x-clip">
          <motion.div
            aria-hidden
            style={{ y: yBg }}
            className="absolute inset-0 -z-10"
          >
            <div className="absolute inset-0" style={{
              background:
                'radial-gradient(60% 55% at 12% 10%, rgba(30,58,95,0.18), transparent 60%), radial-gradient(50% 45% at 92% 20%, rgba(107,144,128,0.22), transparent 60%), radial-gradient(45% 40% at 50% 100%, rgba(201,169,110,0.15), transparent 60%)',
            }} />
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: 'repeating-linear-gradient(135deg, rgba(30,58,95,0.05) 0 1px, transparent 1px 18px)',
            }} />
          </motion.div>

          <motion.div
            aria-hidden
            style={{ y: yMid }}
            className="absolute top-20 -left-20 -z-10 h-72 w-72 rounded-full bg-[var(--sage-soft)] blur-3xl opacity-50"
          />
          <motion.div
            aria-hidden
            style={{ y: yMid }}
            className="absolute top-32 -right-10 -z-10 h-80 w-80 rounded-full bg-[var(--navy-soft)] blur-3xl opacity-60"
          />

          <div className="relative max-w-7xl mx-auto px-5 pt-8 md:pt-16 pb-10 md:pb-24 grid lg:grid-cols-[1.2fr_1fr] gap-6 md:gap-12 items-center">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white ring-1 ring-border text-xs text-slate-600"
              >
                <Sparkles className="h-3.5 w-3.5 text-[var(--gold)]" />
                {ui.heroPill[lang]}
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08, type: 'spring', stiffness: 200, damping: 30 }}
                className="mt-4 md:mt-5 text-[clamp(2rem,6vw,5rem)] leading-[0.95] tracking-[-0.03em] text-[var(--primary)]"
                style={{ fontWeight: 800 }}
              >
                {ui.heroTitleA[lang]}
                <br />
                <span className="bg-gradient-to-r from-[var(--primary)] via-[#2c5282] to-[var(--sage)] bg-clip-text text-transparent">
                  {ui.heroTitleB[lang]}
                </span>
                <br />
                <span className="text-slate-500 text-[0.55em]" style={{ fontWeight: 500 }}>
                  {ui.heroTitleC[lang]}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16 }}
                className="mt-4 md:mt-6 text-slate-600 max-w-xl leading-relaxed text-sm md:text-base"
              >
                {ui.heroSub[lang]} <strong className="text-[var(--primary)]">{ui.proprietor[lang]}</strong>.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22 }}
                className="mt-5 md:mt-7 flex flex-col sm:flex-row gap-3 max-w-xl"
              >
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={ui.searchPlaceholder[lang]}
                    className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white ring-1 ring-border focus:ring-2 focus:ring-[var(--primary)]/30 focus:outline-none text-sm placeholder:text-muted-foreground"
                  />
                </div>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-2xl bg-[var(--primary)] text-white hover:bg-[#16304f] transition-colors text-sm"
                >
                  {ui.seeAll[lang]} <ChevronRight className="h-4 w-4" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-4 flex flex-wrap gap-2.5"
              >
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-[var(--primary)] ring-1 ring-border hover:ring-[var(--primary)]/40 transition-all text-sm"
                >
                  <Navigation className="h-4 w-4" /> {ui.getDirections[lang]}
                </a>
                <a
                  href={waLink('शासकीय सेवा')}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] text-white hover:bg-[#1ebe57] transition-colors text-sm"
                >
                  <MessageCircle className="h-4 w-4" /> {ui.whatsapp[lang]}
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-5 md:mt-10 grid grid-cols-3 gap-2.5 md:gap-3 max-w-xl"
              >
                {[ui.stat1[lang], ui.stat2[lang], ui.stat3[lang]].map((v, i) => (
                  <div key={i} className="p-3 md:p-4 rounded-2xl bg-white/70 backdrop-blur ring-1 ring-border">
                    <div className="h-8 w-8 rounded-lg bg-[var(--navy-soft)] flex items-center justify-center mb-2">
                      {i === 0 && <Award className="h-4 w-4 text-[var(--primary)]" />}
                      {i === 1 && <Clock className="h-4 w-4 text-[var(--sage)]" />}
                      {i === 2 && <ShieldCheck className="h-4 w-4 text-[var(--gold)]" />}
                    </div>
                    <p className="text-xs text-slate-700 leading-snug">{v}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, type: 'spring', stiffness: 200, damping: 26 }}
              className="relative"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative rounded-[32px] bg-white ring-1 ring-border p-7 overflow-hidden"
                style={{ boxShadow: 'var(--shadow-lift)' }}
              >
                <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-[var(--navy-soft)] blur-3xl opacity-70" />
                <div className="absolute -bottom-20 -left-12 h-56 w-56 rounded-full bg-[var(--sage-soft)] blur-3xl opacity-70" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground tracking-wide">
                      <span className="h-2 w-2 rounded-full bg-[var(--sage)] animate-pulse" />
                      {ui.open247[lang]}
                    </div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">CERT · 2026</span>
                  </div>

                  <div className="mt-5 p-6 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[#16304f] text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)',
                      backgroundSize: '14px 14px',
                    }} />
                    <p className="relative text-[10px] uppercase tracking-[0.25em] text-white/70">{ui.certTitle[lang]}</p>
                    <p className="relative mt-2 text-[1.4rem] leading-tight tracking-tight" style={{ fontWeight: 700 }}>{ui.brand[lang]}</p>
                    <p className="relative text-xs text-white/70 mt-0.5">{ui.subBrand[lang]}</p>
                    <div className="relative mt-6 flex items-end justify-between">
                      <div>
                        <p className="text-[10px] text-white/60 uppercase tracking-[0.2em]">Proprietor</p>
                        <p className="text-sm">Vishal Devthan</p>
                      </div>
                      <Award className="h-10 w-10 text-[var(--gold)]" strokeWidth={1.6} />
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="p-4 rounded-2xl bg-[var(--sage-soft)]/60 ring-1 ring-[var(--sage)]/15">
                      <Clock className="h-5 w-5 text-[var(--sage)]" />
                      <p className="text-sm mt-2 text-slate-700">{ui.open247[lang]}</p>
                      <p className="text-xs text-muted-foreground">{ui.noHoliday[lang]}</p>
                    </div>
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-2xl bg-[var(--navy-soft)]/70 ring-1 ring-[var(--primary)]/10 hover:ring-[var(--primary)]/30 transition-all block"
                    >
                      <MapPin className="h-5 w-5 text-[var(--primary)]" />
                      <p className="text-sm mt-2 text-slate-700">{ui.locValue[lang]}</p>
                      <p className="text-xs text-[var(--primary)] inline-flex items-center gap-1 mt-0.5">
                        {ui.getDirections[lang]} <Navigation className="h-3 w-3" />
                      </p>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="services" className="relative max-w-7xl mx-auto px-5 pt-6 md:pt-10 pb-12 md:pb-28">
          <div className="flex flex-wrap items-end justify-between gap-3 md:gap-4 mb-6 md:mb-10">
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--sage)]">{ui.sectionEyebrow[lang]}</p>
              <h2 className="mt-2 text-[clamp(1.8rem,3.5vw,3rem)] leading-[1.05] tracking-[-0.02em] text-[var(--primary)]" style={{ fontWeight: 800 }}>
                {ui.sectionTitle[lang]}
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">{ui.sectionSub[lang]}</p>
          </div>

          {filtered.length === 0 ? (
            <div className="p-10 rounded-2xl bg-white ring-1 ring-border text-center text-muted-foreground">
              {ui.noResults[lang]} "{query}"
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 items-stretch">
              {filtered.map((s, i) => (
                <ServiceCard key={s.id} service={s} index={i} onOpen={setActive} />
              ))}
            </div>
          )}
        </section>

        <section id="about" className="relative bg-white border-y border-border overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-50" style={{
            backgroundImage: 'radial-gradient(circle, rgba(30,58,95,0.06) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }} />
          <div className="relative max-w-7xl mx-auto px-5 py-10 md:py-20 grid md:grid-cols-3 gap-4 md:gap-6">
            {[
              { Icon: ShieldCheck, t: ui.trustTitle1[lang], d: ui.trustDesc1[lang], accent: 'text-[var(--primary)] bg-[var(--navy-soft)]' },
              { Icon: Clock, t: ui.trustTitle2[lang], d: ui.trustDesc2[lang], accent: 'text-[var(--sage)] bg-[var(--sage-soft)]' },
              { Icon: Award, t: ui.trustTitle3[lang], d: ui.trustDesc3[lang], accent: 'text-[var(--gold)] bg-[#f6ecd6]' },
            ].map(({ Icon, t, d, accent }, i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ type: 'spring', stiffness: 260, damping: 28, delay: i * 0.08 }}
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 30 } }}
                className="p-7 rounded-3xl bg-background ring-1 ring-border"
                style={{ boxShadow: 'var(--shadow-soft)' }}
              >
                <div className={`h-12 w-12 rounded-2xl flex items-center justify-center ${accent}`}>
                  <Icon className="h-6 w-6" strokeWidth={1.7} />
                </div>
                <h3 className="mt-5 text-[1.3rem] tracking-tight text-foreground" style={{ fontWeight: 700 }}>{t}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{d}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <footer id="contact" className="relative bg-[var(--primary)] text-white overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-20" style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }} />
          <div className="relative max-w-7xl mx-auto px-5 py-10 md:py-16 grid md:grid-cols-[1.3fr_1fr_1fr] gap-8 md:gap-10">
            <div>
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-2xl bg-white/10 ring-1 ring-white/15 flex items-center justify-center">
                  <Award className="h-5 w-5 text-[var(--gold)]" />
                </div>
                <div>
                  <p>{ui.brand[lang]}</p>
                  <p className="text-xs text-white/60">{ui.subBrand[lang]} · {ui.type[lang]}</p>
                </div>
              </div>
              <p className="mt-5 text-sm text-white/70 leading-relaxed max-w-md">
                {ui.footerTagline[lang]} {ui.proprietor[lang]}.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-[var(--primary)] text-sm hover:bg-[var(--gold)] hover:text-white transition-colors"
                >
                  <Navigation className="h-4 w-4" /> {ui.getDirections[lang]}
                </a>
                <a
                  href={waLink('शासकीय सेवा')}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] text-white text-sm hover:bg-[#1ebe57] transition-colors"
                >
                  <MessageCircle className="h-4 w-4" /> {ui.whatsapp[lang]}
                </a>
              </div>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-white/50">{ui.footerContact[lang]}</p>
              <ul className="mt-4 space-y-3 text-sm">
                <li><a href={`tel:${PHONE}`} className="flex items-center gap-2.5 hover:text-[var(--gold)] transition-colors"><Phone className="h-4 w-4 text-[var(--gold)]" /> {PHONE}</a></li>
                <li><a href={`mailto:${EMAIL}`} className="flex items-center gap-2.5 hover:text-[var(--gold)] transition-colors"><Mail className="h-4 w-4 text-[var(--gold)]" /> {EMAIL}</a></li>
                <li><a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-[var(--gold)] transition-colors"><MapPin className="h-4 w-4 text-[var(--gold)]" /> {ui.locValue[lang]}</a></li>
              </ul>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-white/50">{ui.footerHours[lang]}</p>
              <ul className="mt-4 space-y-3 text-sm text-white/80">
                <li className="flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-[var(--sage)] animate-pulse" />
                  {ui.open247[lang]}
                </li>
                <li className="text-white/60">{ui.hoursValue[lang]}</li>
                <li className="text-white/60">{ui.noHoliday[lang]}</li>
              </ul>
            </div>
          </div>
          <div className="relative border-t border-white/10">
            <div className="max-w-7xl mx-auto px-5 py-5 flex flex-wrap items-center justify-between gap-2 text-xs text-white/50">
              <p>© {new Date().getFullYear()} {ui.brand[lang]}. {ui.rights[lang]}</p>
              <p>{ui.rightsTag[lang]}</p>
            </div>
          </div>
        </footer>

        <div className="relative bg-background pt-6 pb-32 md:pb-10 text-center">
          <p className="text-[11px] tracking-[0.3em] uppercase text-slate-400/70">
            Developed by <span className="text-slate-500/80">Atharva Somwanshi</span>
          </p>
        </div>

        <ServiceModal service={active} onClose={() => setActive(null)} />
        <FloatingWhatsApp />
        <MobileActionBar />
      </div>
    </LangContext.Provider>
  );
}
