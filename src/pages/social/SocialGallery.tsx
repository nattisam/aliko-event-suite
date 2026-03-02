import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const galleryItems = [
  { title: "Elegant Garden Wedding", category: "Wedding", image: "/images/wedding.jpg", color: "bg-rose text-primary-foreground" },
  { title: "Golden 50th Birthday", category: "Birthday", image: "/images/birthday.jpg", color: "bg-coral text-primary-foreground" },
  { title: "Blush Bridal Shower", category: "Bridal Shower", image: "/images/bridal-shower.jpg", color: "bg-violet text-primary-foreground" },
  { title: "Graduation Gala", category: "Graduation", image: "/images/graduation.jpg", color: "bg-indigo text-primary-foreground" },
  { title: "Romantic Engagement Dinner", category: "Engagement", image: "/images/engagement.jpg", color: "bg-amber text-primary-foreground" },
  { title: "Rooftop Anniversary", category: "Anniversary", image: "/images/anniversary.jpg", color: "bg-teal text-primary-foreground" },
];

const SocialGallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar portal="social" />

      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">Gallery</h1>
            <p className="text-lg text-primary-foreground/80 font-body max-w-2xl mx-auto">
              Moments worth remembering.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <p className="text-center text-muted-foreground font-body mb-12 max-w-xl mx-auto">
          Browse highlights from celebrations we've planned and coordinated.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative aspect-[4/5] rounded-xl overflow-hidden bg-card border border-border shadow-card group cursor-pointer"
            >
              <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className={`inline-block px-3 py-1 text-xs font-body font-semibold rounded-full mb-2 ${item.color}`}>{item.category}</span>
                <h3 className="font-display text-lg font-semibold text-primary-foreground">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-muted py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-4">Want something like this?</h2>
          <Link to="/social/book-consultation">
            <Button size="lg" className="font-body bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold">
              Book Consultation
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer portal="social" />
    </div>
  );
};

export default SocialGallery;
