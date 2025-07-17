import { About, Footer, NavBar, Resume, Welcome } from '@/components';
import { ubuntuSans } from '@/font';

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-black text-center text-white">
            <NavBar />
            <main
                className={`${ubuntuSans.className} xs:text-sm w-full md:text-2xl`}
            >
                <Welcome />
                <About />
                <Resume />
                <Footer />
            </main>
        </div>
    );
}
