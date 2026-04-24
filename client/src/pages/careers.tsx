import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight, Briefcase } from "lucide-react";

const jobPostings = [
  {
    id: 1,
    title: "Research Analyst",
    department: "Intelligence Hub",
    location: "Dallas, TX",
    description: "Join our Intelligence Hub team to conduct in-depth research and analysis on process optimization strategies. You'll work closely with clients to identify opportunities for operational improvement and develop data-driven recommendations.",
    requirements: [
      "Bachelor's degree in Business, Economics, or related field",
      "2+ years of experience in research or analysis roles",
      "Strong analytical and problem-solving skills",
      "Proficiency in data visualization tools",
      "Excellent written and verbal communication skills"
    ]
  },
  {
    id: 2,
    title: "Sales Manager",
    department: "Business Development",
    location: "Dallas, TX",
    description: "Lead our sales efforts to expand Process Central Systems' reach across key industries. You'll build and maintain relationships with enterprise clients, develop sales strategies, and drive revenue growth for our consulting services.",
    requirements: [
      "5+ years of B2B sales experience, preferably in consulting or professional services",
      "Proven track record of exceeding sales targets",
      "Strong understanding of process improvement and automation solutions",
      "Excellent negotiation and presentation skills",
      "Ability to travel up to 25%"
    ]
  }
];

export default function Careers() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
              Join Our Team
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Build the Future of{" "}
              <span className="text-primary">Process Excellence</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're looking for passionate individuals who want to help organizations achieve operational excellence through innovation and expertise.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-10">
              <Briefcase className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-display font-bold text-foreground">Open Positions</h2>
            </div>
            
            <div className="space-y-6">
              {jobPostings.map((job) => (
                <div 
                  key={job.id}
                  data-testid={`job-card-${job.id}`}
                  className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2" data-testid={`job-title-${job.id}`}>
                        {job.title}
                      </h3>
                      <p className="text-primary text-sm font-medium mb-4">{job.department}</p>
                      
                      <div className="flex flex-wrap gap-4 mb-6">
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-6">
                        {job.description}
                      </p>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3">Requirements:</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, index) => (
                            <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="lg:flex-shrink-0">
                      <Button 
                        data-testid={`apply-button-${job.id}`}
                        className="w-full lg:w-auto bg-primary text-white hover:bg-primary/90 gap-2"
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Don't See the Right Role?
            </h2>
            <p className="text-muted-foreground mb-8">
              We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our mission.
            </p>
            <Button 
              variant="outline" 
              className="gap-2"
              data-testid="button-general-application"
            >
              Submit General Application
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
