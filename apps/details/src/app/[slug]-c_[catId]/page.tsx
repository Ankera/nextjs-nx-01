type PageProps = {
  params: {
    slug: string;
    catId: string;
  };
};

export default function DynamicPage({ params }: PageProps) {
  const { slug, catId } = params;

  return (
    <div>
      <h1>Dynamic Page</h1>
      <p>Slug: {slug}</p>
      <p>Category ID: {catId}</p>
    </div>
  );
}

