import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Settings2, Cpu, Users, ArrowRight, Bot } from "lucide-react";

const services = [
  {
    title: "Automation Readiness Analysis",
    description: "Our core differentiator. We perform a free, deep-dive analysis to determine if, how, and when you should automate, providing a clear roadmap and ROI per phase.",
    icon: Settings2,
    features: ["Feasibility Assessment", "Automation Roadmap", "ROI Modeling"],
    slug: "readiness-analysis"
  },
  {
    title: "Value Stream Mapping",
    description: "We visualize your entire material flow to identify the critical bottlenecks where automation will deliver the highest impact and quickest return.",
    icon: Cpu,
    features: ["Bottleneck Identification", "Material Flow Optimization", "Waste Reduction"],
    slug: "value-stream-mapping"
  },
  {
    title: "Solution",
    description: "We integrate over a thousand different technologies to bring you a solution to your specific material handling problem.",
    icon: Bot,
    features: ["System Design", "Hardware Installation", "Control Software"],
    slug: "solutions"
  },
  {
    title: "Installation",
    description: "Deployment of advanced robotic cells for picking, packing, and sorting, fully integrated with your existing material handling ecosystem.",
    icon: Users,
    features: ["Picking & Packing Robots", "Autonomous Mobiles", "End-to-End Integration"],
    slug: "installation"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-2 block">Our Expertise</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground">
            Material Handling Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            We bridge the gap between operational needs and technical execution with a focus on measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ 
                scale: 1.05, 
                y: -8,
                transition: { type: "spring", stiffness: 400, damping: 15 }
              }}
              whileTap={{ 
                scale: 1.02, 
                y: -4,
                transition: { type: "spring", stiffness: 500, damping: 20 }
              }}
              className="cursor-pointer"
            >
              <Card className="h-full border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(var(--primary-rgb,59,130,246),0.15)] bg-background/50 backdrop-blur-sm group">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-sm text-foreground/80 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full group-hover:scale-125 transition-transform duration-300" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="link" asChild className="p-0 h-auto text-primary font-medium text-sm hover:no-underline flex items-center gap-1 hover:gap-2 transition-all">
                    <a href={service.slug === "solutions" ? "/solutions" : `/expertise/${service.slug}`}>
                      Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
