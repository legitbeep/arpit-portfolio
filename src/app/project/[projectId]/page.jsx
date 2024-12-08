"use client";
import { fetchPostData } from "@/api/server";
import { Skeleton } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import styles from "./styles.module.css";

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
    window.scrollTo(0, 0);
    initFetch();
  }, []);

  return (
    <>
      {loading ? (
        <main className="p-12 flex flex-col gap-10">
          <Skeleton height="250px" width="100%" />
          <Skeleton height="250px" width="100%" />
          <Skeleton height="250px" width="100%" />
        </main>
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
