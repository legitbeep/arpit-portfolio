"use client";
import Link from "next/link";
import { Button } from "../ui/button";

const HeroSection = () => {
  const onResumeClick = () => {
    window.open("/arpit-resume.pdf");
  };
  const onBookClick = () => {
    window.open("https://calendly.com/d/crcv-2zb-3pp/30-minute-meeting");
  };
  return (
    <div className="mt-20">
      <div className="grid md:grid-cols-2 gap-2 items-center justify-between">
        <div>
          <div className=" mb-6 flex justify-center md:justify-start">
            <div className="rounded-2xl border border-gray-600 flex items-center space-x-2 p-1 px-4 max-w-max">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <span className="text-gray-200 font-satoshi">UI/UX Designer</span>
            </div>
          </div>

          <h1 className="font-lustria text-3xl md:text-6xl leading-tight mb-6 text-center md:text-start">
            Building accessible and functional designs.
          </h1>
          <div className="flex gap-4 justify-center md:justify-start">
            <Button variant="default" onClick={onBookClick}>
              Book a Call
            </Button>
            <Button variant="outline" onClick={onResumeClick}>
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
            <img
              src="/arpit-ydv.jpeg"
              alt="Designer"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
