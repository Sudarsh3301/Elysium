import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-zinc-100 flex items-center justify-center">
      
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/99ecdfc1ca19abce9e30036f40aabc08fa126871.png"
          alt="Heavenly clouds pathway"
          fill
          className="object-cover object-[center_15%]"
          priority
          quality={90}
          sizes="100vw"
        />
      </div>

      {/* Gradient */}
      <div className="absolute left-0 bottom-0 w-full h-[45vh] bg-gradient-to-t from-zinc-100 via-zinc-100/40 to-transparent pointer-events-none z-10" />


      {/* Header Navigation */}
      <div className="absolute top-2 left-0 right-0 z-[50]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Elysium Logo"
              width={120}
              height={72}
              className="h-auto w-auto"
              priority
            />
          </div>

          {/* Join Our Realm Button */}
          <div className="relative">
            <div className="absolute w-32 h-10 sm:w-40 sm:h-11 xl:w-48 xl:h-12 bg-stone-900 rounded-tr-[20px] rounded-bl-[20px] translate-x-[4px] translate-y-[4px]" />
            <button
              type="button"
              className="relative w-32 h-10 sm:w-40 sm:h-11 xl:w-48 xl:h-12 bg-white rounded-tr-[20px] rounded-bl-[20px] border border-stone-900 flex items-center justify-center hover:bg-zinc-50 transition-colors"
            >
              <span className="text-stone-900 text-sm sm:text-base font-normal font-['Timeless']">
                Join Our Realm
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-[40] max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 sm:pt-20 md:pt-24 lg:pt-28">
        <div className="max-w-4xl mx-auto">

          {/* Main Heading */}
          <h1 className="text-stone-900 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal font-['ISABELLA_GRAND_Italic'] leading-tight mb-8">
            Meet your agency&apos;s silent advantage.
          </h1>

          {/* Subheading */}
          <p className="text-stone-900 text-base sm:text-lg font-semibold font-['Onest'] mb-4">
            Inspired by the Gods. Engineered for Agencies.
          </p>

          {/* Description */}
          <p className="text-stone-900 text-base sm:text-lg font-normal font-['Onest'] mb-10 max-w-xl mx-auto">
            Elysium provides smart tools to agencies that refuse to fall behind in the new era of technology.
          </p>

          {/* Watch Button */}
          {/* Watch How It Works Button */}
<div className="flex justify-center mb-[125px] lg:mb-[125px]">
  <div className="relative w-full max-w-xs sm:w-auto">
    <div className="absolute w-full sm:w-44 h-12 bg-stone-900 rounded-tr-[20px] rounded-bl-[20px] translate-x-[4px] translate-y-[4px]" />
    <button type="button" className="relative w-full sm:w-44 h-12 bg-white rounded-tr-[20px] rounded-bl-[20px] border border-stone-900 flex items-center justify-center hover:bg-zinc-50 transition-colors">
      <span className="text-stone-900 text-sm sm:text-base font-normal font-['Timeless']">Watch how it works</span>
    </button>
  </div>
</div>


          {/* Tagline */}
          <p className="text-stone-900 text-sm sm:text-lg lg:text-xl font-normal font-['Onest'] leading-relaxed mb-10 max-w-3xl mx-auto">
            No extra hires or crazy tech setup. Just more bookings and happier recurring clients.
          </p>

          {/* Decorative Wings Icon */}
<div className="relative flex justify-center mt-10 mb-14 z-40">
  <img
    src="/logo-div.svg"
    alt="Decorative wings"
    className="w-150 sm:w-150 md:w-150 h-auto drop-shadow-[0_0_14px_rgba(0,0,0,0.32)] opacity-95"
  />
</div>


        </div>
      </div>
    </section>
  );
}
