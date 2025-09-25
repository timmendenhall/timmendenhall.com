import { promises as fs } from 'fs';
import path from 'node:path';

export interface PostMeta {
    slug: string;
    title: string;
    description: string;
    date: number;
    md: string;
}

const postsDir = path.resolve('src', 'data', 'posts');

export const getAllPostsMeta = async (): Promise<PostMeta[]> => {
    try {
        const files = await fs.readdir(postsDir);

        const posts = [];

        for (const file of files) {
            const filePath = `./posts/${file}`;
            // console.log('filepath ', filePath);
            const postScript = await import(filePath);
            posts.push(postScript.default());
        }

        return posts;
    } catch (error) {
        console.error('getAllPostsMeta - Error:', error);
        return [];
    }
};

export const getPostMetaBySlug = async (
    slug: string,
): Promise<PostMeta | null> => {
    const slugWithExt = slug + '.js';
    try {
        const files = await fs.readdir(postsDir);
        let foundFile;

        for (const file of files) {
            const [, fileSlug] = file.split('_');
            if (fileSlug === slugWithExt) {
                foundFile = file;
                break;
            }
        }

        if (!foundFile) {
            return null;
        }

        const filePath = `./posts/${foundFile}`;
        const postScript = await import(filePath);

        return postScript.default() as PostMeta;
    } catch (error) {
        console.error('getPostBySlug - Error:', error);
        return null;
    }
};
