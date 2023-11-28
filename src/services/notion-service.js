import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

export default class NotionService {
  client;
  n2m;
  database;

  constructor() {
    this.client = new Client({
      auth: process.env.NEXT_PUBLIC_NOTION_ACCESS_TOKEN,
    });
    this.n2m = new NotionToMarkdown({ notionClient: this.client });
    this.database = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID ?? "";
  }

  async getAllPosts() {
    const response = await this.client.databases.query({
      database_id: this.database,
      sorts: [
        {
          property: "Date",
          direction: "descending",
        },
      ],
    });

    return response.results.map((res) => {
      return NotionService.pageToPostTransformer(res);
    });
  }

  async getPostById(id) {
    let post, markdown;

    const response = await this.client.databases.query({
      database_id: this.database,
      filter: {
        property: "id",
        formula: {
          text: {
            equals: id,
          },
          string: {
            equals: id,
          },
        },
      },
    });

    if (!response.results.length) {
      throw "No results found!";
    }

    const page = response.results[0];
    const mdBlocks = await this.n2m.pageToMarkdown(page.id);

    markdown = this.n2m.toMarkdownString(mdBlocks);
    post = NotionService.pageToPostTransformer(page);

    return {
      post,
      markdown,
    };
  }

  static pageToPostTransformer(page) {
    let cover = page.cover;
    switch (cover.type) {
      case "file":
        cover = cover.file.url;
        break;
      case "external":
        cover = cover.external.url;
        break;
      default:
        cover = "";
    }

    return {
      cover,
      title: page.properties.Name.title[0].plain_text,
      tags: page.properties["My Role"].multi_select,
      description: page.properties["Project Overview"].rich_text[0].plain_text,
      date: page.properties.Date.date.start,
      id: page.properties.id.formula.string,
    };
  }
}
