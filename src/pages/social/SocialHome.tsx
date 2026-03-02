import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Sparkles, Gift, GraduationCap, PartyPopper, Gem } from "lucide-react";
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

const steps = [
  { num: "01", title: "Choose a Template", desc: "Browse beautiful, curated designs for your event type" },
  { num: "02", title: "Add Your Details", desc: "Customize with your event info, photos, and RSVP questions" },
  { num: "03", title: "Send Invites", desc: "Share your link and track RSVPs in real time" },
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
              Celebrate Life's Most Beautiful Moments
            </h1>
            <p className="text-lg text-primary-foreground/80 font-body mb-8 leading-relaxed">
              Create stunning invitations, manage RSVPs, and make every gathering unforgettable.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/social/create">
                <Button size="lg" className="font-body bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold">
                  Create Your Invite
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/social/templates">
                <Button size="lg" variant="outline" className="font-body border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Browse Templates
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Event Types */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-foreground text-center mb-4">What Are You Celebrating?</h2>
        <p className="text-center text-muted-foreground font-body mb-12">Choose your event type to get started</p>
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

      {/* Template Gallery Preview */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4">Beautiful Templates</h2>
          <p className="text-center text-muted-foreground font-body mb-12">Professionally designed for every occasion</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Elegant Gold", "Garden Romance", "Modern Minimal"].map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative aspect-[4/5] rounded-xl overflow-hidden bg-card border border-border shadow-card group cursor-pointer"
              >
                <img src={heroSocial} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-display text-lg font-semibold text-primary-foreground">{name}</h3>
                  <p className="text-xs text-primary-foreground/70 font-body">Wedding Template</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/social/templates">
              <Button variant="outline" className="font-body">
                View All Templates
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <span className="text-5xl font-display font-bold text-gradient-gold">{s.num}</span>
              <h3 className="font-display text-xl font-semibold text-foreground mt-4 mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground font-body">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-foreground text-center mb-12">Loved by Hosts</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Chioma Eze", event: "Wedding", quote: "Our guests couldn't stop complimenting the beautiful invitation. RSVPs were so easy!" },
              { name: "Kwame Asante", event: "Birthday", quote: "Setting up my 40th birthday invite took 10 minutes. The templates are gorgeous." },
              { name: "Nadia Bello", event: "Graduation", quote: "Tracking RSVPs and meal preferences saved me so much stress." },
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
          Make Your Next Event Unforgettable
        </h2>
        <p className="text-muted-foreground font-body mb-8 max-w-md mx-auto">
          Beautiful invitations, seamless RSVPs, and everything you need — all free to start.
        </p>
        <Link to="/social/create">
          <Button size="lg" className="font-body bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold">
            Create Your Event
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </section>

      <Footer portal="social" />
    </div>
  );
};

export default SocialHome;
