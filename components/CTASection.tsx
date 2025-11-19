export default function CTASection() {
  return (
    <section className="relative w-full h-[663px] bg-stone-900 overflow-hidden flex items-center justify-center">
      {/* Concentric Circles */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute w-[1046px] h-[1046px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-700/20" />
        <div className="absolute w-[795px] h-[795px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-700/30" />
        <div className="absolute w-[607px] h-[607px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-700/50" />
      </div>
      
      {/* Decorative Stars */}
      <div className="absolute w-7 h-8 left-[401px] top-[135px] bg-stone-900" />
      <div className="absolute w-7 h-7 left-[386px] top-[631px] bg-stone-900" />
      <div className="absolute w-8 h-8 left-[1013px] top-[645px] bg-stone-900" />
      <div className="absolute w-8 h-8 left-[1185px] top-[187px] bg-stone-900" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-[897px]">
        <h2 className="mb-8">
          <span className="text-stone-900 text-6xl font-normal font-['ISABELLA_GRAND_Italic']">Grow </span>
          <span className="text-stone-500 text-6xl font-normal font-['ISABELLA_GRAND_Italic']">your agency</span>
          <span className="text-stone-900 text-6xl font-normal font-['ISABELLA_GRAND_Italic']"> comfortably with a partner who knows the business inside-out.</span>
        </h2>
        
        <p className="text-neutral-700 text-base font-normal font-['Onest'] leading-6 mb-12">
          Book more, stress less, and give your models endless opportunities.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center">
          <div className="relative">
            <div className="absolute w-48 h-12 bg-stone-900 rounded-tr-[20px] rounded-bl-[20px] translate-x-[6px] translate-y-[5px]" />
            <button type="button" className="relative w-48 h-12 bg-stone-100 rounded-tr-[20px] rounded-bl-[20px] border border-stone-900 flex items-center justify-center">
              <span className="text-stone-900 text-base font-normal font-['Onest']">Start your free pilot</span>
            </button>
          </div>
          
          <div className="relative">
            <div className="absolute w-44 h-12 bg-stone-900 rounded-tr-[20px] rounded-bl-[20px] translate-x-[6px] translate-y-[5px]" />
            <button type="button" className="relative w-44 h-12 bg-white rounded-tr-[20px] rounded-bl-[20px] border border-stone-900 flex items-center justify-center">
              <span className="text-stone-900 text-base font-normal font-['Onest']">Talk to our team</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

