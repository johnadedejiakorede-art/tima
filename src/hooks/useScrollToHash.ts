import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Hook that handles scrolling to hash anchors on navigation
 * and scrolls to top when navigating to a new page without hash
 */
export function useScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small delay to ensure the DOM is ready
      const timeoutId = setTimeout(() => {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
      return () => clearTimeout(timeoutId);
    } else {
      // Scroll to top when navigating to a page without hash
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);
}
