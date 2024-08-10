import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <p>This is the home page.</p>
      <nav>
        <ul>
          <li>
            <Link href="/deals">Deals</Link>
          </li>
          <li>
            <Link href="/best-sellers">Best Sellers</Link>
          </li>
          <li>
            <Link href="/bulk-savings">Bulk Savings</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
