"use client";
import { useEffect, useRef } from "react";

export default function FullPageScrollWrapper({ children }) {
  const containerRef = useRef(null);
  const sectionIndex = useRef(0);
  const isScrolling = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    const sections = container.querySelectorAll(".section");

    // Check if device is desktop (screen width >= 1024px)
    const isDesktop = () => window.innerWidth >= 1024;

    const scrollToSection = (index) => {
      const target = sections[index];
      if (target) {
        isScrolling.current = true;
        target.scrollIntoView({ behavior: "smooth" });
        
        // Reset scrolling flag after animation completes
        setTimeout(() => {
          isScrolling.current = false;
        }, 1000); // Increased timeout to ensure smooth scroll completes
      }
    };

    const handleWheel = (e) => {
      // Only apply full-page scroll on desktop screens
      if (!isDesktop()) return;
      
      e.preventDefault();
      
      if (isScrolling.current) return;

      const delta = e.deltaY;
      
      // Add threshold to prevent tiny scroll movements from triggering
      if (Math.abs(delta) < 10) return;
      
      const direction = delta > 0 ? 1 : -1;
      const newIndex = sectionIndex.current + direction;

      if (newIndex >= 0 && newIndex < sections.length) {
        sectionIndex.current = newIndex;
        scrollToSection(sectionIndex.current);
      }
    };

    // Add throttling to prevent rapid fire events
    let wheelTimeout;
    const throttledWheelHandler = (e) => {
      if (wheelTimeout) return;
      
      wheelTimeout = setTimeout(() => {
        wheelTimeout = null;
      }, 10); // 50ms throttle
      
      handleWheel(e);
    };

    // Handle window resize to re-evaluate desktop status
    const handleResize = () => {
      // Reset scroll position when switching between mobile/desktop
      if (!isDesktop()) {
        sectionIndex.current = 0;
        isScrolling.current = false;
      }
    };

    container.addEventListener("wheel", throttledWheelHandler, { passive: false });
    window.addEventListener("resize", handleResize);

    return () => {
      container.removeEventListener("wheel", throttledWheelHandler);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={containerRef} className="h-screen overflow-hidden lg:overflow-hidden overflow-y-auto">
      {children}
    </div>
  );
}