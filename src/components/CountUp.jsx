import { useState, useEffect, useRef } from 'react';

export default function CountUp({ value, duration = 1800, startOnMount = false }) {
  const str = String(value);
  const match = str.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);

  const hasNumber = Boolean(match);
  const prefix = match ? match[1] : '';
  const target = match ? parseFloat(match[2]) : 0;
  const suffix = match ? match[3] : str;
  const isDecimal = match ? match[2].includes('.') : false;

  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(startOnMount);
  const ref = useRef(null);
  const completedRef = useRef(false);

  useEffect(() => {
    completedRef.current = false;
    setCount(0);

    if (startOnMount) {
      setStarted(true);
      return;
    }

    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [startOnMount, str]);

  useEffect(() => {
    if (!started || !hasNumber || completedRef.current) return;

    let rafId;
    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      setCount(isDecimal ? Number(current.toFixed(1)) : Math.round(current));

      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        completedRef.current = true;
        setCount(target);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [started, hasNumber, target, duration, isDecimal]);

  if (!hasNumber) return <span>{value}</span>;

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
