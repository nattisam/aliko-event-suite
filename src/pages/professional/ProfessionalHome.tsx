import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Users, Ticket, Shield, Briefcase, GraduationCap, Handshake, Globe, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import heroProfessional from "@/assets/hero-professional.jpg";

const categories = [
  { icon: Briefcase, label: "Business" },
  { icon: GraduationCap, label: "Career" },
  { icon: Handshake, label: "Consulting" },
  { icon: BookOpen, label: "Education" },
  { icon: Globe, label: "Exchange Programs" },
];

const benefits = [
  { icon: Ticket, title: "Smart Ticketing", desc: "Multi-tier pricing, promo codes, and group discounts" },
  { icon: Users, title: "Networking", desc: "Attendee matching and in-event messaging" },
  { icon: BarChart3, title: "Analytics", desc: "Real-time registration and revenue dashboards" },
  { icon: Shield, title: "Enterprise Ready", desc: "Secure, scalable infrastructure for any event size" },
];

const mockEvents = [
  { title: "Africa Business Summit 2026", date: "Apr 15–17, 2026", location: "Lagos, Nigeria", image: "", price: "$199", category: "Business" },
  { title: "Global Education Exchange", date: "May 8, 2026", location: "Accra, Ghana", image: "", price: "$49", category: "Education" },
  { title: "Tech Career Fair 2026", date: "Jun 2, 2026", location: "Nairobi, Kenya", image: "", price: "Free", category: "Career" },
];

const ProfessionalHome = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar portal="professional" />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroProfessional} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 gradient-overlay" />
        </div>
        <div className="relative container mx-auto px-4 py-24 lg:py-36">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Host World-Class Professional Events
            </h1>
            <p className="text-lg text-primary-foreground/80 font-body mb-8 leading-relaxed">
              From conferences to career fairs — manage ticketing, networking, and analytics on one powerful platform.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/professional/host">
                <Button size="lg" className="font-body bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold">
                  Host an Event
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/professional/events">
                <Button size="lg" variant="outline" className="font-body border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Explore Events
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">Upcoming Events</h2>
            <p className="text-muted-foreground font-body">Discover conferences, summits, and more</p>
          </div>
          <Link to="/professional/events" className="text-sm font-body font-semibold text-primary hover:underline hidden sm:block">
            View all →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockEvents.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <EventCard {...event} image={heroProfessional} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Event Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col items-center gap-3 p-6 bg-card rounded-xl shadow-card border border-border hover:border-primary/20 hover:shadow-elevated transition-all cursor-pointer group"
              >
                <cat.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                <span className="text-sm font-semibold font-body text-foreground">{cat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Host */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-foreground text-center mb-4">Why Host With Aliko</h2>
        <p className="text-center text-muted-foreground font-body mb-12 max-w-xl mx-auto">
          Everything you need to create, manage, and grow professional events
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border shadow-card"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <b.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground font-body">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-foreground text-center mb-12">What Organizers Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Amara Obi", role: "Conference Director", quote: "Aliko transformed how we manage our annual summit. Registration was seamless." },
              { name: "David Mensah", role: "HR Manager", quote: "The career fair tools and attendee matching saved us countless hours." },
              { name: "Fatima Al-Hassan", role: "Education Lead", quote: "From ticketing to analytics, everything just works beautifully." },
            ].map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10"
              >
                <p className="text-primary-foreground/90 font-body text-sm leading-relaxed mb-4">
                  "{t.quote}"
                </p>
                <div>
                  <p className="font-semibold text-primary-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-gold font-body">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
          Ready to Host Your Next Event?
        </h2>
        <p className="text-muted-foreground font-body mb-8 max-w-md mx-auto">
          Join thousands of organizers creating impactful professional events with Aliko.
        </p>
        <Link to="/professional/host">
          <Button size="lg" className="font-body bg-primary text-primary-foreground hover:bg-primary/90">
            Get Started Free
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </section>

      <Footer portal="professional" />
    </div>
  );
};

export default ProfessionalHome;
