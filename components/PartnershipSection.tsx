import Image from 'next/image';

export default function PartnershipSection() {
  return (
    <section className="relative w-full py-24 bg-zinc-100">
      <div className="grid grid-cols-2 gap-12 max-w-[1440px] mx-auto px-8 items-center">
        {/* Left Column - Heading and Bullet List */}
        <div>
          <h2 className="mb-12">
            <span className="text-[rgba(150,120,104,1)] text-6xl font-normal font-['ISABELLA_GRAND_Italic'] leading-[70.40px]">
  We're partners
</span>

            <span className="text-stone-900 text-6xl font-normal font-['ISABELLA_GRAND_Italic'] leading-[70.40px]">, not competition</span>
          </h2>

          <ul className="space-y-6">
            <li className="flex items-start gap-3">
              <img src="/ytick.svg" alt="" className="w-5 h-5 mt-1 flex-shrink-0" />
              <span className="text-neutral-700 text-base font-normal font-['Onest'] leading-relaxed">Our systems optimize without interference — business runs as usual, just better.</span>
            </li>
            <li className="flex items-start gap-3">
              <img src="/ytick.svg" alt="" className="w-5 h-5 mt-1 flex-shrink-0" />
              <span className="text-neutral-700 text-base font-normal font-['Onest'] leading-relaxed">Your relationships are protected, our tools simply amplify them.</span>
            </li>
            <li className="flex items-start gap-3">
              <img src="/ytick.svg" alt="" className="w-5 h-5 mt-1 flex-shrink-0" />
              <span className="text-neutral-700 text-base font-normal font-['Onest'] leading-relaxed">You continue to decide brand rates and which bookings to accept.</span>
            </li>
            <li className="flex items-start gap-3">
              <img src="/ytick.svg" alt="" className="w-5 h-5 mt-1 flex-shrink-0" />
              <span className="text-neutral-700 text-base font-normal font-['Onest'] leading-relaxed">We never work directly with your models — everything flows through you.</span>
            </li>
          </ul>
        </div>

        {/* Right Column - Image with Decorative Outline and Overlay Text */}
        <div className="relative">
          {/* Decorative curved outline shapes */}
          <div className="absolute w-full h-32 -right-4 -top-10 rounded-tl-[110px] rounded-br-[110px] border border-white mix-blend-difference" />
          <div className="absolute w-full h-full right-6 top-6 rounded-tl-[80px] rounded-br-[80px] border border-white mix-blend-difference" />

          {/* Main hero room image */}
          <Image
            src="/fd36440db01cbba87d25446db3251733b3e469b8.png"
            alt="Majestic palace interior"
            width={700}
            height={700}
            className="w-full aspect-square rounded-tl-[100px] rounded-br-[100px] object-cover"
            loading="lazy"
            quality={85}
          />

          {/* Overlay paragraph with blur background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative w-[467px]">
              {/* Blur background circle */}
              <div className="absolute inset-0 -left-4 -top-8 w-[469px] h-96 bg-black/30 rounded-full blur-[50px]" />

              {/* Text overlay */}
              <p className="relative text-zinc-100 text-3xl font-normal font-['ISABELLA_GRAND_Italic'] leading-10">
                Agencies that use Elysium close bookings 3x faster and reduce time spent on manual workloads by 66%, allowing more availability to nurture talent and build lasting client relationships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

