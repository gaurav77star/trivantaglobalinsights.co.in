import { motion } from "framer-motion";
import { Target, TrendingUp, Users, ShieldCheck } from "lucide-react";
import aboutImg from "@/assets/about-section.jpg";

const features = [
  { icon: Target, title: "Precision Research", desc: "Data-driven methodologies that deliver accurate, actionable insights." },
  { icon: TrendingUp, title: "Strategic Growth", desc: "We help identify market gaps and emerging opportunities for sustainable growth." },
  { icon: Users, title: "Client-Centric", desc: "Every project is tailored to your unique business needs and objectives." },
  { icon: ShieldCheck, title: "Trusted Results", desc: "Proven track record of delivering measurable impact for our clients." },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-heading font-bold text-sm tracking-widest uppercase">About Us</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              We Help Our Clients Grow Through Purposeful Insight
            </h2>
            <p className="text-muted-foreground text-lg">
              At Trivanta Global Insights, we transform uncertainty into opportunity. Our specialized team combines researchers,
              behavioral analysts, and strategic thinkers to deliver insights that drive meaningful business decisions.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={aboutImg} alt="Our team at Trivanta Global Insights" width={1024} height={640} loading="lazy" className="rounded-xl shadow-card w-full h-auto object-cover" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-lg p-8 shadow-card hover-lift text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <f.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{f.title}</h3>
              <p className="text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
