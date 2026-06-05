import { AnimatePresence, motion } from 'motion/react';
import { X, CheckCircle2, Phone, Mail, FileCheck2, MessageCircle, Navigation } from 'lucide-react';
import { useEffect } from 'react';
import type { Service } from './services-data';
import { useLang, ui, waLink, MAPS_URL, PHONE, EMAIL } from './i18n';

export function ServiceModal({
  service,
  onClose,
}: {
  service: Service | null;
  onClose: () => void;
}) {
  const { lang } = useLang();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    if (service) document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, service]);

  return (
    <AnimatePresence>
      {service && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-slate-900/55 backdrop-blur-md"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.5 }}
            onDragEnd={(_, info) => { if (info.offset.y > 120 || info.velocity.y > 600) onClose(); }}
            className="relative w-full sm:max-w-2xl bg-card rounded-t-[28px] sm:rounded-3xl overflow-hidden ring-1 ring-border h-[85vh] sm:h-auto sm:max-h-[92vh] flex flex-col"
            style={{ boxShadow: 'var(--shadow-lift)', WebkitOverflowScrolling: 'touch' }}
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="sm:hidden flex justify-center pt-3 pb-1 flex-shrink-0">
              <span className="h-1.5 w-12 rounded-full bg-slate-300" />
            </div>

            <div className="overflow-y-auto flex-1" style={{ WebkitOverflowScrolling: 'touch' }}>
              <div className="relative p-6 bg-gradient-to-br from-[var(--navy-soft)] via-white to-[var(--sage-soft)] overflow-hidden">
                <div className="pointer-events-none absolute inset-0 opacity-40" style={{
                  backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.08) 1px, transparent 1px)',
                  backgroundSize: '16px 16px',
                }} />
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-10 h-11 w-11 rounded-full bg-white/95 hover:bg-white text-slate-600 flex items-center justify-center ring-1 ring-border"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>

                <div className="relative flex items-start gap-4 pr-12">
                  <div className="h-14 w-14 rounded-2xl bg-white ring-1 ring-border flex items-center justify-center flex-shrink-0">
                    <service.Icon className="h-7 w-7 text-[var(--primary)]" strokeWidth={1.6} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-[1.6rem] leading-tight tracking-tight text-foreground" style={{ fontWeight: 700 }}>
                      {service.title[lang]}
                    </h2>
                    <p className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground mt-1">
                      {service.altTitle[lang]}
                    </p>
                  </div>
                </div>

                <div className="relative mt-4 flex flex-wrap gap-2">
                  {service.badge && (
                    <span className="px-3 py-1 rounded-full bg-white text-[var(--primary)] ring-1 ring-border text-xs">
                      {service.badge[lang]}
                    </span>
                  )}
                  <span className="px-3 py-1 rounded-full bg-[var(--sage)] text-white text-xs inline-flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                    {ui.open247[lang]}
                  </span>
                </div>

                <p className="relative mt-4 text-sm text-slate-700 leading-relaxed">{service.description[lang]}</p>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <FileCheck2 className="h-5 w-5 text-[var(--sage)]" />
                  <h3 className="text-foreground">{ui.modalDocs[lang]}</h3>
                </div>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {service.documents.map((doc, i) => (
                    <motion.li
                      key={doc.en}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.06 + i * 0.04, type: 'spring', stiffness: 300, damping: 30 }}
                      className="flex items-start gap-3 p-3 rounded-xl bg-secondary/60 ring-1 ring-border min-h-[44px]"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[var(--sage)] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-700">{doc[lang]}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-6 p-6 rounded-2xl bg-[var(--accent)] ring-1 ring-[var(--sage)]/15">
                  <p className="text-[11px] text-[var(--accent-foreground)] mb-4 tracking-[0.18em] uppercase">
                    {ui.modalContact[lang]}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <a
                      href={waLink(service.title.en)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-[#25D366] text-white hover:bg-[#1ebe57] transition-colors min-h-[48px]"
                    >
                      <MessageCircle className="h-4 w-4" />
                      {ui.whatsapp[lang]}
                    </a>
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-[var(--primary)] text-white hover:bg-[#16304f] transition-colors min-h-[48px]"
                    >
                      <Navigation className="h-4 w-4" />
                      {ui.getDirections[lang]}
                    </a>
                    <a
                      href={`tel:${PHONE}`}
                      className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-white text-[var(--primary)] ring-1 ring-border hover:ring-[var(--primary)]/30 transition-all min-h-[48px]"
                    >
                      <Phone className="h-4 w-4" />
                      {PHONE}
                    </a>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-white text-[var(--primary)] ring-1 ring-border hover:ring-[var(--primary)]/30 transition-all min-h-[48px]"
                    >
                      <Mail className="h-4 w-4" />
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
