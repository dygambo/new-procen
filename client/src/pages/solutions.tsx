import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Settings, 
  Bot, 
  Scan, 
  Cpu, 
  CheckCircle, 
  ArrowRightLeft, 
  Box, 
  Layers,
  Search
} from "lucide-react";

const solutions = [
  {
    title: "Panel Tech",
    description: "Expert implementation of Allen-Bradley PLC, HMI, VFD, and safety platforms for robust industrial control.",
    icon: Settings
  },
  {
    title: "FANUC Robotic Cells",
    description: "Deploy and integrate FANUC robotic cells specialized for material handling and palletizing operations.",
    icon: Bot
  },
  {
    title: "Field Tech & Vision",
    description: "Advanced integration of Cognex and Keyence vision and barcode systems for high-accuracy tracking.",
    icon: Scan
  },
  {
    title: "System Integration",
    description: "Coordinating mechanical and controls design for seamless, end-to-end material handling system integration.",
    icon: ArrowRightLeft
  },
  {
    title: "Commission & Support",
    description: "Full system commissioning, validation, and ongoing support to ensure peak operational performance.",
    icon: CheckCircle
  },
  {
    title: "Conveyors",
    description: "Custom-engineered conveyor solutions for efficient and reliable material flow across any facility.",
    icon: Layers
  },
  {
    title: "Palletizers",
    description: "Automated palletizing systems designed for speed, precision, and integration with downstream logistics.",
    icon: Box
  },
  {
    title: "Automatic Quality Inspection",
    description: "Real-time, automated inspection systems to ensure every product meets your quality standards.",
    icon: Search
  },
  {
    title: "End-of-Line Packaging",
    description: "Integrated case erectors, case fillers, and case sealers for a complete automated packaging solution.",
    icon: Cpu
  }
];

export default function Solutions() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Our Solutions</h1>
            <p className="text-muted-foreground text-lg">
              We integrate over a thousand different technologies to bring you a solution to your specific material handling problem.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/20 transition-all duration-300">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                      <solution.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl font-bold">{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {solution.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
