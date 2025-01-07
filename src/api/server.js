// export default async function handler(req, res) {
//   const notionService = new NotionService();
//   const posts = await notionService.getAllPosts();
//   console.log({ posts });

//   return res.status(200).json({ posts });
// }

"use server";

import NotionService from "@/services/notion-service";
import projectsData from "../data/projects.json";

export async function fetchProjectsData() {
  try {
    // Directly return the imported JSON data
    return projectsData;
  } catch (error) {
    console.error("Error fetching projects data:", error);
    return null;
  }
}

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
    const notionService = new NotionService();
    const data = await notionService.getPostById(id);
    return data;
  } catch (error) {
    console.log({ error });
    return null;
  }
};
