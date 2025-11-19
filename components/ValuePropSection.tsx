export default function ValuePropSection() {
  return (
    <section className="relative w-full py-32 bg-zinc-100">
      <div className="max-w-[1440px] mx-auto px-8">
        {/* Decorative Lines */}
        <div className="relative flex items-center justify-center mb-12">
          <div className="absolute left-1/2 -translate-x-full w-[360px] h-px bg-stone-900" />
          <div className="absolute left-1/2 w-[360px] h-px bg-stone-900" />
        </div>

        {/* Main Heading */}
        <h2 className="max-w-4xl mx-auto text-center text-stone-900 text-6xl font-normal font-['ISABELLA_GRAND_Italic'] leading-tight mb-16">
          Finally, tools that work as hard as your top bookers.
        </h2>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-center text-stone-900 text-base font-normal font-['Onest'] leading-relaxed mb-4">
          Elysium helps teams of all sizes scale bookings, cut busywork, and assists agencies in becoming more publicly recognized and profitable — all without losing any personal touch or overhead control.
        </p>

        {/* Subtext */}
        <p className="max-w-3xl mx-auto text-center text-neutral-700 text-base font-medium font-['Onest'] leading-relaxed">
          We handle the systems so you can focus on the people.
        </p>
      </div>
    </section>
  );
}

