export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-zinc-100 overflow-hidden flex items-center justify-center">
      {/* Cloud Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/99ecdfc1ca19abce9e30036f40aabc08fa126871.png"
          alt="Heavenly clouds pathway"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Gradient Overlay at Bottom */}
      <div className="absolute left-0 bottom-0 w-full h-96 bg-gradient-to-t from-zinc-100 to-transparent pointer-events-none" />

      {/* Header Navigation */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <div className="max-w-[1440px] mx-auto px-8 py-8 flex items-center justify-between">
          {/* Logo */}
          <div className="w-28 h-20">
            <img src="/3a11b6572afa89cba912b80b99a894f4364b1ef9.svg" alt="Elysium Logo" className="w-full h-full" />
          </div>

          {/* Join Our Realm Button */}
          <div className="relative">
            <div className="absolute w-48 h-12 bg-stone-900 rounded-tr-[20px] rounded-bl-[20px] translate-x-[6px] translate-y-[6px]" />
            <button type="button" className="relative w-48 h-12 bg-white rounded-tr-[20px] rounded-bl-[20px] border border-stone-900 flex items-center justify-center hover:bg-zinc-50 transition-colors">
              <span className="text-stone-900 text-base font-normal font-['Timeless']">Join Our Realm</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-stone-900 text-8xl font-normal font-['ISABELLA_GRAND_Italic'] mb-12">
            Meet your agency's silent advantage.
          </h1>

          {/* Subheading */}
          <p className="text-stone-900 text-lg font-semibold font-['Onest'] mb-4">
            Inspired by the Gods. Engineered for Agencies.
          </p>

          {/* Description */}
          <p className="text-stone-900 text-lg font-normal font-['Onest'] mb-8 max-w-xl mx-auto">
            Elysium provides smart tools to agencies that refuse to fall behind in the new era of technology.
          </p>

          {/* Watch How It Works Button */}
          <div className="flex justify-center mb-16">
            <div className="relative">
              <div className="absolute w-44 h-12 bg-stone-900 rounded-tr-[20px] rounded-bl-[20px] translate-x-[6px] translate-y-[6px]" />
              <button type="button" className="relative w-44 h-12 bg-white rounded-tr-[20px] rounded-bl-[20px] border border-stone-900 flex items-center justify-center hover:bg-zinc-50 transition-colors">
                <span className="text-stone-900 text-base font-normal font-['Timeless']">Watch how it works</span>
              </button>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-stone-900 text-lg font-normal font-['Onest'] mb-6">
            No extra hires or crazy tech setup. Just more bookings and happier recurring clients.
          </p>

          {/* Decorative Wings Icon */}
          <div className="flex justify-center">
            <img src="/3a79222fe987d2adacd450469e4248f871ab9251.svg" alt="Decorative wings" className="w-20 h-16" />
          </div>
        </div>
      </div>
    </section>
  );
}

