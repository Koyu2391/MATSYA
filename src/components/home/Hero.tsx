import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const Hero = () => {
  const lightRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(!prefersReducedMotion());
  }, []);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enabled || !lightRef.current) return;
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    lightRef.current.style.transform = `translate(${x - 150}px, ${y - 150}px)`;
  };

  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4 pt-16 pb-20 md:pt-24 md:pb-28" onMouseMove={onMove}>
        {/* Ambient light */}
        {enabled && (
          <div
            ref={lightRef}
            aria-hidden
            className="pointer-events-none absolute top-0 left-0 h-[300px] w-[300px] rounded-full blur-3xl opacity-30"
            style={{
              background: "radial-gradient(closest-side, hsl(var(--accent) / 0.6), transparent 70%)",
              willChange: "transform",
              transition: "transform 100ms linear",
            }}
          />
        )}

        <div className="mx-auto max-w-3xl text-center animate-enter">
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
            <span className="gradient-text">MATSYA AI</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            AI-powered Transcription, Translation & Summarization
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <NavLink to="/auth">Get Started</NavLink>
            </Button>
            <Button variant="soft" size="lg" asChild>
              <NavLink to="/archive">View Archive</NavLink>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;