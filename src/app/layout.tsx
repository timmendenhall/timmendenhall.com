import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ubuntuSans } from '@/font';
import { Footer, NavBar } from '@/components';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Tim Mendenhall - Full-stack Web Developer',
    description: "Tim Mendenhall's portfolio and blog site.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="overflow-x-hidden scroll-smooth">
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Tim Mendenhall</title>
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased ${ubuntuSans.className} xs:text-sm overflow-x-hidden bg-black text-white md:text-2xl`}
            >
                <div className="flex min-h-screen flex-col">
                    <NavBar />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
}
