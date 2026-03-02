import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, ClipboardList, Globe, Mic, Award, Users, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const whyChoose = [
  { text: "Detail-driven project management", color: "text-teal bg-teal/10" },
  { text: "Transparent budgeting and accountability", color: "text-indigo bg-indigo/10" },
  { text: "Technology-enabled registration and reporting", color: "text-coral bg-coral/10" },
  { text: "Experienced production team", color: "text-violet bg-violet/10" },
  { text: "Multicultural and international experience", color: "text-emerald bg-emerald/10" },
];

const coreServices = [
  { icon: ClipboardList, title: "Complete Event Management", desc: "We manage every aspect of your event — from concept development and vendor sourcing to onsite execution and final reporting.", color: "bg-teal/10 text-teal border-teal/20" },
  { icon: Award, title: "Corporate & Government Events", desc: "We design professional events aligned with institutional standards, stakeholder expectations, and policy requirements.", color: "bg-indigo/10 text-indigo border-indigo/20" },
  { icon: Globe, title: "Hybrid & Virtual Event Production", desc: "We combine production quality, digital engagement tools, and audience interaction to create dynamic hybrid experiences.", color: "bg-sky/10 text-sky border-sky/20" },
  { icon: Mic, title: "Launch & Media Events", desc: "We deliver launch events designed to amplify brand presence and engage press, partners, and clients.", color: "bg-coral/10 text-coral border-coral/20" },
  { icon: Users, title: "Conferences & Multi-Day Programs", desc: "We manage multi-session, multi-speaker, multi-day conferences with precision and structure.", color: "bg-violet/10 text-violet border-violet/20" },
  { icon: BarChart3, title: "Ceremonies & Official Inaugurations", desc: "Protocol-conscious events with structured sequencing and seamless coordination.", color: "bg-amber/10 text-amber border-amber/20" },
];

const coverageGrid = [
  { text: "Event Strategy & Concept", color: "border-l-4 border-l-teal" },
  { text: "Budget Development & Procurement", color: "border-l-4 border-l-indigo" },
  { text: "Registration & Ticketing", color: "border-l-4 border-l-coral" },
  { text: "Agenda & Speaker Management", color: "border-l-4 border-l-sky" },
  { text: "Vendor & Venue Coordination", color: "border-l-4 border-l-violet" },
  { text: "VIP & Protocol Support", color: "border-l-4 border-l-amber" },
  { text: "Onsite Operations & Staffing", color: "border-l-4 border-l-emerald" },
  { text: "Post-Event Reporting & Analytics", color: "border-l-4 border-l-rose" },
];

const ProfessionalServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar portal="professional" />

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
          {whyChoose.map((item, i) => {
            const [textColor, bgColor] = item.color.split(" ");
            return (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border"
              >
                <div className={`w-8 h-8 rounded-full ${bgColor} flex items-center justify-center flex-shrink-0`}>
                  <CheckCircle className={`w-4 h-4 ${textColor}`} />
                </div>
                <span className="font-body text-foreground">{item.text}</span>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Core Services */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Core Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((s, i) => {
              const parts = s.color.split(" ");
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`p-6 rounded-xl bg-card border shadow-card hover:shadow-elevated transition-all duration-300 ${parts[2]}`}
                >
                  <div className={`w-12 h-12 rounded-lg ${parts[0]} flex items-center justify-center mb-4`}>
                    <s.icon className={`w-6 h-6 ${parts[1]}`} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">{s.desc}</p>
                </motion.div>
              );
            })}
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
              key={item.text}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`p-4 rounded-lg bg-card border border-border text-left shadow-card hover:shadow-elevated transition-all ${item.color}`}
            >
              <span className="text-sm font-semibold font-body text-foreground">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </section>

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
