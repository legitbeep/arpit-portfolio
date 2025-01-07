"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import AnimatedGradientText from "../ui/animated-gradient-text";
import { cn } from "@/lib/utils";
import { TextAnimate } from "../ui/text-animate";
import { RainbowButton } from "../ui/rainbow-button";
import Particles from "../ui/particles";

const HeroSection = () => {
  const onResumeClick = () => {
    window.open("/arpit-resume.pdf");
  };
  const onBookClick = () => {
    window.open("https://calendly.com/d/crcv-2zb-3pp/30-minute-meeting");
  };
  return (
    <>
      <div className="mt-20">
        <div className="grid md:grid-cols-2 gap-2 items-center justify-between">
          <div>
            <AnimatedGradientText className={"mb-4 mx-auto md:mx-0 md:mr-auto"}>
              🎨 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
              <span
                className={cn(
                  `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                )}
              >
                UI/UX Designer
              </span>
            </AnimatedGradientText>

            <TextAnimate
              animation="blurInUp"
              duration={2}
              by="word"
              segmentClassName={
                "font-lustria text-3xl md:text-6xl leading-tight text-white"
              }
              className="font-lustria text-3xl md:text-6xl leading-tight mb-6 text-center md:text-start"
            >
              Building accessible and functional designs.
            </TextAnimate>
            <div className="flex gap-4 justify-center md:justify-start">
              <RainbowButton
                onClick={onBookClick}
                className={"text-slate-800 px-4"}
                speed="3s"
              >
                Schedule Call
              </RainbowButton>
              <Button
                variant="outline"
                className="py-2 px-4 h-11"
                onClick={onResumeClick}
              >
                Resume
              </Button>
            </div>
            <div
              className="w-100 bg-gray-700 my-8"
              style={{ height: "1px" }}
            ></div>

            <p className="font-satoshi text-gray-200 mt-4 mb-12 text-center md:text-start">
              Helping startups and brands to craft expressive and engaging
              solutions for their software needs.
            </p>
          </div>

          <div className="w-full flex justify-end items-center">
            <div className="relative w-full max-w-[400px] max-h-[400px] md:w-[400px] md:h-[400px] rounded-2xl overflow-hidden">
              {/* <img
                src="/hero-img.png"
                alt="Designer"
                className="w-full h-full object-cover rounded-2xl"
              /> */}
              {/* video on loop without any controls and pointer events from /hero-vid.mp4 url */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-2xl"
              >
                <source src="/hero-vid.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
