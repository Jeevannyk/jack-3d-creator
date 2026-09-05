import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
import { CONTACT_EMAIL, CONTACT_MAILTO } from '../contact';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="flex w-full flex-col items-center px-5 py-24 sm:px-8 sm:py-28 md:px-10 md:py-36"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading text-center font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Let&apos;s talk
        </h2>
      </FadeIn>

      <FadeIn delay={0.15} y={20}>
        <p
          className="mt-8 max-w-[560px] text-center font-light uppercase tracking-wide text-[#D7E2EA] sm:mt-10 md:mt-12"
          style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
        >
          have a project in mind? drop a line and let&apos;s make something
          unforgettable.
        </p>
      </FadeIn>

      <FadeIn delay={0.3} y={20}>
        <a
          href={CONTACT_MAILTO}
          className="mt-6 inline-block font-medium lowercase tracking-wide text-[#D7E2EA] underline decoration-[#D7E2EA]/40 underline-offset-8 transition-opacity duration-200 hover:opacity-70 sm:mt-8"
          style={{ fontSize: 'clamp(1rem, 2.4vw, 2rem)' }}
        >
          {CONTACT_EMAIL}
        </a>
      </FadeIn>

      <FadeIn delay={0.45} y={20}>
        <div className="mt-12 sm:mt-16 md:mt-20">
          <ContactButton href={CONTACT_MAILTO} />
        </div>
      </FadeIn>
    </section>
  );
}
