export default function BenefitsSection() {
  return (
    <section className="relative w-full py-32 mt-20 bg-[rgb(33,34,32)]">

      <div className="max-w-[1440px] mx-auto px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="text-white text-6xl font-normal font-['ISABELLA_GRAND_Italic'] leading-tight mb-8">
            Empowering the Next Generation of Agencies
          </h2>

          <p className="text-orange-200 text-base font-normal font-['Onest'] leading-relaxed mb-20">
            We're here to help your agency scale while you look like a rockstar.
          </p>

          {/* Benefits Grid Container with Dividers */}
          <div className="relative">
            {/* Vertical Divider - Center Only */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-neutral-700/30"></div>

            {/* Benefits Grid - True 2x2 */}
            <div className="grid grid-cols-2 gap-x-16 gap-y-16">
              {/* Benefit 1 - Top Left */}
              <div className="text-left">
                <div className="flex items-start gap-4 mb-3">
                  <img src="/ben.svg" alt="" className="w-50 h-6 mt-1 flex-shrink-1" />
                  <h3 className="text-white text-2xl font-normal font-['ISABELLA_GRAND_Italic'] leading-tight">No learning curve</h3>
                </div>
                <p className="text-white text-base font-normal font-['Onest'] leading-relaxed pl-9">
                  If you can send an email, you can run Elysium.
                </p>
              </div>

              {/* Benefit 2 - Top Right */}
              <div className="text-left">
                <div className="flex items-start gap-4 mb-3">
                  <img src="/ben.svg" alt="" className="w-50 h-6 mt-1 flex-shrink-1" />
                  <h3 className="text-white text-2xl font-normal font-['ISABELLA_GRAND_Italic'] leading-tight">Your brand, your clients</h3>
                </div>
                <p className="text-white text-base font-normal font-['Onest'] leading-relaxed pl-9">
                  We stay invisible. You stay in control.
                </p>
              </div>

              {/* Horizontal Divider - Between Rows */}
              <div className="col-span-2 w-full h-px bg-neutral-700/30"></div>

              {/* Benefit 3 - Bottom Left */}
              <div className="text-left">
                <div className="flex items-start gap-4 mb-3">
                  <img src="/ben.svg" alt="" className="w-50 h-6 mt-1 flex-shrink-1" /><h3 className="text-white text-2xl font-normal font-['ISABELLA_GRAND_Italic'] leading-tight">Real money</h3>
                </div>
                <p className="text-white text-base font-normal font-['Onest'] leading-relaxed pl-9">
                  More bookings, less overhead, higher margins.
                </p>
              </div>

              {/* Benefit 4 - Bottom Right */}
              <div className="text-left">
                <div className="flex items-start gap-4 mb-3">
                  <img src="/ben.svg" alt="" className="w-50 h-6 mt-1 flex-shrink-1" /><h3 className="text-white text-2xl font-normal font-['ISABELLA_GRAND_Italic'] leading-tight">Models love it too</h3>
                </div>
                <p className="text-white text-base font-normal font-['Onest'] leading-relaxed pl-9">
                  They receive more booking opportunities and better earning potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

