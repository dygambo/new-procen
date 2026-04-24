import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroBg from "@assets/generated_images/abstract_geometric_network_of_nodes_and_lines_in_navy_and_blue.png";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Process Automation Network"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-6 border border-primary/20">
            Material Handling Automation Specialists
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[1.1] mb-6 tracking-tight">
            Intelligent Automation <br />
            <span className="text-primary">Seamless Integration</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            From conveyors and robotics to advanced control software, we engineer material handling systems that drive peak operational performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 h-12 px-8 text-base shadow-lg shadow-primary/20">
              <a href="#contact">Schedule Consultation</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-8 text-base bg-background/50 backdrop-blur-sm border-primary/20 hover:bg-primary/5">
              <a href="/services" className="flex items-center gap-2">
                Our Services <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
