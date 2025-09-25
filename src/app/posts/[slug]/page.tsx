import markdownit from 'markdown-it';

import { getAllPostsMeta, getPostMetaBySlug } from '@/data/Post';

export type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const post = await getPostMetaBySlug(slug);
    const title = post ? `${post.title} | Tim Mendenhall` : 'Tim Mendenhall';

    return {
        title,
        description: post?.description,
    };
}

export async function generateStaticParams() {
    const posts = await getAllPostsMeta();

    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function Post({ params }: Props) {
    const { slug } = await params;
    const post = await getPostMetaBySlug(slug);

    if (!post) {
        return (
            <div className="mt-44 text-center">
                <main>
                    <h1>Post Not Found</h1>
                </main>
            </div>
        );
    }

    const md = markdownit();
    const content = md.render(post.md);

    return (
        <div className="flex flex-col items-center py-20">
            <h1 className="text-6xl">{post.title}</h1>
            <div className="mt-3">
                Posted on: {new Date(post.date).toLocaleDateString()}
            </div>
            <div
                className="prose prose-invert mt-10"
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </div>
    );
}
