import { motion } from 'motion/react';
import { MessageCircle, Navigation } from 'lucide-react';
import { useLang, ui, waLink, MAPS_URL } from './i18n';

export function MobileActionBar() {
  const { lang } = useLang();
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, type: 'spring', stiffness: 280, damping: 28 }}
      className="md:hidden fixed bottom-0 inset-x-0 z-40 px-4 pb-[max(env(safe-area-inset-bottom),12px)] pt-3 bg-background/95 backdrop-blur-xl border-t border-border"
    >
      <div className="grid grid-cols-2 gap-3">
        <a
          href={waLink('शासकीय सेवा')}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] text-white min-h-[52px] active:scale-[0.97] transition-transform"
          style={{ boxShadow: '0 12px 30px -10px rgba(37,211,102,0.5)' }}
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-sm tracking-wide">WhatsApp</span>
        </a>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[var(--primary)] text-white min-h-[52px] active:scale-[0.97] transition-transform"
          style={{ boxShadow: '0 12px 30px -10px rgba(30,58,95,0.55)' }}
        >
          <Navigation className="h-5 w-5" />
          <span className="text-sm tracking-wide">{ui.getDirections[lang]}</span>
        </a>
      </div>
    </motion.div>
  );
}
