import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const AnimatedCounter = ({ value, suffix = "", prefix = "", duration = 1.6, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const numeric = parseFloat(String(value).replace(/[^0-9.]/g, "")) || 0;
    const isFloat = String(value).includes(".");
    let raf;
    const start = performance.now();

    const tick = (now) => {
      const elapsed = (now - start) / 1000;
      const t = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = numeric * eased;
      setDisplay(isFloat ? parseFloat(current.toFixed(1)) : Math.floor(current));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
