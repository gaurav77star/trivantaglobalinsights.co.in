import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";
import { teamMembers } from "@/data/teamData";

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
  </svg>
);

const TeamCarousel = () => {
  return (
    <section className="section-padding bg-background">
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

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group"
            >
              <Link to={`/team#${member.id}`} className="block">
                <div className="relative overflow-hidden rounded-xl shadow-card hover-lift">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    width={512}
                    height={640}
                    className="w-full h-80 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-heading text-2xl font-bold text-primary-foreground">{member.name}</h3>
                    <p className="text-primary font-heading font-semibold text-lg">{member.role}</p>
                    <div className="flex gap-3 mt-3">
                      {member.linkedin && (
                        <span className="text-primary-foreground/70 hover:text-primary transition-colors">
                          <LinkedinIcon />
                        </span>
                      )}
                      {member.email && (
                        <span className="text-primary-foreground/70 hover:text-primary transition-colors">
                          <Mail size={20} />
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/team"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading font-bold px-8 py-3.5 rounded-md hover:opacity-90 transition-opacity text-lg"
          >
            View Full Team <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamCarousel;
