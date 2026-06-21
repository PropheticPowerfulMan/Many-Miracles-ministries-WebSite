export default function SectionHeading({ eyebrow, title, text, align = 'center' }) {
  return (
    <div className={`mx-auto max-w-3xl ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.32em] text-gold/90">{eyebrow}</p>
      <h2 className="font-display text-4xl font-bold leading-tight text-ivory sm:text-5xl">
        {title}
      </h2>
      {text && <p className="mt-5 text-base leading-8 text-ivory/70 sm:text-lg">{text}</p>}
    </div>
  );
}
