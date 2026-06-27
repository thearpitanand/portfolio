"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@thearpitanand/lib/utils";

interface MermaidProps {
  chart: string;
  className?: string;
}

export function Mermaid({ chart, className }: MermaidProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function render() {
      try {
        const mermaid = (await import("mermaid")).default;
        mermaid.initialize({
          startOnLoad: false,
          theme: "dark",
          securityLevel: "strict",
          fontFamily: "var(--font-inter), sans-serif",
        });

        const id = `mermaid-${Math.random().toString(36).slice(2)}`;
        const { svg } = await mermaid.render(id, chart);
        if (!cancelled && containerRef.current) {
          containerRef.current.innerHTML = svg;
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Failed to render diagram");
        }
      }
    }

    render();

    return () => {
      cancelled = true;
    };
  }, [chart]);

  if (error) {
    return (
      <pre className="overflow-x-auto rounded-md border border-red-500/30 bg-red-950/20 p-4 text-xs text-red-300">
        Mermaid render error: {error}
      </pre>
    );
  }

  return (
    <div
      ref={containerRef}
      className={cn("my-6 flex justify-center overflow-x-auto", className)}
      aria-label="Diagram"
    />
  );
}
