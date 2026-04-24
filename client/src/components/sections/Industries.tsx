import { motion } from "framer-motion";
import { Factory, Truck, Briefcase, Droplets, Wheat, Fuel } from "lucide-react";

const industries = [
  { name: "Distribution", icon: Truck, desc: "High-speed sorting and fulfillment automation." },
  { name: "Manufacturing", icon: Factory, desc: "Production line conveyors and robotic assembly." },
  { name: "E-commerce", icon: Briefcase, desc: "Scalable warehouse automation for peak demands." },
  { name: "3PL & Logistics", icon: Droplets, desc: "Flexible automation for multi-tenant warehouse operations." },
  { name: "Agriculture", icon: Wheat, desc: "Automated material handling for processing, packaging, and storage." },
  { name: "Oil & Gas", icon: Fuel, desc: "Rugged automation solutions for hazardous and high-demand environments." },
];

export function Industries() {
  return (
    <section id="industries" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-accent font-semibold text-sm tracking-widest uppercase mb-2 block">Industries Served</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
              Automation Across the Supply Chain
            </h2>
          </div>
          <p className="text-primary-foreground/70 max-w-md text-lg">
            We deliver tailored material handling solutions for high-volume environments where speed and reliability are paramount.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
            >
              <ind.icon className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">{ind.name}</h3>
              <p className="text-sm text-primary-foreground/60">{ind.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
