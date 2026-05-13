import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Landmark, Factory, Car, Zap, ShoppingCart, HeartPulse, Building2, Film, Cpu, Plane, GraduationCap, Home, Sprout, Shirt, Utensils, Truck, Gamepad2, Megaphone } from "lucide-react";
import { Link } from "react-router-dom";
import industriesHero from "@/assets/industries-hero.jpg";

const industries = [
  { icon: Landmark, title: "Banking & Financial Technology", desc: "We help banks, NBFCs, and fintech startups decode customer expectations, map financial product journeys, and benchmark against emerging digital trends to stay ahead in a fast-evolving landscape." },
  { icon: Factory, title: "Industrial Operations & Manufacturing", desc: "From shop-floor insights to supply chain intelligence, we equip manufacturers with research that drives operational efficiency, product innovation, and smarter go-to-market decisions." },
  { icon: Car, title: "Transportation & Connected Vehicles", desc: "Our research powers smarter mobility — helping automotive and logistics brands understand rider behavior, EV adoption patterns, and next-gen connectivity expectations." },
  { icon: Zap, title: "Sustainable Energy & Resources", desc: "We partner with energy companies to study consumer attitudes toward sustainability, evaluate renewable adoption readiness, and forecast demand shifts across traditional and clean energy markets." },
  { icon: ShoppingCart, title: "Commerce & Digital Retail", desc: "Whether it's e-commerce, quick commerce, or brick-and-mortar — we uncover what shoppers want, how they buy, and what keeps them coming back through shopper behavior and category research." },
  { icon: HeartPulse, title: "Medical Technology & Insurance", desc: "We support pharma, medtech, and insurance firms with patient journey mapping, HCP perception studies, claims experience audits, and health policy research that informs better outcomes." },
  { icon: Building2, title: "Government & Civic Innovation", desc: "Our public sector research helps government bodies and NGOs measure citizen satisfaction, evaluate program effectiveness, and design policy with real community feedback." },
  { icon: Film, title: "Content Creation & Digital Entertainment", desc: "We help media houses, OTT platforms, and content creators understand audience preferences, consumption habits, and engagement patterns to build content strategies that resonate." },
  { icon: Cpu, title: "Tech Innovation & Electronics", desc: "From SaaS platforms to consumer electronics, we deliver user experience research, feature prioritization studies, and competitive intelligence that fuels product-market fit." },
  { icon: Plane, title: "Hospitality & Travel Experiences", desc: "We bring traveler insights to hotels, airlines, and tourism boards — studying booking behaviors, loyalty drivers, and experience expectations to elevate hospitality standards." },
  { icon: GraduationCap, title: "Learning Solutions & EdTech", desc: "Our research helps EdTech companies and institutions understand learner needs, evaluate platform UX, and measure the effectiveness of digital learning tools across demographics." },
  { icon: Home, title: "Real Estate & PropTech", desc: "We help developers, brokers, and PropTech platforms understand buyer intent, rental behavior, and neighborhood preferences — turning property decisions into data-backed strategies." },
  { icon: Sprout, title: "Agriculture & AgriTech", desc: "From farmer adoption studies to supply chain mapping, we deliver insights that help agribusinesses, input providers, and AgriTech startups grow sustainably across rural India and beyond." },
  { icon: Shirt, title: "Fashion, Beauty & Lifestyle", desc: "We decode evolving style preferences, brand affinities, and purchase triggers — helping apparel, cosmetics, and lifestyle brands stay culturally relevant and commercially sharp." },
  { icon: Utensils, title: "Food, Beverage & FMCG", desc: "We track consumption habits, taste preferences, and shelf behavior to help FMCG and F&B brands launch winning products and refine their distribution playbooks." },
  { icon: Truck, title: "Logistics & Supply Chain", desc: "Our research uncovers operational pain points, last-mile expectations, and B2B buyer journeys — empowering logistics providers to deliver faster, smarter, and more reliably." },
  { icon: Gamepad2, title: "Gaming & Esports", desc: "We study player motivations, monetization triggers, and community dynamics to help gaming studios, publishers, and esports brands build engaging experiences that scale." },
  { icon: Megaphone, title: "Advertising, Media & Brand Strategy", desc: "From ad concept testing to brand health tracking, we equip agencies and brand teams with insights that sharpen creative, messaging, and media investment decisions." },
];

const IndustriesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20 relative overflow-hidden min-h-[60vh] flex items-center bg-gradient-to-br from-foreground via-foreground to-foreground/90">
        <div className="absolute inset-0">
          <img src={industriesHero} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-foreground/75" />
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
