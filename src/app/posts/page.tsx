import Link from 'next/link';
import { getAllPosts } from '@/data/Post';

export default async function Posts() {
    const posts = await getAllPosts();

    return (
        <div className="mt-44 text-center">
            <h1 className="mb-10 text-6xl">Posts</h1>
            <div className="flex flex-col items-center justify-center">
                {posts.map((post) => (
                    <Link
                        href={`/posts/${post.slug}`}
                        key={post.slug}
                        className="flex flex-row gap-x-5"
                    >
                        <div>{new Date(post.date).toLocaleDateString()}</div>
                        <div>{post.title}</div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
