import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop =() => {
  const { pathname } = useLocation();
  const oldPage = useRef(pathname);

  useEffect(() => {
    if (pathname !== oldPage.current) {
      try {
        window.scrollTo({
          top: 0,
          left: 0,
        });
      } catch (error) {
        //for old browsers
        window.scrollTo(0, 0);
      }

      oldPage.current = pathname;
    }
  }, [pathname]);
}

export default ScrollToTop;