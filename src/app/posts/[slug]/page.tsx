import { getPostBySlug } from '@/data/Post';

export type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    const title = post?.title ? `${post.title} | Tim Mendenhall` : '';

    return {
        title,
        description: post?.content,
    };
}

export default async function Post({ params }: Props) {
    const { slug } = await params;

    const post = await getPostBySlug(slug);

    if (!post) {
        return (
            <div className="mt-44 text-center">
                <main>
                    <h1>Post Not Found</h1>
                </main>
            </div>
        );
    }

    return (
        <div className="mt-44 text-center">
            <h1 className="text-6xl">{post.title}</h1>
            <p className="mt-10">
                Posted on: {new Date(post.date).toLocaleDateString()}
            </p>
            <p className="mt-10">{post.content}</p>
        </div>
    );
}
