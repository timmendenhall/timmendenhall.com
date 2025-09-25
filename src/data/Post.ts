import * as postModules from './posts';

type PostModule = {
    [key: string]: () => PostMeta;
};
const typedPostModules = postModules as PostModule;

export interface PostMeta {
    slug: string;
    title: string;
    description: string;
    date: number;
    md: string;
}

const postMetaMap: Map<string, PostMeta> = new Map<string, PostMeta>();
for (const key in postModules) {
    if (Object.prototype.hasOwnProperty.call(postModules, key)) {
        const meta: PostMeta = typedPostModules[key]();
        postMetaMap.set(meta.slug, meta);
    }
}

export const getAllPostsMeta = (): PostMeta[] => {
    return postMetaMap.values().toArray();
};

export const getPostMetaBySlug = (slug: string): PostMeta | undefined => {
    return postMetaMap.get(slug);
};
