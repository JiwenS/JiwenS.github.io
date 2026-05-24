import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const themeColor = z.enum([
  "olive",
  "dust-blue",
  "clay",
  "pale-gold",
  "sage",
  "plum-gray",
  "oxide",
  "slate-teal",
]);

const approvedPostTags = ["notes", "clearing", "settlement", "ipo"] as const;

const postTag = z.enum(approvedPostTags, {
  errorMap: () => ({
    message:
      "Tags must come from the approved tag library. Add a new tag only after HITL approval.",
  }),
});

const postSlug = z
  .string()
  .regex(
    /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
    "Recommended posts must use kebab-case slugs.",
  );

const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    subtitle: z.string().min(1),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    tags: z.array(postTag).min(1),
    heroImage: z.string(),
    heroAlt: z.string(),
    themeColor,
    canonicalUrl: z.string(),
    recommendedPosts: z.array(postSlug),
    draft: z.boolean(),
  }),
});

export const collections = { posts };
