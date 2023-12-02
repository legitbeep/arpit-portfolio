// export default async function handler(req, res) {
//   const notionService = new NotionService();
//   const posts = await notionService.getAllPosts();
//   console.log({ posts });

//   return res.status(200).json({ posts });
// }

"use server";

import NotionService from "@/services/notion-service";

let cache = {
  posts: null,
  timestamp: {},
};

export const fetchPosts = async () => {
  try {
    if (!cache.posts || Date.now() - cache.timestamp.posts > 30 * 60 * 1000) {
      const notionService = new NotionService();
      const posts = await notionService.getAllPosts();
      cache.posts = posts;
      cache.timestamp.posts = Date.now();
    }
    return {
      posts: cache.posts,
    };
  } catch (error) {
    console.log({ error });
    cache.posts = null;
    cache.timestamp.posts = null;
    return {
      posts: [],
    };
  }
};

export const fetchPostData = async (id) => {
  try {
    if (!cache[id] || Date.now() - cache.timestamp[id] > 30 * 60 * 1000) {
      const notionService = new NotionService();
      const data = await notionService.getPostById(id);
      cache[id] = data;
      cache.timestamp[id] = Date.now();
    }
    return cache[id];
  } catch (error) {
    console.log({ error });
    cache[id] = null;
    cache.timestamp[id] = null;
    return null;
  }
};
