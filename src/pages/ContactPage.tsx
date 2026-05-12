import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Clock, Globe, MessageSquare, Zap } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const highlights = [
  { icon: Clock, title: "Quick Response", desc: "We respond to every inquiry within 24 business hours." },
  { icon: Globe, title: "Global Coverage", desc: "Active fieldwork capabilities across 25+ countries." },
  { icon: MessageSquare, title: "Free Consultation", desc: "30-min discovery call to scope your research needs." },
  { icon: Zap, title: "Fast Turnaround", desc: "Typical project timelines from 2 weeks to 3 months." },
];

const faqs = [
  { q: "What types of projects do you take on?", a: "We work on everything from quick-turn brand health trackers to complex multi-country market entry studies. Our minimum engagement is typically 2 weeks, with no upper limit on scope or duration." },
  { q: "How quickly can you start a project?", a: "For most studies, we can kick off within 5-7 business days of contract signing. Urgent projects can be expedited — just let us know your deadline upfront." },
  { q: "Do you work with startups or only large enterprises?", a: "Both. We have flexible engagement models — from one-time research sprints for early-stage startups to long-term insights partnerships with global enterprises." },
  { q: "What industries do you specialize in?", a: "We cover 18+ sectors including BFSI, FMCG, healthcare, technology, retail, automotive, real estate, and more. See our Industries page for the full list." },
  { q: "How do you ensure data quality?", a: "Every project goes through multi-layer quality checks — sample validation, response screening, statistical outlier detection, and manual review by senior researchers before any insight is reported." },
  { q: "Can you sign NDAs and work confidentially?", a: "Absolutely. NDAs are standard for us, and all client data is handled under strict confidentiality protocols with secure storage and access controls." },
];

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-20 relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-1/2 w-72 h-72 rounded-full bg-primary blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary font-heading font-bold text-sm tracking-widest uppercase">Contact Us</span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground mt-3 mb-6">
              Get In Touch With Us
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-2xl">
              Have a project in mind? We'd love to hear from you. Reach out and let's discuss how we can help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <h.icon className="text-primary" size={22} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-1">{h.title}</h3>
                  <p className="text-muted-foreground text-sm">{h.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />

      {/* FAQ */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-primary font-heading font-bold text-sm tracking-widest uppercase">FAQs</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3">Frequently Asked Questions</h2>
            <p className="text-muted-foreground mt-4 text-lg">Quick answers to the questions we hear most often.</p>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border px-6">
                <AccordionTrigger className="font-heading text-left font-semibold text-foreground hover:text-primary text-base">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
