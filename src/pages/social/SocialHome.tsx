import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Sparkles, GraduationCap, PartyPopper, Gem, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroSocial from "@/assets/hero-social.jpg";

const eventTypes = [
  { icon: Heart, label: "Weddings" },
  { icon: PartyPopper, label: "Birthdays" },
  { icon: Sparkles, label: "Bridal Showers" },
  { icon: Gem, label: "Engagements" },
  { icon: GraduationCap, label: "Graduations" },
];

const packages = [
  { title: "Full-Service Planning", desc: "We manage everything — concept, vendors, timeline, coordination, and full execution." },
  { title: "Partial Planning", desc: "We step in where you need support, refine your plans, and manage final execution." },
  { title: "Day-Of Coordination", desc: "We oversee vendor arrivals, manage the timeline, and ensure smooth event flow." },
];

const SocialHome = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar portal="social" />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroSocial} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        </div>
        <div className="relative container mx-auto px-4 py-24 lg:py-36">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Celebrate beautifully. We'll handle the rest.
            </h1>
            <p className="text-lg text-primary-foreground/80 font-body mb-8 leading-relaxed">
              From weddings to milestone celebrations, we plan meaningful experiences so you can enjoy every moment.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/social/book-consultation">
                <Button size="lg" className="font-body bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold">
                  Book Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/social/services">
                <Button size="lg" variant="outline" className="font-body border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Explore Packages
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Event Types */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-foreground text-center mb-4">Events We Plan</h2>
        <p className="text-center text-muted-foreground font-body mb-12">Choose your celebration type</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {eventTypes.map((t, i) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex flex-col items-center gap-3 p-6 bg-card rounded-xl shadow-card border border-border hover:border-accent/30 hover:shadow-elevated transition-all cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <t.icon className="w-7 h-7 text-accent" />
              </div>
              <span className="text-sm font-semibold font-body text-foreground">{t.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Planning Packages */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Planning Packages</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border shadow-card text-center"
              >
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/social/services">
              <Button variant="outline" className="font-body">
                View All Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-foreground text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Chioma Eze", event: "Wedding", quote: "Aliko Events made our wedding day absolutely magical. Every detail was perfect." },
              { name: "Kwame Asante", event: "Birthday", quote: "My 40th birthday celebration was beyond anything I imagined. The team was incredible." },
              { name: "Nadia Bello", event: "Graduation", quote: "They handled everything so I could just enjoy my daughter's graduation party stress-free." },
            ].map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10"
              >
                <p className="text-primary-foreground/90 font-body text-sm leading-relaxed mb-4">"{t.quote}"</p>
                <div>
                  <p className="font-semibold text-primary-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-gold font-body">{t.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-20 text-center">
        <Gift className="w-12 h-12 text-accent mx-auto mb-4" />
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
          Let's plan your celebration.
        </h2>
        <p className="text-muted-foreground font-body mb-8 max-w-md mx-auto">
          Beautiful moments deserve thoughtful planning. Let's create something unforgettable together.
        </p>
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

export default SocialHome;
