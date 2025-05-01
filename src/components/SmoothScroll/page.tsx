"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SCROLL_CONFIG } from "@/config/scroll-config";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const smoother = useRef<ScrollSmoother | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

    smoother.current = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: SCROLL_CONFIG.speed,
      effects: true,
      normalizeScroll: SCROLL_CONFIG.normalizeWheel,
      ignoreMobileResize: true,
      smoothTouch: SCROLL_CONFIG.mobile.enabled,
    });

    return () => {
      smoother.current?.kill();
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}