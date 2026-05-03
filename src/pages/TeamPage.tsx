import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { teamMembers } from "@/data/teamData";

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
  </svg>
);

const TeamPage = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20 bg-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-primary blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary font-heading font-bold text-sm tracking-widest uppercase">Our Team</span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground mt-3 mb-6">
              The People Behind Trivanta
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-2xl">
              Meet our dedicated leadership team driving innovation and excellence in market research.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto">
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

export default TeamPage;
