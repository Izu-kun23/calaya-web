export default function HeroBackdrop({ src, alt, position = 'center' }) {
  return (
    <div className="absolute inset-0">
      <img
        src={src}
        alt={alt}
        fetchPriority="high"
        decoding="async"
        className="size-full object-cover"
        style={{ objectPosition: position }}
      />
    </div>
  );
}
