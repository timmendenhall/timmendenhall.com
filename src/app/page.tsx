import { About, Footer, Resume, Welcome } from '@/components';
import { Work } from '@/components/Work';
import { ubuntuSans } from '@/font';

export default function Home() {
    return (
        <main
            className={`${ubuntuSans.className} xs:text-sm flex min-h-screen flex-1 flex-col items-center justify-center bg-black text-center text-white md:text-2xl`}
        >
            <Welcome />
            <About />
            <Work />
            <Resume />
            <Footer />
        </main>
    );
}
