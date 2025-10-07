import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Tim Mendenhall's Previous Work",
    description:
        "Tim Mendenhall's Previous Work -- Check out what I have done previously",
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-1 flex-col bg-linear-to-br from-slate-700 to-slate-950 bg-cover">
            {children}
        </div>
    );
}
