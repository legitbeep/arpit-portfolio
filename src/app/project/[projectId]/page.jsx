"use client";
import { fetchPostData } from "@/api/server";
import { Skeleton } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import styles from "./styles.module.css";

const renderers = {
  heading: ({ level, children }) => {
    const HeadingTag = `h${level}`;
    return (
      <HeadingTag style={{ fontWeight: "bold", marginBottom: "1rem" }}>
        {children}
      </HeadingTag>
    );
  },
  paragraph: ({ children }) => (
    <p style={{ marginBottom: "0.5rem" }}>{children}</p>
  ),
};

const Page = () => {
  // extract projectId from params
  const { projectId } = useParams();
  const [loading, setLoading] = useState(false);
  const [postData, setPostData] = useState(null);
  const initFetch = async () => {
    setLoading(true);
    const data = await fetchPostData(projectId);
    console.log({ data });
    setPostData(data);
    setLoading(false);
  };

  useEffect(() => {
    initFetch();
  }, []);

  return (
    <>
      {loading ? (
        <Skeleton height="150px" width="100%" />
      ) : (
        <>
          <main className="p-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center">
                <artcle className="prose">
                  <ReactMarkdown className={styles.reactMarkdown}>
                    {postData?.markdown?.parent ?? postData?.markdown}
                  </ReactMarkdown>
                </artcle>
              </div>
            </div>
          </main>
        </>
      )}
    </>
  );
};

export default Page;
