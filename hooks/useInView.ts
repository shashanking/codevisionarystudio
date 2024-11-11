import { useEffect, useRef } from "react";

/**
 * The `useInView` function in TypeScript is a custom hook that triggers a callback when a specified
 * element comes into view.
 * @param {any} elementRef - The `elementRef` parameter is a reference to the DOM element that you want
 * to observe for visibility changes using the Intersection Observer API.
 * @param {any} callBack - The `callBack` parameter in the `useInView` function is a function that will
 * be called when the observed element comes into view (i.e., when it intersects with the viewport).
 * This function is typically used to perform some action or trigger some behavior when the element
 * becomes visible on the screen.
 * @param option - The `option` parameter in the `useInView` function is an optional object that allows
 * you to configure the behavior of the `IntersectionObserver`. It can include properties such as
 * `root`, `rootMargin`, and `threshold`. These properties define the root element to use for
 * intersection checking, the margin
 */
export const useInView = (elementRef: any, callBack: any, option = {}) => {
  const hasRunRef = useRef(false);
  useEffect(() => {
    if (!elementRef.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasRunRef.current) {
        callBack();
        hasRunRef.current = true;
      }
    }, option);

    observer.observe(elementRef.current);

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [elementRef, callBack, option]);
};
