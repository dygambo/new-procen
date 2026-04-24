import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Automation Readiness Analysis",
    desc: "A free assessment to determine the feasibility, timing, and strategy for your automation journey."
  },
  {
    num: "02",
    title: "Value Stream Mapping",
    desc: "Identifying the precise bottlenecks that require automation the most for maximum impact."
  },
  {
    num: "03",
    title: "ROI & Roadmap",
    desc: "Delivering a phase-by-phase execution plan with detailed ROI calculations for each automation stage."
  },
  {
    num: "04",
    title: "Installation & Launch",
    desc: "Expert deployment of conveyor systems, robotics, and software with full operational integration."
  }
];

export function Process() {
  return (
    <section id="process" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-2 block">Our Approach</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Your Path to Automation
          </h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -z-10 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="bg-background md:bg-transparent pt-6 md:pt-0"
              >
                <div className="w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center font-bold text-primary mb-6 mx-auto relative z-10 shadow-sm">
                  {step.num}
                </div>
                <div className="text-center px-4">
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
