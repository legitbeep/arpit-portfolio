"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AnimatedDiv from "../AnimatedDiv";
import { TextAnimate } from "../ui/text-animate";
import { BentoCard, BentoGrid } from "../ui/bento-grid";
import { BellIcon } from "lucide-react";

const Projects = ({ posts, loading }) => {
  const router = useRouter();
  const onViewProject = (id) => {
    router.push(`/project/${id}`);
  };
  const projects = posts?.map((post, index) => ({
    Icon: () => <></>,
    name: post?.title,
    description: post?.description,
    href: `/project/${post?.id}`,
    cta: "Know more",
    className:
      index % 3 ? "col-span-3 lg:col-span-2" : "col-span-3 lg:col-span-1",
    background: post?.cover?.includes(".mp4") ? (
      <div className="relative max-h-[100px] md:max-h-[250px]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover pointer-events-none opacity-40"
          src={post?.cover}
        >
          <source src={post?.cover} type="video/mp4" />
        </video>
      </div>
    ) : (
      <Image
        src={post?.cover}
        alt={post?.title}
        layout="fill"
        objectFit="cover"
        className="rounded-lg filter opacity-15"
      />
    ),
  }));
  console.log({ projects });

  return (
    <div id="projects">
      <TextAnimate
        segmentClassName={
          "font-lustria text-2xl md:text-6xl leading-tight text-white"
        }
        className="mt-20 w-full mb-6 text-center md:text-center"
      >
        Explore My Projects
      </TextAnimate>

      <p className="font-satoshi text-gray-200 text-xs md:text-lg mt-2 mb-20 text-center mx-auto md:text-center md:max-w-[500px]">
        Blend of innovative thinking and practical solutions, ensuring they are
        both unique and effective.
      </p>
      <BentoGrid>
        {loading ? (
          <>Loading...</>
        ) : (
          projects?.map((project, idx) => <BentoCard key={idx} {...project} />)
        )}
      </BentoGrid>
    </div>
  );
};

export default Projects;
