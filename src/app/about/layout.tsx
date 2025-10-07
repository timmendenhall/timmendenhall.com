import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Tim Mendenhall's Life",
    description: "Tim Mendenhall's Life -- A super short summary",
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div>{children}</div>;
}
