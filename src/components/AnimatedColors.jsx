"use_client";
import React from "react";
import { motion } from "framer-motion";

const AnimatedColors = () => {
  const colors = ["#ee7752", "#e73c7e", "#23a6d5", "#23d5ab"]; // Array of colors
  const animationDuration = 10; // Duration in seconds

  const generateGradient = () => {
    const colorStops = colors.map((color, index) => {
      const percentage = `${(index * 100) / (colors.length - 1)}%`;
      return `${color} ${percentage}`;
    });
    return `linear-gradient(45deg, ${colorStops.join(", ")})`;
  };

  return (
    <motion.div
      style={{
        width: 35,
        height: 35,
        borderRadius: "50%",
        background: generateGradient(),
        backgroundSize: "400% 400%",
        animation: `gradientAnimation ${animationDuration}s ease infinite`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "18px",
        fontWeight: "bold",
      }}
    >
      A
    </motion.div>
  );
};

export default AnimatedColors;
