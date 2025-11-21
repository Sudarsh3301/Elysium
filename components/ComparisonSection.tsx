export default function ComparisonSection() {
  return (
    <section className="relative w-full py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-zinc-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-center text-stone-900 text-3xl sm:text-4xl md:text-5xl font-normal font-['ISABELLA_GRAND_Italic'] leading-tight mb-10 sm:mb-12 lg:mb-16">
          What we take off your plate
        </h2>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 shadow-lg rounded-[40px] overflow-hidden">
          {/* Old Way Header */}
          <div className="bg-stone-900 rounded-t-[40px] md:rounded-tl-[40px] md:rounded-tr-none h-14 sm:h-16 flex items-center px-6 sm:px-8 lg:px-10">
            <h3 className="text-white text-2xl sm:text-3xl font-normal font-['ISABELLA_GRAND_Italic']">Old Way</h3>
          </div>

          {/* With Elysium Header */}
          <div className="bg-yellow-600 md:rounded-tr-[40px] border-t md:border-t-0 border-black/20 h-14 sm:h-16 flex items-center px-6 sm:px-8 lg:px-10">
            <h3 className="text-white text-2xl sm:text-3xl font-normal font-['ISABELLA_GRAND_Italic']">With Elysium</h3>
          </div>

          {/* Row 1 */}
          <div className="bg-white border-t border-black/20 min-h-[7rem] sm:h-24 lg:h-28 flex items-center px-6 sm:px-8 lg:px-10 py-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-stone-900 rounded-full flex-shrink-0" />
              <span className="text-neutral-700 text-sm sm:text-base font-normal font-['Onest']">15–20 bookings a day max</span>
            </div>
          </div>
          <div className="bg-white border-t border-black/20 min-h-[7rem] sm:h-24 lg:h-28 flex items-center px-6 sm:px-8 lg:px-10 py-4">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-yellow-600 rounded-sm flex-shrink-0" />
              <span className="text-neutral-700 text-sm sm:text-base font-normal font-['Onest']">50+ bookings per day, same team</span>
            </div>
          </div>

          {/* Row 2 */}
          <div className="bg-white border-t border-black/20 min-h-[4rem] sm:h-14 lg:h-16 flex items-center px-6 sm:px-8 lg:px-10 py-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-stone-900 rounded-full flex-shrink-0" />
              <span className="text-neutral-700 text-sm sm:text-base font-normal font-['Onest']">Manual model pitching, endless follow-ups</span>
            </div>
          </div>
          <div className="bg-white border-t border-black/20 min-h-[4rem] sm:h-14 lg:h-16 flex items-center px-6 sm:px-8 lg:px-10 py-3">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-yellow-600 rounded-sm flex-shrink-0" />
              <span className="text-neutral-700 text-sm sm:text-base font-normal font-['Onest']">Auto-generated visual pitchback material, custom outreach tools</span>
            </div>
          </div>

          {/* Row 3 */}
          <div className="bg-white border-t border-black/20 min-h-[4rem] sm:h-14 lg:h-16 flex items-center px-6 sm:px-8 lg:px-10 py-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-stone-900 rounded-full flex-shrink-0" />
              <span className="text-neutral-700 text-sm sm:text-base font-normal font-['Onest']">Manual model scouting</span>
            </div>
          </div>
          <div className="bg-white border-t border-black/20 min-h-[4rem] sm:h-14 lg:h-16 flex items-center px-6 sm:px-8 lg:px-10 py-3">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-yellow-600 rounded-sm flex-shrink-0" />
              <span className="text-neutral-700 text-sm sm:text-base font-normal font-['Onest']">Smart-scouting tool for upcoming faces and rising star alerts</span>
            </div>
          </div>

          {/* Row 4 */}
          <div className="bg-white border-t border-black/20 min-h-[4rem] sm:h-14 lg:h-16 flex items-center px-6 sm:px-8 lg:px-10 py-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-stone-900 rounded-full flex-shrink-0" />
              <span className="text-neutral-700 text-sm sm:text-base font-normal font-['Onest']">Manual agency content generation</span>
            </div>
          </div>
          <div className="bg-white border-t border-black/20 min-h-[4rem] sm:h-14 lg:h-16 flex items-center px-6 sm:px-8 lg:px-10 py-3">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-yellow-600 rounded-sm flex-shrink-0" />
              <span className="text-neutral-700 text-sm sm:text-base font-normal font-['Onest']">Curated newsletters, social media posts, editorials and more</span>
            </div>
          </div>

          {/* Row 5 */}
          <div className="bg-white border-t border-black/20 min-h-[4rem] sm:h-14 lg:h-16 flex items-center px-6 sm:px-8 lg:px-10 py-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-stone-900 rounded-full flex-shrink-0" />
              <span className="text-neutral-700 text-sm sm:text-base font-normal font-['Onest']">Limited data tracking</span>
            </div>
          </div>
          <div className="bg-white border-t border-black/20 min-h-[4rem] sm:h-14 lg:h-16 flex items-center px-6 sm:px-8 lg:px-10 py-3">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-yellow-600 rounded-sm flex-shrink-0" />
              <span className="text-neutral-700 text-sm sm:text-base font-normal font-['Onest']">In depth model data, agency analytics and industry trend reports</span>
            </div>
          </div>

          {/* Row 6 */}
          <div className="bg-white border-t border-black/20 md:rounded-bl-[40px] min-h-[4rem] sm:h-14 lg:h-16 flex items-center px-6 sm:px-8 lg:px-10 py-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-stone-900 rounded-full flex-shrink-0" />
              <span className="text-neutral-700 text-sm sm:text-base font-normal font-['Onest']">Agents drowning in emails</span>
            </div>
          </div>
          <div className="bg-white border-t border-black/20 rounded-b-[40px] md:rounded-bl-none md:rounded-br-[40px] min-h-[4rem] sm:h-14 lg:h-16 flex items-center px-6 sm:px-8 lg:px-10 py-3">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-yellow-600 rounded-sm flex-shrink-0" />
              <span className="text-neutral-700 text-sm sm:text-base font-normal font-['Onest']">Time-saving workflows with real-time customizable dashboards</span>
            </div>
          </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12 sm:mt-14 lg:mt-16">
          <div className="relative w-full max-w-sm sm:w-auto">
            <div className="absolute w-full sm:w-80 h-12 bg-stone-900 rounded-tr-[20px] rounded-bl-[20px] translate-x-[4px] translate-y-[4px] sm:translate-x-[5px] sm:translate-y-[6px]" />
            <button type="button" className="relative w-full sm:w-80 h-12 bg-white rounded-tr-[20px] rounded-bl-[20px] border border-stone-900 flex items-center justify-center hover:bg-zinc-50 transition-colors">
              <span className="text-stone-900 text-sm sm:text-base font-normal font-['Timeless'] px-4">See what your week looks like with Elysium</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

