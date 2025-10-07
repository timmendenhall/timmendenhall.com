import Link from 'next/link';
import { getAllPostsMeta } from '@/data/Post';
import { Work } from '@/components/Work';

export default async function WorkPage() {
    return <Work />;
}
