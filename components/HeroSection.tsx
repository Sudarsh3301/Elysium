export default function HeroSection() {
  return (
    <section className="relative w-full h-[1014px] bg-zinc-100 overflow-hidden">
      {/* Cloud Background Image */}
      <img 
        src="/99ecdfc1ca19abce9e30036f40aabc08fa126871.png" 
        alt="Heavenly clouds pathway" 
        className="absolute left-[-163px] top-0 w-[1817px] h-[1014px] object-cover"
      />
      
      {/* Logo */}
      <div className="absolute left-28 top-8 w-28 h-20">
        <img src="/3a11b6572afa89cba912b80b99a894f4364b1ef9.svg" alt="Elysium Logo" className="w-full h-full" />
      </div>
      
      {/* Join Our Realm Button */}
      <div className="absolute right-[180px] top-8">
        <div className="relative">
          <div className="absolute w-48 h-12 bg-stone-900 rounded-tr-[20px] rounded-bl-[20px] translate-x-[6px] translate-y-[6px]" />
          <button className="relative w-48 h-12 bg-white rounded-tr-[20px] rounded-bl-[20px] border border-stone-900 flex items-center justify-center">
            <span className="text-stone-900 text-base font-normal font-['Timeless']">Join Our Realm</span>
          </button>
        </div>
      </div>
      
      {/* Main Heading */}
      <h1 className="absolute left-[312px] top-[303px] w-[816px] text-center text-stone-900 text-8xl font-normal font-['ISABELLA_GRAND_Italic']">
        Meet your agency's silent advantage.
      </h1>
      
      {/* Subheading */}
      <p className="absolute left-[536px] top-[560px] text-stone-900 text-lg font-semibold font-['Onest']">
        Inspired by the Gods. Engineered for Agencies.
      </p>
      
      {/* Description */}
      <p className="absolute left-[460px] top-[598px] w-[520px] text-center text-stone-900 text-lg font-normal font-['Onest']">
        Elysium provides smart tools to agencies that refuse to fall behind in the new era of technology.
      </p>
      
      {/* Watch How It Works Button */}
      <div className="absolute left-[631px] top-[666px]">
        <div className="relative">
          <div className="absolute w-44 h-12 bg-stone-900 rounded-tr-[20px] rounded-bl-[20px] translate-x-[6px] translate-y-[6px]" />
          <button className="relative w-44 h-12 bg-white rounded-tr-[20px] rounded-bl-[20px] border border-stone-900 flex items-center justify-center">
            <span className="text-stone-900 text-base font-normal font-['Timeless']">Watch how it works</span>
          </button>
        </div>
      </div>
      
      {/* Tagline */}
      <p className="absolute left-[365px] top-[850px] text-center text-stone-900 text-lg font-normal font-['Onest']">
        No extra hires or crazy tech setup. Just more bookings and happier recurring clients.
      </p>
      
      {/* Decorative Wings Icon */}
      <div className="absolute left-[720px] top-[901px]">
        <img src="/3a79222fe987d2adacd450469e4248f871ab9251.svg" alt="Decorative wings" className="w-20 h-16" />
      </div>
      
      {/* Gradient Overlay at Bottom */}
      <div className="absolute left-0 top-[658px] w-full h-96 bg-gradient-to-b from-zinc-100 to-transparent" />
    </section>
  );
}

