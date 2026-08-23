import { useEffect, useRef, useState } from "react";

export default function Counter({ value, suffix = "", duration = 1500 }) {
    const ref = useRef(null);
    const [display, setDisplay] = useState(0);
    const started = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting || started.current) return;
                started.current = true;

                const start = performance.now();
                const tick = (now) => {
                    const progress = Math.min((now - start) / duration, 1);
                    setDisplay(Math.round(value * (1 - Math.pow(1 - progress, 3))));
                    if (progress < 1) requestAnimationFrame(tick);
                };
                requestAnimationFrame(tick);
            },
            { threshold: 0.5 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [value, duration]);

    return (
        <span ref={ref} className="font-mono text-3xl md:text-4xl font-semibold text-accent">
            {display}
            {suffix}
        </span>
    );
}
