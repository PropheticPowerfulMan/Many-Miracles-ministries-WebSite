import { ArrowRight } from 'lucide-react';

export default function Button({ children, href = '#', variant = 'primary', icon: Icon = ArrowRight }) {
  const styles =
    variant === 'primary'
      ? 'bg-gradient-to-r from-gold via-amberfire to-gold text-midnight shadow-gold hover:shadow-halo'
      : 'border border-gold/35 bg-white/5 text-ivory hover:border-gold/75 hover:bg-gold/10';

  return (
    <a
      href={href}
      className={`inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-xs font-extrabold uppercase tracking-[0.08em] transition duration-300 hover:-translate-y-1 sm:w-auto sm:px-6 sm:text-sm sm:tracking-[0.16em] ${styles}`}
    >
      <span>{children}</span>
      <Icon className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}
