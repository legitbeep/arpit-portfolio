"use client";
import React from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import AnimatedDiv from "./AnimatedDiv";
import Image from "next/image";

const Projects = ({ posts, loading }) => {
  const router = useRouter();
  const onViewProject = (id) => {
    router.push(`/project/${id}`);
  };

  return (
    <>
      <h2
        style={{
          textAlign: "start",
          fontSize: "2rem",
          marginBottom: "2rem",
          width: "100%",
        }}
      >
        {"Projects --->"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {loading ? (
          <>
            {[1, 2, 3, 4].map((_, i) => (
              <Skeleton key={i} height="200px" width="200px" />
            ))}
          </>
        ) : (
          posts?.map((post, idx) => (
            <AnimatedDiv key={idx}>
              <div
                className="project-details w-full cursor-pointer flex flex-col items-end"
                role="button"
                onClick={() => onViewProject(post.id)}
              >
                {post.cover && (
                  <Image
                    src={post.cover}
                    alt="cover-img"
                    style={{
                      width: "100%",
                      objectFit: "contain",
                      marginBottom: "1rem",
                      aspectRatio: "1/1",
                      objectFit: "cover",
                    }}
                    height={800}
                    width={1200}
                    className="dark-bg max-h-[300px] opacity-70 hover:opacity-100"
                  />
                )}
                <span className="secondary-text">
                  {
                    // format date from yyyy-mm-dd to dd mmm yy format
                    new Date(post?.date).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "short",
                      year: "2-digit",
                    })
                  }
                </span>
                <h2>{post.title}</h2>
                {post.tags?.length && (
                  <div className="flex gap-4 flex-wrap">
                    {post.tags.map((tag, idx) => (
                      <span key={idx} className="tags text-white">
                        {tag?.name}
                      </span>
                    ))}
                  </div>
                )}
                {/* <span>{post.description}</span> */}
                {/* <p>View</p> */}
              </div>
            </AnimatedDiv>
          ))
        )}
      </div>
    </>
  );
};

export default Projects;
