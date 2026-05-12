import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Search, BarChart3, Globe, Briefcase, Phone, FileText, Layers } from "lucide-react";
import servicesHero from "@/assets/services-hero.jpg";
const services = [
  {
    icon: Search,
    title: "Qualitative Research",
    desc: "We dive deep into the emotions, motivations, and behaviors that shape decisions. Through focus groups, in-depth interviews, and real-world ethnographic studies, we uncover the stories numbers alone can't tell.",
    items: ["Digital Ethnography", "Focus Group Discussions", "Shop-Along Explorations", "One-on-One Depth Interviews", "Discussion Boards", "Online Diaries & Journals"],
  },
  {
    icon: BarChart3,
    title: "Quantitative Research",
    desc: "We deliver structured, data-driven insights through surveys and analytics designed to capture measurable trends. From testing ideas to forecasting market shifts, our quantitative solutions provide the evidence you need.",
    items: ["Online Surveys", "Telephone Surveys", "Central Location Tests (CLTs)", "Face-to-Face Interviews"],
  },
  {
    icon: Globe,
    title: "Online Research",
    desc: "Our online research solutions help you tap into diverse audiences through custom panels, online communities, and mobile-optimized surveys for fast, scalable, and cost-efficient data collection.",
    items: ["Targeted Reach", "Faster Turnaround", "Reliable Data Quality", "Tailored Research Solutions"],
  },
  {
    icon: Briefcase,
    title: "Business Research",
    desc: "Our business research solutions uncover what fuels industries, shapes customer behavior, and defines competitive advantage — from market entry analysis to competitor tracking and customer loyalty studies.",
    items: ["B2B Intelligence", "Consumer Insights", "Competitive Benchmarking", "Trend Identification"],
  },
  {
    icon: Phone,
    title: "CAWI (Computer-Assisted Web Interviewing)",
    desc: "Our CAWI services leverage modern web-based survey platforms to reach respondents anywhere, anytime. Ideal for fast turnaround studies, large-scale online panels, and engaging digital-first audiences with interactive questionnaires.",
    items: ["Real-Time Data Capture", "Global Reach", "Rich Media Surveys", "Cost-Efficient Scale"],
  },
  {
    icon: Layers,
    title: "Other Services",
    desc: "We offer a range of complementary services to enhance your study's reach, relevance, and results. From custom-built surveys to expert data reporting — we craft research experiences around your business needs.",
    items: ["Branded Surveys", "Concept Testing", "Survey Programming", "Data Analysis & Reporting", "Translation & Localization", "Social Network Analysis"],
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-20 relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img src={servicesHero} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-foreground/75" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary font-heading font-bold text-sm tracking-widest uppercase">Our Services</span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground mt-3 mb-6">
              Discover What Drives Your Growth
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-2xl">
              We provide intelligent research solutions that empower businesses to move with clarity and confidence. From uncovering market opportunities to understanding customer behavior, we turn complex data into meaningful insights.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="space-y-16">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                    <service.icon className="text-primary" size={30} />
                  </div>
                  <h2 className="font-heading text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                  <p className="text-muted-foreground text-lg mb-6">{service.desc}</p>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="bg-card rounded-xl shadow-card p-8">
                    <h4 className="font-heading font-bold text-lg text-primary mb-4">Key Offerings</h4>
                    <ul className="space-y-3">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-foreground">
                          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
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

export default ServicesPage;
