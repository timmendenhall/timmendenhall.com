import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'TODO: Blog title',
    description: 'TODO: Blog description',
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div>{children}</div>;
}
