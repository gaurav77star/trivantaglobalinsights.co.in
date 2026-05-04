import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Landmark, Factory, Car, Zap, ShoppingCart, HeartPulse, Building2, Film, Cpu, Plane, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const industries = [
  { icon: Landmark, title: "Banking & Financial Technology", desc: "Transform your financial operations with cutting-edge solutions that prioritize security, compliance, and customer satisfaction." },
  { icon: Factory, title: "Industrial Operations & Manufacturing", desc: "Revolutionize your production capabilities through smart automation, predictive analytics, and lean operational strategies." },
  { icon: Car, title: "Transportation & Connected Vehicles", desc: "Navigate the future of transportation with expertise in electric vehicles, smart connectivity, and autonomous systems." },
  { icon: Zap, title: "Sustainable Energy & Resources", desc: "Accelerate your transition to sustainable energy solutions with advanced grid management, renewable integration, and resource optimization." },
  { icon: ShoppingCart, title: "Commerce & Digital Retail", desc: "Create exceptional shopping experiences across all channels with personalized customer journeys and dynamic pricing strategies." },
  { icon: HeartPulse, title: "Medical Technology & Insurance", desc: "Modernize patient care and insurance operations through digital health platforms, claims automation, and regulatory compliance." },
  { icon: Building2, title: "Government & Civic Innovation", desc: "Enhance citizen services with transparent, accessible digital platforms that improve government efficiency and public engagement." },
  { icon: Film, title: "Content Creation & Digital Entertainment", desc: "Amplify your content reach and audience engagement through advanced analytics, content optimization, and multi-platform distribution." },
  { icon: Cpu, title: "Tech Innovation & Electronics", desc: "Accelerate product development and market penetration with agile methodologies, user-centered design, and scalable architecture." },
  { icon: Plane, title: "Hospitality & Travel Experiences", desc: "Enhance traveler experiences with seamless booking systems, personalized recommendations, and integrated service platforms." },
  { icon: GraduationCap, title: "Learning Solutions & EdTech", desc: "Transform learning experiences with adaptive technologies, student engagement platforms, and data-driven insights that personalize education." },
];

const IndustriesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20 bg-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-1/2 w-72 h-72 rounded-full bg-primary blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary font-heading font-bold text-sm tracking-widest uppercase">Industries</span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground mt-3 mb-6">
              Sector Insights
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-2xl">
              From healthcare to finance, technology to retail — Trivanta delivers customized research solutions designed to meet the distinct needs of every industry we serve.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-heading font-bold text-sm tracking-widest uppercase">Industries We Serve</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3">Tailored Research for Every Sector</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-card rounded-xl shadow-card p-8 hover-lift group"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <ind.icon className="text-primary" size={26} />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">{ind.title}</h3>
                <p className="text-muted-foreground">{ind.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-primary/5 border border-primary/20 rounded-xl p-10 text-center"
          >
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Exploring New Opportunities?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Every industry presents unique challenges that require specialized expertise. We thrive on tackling complex problems with innovative solutions. If your sector isn't mentioned above, let's discuss how we can create value together.
            </p>
            <Link to="/contact" className="inline-flex bg-primary text-primary-foreground font-heading font-bold px-8 py-3.5 rounded-md hover:opacity-90 transition-opacity text-lg">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndustriesPage;
