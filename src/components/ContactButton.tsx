interface ContactButtonProps {
  className?: string;
  label?: string;
  href?: string;
}

const BASE_CLASSES =
  'inline-block shrink-0 rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-white sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base';

const BASE_STYLE: React.CSSProperties = {
  background:
    'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
  boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
  outline: '2px solid #FFFFFF',
  outlineOffset: '-3px',
};

export default function ContactButton({
  className = '',
  label = 'Contact Me',
  href,
}: ContactButtonProps) {
  if (href) {
    return (
      <a href={href} className={`${BASE_CLASSES} ${className}`} style={BASE_STYLE}>
        {label}
      </a>
    );
  }

  return (
    <button type="button" className={`${BASE_CLASSES} ${className}`} style={BASE_STYLE}>
      {label}
    </button>
  );
}
