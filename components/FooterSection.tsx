export default function FooterSection() {
  return (
    <footer className="relative w-full bg-stone-900 py-20">
      <div className="max-w-[1440px] mx-auto px-8">
        {/* Top Section */}
        <div className="flex justify-between items-start mb-16">
          {/* Logo and Tagline */}
          <div className="max-w-[400px]">
            <div className="w-28 h-20 mb-6">
              <img src="/3a11b6572afa89cba912b80b99a894f4364b1ef9.svg" alt="Elysium Logo" className="w-full h-full brightness-0 invert" />
            </div>
            <p className="text-stone-400 text-sm font-normal font-['Onest'] leading-6">
              Inspired by the Gods. Engineered for Agencies.
            </p>
          </div>
          
          {/* Navigation Links */}
          <div className="flex gap-24">
            <div>
              <h4 className="text-white text-base font-semibold font-['Onest'] mb-4">Product</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-stone-400 text-sm font-normal font-['Onest'] hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-stone-400 text-sm font-normal font-['Onest'] hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-stone-400 text-sm font-normal font-['Onest'] hover:text-white transition-colors">Case Studies</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white text-base font-semibold font-['Onest'] mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-stone-400 text-sm font-normal font-['Onest'] hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-stone-400 text-sm font-normal font-['Onest'] hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-stone-400 text-sm font-normal font-['Onest'] hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white text-base font-semibold font-['Onest'] mb-4">Support</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-stone-400 text-sm font-normal font-['Onest'] hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-stone-400 text-sm font-normal font-['Onest'] hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-stone-400 text-sm font-normal font-['Onest'] hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="h-px bg-stone-400 opacity-20 mb-8" />
        
        {/* Bottom Section */}
        <div className="flex justify-between items-center">
          <p className="text-stone-400 text-sm font-normal font-['Onest']">
            © 2025 Elysium. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex gap-6">
            <a href="#" className="text-stone-400 hover:text-white transition-colors">
              <span className="text-sm font-normal font-['Onest']">Twitter</span>
            </a>
            <a href="#" className="text-stone-400 hover:text-white transition-colors">
              <span className="text-sm font-normal font-['Onest']">LinkedIn</span>
            </a>
            <a href="#" className="text-stone-400 hover:text-white transition-colors">
              <span className="text-sm font-normal font-['Onest']">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

