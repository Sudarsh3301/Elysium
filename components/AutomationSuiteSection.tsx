export default function AutomationSuiteSection() {
  return (
    <section className="relative w-full py-24 bg-zinc-100">
      {/* Large Background Rectangle */}
      <div className="absolute left-[39px] top-0 w-[1362px] h-[4072px] bg-stone-300 rounded-tl-[120px] rounded-br-[120px]" />
      
      {/* Section Header */}
      <div className="relative z-10 text-center mb-16">
        <div className="absolute left-[631px] top-0 w-[519px] h-px bg-stone-900 rotate-180" />
        <div className="absolute left-[809px] top-0 w-[519px] h-px bg-stone-900" />
        
        <h2 className="w-[758px] mx-auto mt-12 text-center">
          <span className="text-stone-900 text-7xl font-normal font-['ISABELLA_GRAND_Italic'] leading-[79.20px]">Meet the </span>
          <span className="text-stone-500 text-7xl font-normal font-['ISABELLA_GRAND_Italic'] uppercase leading-[79.20px]">Elysium</span>
          <span className="text-stone-900 text-7xl font-normal font-['ISABELLA_GRAND_Italic'] leading-[79.20px]"> Automation Suite</span>
        </h2>
        
        <p className="mt-8 text-center">
          <span className="text-neutral-700 text-base font-medium font-['Onest'] leading-6">Created by industry veterans. <br/></span>
          <span className="text-neutral-700 text-base font-normal font-['Onest'] leading-6"><br/>Elysium is built with distinct purposes and programs to help modeling agencies stay ahead of the curve in the industry's digital evolution.</span>
        </p>
      </div>
      
      {/* Athena - The Hot Leads Strategist */}
      <div className="relative z-10 flex items-start gap-16 mb-32 px-[134px]">
        <div className="relative">
          <div className="absolute w-[519px] h-32 left-[-18px] top-[-42px] rounded-tl-[110px] rounded-br-[110px] border border-white mix-blend-difference" />
          <div className="absolute w-[519px] h-[519px] left-[25px] top-[25px] rounded-tl-[80px] rounded-br-[80px] border border-white mix-blend-difference" />
          <img 
            src="/fd36440db01cbba87d25446db3251733b3e469b8.png" 
            alt="Athena AI Agent" 
            className="w-[569px] h-[569px] rounded-tl-[100px] rounded-br-[100px] object-cover"
          />
        </div>
        
        <div className="flex-1 pt-16">
          <p className="text-stone-900 text-xl font-normal font-['Onest'] uppercase mb-4">MEET Athena</p>
          <h3 className="text-stone-900 text-5xl font-normal font-['ISABELLA_GRAND_Italic'] leading-[62.40px] mb-6">The Hot Leads Strategist</h3>
          <p className="text-stone-900 text-xl font-normal font-['Onest'] leading-8 mb-4">Goddess of Wisdom. Master of Matchmaking.</p>
          <p className="text-stone-900 text-base font-normal font-['Onest'] leading-6 mb-6">Let Athena streamline inbound inquiries and maximize model placements.</p>
          
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 mt-0.5 bg-gradient-to-br from-stone-400 via-stone-400 to-rose-100 rounded-sm flex-shrink-0" />
              <span className="text-stone-900 text-base font-normal font-['Onest'] leading-6">Generate inquiry-matching visual pitchback material using selected model portfolios</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 mt-0.5 bg-gradient-to-br from-stone-400 via-stone-400 to-rose-100 rounded-sm flex-shrink-0" />
              <span className="text-stone-900 text-base font-normal font-['Onest'] leading-6">Instantly smart-match client casting inquiries with suitable talent</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 mt-0.5 bg-gradient-to-br from-stone-400 via-stone-400 to-rose-100 rounded-sm flex-shrink-0" />
              <span className="text-stone-900 text-base font-normal font-['Onest'] leading-6">Create and send promotional email content based on roster activity and real-time availability</span>
            </li>
          </ul>
          
          <div className="mt-8">
            <div className="relative inline-block">
              <div className="absolute w-96 h-12 bg-stone-900 rounded-tr-[20px] rounded-bl-[20px] translate-x-[6px] translate-y-[6px]" />
              <button className="relative w-96 h-12 bg-zinc-100 rounded-tr-[20px] rounded-bl-[20px] border border-stone-900 flex items-center justify-center">
                <span className="text-stone-900 text-base font-normal font-['Onest']">Turn inquiries into bookings, intelligently.</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Apollo - The Oracle of New Talent & Trends */}
      <div className="relative z-10 flex items-start gap-16 mb-32 px-[134px] flex-row-reverse">
        <div className="relative">
          <div className="absolute w-[519px] h-32 right-[-18px] top-[-42px] rounded-tr-[110px] rounded-bl-[110px] border border-white mix-blend-difference rotate-180" />
          <div className="absolute w-[519px] h-[519px] right-[25px] top-[25px] rounded-tr-[80px] rounded-bl-[80px] border border-white mix-blend-difference rotate-180" />
          <img 
            src="/99ecdfc1ca19abce9e30036f40aabc08fa126871.png" 
            alt="Apollo AI Agent" 
            className="w-[569px] h-[569px] rounded-tr-[100px] rounded-bl-[100px] object-cover"
          />
        </div>
        
        <div className="flex-1 pt-16">
          <p className="text-stone-900 text-xl font-normal font-['Onest'] uppercase mb-4">MEET Apollo</p>
          <h3 className="text-stone-900 text-5xl font-normal font-['ISABELLA_GRAND_Italic'] leading-[62.40px] mb-6">The Oracle of New Talent & Trends</h3>
          <p className="text-stone-900 text-xl font-normal font-['Onest'] leading-8 mb-4">God of Light. Discoverer of Stars.</p>
          <p className="text-stone-900 text-base font-normal font-['Onest'] leading-6 mb-6">Let Apollo illuminate the path to your next breakout talent.</p>
          
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 mt-0.5 bg-gradient-to-br from-stone-400 via-stone-400 to-rose-100 rounded-sm flex-shrink-0" />
              <span className="text-stone-900 text-base font-normal font-['Onest'] leading-6">AI-powered online and cross-agency model scouting</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 mt-0.5 bg-gradient-to-br from-stone-400 via-stone-400 to-rose-100 rounded-sm flex-shrink-0" />
              <span className="text-stone-900 text-base font-normal font-['Onest'] leading-6">Track rising stars, fashion trend data by location, and competitive industry insights</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 mt-0.5 bg-gradient-to-br from-stone-400 via-stone-400 to-rose-100 rounded-sm flex-shrink-0" />
              <span className="text-stone-900 text-base font-normal font-['Onest'] leading-6">Receive reports on emerging talent and market movers based on quantifiable online exposure, social media movement, and brand work</span>
            </li>
          </ul>
          
          <div className="mt-8">
            <div className="relative inline-block">
              <div className="absolute w-96 h-12 bg-stone-900 rounded-tr-[20px] rounded-bl-[20px] translate-x-[6px] translate-y-[6px]" />
              <button className="relative w-96 h-12 bg-zinc-100 rounded-tr-[20px] rounded-bl-[20px] border border-stone-900 flex items-center justify-center">
                <span className="text-stone-900 text-base font-normal font-['Onest']">Scout smarter. Stay ahead of the curve.</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Aphrodites - The Muse of Storytelling & Spotlight */}
      <div className="relative z-10 flex items-start gap-16 mb-32 px-[134px]">
        <div className="relative">
          <div className="absolute w-[519px] h-32 left-[-19px] top-[-42px] rounded-tl-[110px] rounded-br-[110px] border border-white mix-blend-difference" />
          <div className="absolute w-[519px] h-[519px] left-[25px] top-[25px] rounded-tl-[80px] rounded-br-[80px] border border-white mix-blend-difference" />
          <img
            src="/fd36440db01cbba87d25446db3251733b3e469b8.png"
            alt="Aphrodites AI Agent"
            className="w-[569px] h-[569px] rounded-tl-[100px] rounded-br-[100px] object-cover"
          />
        </div>

        <div className="flex-1 pt-16">
          <p className="text-stone-900 text-xl font-normal font-['Onest'] uppercase mb-4">MEET Aphrodites</p>
          <h3 className="text-stone-900 text-5xl font-normal font-['ISABELLA_GRAND_Italic'] leading-[62.40px] mb-6">The Muse of Storytelling & Spotlight</h3>
          <p className="text-stone-900 text-xl font-normal font-['Onest'] leading-8 mb-4">Goddess of Beauty. Your Editorial Engine.</p>
          <p className="text-stone-900 text-base font-normal font-['Onest'] leading-6 mb-6">Let Aphrodites showcase your agency's brilliance with effortless content generation.</p>

          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 mt-0.5 bg-gradient-to-br from-stone-400 via-stone-400 to-rose-100 rounded-sm flex-shrink-0" />
              <span className="text-stone-900 text-base font-normal font-['Onest'] leading-6">Effortlessly compile newsletters featuring model work, press, and campaigns using AI + cloud file integration</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 mt-0.5 bg-gradient-to-br from-stone-400 via-stone-400 to-rose-100 rounded-sm flex-shrink-0" />
              <span className="text-stone-900 text-base font-normal font-['Onest'] leading-6">Highlight new faces, fashion trends and written agency updates</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 mt-0.5 bg-gradient-to-br from-stone-400 via-stone-400 to-rose-100 rounded-sm flex-shrink-0" />
              <span className="text-stone-900 text-base font-normal font-['Onest'] leading-6">Offers AI-powered visual editorial and social media drafts to elevate your agency's narrative</span>
            </li>
          </ul>

          <div className="mt-8">
            <div className="relative inline-block">
              <div className="absolute w-96 h-12 bg-stone-900 rounded-tr-[20px] rounded-bl-[20px] translate-x-[6px] translate-y-[6px]" />
              <button className="relative w-96 h-12 bg-zinc-100 rounded-tr-[20px] rounded-bl-[20px] border border-stone-900 flex items-center justify-center">
                <span className="text-stone-900 text-base font-normal font-['Onest']">Keep your clients, press, and partners enchanted.</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Artemis - The Architect of Data-Driven Insight */}
      <div className="relative z-10 flex items-start gap-16 mb-32 px-[134px] flex-row-reverse">
        <div className="relative">
          <div className="absolute w-[519px] h-32 right-[-18px] top-[-42px] rounded-tr-[110px] rounded-bl-[110px] border border-white mix-blend-difference rotate-180" />
          <div className="absolute w-[519px] h-[519px] right-[25px] top-[25px] rounded-tr-[80px] rounded-bl-[80px] border border-white mix-blend-difference rotate-180" />
          <img
            src="/99ecdfc1ca19abce9e30036f40aabc08fa126871.png"
            alt="Artemis AI Agent"
            className="w-[569px] h-[569px] rounded-tr-[100px] rounded-bl-[100px] object-cover"
          />
        </div>

        <div className="flex-1 pt-16">
          <p className="text-stone-900 text-xl font-normal font-['Onest'] uppercase mb-4">MEET Artemis</p>
          <h3 className="text-stone-900 text-5xl font-normal font-['ISABELLA_GRAND_Italic'] leading-[62.40px] mb-6">The Architect of Data-Driven Insight.</h3>
          <p className="text-stone-900 text-xl font-normal font-['Onest'] leading-8 mb-4">Goddess of Clarity. Guardian of Precision.</p>
          <p className="text-stone-900 text-base font-normal font-['Onest'] leading-6 mb-6">Let Artemis transform raw data into clear direction — revealing what's working, what's stalling, and where your next opportunity hides.</p>

          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 mt-0.5 bg-gradient-to-br from-stone-400 via-stone-400 to-rose-100 rounded-sm flex-shrink-0" />
              <span className="text-stone-900 text-base font-normal font-['Onest'] leading-6">Track in-depth model, agent, and agency performance metrics in real time</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 mt-0.5 bg-gradient-to-br from-stone-400 via-stone-400 to-rose-100 rounded-sm flex-shrink-0" />
              <span className="text-stone-900 text-base font-normal font-['Onest'] leading-6">Uncover growth patterns, revenue insights, client relationship trends, and system optimization metrics</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 mt-0.5 bg-gradient-to-br from-stone-400 via-stone-400 to-rose-100 rounded-sm flex-shrink-0" />
              <span className="text-stone-900 text-base font-normal font-['Onest'] leading-6">Predict future booking and performance opportunities before they happen</span>
            </li>
          </ul>

          <div className="mt-8">
            <div className="relative inline-block">
              <div className="absolute w-80 h-12 bg-stone-900 rounded-tr-[20px] rounded-bl-[20px] translate-x-[6px] translate-y-[6px]" />
              <button className="relative w-80 h-12 bg-zinc-100 rounded-tr-[20px] rounded-bl-[20px] border border-stone-900 flex items-center justify-center">
                <span className="text-stone-900 text-base font-normal font-['Onest']">Scale with precision, not assumption.</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

