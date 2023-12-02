"use client";
import { fetchPosts } from "@/api/server";
import AnimatedDiv from "@/components/AnimatedDiv";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { Skeleton } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const initFetch = async () => {
    try {
      setLoading(true);
      const data = await fetchPosts();
      setPosts(data?.posts);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    initFetch();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 pt-4">
      <AnimatedDiv>
        <Hero />
      </AnimatedDiv>
      <Projects posts={posts} loading={loading} />
    </main>
  );
}
