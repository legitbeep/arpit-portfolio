import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="min-h-xl flex flex-col md:flex-row md:gap-32 gap-12 justify-between items-center py-0 pb-12 md:py-32 border-b-2 border-white mb-20">
      <div>
        <h1 className="heading-text">
          Arpit Yadav is a UX + Interactive designer based in India.
        </h1>
      </div>
      <div>
        <img
          height={400}
          width={400}
          alt="avatar"
          className="h-[200px] w-[200px] rounded object-cover"
          src="https://uploads-ssl.webflow.com/616ba7730d9694e3d4325f7b/619ff9c183a33c30d2e528dd_IMG_5795%202-poster-00001.jpg"
        />
      </div>
    </div>
  );
};

export default Hero;
