import { motion } from "framer-motion";
import { Rocket, Eye } from "lucide-react";
import missionImg from "@/assets/mission-vision.jpg";

const MissionVision = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-heading font-bold text-sm tracking-widest uppercase">Our Purpose</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3">
            Mission & Vision
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10 items-center">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.04 }}
            className="relative bg-card rounded-2xl p-10 shadow-card overflow-hidden group cursor-pointer transition-all duration-500 hover:shadow-elevated"
          >
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary-foreground/20 flex items-center justify-center mb-6 transition-colors duration-500">
                <Rocket className="text-primary group-hover:text-primary-foreground transition-colors duration-500" size={32} />
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary-foreground mb-4 transition-colors duration-500">
                Our Mission
              </h3>
              <p className="text-muted-foreground group-hover:text-primary-foreground/85 text-lg leading-relaxed transition-colors duration-500">
                To empower businesses with precise, data-driven market research that unlocks growth opportunities,
                mitigates risks, and enables confident decision-making.
              </p>
            </div>
          </motion.div>

          {/* Center Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden lg:block"
          >
            <img src={missionImg} alt="Mission and Vision" width={1024} height={640} loading="lazy" className="rounded-2xl shadow-card w-full h-auto object-cover" />
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.04 }}
            className="relative bg-card rounded-2xl p-10 shadow-card overflow-hidden group cursor-pointer transition-all duration-500 hover:shadow-elevated"
          >
            <div className="absolute inset-0 bg-gradient-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-foreground/10 group-hover:bg-primary-foreground/20 flex items-center justify-center mb-6 transition-colors duration-500">
                <Eye className="text-foreground group-hover:text-primary transition-colors duration-500" size={32} />
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary-foreground mb-4 transition-colors duration-500">
                Our Vision
              </h3>
              <p className="text-muted-foreground group-hover:text-primary-foreground/85 text-lg leading-relaxed transition-colors duration-500">
                To become a globally recognized market research powerhouse — the go-to partner for organizations
                seeking transformative insights backed by intelligent data.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
