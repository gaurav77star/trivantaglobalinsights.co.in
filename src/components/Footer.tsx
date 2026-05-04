import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const SocialIcon = ({ d, label, href }: { d: string; label: string; href?: string }) => (
  <a href={href || "#"} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors" aria-label={label}>
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d={d} /></svg>
  </a>
);

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
              <Link to="/services" className="text-primary-foreground/70 hover:text-primary transition-colors">Services</Link>
              <Link to="/industries" className="text-primary-foreground/70 hover:text-primary transition-colors">Industries</Link>
              <Link to="/about" className="text-primary-foreground/70 hover:text-primary transition-colors">About Us</Link>
              
              <Link to="/careers" className="text-primary-foreground/70 hover:text-primary transition-colors">Careers</Link>
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
              <SocialIcon label="Facebook" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              <SocialIcon label="Twitter" d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              <SocialIcon label="LinkedIn" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" href="https://www.linkedin.com/company/trivanta-global-insights/" />
              <SocialIcon label="Instagram" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2zm-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
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
