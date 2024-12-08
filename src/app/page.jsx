"use client";
import { fetchProjectsData } from "@/api/server";
import AnimatedDiv from "@/components/AnimatedDiv";
import Hero from "@/components/home/hero-section";
import Projects from "@/components/home/project-section";
import ToolsSection from "@/components/home/tools-section";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const initFetch = async () => {
    try {
      setLoading(true);
      const data = await fetchProjectsData();
      setPosts(data?.projects);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    initFetch();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-12 pt-4 max-w-[1200px] mx-auto">
      <AnimatedDiv>
        <Hero />
      </AnimatedDiv>
      <AnimatedDiv>
        <ToolsSection />
      </AnimatedDiv>
      <Projects posts={posts} loading={loading} />
    </main>
  );
}
