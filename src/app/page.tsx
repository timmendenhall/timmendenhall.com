import { About, Footer, Resume, Welcome } from '@/components';
import { ubuntuSans } from '@/font';

export default function Home() {
    return (
        <main
            className={`${ubuntuSans.className} xs:text-sm flex min-h-screen flex-1 flex-col items-center justify-center bg-black text-center text-white md:text-2xl`}
        >
            <Welcome />
            <About />
            <Resume />
            <Footer />
        </main>
    );
}
