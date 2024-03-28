"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  return (
    <nav>
      <ul>
        {[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
          { name: "Skills", href: "/skills" },
          { name: "Projects", href: "/projects" },
        ].map((item: { name: string; href: string }, index) => (
          <li key={index}>
            <Link href={item.href}>{item.name}</Link>{" "}
            {path === "item.href" ? "🔥" : ""}
          </li>
        ))}
      </ul>
    </nav>
  );
}
