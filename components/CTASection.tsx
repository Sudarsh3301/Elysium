export default function CTASection() {
  return (
    <section className="relative w-full py-32 bg-stone-900 overflow-hidden">
      {/* Concentric Circles */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="absolute w-[1046px] h-[1046px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-700/15" />
        <div className="absolute w-[795px] h-[795px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-700/25" />
        <div className="absolute w-[607px] h-[607px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-700/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-8">
            <span className="text-white text-6xl font-normal font-['ISABELLA_GRAND_Italic'] leading-tight">Grow </span>
            <span className="text-stone-500 text-6xl font-normal font-['ISABELLA_GRAND_Italic'] leading-tight">your agency</span>
            <span className="text-white text-6xl font-normal font-['ISABELLA_GRAND_Italic'] leading-tight"> comfortably with a partner who knows the business inside-out.</span>
          </h2>

          <p className="text-stone-400 text-base font-normal font-['Onest'] leading-relaxed mb-12">
            Book more, stress less, and give your models endless opportunities.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center flex-wrap">
            <div className="relative">
              <div className="absolute w-48 h-12 bg-white rounded-tr-[20px] rounded-bl-[20px] translate-x-[6px] translate-y-[5px] opacity-20" />
              <button type="button" className="relative w-48 h-12 bg-stone-100 rounded-tr-[20px] rounded-bl-[20px] border border-stone-100 flex items-center justify-center hover:bg-white transition-colors">
                <span className="text-stone-900 text-base font-normal font-['Onest']">Start your free pilot</span>
              </button>
            </div>

            <div className="relative">
              <div className="absolute w-44 h-12 bg-white rounded-tr-[20px] rounded-bl-[20px] translate-x-[6px] translate-y-[5px] opacity-20" />
              <button type="button" className="relative w-44 h-12 bg-transparent rounded-tr-[20px] rounded-bl-[20px] border border-white flex items-center justify-center hover:bg-white/10 transition-colors">
                <span className="text-white text-base font-normal font-['Onest']">Talk to our team</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

