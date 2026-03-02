import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroProfessional from "@/assets/hero-professional.jpg";

const portfolioItems = [
  {
    title: "Africa Business Summit 2025",
    location: "Lagos, Nigeria",
    year: "2025",
    objective: "Bring together 500+ business leaders across 12 African nations for a 3-day summit on trade and investment.",
    approach: "Full event management including venue sourcing, speaker coordination, multi-track agenda design, and hybrid streaming setup.",
    outcome: "520 attendees, 98% satisfaction rate, 15 partnership deals signed during networking sessions.",
    color: "border-l-4 border-l-teal",
  },
  {
    title: "Global Education Exchange Forum",
    location: "Accra, Ghana",
    year: "2024",
    objective: "Facilitate dialogue between education ministries and international development partners.",
    approach: "Protocol-level coordination, VIP delegation management, simultaneous translation, and post-event reporting.",
    outcome: "200+ delegates from 8 countries, 3 new MoUs signed, extensive media coverage across West Africa.",
    color: "border-l-4 border-l-indigo",
  },
  {
    title: "Tech Career Fair 2024",
    location: "Nairobi, Kenya",
    year: "2024",
    objective: "Connect 1,000+ job seekers with top technology employers across East Africa.",
    approach: "Registration and ticketing platform, attendee matching algorithm, onsite operations, and employer booth management.",
    outcome: "1,200 attendees, 45 employers, 300+ interviews conducted on-site.",
    color: "border-l-4 border-l-coral",
  },
];

const ProfessionalPortfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar portal="professional" />

      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">Portfolio</h1>
            <p className="text-lg text-primary-foreground/80 font-body max-w-2xl mx-auto">
              A closer look at events we've delivered.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="space-y-12">
          {portfolioItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`grid md:grid-cols-2 gap-8 items-center p-6 rounded-xl bg-card border border-border shadow-card ${item.color}`}
            >
              <div className="aspect-[16/10] rounded-lg overflow-hidden">
                <img src={heroProfessional} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-body mb-4">{item.location} | {item.year}</p>
                <div className="space-y-3 font-body text-sm">
                  <div>
                    <span className="font-semibold text-foreground">Objective: </span>
                    <span className="text-muted-foreground">{item.objective}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Our Approach: </span>
                    <span className="text-muted-foreground">{item.approach}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Outcome: </span>
                    <span className="text-muted-foreground">{item.outcome}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-muted py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-4">Have an event in mind?</h2>
          <Link to="/professional/request-proposal">
            <Button size="lg" className="font-body bg-primary text-primary-foreground hover:bg-primary/90">
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

export default ProfessionalPortfolio;
