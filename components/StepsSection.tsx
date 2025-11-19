export default function StepsSection() {
  return (
    <section className="relative w-full py-24 bg-zinc-100">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-stone-900 text-5xl font-normal font-['ISABELLA_GRAND_Italic'] mb-4">Steps to Success</h2>
        <p className="text-neutral-700 text-base font-normal font-['Onest']">From setup to scale — an intelligent 4-step path to operational success</p>
      </div>
      
      {/* Steps Grid */}
      <div className="max-w-[1216px] mx-auto">
        <div className="grid grid-cols-2 gap-x-16 gap-y-12">
          {/* Step 01 */}
          <div className="relative">
            <div className="text-red-300 text-7xl font-normal font-['ISABELLA_GRAND_Italic'] opacity-50 mb-4">01</div>
            <h3 className="text-black text-3xl font-normal font-['ISABELLA_GRAND_Italic'] mb-4">Book Discovery Call</h3>
            <p className="text-neutral-700 text-base font-normal font-['Onest'] leading-6">
              Connect with our team to discuss Elysium's automation systems built for your agency's needs and goals.
            </p>
          </div>
          
          {/* Step 02 */}
          <div className="relative">
            <div className="text-red-300 text-7xl font-normal font-['ISABELLA_GRAND_Italic'] opacity-50 mb-4">02</div>
            <h3 className="text-black text-3xl font-normal font-['ISABELLA_GRAND_Italic'] mb-4">Get Your Roadmap</h3>
            <p className="text-neutral-700 text-base font-normal font-['Onest'] leading-6">
              Receive a comprehensive roadmap explaining how our automation tools fit your agency, step by step.
            </p>
          </div>
          
          {/* Divider Line */}
          <div className="col-span-2 h-px bg-black/10" />
          
          {/* Step 03 */}
          <div className="relative">
            <div className="text-red-300 text-7xl font-normal font-['ISABELLA_GRAND_Italic'] opacity-50 mb-4">03</div>
            <h3 className="text-black text-3xl font-normal font-['ISABELLA_GRAND_Italic'] mb-4">Integration of Smart Tools</h3>
            <p className="text-neutral-700 text-base font-normal font-['Onest'] leading-6">
              Use Elysium's smart tools to automate tasks, streamline communications, and increase booking potential.
            </p>
          </div>
          
          {/* Step 04 */}
          <div className="relative">
            <div className="text-red-300 text-7xl font-normal font-['ISABELLA_GRAND_Italic'] opacity-50 mb-4">04</div>
            <h3 className="text-black text-3xl font-normal font-['ISABELLA_GRAND_Italic'] mb-4">Scale and Optimize</h3>
            <p className="text-neutral-700 text-base font-normal font-['Onest'] leading-6">
              Watch your agency scale efficiently while we continuously optimize your AI systems for maximum results over time.
            </p>
          </div>
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="max-w-[1362px] mx-auto mt-24">
        <div className="bg-stone-300 rounded-tl-[10px] rounded-tr-[40px] rounded-bl-[40px] rounded-br-[10px] h-32 flex items-center justify-center relative">
          <div className="absolute w-[1326px] h-24 border border-white rounded-tl-[30px] rounded-br-[30px] mix-blend-difference" />
          <p className="text-center relative z-10">
            <span className="text-black text-base font-normal font-['Onest'] leading-6">At Elysium, </span>
            <span className="text-black text-base font-medium font-['Onest'] leading-6">we stand as trusted allies to modeling agencies</span>
            <span className="text-black text-base font-normal font-['Onest'] leading-6">, combining industry expertise with cutting-edge technology.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

