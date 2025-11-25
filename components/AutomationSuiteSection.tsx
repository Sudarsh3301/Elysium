
import Image from 'next/image';

export default function AutomationSuiteSection() {
  return (
    <section className="relative w-full py-16 sm:py-20 md:py-24 lg:py-28 bg-zinc-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large Background Rectangle - Beige Container */}
        <div className="absolute left-1/2 -translate-x-1/2 w-[calc(100%-20px)] sm:w-[calc(100%-40px)] max-w-[1400px] h-full top-0 bg-automationBg rounded-tl-[60px] rounded-br-[60px] sm:rounded-tl-[80px] sm:rounded-br-[80px] lg:rounded-tl-[120px] lg:rounded-br-[120px] pointer-events-none" />

        {/* Section Header */}
        <div className="relative z-10 text-center mb-16 sm:mb-20 lg:mb-24">
          {/* Divider Image */}
          <div className="flex justify-center max-w-full mb-6 sm:mb-8">
            <img src="/divider.svg" alt="" className="max-w-full h-auto w-48 sm:w-64 md:w-auto" />
          </div>
          <h2 className="max-w-3xl mx-auto text-center mb-6 sm:mb-8 px-4 sm:px-0">
            <span className="text-stone-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal font-['ISABELLA_GRAND_Italic'] leading-tight">Meet the </span>
            {/* <span className="text-stone-500 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal font-['ISABELLA_GRAND_Italic'] uppercase leading-tight">Elysium</span> */}
            <span className="text-[rgba(150,120,104,1)] italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal font-['ISABELLA_GRAND_Italic'] uppercase leading-tight">
  Elysium
</span>

            <span className="text-stone-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal font-['ISABELLA_GRAND_Italic'] leading-tight"> Automation Suite</span>
          </h2>

          <p className="max-w-2xl mx-auto text-center mb-12 sm:mb-16 px-4 sm:px-0">
            <span className="text-neutral-700 text-base sm:text-lg font-medium font-['Onest'] leading-relaxed">Created by industry veterans.</span>
            <br /><br />
            <span className="text-neutral-700 text-base sm:text-lg font-normal font-['Onest'] leading-relaxed">Elysium is built with distinct purposes and programs to help modeling agencies stay ahead of the curve in the industry's digital evolution.</span>
          </p>

          {/* Divider Image */}
          <div className="flex justify-center max-w-full">
            <img src="/divider.svg" alt="" className="max-w-full h-auto w-48 sm:w-64 md:w-auto" />
          </div>
        </div>

        {/* Comparison Table - "What we take off your plate" */}
        <div className="relative z-10 mb-12 sm:mb-16">
          <h3 className="text-center text-stone-900 text-3xl sm:text-4xl md:text-5xl font-normal font-['ISABELLA_GRAND_Italic'] leading-tight mb-10 sm:mb-12 lg:mb-16 px-4 sm:px-0">
            What we take off your plate
          </h3>

          {/* Mobile: Stacked Layout */}
          <div className="max-w-[1200px] mx-auto md:hidden space-y-8">
            {/* Old Way - Mobile */}
            <div className="bg-automationBg rounded-[30px] overflow-hidden">
              <div className="bg-stone-900 rounded-t-[30px] h-14 flex items-center px-6">
                <h4 className="text-white text-2xl font-normal font-['ISABELLA_GRAND_Italic']">Old Way</h4>
              </div>
              <div className="bg-white border-t border-stone-300 py-4 px-6">
                <ul className="list-none space-y-3">
                  <li className="flex items-start gap-3">
                    <img src="/tick.svg" alt="" className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700 text-sm font-normal font-['Onest']">15–20 bookings a day max</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <img src="/tick.svg" alt="" className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700 text-sm font-normal font-['Onest']">Manual model pitching, endless follow-ups</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <img src="/tick.svg" alt="" className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700 text-sm font-normal font-['Onest']">Manual model scouting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <img src="/tick.svg" alt="" className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700 text-sm font-normal font-['Onest']">Manual agency content generation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <img src="/tick.svg" alt="" className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700 text-sm font-normal font-['Onest']">Limited data tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <img src="/tick.svg" alt="" className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700 text-sm font-normal font-['Onest']">Agents drowning in emails</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* With Elysium - Mobile */}
            <div className="bg-automationBg rounded-[30px] overflow-hidden">
              <div className="bg-yellow-600 rounded-t-[30px] h-14 flex items-center px-6">
                <h4 className="text-white text-2xl font-normal font-['ISABELLA_GRAND_Italic']">With Elysium</h4>
              </div>
              <div className="bg-white border-t border-stone-300 py-4 px-6">
                <ul className="list-none space-y-3">
                  <li className="flex items-start gap-3">
                    <img src="/tick.svg" alt="" className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700 text-sm font-normal font-['Onest']">50+ bookings per day, same team</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <img src="/tick.svg" alt="" className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700 text-sm font-normal font-['Onest']">Auto-generated visual pitchback material, custom outreach tools</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <img src="/tick.svg" alt="" className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700 text-sm font-normal font-['Onest']">Smart-scouting tool for upcoming faces and rising star alerts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <img src="/tick.svg" alt="" className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700 text-sm font-normal font-['Onest']">Curated newsletters, social media posts, editorials and more</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <img src="/tick.svg" alt="" className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700 text-sm font-normal font-['Onest']">In depth model data, agency analytics and industry trend reports</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <img src="/tick.svg" alt="" className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700 text-sm font-normal font-['Onest']">Time-saving workflows with real-time customizable dashboards</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Desktop: Side-by-side Layout */}
          <div className="max-w-[1200px] mx-auto hidden md:block">
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {/* Old Way Column */}
              <div className="bg-automationBg rounded-tl-[40px] rounded-bl-[40px] overflow-hidden">
                {/* Old Way Header */}
                <div className="bg-stone-900 rounded-tl-[40px] h-14 lg:h-16 flex items-center px-6 lg:px-10">
                  <h4 className="text-white text-2xl lg:text-3xl font-normal font-['ISABELLA_GRAND_Italic']">Old Way</h4>
                </div>

                {/* Old Way Rows */}
                <div className="bg-white border-t border-stone-300 h-24 lg:h-28 flex items-center px-6 lg:px-10">
                  <ul className="list-none">
                    <li className="flex items-start gap-3">
                      <img src="/tick.svg" alt="" className="w-5 h-5 mt-1 flex-shrink-0" />
                      <span className="text-neutral-700 text-sm lg:text-base font-normal font-['Onest']">15–20 bookings a day max</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white border-t border-stone-300 h-14 lg:h-16 flex items-center px-6 lg:px-10">
                  <ul className="list-none">
                    <li className="flex items-start gap-3">
                      <img src="/tick.svg" alt="" className="w-5 h-5 mt-1 flex-shrink-0" />
                      <span className="text-neutral-700 text-sm lg:text-base font-normal font-['Onest']">Manual model pitching, endless follow-ups</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white border-t border-stone-300 h-14 lg:h-16 flex items-center px-6 lg:px-10">
                  <ul className="list-none">
                    <li className="flex items-start gap-3">
                      <img src="/tick.svg" alt="" className="w-5 h-5 mt-1 flex-shrink-0" />
                      <span className="text-neutral-700 text-sm lg:text-base font-normal font-['Onest']">Manual model scouting</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white border-t border-stone-300 h-14 lg:h-16 flex items-center px-6 lg:px-10">
                  <ul className="list-none">
                    <li className="flex items-start gap-3">
                      <img src="/tick.svg" alt="" className="w-5 h-5 mt-1 flex-shrink-0" />
                      <span className="text-neutral-700 text-sm lg:text-base font-normal font-['Onest']">Manual agency content generation</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white border-t border-stone-300 h-14 lg:h-16 flex items-center px-6 lg:px-10">
                  <ul className="list-none">
                    <li className="flex items-start gap-3">
                      <img src="/tick.svg" alt="" className="w-5 h-5 mt-1 flex-shrink-0" />
                      <span className="text-neutral-700 text-sm lg:text-base font-normal font-['Onest']">Limited data tracking</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white border-t border-stone-300 rounded-bl-[40px] h-14 lg:h-16 flex items-center px-6 lg:px-10">
                  <ul className="list-none">
                    <li className="flex items-start gap-3">
                      <img src="/tick.svg" alt="" className="w-5 h-5 mt-1 flex-shrink-0" />
                      <span className="text-neutral-700 text-sm lg:text-base font-normal font-['Onest']">Agents drowning in emails</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* With Elysium Column */}
              <div className="bg-automationBg rounded-tr-[40px] rounded-br-[40px] overflow-hidden">
                {/* With Elysium Header */}
                <div className="bg-yellow-600 rounded-tr-[40px] h-14 lg:h-16 flex items-center px-6 lg:px-10">
                  <h4 className="text-white text-2xl lg:text-3xl font-normal font-['ISABELLA_GRAND_Italic']">With Elysium</h4>
                </div>

                {/* With Elysium Rows */}
                <div className="bg-white border-t border-stone-300 h-24 lg:h-28 flex items-center px-6 lg:px-10">
                  <ul className="list-none">
                    <li className="flex items-start gap-3">
                      <img src="/tick.svg" alt="" className="w-5 h-5 mt-1 flex-shrink-0" />
                      <span className="text-neutral-700 text-sm lg:text-base font-normal font-['Onest']">50+ bookings per day, same team</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white border-t border-stone-300 h-14 lg:h-16 flex items-center px-6 lg:px-10">
                  <ul className="list-none">
                    <li className="flex items-start gap-3">
                      <img src="/tick.svg" alt="" className="w-5 h-5 mt-1 flex-shrink-0" />
                      <span className="text-neutral-700 text-sm lg:text-base font-normal font-['Onest']">Auto-generated visual pitchback material, custom outreach tools</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white border-t border-stone-300 h-14 lg:h-16 flex items-center px-6 lg:px-10">
                  <ul className="list-none">
                    <li className="flex items-start gap-3">
                      <img src="/tick.svg" alt="" className="w-5 h-5 mt-1 flex-shrink-0" />
                      <span className="text-neutral-700 text-sm lg:text-base font-normal font-['Onest']">Smart-scouting tool for upcoming faces and rising star alerts</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white border-t border-stone-300 h-14 lg:h-16 flex items-center px-6 lg:px-10">
                  <ul className="list-none">
                    <li className="flex items-start gap-3">
                      <img src="/tick.svg" alt="" className="w-5 h-5 mt-1 flex-shrink-0" />
                      <span className="text-neutral-700 text-sm lg:text-base font-normal font-['Onest']">Curated newsletters, social media posts, editorials and more</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white border-t border-stone-300 h-14 lg:h-16 flex items-center px-6 lg:px-10">
                  <ul className="list-none">
                    <li className="flex items-start gap-3">
                      <img src="/tick.svg" alt="" className="w-5 h-5 mt-1 flex-shrink-0" />
                      <span className="text-neutral-700 text-sm lg:text-base font-normal font-['Onest']">In depth model data, agency analytics and industry trend reports</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white border-t border-stone-300 rounded-br-[40px] h-14 lg:h-16 flex items-center px-6 lg:px-10">
                  <ul className="list-none">
                    <li className="flex items-start gap-3">
                      <img src="/tick.svg" alt="" className="w-5 h-5 mt-1 flex-shrink-0" />
                      <span className="text-neutral-700 text-sm lg:text-base font-normal font-['Onest']">Time-saving workflows with real-time customizable dashboards</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mt-8 sm:mt-10 lg:mt-12">
            <button type="button" className="w-full max-w-sm sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-stone-900 text-white text-base sm:text-lg font-medium font-['Onest'] rounded-lg hover:bg-stone-800 transition-colors">
              See what your week looks like with Elysium
            </button>
          </div>
        </div>

        {/* Divider Image Before Agent Cards */}
        <div className="relative z-10 flex justify-center mb-16 sm:mb-20 lg:mb-24">
          <img src="/divider.svg" alt="" className="max-w-full h-auto w-48 sm:w-64 md:w-auto" />
        </div>

        {/* Athena - The Hot Leads Strategist */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-20 sm:mb-24 lg:mb-32">
          <div className="relative order-2 lg:order-1">
            <div className="hidden md:block absolute w-full h-32 -left-4 -top-10 rounded-tl-[110px] rounded-br-[110px] border border-white mix-blend-difference" />
            <div className="hidden md:block absolute w-full h-full left-6 top-6 rounded-tl-[80px] rounded-br-[80px] border border-white mix-blend-difference" />
            <Image
              src="/Athena.png"
              alt="Athena AI Agent"
              width={600}
              height={600}
              className="w-full aspect-square rounded-tl-[60px] rounded-br-[60px] md:rounded-tl-[100px] md:rounded-br-[100px] object-cover"
              loading="lazy"
              quality={85}
            />
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-stone-900 text-base sm:text-lg lg:text-xl font-normal font-['Onest'] uppercase mb-3 sm:mb-4">MEET Athena</p>
            <h3 className="text-stone-900 text-3xl sm:text-4xl lg:text-5xl font-normal font-['ISABELLA_GRAND_Italic'] leading-tight mb-4 sm:mb-6">The Hot Leads Strategist</h3>
            <p className="text-stone-900 text-lg sm:text-xl font-normal font-['Onest'] leading-relaxed mb-3 sm:mb-4">Goddess of Wisdom. Master of Matchmaking.</p>
            <p className="text-stone-900 text-base sm:text-lg font-normal font-['Onest'] leading-relaxed mb-5 sm:mb-6">Let Athena streamline inbound inquiries and maximize model placements.</p>

            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <li className="flex items-start gap-3">
                <img src="/tick.svg" alt="" className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-stone-900 text-sm sm:text-base font-normal font-['Onest'] leading-relaxed">Generate inquiry-matching visual pitchback material using selected model portfolios</span>
              </li>
              <li className="flex items-start gap-3">
                <img src="/tick.svg" alt="" className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-stone-900 text-sm sm:text-base font-normal font-['Onest'] leading-relaxed">Instantly smart-match client casting inquiries with suitable talent</span>
              </li>
              <li className="flex items-start gap-3">
                <img src="/tick.svg" alt="" className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-stone-900 text-sm sm:text-base font-normal font-['Onest'] leading-relaxed">Create and send promotional email content based on roster activity and real-time availability</span>
              </li>
            </ul>

            <div className="relative inline-block w-full lg:w-auto">
              <div className="absolute w-full lg:w-96 h-12 bg-stone-900 rounded-tr-[20px] rounded-bl-[20px] translate-x-[4px] translate-y-[4px] sm:translate-x-[6px] sm:translate-y-[6px]" />
              <button type="button" className="relative w-full lg:w-96 h-12 bg-zinc-100 rounded-tr-[20px] rounded-bl-[20px] border border-stone-900 flex items-center justify-center hover:bg-white transition-colors">
                <span className="text-stone-900 text-sm sm:text-base font-normal font-['Onest']">Turn inquiries into bookings, intelligently.</span>
              </button>
            </div>
          </div>
        </div>

        {/* Apollo - The Oracle of New Talent & Trends */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-20 sm:mb-24 lg:mb-32">
          <div className="order-1">
            <p className="text-stone-900 text-base sm:text-lg lg:text-xl font-normal font-['Onest'] uppercase mb-3 sm:mb-4">MEET Apollo</p>
            <h3 className="text-stone-900 text-3xl sm:text-4xl lg:text-5xl font-normal font-['ISABELLA_GRAND_Italic'] leading-tight mb-4 sm:mb-6">The Oracle of New Talent & Trends</h3>
            <p className="text-stone-900 text-lg sm:text-xl font-normal font-['Onest'] leading-relaxed mb-3 sm:mb-4">God of Light. Discoverer of Stars.</p>
            <p className="text-stone-900 text-base sm:text-lg font-normal font-['Onest'] leading-relaxed mb-5 sm:mb-6">Let Apollo illuminate the path to your next breakout talent.</p>

            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <li className="flex items-start gap-3">
                <img src="/tick.svg" alt="" className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-stone-900 text-sm sm:text-base font-normal font-['Onest'] leading-relaxed">AI-powered online and cross-agency model scouting</span>
              </li>
              <li className="flex items-start gap-3">
                <img src="/tick.svg" alt="" className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-stone-900 text-sm sm:text-base font-normal font-['Onest'] leading-relaxed">Track rising stars, fashion trend data by location, and competitive industry insights</span>
              </li>
              <li className="flex items-start gap-3">
                <img src="/tick.svg" alt="" className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-stone-900 text-sm sm:text-base font-normal font-['Onest'] leading-relaxed">Receive reports on emerging talent and market movers based on quantifiable online exposure, social media movement, and brand work</span>
              </li>
            </ul>

            <div className="relative inline-block w-full lg:w-auto">
              <div className="absolute w-full lg:w-96 h-12 bg-stone-900 rounded-tr-[20px] rounded-bl-[20px] translate-x-[4px] translate-y-[4px] sm:translate-x-[6px] sm:translate-y-[6px]" />
              <button type="button" className="relative w-full lg:w-96 h-12 bg-zinc-100 rounded-tr-[20px] rounded-bl-[20px] border border-stone-900 flex items-center justify-center hover:bg-white transition-colors">
                <span className="text-stone-900 text-sm sm:text-base font-normal font-['Onest']">Scout smarter. Stay ahead of the curve.</span>
              </button>
            </div>
          </div>

          <div className="relative order-2">
            <div className="hidden md:block absolute w-full h-32 -right-4 -top-10 rounded-tr-[110px] rounded-bl-[110px] border border-white mix-blend-difference" />
            <div className="hidden md:block absolute w-full h-full right-6 top-6 rounded-tr-[80px] rounded-bl-[80px] border border-white mix-blend-difference" />
            <Image
              src="/Apollo.png"
              alt="Apollo AI Agent"
              width={600}
              height={600}
              className="w-full aspect-square rounded-tr-[60px] rounded-bl-[60px] md:rounded-tr-[100px] md:rounded-bl-[100px] object-cover"
              loading="lazy"
              quality={85}
            />
          </div>
        </div>

        {/* Aphrodites - The Muse of Storytelling & Spotlight */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-20 sm:mb-24 lg:mb-32">
          <div className="relative order-2 lg:order-1">
            <div className="hidden md:block absolute w-full h-32 -left-4 -top-10 rounded-tl-[110px] rounded-br-[110px] border border-white mix-blend-difference" />
            <div className="hidden md:block absolute w-full h-full left-6 top-6 rounded-tl-[80px] rounded-br-[80px] border border-white mix-blend-difference" />
            <Image
              src="/Aphrodite.png"
              alt="Aphrodites AI Agent"
              width={600}
              height={600}
              className="w-full aspect-square rounded-tl-[60px] rounded-br-[60px] md:rounded-tl-[100px] md:rounded-br-[100px] object-cover"
              loading="lazy"
              quality={85}
            />
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-stone-900 text-base sm:text-lg lg:text-xl font-normal font-['Onest'] uppercase mb-3 sm:mb-4">MEET Aphrodites</p>
            <h3 className="text-stone-900 text-3xl sm:text-4xl lg:text-5xl font-normal font-['ISABELLA_GRAND_Italic'] leading-tight mb-4 sm:mb-6">The Muse of Storytelling & Spotlight</h3>
            <p className="text-stone-900 text-lg sm:text-xl font-normal font-['Onest'] leading-relaxed mb-3 sm:mb-4">Goddess of Beauty. Your Editorial Engine.</p>
            <p className="text-stone-900 text-base sm:text-lg font-normal font-['Onest'] leading-relaxed mb-5 sm:mb-6">Let Aphrodites showcase your agency's brilliance with effortless content generation.</p>

            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <li className="flex items-start gap-3">
                <img src="/tick.svg" alt="" className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-stone-900 text-sm sm:text-base font-normal font-['Onest'] leading-relaxed">Effortlessly compile newsletters featuring model work, press, and campaigns using AI + cloud file integration</span>
              </li>
              <li className="flex items-start gap-3">
                <img src="/tick.svg" alt="" className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-stone-900 text-sm sm:text-base font-normal font-['Onest'] leading-relaxed">Highlight new faces, fashion trends and written agency updates</span>
              </li>
              <li className="flex items-start gap-3">
                <img src="/tick.svg" alt="" className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-stone-900 text-sm sm:text-base font-normal font-['Onest'] leading-relaxed">Offers AI-powered visual editorial and social media drafts to elevate your agency's narrative</span>
              </li>
            </ul>

            <div className="relative inline-block w-full lg:w-auto">
              <div className="absolute w-full lg:w-96 h-12 bg-stone-900 rounded-tr-[20px] rounded-bl-[20px] translate-x-[4px] translate-y-[4px] sm:translate-x-[6px] sm:translate-y-[6px]" />
              <button type="button" className="relative w-full lg:w-96 h-12 bg-zinc-100 rounded-tr-[20px] rounded-bl-[20px] border border-stone-900 flex items-center justify-center hover:bg-white transition-colors">
                <span className="text-stone-900 text-sm sm:text-base font-normal font-['Onest']">Keep your clients, press, and partners enchanted.</span>
              </button>
            </div>
          </div>
        </div>

        {/* Artemis - The Architect of Data-Driven Insight */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="order-1">
            <p className="text-stone-900 text-base sm:text-lg lg:text-xl font-normal font-['Onest'] uppercase mb-3 sm:mb-4">MEET Artemis</p>
            <h3 className="text-stone-900 text-3xl sm:text-4xl lg:text-5xl font-normal font-['ISABELLA_GRAND_Italic'] leading-tight mb-4 sm:mb-6">The Architect of Data-Driven Insight.</h3>
            <p className="text-stone-900 text-lg sm:text-xl font-normal font-['Onest'] leading-relaxed mb-3 sm:mb-4">Goddess of Clarity. Guardian of Precision.</p>
            <p className="text-stone-900 text-base sm:text-lg font-normal font-['Onest'] leading-relaxed mb-5 sm:mb-6">Let Artemis transform raw data into clear direction — revealing what's working, what's stalling, and where your next opportunity hides.</p>

            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <li className="flex items-start gap-3">
                <img src="/tick.svg" alt="" className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-stone-900 text-sm sm:text-base font-normal font-['Onest'] leading-relaxed">Track in-depth model, agent, and agency performance metrics in real time</span>
              </li>
              <li className="flex items-start gap-3">
                <img src="/tick.svg" alt="" className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-stone-900 text-sm sm:text-base font-normal font-['Onest'] leading-relaxed">Uncover growth patterns, revenue insights, client relationship trends, and system optimization metrics</span>
              </li>
              <li className="flex items-start gap-3">
                <img src="/tick.svg" alt="" className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-stone-900 text-sm sm:text-base font-normal font-['Onest'] leading-relaxed">Predict future booking and performance opportunities before they happen</span>
              </li>
            </ul>

            <div className="relative inline-block w-full lg:w-auto">
              <div className="absolute w-full lg:w-80 h-12 bg-stone-900 rounded-tr-[20px] rounded-bl-[20px] translate-x-[4px] translate-y-[4px] sm:translate-x-[6px] sm:translate-y-[6px]" />
              <button type="button" className="relative w-full lg:w-80 h-12 bg-zinc-100 rounded-tr-[20px] rounded-bl-[20px] border border-stone-900 flex items-center justify-center hover:bg-white transition-colors">
                <span className="text-stone-900 text-sm sm:text-base font-normal font-['Onest']">Scale with precision, not assumption.</span>
              </button>
            </div>
          </div>

          <div className="relative order-2">
            <div className="hidden md:block absolute w-full h-32 -right-4 -top-10 rounded-tr-[110px] rounded-bl-[110px] border border-white mix-blend-difference" />
            <div className="hidden md:block absolute w-full h-full right-6 top-6 rounded-tr-[80px] rounded-bl-[80px] border border-white mix-blend-difference" />
            <Image
              src="/Artemis.png"
              alt="Artemis AI Agent"
              width={600}
              height={600}
              className="w-full aspect-square rounded-tr-[60px] rounded-bl-[60px] md:rounded-tr-[100px] md:rounded-bl-[100px] object-cover"
              loading="lazy"
              quality={85}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

