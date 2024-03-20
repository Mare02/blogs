import Link from 'next/link';
import { Button } from './ui/button';

export default function NavbarComponent(props: { brandOnly?: boolean, static?: boolean }) {

  return (
    <div>
      <div className={`${props.brandOnly || props.static ? "hidden" : ""} h-16`}></div>
      <nav className={`
        ${props.brandOnly ? "" : "border-b border-gray-300"}
        ${props.static ? "" : "fixed"} flex items-center justify-between px-4 lg:px-10 top-0 left-0 right-0 h-16 bg-white z-50`}>
        <div>
          <Link href="/">
            <h1 className="text-2xl font-extrabold">Devinarium</h1>
          </Link>
        </div>
        <div className={props.brandOnly ? "hidden" : ""}>
          <Link href="/auth/login">
            <Button variant="secondary">Log in</Button>
          </Link>
        </div>
      </nav>
    </div>
  )
}