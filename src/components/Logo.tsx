import { Link } from 'react-router-dom';
import logo from '../../public/images/image.png'; // Update with the correct path

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <Link
      to="/"
      className={`flex items-center gap-3 ${className}`}
      aria-label="Primrose Hill Painters — Home"
    >
      <img
        src={logo}
        alt="Primrose Hill Painters"
        className="w-auto h-20"
      />
    </Link>
  );
}
