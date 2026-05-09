import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const slides = [
  {
    title: "Transforming Data Into Strategic Decisions",
    subtitle: "We deliver precision market research that empowers businesses to grow with confidence.",
  },
  {
    title: "Insights That Drive Real Impact",
    subtitle: "From consumer behavior to market trends, we uncover what matters most for your success.",
  },
  {
    title: "Your Strategic Research Partner",
    subtitle: "100+ projects delivered with measurable results across diverse industries worldwide.",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Modern boardroom representing Trivanta Global Insights' professional workspace" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-foreground/85" />
        <div className="absolute inset-0 bg-grid opacity-[0.07]" />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-20 -left-20 w-[28rem] h-[28rem] rounded-full bg-primary/30 blur-[120px] animate-float-orb pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[32rem] h-[32rem] rounded-full bg-orange-500/20 blur-[140px] animate-float-orb pointer-events-none" style={{ animationDelay: '4s' }} />

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur border border-primary/40 text-primary font-heading font-bold text-sm tracking-widest px-4 py-1.5 rounded-full mb-6 uppercase">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Trivanta Global Insights
            </span>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 text-glow">
              {slides[current].title}
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mb-10 font-body">
              {slides[current].subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="btn-modern text-primary-foreground font-heading font-bold px-8 py-3.5 rounded-md flex items-center gap-2 text-lg"
              >
                Explore Our Services <ArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-primary-foreground/80 backdrop-blur-sm text-primary-foreground font-heading font-bold px-8 py-3.5 rounded-md hover:bg-primary-foreground hover:text-foreground transition-all duration-300 text-lg hover:scale-[1.02]"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex gap-3 mt-12">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "w-12 bg-primary" : "w-6 bg-primary-foreground/40"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
