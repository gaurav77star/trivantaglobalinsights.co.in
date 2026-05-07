import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import statsBg from "@/assets/stats-bg.jpg";

const stats = [
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 10, suffix: "+", label: "Global Clients" },
  { value: 15, suffix: "+", label: "Industry Sectors" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

const CounterNumber = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground">
      {count}{suffix}
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="section-padding bg-foreground relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={statsBg} alt="" className="w-full h-full object-cover opacity-20" loading="lazy" />
      </div>
      <div className="absolute inset-0 bg-foreground/80" />
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-heading font-bold text-sm tracking-widest uppercase">Our Impact</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mt-3">
            Numbers That Speak For Themselves
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <CounterNumber target={stat.value} suffix={stat.suffix} />
              <p className="text-primary-foreground/70 font-heading font-semibold text-lg mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
