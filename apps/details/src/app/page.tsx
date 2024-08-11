import Link from 'next/link';
import { Header, Footer } from '@myorg/components';

export default function Details() {
  return (
    <div>
      <Header title="这是商品详情页公共头部" />

      <h1>Welcome to Details Page</h1>
      <p>
        This is the details page.
      </p>
      <Link href="http://localhost:3000">
          Go to Home Page
      </Link>

      <Footer />
    </div>
  );
}
