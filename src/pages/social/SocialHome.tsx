import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Sparkles, GraduationCap, PartyPopper, Gem, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroSocial from "@/assets/hero-social.jpg";

const eventTypes = [
  { icon: Heart, label: "Weddings", image: "/images/wedding.jpg", color: "border-rose/30" },
  { icon: PartyPopper, label: "Birthdays", image: "/images/birthday.jpg", color: "border-coral/30" },
  { icon: Sparkles, label: "Bridal Showers", image: "/images/bridal-shower.jpg", color: "border-violet/30" },
  { icon: Gem, label: "Engagements", image: "/images/engagement.jpg", color: "border-amber/30" },
  { icon: GraduationCap, label: "Graduations", image: "/images/graduation.jpg", color: "border-indigo/30" },
];

const packages = [
  { title: "Full-Service Planning", desc: "We manage everything — concept, vendors, timeline, coordination, and full execution.", image: "/images/full-service.jpg", accent: "border-t-4 border-t-rose" },
  { title: "Partial Planning", desc: "We step in where you need support, refine your plans, and manage final execution.", image: "/images/partial-planning.jpg", accent: "border-t-4 border-t-violet" },
  { title: "Day-Of Coordination", desc: "We oversee vendor arrivals, manage the timeline, and ensure smooth event flow.", image: "/images/day-of.jpg", accent: "border-t-4 border-t-teal" },
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
                <Button size="lg" variant="outline" className="font-body border-primary-foreground text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20">
                  Explore Packages
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Event Types — with thumbnails */}
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
              className={`rounded-xl overflow-hidden bg-card shadow-card border ${t.color} hover:shadow-elevated transition-all cursor-pointer group`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={t.image} alt={t.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-4 text-center">
                <span className="text-sm font-semibold font-body text-foreground">{t.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Planning Packages — with thumbnails */}
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
                className={`rounded-xl bg-card border border-border shadow-card hover:shadow-elevated transition-all overflow-hidden group ${p.accent}`}
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">{p.title}</h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">{p.desc}</p>
                </div>
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
              { name: "Chioma Eze", event: "Wedding", quote: "Aliko Events made our wedding day absolutely magical. Every detail was perfect.", accent: "border-l-4 border-l-rose" },
              { name: "Kwame Asante", event: "Birthday", quote: "My 40th birthday celebration was beyond anything I imagined. The team was incredible.", accent: "border-l-4 border-l-coral" },
              { name: "Nadia Bello", event: "Graduation", quote: "They handled everything so I could just enjoy my daughter's graduation party stress-free.", accent: "border-l-4 border-l-indigo" },
            ].map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-6 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10 ${t.accent}`}
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
