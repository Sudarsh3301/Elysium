export default function ComparisonSection() {
  return (
    <section className="relative w-full py-32 bg-zinc-100">
      <div className="max-w-[1440px] mx-auto px-8">
        {/* Section Title */}
        <h2 className="text-center text-stone-900 text-5xl font-normal font-['ISABELLA_GRAND_Italic'] leading-tight mb-16">
          What we take off your plate
        </h2>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 gap-0 shadow-lg">
          {/* Old Way Header */}
          <div className="bg-stone-900 rounded-tl-[40px] h-16 flex items-center px-10">
            <h3 className="text-white text-3xl font-normal font-['ISABELLA_GRAND_Italic']">Old Way</h3>
          </div>
          
          {/* With Elysium Header */}
          <div className="bg-yellow-600 rounded-tl-[40px] border border-black/20 h-16 flex items-center px-10">
            <h3 className="text-white text-3xl font-normal font-['ISABELLA_GRAND_Italic']">With Elysium</h3>
          </div>
          
          {/* Row 1 */}
          <div className="bg-white border border-black/20 h-28 flex items-center px-10">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-stone-900 rounded-full flex-shrink-0" />
              <span className="text-neutral-700 text-base font-normal font-['Onest']">15–20 bookings a day max</span>
            </div>
          </div>
          <div className="bg-white border border-black/20 h-28 flex items-center px-10">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-yellow-600 rounded-sm flex-shrink-0" />
              <span className="text-neutral-700 text-base font-normal font-['Onest']">50+ bookings per day, same team</span>
            </div>
          </div>
          
          {/* Row 2 */}
          <div className="bg-white border border-black/20 h-16 flex items-center px-10">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-stone-900 rounded-full flex-shrink-0" />
              <span className="text-neutral-700 text-base font-normal font-['Onest']">Manual model pitching, endless follow-ups</span>
            </div>
          </div>
          <div className="bg-white border border-black/20 h-16 flex items-center px-10">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-yellow-600 rounded-sm flex-shrink-0" />
              <span className="text-neutral-700 text-base font-normal font-['Onest']">Auto-generated visual pitchback material, custom outreach tools</span>
            </div>
          </div>
          
          {/* Row 3 */}
          <div className="bg-white border border-black/20 h-16 flex items-center px-10">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-stone-900 rounded-full flex-shrink-0" />
              <span className="text-neutral-700 text-base font-normal font-['Onest']">Manual model scouting</span>
            </div>
          </div>
          <div className="bg-white border border-black/20 h-16 flex items-center px-10">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-yellow-600 rounded-sm flex-shrink-0" />
              <span className="text-neutral-700 text-base font-normal font-['Onest']">Smart-scouting tool for upcoming faces and rising star alerts</span>
            </div>
          </div>
          
          {/* Row 4 */}
          <div className="bg-white border border-black/20 h-16 flex items-center px-10">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-stone-900 rounded-full flex-shrink-0" />
              <span className="text-neutral-700 text-base font-normal font-['Onest']">Manual agency content generation</span>
            </div>
          </div>
          <div className="bg-white border border-black/20 h-16 flex items-center px-10">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-yellow-600 rounded-sm flex-shrink-0" />
              <span className="text-neutral-700 text-base font-normal font-['Onest']">Curated newsletters, social media posts, editorials and more</span>
            </div>
          </div>
          
          {/* Row 5 */}
          <div className="bg-white border border-black/20 h-16 flex items-center px-10">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-stone-900 rounded-full flex-shrink-0" />
              <span className="text-neutral-700 text-base font-normal font-['Onest']">Limited data tracking</span>
            </div>
          </div>
          <div className="bg-white border border-black/20 h-16 flex items-center px-10">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-yellow-600 rounded-sm flex-shrink-0" />
              <span className="text-neutral-700 text-base font-normal font-['Onest']">In depth model data, agency analytics and industry trend reports</span>
            </div>
          </div>
          
          {/* Row 6 */}
          <div className="bg-white border border-black/20 rounded-br-[40px] h-16 flex items-center px-10">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-stone-900 rounded-full flex-shrink-0" />
              <span className="text-neutral-700 text-base font-normal font-['Onest']">Agents drowning in emails</span>
            </div>
          </div>
          <div className="bg-white border border-black/20 rounded-br-[40px] h-16 flex items-center px-10">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-yellow-600 rounded-sm flex-shrink-0" />
              <span className="text-neutral-700 text-base font-normal font-['Onest']">Time-saving workflows with real-time customizable dashboards</span>
            </div>
          </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-16">
          <div className="relative">
            <div className="absolute w-80 h-12 bg-stone-900 rounded-tr-[20px] rounded-bl-[20px] translate-x-[5px] translate-y-[6px]" />
            <button type="button" className="relative w-80 h-12 bg-white rounded-tr-[20px] rounded-bl-[20px] border border-stone-900 flex items-center justify-center hover:bg-zinc-50 transition-colors">
              <span className="text-stone-900 text-base font-normal font-['Timeless']">See what your week looks like with Elysium</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

