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
    // navigate to /project/[id]
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {loading
          ? [1, 2, 3].map((_, i) => (
              <div key={i} className="w-full">
                <Skeleton key={i} height="150px" width="100%" />
              </div>
            ))
          : posts?.map((post, idx) => (
              <AnimatedDiv key={idx}>
                <div
                  className="project-details w-full opacity-70 hover:opacity-100 cursor-pointer flex flex-col"
                  role="button"
                  onClick={() => onViewProject(post.id)}
                >
                  {post.cover && (
                    <img
                      src={post.cover}
                      alt="cover-img"
                      style={{
                        width: "100%",
                        objectFit: "contain",
                        marginBottom: "1rem",
                      }}
                      className="dark-bg"
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
                        <span key={idx} className="tags">
                          {tag?.name}
                        </span>
                      ))}
                    </div>
                  )}
                  {/* <span>{post.description}</span> */}
                  {/* <p>View</p> */}
                </div>
              </AnimatedDiv>
            ))}
      </div>
    </>
  );
};

export default Projects;
