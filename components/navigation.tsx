"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitch from "./themeSwitch";

interface INavRoute {
  name: string;
  href: string;
}
interface INavRouteList extends Array<INavRoute> {}

export default function Navigation() {
  const path = usePathname();

  const routesList: INavRouteList = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <nav>
      <ul className="flex items-center justify-end p-5 gap-x-32">
        {routesList.map((item: { name: string; href: string }, index) => (
          <li key={index} className="flex items-center justify-center">
            <div
              className={
                path === item.href
                  ? "bg-yellow-300 px-5 py-2 rounded-full"
                  : "px-5 py-2"
              }
            >
              <Link href={item.href}>{item.name}</Link>
            </div>
          </li>
        ))}
      </ul>
      <ThemeSwitch />
    </nav>
  );
}
