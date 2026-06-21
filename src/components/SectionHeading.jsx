export default function SectionHeading({ eyebrow, title, text, align = 'center' }) {
  return (
    <div className={`mx-auto max-w-3xl ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <p className="mb-3 text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-gold/90 sm:text-xs sm:tracking-[0.32em]">{eyebrow}</p>
      <h2 className="font-display text-3xl font-bold leading-tight text-ivory sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {text && <p className="mt-5 text-base leading-8 text-ivory/70 sm:text-lg">{text}</p>}
    </div>
  );
}
