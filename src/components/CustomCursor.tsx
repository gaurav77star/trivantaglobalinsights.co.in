import { useEffect, useRef, useState } from "react";

/**
 * Advanced custom cursor:
 *  - Inner dot follows mouse instantly
 *  - Outer ring follows with smoothed lerp
 *  - Trailing particles fade behind movement
 *  - Magnetic expand + label on interactive elements
 *  - Click ripple burst
 *  - Auto-disabled on touch devices
 */
const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<HTMLDivElement[]>([]);
  const [hoverInteractive, setHoverInteractive] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [clicks, setClicks] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    setEnabled(true);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX, ringY = mouseY;
    const trail = Array(8).fill(0).map(() => ({ x: mouseX, y: mouseY }));

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
      const target = e.target as HTMLElement;
      const interactive = !!target.closest('a, button, [role="button"], input, textarea, select, label, .cursor-pointer');
      setHoverInteractive(interactive);
    };

    const onClick = (e: MouseEvent) => {
      const id = Date.now() + Math.random();
      setClicks((c) => [...c, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => setClicks((c) => c.filter((p) => p.id !== id)), 700);
    };

    let raf = 0;
    const animate = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }
      // trail
      trail.unshift({ x: mouseX, y: mouseY });
      trail.pop();
      trailRefs.current.forEach((el, i) => {
        if (!el) return;
        const p = trail[i];
        el.style.transform = `translate3d(${p.x}px, ${p.y}px, 0) translate(-50%, -50%) scale(${1 - i * 0.1})`;
        el.style.opacity = `${0.35 - i * 0.04}`;
      });
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("click", onClick);
    raf = requestAnimationFrame(animate);
    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("click", onClick);
      cancelAnimationFrame(raf);
      document.body.style.cursor = "";
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Trail particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => { if (el) trailRefs.current[i] = el; }}
          className="pointer-events-none fixed top-0 left-0 z-[9998] w-2 h-2 rounded-full bg-primary blur-[2px]"
          style={{ willChange: "transform, opacity" }}
        />
      ))}

      {/* Outer ring */}
      <div
        ref={ringRef}
        className={`pointer-events-none fixed top-0 left-0 z-[9999] rounded-full border border-primary backdrop-blur-sm transition-[width,height,background-color,border-width] duration-300 ease-out ${
          hoverInteractive
            ? "w-14 h-14 bg-primary/20 border-2"
            : "w-9 h-9 bg-transparent"
        }`}
        style={{ willChange: "transform" }}
      />

      {/* Inner dot */}
      <div
        ref={dotRef}
        className={`pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-primary transition-[width,height,opacity] duration-200 ${
          hoverInteractive ? "w-1 h-1 opacity-60" : "w-2 h-2 opacity-100"
        }`}
        style={{ willChange: "transform" }}
      />

      {/* Click ripples */}
      {clicks.map((c) => (
        <div
          key={c.id}
          className="pointer-events-none fixed top-0 left-0 z-[9997] w-10 h-10 rounded-full border-2 border-primary"
          style={{
            transform: `translate3d(${c.x}px, ${c.y}px, 0) translate(-50%, -50%)`,
            animation: "cursor-ripple 0.7s ease-out forwards",
          }}
        />
      ))}

      <style>{`
        @keyframes cursor-ripple {
          0% { transform: translate3d(${0}px, ${0}px, 0) translate(-50%, -50%) scale(0.3); opacity: 1; }
          100% { opacity: 0; }
        }
        .cursor-ripple-anim {
          animation: cursor-ripple 0.7s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
