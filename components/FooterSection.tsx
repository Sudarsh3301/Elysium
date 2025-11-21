import Image from 'next/image';

export default function FooterSection() {
  return (
    <footer className="bg-[#0F0D0D] py-12 sm:py-14 lg:py-16 text-center">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Logo */}
        <div className="flex justify-center mb-5 sm:mb-6">
          <div className="w-24 h-16 sm:w-28 sm:h-20 relative">
            <Image src="/gld.png" alt="Elysium Logo" fill className="object-contain brightness-0 invert" loading="lazy" sizes="(max-width: 640px) 96px, 112px" />
          </div>
        </div>

        {/* Centered Tagline */}
        <p className="text-stone-400 text-sm sm:text-base font-normal font-['Onest'] leading-6 mb-6 sm:mb-8">
          Inspired by the Gods. Engineered for Agencies.
        </p>

        {/* Divider */}
        <div className="h-px bg-stone-400 opacity-20 mb-6 sm:mb-8 max-w-4xl mx-auto" />

        {/* Centered Copyright */}
        <p className="text-stone-400 text-xs sm:text-sm font-normal font-['Onest']">
          © 2025 Elysium. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

