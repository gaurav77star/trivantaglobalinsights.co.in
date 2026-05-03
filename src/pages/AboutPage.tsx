import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";

const values = [
  "Data-Driven Decision Making",
  "Precision & Accuracy in Research",
  "Client-Centric Approach",
  "Innovation in Methodology",
  "Integrity & Transparency",
  "Measurable Impact",
];

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20 bg-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-primary blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-primary font-heading font-bold text-sm tracking-widest uppercase">About Us</span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground mt-3 mb-6">
              We Help Our Clients Grow Through Purposeful Insight & Smart Execution
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-3xl">
              At Trivanta Global Insights, we believe in delivering clarity through data and strategy. Our work is rooted in precision, collaboration, and a deep commitment to creating measurable impact.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-primary font-heading font-bold text-sm tracking-widest uppercase">About Company</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Transforming Uncertainty Into Opportunity
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Our specialized team combines researchers, behavioral analysts, and strategic thinkers who excel at revealing the insights that drive meaningful business decisions. Whether it's identifying market gaps, understanding consumer behavior, or predicting industry shifts, we empower organizations to act with precision and purpose.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We tackle every challenge with rigor, creativity, and strategic focus. Through proven methodologies and cutting-edge analytics, we deliver research that doesn't just inform — it transforms how you compete.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6">Our Core Values</h3>
              <div className="grid gap-4">
                {values.map((v, i) => (
                  <motion.div
                    key={v}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 p-4 bg-secondary rounded-lg"
                  >
                    <CheckCircle className="text-primary flex-shrink-0" size={22} />
                    <span className="font-heading font-semibold text-foreground">{v}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <StatsSection />
      <Footer />
    </div>
  );
};

export default AboutPage;
