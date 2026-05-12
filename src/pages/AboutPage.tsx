import { motion } from "framer-motion";
import { CheckCircle, Mail, Target, Eye, Compass, Award, Users, Globe2 } from "lucide-react";
import Header from "@/components/Header";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";
import { teamMembers } from "@/data/teamData";

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
  </svg>
);

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

      <section className="pt-20 relative overflow-hidden min-h-[60vh] flex items-center">
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

      {/* Team / Leadership Section */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-heading font-bold text-sm tracking-widest uppercase">Our Leadership</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
              Meet The Team
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              The people behind Trivanta's success — dedicated professionals driving insights and innovation.
            </p>
          </motion.div>

          <div className="space-y-20">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.id}
                id={member.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative overflow-hidden rounded-xl shadow-elevated">
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      width={512}
                      height={640}
                      className="w-full max-h-[500px] object-cover object-top"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-foreground/60 to-transparent" />
                  </div>
                </div>

                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="text-primary font-heading font-bold text-sm tracking-widest uppercase">
                    {member.role}
                  </span>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                    {member.name}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">{member.bio}</p>
                  <div className="flex gap-4">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        className="flex items-center gap-2 bg-primary text-primary-foreground font-heading font-bold px-6 py-2.5 rounded-md hover:opacity-90 transition-opacity"
                      >
                        <LinkedinIcon /> LinkedIn
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-2 border-2 border-foreground text-foreground font-heading font-bold px-6 py-2.5 rounded-md hover:bg-foreground hover:text-primary-foreground transition-colors"
                      >
                        <Mail size={18} /> Email
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
