import Link from 'next/link';

export default function PageTwo() {
  return (
    <div>
        <h1>Page Two</h1>
        <Link href="/"><a>Go back to home</a></Link>
    </div>
  );
}