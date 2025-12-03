export default function CTASection() {
  return (
    <section className="relative w-full py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-[rgba(227,217,201,1)] overflow-hidden">

  <img
    src="/star_circle.svg"
    alt="decor"
    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none max-w-none w-[1100px] h-auto opacity-95"
  />

  {/* CONTENT */}
  <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6 sm:mb-8">
            <span className="text-[rgba(27,28,26,1)] text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-normal font-['ISABELLA_GRAND_Italic'] leading-tight"> Grow 
            </span>   

            <span className="text-[rgba(150,120,104,1)] text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-normal font-['ISABELLA_GRAND_Italic'] leading-tight"> your agency 

            </span>

              <span className="text-[rgba(27,28,26,1)] text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-normal font-['ISABELLA_GRAND_Italic'] leading-tight"> comfortably with a partner who knows the business inside-out.
              </span>

          </h2>

          <p className="text-[rgba(63, 64, 62, 1)] text-base sm:text-lg font-normal font-['Onest'] leading-relaxed mb-8 sm:mb-10 lg:mb-12 px-4 sm:px-0">
            Book more, stress less, and give your models endless opportunities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="relative w-full sm:w-auto">
              <div className="absolute w-full sm:w-48 h-12 bg-white rounded-tr-[20px] rounded-bl-[20px] translate-x-[4px] translate-y-[4px] sm:translate-x-[6px] sm:translate-y-[5px] opacity-20" />
              <button type="button" className="relative w-full sm:w-48 h-12 bg-stone-100 rounded-tr-[20px] rounded-bl-[20px] border border-stone-100 flex items-center justify-center hover:bg-white transition-colors">
                <span className="text-stone-900 text-sm sm:text-base font-normal font-['Onest']">Start your free pilot</span>
              </button>
            </div>

            <div className="relative w-full sm:w-auto">
              <div className="absolute w-full sm:w-44 h-12 bg-white rounded-tr-[20px] rounded-bl-[20px] translate-x-[4px] translate-y-[4px] sm:translate-x-[6px] sm:translate-y-[5px] opacity-20" />
              <button type="button" className="relative w-full sm:w-44 h-12 bg-stone-100 rounded-tr-[20px] rounded-bl-[20px] border border-white flex items-center justify-center hover:bg-white/10 transition-colors">
                <span className="text-stone-900 text-sm sm:text-base font-normal font-['Onest']">Talk to our team</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

