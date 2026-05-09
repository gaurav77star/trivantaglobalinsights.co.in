const items = [
  "Market Research",
  "Consumer Insights",
  "Data Analytics",
  "Strategic Intelligence",
  "Brand Studies",
  "Industry Reports",
  "B2B Research",
  "Global Reach",
];

const Marquee = () => {
  return (
    <div className="relative overflow-hidden border-y border-border bg-foreground py-6 group">
      <div className="flex whitespace-nowrap animate-marquee gap-12">
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-12 shrink-0">
            <span className="font-heading font-bold text-3xl md:text-4xl uppercase tracking-wider text-primary-foreground/20 hover:text-primary transition-colors duration-300">
              {item}
            </span>
            <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
