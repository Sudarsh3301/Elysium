export default function ValuePropSection() {
  return (
    <section className="relative w-full py-24 bg-zinc-100">
      {/* Decorative Lines */}
      <div className="absolute left-[657px] top-[100px] w-[519px] h-px bg-stone-900 rotate-180" />
      <div className="absolute left-[835px] top-[100px] w-[519px] h-px bg-stone-900" />
      
      {/* Main Heading */}
      <h2 className="w-[1045px] mx-auto text-center text-stone-900 text-6xl font-normal font-['ISABELLA_GRAND_Italic'] leading-[76.80px]">
        Finally, tools that work as hard as your top bookers.
      </h2>
      
      {/* Description */}
      <p className="w-[841px] mx-auto mt-16 text-center text-stone-900 text-base font-normal font-['Onest'] leading-6">
        Elysium helps teams of all sizes scale bookings, cut busywork, and assists agencies in becoming more publicly recognized and profitable — all without losing any personal touch or overhead control.
      </p>
      
      {/* Subtext */}
      <p className="w-[841px] mx-auto mt-4 text-center text-neutral-700 text-base font-medium font-['Onest'] leading-6">
        We handle the systems so you can focus on the people.
      </p>
    </section>
  );
}

