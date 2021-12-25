import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Defining a component for all pages 
// ScrollToTop automatically resets the window scroll position: to its origin

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
