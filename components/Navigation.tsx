'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

function formatSlug(slug: string) {
    const words = slug.split('-');

    const formattedWords = words.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      });
     const formattedSlug = formattedWords.join(' and ');

    return formattedSlug;
}

const Navigation = () => {
  const pathname = usePathname();
  const path = pathname.split("/").slice(-2);
  const displayName = formatSlug(path[1]);

  return (
    <nav className='flex py-4 text-sans text-sm text-gray-400'>
      <Link href="/">Homepage</Link>
      <div className='mx-4'>/</div> 
      <Link href={`/${path[1]}`}>{displayName}</Link>
    </nav>
  )
}

export default Navigation;