import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <img src={logo} alt="Trivanta Global Insights" width={48} height={48} className="w-12 h-12 object-contain" loading="lazy" />
              <div className="font-heading font-bold text-lg leading-tight">
                <span className="text-primary-foreground">TRIVANTA</span>
                <br />
                <span className="text-primary text-xs font-semibold tracking-widest">GLOBAL INSIGHTS</span>
              </div>
            </Link>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Transforming data into strategic decisions. Your trusted market research partner.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4 text-primary">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-primary-foreground/70 hover:text-primary transition-colors">Home</Link>
              <Link to="/about" className="text-primary-foreground/70 hover:text-primary transition-colors">About Us</Link>
              <Link to="/team" className="text-primary-foreground/70 hover:text-primary transition-colors">Our Team</Link>
              <Link to="/contact" className="text-primary-foreground/70 hover:text-primary transition-colors">Contact</Link>
            </nav>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4 text-primary">Services</h4>
            <nav className="flex flex-col gap-2">
              <span className="text-primary-foreground/70">Market Research</span>
              <span className="text-primary-foreground/70">Consumer Analytics</span>
              <span className="text-primary-foreground/70">Strategic Consulting</span>
              <span className="text-primary-foreground/70">Data Analytics</span>
            </nav>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4 text-primary">Connect With Us</h4>
            <div className="flex gap-4 mb-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
            <p className="text-primary-foreground/60 text-sm">info@trivantaglobal.com</p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Trivanta Global Insights. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
