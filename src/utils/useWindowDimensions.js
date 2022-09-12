import { useState, useEffect } from "react";

export const mobileWidth = 400;
export const smallWidth = 640;
export const mediumWidth = 768;
export const largeWidth = 1024;

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  const isMobile = width <= mobileWidth;
  return { width, height, isMobile };
};

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
    isMobile: true,
  });

  useEffect(() => {
    if (!windowDimensions.width) {
      setWindowDimensions(getWindowDimensions());
    }

    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowDimensions.width]);

  return windowDimensions;
}
