import { useState, useEffect } from "react";

export default function useIntersectionObserver(elementRef, deps = []) {
  const [isVisible, setIsVisible] = useState(false);

  const visibleHandler = async (entries) => {
    const [firstEntry] = entries;
    const isIntersecting = firstEntry.isIntersecting;
    setIsVisible(isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(visibleHandler);
    if (elementRef.current) observer.observe(elementRef.current);
    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, [elementRef.current, ...deps]);

  return isVisible;
}
