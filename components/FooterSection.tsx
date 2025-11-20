import Image from 'next/image';

export default function FooterSection() {
  return (
    <footer className="bg-[#0F0D0D] py-16 text-center">
      <div className="max-w-[1440px] mx-auto px-8">
        {/* Centered Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-28 h-20 relative">
            <Image src="/gld.png" alt="Elysium Logo" fill className="object-contain brightness-0 invert" loading="lazy" sizes="112px" />
          </div>
        </div>

        {/* Centered Tagline */}
        <p className="text-stone-400 text-sm font-normal font-['Onest'] leading-6 mb-8">
          Inspired by the Gods. Engineered for Agencies.
        </p>

        {/* Divider */}
        <div className="h-px bg-stone-400 opacity-20 mb-8 max-w-4xl mx-auto" />

        {/* Centered Copyright */}
        <p className="text-stone-400 text-sm font-normal font-['Onest']">
          © 2025 Elysium. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

