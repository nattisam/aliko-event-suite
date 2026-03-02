import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Briefcase, Heart, ArrowRight } from "lucide-react";
import logoProfessional from "@/assets/logo-professional.png";
import logoSocial from "@/assets/logo-social.png";
import welcomeBg from "@/assets/welcome-bg.jpg";

const WelcomeSelector = () => {
  const navigate = useNavigate();
  const [lastVisit, setLastVisit] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("aliko-last-portal");
    if (saved) setLastVisit(saved);
  }, []);

  const handleSelect = (portal: "professional" | "social") => {
    localStorage.setItem("aliko-last-portal", portal);
    navigate(`/${portal}`);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${welcomeBg})` }}
      />
      <div className="absolute inset-0 bg-green-dark/60" />

      {/* Continue banner */}
      {lastVisit && (
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center gap-3 py-3 px-4 bg-accent/90 backdrop-blur-sm"
        >
          <span className="text-sm font-medium text-accent-foreground">
            Welcome back!
          </span>
          <button
            onClick={() => handleSelect(lastVisit as "professional" | "social")}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-foreground underline underline-offset-2 hover:opacity-80 transition-opacity"
          >
            Continue to {lastVisit === "professional" ? "Professional" : "Social"}
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      )}

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 tracking-tight">
            Welcome to Aliko Events
          </h1>
          <p className="text-lg sm:text-xl text-gold-light font-body font-light tracking-wide">
            Choose your experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Professional Card */}
          <motion.button
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleSelect("professional")}
            className="group relative bg-card/95 backdrop-blur-md rounded-2xl p-8 lg:p-10 text-left shadow-elevated border border-border/50 hover:border-primary/30 transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-start gap-5 mb-6">
              <img
                src={logoProfessional}
                alt="Aliko Events Professional logo"
                className="w-16 h-16 object-contain rounded-xl"
              />
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-1">
                  Professional
                </h2>
                <p className="text-sm text-muted-foreground font-body">
                  Enterprise events & conferences
                </p>
              </div>
            </div>

            <ul className="space-y-3 mb-8 font-body">
              {[
                "Conferences & Summits",
                "Networking Events",
                "Exchange Programs",
                "Business & Education",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground/80">
                  <Briefcase className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2 text-primary font-semibold font-body group-hover:gap-3 transition-all">
              Enter Professional
              <ArrowRight className="w-4 h-4" />
            </div>
          </motion.button>

          {/* Social Card */}
          <motion.button
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleSelect("social")}
            className="group relative bg-card/95 backdrop-blur-md rounded-2xl p-8 lg:p-10 text-left shadow-elevated border border-border/50 hover:border-accent/30 transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-start gap-5 mb-6">
              <img
                src={logoSocial}
                alt="Aliko Events Social logo"
                className="w-16 h-16 object-contain rounded-xl"
              />
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-1">
                  Social
                </h2>
                <p className="text-sm text-muted-foreground font-body">
                  Celebrate life's moments
                </p>
              </div>
            </div>

            <ul className="space-y-3 mb-8 font-body">
              {[
                "Weddings & Engagements",
                "Birthdays & Milestones",
                "Bridal & Baby Showers",
                "Graduations",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground/80">
                  <Heart className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2 text-accent font-semibold font-body group-hover:gap-3 transition-all">
              Enter Social
              <ArrowRight className="w-4 h-4" />
            </div>
          </motion.button>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center text-primary-foreground/50 text-sm font-body mt-10"
        >
          Connect • Elevate • Inspire
        </motion.p>
      </div>
    </div>
  );
};

export default WelcomeSelector;
