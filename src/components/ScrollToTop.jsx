import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  // Scroll to top when pathname changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  // Optional: Scroll to top on internal anchor link click
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest("a");
      if (target && target.getAttribute("href")?.startsWith("/")) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return null;
};

export default ScrollToTop;
