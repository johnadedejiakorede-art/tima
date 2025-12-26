import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Component that scrolls to top on every route change.
 * Uses useLayoutEffect to scroll before the browser paints.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    // Always scroll to top first on pathname change
    if (!hash) {
      // Force scroll reset using multiple methods for cross-browser compatibility
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // Also try scrolling the main content container if it exists
      const main = document.querySelector('main');
      if (main) {
        main.scrollTop = 0;
      }
    }
  }, [pathname, hash]);

  useLayoutEffect(() => {
    // Handle hash scrolling after a short delay
    if (hash) {
      // First reset to top
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // Then scroll to the element
      const timeoutId = setTimeout(() => {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [hash, pathname]);

  return null;
};

export default ScrollToTop;
