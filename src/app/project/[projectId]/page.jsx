import { fetchPostData } from "@/api/server";
import ReactMarkdown from "react-markdown";
import styles from "./styles.module.css";

const Page = async ({ params }) => {
  const { projectId } = params;

  const postData = await fetchPostData(projectId);

  if (!postData) {
    return <div>No data found</div>;
  }

  return (
    <>
      <main className="px-6 py-12 md:p-12">
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
  );
};

export default Page;
