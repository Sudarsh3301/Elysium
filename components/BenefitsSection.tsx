export default function BenefitsSection() {
  return (
    <section className="relative w-full h-[840px] bg-stone-900 flex items-center justify-center">
      {/* Section Header */}
      <div className="relative z-10 text-center max-w-[897px]">
        <h2 className="text-white text-6xl font-normal font-['ISABELLA_GRAND_Italic'] mb-12">
          Empowering the Next Generation of Agencies
        </h2>
        
        <p className="text-orange-200 text-base font-normal font-['Onest'] leading-6 mb-16">
          We're here to help your agency scale while you look like a rockstar.
        </p>
        
        {/* Benefits Grid */}
        <div className="grid grid-cols-2 gap-x-16 gap-y-12 max-w-[1216px] mx-auto">
          {/* Benefit 1 */}
          <div className="text-left">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-5 h-2 bg-stone-500 rotate-45 mt-2 flex-shrink-0" />
              <h3 className="text-white text-2xl font-normal font-['ISABELLA_GRAND_Italic']">No learning curve</h3>
            </div>
            <p className="text-white text-base font-normal font-['Onest'] leading-6 pl-9">
              If you can send an email, you can run Elysium.
            </p>
          </div>
          
          {/* Benefit 2 */}
          <div className="text-left">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-5 h-2 bg-stone-500 rotate-45 mt-2 flex-shrink-0" />
              <h3 className="text-white text-2xl font-normal font-['ISABELLA_GRAND_Italic']">Your brand, your clients</h3>
            </div>
            <p className="text-white text-base font-normal font-['Onest'] leading-6 pl-9">
              We stay invisible. You stay in control.
            </p>
          </div>
          
          {/* Divider */}
          <div className="col-span-2 h-px bg-stone-400 opacity-30" />
          
          {/* Benefit 3 */}
          <div className="text-left">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-5 h-2 bg-stone-500 rotate-45 mt-2 flex-shrink-0" />
              <h3 className="text-white text-2xl font-normal font-['ISABELLA_GRAND_Italic']">Real money</h3>
            </div>
            <p className="text-white text-base font-normal font-['Onest'] leading-6 pl-9">
              More bookings, less overhead, higher margins.
            </p>
          </div>
          
          {/* Benefit 4 */}
          <div className="text-left">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-5 h-2 bg-stone-500 rotate-45 mt-2 flex-shrink-0" />
              <h3 className="text-white text-2xl font-normal font-['ISABELLA_GRAND_Italic']">Models love it too</h3>
            </div>
            <p className="text-white text-base font-normal font-['Onest'] leading-6 pl-9">
              They receive more booking opportunities and better earning potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

