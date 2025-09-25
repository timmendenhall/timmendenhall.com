import Link from 'next/link';
import { getAllPosts } from '@/data/Post';

export default async function Posts() {
    const posts = await getAllPosts();

    return (
        <div className="mt-44 text-center">
            <h1 className="mb-10 text-6xl">Posts</h1>
            <div>
                {posts.map((post) => (
                    <Link key={post.slug} href={`/posts/${post.slug}`}>
                        {post.title}
                    </Link>
                ))}
            </div>
        </div>
    );
}
