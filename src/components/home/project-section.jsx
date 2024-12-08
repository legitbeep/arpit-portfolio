"use client";
import { Skeleton } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AnimatedDiv from "../AnimatedDiv";

const Projects = ({ posts, loading }) => {
  const router = useRouter();
  const onViewProject = (id) => {
    router.push(`/project/${id}`);
  };

  return (
    <div id="projects">
      <h2 className="mt-20 w-full font-lustria text-2xl md:text-6xl leading-tight mb-6 text-center md:text-left">
        Explore My Projects
      </h2>

      <p className="font-satoshi text-gray-200 text-xs md:text-lg mt-2 mb-20 text-center mx-auto md:text-left">
        Blend of innovative thinking and practical solutions, ensuring they are
        both unique and effective.
      </p>

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
                    className="dark-bg max-h-[300px] opacity-70 hover:opacity-100 rounded-3xl"
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
                <h2 className="font-satoshi text-2xl text-white text-end mb-4">
                  {post.title}
                </h2>
                {post.tags?.length && (
                  <div className="flex gap-y-2 gap-x-1 flex-wrap justify-end">
                    {post.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="font-satoshi text-sm text-gray-100 rounded-2xl border bg-gray-700 flex items-center space-x-2 p-1 px-4 max-w-max"
                      >
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
    </div>
  );
};

export default Projects;
