import { getCollection, type CollectionEntry } from "astro:content";
import { getReadingTimeMinutes } from "./reading-time";

export type Post = CollectionEntry<"posts">;

export type PostWithReadingTime = Post & {
  readingTimeMinutes: number;
};

export function isPublishedPost(post: Post): boolean {
  return post.data.draft !== true;
}

export function sortPostsByPublishedAtDesc(posts: Post[]): Post[] {
  return [...posts].sort(
    (a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime(),
  );
}

export function withReadingTime(post: Post): PostWithReadingTime {
  return {
    ...post,
    readingTimeMinutes: getReadingTimeMinutes(post.body ?? ""),
  };
}

export async function getPublishedPosts(): Promise<PostWithReadingTime[]> {
  const posts = await getCollection("posts", isPublishedPost);
  return sortPostsByPublishedAtDesc(posts).map(withReadingTime);
}

export function getAdjacentPosts(posts: PostWithReadingTime[], currentId: string) {
  const index = posts.findIndex((post) => post.id === currentId);

  return {
    previousPost: index >= 0 ? posts[index + 1] : undefined,
    nextPost: index > 0 ? posts[index - 1] : undefined,
  };
}

