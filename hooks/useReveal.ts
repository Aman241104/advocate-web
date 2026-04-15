"use client";

import { useEffect, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RevealOptions {
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  stagger?: number;
  threshold?: number;
}

export function useReveal(
  elementRef: RefObject<HTMLElement | null>,
  options: RevealOptions = {}
) {
  const {
    direction = "up",
    delay = 0,
    duration = 1.2,
    stagger = 0,
    threshold = -0.1,
  } = options;

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const offset = 50;
    const x = direction === "left" ? offset : direction === "right" ? -offset : 0;
    const y = direction === "up" ? offset : direction === "down" ? -offset : 0;

    const ctx = gsap.context(() => {
      // If the element has children and stagger is set, animate children
      const targets = stagger > 0 && el.children.length > 0 ? Array.from(el.children) : el;

      gsap.fromTo(
        targets,
        {
          opacity: 0,
          x,
          y,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration,
          delay,
          stagger: stagger > 0 ? stagger : undefined,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: `top ${100 - threshold * 100}%`,
            toggleActions: "play none none none", // Only play once for professional stability
          },
        }
      );
    });

    return () => ctx.revert();
  }, [elementRef, direction, delay, duration, stagger, threshold]);
}
