// NOTE: This SEO Thing Done BY GEMINI I DONOT KNOW
import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

// Using your actual domain with HTTPS
const BASE_URL = 'https://ukashaanwerali.dev';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Core static routes
  const routes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  // Helper function to extract slugs from the root content folder
  const getSlugsFromContent = (subFolder: 'posts' | 'projects') => {
    const slugList: string[] = [];
    try {
      // Anchors to your root 'content/posts' or 'content/projects' directory
      const targetDirectory = path.join(process.cwd(), 'content', subFolder);

      if (fs.existsSync(targetDirectory)) {
        const files = fs.readdirSync(targetDirectory);

        files.forEach((file) => {
          // Process only markdown/mdx files and ignore hidden system files (like .DS_Store)
          if (file.endsWith('.md') || file.endsWith('.mdx')) {
            // Strip the file extension to get the raw URL slug
            const slug = file.replace(/\.mdx?$/, '');
            slugList.push(slug);
          }
        });
      }
    } catch (error) {
      console.error(`Error reading content/${subFolder} for sitemap:`, error);
    }
    return slugList;
  };

  // 2. Inject Dynamic Blog Post Slugs
  const postSlugs = getSlugsFromContent('posts');
  postSlugs.forEach((slug) => {
    routes.push({
      url: `${BASE_URL}/posts/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },);
  });

  // 3. Inject Dynamic Project Slugs
  const projectSlugs = getSlugsFromContent('projects');
  projectSlugs.forEach((slug) => {
    routes.push({
      url: `${BASE_URL}/projects/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },);
  });

  return routes;
}
