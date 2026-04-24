import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRoute } from "wouter";
import { 
  Settings2, 
  Cpu, 
  Users,
  CheckCircle2,
  Target,
  TrendingUp,
  BarChart3,
  Search,
  Workflow,
  Wrench,
  Bot,
  Cog,
  Truck
} from "lucide-react";

const expertiseData: Record<string, {
  title: string;
  subtitle: string;
  intro: string;
  icon: any;
  sections: { title: string; description: string; icon: any }[];
  benefits: string[];
  cta: string;
}> = {
  "readiness-analysis": {
    title: "Automation Readiness Analysis",
    subtitle: "Know Before You Invest",
    intro: "Before committing capital to automation, you need clarity. Our free Automation Readiness Analysis gives you a data-driven assessment of whether automation is right for your operation, which processes to automate first, and what return you can expect at every stage.",
    icon: Settings2,
    sections: [
      {
        title: "Feasibility Assessment",
        description: "We evaluate your current processes, throughput volumes, labor costs, and facility layout to determine if automation is technically and financially viable for your operation. You get a clear yes-or-no answer backed by real data, not assumptions.",
        icon: Target
      },
      {
        title: "Automation Roadmap",
        description: "We build a phased implementation plan that prioritizes the highest-impact areas first. Each phase is designed to be independently valuable so you see returns before moving to the next stage. The roadmap accounts for your budget, timeline, and operational constraints.",
        icon: Workflow
      },
      {
        title: "ROI Modeling",
        description: "Every phase of your automation roadmap comes with a detailed ROI projection. We calculate labor savings, throughput gains, error reduction, and payback period so you can make informed investment decisions with confidence.",
        icon: TrendingUp
      }
    ],
    benefits: [
      "No-cost, no-obligation analysis",
      "Data-driven decision making, not guesswork",
      "Clear phase-by-phase investment plan",
      "ROI projections for every automation stage",
      "Risk assessment and mitigation strategies",
      "Executive-ready deliverables for stakeholder buy-in"
    ],
    cta: "Schedule your free Automation Readiness Analysis today and get the clarity you need to move forward with confidence."
  },
  "value-stream-mapping": {
    title: "Value Stream Mapping",
    subtitle: "See Your Entire Material Flow",
    intro: "You can't optimize what you can't see. Our Value Stream Mapping service gives you a complete, visual representation of your material flow from receiving to shipping, revealing exactly where bottlenecks, waste, and automation opportunities exist.",
    icon: Cpu,
    sections: [
      {
        title: "Bottleneck Identification",
        description: "We trace every step of your material handling process to pinpoint where flow breaks down. Whether it's a manual palletizing step that can't keep up with upstream production or a sorting process creating backlogs, we find the constraint and quantify its impact on your throughput.",
        icon: Search
      },
      {
        title: "Material Flow Optimization",
        description: "Once bottlenecks are identified, we map the optimal flow for your operation. This includes layout recommendations, equipment positioning, buffer sizing, and process sequencing to maximize throughput while minimizing travel distance and handling touches.",
        icon: Workflow
      },
      {
        title: "Waste Reduction",
        description: "We identify the seven types of waste in your material handling process: overproduction, waiting, transport, over-processing, inventory, motion, and defects. Each waste area is quantified in dollars so you can prioritize elimination efforts by financial impact.",
        icon: BarChart3
      }
    ],
    benefits: [
      "Complete visibility into your material flow",
      "Quantified bottleneck impact in dollars and throughput",
      "Prioritized list of improvement opportunities",
      "Current-state and future-state process maps",
      "Actionable recommendations, not just observations",
      "Foundation for targeted automation investment"
    ],
    cta: "Let us map your material flow and show you exactly where automation will deliver the greatest return."
  },
  "installation": {
    title: "Installation",
    subtitle: "Expert Deployment, Seamless Integration",
    intro: "Installation is where engineering meets reality. Our field teams deploy conveyor systems, robotic cells, vision systems, and control platforms with precision, ensuring every component is integrated, commissioned, and validated before handoff.",
    icon: Users,
    sections: [
      {
        title: "Mechanical & Electrical Installation",
        description: "Our crews handle complete mechanical and electrical installation of all automation equipment. From conveyor framework and robotic pedestals to power distribution and safety systems, we manage every physical aspect of your system buildout to specification.",
        icon: Wrench
      },
      {
        title: "Controls Integration & Commissioning",
        description: "We program and configure Allen-Bradley PLCs, HMIs, VFDs, and safety controllers. FANUC robotic cells are deployed with custom tooling and motion programs. Every system is interlocked, tested, and validated against your process requirements before go-live.",
        icon: Cog
      },
      {
        title: "Training & Ongoing Support",
        description: "Your operations team receives hands-on training on all installed systems. We provide documentation, troubleshooting guides, and ongoing technical support to ensure your team can operate and maintain the system with confidence from day one.",
        icon: Bot
      }
    ],
    benefits: [
      "Single-source accountability for the entire installation",
      "Experienced field teams across mechanical, electrical, and controls",
      "Full commissioning and validation before handoff",
      "Operator training and documentation included",
      "Minimal disruption to ongoing operations",
      "Post-installation support and optimization"
    ],
    cta: "Ready to bring your automation plan to life? Let our installation team turn your design into a fully operational system."
  }
};

export default function Expertise() {
  const [, params] = useRoute("/expertise/:slug");
  const slug = params?.slug || "";
  const data = expertiseData[slug];

  if (!data) {
    return (
      <div className="min-h-screen bg-background font-sans text-foreground">
        <Navbar />
        <main className="pt-32 pb-24">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-display font-bold mb-4">Page Not Found</h1>
            <p className="text-muted-foreground text-lg mb-8">The expertise page you're looking for doesn't exist.</p>
            <Button asChild>
              <a href="/">Back to Home</a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-6">
              <data.icon className="w-8 h-8" />
            </div>
            <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-4 block">{data.subtitle}</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">{data.title}</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {data.intro}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {data.sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                      <section.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl font-bold">{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{section.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card border border-border/50 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 text-center">What You Get</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto text-center"
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {data.cta}
            </p>
            <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 h-12 px-8">
              <a href="/contact">Get in Touch</a>
            </Button>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
