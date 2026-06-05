import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { waLink } from './i18n';

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={waLink('शासकीय सेवा')}
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.4, type: 'spring', stiffness: 300, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="hidden md:flex fixed bottom-6 right-6 z-40 group items-center gap-3 pl-4 pr-5 py-3.5 rounded-full bg-[#25D366] text-white min-h-[52px]"
      style={{ boxShadow: '0 18px 40px -10px rgba(37, 211, 102, 0.55)' }}
    >
      <span className="relative flex h-6 w-6 items-center justify-center">
        <span className="absolute inset-0 rounded-full bg-white/40 animate-ping" />
        <MessageCircle className="relative h-5 w-5" />
      </span>
      <span className="hidden sm:inline text-sm tracking-wide">WhatsApp</span>
    </motion.a>
  );
}
