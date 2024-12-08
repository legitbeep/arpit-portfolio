"use client";
import { AutoScrollImages } from "./auto-scroll-images";

const ToolsSection = () => {
  return (
    <div className="my-32">
      <p className="font-satoshi text-gray-500 text-center mb-10">
        Tools which I use on a daily basis.
      </p>
      <AutoScrollImages speed={10} />
    </div>
  );
};
export default ToolsSection;
