import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * Hook that handles scrolling behavior on navigation:
 * - Scrolls to top immediately when navigating to a new page
 * - Then scrolls to hash anchor if present
 */
export function useScrollToHash() {
  const { pathname, hash } = useLocation();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    // If pathname changed, scroll to top immediately first
    if (prevPathname.current !== pathname) {
      // Use instant scroll and set it synchronously for mobile browsers
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0; // For Safari mobile
      prevPathname.current = pathname;
    }

    // Then handle hash scrolling
    if (hash) {
      const timeoutId = setTimeout(() => {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 50);
      return () => clearTimeout(timeoutId);
    }
  }, [pathname, hash]);
}
