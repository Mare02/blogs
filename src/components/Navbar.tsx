import Link from 'next/link';
import { Button } from './ui/button';

export default function NavbarComponent() {

  return (
    <div>
      <div className="h-16"></div>
      <nav className="fixed flex items-center justify-between px-4 lg:px-10 top-0 left-0 right-0 h-16 bg-white border-b border-gray-300 z-50">
        <div>
          <Link href="/">
            <h1 className="text-2xl font-extrabold">Devinarium</h1>
          </Link>
        </div>
        <div>
          <Link href="/auth/login">
            <Button variant="secondary">Login</Button>
          </Link>
        </div>
      </nav>
    </div>
  )
}