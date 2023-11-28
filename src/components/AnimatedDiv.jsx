import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedDiv = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5, // Set duration for the animation
          ease: "easeInOut", // Use 'easeInOut' easing
        },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 100, opacity: 0 }}
      animate={controls}
      style={{
        width: "100%",
        overflow: "hidden",
        opacity: controls.opacity,
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;
