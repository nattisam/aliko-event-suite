import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, ClipboardList, Globe, Mic, Award, Users, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const whyChoose = [
  "Detail-driven project management",
  "Transparent budgeting and accountability",
  "Technology-enabled registration and reporting",
  "Experienced production team",
  "Multicultural and international experience",
];

const coreServices = [
  { icon: ClipboardList, title: "Complete Event Management", desc: "We manage every aspect of your event — from concept development and vendor sourcing to onsite execution and final reporting." },
  { icon: Award, title: "Corporate & Government Events", desc: "We design professional events aligned with institutional standards, stakeholder expectations, and policy requirements." },
  { icon: Globe, title: "Hybrid & Virtual Event Production", desc: "We combine production quality, digital engagement tools, and audience interaction to create dynamic hybrid experiences." },
  { icon: Mic, title: "Launch & Media Events", desc: "We deliver launch events designed to amplify brand presence and engage press, partners, and clients." },
  { icon: Users, title: "Conferences & Multi-Day Programs", desc: "We manage multi-session, multi-speaker, multi-day conferences with precision and structure." },
  { icon: BarChart3, title: "Ceremonies & Official Inaugurations", desc: "Protocol-conscious events with structured sequencing and seamless coordination." },
];

const coverageGrid = [
  "Event Strategy & Concept",
  "Budget Development & Procurement",
  "Registration & Ticketing",
  "Agenda & Speaker Management",
  "Vendor & Venue Coordination",
  "VIP & Protocol Support",
  "Onsite Operations & Staffing",
  "Post-Event Reporting & Analytics",
];

const ProfessionalServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar portal="professional" />

      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">Our Services</h1>
            <p className="text-lg text-primary-foreground/80 font-body max-w-2xl mx-auto">
              Strategic event planning backed by operational excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">Why Choose Aliko Events</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {whyChoose.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border"
            >
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="font-body text-foreground">{item}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Services */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Core Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-xl bg-card border border-border shadow-card"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Grid */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-foreground text-center mb-4">All Bases Covered</h2>
        <p className="text-center text-muted-foreground font-body mb-12 max-w-xl mx-auto">
          Every element of your event, handled with care.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {coverageGrid.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-4 rounded-lg bg-card border border-border text-center shadow-card"
            >
              <span className="text-sm font-semibold font-body text-foreground">{item}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Ready to get started?</h2>
          <Link to="/professional/request-proposal">
            <Button size="lg" className="font-body bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold">
              Request Proposal
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer portal="professional" />
    </div>
  );
};

export default ProfessionalServices;
