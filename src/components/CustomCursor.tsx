import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hoverInteractive, setHoverInteractive] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    const isTouch = window.matchMedia("(hover: none)").matches;
    if (isTouch) return;
    setEnabled(true);

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

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

    const animate = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    const raf = requestAnimationFrame(animate);

    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      document.body.style.cursor = "";
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ringRef}
        className={`pointer-events-none fixed top-0 left-0 z-[9999] rounded-full border-2 border-primary transition-[width,height,background-color,opacity] duration-200 ease-out mix-blend-difference ${
          hoverInteractive ? "w-12 h-12 bg-primary/20" : "w-9 h-9 bg-transparent"
        }`}
        style={{ willChange: "transform" }}
      />
      <div
        ref={dotRef}
        className={`pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-primary mix-blend-difference transition-[width,height,opacity] duration-150 ${
          hoverInteractive ? "w-0 h-0 opacity-0" : "w-2 h-2 opacity-100"
        }`}
        style={{ willChange: "transform" }}
      />
    </>
  );
};

export default CustomCursor;
