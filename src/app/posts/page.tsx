import Link from 'next/link';
import { getAllPostsMeta } from '@/data/Post';
import { PageContainer } from '@/components';

export default async function Posts() {
    const posts = await getAllPostsMeta();

    return (
        <PageContainer>
            <h1 className={`py-8 text-5xl font-bold`}>Posts</h1>
            <div className="flex flex-col border-2 border-black bg-stone-950/60 p-3">
                {posts.map((post) => (
                    <Link
                        href={`/posts/${post.slug}`}
                        key={post.slug}
                        className="flex flex-row items-center gap-x-5"
                    >
                        <div className="text-sm">
                            {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="font-bold">{post.title}</div>
                    </Link>
                ))}
            </div>
        </PageContainer>
    );
}
