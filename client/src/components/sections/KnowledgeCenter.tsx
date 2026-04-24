import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Clock, Tag } from "lucide-react";

const articles = [
  {
    title: "Conveyor Hardware vs. Software Integration",
    excerpt: "Why the intelligence behind the belt is just as important as the rollers themselves.",
    date: "Dec 15, 2025",
    readTime: "6 min read",
    tag: "Systems"
  },
  {
    title: "Understanding Automation ROI",
    excerpt: "How to calculate the real value of robotic picking beyond just labor savings.",
    date: "Nov 28, 2025",
    readTime: "8 min read",
    tag: "Strategy"
  },
  {
    title: "Identifying Warehouse Bottlenecks",
    excerpt: "A guide to value stream mapping for modern distribution centers.",
    date: "Nov 12, 2025",
    readTime: "5 min read",
    tag: "Analysis"
  }
];

export function KnowledgeCenter() {
  return (
    <section id="knowledge" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-2 block">Intelligence Hub</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Strategic Operational Insights
            </h2>
          </div>
          <Button variant="outline" className="hidden md:flex gap-2">
            View All Articles <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full border-border/50 bg-card hover:border-primary/20 transition-all group cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                      {article.tag}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors leading-tight">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50 text-[11px] text-muted-foreground font-medium uppercase tracking-wider">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {article.readTime}
                    </div>
                    <div>{article.date}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 md:hidden">
          <Button className="w-full gap-2">
            View All Articles <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
