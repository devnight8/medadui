"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Navbar() {
  const PathName = usePathname()
  const navItems = [
    { id: 1, title: "خانه", href: "/" },
    { id: 2, title: "نمونه کارها", href: "#" },
    { id: 3, title: "دوره ها ", href: "/course" },
    { id: 4, title: "بلاگ", href: "/blog" },
    { id: 5, title: "تماس با ما", href: "#" },
    { id: 6, title: "درباره ما", href: "#" },
  ];
  return (
    <nav className="bg-gray-100 py-3 px-4 rounded-md hidden lg:block">
      <ul>
        <li className="flex items-center justify-between gap-8">

          {navItems.map((item) => {
            const isActive = PathName === item.href;
            return (
              <Link
                key={item.id}
                href={item.href}
                className={isActive ? "text-blue-600 font-bold" : "hover:text-blue-600 transition-all font-light"
                }
              >
                {item.title}

              </Link>
            );
          })}
        </li>
      </ul>
    </nav >
  );
}

export default Navbar;
