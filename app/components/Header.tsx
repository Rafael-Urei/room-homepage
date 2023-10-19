import Link from "next/link";
import { Logo } from "./Icons";

export default function Header() {
  return (
    <header className="fixed w-full h-28 px-14 flex gap-8 items-center bg-black">
      <Link href="#header">
        <Logo />
      </Link>
      <nav>
        <ul className="flex gap-6 text-white">
          <li>
            <Link href="#">home</Link>
          </li>
          <li>
            <Link href="#">shop</Link>
          </li>
          <li>
            <Link href="#">about</Link>
          </li>
          <li>
            <Link href="#">contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
