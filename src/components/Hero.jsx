import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";
import { DownloadIcon } from "@chakra-ui/icons";

const Hero = () => {
  const onResumeClick = () => {
    window.open("/arpit-resume.pdf");
  };
  return (
    // py-0 pb-12 md:py-32
    <>
      <div className="min-h-[90vh] grid grid-cols-1 md:grid-cols-10 md:gap-32 gap-12 justify-between items-center mb-20">
        <div className="md:col-span-7">
          <h1 className="heading-text">
            Hi !👋 I&apos;m passionate about creating DIGITAL EXPERIENCES.
          </h1>
          <h2 className="sub-heading-text mt-10" style={{ color: "white" }}>
            Influenced by the elegance of minimalism in design and take cues
            from my surroundings. My passion lies in building empathy,
            prototyping concepts, and iterating for the solution. I like
            creating interactive, useful and delightful user experience.
          </h2>
          <div className="gap-4 flex-wrap hidden md:flex">
            <CustomButton
              sx={{ padding: "0" }}
              className="flex gap-2 items-center p-0 mt-10"
              onClick={onResumeClick}
            >
              Resume <DownloadIcon />
            </CustomButton>
          </div>
        </div>
        <div className="flex justify-center md:col-span-3">
          <Image
            height={400}
            width={400}
            alt="avatar"
            className="h-[250px] w-[250px] rounded object-contain grayscale"
            src="/arpit.png"
          />
        </div>
        <div className="gap-4 flex-wrap flex md:hidden ">
          <CustomButton
            className="flex gap-2 items-center mt-10"
            sx={{ padding: "0" }}
            onClick={onResumeClick}
          >
            Resume <DownloadIcon />
          </CustomButton>
        </div>
      </div>
    </>
  );
};

export default Hero;
