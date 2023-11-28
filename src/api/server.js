// export default async function handler(req, res) {
//   const notionService = new NotionService();
//   const posts = await notionService.getAllPosts();
//   console.log({ posts });

//   return res.status(200).json({ posts });
// }

"use server";

import NotionService from "@/services/notion-service";

export const fetchPosts = async () => {
  try {
    const notionService = new NotionService();
    const posts = await notionService.getAllPosts();
    return {
      posts,
    };
  } catch (error) {
    return {
      posts: [],
    };
  }
};

export const fetchPostData = async (id) => {
  try {
    const notionService = new NotionService();
    const data = await notionService.getPostById(id);
    return data;
  } catch (error) {
    return null;
  }
};
