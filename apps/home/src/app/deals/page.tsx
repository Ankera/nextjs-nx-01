import { Header, Footer } from '@myorg/components';
import Cache from './cache';

export default function Deals() {
  return (
    <div>
      <Header title="hello Deals" />
      <h1>Deals Page</h1>
      <p>Here are the best deals for you!</p>
      <Cache />
      <Footer />
    </div>
  );
}
