export default function StepsSection() {
  return (
    <section className="relative w-full py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-zinc-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-stone-900 text-3xl sm:text-4xl md:text-5xl font-normal font-['ISABELLA_GRAND_Italic'] leading-tight mb-3 sm:mb-4">Steps to Success</h2>
          <p className="text-neutral-700 text-base sm:text-lg font-normal font-['Onest'] leading-relaxed px-4 sm:px-0">From setup to scale — an intelligent 4-step path to operational success</p>
        </div>

        {/* Steps Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Vertical Divider - Between columns only */}
            <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-px bg-black/10"></div>

            {/* Row 1: Steps 01 & 02 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-24 gap-y-16">
              {/* Step 01 */}
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="step-number">01</span>
                  <h3 className="step-heading">Book Discovery Call</h3>
                </div>
                <p className="step-body">
                  Connect with our team to discuss Elysium's automation systems built for your agency's needs and goals.
                </p>
              </div>

              {/* Step 02 */}
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="step-number">02</span>
                  <h3 className="step-heading">Get Your Roadmap</h3>
                </div>
                <p className="step-body">
                  Receive a comprehensive roadmap explaining how our automation tools fit your agency, step by step.
                </p>
              </div>
            </div>

            {/* Horizontal Divider */}
            <div className="w-full h-px bg-black/10 my-8"></div>

            {/* Row 2: Steps 03 & 04 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-24 gap-y-16">
              {/* Step 03 */}
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="step-number">03</span>
                  <h3 className="step-heading">Integration of Smart Tools</h3>
                </div>
                <p className="step-body">
                  Use Elysium's smart tools to automate tasks, streamline communications, and increase booking potential.
                </p>
              </div>

              {/* Step 04 */}
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="step-number">04</span>
                  <h3 className="step-heading">Scale and Optimize</h3>
                </div>
                <p className="step-body">
                  Watch your agency scale efficiently while we continuously optimize your AI systems for maximum results over time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="max-w-5xl mx-auto mt-16 sm:mt-20 lg:mt-24">
<div className="bg-[rgba(227,217,201,1)] rounded-tl-[10px] rounded-tr-[40px] rounded-bl-[40px] rounded-br-[10px] py-8 sm:py-10 lg:py-12 px-6 sm:px-8 flex items-center justify-center relative">

            <div className="absolute inset-4 sm:inset-6 border border-white rounded-tl-[30px] rounded-br-[30px] mix-blend-difference pointer-events-none" />
            <p className="text-center relative z-10 max-w-3xl text-sm sm:text-base">
              <span className="text-stone-900 font-normal font-['Onest'] leading-relaxed">At Elysium, </span>
              <span className="text-stone-900 font-medium font-['Onest'] leading-relaxed">we stand as trusted allies to modeling agencies</span>
              <span className="text-stone-900 font-normal font-['Onest'] leading-relaxed">, combining industry expertise with cutting-edge technology.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

