export default function SectionHeading({ eyebrow, title, text, center = true, light = false }) {
  return (
    <div className={`mb-10 max-w-2xl sm:mb-12 ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-gold">
          {eyebrow}
        </p>
      )}
      <h2 className={`section-title ${light ? '!text-white' : '!text-choco'}`}>{title}</h2>
      <div className={`mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-gold to-gold-dark ${center ? 'mx-auto' : ''}`} />
      {text && (
        <p className={`mt-4 text-sm sm:text-base ${light ? 'text-stone-300' : 'text-stone-600'}`}>
          {text}
        </p>
      )}
    </div>
  );
}
