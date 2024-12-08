"use client";

import { useEffect, useState, useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
} from "framer-motion";

const TOOLS_IMAGES = [
  `/tools/Figma.png`,
  `/tools/Framer.png`,
  `/tools/Hotjar.png`,
  `/tools/Notion.png`,
  `/tools/Relume.png`,
  `/tools/Webflow.png`,
];

export function AutoScrollImages({ images = TOOLS_IMAGES, speed = 10 }) {
  const [duplicatedImages, setDuplicatedImages] = useState([]);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const baseX = useMotionValue(0);
  const x = useTransform(baseX, (v) => `${v}px`);

  useEffect(() => {
    const updateContainerWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateContainerWidth();
    window.addEventListener("resize", updateContainerWidth);

    return () => window.removeEventListener("resize", updateContainerWidth);
  }, []);

  useEffect(() => {
    if (containerWidth === 0) return;

    const imageWidth = 200; // Adjust this value based on your image width
    const gap = 32; // Adjust this value based on your desired gap
    const totalWidth = images.length * (imageWidth + gap);
    const repeatCount = Math.ceil((containerWidth * 2) / totalWidth) + 1;

    setDuplicatedImages(Array(repeatCount).fill(images).flat());
  }, [images, containerWidth]);

  useAnimationFrame((_, delta) => {
    const moveBy = (speed * delta) / 1000;
    baseX.set(baseX.get() - moveBy);

    if (-baseX.get() >= containerWidth / 2) {
      baseX.set(0);
    }
  });

  return (
    <div className="w-full overflow-hidden relative" ref={containerRef}>
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black to-transparent z-10" />
      <motion.div className="flex gap-4 md:gap-[60px]" style={{ x }}>
        {duplicatedImages.map((src, index) => (
          <div key={index} className="flex-shrink-0 rounded-2xl">
            <img
              src={src}
              alt={`Scrolling image ${index + 1}`}
              width={200}
              height={100}
              className="w-auto h-20 object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
