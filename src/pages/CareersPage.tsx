import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { MapPin, Clock, Briefcase, ArrowRight, TrendingUp, Heart, GraduationCap, Globe, FileText, Users, Phone, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import careersHero from "@/assets/careers-hero.jpg";

const benefits = [
  { icon: TrendingUp, title: "Growth & Learning", desc: "Annual training budget, certifications sponsored, and mentorship from senior researchers." },
  { icon: Heart, title: "Wellness First", desc: "Comprehensive health coverage, mental wellness support, and flexible time-off policies." },
  { icon: Globe, title: "Remote Flexibility", desc: "Work from anywhere in India with quarterly in-person meetups and team retreats." },
  { icon: GraduationCap, title: "Skill Development", desc: "Access to premium research tools, industry conferences, and cross-functional projects." },
];

const hiringSteps = [
  { icon: FileText, title: "Apply", desc: "Submit your resume and a short note on why you're excited about the role." },
  { icon: Phone, title: "Initial Chat", desc: "A 30-min conversation with our hiring team to understand your background and aspirations." },
  { icon: Users, title: "Skills Round", desc: "A practical assessment or case study tailored to the role you're applying for." },
  { icon: CheckCircle2, title: "Final Interview", desc: "Meet the leadership team, discuss your fit, and get an offer within a week." },
];

const vacancies = [
  { title: "Research Analyst", location: "Remote / India", type: "Full-Time", dept: "Research", desc: "Assist in designing and executing quantitative and qualitative research projects. Analyze data and prepare client-ready reports." },
  { title: "Business Development Executive", location: "Remote / India", type: "Full-Time", dept: "Sales", desc: "Identify new business opportunities, build client relationships, and drive revenue growth across domestic and international markets." },
  { title: "Project Manager", location: "Remote / India", type: "Full-Time", dept: "Operations", desc: "Manage end-to-end research projects, coordinate with teams and clients, and ensure timely delivery with quality standards." },
  { title: "Data Analyst", location: "Remote / India", type: "Full-Time", dept: "Analytics", desc: "Transform raw data into actionable insights using statistical tools. Support research teams with data processing and visualization." },
  { title: "Survey Programmer", location: "Remote / India", type: "Full-Time", dept: "Technical", desc: "Program and test online surveys across multiple platforms. Ensure survey logic, routing, and data quality meet project requirements." },
  { title: "Content & Communications Specialist", location: "Remote / India", type: "Full-Time", dept: "Marketing", desc: "Create compelling content for proposals, reports, and marketing materials. Manage brand communications and social media presence." },
];

const CareersPage = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20 relative overflow-hidden min-h-[60vh] flex items-center bg-gradient-to-br from-foreground via-foreground to-foreground/90">
        <div className="absolute inset-0">
          <img src={careersHero} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-foreground/75" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary font-heading font-bold text-sm tracking-widest uppercase">Careers</span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground mt-3 mb-6">
              Join Our Team
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-2xl">
              Be part of a team that turns data into direction. We're always looking for curious minds and passionate professionals to help shape the future of market research.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-heading font-bold text-sm tracking-widest uppercase">Open Positions</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3">Current Vacancies</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mt-4 text-lg">Each role is a single vacancy. Apply now to be part of Trivanta Global Insights.</p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {vacancies.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-xl shadow-card p-8 hover-lift group"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <span className="text-xs font-heading font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">{v.dept}</span>
                    <h3 className="font-heading text-2xl font-bold text-foreground mt-3 mb-2">{v.title}</h3>
                    <p className="text-muted-foreground mb-3">{v.desc}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><MapPin size={14} className="text-primary" />{v.location}</span>
                      <span className="flex items-center gap-1"><Clock size={14} className="text-primary" />{v.type}</span>
                      <span className="flex items-center gap-1"><Briefcase size={14} className="text-primary" />1 Vacancy</span>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading font-bold px-6 py-3 rounded-md hover:opacity-90 transition-opacity whitespace-nowrap"
                  >
                    Apply Now <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-14">
            <span className="text-primary font-heading font-bold text-sm tracking-widest uppercase">Why Join Us</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3">Benefits & Perks</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mt-4 text-lg">We invest in our people because great research starts with great teams.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl shadow-card p-6 hover-lift text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <b.icon className="text-primary" size={26} />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-14">
            <span className="text-primary font-heading font-bold text-sm tracking-widest uppercase">Our Process</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3">How We Hire</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mt-4 text-lg">A respectful, transparent process — from application to offer in 2-3 weeks.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {hiringSteps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-secondary rounded-xl p-6 hover-lift"
              >
                <span className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-primary text-primary-foreground font-heading font-bold flex items-center justify-center text-lg">{i + 1}</span>
                <s.icon className="text-primary mb-4 mt-2" size={24} />
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareersPage;
