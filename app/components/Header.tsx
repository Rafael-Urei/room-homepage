import Link from "next/link";
import { Logo } from "./Icons";

export default function Header() {
  return (
    <header className="sticky">
      <Link href="#header">
        <Logo />
      </Link>
    </header>
  );
}
