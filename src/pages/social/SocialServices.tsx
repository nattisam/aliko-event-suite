import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Palette, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const mainPackages = [
  { title: "Full-Service Planning", desc: "From the first idea to the final send-off, we manage vendors, decor, timelines, budgets, and on-site coordination.", icon: Heart, color: "bg-rose/10 text-rose border-t-4 border-t-rose" },
  { title: "Partial Planning", desc: "Ideal for hosts who have started planning and need expert guidance to bring it all together.", icon: Users, color: "bg-violet/10 text-violet border-t-4 border-t-violet" },
  { title: "Day-Of Coordination", desc: "Enjoy your event while we handle logistics, setup, timeline management, and vendor coordination.", icon: Clock, color: "bg-teal/10 text-teal border-t-4 border-t-teal" },
];

const addOns = [
  { text: "Decor & Design Styling", color: "text-rose bg-rose/10" },
  { text: "Vendor Sourcing", color: "text-amber bg-amber/10" },
  { text: "Guest RSVP Management", color: "text-indigo bg-indigo/10" },
  { text: "Seating & Flow Planning", color: "text-teal bg-teal/10" },
  { text: "Timeline Development", color: "text-violet bg-violet/10" },
];

const SocialServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar portal="social" />

      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">Planning Services</h1>
            <p className="text-lg text-primary-foreground/80 font-body max-w-2xl mx-auto">
              Thoughtful planning for unforgettable celebrations.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {mainPackages.map((p, i) => {
            const parts = p.color.split(" ");
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-8 rounded-xl bg-card border border-border shadow-card hover:shadow-elevated transition-all text-center ${parts.slice(2).join(" ")}`}
              >
                <div className={`w-14 h-14 rounded-full ${parts[0]} flex items-center justify-center mx-auto mb-4`}>
                  <p.icon className={`w-7 h-7 ${parts[1]}`} />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Add-On Services</h2>
          <div className="max-w-lg mx-auto space-y-3">
            {addOns.map((item, i) => {
              const [textColor, bgColor] = item.color.split(" ");
              return (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border"
                >
                  <div className={`w-8 h-8 rounded-full ${bgColor} flex items-center justify-center flex-shrink-0`}>
                    <Palette className={`w-4 h-4 ${textColor}`} />
                  </div>
                  <span className="font-body text-foreground">{item.text}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Ready to start planning?</h2>
        <Link to="/social/book-consultation">
          <Button size="lg" className="font-body bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold">
            Book Consultation
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </section>

      <Footer portal="social" />
    </div>
  );
};

export default SocialServices;
