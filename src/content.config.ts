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

const kebabCaseTag = z
  .string()
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Tags must be lowercase kebab-case.");

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
    tags: z.array(kebabCaseTag),
    heroImage: z.string(),
    heroAlt: z.string(),
    themeColor,
    canonicalUrl: z.string(),
    recommendedPosts: z.array(postSlug),
    draft: z.boolean(),
  }),
});

export const collections = { posts };
