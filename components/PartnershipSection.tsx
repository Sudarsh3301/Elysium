export default function PartnershipSection() {
  return (
    <section className="relative w-full py-24 bg-zinc-100">
      {/* Background Image */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[569px] h-[569px] rounded-tl-[100px] rounded-br-[100px] overflow-hidden opacity-20">
        <img 
          src="/fd36440db01cbba87d25446db3251733b3e469b8.png" 
          alt="Majestic palace interior" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-[897px] mx-auto text-center">
        <h2 className="text-stone-900 text-6xl font-normal font-['ISABELLA_GRAND_Italic'] mb-8">
          We're partners, not competition.
        </h2>
        
        <p className="text-neutral-700 text-base font-normal font-['Onest'] leading-6 mb-6">
          Elysium was built by people who've worked in the modeling industry for years. We understand the challenges, the pressure, and the need for tools that actually work.
        </p>
        
        <p className="text-neutral-700 text-base font-normal font-['Onest'] leading-6 mb-12">
          We're not here to replace your team. We're here to make them unstoppable.
        </p>
        
        {/* CTA Button */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute w-64 h-12 bg-stone-900 rounded-tr-[20px] rounded-bl-[20px] translate-x-[6px] translate-y-[6px]" />
            <button type="button" className="relative w-64 h-12 bg-white rounded-tr-[20px] rounded-bl-[20px] border border-stone-900 flex items-center justify-center">
              <span className="text-stone-900 text-base font-normal font-['Timeless']">See how we can help</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

