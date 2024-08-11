import { Header, Footer } from '@myorg/components';
import Cache from './cache';

type PageProps = {
  params: {
    slug: string;
    catId: string;
  };
};

export default function DynamicPage({ params }: PageProps) {
  console.log('==params==', params);
  const { slug, catId } = params;

  return (
    <div>
      <Header title='这是头部' />
      <h1>Dynamic Page</h1>
      <p>Slug: {slug}</p>
      <p>Category ID: {catId}</p>
      <pre>
        {JSON.stringify(params)}
      </pre>

      <Cache />
      <Footer />
    </div>
  );
}

