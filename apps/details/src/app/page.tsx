import Link from 'next/link';

export default function Details() {
  return (
    <div>
      <h1>Welcome to Details Page</h1>
      <p>
        This is the details page.
      </p>
      <Link href="http://localhost:3000">
          Go to Home Page
      </Link>
    </div>
  );
}
