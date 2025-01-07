import { cn } from "@/lib/utils";
import AnimatedGradientText from "../ui/animated-gradient-text";
import { TextAnimate } from "../ui/text-animate";

export default function AboutSection() {
  return (
    <div className="min-h-screen my-12 py-18 md:my-24 md:py-32" id="aboutme">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-start gap-8 justify-between md:px-10">
          {/* Left Content */}
          <div className="flex-1 space-y-8 md:max-w-[50%]">
            <div className="space-y-4">
              <AnimatedGradientText className={"mx-0 mb-6 md:mb-12 mr-auto"}>
                <span
                  className={cn(
                    `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                  )}
                >
                  About
                </span>
              </AnimatedGradientText>
              <h1 className="font-lustria text-xl md:text-3xl leading-tight text-white">
                👋 Hey there! I am Arpit
              </h1>
              <TextAnimate
                animation="blurInUp"
                duration={2}
                by="word"
                segmentClassName="font-lustria text-xl md:text-3xl leading-tight text-white"
                className="font-lustria mb-6 text-left md:text-start"
              >
                UI/UX Designer with 3 years of experience in building accessible
                and functional designs. Skilled in FIGMA.
              </TextAnimate>
            </div>
          </div>

          <div className="relative max-w-[400px] aspect-square overflow-hidden rounded-3xl">
            <img
              src="/arpit-ydv.jpeg"
              alt="arpit-yadav"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-12 grid gap-6 xs:grid-cols-1 md:grid-cols-3">
          <div className="p-6">
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-muted-foreground">
                Years experience
              </h3>
              <p className="text-3xl font-bold">3</p>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-muted-foreground">
                Projects completed
              </h3>
              <p className="text-3xl font-bold">5</p>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-muted-foreground">
                Industries served
              </h3>
              <p className="text-3xl font-bold">3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
