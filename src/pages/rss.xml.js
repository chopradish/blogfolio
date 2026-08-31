import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import personal from "../content/personal.json";

export async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    title: personal.site.name,
    description: personal.site.description,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.id}/`,
    })),
  });
}
