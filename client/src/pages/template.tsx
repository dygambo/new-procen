import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Copy, Download, Layout, Type, Palette } from "lucide-react";
import titleSlide from "@assets/generated_images/powerpoint_title_slide_mockup_for_process_central_consultancy.png";
import contentSlide from "@assets/generated_images/powerpoint_content_slide_mockup_for_process_central_consultancy.png";

export default function TemplatePage() {
  const brandColors = [
    { name: "Deep Space (BG)", hex: "#0A0C10", hsl: "220 30% 6%" },
    { name: "Electric Blue (Primary)", hex: "#1A88FF", hsl: "210 100% 55%" },
    { name: "Slate (Muted)", hex: "#1E293B", hsl: "215 20% 12%" },
    { name: "Ice (Foreground)", hex: "#F8FAFC", hsl: "210 20% 98%" },
  ];

  const fonts = [
    { name: "Outfit", usage: "Headings & Display", weight: "Bold (700)" },
    { name: "Plus Jakarta Sans", usage: "Body text & UI", weight: "Regular (400), Medium (500)" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Brand & Presentation Kit</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Everything you need to translate the Process Central digital experience into your internal presentations and documents.
          </p>
        </header>

        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Layout className="text-primary w-6 h-6" />
            <h2 className="text-2xl font-bold">Slide Templates</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden border border-border shadow-2xl">
                <img src={titleSlide} alt="Title Slide Template" className="w-full aspect-video object-cover" />
              </div>
              <div className="flex justify-between items-center">
                <h3 className="font-bold">Title Slide</h3>
                <Button variant="outline" size="sm" className="gap-2">
                  <Download className="w-4 h-4" /> Save Mockup
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden border border-border shadow-2xl">
                <img src={contentSlide} alt="Content Slide Template" className="w-full aspect-video object-cover" />
              </div>
              <div className="flex justify-between items-center">
                <h3 className="font-bold">Content Slide</h3>
                <Button variant="outline" size="sm" className="gap-2">
                  <Download className="w-4 h-4" /> Save Mockup
                </Button>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <section>
            <div className="flex items-center gap-3 mb-8">
              <Palette className="text-primary w-6 h-6" />
              <h2 className="text-2xl font-bold">Brand Colors</h2>
            </div>
            <div className="space-y-4">
              {brandColors.map((color) => (
                <div key={color.name} className="flex items-center justify-between p-4 bg-card rounded-lg border border-border">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded shadow-inner border border-white/10" style={{ backgroundColor: color.hex }} />
                    <div>
                      <p className="font-bold text-sm">{color.name}</p>
                      <p className="text-xs text-muted-foreground uppercase">{color.hex}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-8">
              <Type className="text-primary w-6 h-6" />
              <h2 className="text-2xl font-bold">Typography</h2>
            </div>
            <div className="space-y-4">
              {fonts.map((font) => (
                <div key={font.name} className="p-4 bg-card rounded-lg border border-border">
                  <h3 className="text-xl font-bold mb-1" style={{ fontFamily: font.name }}>{font.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{font.usage}</p>
                  <p className="text-xs font-mono bg-background/50 p-2 rounded">{font.weight}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <footer className="mt-24 pt-12 border-t border-border text-center">
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
             Back to Website
          </Button>
        </footer>
      </div>
    </div>
  );
}
