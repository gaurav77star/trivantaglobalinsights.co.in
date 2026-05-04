import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, MapPin, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you shortly." });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-heading font-bold text-sm tracking-widest uppercase">Contact Us</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Ready to transform your business with data-driven insights? Reach out to us today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary" size={22} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg text-foreground">Phone</h4>
                  <p className="text-muted-foreground">+91 91493 04139</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary" size={22} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg text-foreground">Email</h4>
                  <p className="text-muted-foreground">info@trivantaglobal.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary" size={22} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg text-foreground">Location</h4>
                  <p className="text-muted-foreground">India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl shadow-card p-8 space-y-5"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              maxLength={100}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-md border border-border bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              maxLength={255}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-md border border-border bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              maxLength={20}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-md border border-border bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              placeholder="Your Message"
              required
              maxLength={1000}
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-md border border-border bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground font-heading font-bold py-3.5 rounded-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-lg"
            >
              Send Message <Send size={18} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
