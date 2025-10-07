import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Tim Mendenhall's Resume",
    description:
        "Tim Mendenhall's Resume -- Check out where I've worked previously or hire me and add your company to this list! :)",
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="bg-linear-to-br from-neutral-700 to-neutral-950">
            {children}
        </div>
    );
}
