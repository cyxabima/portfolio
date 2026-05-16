// NOTE: This SEO Thing Done BY GEMINI I DONOT KNOW
import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

// Change this to your live deployed production domain
const BASE_URL = 'http://ukashaanwerali.dev';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Static Core Routes based on your file tree
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

  // 2. Generate Dynamic Post URLs
  try {
    const postsDirectory = path.join(process.cwd(), 'app/posts');
    if (fs.existsSync(postsDirectory)) {
      const postFolders = fs.readdirSync(postsDirectory);

      postFolders.forEach((folder) => {
        if (!folder.startsWith('.') && fs.lstatSync(path.join(postsDirectory, folder)).isDirectory()) {
          routes.push({
            url: `${BASE_URL}/posts/${folder}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
          });
        }
      });
    }
  } catch (error) {
    console.error('Error parsing posts directory for sitemap:', error);
  }

  // 3. Generate Dynamic Project URLs
  try {
    const projectsDirectory = path.join(process.cwd(), 'app/projects');
    if (fs.existsSync(projectsDirectory)) {
      const projectFolders = fs.readdirSync(projectsDirectory);

      projectFolders.forEach((folder) => {
        if (!folder.startsWith('.') && fs.lstatSync(path.join(projectsDirectory, folder)).isDirectory()) {
          routes.push({
            url: `${BASE_URL}/projects/${folder}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
          });
        }
      });
    }
  } catch (error) {
    console.error('Error parsing projects directory for sitemap:', error);
  }

  return routes;
}
