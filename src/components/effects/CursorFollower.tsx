"use client";

import { useState, useEffect, useRef } from "react";

export function CursorFollower() {
  const [position, setPosition] = useState({ x: -1000, y: -1000 });
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Coalesce updates to one per animation frame so the gradient stays
      // smooth without triggering a React render on every pixel of movement.
      if (frameRef.current !== null) return;

      const { clientX, clientY } = event;
      frameRef.current = requestAnimationFrame(() => {
        setPosition({ x: clientX, y: clientY });
        frameRef.current = null;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Clean up the event listener and any pending frame on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300"
      style={{
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.08), transparent 80%)`,
        // Using inline style for dynamic gradient positioning based on mouse coordinates
      }}
    />
  );
}
