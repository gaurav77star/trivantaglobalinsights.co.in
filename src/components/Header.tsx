import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "@/assets/logo.png";

const servicesDropdown = [
  { label: "Qualitative Research", path: "/services#qualitative" },
  { label: "Quantitative Research", path: "/services#quantitative" },
  { label: "Online Research", path: "/services#online" },
  { label: "Business Research", path: "/services#business" },
  { label: "CATI Services", path: "/services#cati" },
  { label: "Other Services", path: "/services#other" },
];

const industriesDropdown = [
  { label: "Banking & FinTech", path: "/industries" },
  { label: "Manufacturing", path: "/industries" },
  { label: "Transportation", path: "/industries" },
  { label: "Energy & Resources", path: "/industries" },
  { label: "Retail & Commerce", path: "/industries" },
  { label: "Healthcare", path: "/industries" },
  { label: "Technology", path: "/industries" },
  { label: "View All Industries", path: "/industries" },
];

const careersDropdown = [
  { label: "Research Analyst", path: "/careers" },
  { label: "Business Development", path: "/careers" },
  { label: "Project Manager", path: "/careers" },
  { label: "Data Analyst", path: "/careers" },
  { label: "View All Positions", path: "/careers" },
];

interface DropdownItem {
  label: string;
  path: string;
}

const NavDropdown = ({ label, items, isActive }: { label: string; items: DropdownItem[]; isActive: boolean }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        onClick={() => setOpen(!open)}
        className={`nav-3d font-heading font-semibold text-lg tracking-wide transition-colors duration-200 hover:text-primary flex items-center gap-1 ${
          isActive ? "text-primary" : "text-foreground"
        }`}
      >
        <span className="nav-3d-inner">{label}</span>
        <ChevronDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -6 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -6 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full left-0 mt-1 w-56 bg-background border border-border rounded-xl shadow-elevated z-50 overflow-hidden origin-top"
          >
            <div className="py-2">
              {items.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2.5 font-body text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleMobileDropdown = (name: string) => {
    setMobileDropdown(mobileDropdown === name ? null : name);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Trivanta Global Insights" width={48} height={48} className="w-12 h-12 object-contain" />
          <div className="font-heading font-bold text-xl leading-tight">
            <span className="text-foreground">TRIVANTA</span>
            <br />
            <span className="text-primary text-sm font-semibold tracking-widest">GLOBAL INSIGHTS</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-4 lg:gap-5">
          <Link
            to="/"
            className={`nav-3d font-heading font-semibold text-lg tracking-wide transition-colors duration-200 hover:text-primary ${
              location.pathname === "/" ? "text-primary" : "text-foreground"
            }`}
          >
            <span className="nav-3d-inner">Home</span>
          </Link>
          <NavDropdown label="Services" items={servicesDropdown} isActive={location.pathname === "/services"} />
          <NavDropdown label="Industries" items={industriesDropdown} isActive={location.pathname === "/industries"} />
          <Link
            to="/about"
            className={`nav-3d font-heading font-semibold text-lg tracking-wide transition-colors duration-200 hover:text-primary ${
              location.pathname === "/about" ? "text-primary" : "text-foreground"
            }`}
          >
            <span className="nav-3d-inner">About Us</span>
          </Link>
          <NavDropdown label="Careers" items={careersDropdown} isActive={location.pathname === "/careers"} />
          <Link
            to="/contact"
            className={`nav-3d font-heading font-semibold text-lg tracking-wide transition-colors duration-200 hover:text-primary ${
              location.pathname === "/contact" ? "text-primary" : "text-foreground"
            }`}
          >
            <span className="nav-3d-inner">Contact</span>
          </Link>
          <Link
            to="/contact"
            className="btn-modern text-primary-foreground font-heading font-bold px-6 py-2.5 rounded-md tracking-wide ml-2"
          >
            Get In Touch
          </Link>
        </nav>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="flex flex-col py-4 px-4 gap-2">
            <Link to="/" onClick={() => setMobileOpen(false)} className={`font-heading font-semibold text-lg py-2 ${location.pathname === "/" ? "text-primary" : "text-foreground"}`}>
              Home
            </Link>

            {/* Services Mobile Dropdown */}
            <button onClick={() => toggleMobileDropdown("services")} className="font-heading font-semibold text-lg py-2 flex items-center justify-between text-foreground">
              Services <ChevronDown size={16} className={`transition-transform ${mobileDropdown === "services" ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence initial={false}>
              {mobileDropdown === "services" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pl-4 space-y-1 pb-2">
                    {servicesDropdown.map((item) => (
                      <Link key={item.label} to={item.path} onClick={() => setMobileOpen(false)} className="block py-1.5 text-muted-foreground hover:text-primary text-sm">{item.label}</Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Industries Mobile Dropdown */}
            <button onClick={() => toggleMobileDropdown("industries")} className="font-heading font-semibold text-lg py-2 flex items-center justify-between text-foreground">
              Industries <ChevronDown size={16} className={`transition-transform ${mobileDropdown === "industries" ? "rotate-180" : ""}`} />
            </button>
            {mobileDropdown === "industries" && (
              <div className="pl-4 space-y-1">
                {industriesDropdown.map((item) => (
                  <Link key={item.label} to={item.path} onClick={() => setMobileOpen(false)} className="block py-1.5 text-muted-foreground hover:text-primary text-sm">{item.label}</Link>
                ))}
              </div>
            )}

            <Link to="/about" onClick={() => setMobileOpen(false)} className={`font-heading font-semibold text-lg py-2 ${location.pathname === "/about" ? "text-primary" : "text-foreground"}`}>
              About Us
            </Link>

            {/* Careers Mobile Dropdown */}
            <button onClick={() => toggleMobileDropdown("careers")} className="font-heading font-semibold text-lg py-2 flex items-center justify-between text-foreground">
              Careers <ChevronDown size={16} className={`transition-transform ${mobileDropdown === "careers" ? "rotate-180" : ""}`} />
            </button>
            {mobileDropdown === "careers" && (
              <div className="pl-4 space-y-1">
                {careersDropdown.map((item) => (
                  <Link key={item.label} to={item.path} onClick={() => setMobileOpen(false)} className="block py-1.5 text-muted-foreground hover:text-primary text-sm">{item.label}</Link>
                ))}
              </div>
            )}

            <Link to="/contact" onClick={() => setMobileOpen(false)} className={`font-heading font-semibold text-lg py-2 ${location.pathname === "/contact" ? "text-primary" : "text-foreground"}`}>
              Contact
            </Link>

            <Link to="/contact" onClick={() => setMobileOpen(false)} className="bg-primary text-primary-foreground font-heading font-bold px-6 py-2.5 rounded-md text-center mt-2">
              Get In Touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
