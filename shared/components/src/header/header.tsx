import './header.css';

export default function Header({ title }:  {title: string} ) {
  return (
    <div className="header">
      <div className='header-inner'>这是公共头部位置 {title}</div>
    </div>
  );
}
