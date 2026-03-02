import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroSocial from "@/assets/hero-social.jpg";

const templates = [
  { name: "Elegant Gold", desc: "Classic gold accents for timeless celebrations" },
  { name: "Garden Romance", desc: "Lush florals and soft pastels" },
  { name: "Modern Minimal", desc: "Clean lines and sophisticated simplicity" },
  { name: "Classic White", desc: "Timeless white with delicate details" },
  { name: "Tropical Vibes", desc: "Vibrant colors for island-inspired events" },
];

const SocialTemplates = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar portal="social" />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold font-display text-foreground mb-2">Templates</h1>
        <p className="text-muted-foreground font-body mb-8">Choose a beautiful template for your event</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((t) => (
            <Link key={t.name} to={`/social/create?template=${encodeURIComponent(t.name)}`}>
              <div className="group bg-card border border-border rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all cursor-pointer">
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img src={heroSocial} alt={t.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-display text-lg font-semibold text-primary-foreground">{t.name}</h3>
                    <p className="text-xs text-primary-foreground/70 font-body">{t.desc}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer portal="social" />
    </div>
  );
};

export default SocialTemplates;
