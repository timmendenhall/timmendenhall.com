import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Tim Mendenhall's Blog Posts",
    description:
        "Tim Mendenhall's Blog Posts -- The rantings and ravings of a software engineer.",
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div>{children}</div>;
}
