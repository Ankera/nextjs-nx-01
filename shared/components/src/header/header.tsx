export default function Header({ title }:  {title: string} ) {
  return (
    <div>
      <h1>这是公共头部位置 {title}</h1>
    </div>
  );
}
