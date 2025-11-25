import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full bg-zinc-100 overflow-hidden flex items-center justify-center py-20 sm:py-24 md:py-32">
      {/* Cloud Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/99ecdfc1ca19abce9e30036f40aabc08fa126871.png"
          alt="Heavenly clouds pathway"
          fill
          className="object-cover object-center"
          priority
          quality={90}
          sizes="100vw"
        />
      </div>

      {/* Gradient Overlay at Bottom */}
      <div className="absolute left-0 bottom-0 w-full h-48 sm:h-64 bg-gradient-to-t from-zinc-100 to-transparent pointer-events-none" />

      {/* Header Navigation */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 flex items-center justify-between">
          {/* Logo */}
          <div className="w-20 h-14 sm:w-24 sm:h-16 xl:w-28 xl:h-20 relative">
            <Image src="/logo.png" alt="Elysium Logo" fill className="object-contain" priority sizes="(max-width: 640px) 80px, (max-width: 1280px) 96px, 112px" />
          </div>

          {/* Join Our Realm Button */}
          <div className="relative">
            <div className="absolute w-32 h-10 sm:w-40 sm:h-11 xl:w-48 xl:h-12 bg-stone-900 rounded-tr-[20px] rounded-bl-[20px] translate-x-[4px] translate-y-[4px] sm:translate-x-[5px] sm:translate-y-[5px] xl:translate-x-[6px] xl:translate-y-[6px]" />
            <button type="button" className="relative w-32 h-10 sm:w-40 sm:h-11 xl:w-48 xl:h-12 bg-white rounded-tr-[20px] rounded-bl-[20px] border border-stone-900 flex items-center justify-center hover:bg-zinc-50 transition-colors">
              <span className="text-stone-900 text-sm sm:text-base font-normal font-['Timeless']">Join Our Realm</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 sm:pt-0">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-stone-900 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal font-['ISABELLA_GRAND_Italic'] mb-6 sm:mb-8 lg:mb-12 leading-tight">
            Meet your agency's silent advantage.
          </h1>

          {/* Subheading */}
          <p className="text-stone-900 text-base sm:text-lg font-semibold font-['Onest'] mb-3 sm:mb-4">
            Inspired by the Gods. Engineered for Agencies.
          </p>

          {/* Description */}
          <p className="text-stone-900 text-base sm:text-lg font-normal font-['Onest'] mb-6 sm:mb-8 max-w-xl mx-auto px-4 sm:px-0">
            Elysium provides smart tools to agencies that refuse to fall behind in the new era of technology.
          </p>

          {/* Watch How It Works Button */}
          <div className="flex justify-center mb-8 sm:mb-12 lg:mb-16">
            <div className="relative w-full max-w-xs sm:w-auto">
              <div className="absolute w-full sm:w-44 h-12 bg-stone-900 rounded-tr-[20px] rounded-bl-[20px] translate-x-[4px] translate-y-[4px] sm:translate-x-[6px] sm:translate-y-[6px]" />
              <button type="button" className="relative w-full sm:w-44 h-12 bg-white rounded-tr-[20px] rounded-bl-[20px] border border-stone-900 flex items-center justify-center hover:bg-zinc-50 transition-colors">
                <span className="text-stone-900 text-sm sm:text-base font-normal font-['Timeless']">Watch how it works</span>
              </button>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-stone-900 text-base sm:text-lg font-normal font-['Onest'] mb-4 sm:mb-6 px-4 sm:px-0">
            No extra hires or crazy tech setup. Just more bookings and happier recurring clients.
          </p>

          {/* Decorative Wings Icon */}
          <div className="flex justify-center w-full px-4 sm:px-6 md:px-8">
            <img src="/logo-div.svg" alt="Decorative wings" className="w-full max-w-15xl h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

