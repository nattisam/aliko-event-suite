import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroProfessional from "@/assets/hero-professional.jpg";

const stats = [
  { value: "100+", label: "Events Delivered" },
  { value: "15+", label: "Countries Served" },
  { value: "25,000+", label: "Attendees Hosted" },
  { value: "98%", label: "Client Satisfaction" },
];

const services = [
  { title: "Complete Event Management", desc: "End-to-end planning and execution — concept development, budgeting, vendor coordination, production, and post-event reporting.", image: "/images/conference-hall.jpg", accent: "border-t-4 border-t-teal", badge: "bg-teal text-primary-foreground" },
  { title: "Corporate & Institutional Events", desc: "Executive meetings, milestone celebrations, stakeholder gatherings, training programs, and award ceremonies.", image: "/images/corporate-event.jpg", accent: "border-t-4 border-t-indigo", badge: "bg-indigo text-primary-foreground" },
  { title: "Conferences & Summits", desc: "Multi-track programs, speaker coordination, sponsorship integration, and delegate engagement strategies.", image: "/images/summit-stage.jpg", accent: "border-t-4 border-t-coral", badge: "bg-coral text-primary-foreground" },
  { title: "Hybrid & Virtual Events", desc: "Seamless integration of in-person and digital experiences with engagement-focused design.", image: "/images/hybrid-event.jpg", accent: "border-t-4 border-t-sky", badge: "bg-sky text-primary-foreground" },
  { title: "Product & Media Launches", desc: "Strategically produced launch experiences that elevate brand visibility and stakeholder impact.", image: "/images/media-launch.jpg", accent: "border-t-4 border-t-violet", badge: "bg-violet text-primary-foreground" },
  { title: "VIP Protocol & Delegation Support", desc: "High-level event coordination with attention to detail, protocol, and guest experience.", image: "/images/vip-protocol.jpg", accent: "border-t-4 border-t-amber", badge: "bg-amber text-primary-foreground" },
];

const steps = [
  { num: "01", title: "Discover & Strategize", desc: "We understand your objectives, audience, and success metrics.", color: "text-teal", bg: "bg-teal/10" },
  { num: "02", title: "Plan & Produce", desc: "We manage timelines, vendors, budgets, and every operational detail.", color: "text-indigo", bg: "bg-indigo/10" },
  { num: "03", title: "Deliver & Report", desc: "We execute flawlessly and provide post-event insights and reporting.", color: "text-coral", bg: "bg-coral/10" },
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
              Professional events planned with precision and delivered with impact.
            </h1>
            <p className="text-lg text-primary-foreground/80 font-body mb-8 leading-relaxed">
              From strategy to execution, we design and manage conferences, summits, corporate programs, and institutional events that inspire confidence and deliver measurable results.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/professional/request-proposal">
                <Button size="lg" className="font-body bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold">
                  Request Proposal
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/professional/events">
                <Button size="lg" variant="outline" className="font-body border-primary-foreground text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20">
                  Explore Events
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Credibility Stats */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-foreground text-center mb-12">Trusted to deliver events that matter.</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl lg:text-5xl font-bold text-gradient-gold mb-2">{s.value}</p>
                <p className="text-sm text-primary-foreground/70 font-body">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview — with thumbnails */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-foreground text-center mb-4">Comprehensive Event Management Services</h2>
        <p className="text-center text-muted-foreground font-body mb-12 max-w-xl mx-auto">
          Everything you need to create, manage, and grow professional events.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`rounded-xl bg-card border border-border shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden group ${s.accent}`}
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/professional/services">
            <Button variant="outline" className="font-body">
              View All Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* How We Work — colorful backgrounds */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">How We Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`text-center p-8 rounded-2xl ${s.bg} border border-border`}
              >
                <span className={`text-5xl font-display font-bold ${s.color}`}>{s.num}</span>
                <h3 className="font-display text-xl font-semibold text-foreground mt-4 mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-foreground text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Amara Obi", role: "Conference Director", quote: "Aliko Events delivered our annual summit flawlessly. Their team handled every detail with professionalism and clarity.", accent: "border-l-4 border-l-teal" },
              { name: "David Mensah", role: "HR Manager", quote: "The career fair tools and attendee matching saved us countless hours of coordination.", accent: "border-l-4 border-l-coral" },
              { name: "Fatima Al-Hassan", role: "Education Lead", quote: "From ticketing to analytics, everything just works beautifully. A truly professional experience.", accent: "border-l-4 border-l-indigo" },
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
                  <p className="text-xs text-gold font-body">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
          Ready to plan your next professional event?
        </h2>
        <p className="text-muted-foreground font-body mb-8 max-w-md mx-auto">
          Join thousands of organizers creating impactful professional events with Aliko.
        </p>
        <Link to="/professional/request-proposal">
          <Button size="lg" className="font-body bg-primary text-primary-foreground hover:bg-primary/90">
            Request Proposal
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </section>

      <Footer portal="professional" />
    </div>
  );
};

export default ProfessionalHome;
