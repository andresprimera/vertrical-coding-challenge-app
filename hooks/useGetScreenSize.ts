import { useEffect, useState } from "react";

export const useGetScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
  });

  const [headerHeight, setHeaderHeight] = useState(80);

  useEffect(() => {
    function resize() {
      const width = window.innerWidth;
      const height = window.innerHeight;

      if (width <= 600) {
        setHeaderHeight(100);
      } else {
        setHeaderHeight(80);
      }

      setScreenSize({
        width,
        height,
      });
    }

    if (typeof window !== "undefined") {
      resize();
    }
    // Add event listener
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);
  return { screenSize, headerHeight };
};
