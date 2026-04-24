import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const points = [
    "Comprehensive automation readiness analysis",
    "Solution proposal and Data-driven ROI estimate",
    "Solution design and install"
  ];

  return (
    <section id="about" className="py-24 bg-card relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full lg:w-1/2 flex-shrink-0"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[9/14] max-w-md mx-auto lg:mx-0 bg-muted">
              <video
                src="/automation_video.mov"
                autoPlay
                loop
                muted
                playsInline
                disablePictureInPicture
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply pointer-events-none" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/10 rounded-full blur-2xl z-0" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/5 rounded-full blur-2xl z-0" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-2 block">About Process Central</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 text-foreground">
              Mastering Material Flow
            </h2>
            <div className="space-y-6 mb-10">
              <p className="text-muted-foreground text-xl leading-relaxed">
                We are automation engineers and systems integrators specializing in conveyor-based material handling, robotics, and vision systems.
                Our team elevate your process to the next level by upgrading legacy PLCs, deploying robots, integrating vision and label reading systems to improve process performance and uptime.
              </p>
              <p className="text-muted-foreground text-xl leading-relaxed italic">
                We integrate over a thousand different technologies to bring you a solution to your specific material handling problem.
              </p>
            </div>

            <ul className="flex flex-col gap-4">
              {points.map((point, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-foreground font-semibold text-lg">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
