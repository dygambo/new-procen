import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowRightLeft, 
  Box, 
  Layers, 
  Bot, 
  Scan, 
  Settings, 
  Truck,
  BarChart3,
  Cog
} from "lucide-react";

const capabilities = [
  {
    title: "Conveying Systems",
    description: "Our conveyor solutions handle bottles, cases, pallets, sacks, and food products with integrated tracking, sorting, and accumulation capabilities. We seamlessly integrate conveyors with upstream and downstream equipment including bottle fillers, sealers, vacuum sealers, stackers, palletizers, and case handlers.",
    icon: Layers
  },
  {
    title: "Case Handling",
    description: "Complete case processing from blank opening through palletization. Our systems fill, seal, label, weigh, inspect, and track cases with full traceability to the palletizer. Fanuc palletizers execute customizable patterns developed collaboratively with your management team, with pattern modification available through the HMI. Completed pallets proceed through stretch wrapping to AGV loading for shipment, with full tracking capability for global visibility.",
    icon: Box
  },
  {
    title: "Data Tracking & IoT Integration",
    description: "We implement comprehensive tracking using scannable labels and RFID technology on cases, pallets, racks, and fluid tanks. Scanner integration enables complete process visibility for individual units or manifested pallets. IoT connectivity provides real-time measurement and monitoring across all equipment. Data outputs include visual dashboards, trend graphs, automated reports, configurable alerts and alarms, and event logging—delivering the actionable intelligence needed for informed decision-making.",
    icon: BarChart3
  },
  {
    title: "Palletizing",
    description: "Our palletizing systems integrate Fanuc robotics with custom tooling for high-speed, precise pallet building. Systems include automatic pallet dispensing, slip sheet placement, and stretch wrapping. Every configuration is developed in partnership with your operations team to match your specific product mix and throughput requirements.",
    icon: Settings
  },
  {
    title: "ASRS",
    description: "Automated Storage and Retrieval Systems for high-density warehousing operations. Our ASRS implementations maximize vertical space utilization while maintaining rapid access to inventory, fully integrated with your tracking and data systems.",
    icon: ArrowRightLeft
  },
  {
    title: "MGP+ Material Handling",
    description: "For operations interfacing with presses, CNC equipment, or injection molding machinery, we provide Fanuc robotic solutions with custom tooling for machine tending and material handling across metal, glass, plastic, and similar materials.",
    icon: Bot
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-4 block">Our Scope</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Integrated Material Handling Systems</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Process Central delivers turnkey material handling solutions for manufacturing and warehousing operations seeking to optimize material flow. Our systems encompass conveying, case handling, MGP+ handling (metal, glass, plastic), palletizing, automatic storage and retrieval systems (ASRS), and enterprise-level data tracking across all equipment configurations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card border border-border/50 rounded-2xl p-8 md:p-12 mb-16 max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                <Cog className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold">Fully Integrated Turnkey Systems</h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We provide complete systems that we design in collaboration with you, not standalone equipment. Each solution integrates mechanical, electrical, and programmable components into a cohesive operation that moves product through your facility according to your process requirements. Every component is interlocked and synchronized to function as a unified system.
            </p>
          </motion.div>

          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold text-center mb-12">Core Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((cap, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/20 transition-all duration-300">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                        <cap.icon className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-xl font-bold">{cap.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {cap.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card border border-border/50 rounded-2xl p-8 md:p-12 mb-16 max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                <Scan className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold">Scalability and Flexibility</h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              All robotic and automated systems feature HMI-based configuration for adding new products and modifying existing parameters. This allows rapid response to process changes without extensive reprogramming or downtime.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">The Process Central Difference</h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Material handling systems are complex integrations that demand expertise across multiple disciplines—mechanical engineering, electrical systems, controls programming, and process optimization. Many providers excel in one area but struggle to deliver truly integrated solutions. At Process Central, integration is our core competency.
              </p>
              <p>
                We don't simply install equipment; we engineer complete material flow solutions. Our approach ensures every component—from sensors to conveyors to robots to tracking systems—functions as part of a coordinated whole. This eliminates the communication gaps, compatibility issues, and performance bottlenecks that plague multi-vendor installations.
              </p>
              <p>
                The result is a system that operates as designed from day one, with the scalability to adapt as your operation evolves. Whether you're automating a single process or redesigning your entire material flow, Process Central delivers the technical depth and integration expertise to make it work.
              </p>
            </div>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 h-12 px-8">
                <a href="/contact">Get in Touch</a>
              </Button>
            </div>
          </motion.div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
