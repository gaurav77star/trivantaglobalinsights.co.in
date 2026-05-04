import { motion } from "framer-motion";
import officeImg from "@/assets/market-research-office.jpg";
import clientImg from "@/assets/client-meeting.jpg";
import analyticsImg from "@/assets/data-analytics.jpg";

const showcaseItems = [
  {
    image: officeImg,
    title: "Collaborative Research Sessions",
    desc: "Our expert analysts dive deep into market trends, consumer patterns, and competitive landscapes to uncover insights that power your strategic decisions.",
  },
  {
    image: clientImg,
    title: "Client-First Partnerships",
    desc: "We work hand-in-hand with our clients, ensuring every research deliverable is aligned with their unique business goals and growth trajectory.",
  },
  {
    image: analyticsImg,
    title: "Advanced Data Analytics",
    desc: "Leveraging cutting-edge tools and methodologies, we transform raw data into clear, actionable intelligence that drives measurable results.",
  },
];

const WorkShowcase = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-heading font-bold text-sm tracking-widest uppercase">How We Work</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Driving Insights, Delivering Impact
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From boardrooms to data labs, here's a glimpse into how Trivanta Global Insights creates value for our clients.
          </p>
        </motion.div>

        <div className="space-y-20">
          {showcaseItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "" : ""}`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="overflow-hidden rounded-xl shadow-card">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    width={1024}
                    height={640}
                    className="w-full h-72 md:h-96 object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">{item.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkShowcase;
