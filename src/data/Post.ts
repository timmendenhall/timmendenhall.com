import { promises as fs } from 'fs';
import path from 'node:path';

export interface Post {
    slug: string;
    title: string;
    content: string;
    date: number;
}

const postsDir = path.resolve('src', 'data', 'posts');

export const getAllPosts = async (): Promise<Post[]> => {
    try {
        const files = await fs.readdir(postsDir);

        const posts = [];

        for (const file of files) {
            const contents = await fs.readFile(
                path.join(postsDir, file),
                'utf-8',
            );
            const post: Post = JSON.parse(contents);
            posts.push(post);
        }

        return posts;
    } catch (error) {
        console.error('getAllPosts - Error:', error);
        return [];
    }
};

export const getPostBySlug = async (slug: string): Promise<Post | null> => {
    const slugWithExt = slug + '.json';
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

        const contents = await fs.readFile(
            path.join(postsDir, foundFile),
            'utf-8',
        );

        return JSON.parse(contents) as Post;
    } catch (error) {
        console.error('getPostBySlug - Error:', error);
        return null;
    }
};
