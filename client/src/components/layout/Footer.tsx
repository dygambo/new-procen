import logo from "@assets/Asset_2@3x_1770501877753.png";

export function Footer() {
  return (
    <footer className="bg-[#030406] text-white py-16 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Process Central Systems" className="h-10 w-auto" />
              <div className="flex flex-col leading-none text-white">
                <span className="text-xl md:text-2xl font-display font-bold tracking-tight uppercase">Process Central</span>
                <span className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-white/90">Systems</span>
              </div>
            </div>
            <p className="text-gray-400 max-w-sm mb-6">
              Engineering the future of material flow through intelligent automation, robotics, and data-driven analysis.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-8 h-8 bg-white/10 rounded hover:bg-white/20 transition-colors cursor-pointer" />
              <div className="w-8 h-8 bg-white/10 rounded hover:bg-white/20 transition-colors cursor-pointer" />
              <div className="w-8 h-8 bg-white/10 rounded hover:bg-white/20 transition-colors cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-3 text-white/60">
              <li><a href="/expertise/readiness-analysis" className="hover:text-primary transition-colors">Automation Readiness Analysis</a></li>
              <li><a href="/expertise/value-stream-mapping" className="hover:text-primary transition-colors">Value Stream Mapping</a></li>
              <li><a href="/solutions" className="hover:text-primary transition-colors">Solution</a></li>
              <li><a href="/expertise/installation" className="hover:text-primary transition-colors">Installation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-3 text-white/60">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/careers" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Process Central Systems. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
