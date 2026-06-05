import { motion } from 'motion/react';
import { ArrowUpRight, FileText, MessageCircle } from 'lucide-react';
import type { Service } from './services-data';
import { useLang, ui, waLink } from './i18n';

const accentMap: Record<Service['accent'], { bg: string; ring: string; icon: string; chip: string; glow: string }> = {
  navy:  { bg: 'bg-[var(--navy-soft)]', ring: 'ring-[var(--primary)]/15', icon: 'text-[var(--primary)]', chip: 'bg-[var(--primary)] text-white', glow: 'from-[var(--primary)]/15' },
  sage:  { bg: 'bg-[var(--sage-soft)]', ring: 'ring-[var(--sage)]/20',   icon: 'text-[var(--sage)]',   chip: 'bg-[var(--sage)] text-white',   glow: 'from-[var(--sage)]/20' },
  gold:  { bg: 'bg-[#f6ecd6]',          ring: 'ring-[var(--gold)]/25',   icon: 'text-[var(--gold)]',   chip: 'bg-[var(--gold)] text-white',   glow: 'from-[var(--gold)]/25' },
  slate: { bg: 'bg-slate-100',          ring: 'ring-slate-200',          icon: 'text-slate-700',       chip: 'bg-slate-700 text-white',       glow: 'from-slate-300/40' },
};

const pastelPalette = [
  { card: 'bg-[#FFF9D2]', ring: 'ring-[#F1E4A0]/60', glow: 'from-[#F8E48A]/40' },
  { card: 'bg-[#FCE7F3]', ring: 'ring-[#F4C6DD]/60', glow: 'from-[#F4A6CB]/40' },
  { card: 'bg-[#FFF7ED]', ring: 'ring-[#FCD9B6]/70', glow: 'from-[#FBBF8A]/40' },
  { card: 'bg-[#ECFEFF]', ring: 'ring-[#A5E8EE]/60', glow: 'from-[#88DDE5]/40' },
];

export function ServiceCard({
  service,
  index,
  onOpen,
}: {
  service: Service;
  index: number;
  onOpen: (s: Service) => void;
}) {
  const { lang } = useLang();
  const a = accentMap[service.accent];
  const p = pastelPalette[index % pastelPalette.length];
  const { Icon } = service;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ type: 'spring', stiffness: 260, damping: 28, delay: (index % 6) * 0.05 }}
      whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 30 } }}
      className="group relative h-full"
    >
      <button
        type="button"
        onClick={() => onOpen(service)}
        className={`relative w-full h-full min-h-[260px] text-left rounded-3xl ${p.card} p-6 ring-1 ${p.ring} hover:ring-[var(--primary)]/25 transition-shadow overflow-hidden flex flex-col justify-between gap-6 text-slate-800`}
        style={{ boxShadow: 'var(--shadow-soft)' }}
      >
        <div className={`pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gradient-to-br ${p.glow} to-transparent blur-2xl opacity-80`} />
        <div className="pointer-events-none absolute inset-0 opacity-[0.35]" style={{
          backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.06) 1px, transparent 1px)',
          backgroundSize: '14px 14px',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.4), transparent 70%)',
        }} />

        <div className="relative flex items-start justify-between gap-3">
          <div className={`h-14 w-14 rounded-2xl bg-white/80 ring-1 ${a.ring} flex items-center justify-center flex-shrink-0 backdrop-blur-sm`}>
            <Icon className={`h-7 w-7 ${a.icon}`} strokeWidth={1.6} />
          </div>
          <div className="flex items-center gap-2">
            {service.badge && (
              <span className={`px-2.5 py-1 rounded-full ${a.chip} text-[11px] tracking-wide whitespace-nowrap`}>
                {service.badge[lang]}
              </span>
            )}
            <motion.span
              whileHover={{ rotate: 45 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="h-11 w-11 rounded-full bg-white/90 text-[var(--primary)] ring-1 ring-white flex items-center justify-center group-hover:bg-[var(--primary)] group-hover:text-white transition-colors flex-shrink-0"
            >
              <ArrowUpRight className="h-4 w-4" />
            </motion.span>
          </div>
        </div>

        <div className="relative flex-1 flex flex-col justify-end">
          <h3 className="text-slate-900 text-[1.35rem] leading-[1.15] tracking-tight" style={{ fontWeight: 700 }}>
            {service.title[lang]}
          </h3>
          <p className="text-slate-500 mt-1 text-[11px] tracking-[0.18em] uppercase">
            {service.altTitle[lang]}
          </p>
          <p className="mt-3 text-sm text-slate-700 leading-relaxed line-clamp-2">
            {service.description[lang]}
          </p>
        </div>

        <div className="relative pt-4 border-t border-dashed border-slate-900/15 flex items-center justify-between text-xs text-slate-600 min-h-[44px]">
          <span className="inline-flex items-center gap-1.5">
            <FileText className="h-3.5 w-3.5" />
            {service.documents.length} {ui.docsCount[lang]}
          </span>
          <a
            href={waLink(service.title.en)}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 text-[#1ea84c] hover:underline min-h-[44px] py-2"
          >
            <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
          </a>
        </div>
      </button>
    </motion.div>
  );
}
