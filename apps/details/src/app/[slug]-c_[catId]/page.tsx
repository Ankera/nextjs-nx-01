export default function DynamicPage({ slug, catId }: { slug: string, catId: string }) {

  return (
    <div>
      <h1>Hello, this is the page for {slug} with category ID {catId}</h1>
    </div>
  );
}
