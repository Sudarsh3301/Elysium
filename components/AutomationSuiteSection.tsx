export default function AutomationSuiteSection() {
  return (
    <section className="relative w-full py-32 bg-zinc-100">
      <div className="max-w-[1440px] mx-auto px-8">
        {/* Large Background Rectangle */}
        <div className="absolute left-1/2 -translate-x-1/2 w-[calc(100%-80px)] max-w-[1360px] h-full top-0 bg-stone-300 rounded-tl-[120px] rounded-br-[120px] pointer-events-none" />

        {/* Section Header */}
        <div className="relative z-10 text-center mb-24">
          {/* Decorative Lines */}
          <div className="relative flex items-center justify-center mb-12">
            <div className="absolute left-1/2 -translate-x-full w-[360px] h-px bg-stone-900" />
            <div className="absolute left-1/2 w-[360px] h-px bg-stone-900" />
          </div>

          <h2 className="max-w-3xl mx-auto text-center mb-8">
            <span className="text-stone-900 text-7xl font-normal font-['ISABELLA_GRAND_Italic'] leading-tight">Meet the </span>
            <span className="text-stone-500 text-7xl font-normal font-['ISABELLA_GRAND_Italic'] uppercase leading-tight">Elysium</span>
            <span className="text-stone-900 text-7xl font-normal font-['ISABELLA_GRAND_Italic'] leading-tight"> Automation Suite</span>
          </h2>

          <p className="max-w-2xl mx-auto text-center">
            <span className="text-neutral-700 text-base font-medium font-['Onest'] leading-relaxed">Created by industry veterans.</span>
            <br /><br />
            <span className="text-neutral-700 text-base font-normal font-['Onest'] leading-relaxed">Elysium is built with distinct purposes and programs to help modeling agencies stay ahead of the curve in the industry's digital evolution.</span>
          </p>
        </div>

        {/* Athena - The Hot Leads Strategist */}
        <div className="relative z-10 grid grid-cols-2 gap-16 items-center mb-32">
          <div className="relative">
            <div className="absolute w-full h-32 -left-4 -top-10 rounded-tl-[110px] rounded-br-[110px] border border-white mix-blend-difference" />
            <div className="absolute w-full h-full left-6 top-6 rounded-tl-[80px] rounded-br-[80px] border border-white mix-blend-difference" />
            <img
              src="/fd36440db01cbba87d25446db3251733b3e469b8.png"
              alt="Athena AI Agent"
              className="w-full aspect-square rounded-tl-[100px] rounded-br-[100px] object-cover"
            />
          </div>

          <div>
            <p className="text-stone-900 text-xl font-normal font-['Onest'] uppercase mb-4">MEET Athena</p>
            <h3 className="text-stone-900 text-5xl font-normal font-['ISABELLA_GRAND_Italic'] leading-tight mb-6">The Hot Leads Strategist</h3>
            <p className="text-stone-900 text-xl font-normal font-['Onest'] leading-relaxed mb-4">Goddess of Wisdom. Master of Matchmaking.</p>
            <p className="text-stone-900 text-base font-normal font-['Onest'] leading-relaxed mb-6">Let Athena streamline inbound inquiries and maximize model placements.</p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 mt-0.5 bg-gradient-to-br from-stone-400 via-stone-400 to-rose-100 rounded-sm flex-shrink-0" />
                <span className="text-stone-900 text-base font-normal font-['Onest'] leading-relaxed">Generate inquiry-matching visual pitchback material using selected model portfolios</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 mt-0.5 bg-gradient-to-br from-stone-400 via-stone-400 to-rose-100 rounded-sm flex-shrink-0" />
                <span className="text-stone-900 text-base font-normal font-['Onest'] leading-relaxed">Instantly smart-match client casting inquiries with suitable talent</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 mt-0.5 bg-gradient-to-br from-stone-400 via-stone-400 to-rose-100 rounded-sm flex-shrink-0" />
                <span className="text-stone-900 text-base font-normal font-['Onest'] leading-relaxed">Create and send promotional email content based on roster activity and real-time availability</span>
              </li>
            </ul>

            <div className="relative inline-block">
              <div className="absolute w-96 h-12 bg-stone-900 rounded-tr-[20px] rounded-bl-[20px] translate-x-[6px] translate-y-[6px]" />
              <button type="button" className="relative w-96 h-12 bg-zinc-100 rounded-tr-[20px] rounded-bl-[20px] border border-stone-900 flex items-center justify-center hover:bg-white transition-colors">
                <span className="text-stone-900 text-base font-normal font-['Onest']">Turn inquiries into bookings, intelligently.</span>
              </button>
            </div>
          </div>
        </div>

        {/* Apollo - The Oracle of New Talent & Trends */}
        <div className="relative z-10 grid grid-cols-2 gap-16 items-center mb-32">
          <div>
            <p className="text-stone-900 text-xl font-normal font-['Onest'] uppercase mb-4">MEET Apollo</p>
            <h3 className="text-stone-900 text-5xl font-normal font-['ISABELLA_GRAND_Italic'] leading-tight mb-6">The Oracle of New Talent & Trends</h3>
            <p className="text-stone-900 text-xl font-normal font-['Onest'] leading-relaxed mb-4">God of Light. Discoverer of Stars.</p>
            <p className="text-stone-900 text-base font-normal font-['Onest'] leading-relaxed mb-6">Let Apollo illuminate the path to your next breakout talent.</p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 mt-0.5 bg-gradient-to-br from-stone-400 via-stone-400 to-rose-100 rounded-sm flex-shrink-0" />
                <span className="text-stone-900 text-base font-normal font-['Onest'] leading-relaxed">AI-powered online and cross-agency model scouting</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 mt-0.5 bg-gradient-to-br from-stone-400 via-stone-400 to-rose-100 rounded-sm flex-shrink-0" />
                <span className="text-stone-900 text-base font-normal font-['Onest'] leading-relaxed">Track rising stars, fashion trend data by location, and competitive industry insights</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 mt-0.5 bg-gradient-to-br from-stone-400 via-stone-400 to-rose-100 rounded-sm flex-shrink-0" />
                <span className="text-stone-900 text-base font-normal font-['Onest'] leading-relaxed">Receive reports on emerging talent and market movers based on quantifiable online exposure, social media movement, and brand work</span>
              </li>
            </ul>

            <div className="relative inline-block">
              <div className="absolute w-96 h-12 bg-stone-900 rounded-tr-[20px] rounded-bl-[20px] translate-x-[6px] translate-y-[6px]" />
              <button type="button" className="relative w-96 h-12 bg-zinc-100 rounded-tr-[20px] rounded-bl-[20px] border border-stone-900 flex items-center justify-center hover:bg-white transition-colors">
                <span className="text-stone-900 text-base font-normal font-['Onest']">Scout smarter. Stay ahead of the curve.</span>
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute w-full h-32 -right-4 -top-10 rounded-tr-[110px] rounded-bl-[110px] border border-white mix-blend-difference" />
            <div className="absolute w-full h-full right-6 top-6 rounded-tr-[80px] rounded-bl-[80px] border border-white mix-blend-difference" />
            <img
              src="/99ecdfc1ca19abce9e30036f40aabc08fa126871.png"
              alt="Apollo AI Agent"
              className="w-full aspect-square rounded-tr-[100px] rounded-bl-[100px] object-cover"
            />
          </div>
        </div>

        {/* Aphrodites - The Muse of Storytelling & Spotlight */}
        <div className="relative z-10 grid grid-cols-2 gap-16 items-center mb-32">
          <div className="relative">
            <div className="absolute w-full h-32 -left-4 -top-10 rounded-tl-[110px] rounded-br-[110px] border border-white mix-blend-difference" />
            <div className="absolute w-full h-full left-6 top-6 rounded-tl-[80px] rounded-br-[80px] border border-white mix-blend-difference" />
            <img
              src="/fd36440db01cbba87d25446db3251733b3e469b8.png"
              alt="Aphrodites AI Agent"
              className="w-full aspect-square rounded-tl-[100px] rounded-br-[100px] object-cover"
            />
          </div>

          <div>
            <p className="text-stone-900 text-xl font-normal font-['Onest'] uppercase mb-4">MEET Aphrodites</p>
            <h3 className="text-stone-900 text-5xl font-normal font-['ISABELLA_GRAND_Italic'] leading-tight mb-6">The Muse of Storytelling & Spotlight</h3>
            <p className="text-stone-900 text-xl font-normal font-['Onest'] leading-relaxed mb-4">Goddess of Beauty. Your Editorial Engine.</p>
            <p className="text-stone-900 text-base font-normal font-['Onest'] leading-relaxed mb-6">Let Aphrodites showcase your agency's brilliance with effortless content generation.</p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 mt-0.5 bg-gradient-to-br from-stone-400 via-stone-400 to-rose-100 rounded-sm flex-shrink-0" />
                <span className="text-stone-900 text-base font-normal font-['Onest'] leading-relaxed">Effortlessly compile newsletters featuring model work, press, and campaigns using AI + cloud file integration</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 mt-0.5 bg-gradient-to-br from-stone-400 via-stone-400 to-rose-100 rounded-sm flex-shrink-0" />
                <span className="text-stone-900 text-base font-normal font-['Onest'] leading-relaxed">Highlight new faces, fashion trends and written agency updates</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 mt-0.5 bg-gradient-to-br from-stone-400 via-stone-400 to-rose-100 rounded-sm flex-shrink-0" />
                <span className="text-stone-900 text-base font-normal font-['Onest'] leading-relaxed">Offers AI-powered visual editorial and social media drafts to elevate your agency's narrative</span>
              </li>
            </ul>

            <div className="relative inline-block">
              <div className="absolute w-96 h-12 bg-stone-900 rounded-tr-[20px] rounded-bl-[20px] translate-x-[6px] translate-y-[6px]" />
              <button type="button" className="relative w-96 h-12 bg-zinc-100 rounded-tr-[20px] rounded-bl-[20px] border border-stone-900 flex items-center justify-center hover:bg-white transition-colors">
                <span className="text-stone-900 text-base font-normal font-['Onest']">Keep your clients, press, and partners enchanted.</span>
              </button>
            </div>
          </div>
        </div>

        {/* Artemis - The Architect of Data-Driven Insight */}
        <div className="relative z-10 grid grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-stone-900 text-xl font-normal font-['Onest'] uppercase mb-4">MEET Artemis</p>
            <h3 className="text-stone-900 text-5xl font-normal font-['ISABELLA_GRAND_Italic'] leading-tight mb-6">The Architect of Data-Driven Insight.</h3>
            <p className="text-stone-900 text-xl font-normal font-['Onest'] leading-relaxed mb-4">Goddess of Clarity. Guardian of Precision.</p>
            <p className="text-stone-900 text-base font-normal font-['Onest'] leading-relaxed mb-6">Let Artemis transform raw data into clear direction — revealing what's working, what's stalling, and where your next opportunity hides.</p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 mt-0.5 bg-gradient-to-br from-stone-400 via-stone-400 to-rose-100 rounded-sm flex-shrink-0" />
                <span className="text-stone-900 text-base font-normal font-['Onest'] leading-relaxed">Track in-depth model, agent, and agency performance metrics in real time</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 mt-0.5 bg-gradient-to-br from-stone-400 via-stone-400 to-rose-100 rounded-sm flex-shrink-0" />
                <span className="text-stone-900 text-base font-normal font-['Onest'] leading-relaxed">Uncover growth patterns, revenue insights, client relationship trends, and system optimization metrics</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 mt-0.5 bg-gradient-to-br from-stone-400 via-stone-400 to-rose-100 rounded-sm flex-shrink-0" />
                <span className="text-stone-900 text-base font-normal font-['Onest'] leading-relaxed">Predict future booking and performance opportunities before they happen</span>
              </li>
            </ul>

            <div className="relative inline-block">
              <div className="absolute w-80 h-12 bg-stone-900 rounded-tr-[20px] rounded-bl-[20px] translate-x-[6px] translate-y-[6px]" />
              <button type="button" className="relative w-80 h-12 bg-zinc-100 rounded-tr-[20px] rounded-bl-[20px] border border-stone-900 flex items-center justify-center hover:bg-white transition-colors">
                <span className="text-stone-900 text-base font-normal font-['Onest']">Scale with precision, not assumption.</span>
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute w-full h-32 -right-4 -top-10 rounded-tr-[110px] rounded-bl-[110px] border border-white mix-blend-difference" />
            <div className="absolute w-full h-full right-6 top-6 rounded-tr-[80px] rounded-bl-[80px] border border-white mix-blend-difference" />
            <img
              src="/99ecdfc1ca19abce9e30036f40aabc08fa126871.png"
              alt="Artemis AI Agent"
              className="w-full aspect-square rounded-tr-[100px] rounded-bl-[100px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

