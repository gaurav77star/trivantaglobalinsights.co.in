import { motion } from "framer-motion";
import { Award, BarChart3, Clock, Lightbulb, Shield, Headphones } from "lucide-react";

const reasons = [
  { icon: Award, title: "Industry Expertise", desc: "Deep domain knowledge across 15+ industry sectors with proven research methodologies." },
  { icon: BarChart3, title: "Data-Driven Insights", desc: "We leverage advanced analytics and AI-powered tools to deliver precise, actionable intelligence." },
  { icon: Clock, title: "Timely Delivery", desc: "We respect deadlines and deliver comprehensive reports within committed timelines." },
  { icon: Lightbulb, title: "Innovative Approach", desc: "Cutting-edge research techniques combined with creative problem-solving frameworks." },
  { icon: Shield, title: "Confidentiality", desc: "Strict data protection protocols ensuring your business intelligence stays secure." },
  { icon: Headphones, title: "Dedicated Support", desc: "Round-the-clock client support with a dedicated research manager for every project." },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-heading font-bold text-sm tracking-widest uppercase">Why Choose Us</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            What Sets Us Apart
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We combine expertise, innovation, and dedication to deliver research solutions that create real business value.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-8 hover-lift text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary transition-colors duration-300">
                <r.icon className="text-primary group-hover:text-primary-foreground transition-colors duration-300" size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{r.title}</h3>
              <p className="text-muted-foreground">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
