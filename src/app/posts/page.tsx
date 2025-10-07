import Link from 'next/link';
import { getAllPostsMeta } from '@/data/Post';
import { PageContainer } from '@/components';

export default async function Posts() {
    const posts = await getAllPostsMeta();

    return (
        <PageContainer>
            <h1 className={`py-8 text-5xl`}>Posts</h1>
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
        </PageContainer>
    );
}
