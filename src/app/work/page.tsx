import Link from 'next/link';
import { getAllPostsMeta } from '@/data/Post';
import { Work } from '@/components/Work';

export default async function WorkPage() {
    return (
        <div className="mt-44 text-center">
            <h1 className="mb-10 text-6xl">Work</h1>
            <Work />
        </div>
    );
}
