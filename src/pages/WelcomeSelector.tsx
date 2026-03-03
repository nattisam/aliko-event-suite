import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Briefcase, Heart, ArrowRight } from "lucide-react";
import logoProfessional from "@/assets/logo-professional.png";
import logoSocial from "@/assets/logo-social.png";

const glowWords = [
  { text: "Connect", delay: 1.0 },
  { text: "•", delay: 1.3 },
  { text: "Inspire", delay: 1.5 },
  { text: "•", delay: 1.8 },
  { text: "Elevate", delay: 2.0 },
];

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
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[hsl(152,50%,4%)]">
      {/* Video Background — dark & subtle */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src="/videos/welcome-bg.mp4" type="video/mp4" />
      </video>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(152,50%,4%)/0.6] via-[hsl(152,50%,4%)/0.8] to-[hsl(152,50%,4%)]" />

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
          className="text-center mb-14"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 tracking-tight">
            Welcome to Aliko Events
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/50 font-body font-light tracking-wide">
            Professional precision or personal celebration — choose your experience.
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
            className="group relative overflow-hidden rounded-2xl border border-primary-foreground/10 hover:border-teal/40 bg-[hsl(152,30%,8%)/0.6] backdrop-blur-md transition-all duration-300 cursor-pointer flex flex-col text-left"
          >
            <div className="flex-1 flex items-center justify-center p-8 min-h-[220px]">
              <img src={logoProfessional} alt="Aliko Events Professional" className="max-h-40 w-auto object-contain" />
            </div>
            <div className="border-t border-primary-foreground/5 bg-[hsl(152,30%,6%)/0.8]">
              <div className="relative z-10 p-6 lg:p-8">
                <h2 className="text-2xl font-bold text-primary-foreground mb-1">
                  Aliko Events Professional
                </h2>
                <p className="text-sm text-primary-foreground/40 font-body mb-5">
                  Strategic events. Flawless execution. Measurable impact.
                </p>
                <ul className="space-y-2 mb-6 font-body">
                  {[
                    { text: "Conferences & Summits", color: "text-teal" },
                    { text: "Corporate & Government Events", color: "text-indigo" },
                    { text: "Hybrid & Virtual Programs", color: "text-sky" },
                    { text: "Exchange & Delegation Events", color: "text-violet" },
                  ].map((item) => (
                    <li key={item.text} className="flex items-center gap-3 text-primary-foreground/60">
                      <Briefcase className={`w-4 h-4 ${item.color} flex-shrink-0`} />
                      <span className="text-sm">{item.text}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-teal font-semibold font-body group-hover:gap-3 transition-all">
                  Enter Professional
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
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
            className="group relative overflow-hidden rounded-2xl border border-primary-foreground/10 hover:border-rose/40 bg-[hsl(152,30%,8%)/0.6] backdrop-blur-md transition-all duration-300 cursor-pointer flex flex-col text-left"
          >
            <div className="flex-1 flex items-center justify-center p-8 min-h-[220px]">
              <img src={logoSocial} alt="Aliko Events Social" className="max-h-40 w-auto object-contain" />
            </div>
            <div className="border-t border-primary-foreground/5 bg-[hsl(152,30%,6%)/0.8]">
              <div className="relative z-10 p-6 lg:p-8">
                <h2 className="text-2xl font-bold text-primary-foreground mb-1">
                  Aliko Events Social
                </h2>
                <p className="text-sm text-primary-foreground/40 font-body mb-5">
                  Beautiful celebrations, thoughtfully planned.
                </p>
                <ul className="space-y-2 mb-6 font-body">
                  {[
                    { text: "Weddings", color: "text-rose" },
                    { text: "Birthdays", color: "text-coral" },
                    { text: "Bridal Showers", color: "text-violet" },
                    { text: "Graduations & Engagements", color: "text-amber" },
                  ].map((item) => (
                    <li key={item.text} className="flex items-center gap-3 text-primary-foreground/60">
                      <Heart className={`w-4 h-4 ${item.color} flex-shrink-0`} />
                      <span className="text-sm">{item.text}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-rose font-semibold font-body group-hover:gap-3 transition-all">
                  Enter Social
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.button>
        </div>

        {/* Glowing bulb tagline */}
        <div className="flex items-center justify-center gap-3 mt-14">
          {glowWords.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.6, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ delay: w.delay, duration: 0.6, ease: "easeOut" }}
              className={`font-body tracking-widest uppercase ${
                w.text === "•"
                  ? "text-accent/60 text-xs"
                  : "text-sm text-primary-foreground/70"
              }`}
              style={
                w.text !== "•"
                  ? {
                      textShadow:
                        "0 0 8px hsla(42,65%,50%,0.4), 0 0 20px hsla(42,65%,50%,0.2), 0 0 40px hsla(42,65%,50%,0.1)",
                    }
                  : undefined
              }
            >
              {w.text}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WelcomeSelector;
